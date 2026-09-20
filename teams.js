const I18N = {
  en: {
    eyebrow:'Evaluation criteria', totalWeight:'Total weight across all criteria: 100%',
    noResults:'Results have not been published yet', noResultsSub:'Check back once the judging committee releases the standings.',
    stage1Top5:'Stage 1 — Top 5', stage2Final:'Stage 2 — Final results', winner:'Winner', outOf100:'/ 100',
    nextUp:'Next up', idleTitle:'No team presenting right now', idleSub:'The next presentation will appear here automatically.',
    aboutEmpty:'About this competition — coming soon.', footer:'JO Fintech Festival 2026 · public dashboard', reconnecting:'Reconnecting… showing last update', nowLive:'Now live: ',
    timeUp:"TIME'S UP", about:'About this team'
  },
  ar: {
    eyebrow:'معايير التقييم', totalWeight:'مجموع الأوزان لجميع المعايير: 100%',
    noResults:'لم يتم نشر النتائج بعد', noResultsSub:'يرجى المتابعة لاحقاً حتى تعلن لجنة التحكيم النتائج.',
    stage1Top5:'المرحلة الأولى — أفضل 5 فرق', stage2Final:'المرحلة الثانية — النتائج النهائية', winner:'الفائز', outOf100:'/ 100',
    nextUp:'التالي', idleTitle:'لا يوجد فريق يُعرض حالياً', idleSub:'سيظهر العرض التالي هنا تلقائياً.',
    aboutEmpty:'حول المسابقة — قريباً.', footer:'مهرجان الأردن للتكنولوجيا المالية 2026 · اللوحة العامة',
    timeUp:'انتهى الوقت', reconnecting:'إعادة الاتصال… يُعرض آخر تحديث', nowLive:'مباشر الآن: ', about:'عن هذا الفريق'
  }
};
let lang = 'en';
function t(k){ return I18N[lang][k] || k; }
const $ = id => document.getElementById(id);
// database text is escaped before it goes into any innerHTML template (see app.js esc()).
const esc = v => String(v == null ? '' : v).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const safeColor = c => (typeof c === 'string' && /^(#[0-9a-f]{3,8}|[a-z]+|(rgb|hsl)a?\([\d\s.,%\/]+\))$/i.test(c.trim())) ? c.trim() : '';


const TEAM_PALETTE = ['#3B6E8F','#C2542E','#5C8A6B','#8A5C9E','#B5872F','#4E6E9E','#9E5C6E','#5C9E8E'];
function teamColorFor(tm){
  if (safeColor(tm.accent_color)) return safeColor(tm.accent_color);
  let h = 0;
  for (const ch of String(tm.id)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return TEAM_PALETTE[h % TEAM_PALETTE.length];
}
function teamInitials(name){ return (name || '').trim().split(/\s+/).map(w => w[0]).join('').slice(0,2).toUpperCase(); }
function avatarHtml(tm, size){
  size = size || 40;
  return `<div class="team-avatar" style="width:${size}px;height:${size}px;font-size:${Math.round(size*0.36)}px;background:${teamColorFor(tm)};">${esc(teamInitials(tm.company_name))}</div>`;
}
function teamById(id){ return allTeams.find(tm => tm.id === id) || { id, company_name: '' }; }
function pad(n){ return String(n).padStart(2,'0'); }

const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
let criteria1 = [], settings = {}, lb1 = [], lb2 = [], allTeams = [];

/* server clock: see app.js — the countdown must match the room even if this display's clock drifts */
let clockOffset = 0;
const serverNow = () => Date.now() + clockOffset;
async function syncServerClock(){
  try {
    const t0 = Date.now();
    const res = await fetch(`${SUPABASE_URL}/rest/v1/site_settings?select=key&limit=1`, { headers: { apikey: SUPABASE_ANON_KEY }, cache: 'no-store' });
    const t1 = Date.now();
    const hdr = res.headers.get('Date');
    if (!hdr) return;
    const off = (new Date(hdr).getTime() + 500) - (t0 + t1) / 2;
    clockOffset = Math.abs(off) > 2000 && Math.abs(off) < 6 * 3600e3 ? off : 0;
  } catch (e) { /* keep last offset */ }
}

/* unattended screen: if data stops arriving keep showing the last good state and say so, rather
   than blanking (supabase-js returns {error}, not a throw, so an outage used to wipe the display) */
const connBadge = document.createElement('div');
connBadge.className = 'conn-badge'; connBadge.setAttribute('role', 'status');
document.body.appendChild(connBadge);
function setConn(ok){ connBadge.textContent = ok ? '' : t('reconnecting'); connBadge.classList.toggle('show', !ok); }
const announcer = document.createElement('div');
announcer.className = 'sr-only'; announcer.setAttribute('role', 'status'); announcer.setAttribute('aria-live', 'polite');
document.body.appendChild(announcer);

async function loadData(){
  const results = await Promise.all([
    db.from('criteria').select('*').eq('stage', 1).order('sort_order'),
    db.from('site_settings').select('*'),
    db.from('leaderboard').select('*').eq('eval_stage', 1),
    db.from('stage2_leaderboard').select('*'),
    db.from('teams').select('id, company_name, category, stage, accent_color, description_en, description_ar'),
  ]);
  // the settings + teams reads drive the live card and the timer: if either failed, keep the last good state
  if (results[1].error || results[4].error) throw new Error('kiosk data unavailable');
  const [{ data: c1 }, { data: settingsRows }, { data: lb1rows }, { data: lb2rows }, { data: teamRows }] = results;
  criteria1 = c1 || [];
  settings = {};
  (settingsRows || []).forEach(s => settings[s.key] = s.value);
  lb1 = (lb1rows || []).slice().sort((a,b) => b.weighted_score - a.weighted_score);
  lb2 = (lb2rows || []).slice().sort((a,b) => b.weighted_score - a.weighted_score);
  allTeams = teamRows || [];
}

/* -------- persistent top strip -------- */
function timerState(){
  let text = '', timeUp = false, urgent = false, frac = 1, hasTimer = false;
  if (settings.timer_started_at) {
    hasTimer = true;
    const started = new Date(settings.timer_started_at).getTime();
    const duration = Number(settings.timer_duration_seconds || 600);
    const remaining = Math.max(0, duration - Math.floor((serverNow() - started) / 1000));
    timeUp = remaining <= 0;
    text = timeUp ? t('timeUp') : `${pad(Math.floor(remaining/60))}:${pad(remaining%60)}`;
    urgent = !timeUp && remaining <= 60;
    frac = duration > 0 ? remaining / duration : 0;
  }
  return { text, timeUp, urgent, frac, hasTimer };
}
function renderStrip(){
  const liveId = settings.live_team_id ? Number(settings.live_team_id) : null;
  const liveTeam = liveId ? allTeams.find(tm => tm.id === liveId) : null;
  const ts = timerState();
  $('stripNow').innerHTML = liveTeam
    ? `<span class="live-pill${ts.urgent ? ' urgent' : ''}"><span class="live-pill-dot"></span><span class="live-pill-label">${esc(liveTeam.company_name)}</span>${ts.text ? `<span class="live-pill-timer">${ts.text}</span>` : ''}</span>`
    : `<span class="idle">${t('idleTitle')}</span>`;
  $('stripProgress').classList.toggle('hide', !liveTeam || !ts.hasTimer);
  $('stripProgressFill').style.transform = `scaleX(${Math.max(0, Math.min(1, ts.frac))})`;
  $('stripProgressFill').classList.toggle('urgent', ts.urgent);

  const nextId = settings.next_up_team_id ? Number(settings.next_up_team_id) : null;
  const nextTeam = nextId ? allTeams.find(tm => tm.id === nextId) : null;
  $('stripNext').classList.toggle('hide', !nextTeam);
  if (nextTeam){ $('stripNext').innerHTML = `${t('nextUp')} <b>${esc(nextTeam.company_name)}</b>`; }
}

/* -------- live team hero card (ported wlt-card visual, flat skin only) -------- */
function pvCardHtml(tm){
  const meta = [tm.category, tm.stage].filter(Boolean).join(' · ');
  return `
    <div class="pv-card pv-live" style="--tc:${teamColorFor(tm)}; background:var(--tc);">
      <div class="pv-ring"><div class="pv-ring-spin"></div></div>
      <div class="pv-chip-float"><div class="pv-chip">${'<div class="pv-chip-pad"></div>'.repeat(5)}</div></div>
      <div class="pv-head">
        <div class="pv-top">
          <div class="pv-top-text"><div class="pv-name">${esc(tm.company_name)}</div><div class="pv-meta">${esc(meta)}</div></div>
          <img class="pv-mark" src="assets/jo-mark.png" alt="">
        </div>
        <span class="pv-seal"><span class="dot-static"></span>LIVE NOW</span>
      </div>
      <div class="pv-mid"><svg class="pv-shape" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg"><polygon points="90,90 90,18 18,90" fill="none" stroke="#fff" stroke-width="1.6"/><polygon points="90,90 90,42 42,90" fill="none" stroke="#fff" stroke-width="1.6"/></svg></div>
      <div class="pv-bottom">
        <div class="pv-num">&bull;&bull;&bull;&bull; ${pad(tm.id)}</div>
        <div class="pv-powered"><img src="assets/green-circle-mark.png" alt=""><span>Powered by Green Circle</span></div>
      </div>
    </div>
  `;
}
function renderHero(){
  const liveId = settings.live_team_id ? Number(settings.live_team_id) : null;
  const liveTeam = liveId ? allTeams.find(tm => tm.id === liveId) : null;
  if (!liveTeam){
    $('heroWrap').innerHTML = `<div class="hero-idle"><img src="assets/jo-mark.png" alt=""><div class="t">${t('idleTitle')}</div><div class="s">${t('idleSub')}</div></div>`;
    return;
  }
  const desc = (lang === 'ar' ? liveTeam.description_ar : liveTeam.description_en) || liveTeam.description_en;
  $('heroWrap').innerHTML = `
    <div class="pv-card-row">
      ${pvCardHtml(liveTeam)}
      <div class="pv-about">
        <div class="l">${t('about')}</div>
        <div class="v">${desc ? esc(desc) : `<span class="empty">—</span>`}</div>
      </div>
    </div>
  `;
}

/* -------- rotating content: rubric / results / about, seamless crossfade -------- */
function renderRubric(){
  $('eyebrowText').textContent = t('eyebrow');
  $('rubricList').innerHTML = criteria1.map((c) => {
    const label = lang === 'ar' ? c.label_ar : c.label_en;
    const desc = lang === 'ar' ? c.description_ar : c.description_en;
    const pct = Math.round(c.weight*100);
    return `
      <div class="rb-card">
        <div class="rb-weight-col"><div class="rb-weight">${pct}%</div><div class="rb-weight-bar"><i style="width:${pct}%"></i></div></div>
        <div class="rb-body"><h3>${esc(label)}</h3><div class="rb-desc">${esc(desc || '')}</div></div>
      </div>
    `;
  }).join('') + `<div class="rb-total">${t('totalWeight')}</div>`;
}
function winnerRow(row){
  const tm = teamById(row.team_id);
  return `
    <div class="winner-row">
      ${avatarHtml(tm, 52)}
      <div><div class="winner-name">${esc(row.company_name)}</div><div class="winner-cat">${esc(row.category)}</div></div>
      <div class="winner-score">${row.weighted_score.toFixed(1)}<span style="font-size:var(--fs-sm);color:var(--muted);font-weight:500;"> ${t('outOf100')}</span></div>
    </div>
  `;
}
function rankRows(rows, startRank){
  return rows.map((r,i) => {
    const tm = teamById(r.team_id);
    return `
    <div class="rank-row">
      <div class="rk">${String(i+startRank).padStart(2,'0')}</div>
      ${avatarHtml(tm, 36)}
      <div><div class="nm">${esc(r.company_name)}</div><div class="ct">${esc(r.category)}</div></div>
      <div class="sc">${r.weighted_score.toFixed(1)}</div>
    </div>
  `;
  }).join('');
}
function renderResults(){
  let html = '';
  const s1on = settings.stage1_published === 'true' && lb1.length > 0;
  const s2on = settings.stage2_published === 'true' && lb2.length > 0;
  if (s2on) html += `<div class="results-section"><h2 class="section-h">${t('stage2Final')}</h2>${winnerRow(lb2[0])}${rankRows(lb2.slice(1), 2)}</div>`;
  if (s1on) html += `<div class="results-section"><h2 class="section-h">${t('stage1Top5')}</h2>${rankRows(lb1.slice(0,5), 1)}</div>`;
  if (!s1on && !s2on) html = `<div class="empty-state"><div style="font-size:var(--fs-xl);font-weight:700;margin-bottom:6px;color:var(--text);">${t('noResults')}</div><div style="font-size:var(--fs-base);">${t('noResultsSub')}</div></div>`;
  $('resultsContent').innerHTML = html;
}
function renderAbout(){
  const content = lang === 'ar' ? settings.about_ar : settings.about_en;
  $('aboutContent').textContent = content || t('aboutEmpty');
}

/* No hard cuts: only ever crossfade between the three rotating views, never swap
   instantly — same "no hard cuts" rule the judge app's own motion language follows. */
const ROTATE_VIEWS = ['rubric','results','about'];
let rotateIdx = 0, rotateTimer = null;
function showRotateView(i){
  document.querySelectorAll('.rot-view').forEach(el => el.classList.toggle('active', el.dataset.view === ROTATE_VIEWS[i]));
  document.querySelectorAll('.rot-dots i').forEach((el, idx) => el.classList.toggle('active', idx === i));
}
function advanceRotate(){ rotateIdx = (rotateIdx + 1) % ROTATE_VIEWS.length; showRotateView(rotateIdx); }
function startRotator(){
  $('rotDots').innerHTML = ROTATE_VIEWS.map(() => '<i></i>').join('');
  showRotateView(0);
  clearInterval(rotateTimer);
  rotateTimer = setInterval(advanceRotate, 14000);
}

function applyLang(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  $('footerTag').textContent = t('footer');
}

// Hero only re-renders when the live team actually changes (or lastLiveId is reset by
// a language switch) — rebuilding the ring/card DOM every second would restart its CSS
// animation and make the border ring visibly stutter once a minute forever.
let lastLiveId;
function tick(){
  renderStrip();
  const liveId = settings.live_team_id ? Number(settings.live_team_id) : null;
  if (liveId !== lastLiveId){
    const first = lastLiveId === undefined;
    lastLiveId = liveId; renderHero();
    const lt = liveId ? allTeams.find(tm => tm.id === liveId) : null;
    if (!first && lt) { announcer.textContent = ''; setTimeout(() => { announcer.textContent = t('nowLive') + lt.company_name; }, 60); }
  }
}

async function poll(){
  const prevLang = lang;
  try { await loadData(); setConn(true); } catch (e) { setConn(false); return; }
  lang = settings.public_view_lang === 'ar' ? 'ar' : 'en';
  if (lang !== prevLang){
    applyLang();
    lastLiveId = undefined; // force the hero (and its team-language text) to re-render too
  }
  // Always re-render, not just on a language change — the underlying data (published
  // results, edited criteria/about text) can change between polls just as easily.
  renderRubric(); renderResults(); renderAbout();
}

async function boot(){
  await loadData();
  lang = settings.public_view_lang === 'ar' ? 'ar' : 'en';
  applyLang();
  renderRubric();
  renderResults();
  renderAbout();
  tick();
  startRotator();
  setInterval(tick, 1000);
  syncServerClock(); setInterval(syncServerClock, 300000);
  // Realtime first, polling as the safety net: the fast poll only relaxes once a real event has arrived
  let proven = false, pollTimer = setInterval(poll, 6000), rt = null;
  const onChange = () => {
    if (!proven) { proven = true; clearInterval(pollTimer); pollTimer = setInterval(poll, 20000); }
    clearTimeout(onChange.t); onChange.t = setTimeout(poll, 150);
  };
  try {
    rt = db.channel('kiosk-live-state')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'site_settings' }, onChange)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'teams' }, onChange)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'criteria' }, onChange)
      .subscribe();
  } catch (e) { /* polling alone still works */ }
}
boot().catch(() => { setConn(false); setTimeout(() => location.reload(), 15000); });

if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
}
