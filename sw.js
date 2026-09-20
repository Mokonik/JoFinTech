/* Service worker: makes the app installable and keeps working on bad venue Wi-Fi.

   Strategy (chosen so a cache can never trap judges on old code during an event):
   - Same-origin files (pages, JS, CSS, icons): NETWORK FIRST with a 4s patience window. When the
     network answers, that answer is used and the cache is refreshed; when it is slow or down, the
     last cached copy is served. So a deploy reaches everyone on their next online load, and an
     offline load still opens the app.
   - Pinned SDK on jsDelivr (immutable, versioned URL): CACHE FIRST.
   - Google Fonts CSS + font files: STALE-WHILE-REVALIDATE.
   - Supabase (live data, sign-in, scores): never touched here. The app keeps its own last-good data
     snapshot and its own score outbox (see app.js).
   Bump VERSION to drop every old cache at once. */
const VERSION = 'v2';
const CACHE = 'jo-portal-' + VERSION;
const SHELL = ['./', 'index.html', 'teams.html', 'styles.css', 'app.js', 'teams.js', 'config.js', 'manifest.webmanifest',
  'assets/jo-mark.png', 'assets/green-circle-mark.png', 'assets/icon-192.png'];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // one by one, so a single missing file cannot abort the whole install
    await Promise.all(SHELL.map(u => cache.add(new Request(u, { cache: 'reload' })).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('jo-portal-') && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

const withTimeout = (p, ms) => new Promise((resolve, reject) => {
  const t = setTimeout(() => reject(new Error('timeout')), ms);
  p.then(v => { clearTimeout(t); resolve(v); }, e => { clearTimeout(t); reject(e); });
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  const network = fetch(req).then(res => {
    if (res && res.ok && res.type === 'basic') cache.put(req, res.clone());
    return res;
  });
  try {
    return await withTimeout(network, 4000);
  } catch (e) {
    const hit = await cache.match(req, { ignoreSearch: true });
    if (hit) { network.catch(() => {}); return hit; }
    if (req.mode === 'navigate') {
      const page = new URL(req.url).pathname === '/teams' ? 'teams.html' : 'index.html';
      const fallback = await cache.match(page);
      if (fallback) return fallback;
    }
    return network;   // nothing cached: let the real error / slow answer through
  }
}

async function cacheFirst(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
  return res;
}

async function staleWhileRevalidate(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  const refresh = fetch(req).then(res => {
    if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
    return res;
  }).catch(() => hit);
  return hit || refresh;
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname.endsWith('.supabase.co')) return;
  if (url.origin === self.location.origin) {
    if (url.pathname.endsWith('/sw.js')) return;
    return event.respondWith(networkFirst(req));
  }
  if (url.hostname === 'cdn.jsdelivr.net') return event.respondWith(cacheFirst(req));
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') return event.respondWith(staleWhileRevalidate(req));
});
