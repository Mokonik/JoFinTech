const I18N = {
  en: { score:'Score', myscores:'My scores', admin:'Admin', signOut:'Sign out', back:'Back to list',
        save:'Save score', required:'Score every criterion before saving.', saved:'Saved',
        liveNow:'Live now', notesLabel:'Notes (optional)', noTeams:'No teams in this stage yet.',
        myNoScores:'You have not scored any team yet.', locked:'Locked — not the live team',
        gateSub:'Enter your judge code to continue', signInBtn:'Sign in', codeNotRecognized:'Code not recognized.',
        restricted:'restricted', doneBtn:'Done', soFar:'so far', partial:'(partial)', noMatches:'No matches.',
        saveConnErr:'Could not save — check your connection and try again.', noConnection:'No connection — check your internet and try again.', inAppNotice:'This looks like an in-app browser (WhatsApp, Instagram, etc.). For smooth scoring, open this page in Chrome or Safari.', copyLink:'Copy link', linkCopied:'Link copied — paste it in Chrome or Safari', installApp:'Install app', iosInstallTip:'Tip: tap Share, then Add to Home Screen, to score full-screen.', offlineShowing:'Offline — showing your last saved data',  syncWaiting:'Not sent yet — waiting to upload:', syncRetry:'Retry now', syncOffline:'You are offline. Your scores are kept on this device.', tooManyAttempts:'Too many attempts — wait a moment and try again.', annOneMin:'One minute left', annTenSec:'Ten seconds left', annTimeUp:"Time's up", annNowLive:'Now live: ', teamInfo:'About this team',
        autosaveNote:'scored — saves automatically',
        scoreLiveNow:'Score this team', otherTeams:'Other teams',
        progressLabel:'criteria scored', emptyMyScores:'You haven\'t scored any team yet.', goScore:'Go to Score',
        lockScore:'Lock score', unlockScore:'Unlock to edit', scoreLocked:'Locked — this score is final',
        ackTitle:'Before you start scoring', ackBody:'Please confirm you\'ve read the judging criteria and understand the 1–10 scale for each one.',
        ackCheckbox:'I\'ve read the criteria and understand the scale', ackContinue:'Continue',
        sessionConflict:'Also signed in on another device — scores may overwrite each other.',
        ackRulebookLink:'View the full rulebook on the public page →', lockErr:'Could not update lock:', clearSearch:'Clear search', scoredLabel:'scored', searchTeams:'Search teams...',
        walletCriteria:'Criteria', walletTotal:'Statement total', walletPosted:'criteria posted',
        walletWorth:'Worth ', walletOfTotal:'% of this team\'s total', walletLiveJump:'Jump to live', walletScrollHint:'Scroll',
        walletStackAria:'Team cards. Use up and down arrow keys to browse, enter to open.', walletPosOf:' — card ', poweredBy:'Powered by Green Circle', timeUp:"TIME'S UP", notLiveYet:'Not live yet', walletScored:'Scored' },
  ar: { score:'التقييم', myscores:'تقييماتي', admin:'الإدارة', signOut:'تسجيل خروج', back:'العودة للقائمة',
        save:'حفظ التقييم', required:'يرجى تقييم جميع المعايير قبل الحفظ.', saved:'تم الحفظ',
        liveNow:'مباشر الآن', notesLabel:'ملاحظات (اختياري)', noTeams:'لا توجد فرق في هذه المرحلة بعد.',
        myNoScores:'لم تقم بتقييم أي فريق بعد.', locked:'مقفل — ليس الفريق المباشر الآن',
        gateSub:'أدخل رمز المحكّم للمتابعة', signInBtn:'تسجيل الدخول', codeNotRecognized:'الرمز غير معروف.',
        restricted:'مقيّد', doneBtn:'تم', soFar:'حتى الآن', partial:'(جزئي)', noMatches:'لا توجد نتائج مطابقة.',
        saveConnErr:'تعذر الحفظ — يرجى التحقق من الاتصال والمحاولة مرة أخرى.', noConnection:'لا يوجد اتصال — تحقق من الإنترنت وحاول مجدداً.', inAppNotice:'يبدو أنك تستخدم متصفحاً داخل تطبيق (واتساب، إنستغرام...). لتجربة أسلس افتح هذه الصفحة في Chrome أو Safari.', copyLink:'نسخ الرابط', linkCopied:'تم نسخ الرابط — الصقه في Chrome أو Safari', installApp:'تثبيت التطبيق', iosInstallTip:'نصيحة: اضغط مشاركة ثم إضافة إلى الشاشة الرئيسية للتقييم بملء الشاشة.', offlineShowing:'غير متصل — تُعرض آخر بياناتك المحفوظة',  syncWaiting:'لم يُرسل بعد — بانتظار الرفع:', syncRetry:'أعد المحاولة الآن', syncOffline:'أنت غير متصل. درجاتك محفوظة على هذا الجهاز.', tooManyAttempts:'محاولات كثيرة — انتظر قليلاً ثم حاول مجدداً.', annOneMin:'بقيت دقيقة واحدة', annTenSec:'بقيت عشر ثوانٍ', annTimeUp:'انتهى الوقت', annNowLive:'مباشر الآن: ', teamInfo:'عن هذا الفريق',
        autosaveNote:'تم التقييم — يُحفظ تلقائياً',
        scoreLiveNow:'قيّم هذا الفريق', otherTeams:'الفرق الأخرى',
        progressLabel:'معايير تم تقييمها', emptyMyScores:'لم تقم بتقييم أي فريق بعد.', goScore:'الذهاب إلى التقييم',
        lockScore:'قفل التقييم', unlockScore:'فتح للتعديل', scoreLocked:'مقفل — هذا التقييم نهائي',
        ackTitle:'قبل أن تبدأ التقييم', ackBody:'يرجى تأكيد أنك قرأت معايير التحكيم وتفهم مقياس ١–١٠ لكل منها.',
        ackCheckbox:'قرأت المعايير وأتفهم المقياس', ackContinue:'متابعة',
        sessionConflict:'مسجّل الدخول أيضاً من جهاز آخر — قد تتعارض التقييمات.',
        ackRulebookLink:'اطّلع على دليل التقييم الكامل في الصفحة العامة ←', lockErr:'تعذر تحديث القفل:', clearSearch:'مسح البحث', scoredLabel:'تم تقييمها', searchTeams:'ابحث عن فريق...',
        walletCriteria:'المعايير', walletTotal:'إجمالي التقييم', walletPosted:'معيار تم تقييمه',
        walletWorth:'يمثّل ', walletOfTotal:'% من إجمالي هذا الفريق', walletLiveJump:'الانتقال إلى المباشر', walletScrollHint:'مرّر',
        walletStackAria:'بطاقات الفرق. استخدم مفتاحي الأسهم لأعلى وأسفل للتصفح، وEnter للفتح.', walletPosOf:' — بطاقة ', poweredBy:'بدعم من Green Circle', timeUp:'انتهى الوقت', notLiveYet:'ليس مباشرًا بعد', walletScored:'تم التقييم' }
};
let lang = localStorage.getItem('lang') || 'en';
function t(k){ return I18N[lang][k] || k; }
function applyLang(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelector('#tabScore span').textContent = t('score');
  document.querySelector('#tabMyScores span').textContent = t('myscores');
  document.querySelector('#tabAdmin span').textContent = t('admin');
  document.getElementById('logout').textContent = t('signOut');
  document.getElementById('gateSub').textContent = t('gateSub');
  document.getElementById('signInBtn').textContent = t('signInBtn');
  if (typeof renderEnvNotice === 'function') renderEnvNotice();
  document.getElementById('sessionConflictText').textContent = t('sessionConflict');
  document.querySelectorAll('#langSeg button').forEach(b => { b.classList.toggle('active', b.dataset.l === lang); b.setAttribute('aria-pressed', b.dataset.l === lang ? 'true' : 'false'); });
  document.getElementById('langSeg').classList.toggle('alt', lang === 'ar');
  if (document.getElementById('teamProgressTxt') && teams.length) {
    const scoredCount = teams.filter(tm => mySavedScores[tm.id]).length;
    document.getElementById('teamProgressTxt').textContent = `${scoredCount} / ${teams.length} ${t('scoredLabel')}`;
  }
}
document.getElementById('langSeg').querySelectorAll('button').forEach(b => b.onclick = () => {
  lang = b.dataset.l;
  localStorage.setItem('lang', lang);
  applyLang();
  const detailOpen = currentTeam && !$('teamDetailWrap').classList.contains('hide');
  if (detailOpen) {
    lastRenderedTotal = null;
    renderDetail();
  } else if (lastView === 'myscores') {
    renderMyScores();
  } else if (lastView === 'admin') {
    drawAdmin();
  } else {
    renderTeamList();
  }
  const activeBtn = nav.querySelector('button.active');
  if (activeBtn) positionNavLine(activeBtn);
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
const moonIcon = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
const sunIcon = '<path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"/>';
function syncThemeIcon(){
  const current = document.documentElement.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.getElementById('themeIcon').innerHTML = current === 'dark' ? moonIcon : sunIcon;
}
document.getElementById('themeToggle').onclick = () => {
  const current = document.documentElement.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  syncThemeIcon();
};
syncThemeIcon();

function showToast(msg){
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 1700);
}

/* ---------- generic app modal: replaces confirm()/alert()/prompt() ---------- */
function openAppModal(opts){
  return new Promise(resolve => {
    const returnFocusTo = document.activeElement;
    const overlay = $('appModal'), msgEl = $('appModalMsg'), input = $('appModalInput'), cancelBtn = $('appModalCancel'), okBtn = $('appModalOk');
    msgEl.textContent = opts.message || '';
    okBtn.textContent = opts.okLabel || 'OK';
    cancelBtn.textContent = opts.cancelLabel || 'Cancel';
    cancelBtn.classList.toggle('hide', !!opts.hideCancel);
    input.classList.toggle('hide', !opts.input);
    input.value = opts.inputValue || '';
    overlay.classList.remove('hide');
    // Focus the safe choice: the input if there is one, else Cancel (so a stray Enter never
    // confirms a destructive action), else OK for alert-style dialogs with no Cancel.
    setTimeout(() => (opts.input ? input : (opts.hideCancel ? okBtn : cancelBtn)).focus(), 30);
    const cleanup = (result) => {
      overlay.classList.add('hide');
      okBtn.onclick = null; cancelBtn.onclick = null; input.onkeydown = null;
      if (returnFocusTo && returnFocusTo.focus && document.contains(returnFocusTo)) returnFocusTo.focus({ preventScroll: true });
      resolve(result);
    };
    okBtn.onclick = () => cleanup(opts.input ? input.value : true);
    cancelBtn.onclick = () => cleanup(opts.input ? null : false);
    input.onkeydown = (e) => { if (e.key === 'Enter') okBtn.click(); if (e.key === 'Escape') { e.preventDefault(); cancelBtn.click(); } };
  });
}
function appAlert(message){ return openAppModal({ message, hideCancel: true }); }
function appConfirm(message){ return openAppModal({ message }); }
function appPrompt(message, defaultValue){ return openAppModal({ message, input: true, inputValue: defaultValue }); }

/* ---------- rpc(): every admin/judge mutation goes through this so errors are never silently swallowed ---------- */
async function rpc(name, params, opts){
  opts = opts || {};
  try {
    const { data, error } = await db.rpc(name, params);
    if (error) {
      if (!opts.silent) await appAlert((opts.errorPrefix || 'Something went wrong:') + ' ' + error.message);
      return { data: null, error };
    }
    return { data, error: null };
  } catch (e) {
    if (!opts.silent) await appAlert((opts.errorPrefix || 'Connection error:') + ' ' + (e && e.message ? e.message : String(e)));
    return { data: null, error: e };
  }
}


(function setupSheetSwipeDismiss(){
  let dragging = false, startY = 0, dragY = 0, cardEl = null;
  document.addEventListener('pointerdown', e => {
    const grip = e.target.closest('.sheet-grip');
    if (!grip || window.innerWidth > 720) return;
    cardEl = grip.closest('.detail-card');
    if (!cardEl) return;
    dragging = true; startY = e.clientY; dragY = 0;
    cardEl.style.transition = 'none';
  });
  document.addEventListener('pointermove', e => {
    if (!dragging || !cardEl) return;
    dragY = Math.max(0, e.clientY - startY);
    cardEl.style.transform = `translateY(${dragY}px)`;
  });
  document.addEventListener('pointerup', () => {
    if (!dragging || !cardEl) return;
    dragging = false;
    cardEl.style.transition = 'transform .3s var(--ease-glide)';
    if (dragY > 90 || dragY <= 4) {
      // a real drag past the threshold, or a plain tap on the grip (reachable
      // from anywhere via position:sticky) — both close the sheet
      haptic(10);
      const back = $('backToList');
      if (back) back.click();
    } else {
      cardEl.style.transform = 'translateY(0)';
    }
    cardEl = null;
  });
})();

const $ = id => document.getElementById(id);
// Every string that came from the database (team/judge names, categories, notes, criteria
// labels, activity text) goes through esc() before it is interpolated into an innerHTML
// template — judges type free-text notes that admins later read, so raw interpolation was a
// stored-XSS path from judge to admin. Escapes quotes too, so it is safe in attributes.
const esc = v => String(v == null ? '' : v).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
// accent_color lands in a style attribute — only ever accept a plain colour value.
const safeColor = c => (typeof c === 'string' && /^(#[0-9a-f]{3,8}|[a-z]+|(rgb|hsl)a?\([\d\s.,%\/]+\))$/i.test(c.trim())) ? c.trim() : '';
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* ---------- server clock ----------
   The timer is an absolute start timestamp set on the server, but each phone compared it to its
   OWN clock, so a phone that is a minute off showed a different countdown from the room. The
   HTTP Date header (exposed to CORS by Supabase) gives the server's time; the offset is applied
   only when it is big enough to matter (>2s), since the header only has 1-second resolution. */
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
  } catch (e) { /* keep the last known offset */ }
}

/* ---------- screen-reader announcer (timer thresholds, live team changes) ---------- */
const liveAnnouncer = document.createElement('div');
liveAnnouncer.className = 'sr-only'; liveAnnouncer.id = 'liveAnnounce';
liveAnnouncer.setAttribute('role', 'status'); liveAnnouncer.setAttribute('aria-live', 'polite');
document.body.appendChild(liveAnnouncer);
function announce(msg){ liveAnnouncer.textContent = ''; setTimeout(() => { liveAnnouncer.textContent = msg; }, 60); }

const TEAM_PALETTE = ['#3B6E8F','#C2542E','#5C8A6B','#8A5C9E','#B5872F','#4E6E9E','#9E5C6E','#5C9E8E'];
async function logActivity(action, detail){
  try { await db.rpc('admin_log_activity', { admin_code: judge.code, action, detail: detail || '' }); } catch (e) { /* v6 migration not run yet — non-fatal */ }
}
function teamColor(tm){
  if (safeColor(tm.accent_color)) return safeColor(tm.accent_color);
  let h = 0;
  for (const ch of String(tm.id)) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return TEAM_PALETTE[h % TEAM_PALETTE.length];
}
function teamInitials(name){
  return (name || '').trim().split(/\s+/).map(w => w[0]).join('').slice(0,2).toUpperCase();
}
function avatarHtml(tm, size){
  size = size || 40;
  return `<div class="team-avatar" style="width:${size}px;height:${size}px;font-size:${Math.round(size*0.36)}px;background:${teamColor(tm)};">${esc(teamInitials(tm.company_name))}</div>`;
}
function spectrumColor(n){
  const hue = ((n - 1) / 9) * 120; // 1=red, 10=green
  return `hsl(${hue}, 62%, 45%)`;
}
function mascotSvg(size){
  size = size || 72;
  return `<svg width="${size}" height="${size}" viewBox="0 0 90 90" style="display:block;margin:0 auto;">
    <circle cx="45" cy="45" r="40" fill="var(--acc)"/>
    <circle cx="33" cy="40" r="5" fill="#fff"/><circle cx="57" cy="40" r="5" fill="#fff"/>
    <path d="M30 58 Q45 70 60 58" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M20 25 Q30 10 45 15" stroke="var(--live)" stroke-width="5" fill="none" stroke-linecap="round"/>
  </svg>`;
}
/* ---------- module-level state, who owns what and when it resets ----------
   judge/teams/criteria/mySavedScores/settings/currentStage: refreshed wholesale by loadData(), called on
     sign-in and every 5s poll (refreshLiveData). Never mutate these piecemeal outside loadData().
   allTeamsCache/allScoresCache: admin-only read caches, refreshed each time their admin section draws.
   currentTeam/current/currentNotes: the currently-open team in the Score detail view; set in openTeam(),
     cleared implicitly by whatever renders next (renderTeamList/renderMyScores/drawAdmin).
   pendingAvatarReturn/checkAnimatedKeys/cardFlipIdx/incompleteConfirmArmed/lastRenderedTotal: all
     scoped to "the team detail view session" — reset together in openTeam(), read/consumed once
     then cleared (see captureAvatarReturn/flipAvatar) so they don't leak into the next team opened.
------------------------------------------------------------------------- */
let judge = null, teams = [], criteria = [], mySavedScores = {}, settings = {}, currentStage = 1;
let currentTeam = null, current = {}, currentNotes = '';
// Classic view's toggle is gone — wallet is the only judging UI now. The classic
// renderTeamList/renderDetail/openTeam functions are still here (every judgeView
// check below still branches past them), left in place rather than torn out under
// time pressure; safe to delete outright in a future pass once nothing depends on it.
let judgeView = 'wallet';
let walletActiveId = null, walletSheetKey = null, walletSheetVal = null, walletExpandedKey = null;
const WLT_SKINS = ['wlt-skin-flat','wlt-skin-metal','wlt-skin-split','wlt-skin-ribbon','wlt-skin-frost'];
// Human-readable names for the admin card-style picker — same order as WLT_SKINS.
const WLT_SKIN_NAMES = { 'wlt-skin-flat':'Flat + Shape', 'wlt-skin-metal':'Engraved Metal', 'wlt-skin-split':'Split Block', 'wlt-skin-ribbon':'Ribbon', 'wlt-skin-frost':'Frosted Glass' };
const WLT_ICONS = [
  '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
  '<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/>',
  '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/><path d="M9 12l2 2 4-4"/>',
  '<circle cx="8" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M2 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M15 20c0-2.2 1-4.2 2.6-5.4"/>',
  '<path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/>'
];
// The real mark (assets/jo-mark.png) — the previous hand-traced two-rectangle-plus-
// star SVG was a rough guess and visibly wrong (real proportions, hook shape and star
// all differ). On-card usage still wants a flat, near-white "engraved" treatment like
// every other card detail, so it goes through the same filter trick as the Green
// Circle mark rather than trying to recolor a raster image with string replacement.
function wltMark(size){ return `<img class="wlt-mark" src="assets/jo-mark.png" alt="" style="height:${size}px;">`; }
function wltChip(){ return `<div class="wlt-chip">${'<div class="wlt-chip-pad"></div>'.repeat(5)}</div>`; }
if ($('joMarkPlateHeader')) $('joMarkPlateHeader').innerHTML = `<img src="assets/jo-mark.png" alt="JO Fintech Festival" style="height:22px; display:block;">`;
if ($('joMarkPlateGate')) $('joMarkPlateGate').innerHTML = `<img src="assets/jo-mark.png" alt="JO Fintech Festival" style="height:16px; display:block;">`;
const WLT_SPLIT_CUTS = [
  'polygon(0 0, 60% 0, 32% 100%, 0 100%)',
  'polygon(100% 0, 100% 100%, 38% 100%, 66% 0)',
  'polygon(0 100%, 100% 100%, 100% 30%, 0 62%)',
];
// 235 at the wrap's own (now 360px, was 380) max-width lands close to real ISO-7810
// card proportions (~1.53:1, ISO is 1.586:1) across the realistic 360-430px phone
// range, instead of the old 260px height going nearly square on a 360-wide phone
// (328x260 = 1.26:1). Keep this in sync with .wlt-card's CSS height and
// .wlt-stack-wrap's max-width, both hardcoded to match (see styles.css).
const WLT_CARD_H = 235, WLT_REVEAL = 96, WLT_HERO_H = WLT_CARD_H;
// Sliding window of 4: only ever 4 cards on stage, quantized one-slot-per-gesture.
// Front card carries the biggest offset (most "forward"); back cards peek their own
// top strip above it — same reveal distance the old full stack used, so the name
// still leads every peek exactly the way it always has.
let wltWindowStart = 0, wltLastList = [], wltStackAnimating = false, wltCardSkinColumnMissing = false;
// The front card used to sit flush against the stack box's own bottom edge — zero
// room for its own shadow or the hover-lift transform to bleed into, so both were
// getting clipped flat by the overflow:hidden the page-scroll-height fix needs (see
// WLT_STAGE_H below). WLT_BLEED_TOP/BOTTOM carve out real empty space the box still
// clips (so off-window cards 160-480px away stay hidden) but that's big enough for
// normal in-window interaction to breathe. Every slot top and the hero/back-to-list
// positions below are all offset by WLT_BLEED_TOP so the box grows without moving
// where any card visually sits.
const WLT_BLEED_TOP = 12, WLT_BLEED_BOTTOM = 26;
// Three cards read at a time (front + two name-slivers); the fourth is deliberately only half
// revealed: just enough card edge to say "there is more, scroll" without a label taking room.
const WLT_HALF = 48;
const WLT_SLOTS = [
  { top: WLT_BLEED_TOP + WLT_HALF + 2 * WLT_REVEAL, scale: 1,   z: 40 },
  { top: WLT_BLEED_TOP + WLT_HALF + 1 * WLT_REVEAL, scale: .97, z: 30 },
  { top: WLT_BLEED_TOP + WLT_HALF,                  scale: .94, z: 20 },
  { top: WLT_BLEED_TOP,                             scale: .91, z: 10 },
];
const WLT_STAGE_H = WLT_BLEED_TOP + WLT_HALF + 2 * WLT_REVEAL + WLT_CARD_H + WLT_BLEED_BOTTOM;
// .wlt-scroll-rail is positioned relative to .wlt-stack-wrap, not .wlt-stack — every
// other WLT_SLOTS-based position lands inside .wlt-stack itself, so anything placed
// against the wrap needs .wlt-stack's own 26px margin-top plus the wrap's 4px
// padding-top added back in, or it renders 30px higher than the numbers suggest.
// Keep in sync with .wlt-stack-wrap's padding-top and .wlt-stack's margin-top in CSS.
const WLT_STACK_TOP_OFFSET = 18;
let timerInterval = null, dataRefreshInterval = null;

/* ---------- live-state delivery: Realtime first, polling as the safety net ----------
   Polling every 5s meant every device could disagree for up to 5s and made N requests per cycle.
   Realtime pushes a change the moment it is written. Because a table may not be in the Supabase
   realtime publication (the channel would still report SUBSCRIBED and just never fire), the
   fast poll is only relaxed AFTER a real event has actually arrived. */
const POLL_FAST = 5000, POLL_SLOW = 20000;
let realtimeProven = false, realtimeChannel = null, rtDebounce = null;
function restartDataPolling(){
  if (dataRefreshInterval) clearInterval(dataRefreshInterval);
  dataRefreshInterval = setInterval(refreshLiveData, realtimeProven ? POLL_SLOW : POLL_FAST);
}
function startRealtime(){
  if (realtimeChannel) return;
  try {
    const onChange = () => {
      forceFullRefresh = true;
      if (!realtimeProven) { realtimeProven = true; if (dataRefreshInterval) restartDataPolling(); }
      clearTimeout(rtDebounce);
      rtDebounce = setTimeout(() => { if (judge && !document.hidden) refreshLiveData(); }, 150);
    };
    realtimeChannel = db.channel('judge-live-state')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'site_settings' }, onChange)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'teams' }, onChange)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'criteria' }, onChange)
      .subscribe();
  } catch (e) { realtimeChannel = null; }
}
function stopRealtime(){
  if (realtimeChannel) { try { db.removeChannel(realtimeChannel); } catch (e) {} realtimeChannel = null; }
  realtimeProven = false;
}
let adminSettingsMap = {};

/* pause the 1s timer tick + 5s network poll while the tab is backgrounded/screen locked —
   these ran unconditionally before, costing a Supabase round-trip every 5s even with the phone
   screen off, which is real battery/data/radio-wake cost during a multi-hour live event. */
document.addEventListener('visibilitychange', () => {
  if (!judge) return;
  if (document.hidden) {
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
    if (dataRefreshInterval) { clearInterval(dataRefreshInterval); dataRefreshInterval = null; }
  } else {
    if (!timerInterval) timerInterval = setInterval(tickLiveTimer, 1000);
    if (!dataRefreshInterval) { restartDataPolling(); refreshLiveData(); }
    syncServerClock();
    flushOutbox();
  }
});

// Client-side brake only (the real limit has to live in the database): after 5 wrong codes the
// button goes quiet for a while, doubling each further miss up to 5 minutes.
let signInFails = 0, signInLockUntil = 0;
async function signIn(){
  const code = $('code').value.trim();
  if (!code) return;
  if (Date.now() < signInLockUntil) { $('gateMsg').textContent = t('tooManyAttempts'); return; }
  const { data, error } = await db.rpc('judge_sign_in', { input_code: code });
  // A failed request is not a wrong code: say "no connection" and do not count it as a bad attempt.
  if (error && (navigator.onLine === false || !error.code || /fetch|network|timeout/i.test(error.message || ''))) {
    $('gateMsg').textContent = t('noConnection'); return;
  }
  if (error || !data || !data.length) {
    signInFails++;
    if (signInFails >= 5) signInLockUntil = Date.now() + Math.min(300000, 15000 * Math.pow(2, signInFails - 5));
    $('gateMsg').textContent = t('codeNotRecognized'); $('code').classList.add('input-error'); return;
  }
  signInFails = 0;
  $('code').classList.remove('input-error');
  const row = data[0];
  judge = { id: row.id, name: row.name, code, is_admin: row.is_admin };
  sessionStorage.setItem('judgeCode', code);
  $('gate').classList.add('hide');
  $('app').classList.remove('hide');
  $('who').innerHTML = `<span class="judge-chip">${avatarHtml({ id: judge.id, company_name: judge.name }, 24)}${esc(judge.name)}${judge.is_admin ? ' · admin' : ''}</span>`;
  $('tabAdmin').classList.toggle('hide', !judge.is_admin);
  applyLang();
  $('teamListWrap').innerHTML = Array.from({length:4}).map((_,i) => `<div class="skel skel-row" style="--i:${i}"></div>`).join('');
  await loadData();
  renderTeamList();
  lastListSnapshot = listSnapshot();
  const reopenId = sessionStorage.getItem('openTeamId');
  if (reopenId && teams.find(tm => tm.id === Number(reopenId))) openTeam(Number(reopenId));
  timerInterval = setInterval(tickLiveTimer, 1000);
  restartDataPolling();
  syncServerClock();
  startRealtime();
  flushOutbox();
  setTimeout(() => positionNavLine(nav.querySelector('button.active')), 60);
  if (!judge.is_admin) checkRubricAck();
  claimSession();
}

let mySessionToken = null;
async function claimSession(){
  mySessionToken = sessionStorage.getItem('sessionToken') || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random());
  sessionStorage.setItem('sessionToken', mySessionToken);
  try { await db.rpc('judge_claim_session', { judge_code: judge.code, session_token: mySessionToken }); } catch (e) { /* v7 migration not run yet — non-fatal */ }
}
async function checkSessionConflict(){
  if (!mySessionToken) return;
  try {
    const { data } = await db.rpc('judge_get_session', { judge_code: judge.code });
    if (data && data !== mySessionToken) $('sessionConflictBanner').classList.remove('hide');
  } catch (e) { /* v7 migration not run yet */ }
}

async function checkRubricAck(){
  if (settings.rubric_ack_enabled === 'false') return;
  try {
    const { data } = await db.rpc('judge_get_ack', { judge_code: judge.code });
    if (data === true) return;
  } catch (e) { return; /* v6 migration not run yet — skip gate rather than block judges */ }
  $('ackTitleEl').textContent = t('ackTitle');
  $('ackBodyEl').textContent = t('ackBody');
  $('ackRulebookLink').textContent = t('ackRulebookLink');
  $('ackCheckboxLabel').textContent = t('ackCheckbox');
  $('ackContinueBtn').textContent = t('ackContinue');
  $('ackCheckbox').checked = false;
  $('ackContinueBtn').disabled = true;
  $('ackContinueBtn').style.opacity = '.5';
  $('ackOverlay').classList.remove('hide');
  $('ackCheckbox').onchange = e => {
    $('ackContinueBtn').disabled = !e.target.checked;
    $('ackContinueBtn').style.opacity = e.target.checked ? '1' : '.5';
  };
  $('ackContinueBtn').onclick = async () => {
    if (!$('ackCheckbox').checked) return;
    await rpc('judge_ack_rubric', { judge_code: judge.code }, { silent: true });
    $('ackOverlay').classList.add('hide');
  };
}

function listSnapshot(){
  return JSON.stringify({
    settings, criteria: criteria.map(c => c.key),
    teams: teams.map(tm => [tm.id, tm.advanced_to_stage2, tm.accent_color]),
    scores: Object.keys(mySavedScores).sort().map(id => [id, mySavedScores[id].locked, JSON.stringify(mySavedScores[id].scores), mySavedScores[id].notes]),
  });
}
let lastListSnapshot = null;
/* The 5s poll used to run the whole loadData() (settings + teams + scores + criteria = 4-5 requests).
   Now a tick asks only for the small settings table (live team, timer, stage, published state) and
   compares it with what is on screen; the full reload happens when settings changed, when a realtime
   event says teams/criteria/scores changed (forceFullRefresh), and every 6th tick as a safety net. */
let pollTick = 0, forceFullRefresh = false;
async function refreshLiveData(){
  const detailOpen = !$('teamDetailWrap').classList.contains('hide');
  const full = forceFullRefresh || (++pollTick % 6 === 0);
  forceFullRefresh = false;
  if (!full) {
    const probe = await db.from('site_settings').select('*');
    if (probe.error) { if (restoreSnapshot() || teams.length) setOfflineMode(true); return; }
    setOfflineMode(false);
    if (settingsSig(probe.data) === lastSettingsSig) { checkSessionConflict(); return; }
  }
  await loadData();
  const liveNow = settings.live_team_id ? Number(settings.live_team_id) : null;
  if (announcedTeam !== null && liveNow && liveNow !== announcedTeam) {
    const lt = teams.find(tm => tm.id === liveNow);
    if (lt) announce(t('annNowLive') + lt.company_name);
  }
  announcedTeam = liveNow || announcedTeam;
  if (typeof wltSyncPinContext === 'function') wltSyncPinContext();
  renderLiveFeature();
  renderAdminLiveBanner();
  checkSessionConflict();
  if (detailOpen) return;
  const snap = listSnapshot();
  const changed = snap !== lastListSnapshot;
  lastListSnapshot = snap;
  if (!changed) return;
  const activeView = nav.querySelector('button.active')?.dataset.view;
  if (activeView === 'score') renderTeamList();
  if (activeView === 'myscores') renderMyScores();
}
$('signInBtn').onclick = signIn;
$('code').addEventListener('keydown', e => { if (e.key === 'Enter') signIn(); });
$('code').addEventListener('input', () => $('code').classList.remove('input-error'));

function signOut(){
  sessionStorage.removeItem('judgeCode');
  sessionStorage.removeItem('openTeamId');
  document.body.classList.remove('sheet-open');
  hideMoodOrb();
  judge = null; teams = []; mySavedScores = {}; currentTeam = null;
  if (timerInterval) clearInterval(timerInterval);
  if (dataRefreshInterval) clearInterval(dataRefreshInterval);
  stopRealtime();
  $('code').value = ''; $('gateMsg').textContent = '';
  $('tabAdmin').classList.add('hide');
  show('score');
  $('app').classList.add('hide');
  $('ackOverlay').classList.add('hide');
  $('sessionConflictBanner').classList.add('hide');
  mySessionToken = null;
  $('gate').classList.remove('hide');
}
$('sessionConflictDismiss').onclick = () => $('sessionConflictBanner').classList.add('hide');
$('logout').onclick = signOut;

// Mobile header: language/theme/sign-out collapse into one menu button under 720px
// (see the compact-header comment in styles.css) — desktop never shows the trigger,
// so this is inert there.
$('mobileMenuBtn').onclick = e => {
  e.stopPropagation();
  const open = $('headerControls').classList.toggle('menu-open');
  $('mobileMenuBtn').setAttribute('aria-expanded', String(open));
};
document.addEventListener('click', e => {
  if (!$('headerControls').classList.contains('menu-open')) return;
  if (e.target.closest('#headerControls') || e.target.closest('#mobileMenuBtn')) return;
  $('headerControls').classList.remove('menu-open');
  $('mobileMenuBtn').setAttribute('aria-expanded', 'false');
});

const nav = document.getElementById('mainNav');
const navLine = document.getElementById('navLine');
function positionNavLine(btn){
  const navRect = nav.getBoundingClientRect();
  const r = btn.getBoundingClientRect();
  navLine.style.left = (r.left - navRect.left) + 'px';
  navLine.style.width = r.width + 'px';
}
let lastView = 'score';
function show(view){
  if (view !== 'score') { document.body.classList.remove('sheet-open'); hideMoodOrb(); }
  lastView = view;
  ['score','myscores','admin'].forEach(v => {
    $('view' + v[0].toUpperCase() + v.slice(1)).classList.toggle('hide', v !== view);
  });
  nav.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  const activeBtn = nav.querySelector('button.active');
  if (activeBtn) positionNavLine(activeBtn);
  if (view === 'score') renderTeamList();
  if (view === 'myscores') renderMyScores();
  if (view === 'admin') drawAdmin();
}
nav.querySelectorAll('button').forEach(b => b.onclick = () => show(b.dataset.view));

/* ---- admin sidebar section switching ---- */
function positionAdminNavLine(){
  const active = document.querySelector('.admin-nav-item.active');
  const sidebar = document.querySelector('.admin-sidebar');
  const line = $('adminNavLine');
  if (!active || !sidebar || !line || window.innerWidth <= 900) return;
  const sRect = sidebar.getBoundingClientRect(), aRect = active.getBoundingClientRect();
  line.style.left = '10px'; line.style.width = (sRect.width - 20) + 'px';
  line.style.top = (aRect.top - sRect.top) + 'px'; line.style.height = aRect.height + 'px';
}
function showAdminSection(name){
  document.querySelectorAll('.admin-section').forEach(s => s.classList.toggle('hide', s.id !== 'adminSec-' + name));
  document.querySelectorAll('.admin-nav-item').forEach(b => b.classList.toggle('active', b.dataset.sec === name));
  closeAdminDrawers();
  positionAdminNavLine();
}
document.querySelectorAll('.admin-nav-item').forEach(b => b.onclick = () => showAdminSection(b.dataset.sec));

/* ---- admin: slide-in edit drawers ---- */
let drawerReturnFocus = null;
function openAdminDrawer(id){
  document.querySelectorAll('.admin-drawer.open').forEach(d => { if (d.id !== id) d.classList.remove('open'); });
  if (!document.querySelector('.admin-drawer.open')) drawerReturnFocus = document.activeElement;
  $(id).classList.add('open');
  $('adminDrawerBackdrop').classList.add('open');
  requestAnimationFrame(() => {
    const first = $(id).querySelector('input:not([type=hidden]), select, textarea') || $(id).querySelector('.admin-drawer-close');
    if (first) first.focus({ preventScroll: true });
  });
}
function closeAdminDrawers(){
  const wasOpen = document.querySelector('.admin-drawer.open');
  document.querySelectorAll('.admin-drawer.open').forEach(d => d.classList.remove('open'));
  $('adminDrawerBackdrop').classList.remove('open');
  if (wasOpen && drawerReturnFocus && document.contains(drawerReturnFocus)) drawerReturnFocus.focus({ preventScroll: true });
  drawerReturnFocus = null;
}
$('adminDrawerBackdrop').onclick = closeAdminDrawers;
// Delegated (no inline onclick=) so the page can run under a CSP without 'unsafe-inline' scripts.
document.addEventListener('click', e => {
  const go = e.target.closest && e.target.closest('[data-goto]');
  if (go) showAdminSection(go.dataset.goto);
});
// <main> is its own stacking context (z-index:2) below the sticky header (z-index:5), so a
// position:fixed drawer left inside it can never rise above the header no matter its own
// z-index. On the desktop slide-in layout the backdrop + drawers live on <body> instead;
// at <=900px they go back to their inline spot in the admin layout.
(function hoistAdminDrawers(){
  const nodes = [$('adminDrawerBackdrop'), ...document.querySelectorAll('.admin-drawer')];
  const homes = nodes.map(n => ({ n, parent:n.parentNode, next:n.nextSibling }));
  const mq = window.matchMedia('(min-width:901px)');
  const place = () => {
    if (mq.matches) homes.forEach(h => document.body.appendChild(h.n));
    else homes.slice().reverse().forEach(h => h.parent.insertBefore(h.n, h.next));
    // a slide-in drawer is a modal dialog; the inline (<=900px) version is just part of the page
    document.querySelectorAll('.admin-drawer').forEach(d => d.setAttribute('aria-modal', mq.matches ? 'true' : 'false'));
  };
  document.querySelectorAll('.admin-drawer').forEach(d => {
    d.setAttribute('role', 'dialog');
    const h = d.querySelector('h2');
    if (h) { if (!h.id) h.id = d.id + 'Title'; d.setAttribute('aria-labelledby', h.id); }
  });
  document.querySelectorAll('.admin-drawer-close').forEach(b => b.setAttribute('aria-label', 'Close'));
  place();
  mq.addEventListener('change', place);
})();

/* ---------- dialog keyboard behaviour: Escape closes, Tab stays inside the topmost dialog ---------- */
const FOCUSABLE_SEL = 'a[href], button:not([disabled]), input:not([disabled]):not([type=hidden]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
function topDialog(){
  const modal = $('appModal'); if (modal && !modal.classList.contains('hide')) return modal;
  const ack = $('ackOverlay'); if (ack && !ack.classList.contains('hide')) return ack;
  return window.matchMedia('(min-width:901px)').matches ? document.querySelector('.admin-drawer.open') : null;
}
document.addEventListener('keydown', e => {
  if (e.defaultPrevented) return;
  const dlg = topDialog(); if (!dlg) return;
  if (e.key === 'Escape') {
    if (dlg.id === 'appModal') $('appModalCancel').click();
    else if (dlg.classList.contains('admin-drawer')) closeAdminDrawers();
    return;
  }
  if (e.key !== 'Tab') return;
  const f = Array.from(dlg.querySelectorAll(FOCUSABLE_SEL)).filter(x => x.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (!dlg.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
  else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

/* ---------- last-good data snapshot ----------
   Every successful load is remembered on the device. If the network drops (or the venue Wi-Fi does),
   the app keeps showing the teams, criteria and the judge's own scores from that snapshot instead of
   an empty list, and says so. Scoring still works: saves go through the outbox and upload later. */
const SNAP_KEY = 'judgeSnapshotV1';
let lastSettingsSig = '', offlineMode = false;
const settingsSig = rows => (rows || []).map(r => r.key + '=' + r.value).sort().join('|');
function saveSnapshot(){
  try { localStorage.setItem(SNAP_KEY, JSON.stringify({ ts: Date.now(), judgeId: judge.id, currentStage, settings, teams, criteria, mySavedScores })); } catch (e) {}
}
function restoreSnapshot(){
  try {
    const snap = JSON.parse(localStorage.getItem(SNAP_KEY) || 'null');
    if (!snap || snap.judgeId !== judge.id) return false;
    ({ currentStage, settings, teams, criteria, mySavedScores } = snap);
    return true;
  } catch (e) { return false; }
}
function setOfflineMode(on){
  if (offlineMode === on) return;
  offlineMode = on;
  let el = $('offlineBadge');
  if (!el) { el = document.createElement('div'); el.id = 'offlineBadge'; el.className = 'offline-badge'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
  el.textContent = on ? t('offlineShowing') : '';
  el.classList.toggle('show', on);
}
async function loadData(){
  const settingsRes = await db.from('site_settings').select('*');
  if (settingsRes.error && restoreSnapshot()) { setOfflineMode(true); return; }
  const settingsRows = settingsRes.data;
  lastSettingsSig = settingsSig(settingsRows);
  settings = {};
  (settingsRows || []).forEach(s => settings[s.key] = s.value);
  currentStage = Number(settings.current_stage || '1');

  // card_skin is an optional column (see the admin team-editor's skin picker) — once a
  // request confirms it's missing, stop asking for it every 5s via the background poll
  // instead of repeating a request we already know will 400.
  let teamsRes = wltCardSkinColumnMissing
    ? { error: true }
    : await db.from('teams').select('id, company_name, category, stage, advanced_to_stage2, description_en, description_ar, accent_color, card_skin').order('sort_order');
  if (teamsRes.error) {
    wltCardSkinColumnMissing = true;
    teamsRes = await db.from('teams').select('id, company_name, category, stage, advanced_to_stage2, description_en, description_ar, accent_color').order('sort_order');
  }
  if (teamsRes.error) teamsRes = await db.from('teams').select('id, company_name, category, stage, advanced_to_stage2, description_en, description_ar').order('sort_order');
  let scoresRes = await db.from('scores').select('team_id, scores, notes, locked').eq('judge_id', judge.id).eq('stage', currentStage);
  if (scoresRes.error) scoresRes = await db.from('scores').select('team_id, scores, notes').eq('judge_id', judge.id).eq('stage', currentStage);
  const { data: criteriaRows } = await db.from('criteria').select('*').eq('stage', currentStage).order('sort_order');

  teams = (teamsRes.data || []).filter(tm => currentStage === 1 || tm.advanced_to_stage2);
  criteria = criteriaRows || [];
  mySavedScores = {};
  (scoresRes.data || []).forEach(s => { mySavedScores[s.team_id] = { scores: s.scores, notes: s.notes, locked: !!s.locked }; });
  if (!settingsRes.error && !teamsRes.error) { setOfflineMode(false); saveSnapshot(); }
}

function liveTimerState(){
  let timerHtml = '', text = '', timeUp = false, urgent = false, frac = 1, hasTimer = false, remaining = null;
  if (settings.timer_started_at) {
    hasTimer = true;
    const started = new Date(settings.timer_started_at).getTime();
    const duration = Number(settings.timer_duration_seconds || 600);
    remaining = Math.max(0, duration - Math.floor((serverNow() - started) / 1000));
    timeUp = remaining <= 0;
    const mm = String(Math.floor(remaining / 60)).padStart(2, '0');
    const ss = String(remaining % 60).padStart(2, '0');
    text = timeUp ? t('timeUp') : mm + ':' + ss;
    timerHtml = `<span class="live-pill-timer">${text}</span>`;
    frac = duration > 0 ? remaining / duration : 0;
    urgent = !timeUp && remaining <= 60;
  } else {
    timerHtml = `<span class="live-pill-bars"><i></i><i></i><i></i><i></i></span>`;
  }
  const barHtml = `<span class="live-progress"><span class="live-progress-fill${urgent ? ' urgent' : ''}" style="transform:scaleX(${Math.max(0, Math.min(1, frac))})"></span></span>`;
  // `text` is the bare mm:ss (or empty when no timer is running) for compact spots
  // like the wallet live pin that don't have room for the full pill+bar treatment.
  return { innerHtml: timerHtml, barHtml, text, timeUp, urgent, frac, hasTimer, remaining };
}

let lastAnnouncedKey = '', announcedTeam = null, announcedThresholds = {};
function announceTimerThresholds(state){
  if (state.remaining == null) return;
  const key = settings.live_team_id + '|' + settings.timer_started_at;
  if (key !== lastAnnouncedKey) { lastAnnouncedKey = key; announcedThresholds = {}; }
  const fire = (id, msg) => { if (!announcedThresholds[id]) { announcedThresholds[id] = true; announce(msg); } };
  if (state.remaining <= 0) fire('up', t('annTimeUp'));
  else if (state.remaining <= 10) fire('10', t('annTenSec'));
  else if (state.remaining <= 60) fire('60', t('annOneMin'));
}
function tickLiveTimer(){
  if (!settings.live_team_id) return;
  const state = liveTimerState();
  announceTimerThresholds(state);
  [document.getElementById('liveFeatureTimer'), document.getElementById('adminLiveTimer')].forEach(el => {
    if (!el) return;
    el.innerHTML = state.innerHtml;
    const card = el.closest('.live-feature, .admin-live-banner');
    if (card) {
      card.classList.toggle('timeup', state.timeUp);
      card.classList.toggle('urgent', state.urgent);
      const pill = card.querySelector('.live-pill'); if (pill) pill.classList.toggle('urgent', state.urgent);
      const fill = card.querySelector('.live-progress-fill');
      if (fill) { fill.style.transform = `scaleX(${Math.max(0, Math.min(1, state.frac))})`; fill.classList.toggle('urgent', state.urgent); }
    }
  });
  const pin = document.getElementById('wltLivePin');
  if (pin){
    let pinTimer = document.getElementById('wltLivePinTimer');
    if (state.text && !pinTimer){
      // The timer can start after the pin already rendered without one (list
      // snapshot didn't change, so renderWalletStack never re-ran) — add the span
      // on the fly instead of waiting for an unrelated re-render to catch up.
      pinTimer = document.createElement('span');
      pinTimer.className = 'wlt-live-pin-timer';
      pinTimer.id = 'wltLivePinTimer';
      pin.appendChild(pinTimer);
    }
    if (pinTimer) pinTimer.textContent = state.text;
    if (!state.text && pinTimer) pinTimer.remove();
    pin.classList.toggle('urgent', state.urgent);
  }
}

function renderLiveFeature(){
  if (judgeView === 'wallet') { $('liveFeatureWrap').innerHTML = ''; return; }
  const liveId = settings.live_team_id ? Number(settings.live_team_id) : null;
  const liveTeam = liveId ? teams.find(tm => tm.id === liveId) : null;
  if (!liveTeam) { $('liveFeatureWrap').innerHTML = ''; return; }
  const detailOpenForLive = currentTeam && currentTeam.id === liveTeam.id && !$('teamDetailWrap').classList.contains('hide');
  if (detailOpenForLive) { $('liveFeatureWrap').innerHTML = ''; return; }
  const state = liveTimerState();
  const scored = !!mySavedScores[liveTeam.id];
  $('liveFeatureWrap').innerHTML = `
    <div class="live-feature urgent-pingable${state.timeUp ? ' timeup' : ''}${state.urgent ? ' urgent' : ''}" data-id="${liveTeam.id}">
      <div class="lf-orbit o1"></div><div class="lf-orbit o2"></div>
      <div class="lf-top">
        <span class="live-pill${state.urgent ? ' urgent' : ''}">
          <span class="live-pill-dot" aria-hidden="true"></span><span class="live-pill-label">${t('liveNow')}</span><span id="liveFeatureTimer">${state.innerHtml}</span>
        </span>
      </div>
      <div class="lf-identity">
        <div class="lf-avatar-wrap">${avatarHtml(liveTeam, 48)}${scored ? '<span class="lf-check">✓</span>' : ''}</div>
        <div><div class="lf-name">${esc(liveTeam.company_name)}</div><div class="lf-cat">${esc(liveTeam.category)}</div></div>
      </div>
      ${state.hasTimer ? state.barHtml : ''}
      ${settings.restrict_to_live === 'true' ? `<div class="live-restrict">${t('restricted')}</div>` : ''}
      <button class="lf-cta" type="button">${t('scoreLiveNow')}</button>
    </div>
  `;
  $('liveFeatureWrap').querySelector('.live-feature').onclick = (e) => openTeam(liveTeam.id, e.currentTarget);
}

function renderAdminLiveBanner(){
  const banner = document.getElementById('adminLiveBanner');
  if (!banner) return;
  const liveId = settings.live_team_id ? Number(settings.live_team_id) : null;
  const team = liveId ? (teams.find(tm => tm.id === liveId) || allTeamsCache.find(tm => tm.id === liveId)) : null;
  if (!team) { banner.classList.add('hide'); return; }
  const state = liveTimerState();
  banner.classList.remove('hide');
  banner.classList.toggle('timeup', state.timeUp);
  banner.classList.toggle('urgent', state.urgent);
  banner.innerHTML = `
    <div class="admin-live-row">
      <span class="live-pill${state.urgent ? ' urgent' : ''}">
        <span class="live-pill-dot" aria-hidden="true"></span><span class="live-pill-label">${t('liveNow')}</span><span id="adminLiveTimer">${state.innerHtml}</span>
      </span>
      <span class="admin-live-name">${esc(team.company_name)}</span>
      <button type="button" class="admin-live-manage" id="adminLiveManageBtn">Manage</button>
    </div>
    ${state.hasTimer ? state.barHtml : ''}
  `;
  document.getElementById('adminLiveManageBtn').onclick = () => showAdminSection('live');
}

let listSearch = '', searchDebounceTimer = null;
function renderToolbar(){
  // Search is gone: with a stack you page through, its row + icon only pushed the cards down the
  // screen. What is left is one slim progress line: the count plus one segment per team.
  const scoredCount = teams.filter(tm => mySavedScores[tm.id]).length;
  if (!$('teamProgressTxt')) $('listToolbar').innerHTML = `<div class="progress-txt" id="teamProgressTxt"></div><div class="prog-seg" id="teamProgressSeg" aria-hidden="true"></div>`;
  $('teamProgressTxt').textContent = `${scoredCount} / ${teams.length} ${t('scoredLabel')}`;
  $('teamProgressSeg').innerHTML = teams.map(tm => `<i class="${mySavedScores[tm.id] ? 'on' : ''}"></i>`).join('');
}
function closeToolbarSearch(){
  if (!$('teamSearch')) return;
  $('teamSearch').classList.add('hide');
  if ($('searchToggleBtn')) $('searchToggleBtn').setAttribute('aria-expanded', 'false');
}

function renderTeamList(){
  if (judgeView === 'wallet') return renderWalletStack();
  $('teamDetailWrap').classList.add('hide');
  document.body.classList.remove('sheet-open');
  hideMoodOrb();
  $('teamListWrap').classList.remove('hide');
  renderToolbar();
  const liveId = settings.live_team_id ? Number(settings.live_team_id) : null;
  const restrict = settings.restrict_to_live === 'true';
  if (teams.length === 0) { $('liveFeatureWrap').innerHTML = ''; $('teamListWrap').innerHTML = `<div class="empty-illus">${mascotSvg(64)}<p>${t('noTeams')}</p></div>`; return; }

  const liveTeam = liveId ? teams.find(tm => tm.id === liveId) : null;
  renderLiveFeature();

  const q = listSearch.trim().toLowerCase();
  let list = teams.filter(tm => (!liveTeam || tm.id !== liveTeam.id) && (!q || tm.company_name.toLowerCase().includes(q) || tm.category.toLowerCase().includes(q)));
  list = list.slice().sort((a, b) => {
    const aScored = !!mySavedScores[a.id], bScored = !!mySavedScores[b.id];
    if (aScored !== bScored) return aScored ? 1 : -1;
    return teams.indexOf(a) - teams.indexOf(b);
  });

  const label = liveTeam && list.length ? `<div class="below-live-label">${t('otherTeams')}</div>` : '';
  $('teamListWrap').innerHTML = label + list.map((tm, idx) => {
    const i = teams.indexOf(tm);
    const scored = !!mySavedScores[tm.id];
    const locked = restrict && tm.id !== liveId;
    return `
      <div class="team-list-item ${locked ? 'locked' : ''}" data-id="${tm.id}" style="--i:${idx}; --tc:${teamColor(tm)};" ${locked ? `title="${t('locked')}"` : ''}>
        ${avatarHtml(tm, 38)}
        <div><div class="tname">${esc(tm.company_name)}</div><div class="tcat">${esc(tm.category)}</div></div>
        ${locked
          ? `<div class="status-locked"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>${t('notLiveYet')}</div>`
          : `<div class="status ${scored ? 'done' : 'pending'}">${scored ? '✓' : '—'}</div>`}
      </div>
    `;
  }).join('') || (liveTeam ? '' : `<div class="empty-illus">${mascotSvg(64)}<p>${t('noMatches')}</p>${q ? `<button class="button button-primary" id="clearSearchBtn">${t('clearSearch')}</button>` : ''}</div>`);
  $('teamListWrap').querySelectorAll('.team-list-item:not(.locked)').forEach(el => el.onclick = (e) => openTeam(Number(el.dataset.id), e.currentTarget));
  if ($('clearSearchBtn')) $('clearSearchBtn').onclick = () => { listSearch = ''; closeToolbarSearch(); renderTeamList(); };

  if (restoreScrollPending) { window.scrollTo(0, savedListScrollY); restoreScrollPending = false; }
  if (pendingCardReturn) {
    const target = document.querySelector(`.live-feature[data-id="${pendingCardReturn.teamId}"]`);
    if (target) morphCardCollapse(pendingCardReturn.rect, target);
    pendingCardReturn = null;
  } else if (pendingAvatarReturn) {
    const target = document.querySelector(`.team-list-item[data-id="${pendingAvatarReturn.teamId}"] .team-avatar, .live-feature[data-id="${pendingAvatarReturn.teamId}"] .team-avatar`);
    if (target) flipAvatar(pendingAvatarReturn.rect, target);
    pendingAvatarReturn = null;
  }
}

let lastRenderedTotal = null;
let savedListScrollY = 0;
function openTeam(teamId, originEl){
  if (judgeView === 'wallet') return openWalletTeam(teamId);
  savedListScrollY = window.scrollY;
  currentTeam = teams.find(tm => tm.id === teamId);
  const saved = mySavedScores[teamId];
  current = saved ? { ...saved.scores } : {};
  currentNotes = saved ? (saved.notes || '') : '';
  sessionStorage.setItem('openTeamId', String(teamId));
  lastRenderedTotal = null;
  cardFlipIdx = 0;
  incompleteConfirmArmed = false;
  checkAnimatedKeys = new Set();

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isLiveOrigin = !!(originEl && originEl.classList.contains('live-feature'));
  const originCardRect = originEl && !reduceMotion ? originEl.getBoundingClientRect() : null;
  const originAvatar = originEl ? originEl.querySelector('.team-avatar') : null;
  const originAvatarRect = originAvatar && !reduceMotion ? originAvatar.getBoundingClientRect() : null;

  renderDetail(true);
  $('teamListWrap').classList.add('hide');
  $('teamDetailWrap').classList.remove('hide');
  if (window.innerWidth <= 720) document.body.classList.add('sheet-open');
  $('orbMood').classList.add('show');
  // Single source of truth for whether the live pill shows: renderLiveFeature() itself
  // checks "is the open detail the live team's" and hides/shows accordingly, so this
  // stays correct however the detail got opened (click, back/forward, session resume).
  renderLiveFeature();

  if (isLiveOrigin && originCardRect && window.innerWidth > 720) {
    morphCardExpand(originCardRect, $('teamDetailWrap').querySelector('.detail-card'));
  } else if (originAvatarRect) {
    flipAvatar(originAvatarRect, $('teamDetailWrap').querySelector('.team-avatar'));
  }
}
function morphCardExpand(fromRect, toEl){
  if (!toEl) return;
  // No scale is ever applied to the card (scaling a blurred/shadowed glass card
  // distorts the blur, shadow and radius). It's pinned to the pill's top-left and
  // clipped to the pill's height, then only height grows — a real layout animation.
  // Content that was already visible in the pill (avatar, name, category, button)
  // rides along in normal layout; content that's new (criteria, notes, side panel)
  // gets its own gentle fade + rise, staggered, so it materializes rather than pops.
  const naturalRect = toEl.getBoundingClientRect();
  const naturalHeight = naturalRect.height;
  const dx = fromRect.left - naturalRect.left;
  const dy = fromRect.top - naturalRect.top;
  const revealBlocks = ['.dc-header', '.dc-main', '.dc-side'].map(sel => toEl.querySelector(sel)).filter(Boolean);

  toEl.style.transition = 'none';
  toEl.style.transform = `translate(${dx}px, ${dy}px)`;
  toEl.style.height = fromRect.height + 'px';
  toEl.style.overflow = 'hidden';
  toEl.style.background = 'color-mix(in srgb, var(--live) 6%, var(--glass-strong))';
  toEl.style.borderColor = 'var(--live)';
  revealBlocks.forEach(el => { el.style.transition = 'none'; el.style.opacity = '0'; el.style.transform = 'translateY(12px)'; });
  void toEl.offsetHeight; // force the browser to commit the "from" state before animating, or the transitions have nothing to interpolate from

  requestAnimationFrame(() => {
    toEl.style.transition = 'transform .65s var(--ease-glide), height .65s var(--ease-glide), background .55s var(--ease-glide), border-color .55s var(--ease-glide)';
    toEl.style.transform = 'none';
    toEl.style.height = naturalHeight + 'px';
    toEl.style.background = '';
    toEl.style.borderColor = '';
    revealBlocks.forEach((el, i) => {
      el.style.transition = `opacity .5s ease ${120 + i * 90}ms, transform .5s var(--ease-glide) ${120 + i * 90}ms`;
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  });
  toEl.addEventListener('transitionend', () => {
    toEl.style.transition = ''; toEl.style.height = ''; toEl.style.overflow = '';
  }, { once: true });
  setTimeout(() => { revealBlocks.forEach(el => { el.style.transition = ''; el.style.opacity = ''; el.style.transform = ''; }); }, 120 + revealBlocks.length * 90 + 550);
}
function flipAvatar(fromRect, toEl){
  if (!toEl) return;
  const newRect = toEl.getBoundingClientRect();
  const dx = fromRect.left + fromRect.width/2 - (newRect.left + newRect.width/2);
  const dy = fromRect.top + fromRect.height/2 - (newRect.top + newRect.height/2);
  const scale = fromRect.width / newRect.width;
  toEl.style.transformOrigin = 'center';
  toEl.style.transition = 'none';
  toEl.style.transform = `translate(${dx}px, ${dy}px) scale(${scale})`;

  requestAnimationFrame(() => {
    toEl.style.transition = 'transform .38s var(--ease-glide)';
    toEl.style.transform = 'none';
  });
}
let restoreScrollPending = false;
function returnToList(){
  if (judgeView === 'wallet') return walletBackToList();
  const isLiveTeam = settings.live_team_id && currentTeam && Number(settings.live_team_id) === currentTeam.id;
  if (isLiveTeam && window.innerWidth > 720) {
    captureCardReturn();
  } else {
    captureAvatarReturn();
  }
  sessionStorage.removeItem('openTeamId');
  document.body.classList.remove('sheet-open');
  restoreScrollPending = true;
  renderTeamList();
}
let pendingAvatarReturn = null;
function captureAvatarReturn(){
  if (!currentTeam) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;
  const detailAvatar = $('teamDetailWrap').querySelector('.team-avatar');
  if (!detailAvatar) return;
  pendingAvatarReturn = { teamId: currentTeam.id, rect: detailAvatar.getBoundingClientRect() };
}
let pendingCardReturn = null;
function captureCardReturn(){
  if (!currentTeam) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;
  const box = $('teamDetailWrap').querySelector('.detail-card');
  if (!box) return;
  pendingCardReturn = { teamId: currentTeam.id, rect: box.getBoundingClientRect() };
}
function morphCardCollapse(fromRect, toEl){
  if (!toEl) return;
  const naturalRect = toEl.getBoundingClientRect();
  const dx = fromRect.left - naturalRect.left;
  const dy = fromRect.top - naturalRect.top;
  const team = teams.find(tm => tm.id === Number(toEl.dataset.id));
  const teamC = team ? teamColor(team) : 'var(--live)';

  toEl.style.transition = 'none';
  toEl.style.transform = `translate(${dx}px, ${dy}px)`;
  toEl.style.height = fromRect.height + 'px';
  toEl.style.overflow = 'hidden';
  toEl.style.background = `color-mix(in srgb, ${teamC} 10%, var(--glass-strong))`;
  toEl.style.borderColor = `color-mix(in srgb, ${teamC} 45%, var(--glass-border))`;
  const children = Array.from(toEl.children);
  children.forEach(ch => { ch.style.transition = 'none'; ch.style.opacity = '0'; });
  void toEl.offsetHeight; // force the browser to commit the "from" state before animating

  requestAnimationFrame(() => {
    toEl.style.transition = 'transform .55s var(--ease-glide), height .55s var(--ease-glide), background .5s var(--ease-glide), border-color .5s var(--ease-glide)';
    toEl.style.transform = 'none';
    toEl.style.height = naturalRect.height + 'px';
    toEl.style.background = '';
    toEl.style.borderColor = '';
    setTimeout(() => {
      children.forEach(ch => { ch.style.transition = 'opacity .3s ease'; ch.style.opacity = '1'; });
    }, 200);
  });
  toEl.addEventListener('transitionend', () => {
    toEl.style.transition = ''; toEl.style.height = ''; toEl.style.overflow = '';
  }, { once: true });
  setTimeout(() => { children.forEach(ch => { ch.style.transition = ''; ch.style.opacity = ''; }); }, 550);
}
function hideMoodOrb(){ $('orbMood').classList.remove('show'); }

/* ==================================================================
   Wallet view — card-stack judging UI. Toggled per-judge (persisted
   in localStorage as judgeView), lives entirely alongside the classic
   renderTeamList/renderDetail/openTeam/returnToList — those are
   untouched; each just branches to the wlt* equivalent up top when
   judgeView === 'wallet', so every existing caller keeps working.
   ================================================================== */

function wltPad(n){ return String(n).padStart(2, '0'); }
function wltSpectrum(n){ const hue = ((n - 1) / 9) * 120; return `hsl(${hue}, 62%, 45%)`; }
function wltSkinFor(tm){ return (tm.card_skin && WLT_SKINS.includes(tm.card_skin)) ? tm.card_skin : WLT_SKINS[tm.id % WLT_SKINS.length]; }
function wltIconFor(ci){ return WLT_ICONS[ci % WLT_ICONS.length]; }
function wltTopFor(isLive, i){ return isLive ? -22 : i * WLT_REVEAL; }

// Each card is a real, individually focusable/activatable element now (a native
// scrollable list of them, not one composite widget) — Tab moves between cards in
// document order, Enter/Space opens the focused one, exactly like a native list of
// links or buttons. Locked cards are skipped entirely (no tabindex, no handler).
/* Fit-to-screen: the whole stack (3 cards + the half-shown 4th) should be visible at first glance
   on any phone, not cut off by the fold. Measure the space between the top of the stack and the
   bottom of the screen and, if the stack's natural height does not fit, scale the stack down
   uniformly (CSS zoom keeps layout and hit-testing correct, unlike transform). Never scaled up,
   and floored at .66 so the text stays readable. Only re-measured on real changes (width /
   orientation / large height jumps) so the browser's collapsing URL bar cannot make it wobble. */
let wltFitW = 0, wltFitH = 0, wltFitTimer = null;
function wltFitStack(force){
  const wrap = document.querySelector('.wlt-stack-wrap');
  if (!wrap || walletActiveId != null || !CSS.supports('zoom', '1')) return;
  const w = window.innerWidth, h = window.innerHeight;
  if (!force && w === wltFitW && Math.abs(h - wltFitH) < 150) return;
  wltFitW = w; wltFitH = h;
  wrap.style.zoom = '';
  const top = wrap.getBoundingClientRect().top;
  const need = WLT_STAGE_H + WLT_STACK_TOP_OFFSET + 8;
  const navH = window.matchMedia('(max-width:720px)').matches ? ((document.querySelector('nav') || {}).offsetHeight || 0) : 0;
  const avail = h - top - 10 - navH;
  const k = Math.max(.66, Math.min(1, avail / need));
  wrap.style.zoom = k < .995 ? k.toFixed(3) : '';
}
window.addEventListener('resize', () => { clearTimeout(wltFitTimer); wltFitTimer = setTimeout(() => wltFitStack(), 150); });
// Anything above the stack that changes height (session-conflict banner appearing, header wrapping)
// moves the stack down the screen, so the fit is re-measured whenever those change.
if (window.ResizeObserver) {
  const fitRO = new ResizeObserver(() => { clearTimeout(wltFitTimer); wltFitTimer = setTimeout(() => wltFitStack(true), 60); });
  ['sessionConflictBanner', 'listToolbar'].forEach(id => { const el = document.getElementById(id); if (el) fitRO.observe(el); });
  const hdr = document.querySelector('header'); if (hdr) fitRO.observe(hdr);
}
window.addEventListener('orientationchange', () => setTimeout(() => wltFitStack(true), 250));

function wltLayoutStack(list){
  const stack = $('wltStack');
  if (!stack) return;
  const cards = Array.from(stack.querySelectorAll('.wlt-card'));
  cards.forEach((el, i) => {
    const slot = i - wltWindowStart;
    const inWindow = slot >= 0 && slot <= 3;
    // The ring's rotation now lives on its .wlt-live-ring-spin child (a cheap
    // compositor-only transform, not a repainting gradient — see the ring's own CSS
    // comment) but it's still real GPU/compositor work happening for a card that, at
    // most 4 slots deep, is completely invisible off-window. Free to pause regardless.
    // (on phones the animated element is the ring itself — pulse — so pause both)
    el.querySelectorAll('.wlt-live-ring, .wlt-live-ring-spin').forEach(r => {
      r.style.animationPlayState = inWindow ? 'running' : 'paused';
    });
    // A card returning from hero state still carries a literal inline transform
    // (openWalletTeam sets `scale(1)` directly, not through --wlt-s) that would
    // otherwise permanently shadow the --wlt-y/--wlt-s-driven transform below.
    if (el.style.transform) el.style.transform = '';
    if (!inWindow){
      el.style.setProperty('--wlt-y', slot < 0 ? '480px' : '-160px');
      el.style.setProperty('--wlt-s', '.85');
      el.style.opacity = '0'; el.style.zIndex = 1; el.style.pointerEvents = 'none';
      // Parked cards used to stay fully painted + composited at opacity 0 (up to ~20 of them).
      // Once the fade has finished they are removed from rendering entirely.
      clearTimeout(el._hideT);
      el._hideT = setTimeout(() => { if (el.style.opacity === '0') el.style.visibility = 'hidden'; }, 520);
      return;
    }
    const s = WLT_SLOTS[slot];
    el.style.setProperty('--wlt-y', s.top + 'px');
    el.style.setProperty('--wlt-s', s.scale);
    clearTimeout(el._hideT); el.style.visibility = '';
    el.style.opacity = '1';
    el.style.zIndex = s.z;
    el.style.pointerEvents = '';
  });
  const announce = $('wltStackAnnounce');
  const front = list[wltWindowStart];
  if (announce && front) announce.textContent = front.company_name + t('walletPosOf') + (wltWindowStart + 1) + '/' + list.length;
}

function wltWireStackDrag(stage, list){
  // Only escalate into a "drag" (and only then capture the pointer) once real
  // movement crosses a small threshold — a plain tap must pass straight through
  // to the card's own onclick untouched, or setPointerCapture on every pointerdown
  // can swallow the click a card needs to open.
  let primed = false, dragging = false, startX = 0, startY = 0, lastY = 0, pending = 0, pointerId = null;
  const THRESHOLD = 60, MOVE_THRESHOLD = 6;
  const commit = dir => {
    const next = Math.max(0, Math.min(list.length - 1, wltWindowStart + dir));
    if (next === wltWindowStart) return;
    wltWindowStart = next;
    wltStackAnimating = true;
    wltLayoutStack(list);
    setTimeout(() => { wltStackAnimating = false; }, 430);
  };
  const onDelta = d => {
    if (wltStackAnimating) return;
    pending += d;
    if (pending > THRESHOLD){ commit(1); pending = 0; }
    else if (pending < -THRESHOLD){ commit(-1); pending = 0; }
  };
  stage.onwheel = e => {
    // At the first/last card there is nothing left to page, so let the wheel scroll the page
    // instead of swallowing it (that swallowing was the "stuck on the cards" feeling on desktop).
    const atStart = wltWindowStart <= 0 && e.deltaY < 0;
    const atEnd = wltWindowStart >= list.length - 1 && e.deltaY > 0;
    if (atStart || atEnd) return;
    e.preventDefault(); onDelta(e.deltaY);
  };
  stage.onpointerdown = e => { primed = true; dragging = false; startX = e.clientX; startY = e.clientY; lastY = e.clientY; pointerId = e.pointerId; };
  stage.onpointermove = e => {
    if (!primed) return;
    if (!dragging){
      if (Math.abs(e.clientY - startY) < MOVE_THRESHOLD && Math.abs(e.clientX - startX) < MOVE_THRESHOLD) return;
      dragging = true;
      // See the wheel picker's identical guard for why this is contained: an uncaught
      // throw here would abort the rest of this handler, skipping preventDefault()
      // below on exactly the frame a native gesture (e.g. pull-to-refresh) could win.
      try { stage.setPointerCapture(pointerId); } catch (err) {}
    }
    e.preventDefault();
    // Forward paging visually moves everything DOWN the screen — the front card
    // exits off the bottom, the peeking cards behind it each drop down a slot, and
    // the next card slides down into view from above. (lastY - e.clientY) had a
    // downward drag (finger moving toward larger Y) producing a NEGATIVE delta,
    // driving the stack backward — fighting the direction the cards actually move.
    // e.clientY - lastY makes the drag match direct-manipulation: drag down, the
    // stack moves down (forward), same as dragging any other content follows the
    // finger. This was the "scrolling is reversed" report.
    onDelta((e.clientY - lastY) * 1.6);
    lastY = e.clientY;
  };
  const end = () => { primed = false; dragging = false; };
  stage.onpointerup = end;
  stage.onpointercancel = end;
  // Keyboard: the stack is one tab stop (arrow keys page it, same mental model as a
  // native listbox) rather than making all 21 cards individually tabbable.
  stage.onkeydown = e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight'){ e.preventDefault(); commit(1); }
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft'){ e.preventDefault(); commit(-1); }
    else if (e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      const front = list[wltWindowStart];
      if (front) openWalletTeam(front.id);
    }
  };
}

function wltGreenCircleMark(size){
  // The real sponsor mark (assets/green-circle-mark.png), not a hand-approximated
  // guess — user supplied the actual logo. Rendered through a filter to a flat white
  // silhouette rather than its real green, so it still reads as "engraved into the
  // card" like every other card detail instead of a pasted-on color sticker that
  // clashes with whatever skin color the card happens to be.
  return `<img class="wlt-gc-mark" src="assets/green-circle-mark.png" alt="" style="height:${size}px;">`;
}

function wltCardInner(tm, isLive, isLocked){
  const skin = wltSkinFor(tm);
  const ring = isLive ? `<div class="wlt-live-ring"><div class="wlt-live-ring-spin"></div></div>` : '';
  const lockedTag = isLocked ? `<span class="wlt-locked-tag" title="${t('locked')}"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></svg>${t('notLiveYet')}</span>` : '';
  const liveSeal = isLive ? `<span class="wlt-live-seal"><span class="dot-static"></span>${t('liveNow')}</span>` : '';
  // Scored is the one state every card can be in regardless of live/locked, so a judge
  // can tell what's left without opening each card in the stack.
  const scoredTag = !!mySavedScores[tm.id] ? `<span class="wlt-scored-tag"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg><span class="wlt-tag-txt">${t('walletScored')}</span></span>` : '';
  // The lane is always rendered (even empty) so every card's name row, chip and mid
  // art sit at the same height whether or not it carries a tag; when a second tag is
  // present the "scored" tag collapses to just its check so the row never has to wrap.
  const tagCount = [lockedTag, liveSeal, scoredTag].filter(Boolean).length;
  const tagsRow = `<div class="wlt-tags-row${tagCount > 1 ? ' wlt-tags-multi' : ''}">${liveSeal}${lockedTag}${scoredTag}</div>`;
  // Card is a fixed physical object now, in every state: same markup whether it's a
  // sliver in the stack or the open hero. Name + category/stage + mark land in the
  // same slot regardless of skin, so no card is ever missing information another one
  // shows. The chip is its own floating element now, not part of this row — real
  // cards don't stamp the chip flush into the header, it sits independently, lower
  // and closer to the middle (see .wlt-chip-float). Both it and the mark are pinned to
  // a real physical side (dir:ltr in CSS) instead of mirroring with the page language.
  const metaLine = [tm.category, tm.stage].filter(Boolean).map(esc).join(' &middot; ');
  const topRow = `
    <div class="wlt-top">
      <div class="wlt-top-text">
        <div class="wlt-name">${esc(tm.company_name)}</div>
        <div class="wlt-meta">${metaLine}</div>
      </div>
      ${wltMark(30)}
    </div>`;
  // Name row + status lane travel together as one block pinned to the top of the card. They used to
  // be separate flex children of a space-between column, which parked the tag lane wherever the
  // free space landed — right on top of the chip. Now the block's height is fixed and the chip
  // (top:106px) always sits clear below it.
  const headGroup = `<div class="wlt-head">${topRow}${tagsRow}</div>`;
  const chipFloat = `<div class="wlt-chip-float">${wltChip()}</div>`;
  const poweredRow = `<div class="wlt-powered-row">${wltGreenCircleMark(20)}<span>${t('poweredBy')}</span></div>`;
  const bottomRow = `<div class="wlt-bottom-row"><div class="wlt-num">&bull;&bull;&bull;&bull; ${wltPad(tm.id)}</div>${poweredRow}</div>`;

  if (skin === 'wlt-skin-metal'){
    return `
      ${ring}${chipFloat}
      ${headGroup}
      <div class="wlt-metal-mid"><div class="wlt-issuer">FWC &middot; JUDGE</div></div>
      ${bottomRow}
    `;
  }

  if (skin === 'wlt-skin-split'){
    const cut = WLT_SPLIT_CUTS[tm.id % WLT_SPLIT_CUTS.length];
    return `
      ${ring}${chipFloat}
      <div class="wlt-split-cut" style="clip-path:${cut};"></div>
      <div class="wlt-split-content">
        ${headGroup}
        ${bottomRow}
      </div>
    `;
  }

  if (skin === 'wlt-skin-ribbon'){
    return `
      ${ring}${chipFloat}
      ${headGroup}
      <div class="wlt-ribbon-band"></div>
      ${bottomRow}
    `;
  }

  if (skin === 'wlt-skin-frost'){
    return `
      ${ring}${chipFloat}
      ${headGroup}
      <div class="wlt-frost-mid"><svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="24" stroke="#fff" stroke-width="1.4"/><circle cx="26" cy="26" r="15" stroke="#fff" stroke-width="1.4"/></svg></div>
      ${bottomRow}
    `;
  }

  // flat — the default/kept skin.
  return `
    ${ring}${chipFloat}
    ${headGroup}
    <div class="wlt-flat-mid" style="justify-content:flex-end;"><svg class="wlt-shape" viewBox="0 0 90 90"><polygon points="90,90 90,18 18,90" fill="none" stroke="#fff" stroke-width="1.6"/><polygon points="90,90 90,42 42,90" fill="none" stroke="#fff" stroke-width="1.6"/></svg></div>
    ${bottomRow}
  `;
}

function renderWalletStack(){
  $('teamDetailWrap').classList.add('hide');
  document.body.classList.remove('sheet-open');
  hideMoodOrb();
  $('teamListWrap').classList.remove('hide');
  renderToolbar();
  $('liveFeatureWrap').innerHTML = '';

  if (teams.length === 0){
    $('teamListWrap').innerHTML = `<div class="empty-illus">${mascotSvg(64)}<p>${t('noTeams')}</p></div>`;
    return;
  }

  const liveId = settings.live_team_id ? Number(settings.live_team_id) : null;
  const restrict = settings.restrict_to_live === 'true';
  const q = listSearch.trim().toLowerCase();
  let list = teams.filter(tm => !q || tm.company_name.toLowerCase().includes(q) || tm.category.toLowerCase().includes(q));
  list = list.slice().sort((a, b) => {
    const aScored = !!mySavedScores[a.id], bScored = !!mySavedScores[b.id];
    if (aScored !== bScored) return aScored ? 1 : -1;
    return teams.indexOf(a) - teams.indexOf(b);
  });
  const liveIdx = list.findIndex(tm => tm.id === liveId);
  if (liveIdx > 0){ const [lv] = list.splice(liveIdx, 1); list.unshift(lv); }

  if (list.length === 0){
    $('teamListWrap').innerHTML = `<div class="empty-illus">${mascotSvg(64)}<p>${t('noMatches')}</p>${q ? `<button class="button button-primary" id="clearSearchBtn">${t('clearSearch')}</button>` : ''}</div>`;
    if ($('clearSearchBtn')) $('clearSearchBtn').onclick = () => { listSearch = ''; closeToolbarSearch(); renderWalletStack(); };
    return;
  }

  wltLastList = list;
  wltWindowStart = Math.max(0, Math.min(wltWindowStart, list.length - 1));
  const liveInList = liveId != null && list.some(tm => tm.id === liveId);
  const pinTimer = liveInList ? liveTimerState() : null;

  $('teamListWrap').innerHTML = `
    <div class="wlt-detail-head" id="wltDetailHead">
      <button class="btn-circle back-btn" id="wltBackBtn" type="button" aria-label="${t('back')}" title="${t('back')}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
    </div>
    ${liveInList ? `<button class="wlt-live-pin urgent-pingable${pinTimer.urgent ? ' urgent' : ''}" id="wltLivePin" type="button"><span class="wlt-live-pin-dot" aria-hidden="true"></span><span class="wlt-pin-lbl" id="wltPinLbl">${t('walletLiveJump')}</span>${pinTimer.text ? `<span class="wlt-live-pin-timer" id="wltLivePinTimer">${pinTimer.text}</span>` : ''}</button>` : ''}
    <div class="wlt-stack-wrap">
      <div class="wlt-stack" id="wltStack" style="height:${WLT_STAGE_H}px;" tabindex="0" role="group" aria-label="${t('walletStackAria')}">${
        list.map((tm, i) => {
          const isLive = tm.id === liveId;
          const isLocked = restrict && tm.id !== liveId;
          const cls = ['wlt-card', wltSkinFor(tm)];
          if (isLive) cls.push('wlt-live-pop');
          if (isLocked) cls.push('wlt-locked');
          return `<div class="${cls.join(' ')}" data-id="${tm.id}" style="--tc:${teamColor(tm)};">${wltCardInner(tm, isLive, isLocked)}</div>`;
        }).join('')
      }</div>
      <div class="wlt-scroll-rail" aria-hidden="true" style="top:${WLT_STACK_TOP_OFFSET + Math.round(WLT_STAGE_H / 2) - 46}px;">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M7 15l5 5 5-5M7 9l5-5 5 5"/></svg>
        <span>${t('walletScrollHint')}</span>
      </div>
      <div id="wltStackAnnounce" class="sr-only" aria-live="polite"></div>
    </div>`;

  $('wltBackBtn').onclick = () => { if (walletActiveId != null) walletBackToList(); };
  if ($('wltLivePin')) $('wltLivePin').onclick = () => {
    if (wltStackAnimating) return;
    if (walletActiveId != null) { wltWindowStart = 0; walletBackToList(); return; }
    wltWindowStart = 0;
    wltStackAnimating = true;
    wltLayoutStack(list);
    setTimeout(() => { wltStackAnimating = false; }, 430);
  };

  wltLayoutStack(list);
  wltWireStackDrag($('wltStack'), list);
  wltFitStack(true);

  $('wltStack').querySelectorAll('.wlt-card').forEach(el => {
    if (el.classList.contains('wlt-locked')) return;
    el.onclick = () => openWalletTeam(Number(el.dataset.id));
  });
}

/* Inside an opened team the pin is a status readout, not a jump button:
   - this team IS live  -> "Live now" + timer, inert (nothing to jump to)
   - another team is live -> "Now live: <name>" + timer, tap to go to that card */
function wltSyncPinContext(){
  const pin = $('wltLivePin'), lbl = $('wltPinLbl');
  if (!pin || !lbl) return;
  const liveId = settings.live_team_id ? Number(settings.live_team_id) : null;
  if (walletActiveId == null) { lbl.textContent = t('walletLiveJump'); pin.classList.remove('in-live', 'in-other'); pin.disabled = false; pin.removeAttribute('aria-label'); return; }
  const isLive = walletActiveId === liveId;
  pin.classList.toggle('in-live', isLive);
  pin.classList.toggle('in-other', !isLive);
  const lt = teams.find(tm => tm.id === liveId);
  lbl.textContent = isLive ? t('liveNow') : (t('annNowLive') + (lt ? lt.company_name : ''));
  pin.disabled = isLive;            // a disabled button is not focusable/tappable: nothing to jump to
}
function openWalletTeam(id){
  walletActiveId = id;
  requestAnimationFrame(wltSyncPinContext);
  savedListScrollY = window.scrollY;
  currentTeam = teams.find(tm => tm.id === id);
  const saved = mySavedScores[id];
  current = saved ? { ...saved.scores } : {};
  currentNotes = saved ? (saved.notes || '') : '';
  sessionStorage.setItem('openTeamId', String(id));
  incompleteConfirmArmed = false;
  walletExpandedKey = null;

  const liveId = settings.live_team_id ? Number(settings.live_team_id) : null;
  const isLive = currentTeam.id === liveId;

  const stack = $('wltStack');
  if (stack){
    // The stack's own wheel/pointer/keyboard handlers must not survive into detail
    // view — they were still firing here, and since wltLayoutStack repositions every
    // .wlt-card by array index against wltWindowStart, a stray scroll while looking at
    // the open hero card would yank the hero itself back into "slot" position (top:4px
    // -> 480px, opacity 1 -> 0) and pop other cards in behind it. Re-wired fresh by
    // renderWalletStack() when walletBackToList() returns here.
    stack.onwheel = null; stack.onpointerdown = null; stack.onpointermove = null;
    stack.onpointerup = null; stack.onpointercancel = null; stack.onkeydown = null;
    // .wlt-stack's CSS default is touch-action:none (needed while paging owns the
    // gesture) but that's a static class rule — it doesn't know paging just got
    // disabled above. Left in place, it blocked ANY touch that started on the open
    // card from scrolling the page at all, even though nothing here still consumes
    // that gesture. Cleared back to 'none' for free on the next renderWalletStack()
    // rebuild, which always creates a fresh #wltStack element.
    stack.style.touchAction = 'auto';
    // touch-action is computed as the INTERSECTION across the whole ancestor chain,
    // not just the nearest element — .wlt-stack-wrap (the parent) also declares
    // touch-action:none for the same paging reason, and a `none` anywhere in that
    // chain wins regardless of what .wlt-stack itself says. Left uncleared, a touch
    // gesture starting directly on the open hero card (which visually fills most of
    // a phone screen) was still swallowed with nothing left to consume it — a real
    // dead zone, not just an unlikely edge case.
    const wrap = stack.closest('.wlt-stack-wrap');
    if (wrap) wrap.style.touchAction = 'auto';
    const cards = Array.from(stack.querySelectorAll('.wlt-card'));
    cards.forEach(el => {
      if (Number(el.dataset.id) === id){
        el.classList.add('wlt-hero');
        el.style.top = WLT_BLEED_TOP + 'px';
        el.style.zIndex = '30';
        el.style.transform = 'scale(1)';
        el.style.opacity = '1';
        el.style.pointerEvents = '';
        el.innerHTML = wltCardInner(currentTeam, isLive, false);
        wltWireTilt(el);
      } else {
        // --wlt-y stays as-is (never cleared) so .wlt-exit-down's own transform, which
        // reads that same custom property, animates from the card's real last position
        // instead of snapping to 0 first. Only inline opacity needs clearing — it
        // outranks the .wlt-exit-down stylesheet rule, so a leftover inline opacity:0
        // from a background slot would silently cancel the fade-out.
        el.style.opacity = '';
        el.classList.add('wlt-exit-down');
      }
    });
    stack.style.height = (WLT_BLEED_TOP + WLT_HERO_H + WLT_BLEED_BOTTOM) + 'px';
    setTimeout(() => {
      cards.forEach(el => { if (Number(el.dataset.id) !== id) el.classList.add('wlt-gone'); });
    }, 460);
  }

  if ($('wltDetailHead')) $('wltDetailHead').classList.add('wlt-show');

  $('teamDetailWrap').classList.remove('hide');
  $('teamDetailWrap').style.setProperty('--tc', teamColor(currentTeam));
  $('teamDetailWrap').innerHTML = `<div class="wlt-detail-extra" id="wltDetailExtra"></div>`;
  renderWalletStatement();
  // The double-rAF is just there so the CSS transition actually plays (the element
  // needs one committed frame at opacity:0 before the class flips it to 1) — but if
  // that pair of callbacks is ever delayed or dropped (a backgrounded tab, a busy
  // main thread, any engine quirk), the content it reveals is otherwise stuck at
  // opacity:0/translateY(26px) forever: fully present in the DOM (so nothing below
  // it needs scrolling to), but invisible — which is exactly what a "the scoring
  // view is stuck short, nothing scrolls" report looks like. A short, unconditional
  // fallback timeout guarantees it becomes visible either way; classList.add is a
  // no-op if the rAF pair already did it.
  const revealDetailExtra = () => { const ex = $('wltDetailExtra'); if (ex) ex.classList.add('wlt-show'); };
  requestAnimationFrame(() => requestAnimationFrame(revealDetailExtra));
  setTimeout(revealDetailExtra, 350);

  // Note: deliberately NOT adding the classic 'sheet-open' body class here. That
  // class drives CSS scoped to #teamDetailWrap .detail-card (a fixed full-screen
  // overlay flex row) — wallet's child is .wlt-detail-extra, which that rule doesn't
  // know about, so the flex row defaults to content-width instead of stretching:
  // exactly the "everything squeezed into a narrow column" bug on mobile.
  hideMoodOrb();
}

function renderWalletDetail(){
  if (!currentTeam || walletActiveId == null) return;
  const stack = $('wltStack');
  if (stack){
    const heroEl = stack.querySelector(`.wlt-card[data-id="${currentTeam.id}"]`);
    if (heroEl){
      const liveId = settings.live_team_id ? Number(settings.live_team_id) : null;
      heroEl.innerHTML = wltCardInner(currentTeam, currentTeam.id === liveId, false);
    }
  }
  renderWalletStatement();
}

function walletBackToList(){
  const ex = $('wltDetailExtra');
  if (ex) ex.classList.remove('wlt-show');
  if ($('wltDetailHead')) $('wltDetailHead').classList.remove('wlt-show');
  setTimeout(() => { $('teamDetailWrap').classList.add('hide'); $('teamDetailWrap').innerHTML = ''; }, 260);

  sessionStorage.removeItem('openTeamId');
  document.body.classList.remove('sheet-open');
  restoreScrollPending = true;

  const stack = $('wltStack');
  if (stack){
    const cards = Array.from(stack.querySelectorAll('.wlt-card'));
    cards.forEach(el => el.classList.remove('wlt-gone'));
    requestAnimationFrame(() => {
      cards.forEach(el => {
        el.classList.remove('wlt-exit-down', 'wlt-hero');
        el.style.height = WLT_CARD_H + 'px';
      });
      wltLayoutStack(wltLastList);
    });
    stack.style.height = WLT_STAGE_H + 'px';
  }
  walletActiveId = null;
  wltSyncPinContext();
  currentTeam = null;
  setTimeout(renderWalletStack, 480);
}

function wltWireTilt(card){
  let sheen = card.querySelector('.wlt-sheen');
  if (!sheen){ sheen = document.createElement('div'); sheen.className = 'wlt-sheen'; card.appendChild(sheen); }
  card.onpointermove = e => {
    // Cursor-tracking tilt is a desktop-only affordance — there's no persistent cursor
    // position on touch, only discrete touch points, so this fired on every touch-drag
    // over the open card (including someone just trying to scroll past it) and yanked
    // it into a rotated/scaled state mid-gesture. That's the "hover pops up, restricts
    // scrolling" report — skip entirely for anything that isn't a real mouse.
    if (e.pointerType && e.pointerType !== 'mouse') return;
    const rect = card.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width;
    const yPct = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - yPct) * 14;
    const ry = (xPct - 0.5) * 14;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.025)`;
    sheen.style.background = `radial-gradient(circle at ${xPct * 100}% ${yPct * 100}%, rgba(255,255,255,.28), transparent 62%)`;
    sheen.style.opacity = '1';
  };
  card.onpointerleave = () => {
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
    sheen.style.opacity = '0';
  };
  card.style.transformStyle = 'preserve-3d';
}

function renderWalletStatement(){
  if (!currentTeam) return;
  const id = currentTeam.id;
  const lockFeatureOn = settings.score_lock_enabled !== 'false';
  const isLocked = lockFeatureOn && !!(mySavedScores[id] && mySavedScores[id].locked);
  const doneCount = criteria.filter(c => current[c.key]).length;
  const total = criteria.reduce((sum, c) => sum + (Number(current[c.key]) || 0) * c.weight, 0) * 10;

  const rows = criteria.map((c, ci) => {
    const val = current[c.key];
    const label = lang === 'ar' ? c.label_ar : c.label_en;
    const expanded = c.key === walletExpandedKey;
    const rowCls = ['wlt-stmt-row'];
    if (val != null) rowCls.push('wlt-answered');
    if (isLocked) rowCls.push('wlt-disabled');
    if (expanded) rowCls.push('wlt-expanded');
    const valHtml = val != null
      ? `<div class="wlt-stmt-val">&#10003; ${val}/10</div>`
      : `<svg class="wlt-stmt-chevron" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>`;
    const rowHtml = `
      <div class="${rowCls.join(' ')}" data-key="${esc(c.key)}">
        <svg class="wlt-stmt-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${wltIconFor(ci)}</svg>
        <div class="wlt-stmt-body"><div class="wlt-stmt-name">${esc(label)}</div><div class="wlt-stmt-weight">${Math.round(c.weight * 100)}%</div></div>
        ${valHtml}
      </div>`;
    // The wheel used to open in a separate fixed bottom sheet — simpler to just
    // expand it inline, directly under the row you tapped, still inside the same
    // drawer surface. No modal indirection, no second surface to learn.
    const expandHtml = expanded ? `
      <div class="wlt-stmt-expand" id="wltStmtExpand">
        <div class="wlt-wheel-wrap">
          <div class="wlt-wheel-highlight"></div>
          <div class="wlt-wheel-track" id="wltWheelTrack" dir="ltr"></div>
        </div>
        <div class="wlt-sheet-desc" id="wltExpandDesc">${esc((lang === 'ar' ? c.description_ar : c.description_en) || '')}</div>
        <div class="wlt-sheet-weight">${t('walletWorth')}${Math.round(c.weight * 100)}${t('walletOfTotal')}</div>
        <button class="wlt-sheet-done" id="wltExpandDoneBtn" type="button" ${val == null ? 'disabled' : ''}>${t('doneBtn')}</button>
      </div>` : '';
    return rowHtml + expandHtml;
  }).join('');

  const oneWayLock = settings.lock_one_way === 'true';
  // One-way mode: once locked, the judge has no button at all — "final" messaging
  // already covers it (scoreLocked text below), and only admin's per-score Unlock in
  // All scores can undo it. Forces a real decision instead of a toggle.
  const lockToggleHtml = (lockFeatureOn && !(isLocked && oneWayLock)) ? `<button class="button" id="wltLockBtn" style="font-size:11px;">${isLocked ? t('unlockScore') : t('lockScore')}</button>` : '';
  const desc = lang === 'ar' ? (currentTeam.description_ar || currentTeam.description_en) : currentTeam.description_en;
  const aboutHtml = desc ? `<div class="wlt-about-panel"><div class="wlt-about-l">${t('teamInfo')}</div><div class="wlt-about-v">${esc(desc)}</div></div>` : '';

  $('wltDetailExtra').innerHTML = `
    ${aboutHtml}
    <div class="wlt-bal">
      <div class="wlt-bal-label">${t('walletTotal')}</div>
      <div class="wlt-bal-num" id="wltBalNum">${total.toFixed(1)}<span>/100</span></div>
      <div class="wlt-bal-progress"><div class="wlt-bal-fill" id="wltBalFill" style="transform:scaleX(${Math.max(0, Math.min(1, total / 100))})"></div></div>
      <div class="wlt-bal-sub" id="wltBalSub">${doneCount}/${criteria.length} ${t('walletPosted')}${isLocked ? ' &middot; <span style="color:var(--danger);">' + t('scoreLocked') + '</span>' : ''}</div>
    </div>
    <div class="wlt-stmt-label">${t('walletCriteria')}</div>
    <div class="wlt-stmt-drawer" id="wltStmtList">${rows}</div>
    <textarea class="notes-field" id="wltNotesField" placeholder="${t('notesLabel')}" ${isLocked ? 'readonly' : ''}>${esc(currentNotes)}</textarea>
    <div class="save-row">
      <div class="save-err" id="wltSaveErr"></div>
      <div style="display:flex; gap:10px;">
        ${lockToggleHtml}
        <button class="save-btn" id="wltDoneBtn">${t('doneBtn')}</button>
      </div>
    </div>
  `;

  $('wltStmtList').querySelectorAll('.wlt-stmt-row').forEach(row => {
    if (isLocked) return;
    row.onclick = () => walletToggleCriterion(row.dataset.key);
  });
  if (walletExpandedKey != null) walletWireExpand();
  $('wltNotesField').oninput = e => { if (!isLocked) currentNotes = e.target.value; };
  $('wltNotesField').onblur = () => { if (!isLocked) autoSave(); };
  // $('wltLockBtn') can be null here even with lockFeatureOn on — one-way mode
  // doesn't render the button at all once a score is locked (see lockToggleHtml).
  if (lockFeatureOn && $('wltLockBtn')){
    $('wltLockBtn').onclick = async () => {
      if (!mySavedScores[id]) { showToast(t('required')); return; }
      const { error } = await rpc('judge_set_score_lock', { judge_code: judge.code, target_team_id: id, target_stage: currentStage, lock_value: !isLocked }, { errorPrefix: t('lockErr') });
      if (error) return;
      mySavedScores[id].locked = !isLocked;
      renderWalletStatement();
    };
  }
  $('wltDoneBtn').onclick = () => {
    const missing = criteria.filter(c => current[c.key] == null);
    if (missing.length && !incompleteConfirmArmed){
      incompleteConfirmArmed = true;
      haptic([12, 40, 12]);
      $('wltSaveErr').textContent = t('required');
      missing.forEach(c => {
        const row = $('wltStmtList').querySelector(`.wlt-stmt-row[data-key="${esc(c.key)}"]`);
        if (row){ row.classList.remove('wlt-warn'); void row.offsetWidth; row.classList.add('wlt-warn'); }
      });
      return;
    }
    haptic(16);
    autoSave();
    returnToList();
  };
}

function walletToggleCriterion(key){
  walletExpandedKey = walletExpandedKey === key ? null : key;
  walletSheetKey = key;
  walletSheetVal = current[key] ?? null;
  renderWalletStatement();
  if (walletExpandedKey){
    const row = $('wltStmtList').querySelector(`.wlt-stmt-row[data-key="${key}"]`);
    if (row) row.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}
function walletWireExpand(){
  requestAnimationFrame(walletRenderWheel);
  $('wltExpandDoneBtn').onclick = () => {
    if (walletSheetVal == null) return;
    current[walletSheetKey] = walletSheetVal;
    walletExpandedKey = null;
    walletPlayBurst();
    autoSave();
    renderWalletStatement();
  };
}

const WLT_WHEEL_W = 60;
// offset is -( (value-1) * WLT_WHEEL_W ), i.e. how far the track has been translated
// left of its resting position — same sign convention as -scrollLeft, so a value near
// 10 sits at a large negative offset. Read/written as the --wlt-wheel-x custom property
// rather than a JS variable so it survives whatever re-renders the track between calls.
function wltWheelOffset(track){ return parseFloat(getComputedStyle(track).getPropertyValue('--wlt-wheel-x')) || 0; }
function wltSetWheelOffset(track, px){ track.style.setProperty('--wlt-wheel-x', px + 'px'); }
function walletRenderWheel(){
  const track = $('wltWheelTrack');
  const wrap = track.parentElement;
  const padW = Math.max(0, (wrap.clientWidth - WLT_WHEEL_W) / 2);
  track.innerHTML = `<div class="wlt-wheel-spacer" style="width:${padW}px"></div>` +
    Array.from({ length: 10 }, (_, i) => i + 1).map(n => `<div class="wlt-wheel-item" data-n="${n}">${n}</div>`).join('') +
    `<div class="wlt-wheel-spacer" style="width:${padW}px"></div>`;
  const startVal = walletSheetVal || 5;
  track.style.transition = 'none';
  wltSetWheelOffset(track, -((startVal - 1) * WLT_WHEEL_W));
  void track.offsetWidth; // flush so the jump above is instant, not eased
  track.style.transition = '';
  walletUpdateWheelVisual();
  walletWireWheelDrag(wrap, track);
}
function walletUpdateWheelVisual(){
  const track = $('wltWheelTrack');
  const off = wltWheelOffset(track);
  track.querySelectorAll('.wlt-wheel-item').forEach(el => {
    const n = Number(el.dataset.n);
    const dist = Math.abs((n - 1) * WLT_WHEEL_W + off);
    const tt = Math.max(0, 1 - dist / (WLT_WHEEL_W * 1.5));
    el.style.fontSize = (20 + tt * 34) + 'px';
    el.style.opacity = String(0.32 + tt * 0.68);
    el.style.color = tt > 0.75 ? wltSpectrum(n) : 'var(--muted-soft)';
  });
}
function walletWireWheelDrag(wrap, track){
  // One handler for every pointer type — mouse, touch, pen all drive the same
  // transform directly, a movement-threshold-gated drag (distinct from the card
  // stack, which scrolls natively). No native scrolling is involved at all
  // (touch-action:none on .wlt-wheel-wrap claims the gesture outright), so there's
  // no separate "native path" for touch to fall into or fight with.
  let primed = false, dragging = false, startX = 0, startOffset = 0, pointerId = null, rafPending = false;
  // Native overflow-scroll (the old implementation) carries momentum after release —
  // a quick flick keeps traveling and decelerates. Pure 1:1 drag has none: it stops
  // dead exactly where the finger does, and a realistic flick on a phone screen only
  // covers 4-5 steps of travel, so "reachable but only with several careful drags,
  // never one flick" is exactly what dropping momentum looks like. velocity (px/ms,
  // smoothed) is tracked through the gesture and projected forward on release so a
  // real flick still carries to where it visually should.
  let velocity = 0, lastX = 0, lastT = 0;
  const MOVE_THRESHOLD = 4, MOMENTUM_MS = 180;
  const MIN_OFFSET = -((10 - 1) * WLT_WHEEL_W), MAX_OFFSET = 0;
  wrap.onpointerdown = e => {
    primed = true; dragging = false;
    startX = e.clientX; startOffset = wltWheelOffset(track); pointerId = e.pointerId;
    velocity = 0; lastX = e.clientX; lastT = performance.now();
  };
  wrap.onpointermove = e => {
    if (!primed) return;
    if (!dragging){
      if (Math.abs(e.clientX - startX) < MOVE_THRESHOLD) return;
      dragging = true;
      // Real devices occasionally throw here (NotFoundError if the browser already
      // considers the pointer inactive) — letting that escape would abort this whole
      // handler invocation before preventDefault() below ever runs, which is exactly
      // the kind of gap a native gesture could win a race through. Contain it instead.
      try { wrap.setPointerCapture(pointerId); } catch (err) {}
      track.style.transition = 'none';
      wrap.style.cursor = 'grabbing';
    }
    e.preventDefault();
    const now = performance.now(), dt = now - lastT;
    if (dt > 0){ velocity = velocity * 0.7 + ((e.clientX - lastX) / dt) * 0.3; }
    lastX = e.clientX; lastT = now;
    const next = Math.max(MIN_OFFSET, Math.min(MAX_OFFSET, startOffset + (e.clientX - startX)));
    wltSetWheelOffset(track, next);
    if (!rafPending){ rafPending = true; requestAnimationFrame(() => { rafPending = false; walletUpdateWheelVisual(); }); }
  };
  const release = () => {
    primed = false;
    if (!dragging) return;
    dragging = false;
    wrap.style.cursor = 'grab';
    track.style.transition = '';
    // A stale velocity from a finger that paused before lifting shouldn't fling the
    // wheel — only trust it if the last sample is recent enough to reflect the release.
    const momentum = (performance.now() - lastT < 80) ? velocity * MOMENTUM_MS : 0;
    walletCommitWheelValue(momentum);
  };
  // A tap (no drag) on any number selects it: no dragging needed for casual users.
  wrap.onpointerup = e => {
    const tapped = primed && !dragging && e.target.closest ? e.target.closest('.wlt-wheel-item') : null;
    release();
    if (tapped) {
      const n = Number(tapped.dataset.n);
      track.style.transition = '';
      wltSetWheelOffset(track, -((n - 1) * WLT_WHEEL_W));
      walletCommitWheelValue(0);
    }
  };
  wrap.onpointercancel = release;
  wrap.setAttribute('role', 'group');
}
function walletCommitWheelValue(momentumPx){
  const track = $('wltWheelTrack');
  if (!track) return;
  const MIN_OFFSET = -((10 - 1) * WLT_WHEEL_W), MAX_OFFSET = 0;
  const startOffset = wltWheelOffset(track);
  const projected = Math.max(MIN_OFFSET, Math.min(MAX_OFFSET, startOffset + (momentumPx || 0)));
  const idx = Math.round(-projected / WLT_WHEEL_W);
  const n = Math.min(10, Math.max(1, idx + 1));
  // A fixed transition duration made a long momentum-projected snap look like an
  // abrupt jump cut instead of a glide — the same .28s covering both a 1-step
  // correction and a 5-step flung throw reads as much faster motion for the long one.
  // Scale the duration by how far this particular snap actually travels so it decelerates
  // in proportion to distance, closer to how the old native momentum scroll actually felt.
  const travelSteps = Math.abs(idx * WLT_WHEEL_W - startOffset) / WLT_WHEEL_W;
  const duration = Math.min(0.5, 0.22 + travelSteps * 0.045);
  track.style.transitionDuration = duration + 's';
  wltSetWheelOffset(track, -(idx * WLT_WHEEL_W));
  walletUpdateWheelVisual();
  if (n !== walletSheetVal){
    const el = track.querySelector(`.wlt-wheel-item[data-n="${n}"]`);
    if (el){ el.style.transition = 'transform .18s var(--ease-pop)'; el.style.transform = 'scale(1.18)'; setTimeout(() => { el.style.transform = 'scale(1)'; }, 100); }
  }
  walletSheetVal = n;
  if ($('wltExpandDoneBtn')) $('wltExpandDoneBtn').disabled = false;
}
function walletPlayBurst(){
  const el = $('wltConfirmBurst');
  el.classList.remove('wlt-play'); void el.offsetWidth; el.classList.add('wlt-play');
  const bal = document.querySelector('.wlt-bal');
  if (!bal) return;
  const plus = document.createElement('span');
  plus.className = 'wlt-float-plus';
  const c = criteria.find(cr => cr.key === walletSheetKey);
  plus.textContent = '+' + (walletSheetVal * c.weight * 10).toFixed(1);
  bal.appendChild(plus);
  setTimeout(() => plus.remove(), 800);
}
function numRowHtml(c, val, isLocked){
  const btns = Array.from({length:10}, (_,i)=>i+1).map(n => {
    const color = spectrumColor(n);
    const bg = n === val ? color : `color-mix(in srgb, ${color} 14%, var(--glass))`;
    return `<button type="button" ${isLocked ? 'disabled' : ''} style="--btn-glow:${color}; background:${bg};" class="${val===n?'sel':''}" aria-pressed="${val===n}" aria-label="${n} / 10" data-key="${esc(c.key)}" data-val="${n}">${n}</button>`;
  }).join('');
  return `<div class="num-row">${btns}</div>`;
}
/* lightweight per-tap update: avoids rebuilding the whole scoring card (avatar, header, every
   criterion, all ~100 number buttons) on every single score tap — that full renderDetail() rebuild
   was the dominant mobile lag source during actual scoring, the app's most repeated interaction. */
function updateCriterionUI(key, val, isLocked){
  const c = criteria.find(cr => cr.key === key);
  if (!c) return;
  const item = $('teamDetailWrap').querySelector(`.crit-item[data-key="${key}"]`);
  if (item) {
    item.classList.add('answered');
    const nameEl = item.querySelector('.crit-name');
    if (nameEl) nameEl.innerHTML = `${esc(lang === 'ar' ? c.label_ar : c.label_en)}${checkSvg(key)}`;
    const numRow = item.querySelector('.num-row');
    if (numRow) {
      const kbFocus = numRow.contains(document.activeElement);   // the row is rebuilt: keep a keyboard user's place
      numRow.outerHTML = numRowHtml(c, val, isLocked);
      item.querySelectorAll('.num-row button').forEach(wireNumRowButton);
      if (kbFocus) { const nb = item.querySelector(`.num-row button[data-val="${val}"]`); if (nb) nb.focus({ preventScroll: true }); }
    }
  }
  const doneCount = criteria.filter(cr => current[cr.key]).length;
  const runningTotal = criteria.reduce((sum, cr) => sum + (Number(current[cr.key]) || 0) * cr.weight, 0) * 10;
  const doneLine = $('doneCountLine');
  if (doneLine) doneLine.innerHTML = `${doneCount}/${criteria.length} ${t('autosaveNote')}${isLocked ? ' · <span style="color:var(--danger);">' + t('scoreLocked') + '</span>' : ''}`;
  const stickyProgress = $('stickyProgress');
  if (stickyProgress) stickyProgress.textContent = `${doneCount}/${criteria.length} ${t('progressLabel')}`;
  animateTotal(runningTotal);
}
function wireNumRowButton(b){
  b.onclick = () => {
    const lockFeatureOn = settings.score_lock_enabled !== 'false';
    const isLocked = lockFeatureOn && !!(mySavedScores[currentTeam.id] && mySavedScores[currentTeam.id].locked);
    if (isLocked) return;
    haptic(10);
    const key = b.dataset.key, val = Number(b.dataset.val);
    current[key] = val;
    incompleteConfirmArmed = false;
    autoSave();
    updateCriterionUI(key, val, isLocked);
  };
}
function haptic(ms){ if (navigator.vibrate) navigator.vibrate(ms || 12); }
function wireScrollShadow(container, indicatorEl){
  if (!container || !indicatorEl) return;
  const check = () => indicatorEl.classList.toggle('show', container.scrollTop > 4);
  container.onscroll = check;
  check();
}
function checkSvg(key){
  const firstTime = !checkAnimatedKeys.has(key);
  if (firstTime) checkAnimatedKeys.add(key);
  return `<svg class="crit-check${firstTime ? '' : ' no-anim'}" viewBox="0 0 24 24" width="14" height="14"><path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
function critItemHtml(c, ci, val, isLocked){
  const label = lang === 'ar' ? c.label_ar : c.label_en;
  const desc = lang === 'ar' ? c.description_ar : c.description_en;
  return `
    <div class="crit-item ${val ? 'answered' : ''}" data-ci="${ci}" data-key="${esc(c.key)}">
      <div class="crit-top"><div class="crit-name">${esc(label)}${val ? checkSvg(c.key) : ''}</div><div class="crit-weight">${Math.round(c.weight*100)}%</div></div>
      <div class="crit-desc">${desc || ''}</div>
      ${numRowHtml(c, val, isLocked)}
    </div>
  `;
}

let cardFlipIdx = 0, incompleteConfirmArmed = false;
let checkAnimatedKeys = new Set();
function useCardFlip(){
  return window.innerWidth <= 720 && settings.mobile_scoring_layout !== 'classic';
}

function renderDetail(animateOpen){
  if (judgeView === 'wallet') return renderWalletDetail();
  const lockFeatureOn = settings.score_lock_enabled !== 'false';
  const isLocked = lockFeatureOn && !!(mySavedScores[currentTeam.id] && mySavedScores[currentTeam.id].locked);
  const doneCount = criteria.filter(c => current[c.key]).length;
  const runningTotal = criteria.reduce((sum, c) => sum + (Number(current[c.key]) || 0) * c.weight, 0) * 10;
  const desc = lang === 'ar' ? currentTeam.description_ar : currentTeam.description_en;
  const cardMode = useCardFlip();

  let mainHtml;
  if (cardMode) {
    cardFlipIdx = Math.min(cardFlipIdx, Math.max(0, criteria.length - 1));
    const cards = criteria.map((c,ci) => `<div class="flipcard">${critItemHtml(c, ci, current[c.key] || 0, isLocked)}</div>`).join('');
    const dots = criteria.map((c,ci) => `<i class="${ci===cardFlipIdx?'on':''}"></i>`).join('');
    mainHtml = `
      <div class="flipdeck">
        <div class="flipnav">
          <button class="btn-circle back-btn" id="flipPrevBtn" type="button" ${cardFlipIdx===0?'disabled':''}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>
          <span class="hint" style="font-family:var(--mono);font-size:11px;color:var(--muted);align-self:center;">${cardFlipIdx+1}/${criteria.length}</span>
          <button class="btn-circle" id="flipNextBtn" type="button" ${cardFlipIdx===criteria.length-1?'disabled':''}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></button>
        </div>
        <div class="flipviewport"><div class="fliptrack" id="flipTrack" style="transform:translateX(${lang==='ar'?'':'-'}${cardFlipIdx*100}%);">${cards}</div></div>
        <div class="flipdots">${dots}</div>
      </div>
    `;
  } else {
    mainHtml = criteria.map((c,ci) => critItemHtml(c, ci, current[c.key] || 0, isLocked)).join('');
  }

  const isLiveNow = settings.live_team_id && Number(settings.live_team_id) === currentTeam.id;
  const prevCard = $('teamDetailWrap').querySelector('.detail-card');
  const prevScrollTop = prevCard ? prevCard.scrollTop : 0;
  const prevWinScroll = window.scrollY;
  $('teamDetailWrap').innerHTML = `
    <div class="detail-head"><button class="btn-circle back-btn" id="backToList" type="button" aria-label="${t('back')}" title="${t('back')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button></div>
    <div class="detail-card${animateOpen ? ' sheet-anim-in' : ''}" style="--team-c:${teamColor(currentTeam)};">
      <div class="sheet-grip"></div>
      <div class="dc-header">
        ${isLiveNow ? `<div class="detail-live-tag"><span class="dot-static"></span>${t('liveNow')}</div>` : ''}
        <div style="display:flex; align-items:center; gap:12px;">${avatarHtml(currentTeam, 44)}<div><h2 style="margin-bottom:2px;">${esc(currentTeam.company_name)}</h2><div class="detail-cat" style="margin-bottom:0;">${esc(currentTeam.category)} · ${currentTeam.stage}</div></div></div>
        <div class="detail-cat" id="doneCountLine">${doneCount}/${criteria.length} ${t('autosaveNote')}${isLocked ? ' · <span style="color:var(--danger);">' + t('scoreLocked') + '</span>' : ''}</div>
        ${desc ? `<div class="team-info"><div class="team-info-l">${t('teamInfo')}</div><div class="team-info-v">${esc(desc)}</div></div>` : ''}
      </div>
      <div class="scroll-shadow-top" id="detailScrollShadow"></div>
      <div class="dc-main">
        <div class="sticky-summary"><span class="ss-n" id="stickyTotal">0.0</span><span>/100</span><span class="ss-p" id="stickyProgress">${doneCount}/${criteria.length} ${t('progressLabel')}</span></div>
        ${mainHtml}
        <textarea class="notes-field" id="detailNotes" placeholder="${t('notesLabel')}" ${isLocked ? 'readonly' : ''}>${esc(currentNotes)}</textarea>
        <div class="save-row">
          <div class="save-err" id="saveErr"></div>
          <div style="display:flex; gap:10px;">
            ${(lockFeatureOn && !(isLocked && settings.lock_one_way === 'true')) ? `<button class="button" id="lockToggleBtn" style="font-size:11px;">${isLocked ? t('unlockScore') : t('lockScore')}</button>` : ''}
            <button class="save-btn" id="saveDetailBtn">${t('doneBtn')}</button>
          </div>
        </div>
      </div>
    </div>
  `;
  const newCard = $('teamDetailWrap').querySelector('.detail-card');
  if (newCard) newCard.scrollTop = prevScrollTop;
  window.scrollTo(0, prevWinScroll);
  animateTotal(runningTotal);
  wireScrollShadow($('teamDetailWrap').querySelector('.detail-card'), $('detailScrollShadow'));
  $('backToList').onclick = returnToList;
  $('teamDetailWrap').querySelectorAll('.num-row button').forEach(wireNumRowButton);
  if (cardMode) {
    $('flipPrevBtn').onclick = () => { cardFlipIdx = Math.max(0, cardFlipIdx - 1); renderDetail(); };
    $('flipNextBtn').onclick = () => { cardFlipIdx = Math.min(criteria.length - 1, cardFlipIdx + 1); renderDetail(); };
  }
  $('detailNotes').oninput = e => { if (!isLocked) currentNotes = e.target.value; };
  $('detailNotes').onblur = () => { if (!isLocked) autoSave(); };
  $('saveDetailBtn').onclick = () => {
    if (doneCount < criteria.length && !incompleteConfirmArmed) {
      incompleteConfirmArmed = true;
      haptic([12,40,12]);
      $('saveErr').textContent = t('required');
      criteria.forEach((c,ci) => { if (!current[c.key]) {
        const el = $('teamDetailWrap').querySelector(`.crit-item[data-key="${esc(c.key)}"]`);
        if (el) { el.classList.add('warn-flash'); el.classList.remove('warn-shake'); void el.offsetWidth; el.classList.add('warn-shake'); }
      }});
      if (cardMode) { cardFlipIdx = criteria.findIndex(c => !current[c.key]); if (cardFlipIdx < 0) cardFlipIdx = 0; renderDetail(); }
      return;
    }
    haptic(16);
    autoSave();
    returnToList();
  };
  if (lockFeatureOn && $('lockToggleBtn')) {
    $('lockToggleBtn').onclick = async () => {
      if (!mySavedScores[currentTeam.id]) { showToast(t('required')); return; }
      const { error } = await rpc('judge_set_score_lock', { judge_code: judge.code, target_team_id: currentTeam.id, target_stage: currentStage, lock_value: !isLocked }, { errorPrefix: t('lockErr') });
      if (error) return;
      mySavedScores[currentTeam.id].locked = !isLocked;
      renderDetail();
      showToast(!isLocked ? t('lockScore') : t('unlockScore'));
    };
  }
}

function animateTotal(target){
  const from = lastRenderedTotal === null ? target : lastRenderedTotal;
  lastRenderedTotal = target;
  const hue = Math.max(0, Math.min(120, (target / 100) * 120));
  $('orbMood').style.background = `hsl(${hue}, 55%, 45%)`;
  $('orbMood').style.top = (20 + (target/100)*10) + '%';
  const els = [$('stickyTotal')].filter(Boolean);
  if (!els.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || from === target) {
    els.forEach(el => el.textContent = target.toFixed(1));
    return;
  }
  const start = performance.now(), dur = 380;
  function step(now){
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    const val = from + (target - from) * eased;
    els.forEach(el => el.textContent = val.toFixed(1));
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

let autoSaveTimer = null;
function autoSave(){
  clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(doSave, 250);
}
/* ---------- score outbox ----------
   A score is never "just a network call" that can be lost: every save is written to a small
   on-device outbox first (latest value per judge+team+stage wins), then uploaded. If the phone
   drops signal mid-event the scores stay queued, a banner says exactly how many are waiting, and
   the queue retries with backoff, when the connection returns, and when the tab comes back. */
const OUTBOX_KEY = 'scoreOutboxV1';
function outboxRead(){ try { return JSON.parse(localStorage.getItem(OUTBOX_KEY) || '{}') || {}; } catch (e) { return {}; } }
function outboxWrite(o){ try { localStorage.setItem(OUTBOX_KEY, JSON.stringify(o)); } catch (e) { /* storage blocked: falls back to in-memory retry below */ } }
const outboxMemory = {};                    // used only if localStorage is unavailable
let outboxTimer = null, outboxDelay = 3000, outboxBusy = false;
function outboxAll(){ return Object.assign({}, outboxMemory, outboxRead()); }
function outboxMine(){
  const mine = {};
  Object.entries(outboxAll()).forEach(([k, v]) => { if (judge && v.judge_id === judge.id) mine[k] = v; });
  return mine;
}
function outboxPut(entry){
  const key = `${entry.judge_id}|${entry.team_id}|${entry.stage}`;
  entry.ts = Date.now();
  outboxMemory[key] = entry;
  const o = outboxRead(); o[key] = entry; outboxWrite(o);
  return key;
}
function outboxDrop(key, ts){
  if (outboxMemory[key] && outboxMemory[key].ts === ts) delete outboxMemory[key];
  const o = outboxRead();
  if (o[key] && o[key].ts === ts) { delete o[key]; outboxWrite(o); }
}
function renderSyncBanner(){
  let el = $('syncBanner');
  const n = Object.keys(outboxMine()).length;
  if (!n) { if (el) el.classList.remove('show'); return; }
  if (!el) {
    el = document.createElement('div');
    el.id = 'syncBanner'; el.className = 'sync-banner'; el.setAttribute('role', 'status'); el.setAttribute('aria-live', 'polite');
    el.innerHTML = '<span class="sync-msg"></span><button type="button" class="sync-retry"></button>';
    el.querySelector('.sync-retry').onclick = () => flushOutbox(true);
    document.body.appendChild(el);
  }
  el.querySelector('.sync-msg').textContent = (navigator.onLine === false ? t('syncOffline') + ' ' : '') + t('syncWaiting') + ' ' + n;
  el.querySelector('.sync-retry').textContent = t('syncRetry');
  el.classList.add('show');
}
async function flushOutbox(manual){
  if (!judge || outboxBusy) return;
  const entries = Object.entries(outboxMine());
  if (!entries.length) { renderSyncBanner(); return; }
  outboxBusy = true;
  clearTimeout(outboxTimer);
  let failed = false;
  for (const [key, e] of entries) {
    try {
      const payload = { judge_id: e.judge_id, team_id: e.team_id, stage: e.stage, scores: e.scores, notes: e.notes };
      const { error } = await db.from('scores').upsert(payload, { onConflict: 'judge_id,team_id,stage' });
      if (error) throw error;
      db.from('score_history').insert(payload);
      const prev = mySavedScores[e.team_id];
      mySavedScores[e.team_id] = { scores: { ...e.scores }, notes: e.notes, locked: prev ? prev.locked : false };
      outboxDrop(key, e.ts);
    } catch (err) { failed = true; }
  }
  outboxBusy = false;
  renderSyncBanner();
  // a newer save may have been queued while this upload was in flight
  if (!failed && Object.keys(outboxMine()).length) return flushOutbox();
  if (failed) {
    if ($('saveErr')) $('saveErr').textContent = t('saveConnErr');
    outboxTimer = setTimeout(flushOutbox, outboxDelay);
    outboxDelay = Math.min(outboxDelay * 2, 30000);
  } else {
    outboxDelay = 3000;
    if ($('saveErr')) $('saveErr').textContent = '';
    if (!manual || entries.length) showToast(t('saved'));
  }
}
window.addEventListener('online', () => flushOutbox(true));
window.addEventListener('offline', renderSyncBanner);
window.addEventListener('beforeunload', e => { if (judge && Object.keys(outboxMine()).length) { e.preventDefault(); e.returnValue = ''; } });

async function doSave(){
  if (Object.keys(current).length === 0 || !currentTeam) return;
  // snapshot NOW: the judge may move to another team before the upload finishes
  outboxPut({ judge_id: judge.id, team_id: currentTeam.id, stage: currentStage, scores: { ...current }, notes: currentNotes });
  renderSyncBanner();
  await flushOutbox();
}

function renderMyScores(){
  const scoredTeams = teams.filter(tm => mySavedScores[tm.id]);
  if (scoredTeams.length === 0) {
    $('myScoresWrap').innerHTML = `
      <div class="empty-illus">
        ${mascotSvg(64)}
        <p>${t('emptyMyScores')}</p>
        <button class="button button-primary" id="goScoreBtn">${t('goScore')}</button>
      </div>
    `;
    $('goScoreBtn').onclick = () => show('score');
    return;
  }
  const rows = scoredTeams.map((tm, idx) => {
    const s = mySavedScores[tm.id];
    const total = criteria.reduce((sum, c) => sum + (Number(s.scores[c.key]) || 0) * c.weight, 0) * 10;
    return `<button type="button" class="my-row" data-id="${tm.id}" style="--i:${idx}"><div><div class="nm">${esc(tm.company_name)}</div><div class="nt">${esc(s.notes || '')}</div></div><div class="sc">${total.toFixed(1)}</div></button>`;
  }).join('');
  $('myScoresWrap').innerHTML = rows;
  $('myScoresWrap').querySelectorAll('.my-row').forEach(row => {
    row.onclick = () => { show('score'); openWalletTeam(Number(row.dataset.id)); };
  });
}

/* ---------------- Admin (lazy) ----------------
   The admin panel lives in admin.js (~30% of the old app.js) and is fetched the first time an admin
   opens the Admin tab. drawAdmin() below loads it, then calls drawAdminPanel() from admin.js. */
let allTeamsCache = [], allScoresCache = [];
let adminModulePromise = null;
function loadAdminModule(){
  if (!adminModulePromise) adminModulePromise = new Promise((resolve, reject) => {
    const el = document.createElement('script');
    el.src = 'admin.js';
    el.onload = resolve;
    el.onerror = () => { adminModulePromise = null; reject(new Error('admin.js failed to load')); };
    document.head.appendChild(el);
  });
  return adminModulePromise;
}
async function drawAdmin(){
  try { await loadAdminModule(); } catch (e) { showToast(t('noConnection')); return; }
  return drawAdminPanel();   // defined by admin.js
}

const saved = sessionStorage.getItem('judgeCode');
if (saved) { $('code').value = saved; signIn(); }
applyLang();

/* ---------- installable + cached app shell (see sw.js) ---------- */
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
}

/* ---------- environment notice on the sign-in screen ----------
   In-app browsers (links opened inside WhatsApp / Instagram / Facebook) are the usual source of
   "the page feels bugged": different scrolling, screen height and gesture handling. Detected by
   heuristics (there is no perfect test) and answered with a nudge, never a block. Also offers
   install-to-home-screen, which gives a full-screen app with no browser bars. */
var deferredInstall = null;   // var, not let: renderEnvNotice() is reached from applyLang() before this line runs
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredInstall = e; renderEnvNotice(); });
window.addEventListener('appinstalled', () => { deferredInstall = null; renderEnvNotice(); });
function renderEnvNotice(){
  const box = document.getElementById('envNotice');
  if (!box) return;
  const ua = navigator.userAgent || '';
  const standalone = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  const ios = /iPhone|iPad|iPod/.test(ua);
  const inApp = /FBAN|FBAV|Instagram|MicroMessenger|Snapchat|TikTok|Twitter|LinkedInApp|Line\//i.test(ua) || /; wv\)/.test(ua) || (ios && !/Safari\//.test(ua));
  const parts = [];
  if (inApp && !standalone) parts.push(`<p>${esc(t('inAppNotice'))}</p><button type="button" id="copyLinkBtn" class="env-btn">${esc(t('copyLink'))}</button>`);
  else if (deferredInstall && !standalone) parts.push(`<button type="button" id="installBtn" class="env-btn">${esc(t('installApp'))}</button>`);
  else if (ios && !standalone) parts.push(`<p>${esc(t('iosInstallTip'))}</p>`);
  box.innerHTML = parts.join('');
  box.classList.toggle('hide', !parts.length);
  const copy = document.getElementById('copyLinkBtn');
  if (copy) copy.onclick = async () => { try { await navigator.clipboard.writeText(location.href); } catch (e) {} showToast(t('linkCopied')); };
  const inst = document.getElementById('installBtn');
  if (inst) inst.onclick = async () => { if (!deferredInstall) return; deferredInstall.prompt(); try { await deferredInstall.userChoice; } catch (e) {} deferredInstall = null; renderEnvNotice(); };
}
renderEnvNotice();

(function trackHeaderHeight(){
  const h = document.querySelector('header'); if (!h) return;
  const set = () => document.documentElement.style.setProperty('--hdr-h', h.offsetHeight + 'px');
  set(); if (window.ResizeObserver) new ResizeObserver(set).observe(h);
})();

document.addEventListener('click', e => {
  const p = e.target.closest && e.target.closest('.wlt-about-panel');
  if (p) p.classList.toggle('open');
});
