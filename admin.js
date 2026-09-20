/* Admin panel: loaded on demand (see loadAdminModule in app.js). Judges who never open Admin never download or parse this file. */
/* ---------------- Admin ---------------- */

async function drawAdminPanel(){
  if (!$('adminSummary').children.length) $('adminSummary').innerHTML = Array.from({length:5}).map(() => `<div class="skel skel-stat"></div>`).join('');
  renderAdminLiveBanner();
  drawAdminJudges();
  await drawAdminTeams();
  drawAdminScores();
  drawFullScoreboard();
  drawLiveTeamSelect();
  await loadAdminSettings();
  drawCriteria();
  drawActivityFeed();
  loadAboutContent();
  await drawAdminSummary();
  drawPipelineOverview();
  drawConsistencyRadar();
  drawCoverageGrid();
  setTimeout(positionAdminNavLine, 60);
}

// Teams down, judges across — admin currently had to scan the raw "All scores" table
// for gaps during a live event. This is a pure read of data already fetched elsewhere
// (admin_list_judges/admin_list_scores), no new RPC.
async function drawCoverageGrid(){
  const el = $('coverageGrid');
  if (!el) return;
  el.innerHTML = `<div class="empty-illus" style="padding:20px;"><p>Loading…</p></div>`;
  const [{ data: judgesData }, { data: scoresData }] = await Promise.all([
    rpc('admin_list_judges', { admin_code: judge.code }, { silent: true }),
    rpc('admin_list_scores', { admin_code: judge.code }, { silent: true }),
  ]);
  // Not filtered by admin flag — an admin who is also actively judging (like the
  // demo account in this very build) still has real coverage worth showing; the
  // grid's job is "who has scored what," not "who is a pure judge."
  const judgesForGrid = judgesData || [];
  const scores = scoresData || [];
  const stage = Number(adminSettingsMap.current_stage || '1');
  const scoredSet = new Set(scores.filter(s => s.eval_stage === stage).map(s => s.team_id + ':' + s.judge_id));
  const teamsForStage = stage === 2 ? allTeamsCache.filter(t => t.advanced_to_stage2) : allTeamsCache;
  if (judgesForGrid.length === 0 || teamsForStage.length === 0){
    el.innerHTML = `<div class="empty-illus" style="padding:20px;"><p>No judges or teams yet for Stage ${stage}.</p></div>`;
    return;
  }
  const head = `<tr><th style="position:sticky; left:0; z-index:1; background:var(--card-surface); text-align:left; padding:4px 10px 4px 2px;">Team</th>${
    judgesForGrid.map(j => `<th style="font-size:var(--fs-3xs); font-weight:600; color:var(--muted); writing-mode:vertical-rl; text-orientation:mixed; padding:4px 2px; white-space:nowrap;">${esc(j.name)}</th>`).join('')
  }</tr>`;
  const body = teamsForStage.map(t => `
    <tr>
      <td style="position:sticky; left:0; background:var(--card-surface); white-space:nowrap; padding:3px 10px 3px 2px; font-size:var(--fs-xs);">${esc(t.company_name)}</td>
      ${judgesForGrid.map(j => {
        const filled = scoredSet.has(t.id + ':' + j.id);
        return `<td style="text-align:center; padding:2px;"><span title="${filled ? 'Scored' : 'Not yet scored'}" style="display:inline-block; width:13px; height:13px; border-radius:4px; background:${filled ? 'var(--success)' : 'var(--surface-sunken)'};"></span></td>`;
      }).join('')}
    </tr>`).join('');
  el.innerHTML = `<table style="border-collapse:collapse; font-size:var(--fs-xs);"><thead>${head}</thead><tbody>${body}</tbody></table>`;
}

// Judge consistency radar — admin-only, never shown to judges (surfacing "you're an
// outlier" mid-scoring would just anchor them toward the group instead of their own
// read). Purely client-side: reuses admin_list_scores, no new RPC needed. Flags a
// judge's score on a team+criterion when it sits >=3 points (of 10) from the mean of
// every OTHER judge who scored that same team+criterion — deliberately a plain fixed
// threshold, not stdev-based, so it stays legible to a non-technical organizer.
const CONSISTENCY_GAP = 3;
async function drawConsistencyRadar(){
  const el = $('consistencyRadar');
  if (!el) return;
  el.innerHTML = `<div class="empty-illus" style="padding:20px;"><p>Loading…</p></div>`;
  const { data: allScores } = await rpc('admin_list_scores', { admin_code: judge.code }, { silent: true });
  const rows = allScores || [];
  // group[teamId][critKey] = [{ judgeName, value }]
  const groups = {};
  rows.forEach(s => {
    const scores = s.scores || {};
    Object.keys(scores).forEach(key => {
      const v = Number(scores[key]);
      if (!Number.isFinite(v)) return;
      groups[s.team_id] = groups[s.team_id] || {};
      groups[s.team_id][key] = groups[s.team_id][key] || { teamName: s.team_name, entries: [] };
      groups[s.team_id][key].entries.push({ judgeName: s.judge_name, value: v });
    });
  });
  const flags = [];
  Object.values(groups).forEach(byCrit => {
    Object.entries(byCrit).forEach(([key, { teamName, entries }]) => {
      if (entries.length < 3) return; // need at least 3 judges for "the others" to mean anything
      entries.forEach((entry, i) => {
        const others = entries.filter((_, j) => j !== i);
        const othersAvg = others.reduce((s, o) => s + o.value, 0) / others.length;
        const gap = entry.value - othersAvg;
        if (Math.abs(gap) >= CONSISTENCY_GAP){
          const critLabel = (criteria.find(c => c.key === key) || {}).label_en || key;
          flags.push({ teamName, critLabel, judgeName: entry.judgeName, value: entry.value, othersAvg, gap });
        }
      });
    });
  });
  flags.sort((a, b) => Math.abs(b.gap) - Math.abs(a.gap));
  if (flags.length === 0){
    el.innerHTML = `<div class="empty-illus" style="padding:20px;"><p>No outliers found — every judge's scores sit within ${CONSISTENCY_GAP} points of each other on every criterion scored by 3+ judges.</p></div>`;
    return;
  }
  el.innerHTML = `<div class="table-wrap"><table><thead><tr><th>Team</th><th>Criterion</th><th>Judge</th><th>Score</th><th>Others' avg</th></tr></thead><tbody>${
    flags.slice(0, 40).map(f => `
      <tr>
        <td>${f.teamName}</td>
        <td>${f.critLabel}</td>
        <td>${f.judgeName}</td>
        <td style="font-weight:800; color:${f.gap > 0 ? 'var(--success)' : 'var(--danger)'};">${f.value}</td>
        <td>${f.othersAvg.toFixed(1)}</td>
      </tr>`).join('')
  }</tbody></table></div>${flags.length > 40 ? `<div style="font-size:var(--fs-xs); color:var(--muted); padding:8px 4px;">+${flags.length - 40} more</div>` : ''}`;
}
window.addEventListener('resize', () => { if (lastView === 'admin') positionAdminNavLine(); });

let lastAdminCounts = { s1: 0, s2: 0 };
async function drawAdminSummary(){
  const [{ data: judgesData }, { data: scoresData }] = await Promise.all([
    db.rpc('admin_list_judges', { admin_code: judge.code }),
    db.rpc('admin_list_scores', { admin_code: judge.code }),
  ]);
  const judgeCount = (judgesData || []).length;
  const s1 = (scoresData || []).filter(s => s.eval_stage === 1).length;
  const s2 = (scoresData || []).filter(s => s.eval_stage === 2).length;
  const possible = judgeCount * allTeamsCache.length;
  const pct = possible ? Math.round((s1 / possible) * 100) : 0;
  lastAdminCounts = { s1, s2, judgeCount };
  $('adminSummary').innerHTML = `
    <div class="stat"><div class="l">Teams</div><div class="v">${allTeamsCache.length}</div></div>
    <div class="stat"><div class="l">Judges</div><div class="v">${judgeCount}</div></div>
    <div class="stat"><div class="l">Stage 1 scores</div><div class="v">${s1}</div></div>
    <div class="stat"><div class="l">Stage 2 scores</div><div class="v">${s2}</div></div>
    <div class="stat"><div class="l">Stage 1 completion</div><div class="v">${pct}%</div></div>
  `;
}

/* real-data pipeline: Registered -> Stage 1 -> Cut decision -> (Eliminated / Stage 2) -> Published */
async function drawPipelineOverview(){
  const map = adminSettingsMap;
  const stage = map.current_stage || '1';
  const finalized = map.stage2_finalized === 'true';
  const published2 = map.stage2_published === 'true';
  const advancedCount = allTeamsCache.filter(tm => tm.advanced_to_stage2).length;
  const outCount = Math.max(0, allTeamsCache.length - advancedCount);

  const s1Done = stage === '2' || finalized;
  const cutState = finalized ? 'done' : (s1Done ? 'current' : 'pending');
  const s2State = stage === '2' ? 'current' : (finalized ? 'pending' : 'pending');
  const pubState = published2 ? 'done' : 'pending';

  let leaderLine = 'No leader yet';
  try {
    const viewName = (stage === '2') ? 'stage2_leaderboard' : 'leaderboard';
    let q = db.from(viewName).select('*');
    if (viewName === 'leaderboard') q = q.eq('eval_stage', 1);
    const { data } = await q;
    const sorted = (data || []).slice().sort((a,b) => b.weighted_score - a.weighted_score);
    if (sorted[0]) leaderLine = `${esc(sorted[0].company_name)} — ${Number(sorted[0].weighted_score).toFixed(1)}`;
  } catch (e) { /* leaderboard view may not have rows yet — keep default */ }

  function node(cls, badge, title, sub){
    return `<div class="badge">${badge}</div><div class="ft">${title}</div><div class="fs">${sub}</div>`;
  }

  $('pipelineFlow').innerHTML = `
    <div class="flowlab"><div class="flowcanvas">
      <svg viewBox="0 0 900 190">
        <path class="on" d="M140,95 C190,95 180,95 232,95" />
        <path class="${s1Done ? 'on' : ''}" d="M342,95 C390,95 380,95 432,95" />
        <path class="${finalized ? 'warn' : ''}" d="M432,95 C470,125 480,150 520,175" />
        <path class="${finalized ? 'on' : ''}" d="M432,95 C500,95 510,95 572,95" />
        <path class="${published2 ? 'on' : ''}" d="M682,95 C730,95 720,95 772,95" />
      </svg>
      <div class="fdot" style="left:432px; top:95px;"></div>
      <div class="fdot" style="left:520px; top:175px;"></div>

      <div class="fnode" style="left:76px; top:95px;" data-goto="teams">
        ${node('', 'Done', 'Registered', allTeamsCache.length + ' teams entered')}
      </div>
      <div class="fnode ${s1Done ? '' : 'current'}" style="left:287px; top:95px;" data-goto="scoreboard">
        ${node('', s1Done ? 'Done' : 'Current', 'Stage 1 scoring', (lastAdminCounts.s1||0) + ' scores submitted')}
      </div>
      <div class="fnode ${cutState}" style="left:432px; top:95px; width:132px;" data-goto="stage">
        ${node('', finalized ? 'Done' : (s1Done ? 'Current' : 'Pending'), 'Cut decision', finalized ? advancedCount + ' advanced' : 'Not finalized yet')}
      </div>
      <div class="fnode ${finalized ? 'warn' : 'pending'}" style="left:565px; top:182px;" data-goto="stage">
        ${node('', finalized ? 'Out' : 'Pending', 'Not advanced', finalized ? outCount + ' team(s)' : 'Awaiting cut')}
      </div>
      <div class="fnode ${s2State}" style="left:627px; top:95px;" data-goto="live">
        ${node('', stage === '2' ? 'Current' : 'Pending', 'Stage 2 scoring', stage === '2' ? (lastAdminCounts.s2||0) + ' scores submitted' : 'Not started')}
      </div>
      <div class="fnode ${pubState}" style="left:832px; top:95px;" data-goto="publish">
        ${node('', published2 ? 'Done' : 'Pending', 'Published', published2 ? leaderLine : 'Awaits admin publish')}
      </div>
    </div></div>
    <div style="font-size:11px; color:var(--muted); margin-top:10px;">Click any stage to jump to that section. ${!finalized ? 'Leaderboard: ' + leaderLine : ''}</div>
  `;
}

async function drawAdminJudges(){
  const { data } = await rpc('admin_list_judges', { admin_code: judge.code }, { silent: true });
  $('adminJudges').innerHTML = (data || []).map(j => `
    <tr><td>${esc(j.name)}</td><td>${esc(j.code)} <button class="button copy-code" data-code="${esc(j.code)}" style="font-size:var(--fs-2xs);padding:3px 7px;">Copy</button></td><td>${j.is_admin ? '✓' : ''}</td>
    <td><button class="button reset-judge" data-id="${j.id}" style="font-size:var(--fs-xs);">Reset scores</button> <button class="button del-judge" data-id="${j.id}" style="font-size:var(--fs-xs);">Remove</button></td></tr>
  `).join('');
  $('adminJudges').querySelectorAll('.del-judge').forEach(b => b.onclick = async () => {
    if (!await appConfirm('Remove this judge?')) return;
    const { error } = await rpc('admin_delete_judge', { admin_code: judge.code, target_id: Number(b.dataset.id) }, { errorPrefix: 'Could not remove judge:' });
    if (error) return;
    logActivity('Removed judge', `judge #${b.dataset.id}`);
    drawAdminJudges();
  });
  $('adminJudges').querySelectorAll('.reset-judge').forEach(b => b.onclick = async () => {
    if (!await appConfirm("Clear this judge's scores? This does not remove the judge account.")) return;
    const { error } = await rpc('admin_clear_judge_scores', { admin_code: judge.code, target_judge_id: Number(b.dataset.id) }, { errorPrefix: 'Could not clear scores:' });
    if (error) return;
    logActivity('Cleared judge scores', `judge #${b.dataset.id}`);
    drawAdminScores(); drawFullScoreboard();
    showToast('Scores cleared for this judge.');
  });
  $('adminJudges').querySelectorAll('.copy-code').forEach(b => b.onclick = async (e) => {
    e.preventDefault();
    try { await navigator.clipboard.writeText(b.dataset.code); b.textContent = 'Copied'; setTimeout(() => b.textContent = 'Copy', 1200); }
    catch { appAlert('Copy this code manually: ' + b.dataset.code); }
  });
}
$('addJudgeForm').onsubmit = async e => {
  e.preventDefault();
  const { error } = await rpc('admin_add_judge', {
    admin_code: judge.code, new_name: $('newJudgeName').value, new_code: $('newJudgeCode').value, new_is_admin: $('newJudgeAdmin').checked
  }, { errorPrefix: 'Could not add judge:' });
  if (error) return;
  logActivity('Added judge', $('newJudgeName').value);
  e.target.reset();
  drawAdminJudges();
  closeAdminDrawers();
  showToast('Judge added.');
};
$('openJudgeDrawer').onclick = () => openAdminDrawer('judgeDrawer');
$('judgeDrawerClose').onclick = closeAdminDrawers;

let editingBatchId = null;
async function drawAdminTeams(){
  const { data } = await db.from('teams').select('*').order('sort_order');
  allTeamsCache = data || [];
  $('adminTeams').innerHTML = allTeamsCache.map(tm => `
    <tr><td style="display:flex;align-items:center;gap:8px;">${avatarHtml(tm, 24)}${esc(tm.company_name)}</td><td>${esc(tm.category)}</td>
    <td><button class="button row-toggle-s2" data-id="${tm.id}" style="font-size:11px; ${tm.advanced_to_stage2 ? 'background:var(--success);color:#fff;border-color:var(--success);' : ''}">${tm.advanced_to_stage2 ? '✓ In Stage 2' : 'Not in Stage 2'}</button></td>
    <td><button class="button row-edit" data-id="${tm.id}" style="font-size:11px;">Edit</button> <button class="button row-del" data-id="${tm.id}" style="font-size:11px;">Del</button></td></tr>
  `).join('');
  $('adminTeams').querySelectorAll('.row-del').forEach(b => b.onclick = async () => {
    if (!await appConfirm('Delete this team and all its scores?')) return;
    const tm = allTeamsCache.find(x => x.id === Number(b.dataset.id));
    const { error } = await rpc('admin_delete_team', { admin_code: judge.code, target_id: Number(b.dataset.id) }, { errorPrefix: 'Could not delete team:' });
    if (error) return;
    logActivity('Deleted team', tm ? tm.company_name : '');
    drawAdminTeams();
  });
  $('adminTeams').querySelectorAll('.row-toggle-s2').forEach(b => b.onclick = async () => {
    const id = Number(b.dataset.id);
    const currentIds = allTeamsCache.filter(tm => tm.advanced_to_stage2).map(tm => tm.id);
    const targetIds = currentIds.includes(id) ? currentIds.filter(x => x !== id) : [...currentIds, id];
    const { error } = await rpc('admin_set_stage2_teams', { admin_code: judge.code, team_ids: targetIds }, { errorPrefix: 'Could not update:' });
    if (error) return;
    logActivity('Toggled Stage 2 membership', allTeamsCache.find(tm => tm.id === id)?.company_name || '');
    await drawAdminTeams();
    showToast('Updated.');
  });
  let editingTeamId = null;
  $('adminTeams').querySelectorAll('.row-edit').forEach(b => b.onclick = () => {
    const tm = allTeamsCache.find(x => x.id === Number(b.dataset.id));
    editingTeamId = tm.id;
    $('teamName').value = tm.company_name; $('teamCategory').value = tm.category; $('teamStage').value = tm.stage;
    $('teamDescEn').value = tm.description_en || ''; $('teamDescAr').value = tm.description_ar || '';
    $('teamAccentColor').value = teamColor(tm);
    if (tm.accent_color) $('teamAccentColor').dataset.touched = '1'; else delete $('teamAccentColor').dataset.touched;
    $('teamCardSkin').value = tm.card_skin || '';
    $('teamSubmitBtn').textContent = 'Save changes'; $('teamCancelEdit').classList.remove('hide');
    $('addTeamForm').dataset.editingId = tm.id;
    $('teamDrawerTitle').textContent = 'Edit team';
    openAdminDrawer('teamDrawer');
  });
  $('teamCancelEdit').onclick = () => {
    editingTeamId = null; $('addTeamForm').reset(); delete $('addTeamForm').dataset.editingId; delete $('teamAccentColor').dataset.touched;
    $('teamSubmitBtn').textContent = 'Add team'; $('teamCancelEdit').classList.add('hide');
    closeAdminDrawers();
  };
  await drawAdvanceTeamsList();
  drawLiveTeamSelect();
  drawWhosOut();
}
$('teamAccentColor').onchange = () => { $('teamAccentColor').dataset.touched = '1'; };
$('openTeamDrawer').onclick = () => {
  $('addTeamForm').reset(); delete $('addTeamForm').dataset.editingId; delete $('teamAccentColor').dataset.touched;
  $('teamSubmitBtn').textContent = 'Add team'; $('teamCancelEdit').classList.add('hide');
  $('teamDrawerTitle').textContent = 'Add team';
  openAdminDrawer('teamDrawer');
};
$('teamDrawerClose').onclick = () => $('teamCancelEdit').click();
$('addTeamForm').onsubmit = async e => {
  e.preventDefault();
  const editingId = $('addTeamForm').dataset.editingId;
  const payload = { company_name: $('teamName').value, category: $('teamCategory').value, stage: $('teamStage').value, description_en: $('teamDescEn').value, description_ar: $('teamDescAr').value };
  if ($('teamAccentColor').dataset.touched === '1') payload.accent_color = $('teamAccentColor').value;
  payload.card_skin = $('teamCardSkin').value || null;
  if (editingId) payload.id = Number(editingId);
  let { error } = await rpc('admin_upsert_team', { admin_code: judge.code, team_data: payload }, { silent: true });
  if (error) {
    // The Supabase `teams` table may not have a card_skin column yet (see the
    // README note this feature ships with) — retry once without it rather than
    // silently failing to save the rest of the team's edits.
    delete payload.card_skin;
    ({ error } = await rpc('admin_upsert_team', { admin_code: judge.code, team_data: payload }, { errorPrefix: 'Could not save team:' }));
  }
  if (error) return;
  logActivity(editingId ? 'Edited team' : 'Added team', payload.company_name);
  $('addTeamForm').reset(); delete $('addTeamForm').dataset.editingId; delete $('teamAccentColor').dataset.touched;
  $('teamSubmitBtn').textContent = 'Add team'; $('teamCancelEdit').classList.add('hide');
  drawAdminTeams();
  closeAdminDrawers();
  showToast('Team saved.');
};

async function drawAdvanceTeamsList(){
  let top5 = new Set();
  let leaderboardFailed = false;
  try {
    const { data, error } = await db.from('leaderboard').select('*').eq('eval_stage', 1);
    if (error) throw error;
    (data || []).slice().sort((a,b) => b.weighted_score - a.weighted_score).slice(0,5).forEach(r => top5.add(r.team_id));
    if (!data || data.length === 0) leaderboardFailed = true;
  } catch (e) { leaderboardFailed = true; }
  const anySelected = allTeamsCache.some(tm => tm.advanced_to_stage2);
  const warnHtml = (!anySelected && leaderboardFailed)
    ? `<div style="font-size:11.5px;color:var(--danger);margin-bottom:8px;">Could not auto-load current rankings, so nothing is pre-checked below — pick teams manually before confirming.</div>` : '';
  $('advanceTeamsList').innerHTML = warnHtml + allTeamsCache.map(tm => {
    const checked = anySelected ? tm.advanced_to_stage2 : top5.has(tm.id);
    return `
    <label class="admin-checkbox" style="padding:5px 0;">
      <input type="checkbox" data-adv-id="${tm.id}" ${checked ? 'checked' : ''}> ${esc(tm.company_name)}
    </label>
  `;
  }).join('');
}
$('confirmStage2Btn').onclick = async () => {
  if (stage2CriteriaCount === 0) {
    await appAlert('Stage 2 has no criteria defined yet in the database. Add rows to the criteria table (stage=2) before switching judges over — otherwise the scoring screen will be empty.');
    return;
  }
  if ($('weightGuardToggle').checked) {
    const { data: c2rows } = await db.from('criteria').select('weight').eq('stage', 2);
    const total = (c2rows || []).reduce((s,c) => s + Number(c.weight), 0);
    if (Math.round(total * 100) !== 100) {
      await appAlert(`Stage 2 criteria weights add up to ${Math.round(total*100)}%, not 100% — fix the weights in Criteria first, or turn off this check below if that's intentional.`);
      return;
    }
  }
  const ids = [...document.querySelectorAll('[data-adv-id]')].filter(c => c.checked).map(c => Number(c.dataset.advId));
  if (ids.length === 0) {
    if (!await appConfirm('No teams are checked. If you continue, Stage 2 will start with zero teams for judges to score. Continue anyway?')) return;
  } else {
    if (!await appConfirm(`Advance ${ids.length} team(s) to Stage 2 and switch every judge's Score tab now?`)) return;
  }
  const { error: e1 } = await rpc('admin_set_stage2_teams', { admin_code: judge.code, team_ids: ids }, { errorPrefix: 'Could not save advancement:' });
  if (e1) return;
  const { error: e2 } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'stage2_finalized', setting_value: 'true' }, { errorPrefix: 'Could not finalize the cut:' });
  if (e2) return;
  const { error: e3 } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'current_stage', setting_value: '2' }, { errorPrefix: 'Teams were advanced, but switching the stage failed:' });
  if (e3) return;
  logActivity('Advanced teams to Stage 2', `${ids.length} team(s)`);
  await drawAdminTeams();
  drawWhosOut();
  await loadData();
  await loadAdminSettings();
  drawPipelineOverview();
  showToast('Stage 2 is live — judges switched.');
};
$('revertStage1Btn').onclick = async () => {
  if (!await appConfirm('Switch every judge back to Stage 1 scoring? Your advancement picks are kept as-is.')) return;
  const { error } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'current_stage', setting_value: '1' }, { errorPrefix: 'Could not switch stage:' });
  if (error) return;
  logActivity('Reverted to Stage 1', '');
  await loadData();
  await loadAdminSettings();
  drawPipelineOverview();
  showToast('Back to Stage 1.');
};

async function drawWhosOut(){
  const { data } = await db.from('site_settings').select('*').eq('key', 'stage2_finalized');
  const finalized = data && data[0] && data[0].value === 'true';
  if (!finalized) { $('whosOut').innerHTML = ''; return; }
  const advanced = allTeamsCache.filter(tm => tm.advanced_to_stage2);
  const eliminated = allTeamsCache.filter(tm => !tm.advanced_to_stage2);
  $('whosOut').innerHTML = `
    <div style="font-size:11px;color:var(--muted);margin-bottom:6px;">Cut finalized — advanced vs. out</div>
    <div class="out-list">
      ${advanced.map(tm => `<span class="out-chip adv">${esc(tm.company_name)}</span>`).join('')}
      ${eliminated.map(tm => `<span class="out-chip elim">${esc(tm.company_name)}</span>`).join('')}
    </div>
  `;
}

$('bulkImportBtn').onclick = async () => {
  const lines = $('bulkTeamsCsv').value.split('\n').map(l => l.trim()).filter(Boolean);
  let imported = 0, failed = 0;
  for (const line of lines) {
    const [name, category, stage] = line.split(',').map(s => (s || '').trim());
    if (!name || !category) continue;
    const { error } = await rpc('admin_upsert_team', { admin_code: judge.code, team_data: { company_name: name, category, stage: stage || 'MVP' } }, { silent: true });
    if (error) failed++; else imported++;
  }
  logActivity('Bulk-imported teams', `${imported} team(s)`);
  $('bulkTeamsCsv').value = '';
  drawAdminTeams();
  showToast(failed ? `Imported ${imported}, ${failed} failed.` : `Imported ${imported} team(s).`);
};

function renderLiveTeamOptions(filter){
  const q = (filter || '').trim().toLowerCase();
  const matches = allTeamsCache.filter(tm => !q || tm.company_name.toLowerCase().includes(q));
  $('liveTeamDropdown').innerHTML = matches.length
    ? matches.map(tm => `<div class="combo-opt" data-name="${esc(tm.company_name)}">${esc(tm.company_name)}</div>`).join('')
    : `<div class="combo-empty">No matching teams</div>`;
  $('liveTeamDropdown').querySelectorAll('.combo-opt').forEach(el => el.onclick = () => {
    $('liveTeamSelect').value = el.dataset.name;
    $('liveTeamDropdown').classList.add('hide');
  });
}
function drawLiveTeamSelect(){
  if (!$('liveTeamDropdown').classList.contains('hide')) renderLiveTeamOptions($('liveTeamSelect').value);
}
$('liveTeamSelect').oninput = () => { renderLiveTeamOptions($('liveTeamSelect').value); $('liveTeamDropdown').classList.remove('hide'); };
$('liveTeamSelect').addEventListener('focus', () => { renderLiveTeamOptions(''); $('liveTeamDropdown').classList.remove('hide'); });
$('liveTeamSelect').addEventListener('keydown', e => { if (e.key === 'Escape') { $('liveTeamDropdown').classList.add('hide'); $('liveTeamSelect').blur(); } });
document.addEventListener('click', e => { if (!$('liveTeamCombo').contains(e.target)) $('liveTeamDropdown').classList.add('hide'); });
function resolveLiveTeamId(){
  const typed = $('liveTeamSelect').value.trim();
  if (!typed) return null;
  const match = allTeamsCache.find(tm => tm.company_name.toLowerCase() === typed.toLowerCase());
  return match ? match.id : null;
}
$('startTimerBtn').onclick = async () => {
  const { error } = await rpc('admin_set_live_team', { admin_code: judge.code, target_team_id: resolveLiveTeamId(), duration_seconds: Number($('timerDuration').value || 600), start_timer: true }, { errorPrefix: 'Could not set live team:' });
  if (error) return;
  logActivity('Set live team & started timer', $('liveTeamSelect').value);
  await loadData();
  renderLiveFeature();
  renderAdminLiveBanner();
  showToast('Live team set.');
};
$('setLiveNoTimerBtn').onclick = async () => {
  const { error } = await rpc('admin_set_live_team', { admin_code: judge.code, target_team_id: resolveLiveTeamId(), duration_seconds: Number($('timerDuration').value || 600), start_timer: false }, { errorPrefix: 'Could not set live team:' });
  if (error) return;
  logActivity('Set live team (no timer)', $('liveTeamSelect').value);
  await loadData();
  renderLiveFeature();
  renderAdminLiveBanner();
  showToast('Live team set.');
};
$('stopTimerBtn').onclick = async () => {
  const { error } = await rpc('admin_set_live_team', { admin_code: judge.code, target_team_id: null, duration_seconds: Number($('timerDuration').value || 600), start_timer: false }, { errorPrefix: 'Could not clear live team:' });
  if (error) return;
  logActivity('Cleared live team', '');
  await loadData();
  renderLiveFeature();
  renderAdminLiveBanner();
  showToast('Live team cleared.');
};
// Next-up combo mirrors the live-team combo above exactly — same autocomplete-over-a-
// plain-text-input pattern, same allTeamsCache, just a different site_settings key
// (next_up_team_id) written through the generic admin_set_setting RPC rather than a
// dedicated one, since there's no timer/restrict-scoring behavior attached to it.
function renderNextUpOptions(filter){
  const q = (filter || '').trim().toLowerCase();
  const matches = allTeamsCache.filter(tm => !q || tm.company_name.toLowerCase().includes(q));
  $('nextUpTeamDropdown').innerHTML = matches.length
    ? matches.map(tm => `<div class="combo-opt" data-name="${esc(tm.company_name)}">${esc(tm.company_name)}</div>`).join('')
    : `<div class="combo-empty">No matching teams</div>`;
  $('nextUpTeamDropdown').querySelectorAll('.combo-opt').forEach(el => el.onclick = () => {
    $('nextUpTeamSelect').value = el.dataset.name;
    $('nextUpTeamDropdown').classList.add('hide');
  });
}
$('nextUpTeamSelect').oninput = () => { renderNextUpOptions($('nextUpTeamSelect').value); $('nextUpTeamDropdown').classList.remove('hide'); };
$('nextUpTeamSelect').addEventListener('focus', () => { renderNextUpOptions(''); $('nextUpTeamDropdown').classList.remove('hide'); });
$('nextUpTeamSelect').addEventListener('keydown', e => { if (e.key === 'Escape') { $('nextUpTeamDropdown').classList.add('hide'); $('nextUpTeamSelect').blur(); } });
document.addEventListener('click', e => { if (!$('nextUpTeamCombo').contains(e.target)) $('nextUpTeamDropdown').classList.add('hide'); });
function resolveNextUpTeamId(){
  const typed = $('nextUpTeamSelect').value.trim();
  if (!typed) return null;
  const match = allTeamsCache.find(tm => tm.company_name.toLowerCase() === typed.toLowerCase());
  return match ? match.id : null;
}
$('setNextUpBtn').onclick = async () => {
  const id = resolveNextUpTeamId();
  const { error } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'next_up_team_id', setting_value: id ? String(id) : '' }, { errorPrefix: 'Could not save next up:' });
  if (error) return;
  logActivity('Set next-up team', $('nextUpTeamSelect').value);
  showToast('Next up set.');
};
$('clearNextUpBtn').onclick = async () => {
  $('nextUpTeamSelect').value = '';
  const { error } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'next_up_team_id', setting_value: '' }, { errorPrefix: 'Could not clear next up:' });
  if (error) return;
  logActivity('Cleared next-up team', '');
  showToast('Next up cleared.');
};
document.querySelectorAll('#publicLangSeg button').forEach(b => b.onclick = async () => {
  document.querySelectorAll('#publicLangSeg button').forEach(x => x.classList.toggle('active', x === b));
  $('publicLangSeg').classList.toggle('alt', b.dataset.l === 'ar');
  const { error } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'public_view_lang', setting_value: b.dataset.l }, { errorPrefix: 'Could not save language:' });
  if (error) return;
  logActivity('Set public view language', b.dataset.l);
  showToast('Public view language updated.');
});
$('restrictToLive').onchange = async (e) => {
  const { error } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'restrict_to_live', setting_value: e.target.checked ? 'true' : 'false' }, { errorPrefix: 'Could not save setting:' });
  if (error) return;
  logActivity('Changed restrict-to-live', e.target.checked ? 'on' : 'off');
  await loadData();
};
$('cardFlipLayoutToggle').onchange = async (e) => {
  const { error } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'mobile_scoring_layout', setting_value: e.target.checked ? 'cards' : 'classic' }, { errorPrefix: 'Could not save setting:' });
  if (error) return;
  logActivity('Changed mobile scoring layout', e.target.checked ? 'cards' : 'classic');
  await loadData();
};
$('rubricAckToggle').onchange = async (e) => {
  const { error } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'rubric_ack_enabled', setting_value: e.target.checked ? 'true' : 'false' }, { errorPrefix: 'Could not save setting:' });
  if (error) return;
  logActivity('Changed onboarding requirement', e.target.checked ? 'on' : 'off');
  await loadData();
};
$('scoreLockToggle').onchange = async (e) => {
  const { error } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'score_lock_enabled', setting_value: e.target.checked ? 'true' : 'false' }, { errorPrefix: 'Could not save setting:' });
  if (error) return;
  logActivity('Changed score-lock availability', e.target.checked ? 'on' : 'off');
  await loadData();
};
$('lockOneWayToggle').onchange = async (e) => {
  const { error } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'lock_one_way', setting_value: e.target.checked ? 'true' : 'false' }, { errorPrefix: 'Could not save setting:' });
  if (error) return;
  logActivity('Changed one-way locking', e.target.checked ? 'on' : 'off');
  await loadData();
};
$('weightGuardToggle').onchange = async (e) => {
  const { error } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'enforce_weight_guard', setting_value: e.target.checked ? 'true' : 'false' }, { errorPrefix: 'Could not save setting:' });
  if (error) return;
  logActivity('Changed Stage 2 weight guard', e.target.checked ? 'on' : 'off');
};

let stage2CriteriaCount = 0;
async function loadAdminSettings(){
  const { data } = await db.from('site_settings').select('*');
  const map = {};
  (data || []).forEach(s => map[s.key] = s.value);
  adminSettingsMap = map;
  const activeStage = map.current_stage || '1';
  $('stageNowLabel').textContent = 'Stage ' + activeStage;
  $('stage1Published').checked = map.stage1_published === 'true';
  $('stage2Published').checked = map.stage2_published === 'true';
  $('restrictToLive').checked = map.restrict_to_live === 'true';
  $('cardFlipLayoutToggle').checked = map.mobile_scoring_layout !== 'classic';
  $('weightGuardToggle').checked = map.enforce_weight_guard !== 'false';
  $('rubricAckToggle').checked = map.rubric_ack_enabled !== 'false';
  $('scoreLockToggle').checked = map.score_lock_enabled !== 'false';
  $('lockOneWayToggle').checked = map.lock_one_way === 'true';
  const nextUpId = map.next_up_team_id ? Number(map.next_up_team_id) : null;
  const nextUpTeam = nextUpId ? allTeamsCache.find(tm => tm.id === nextUpId) : null;
  $('nextUpTeamSelect').value = nextUpTeam ? nextUpTeam.company_name : '';
  const publicLang = map.public_view_lang === 'ar' ? 'ar' : 'en';
  document.querySelectorAll('#publicLangSeg button').forEach(b => b.classList.toggle('active', b.dataset.l === publicLang));
  $('publicLangSeg').classList.toggle('alt', publicLang === 'ar');

  const { count } = await db.from('criteria').select('*', { count: 'exact', head: true }).eq('stage', 2);
  stage2CriteriaCount = count || 0;
  const advancedCount = allTeamsCache.filter(tm => tm.advanced_to_stage2).length;
  $('stage2Readiness').textContent = `Stage 2: ${stage2CriteriaCount} criteria defined · ${advancedCount} teams currently checked below`;
}
let critStage = 1, critList = [], editingCritKey = null;
$('critStageSeg').querySelectorAll('button').forEach(b => b.onclick = () => {
  critStage = Number(b.dataset.stage);
  $('critStageSeg').querySelectorAll('button').forEach(x => x.classList.toggle('active', x === b));
  $('critStageSeg').classList.toggle('alt', critStage === 2);
  drawCriteria();
});
async function drawCriteria(){
  const { data } = await db.from('criteria').select('*').eq('stage', critStage).order('sort_order');
  critList = data || [];
  $('criteriaList').innerHTML = critList.map(c => `
    <div class="crit-row-admin">
      <div><b>${esc(c.label_en)}</b><div style="color:var(--muted);font-size:11px;">${esc(c.key)}</div></div>
      <div style="color:var(--muted);">${esc(c.label_ar)}</div>
      <div>${Math.round(c.weight*100)}%</div>
      <div><button class="button row-edit-crit" data-key="${esc(c.key)}" style="font-size:11px;">Edit</button> <button class="button row-del-crit" data-key="${esc(c.key)}" style="font-size:11px;">Del</button></div>
    </div>
  `).join('');
  const total = critList.reduce((s,c) => s + Number(c.weight), 0);
  const totalEl = $('weightTotal');
  totalEl.textContent = `Total weight: ${Math.round(total*100)}%`;
  totalEl.classList.toggle('off', Math.round(total*100) !== 100);

  $('criteriaList').querySelectorAll('.row-del-crit').forEach(b => b.onclick = async () => {
    if (!await appConfirm(`Delete criterion "${b.dataset.key}" from Stage ${critStage}?`)) return;
    const { error } = await rpc('admin_delete_criterion', { admin_code: judge.code, target_stage: critStage, target_key: b.dataset.key }, { errorPrefix: 'Could not delete criterion:' });
    if (error) return;
    logActivity('Deleted criterion', `${b.dataset.key} (stage ${critStage})`);
    drawCriteria();
  });
  $('criteriaList').querySelectorAll('.row-edit-crit').forEach(b => b.onclick = () => {
    const c = critList.find(x => x.key === b.dataset.key);
    editingCritKey = c.key;
    $('critKey').value = c.key; $('critKey').disabled = true;
    $('critLabelEn').value = c.label_en; $('critLabelAr').value = c.label_ar;
    $('critDescEn').value = c.description_en || ''; $('critDescAr').value = c.description_ar || '';
    $('critWeight').value = c.weight; $('critSort').value = c.sort_order;
    $('critSubmitBtn').textContent = 'Save changes';
    $('critCancelEdit').classList.remove('hide');
    $('critDrawerTitle').textContent = 'Edit criterion';
    openAdminDrawer('critDrawer');
  });
}
$('critCancelEdit').onclick = () => {
  editingCritKey = null;
  $('addCriterionForm').reset();
  $('critKey').disabled = false;
  $('critSubmitBtn').textContent = 'Add criterion';
  $('critCancelEdit').classList.add('hide');
  closeAdminDrawers();
};
$('openCritDrawer').onclick = () => {
  editingCritKey = null;
  $('addCriterionForm').reset();
  $('critKey').disabled = false;
  $('critSubmitBtn').textContent = 'Add criterion';
  $('critCancelEdit').classList.add('hide');
  $('critDrawerTitle').textContent = 'Add criterion';
  openAdminDrawer('critDrawer');
};
$('critDrawerClose').onclick = () => $('critCancelEdit').click();
$('addCriterionForm').onsubmit = async e => {
  e.preventDefault();
  const { error } = await rpc('admin_upsert_criterion', { admin_code: judge.code, criterion_data: {
    key: $('critKey').value, stage: critStage,
    label_en: $('critLabelEn').value, label_ar: $('critLabelAr').value,
    description_en: $('critDescEn').value, description_ar: $('critDescAr').value,
    weight: Number($('critWeight').value), sort_order: Number($('critSort').value || 0)
  }}, { errorPrefix: 'Could not save criterion:' });
  if (error) return;
  logActivity('Saved criterion', `${$('critKey').value} (stage ${critStage})`);
  $('critCancelEdit').click();
  drawCriteria();
  showToast('Criterion saved.');
};

function relTime(iso){
  const secs = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  return secs < 60 ? `${secs}s ago` : secs < 3600 ? `${Math.floor(secs/60)}m ago` : secs < 86400 ? `${Math.floor(secs/3600)}h ago` : `${Math.floor(secs/86400)}d ago`;
}
async function drawActivityFeed(){
  const { data: scoreHist } = await db.rpc('admin_list_score_history', { admin_code: judge.code, limit_count: 30 });
  let adminLog = [];
  try {
    const { data } = await db.rpc('admin_list_activity', { admin_code: judge.code, limit_count: 30 });
    adminLog = data || [];
  } catch (e) { /* v6 migration not run yet — non-fatal */ }
  const combined = [
    ...(scoreHist || []).map(h => ({ time: h.recorded_at, html: `${esc(h.judge_name)} scored <b>${esc(h.team_name)}</b> <span style="color:var(--muted);">· stage ${h.stage}</span>` })),
    ...adminLog.map(a => ({ time: a.created_at, html: `<span style="color:var(--acc);font-weight:600;">Admin</span> — ${esc(a.action)}${a.detail ? ` <span style="color:var(--muted);">· ${esc(a.detail)}</span>` : ''} <span style="color:var(--muted);font-size:10.5px;">(${esc(a.actor_name || 'admin')})</span>` })),
  ].sort((a, b) => new Date(b.time) - new Date(a.time)).slice(0, 40);
  $('activityFeed').innerHTML = combined.map(row => `<div class="feed-row"><div>${row.html}</div><div class="t">${relTime(row.time)}</div></div>`).join('')
    || `<div style="color:var(--muted);font-size:var(--fs-sm);">No activity yet.</div>`;
}

async function loadAboutContent(){
  const { data } = await db.from('site_settings').select('*').in('key', ['about_en','about_ar']);
  const map = {};
  (data || []).forEach(s => map[s.key] = s.value);
  $('aboutEn').value = map.about_en || '';
  $('aboutAr').value = map.about_ar || '';
}
$('saveAboutBtn').onclick = async () => {
  const { error: e1 } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'about_en', setting_value: $('aboutEn').value }, { errorPrefix: 'Could not save about content:' });
  if (e1) return;
  const { error: e2 } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'about_ar', setting_value: $('aboutAr').value }, { errorPrefix: 'Could not save about content:' });
  if (e2) return;
  showToast('About content saved.');
};

$('exportScoreboardBtn').onclick = async () => {
  const { data: allScores } = await rpc('admin_list_scores', { admin_code: judge.code }, { errorPrefix: 'Could not export scores:' });
  // Was team/judge/stage/notes only — organizers archiving results outside the app
  // need the actual per-criterion breakdown, not just who scored what and a comment.
  const critKeys = criteria.map(c => c.key);
  // Judges type the notes, and a spreadsheet treats a leading = + - @ as a formula: prefix those with a
  // quote so an exported note can never execute when an organizer opens the file.
  const csvEsc = v => { let s = String(v ?? ''); if (/^[=+\-@\t\r]/.test(s) && isNaN(Number(s))) s = "'" + s; return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const hasTs = (allScores || []).some(r => r.updated_at || r.created_at);
  const rows = [['team', 'judge', 'stage', ...critKeys, 'total', 'notes', ...(hasTs ? ['saved_at'] : [])]];
  (allScores || []).forEach(s => {
    const scores = s.scores || {};
    const weighted = criteria.reduce((sum, c) => sum + (Number(scores[c.key]) || 0) * c.weight, 0) * 10;
    rows.push([s.team_name, s.judge_name, s.eval_stage, ...critKeys.map(k => scores[k] ?? ''), weighted.toFixed(1), s.notes || '', ...(hasTs ? [s.updated_at || s.created_at || ''] : [])]);
  });
  const csv = rows.map(r => r.map(csvEsc).join(',')).join('\n');
  const blob = new Blob(['﻿' + csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'fintech-scores.csv';
  a.click();
  URL.revokeObjectURL(url);
};
$('printScoreboardBtn').onclick = () => {
  document.querySelectorAll('.sb-detail').forEach(d => d.classList.add('show'));
  window.print();
};

$('savePublishBtn').onclick = async () => {
  const { error: e1 } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'stage1_published', setting_value: $('stage1Published').checked ? 'true' : 'false' }, { errorPrefix: 'Could not save publish settings:' });
  if (e1) return;
  const { error: e2 } = await rpc('admin_set_setting', { admin_code: judge.code, setting_key: 'stage2_published', setting_value: $('stage2Published').checked ? 'true' : 'false' }, { errorPrefix: 'Could not save publish settings:' });
  if (e2) return;
  logActivity('Updated publish settings', `stage1:${$('stage1Published').checked} stage2:${$('stage2Published').checked}`);
  await loadAdminSettings();
  drawPipelineOverview();
  showToast('Publish settings saved.');
};

const ADMIN_SCORE_ROW_H = 44;
function renderAdminScoresWindow(){
  const viewport = $('adminScoresViewport');
  const spacer = $('adminScoresSpacer');
  const scrollTop = viewport.scrollTop, viewH = viewport.clientHeight || 440;
  const start = Math.max(0, Math.floor(scrollTop / ADMIN_SCORE_ROW_H) - 4);
  const end = Math.min(allScoresCache.length, Math.ceil((scrollTop + viewH) / ADMIN_SCORE_ROW_H) + 4);
  spacer.style.height = (allScoresCache.length * ADMIN_SCORE_ROW_H) + 'px';
  spacer.innerHTML = allScoresCache.slice(start, end).map((s, idx) => `
    <div class="virt-row" style="position:absolute; top:${(start+idx)*ADMIN_SCORE_ROW_H}px; left:0; right:0;">
      <div>${esc(s.team_name)}</div><div>${esc(s.judge_name)}</div><div>${s.eval_stage}</div><div>—</div>
      <div class="notes-preview">${esc(s.notes || '')}</div>
      <div style="display:flex; gap:6px;"><button class="button unlock-score" data-id="${s.score_id}" style="font-size:var(--fs-2xs); padding:5px 9px;">Unlock</button><button class="button button-danger del-score" data-id="${s.score_id}" style="font-size:var(--fs-2xs); padding:5px 9px;">Del</button></div>
    </div>
  `).join('');
  spacer.querySelectorAll('.del-score').forEach(b => b.onclick = async () => {
    if (!await appConfirm('Remove this score?')) return;
    const { error } = await rpc('admin_delete_score', { admin_code: judge.code, target_score_id: Number(b.dataset.id) }, { errorPrefix: 'Could not delete score:' });
    if (error) return;
    logActivity('Deleted score', `score #${b.dataset.id}`);
    drawAdminScores(); drawFullScoreboard();
  });
  spacer.querySelectorAll('.unlock-score').forEach(b => b.onclick = async () => {
    const { error } = await rpc('admin_unlock_score', { admin_code: judge.code, target_score_id: Number(b.dataset.id) }, { errorPrefix: 'Could not unlock score:' });
    if (error) return;
    logActivity('Force-unlocked score', `score #${b.dataset.id}`);
    showToast('Score unlocked.');
  });
}
async function drawAdminScores(){
  const { data } = await rpc('admin_list_scores', { admin_code: judge.code }, { errorPrefix: 'Could not load scores:' });
  allScoresCache = data || [];
  const viewport = $('adminScoresViewport'), shadowEl = $('adminScoresShadow');
  viewport.onscroll = () => { renderAdminScoresWindow(); shadowEl.classList.toggle('show', viewport.scrollTop > 4); };
  renderAdminScoresWindow();
  shadowEl.classList.toggle('show', viewport.scrollTop > 4);
}
$('clearAllScores').onclick = async () => {
  const { data } = await rpc('admin_list_scores', { admin_code: judge.code }, { errorPrefix: 'Could not load scores:' });
  const n = (data || []).length;
  if (n === 0) { await appAlert('No scores to clear.'); return; }
  const typed = await appPrompt(`This permanently deletes ${n} score(s) from every judge. Type ${n} to confirm.`);
  if (typed === null || Number(typed) !== n) return;
  const { error } = await rpc('admin_clear_all_scores', { admin_code: judge.code }, { errorPrefix: 'Could not clear scores:' });
  if (error) return;
  logActivity('Cleared ALL scores', `${n} score(s)`);
  drawAdminScores(); drawFullScoreboard();
};

let sbSortDir = 'desc';
async function drawFullScoreboard(){
  const { data: allScores } = await rpc('admin_list_scores', { admin_code: judge.code }, { silent: true });
  const { data: c1 } = await db.from('criteria').select('*').eq('stage', 1).order('sort_order');
  const { data: c2 } = await db.from('criteria').select('*').eq('stage', 2).order('sort_order');
  const critByStage = { 1: c1 || [], 2: c2 || [] };

  const byTeam = {};
  (allScores || []).forEach(s => {
    (byTeam[s.team_id] = byTeam[s.team_id] || { team_name: s.team_name, rows: [] }).rows.push(s);
  });

  const entries = Object.entries(byTeam).flatMap(([teamId, group]) => {
    const rowsByStage = {};
    group.rows.forEach(r => { (rowsByStage[r.eval_stage] = rowsByStage[r.eval_stage] || []).push(r); });
    return Object.entries(rowsByStage).map(([stageNum, rows]) => {
      const crits = critByStage[stageNum] || [];
      const avgByKey = {};
      crits.forEach(c => {
        const vals = rows.map(r => Number(r.scores[c.key])).filter(v => !isNaN(v));
        avgByKey[c.key] = vals.length ? vals.reduce((a,b)=>a+b,0)/vals.length : 0;
      });
      const combined = crits.reduce((sum,c) => sum + avgByKey[c.key]*c.weight, 0) * 10;
      return { teamId, teamName: group.team_name, stageNum, rows, crits, avgByKey, combined };
    });
  });
  entries.sort((a, b) => sbSortDir === 'desc' ? b.combined - a.combined : a.combined - b.combined);
  const tieCounts = {};
  entries.forEach(e => { const k = e.stageNum + '|' + e.combined.toFixed(1); tieCounts[k] = (tieCounts[k]||0) + 1; });

  const toolbar = `<div style="display:flex;justify-content:flex-end;margin-bottom:10px;"><button class="button" id="sbSortBtn" style="font-size:11px;">Sort: total ${sbSortDir === 'desc' ? '↓ high→low' : '↑ low→high'}</button></div>`;

  const html = entries.map((e, idx) => {
    const critGrid = e.crits.map(c => `<div class="ci"><div class="l">${esc(c.label_en)}</div><div class="v">${e.avgByKey[c.key].toFixed(1)}</div></div>`).join('');
    const judgeBlocks = e.rows.map(r => {
      const jc = e.crits.map(c => `<div class="jc-item"><div class="jc-l">${esc(c.label_en)}</div><div class="jc-v">${r.scores[c.key] ?? '—'}</div></div>`).join('');
      const judgeTotal = e.crits.reduce((sum,c) => sum + (Number(r.scores[c.key]) || 0) * c.weight, 0) * 10;
      return `<div class="sb-judge-block"><div class="sb-judge-name">${esc(r.judge_name)}<span class="sb-judge-total">${judgeTotal.toFixed(1)}</span></div><div class="sb-judge-grid">${jc}</div>${r.notes ? `<div class="sb-judge-notes">"${esc(r.notes)}"</div>` : ''}</div>`;
    }).join('');
    const detailId = `sbd-${e.teamId}-${e.stageNum}`;
    const isTie = tieCounts[e.stageNum + '|' + e.combined.toFixed(1)] > 1;
    return `
      <div class="sb-team-row" data-target="${detailId}" style="--i:${idx};">
        ${avatarHtml(allTeamsCache.find(t => t.id === Number(e.teamId)) || {id:e.teamId, company_name:e.teamName}, 34)}
        <div><div class="tname">${esc(e.teamName)} ${isTie ? '<span style="color:var(--danger);font-family:var(--mono);font-size:var(--fs-2xs);font-weight:700;">TIE</span>' : ''}</div><div class="tcat">Stage ${e.stageNum} · ${e.rows.length} judge${e.rows.length>1?'s':''}</div></div>
        <div class="sc">${e.combined.toFixed(1)}</div>
      </div>
      <div class="sb-detail" id="${detailId}">
        <div class="sb-crit-grid">${critGrid}</div>
        ${judgeBlocks}
      </div>
    `;
  }).join('');

  $('fullScoreboard').innerHTML = toolbar + (html || `<div style="color:var(--muted);padding:20px;font-size:13px;">No scores yet.</div>`);
  $('sbSortBtn').onclick = () => { sbSortDir = sbSortDir === 'desc' ? 'asc' : 'desc'; drawFullScoreboard(); };
  $('fullScoreboard').querySelectorAll('.sb-team-row').forEach(row => row.onclick = () => {
    document.getElementById(row.dataset.target).classList.toggle('show');
  });
}

