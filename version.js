// Loopze — Live Version Hydration
// ───────────────────────────────────────────────────────────────
// Fetches the latest GitHub release and replaces version markers
// in the page. Runs after the React app has mounted, then again
// on any DOM mutation (so re-rendered components stay updated).
//
// Configure the repo here:
const LOOPZE_REPO = 'loopzedev/loopze-edge';

// Markers in source:
//   • <span data-loopze-version>...</span>     → tag_name (e.g. "v0.4.1")
//   • <span data-loopze-released>...</span>    → release date (locale-formatted)
//   • <span data-loopze-size>...</span>        → binary size in MB (from primary asset)
//   • text node containing "__LOOPZE_VERSION__" → replaced inline (terminal log)
//
// Caching: the GitHub API response is stored in localStorage for 1h,
// so reloads during development don't burn through the 60 req/h
// unauthenticated rate limit.

(function () {
  const CACHE_KEY = 'loopze.release.cache';
  const CACHE_TTL = 60 * 60 * 1000; // 1 hour

  function fmtDate(iso) {
    try {
      return new Date(iso).toLocaleDateString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric',
      });
    } catch { return ''; }
  }

  function fmtSize(bytes) {
    if (!bytes) return null;
    const mb = bytes / (1024 * 1024);
    return mb.toFixed(mb < 10 ? 1 : 0);
  }

  // Pick a representative binary asset to read size from.
  // Prefer linux-amd64 tarball; fall back to first .tar.gz / .zip.
  function pickPrimaryAsset(assets = []) {
    if (!assets.length) return null;
    const score = (a) => {
      const n = a.name.toLowerCase();
      let s = 0;
      if (n.includes('linux'))  s += 4;
      if (n.includes('amd64') || n.includes('x86_64')) s += 2;
      if (n.endsWith('.tar.gz')) s += 1;
      return s;
    };
    return [...assets].sort((a, b) => score(b) - score(a))[0];
  }

  function loadCache() {
    try {
      const raw = localStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const { ts, data } = JSON.parse(raw);
      if (Date.now() - ts > CACHE_TTL) return null;
      return data;
    } catch { return null; }
  }

  function saveCache(data) {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
    } catch { /* quota — ignore */ }
  }

  async function fetchRelease() {
    const cached = loadCache();
    if (cached) return cached;

    try {
      const r = await fetch(
        `https://api.github.com/repos/${LOOPZE_REPO}/releases/latest`,
        { headers: { Accept: 'application/vnd.github+json' } }
      );
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const json = await r.json();
      const data = {
        version:  json.tag_name || '',
        released: json.published_at || '',
        sizeMB:   fmtSize(pickPrimaryAsset(json.assets)?.size),
      };
      saveCache(data);
      return data;
    } catch (err) {
      console.warn('[loopze-version] fetch failed, keeping defaults:', err);
      return null;
    }
  }

  // Replace text in nodes/attrs without nuking children.
  function replaceTextInElements(selector, value) {
    if (!value) return;
    document.querySelectorAll(selector).forEach((el) => {
      if (el.textContent !== value) el.textContent = value;
    });
  }

  // Walk text nodes for sentinel placeholders (like __LOOPZE_VERSION__).
  function replaceSentinels(root, replacements) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const targets = [];
    let n;
    while ((n = walker.nextNode())) {
      for (const [needle] of Object.entries(replacements)) {
        if (n.nodeValue.includes(needle)) { targets.push(n); break; }
      }
    }
    targets.forEach((node) => {
      let v = node.nodeValue;
      for (const [needle, val] of Object.entries(replacements)) {
        if (val) v = v.split(needle).join(val);
      }
      if (v !== node.nodeValue) node.nodeValue = v;
    });
  }

  function hydrate(data) {
    if (!data) return;
    replaceTextInElements('[data-loopze-version]', data.version);
    replaceTextInElements('[data-loopze-released]', fmtDate(data.released));
    replaceTextInElements('[data-loopze-size]', data.sizeMB);
    replaceSentinels(document.body, { '__LOOPZE_VERSION__': data.version });
  }

  let release = null;
  let scheduled = false;
  function scheduleHydrate() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      hydrate(release);
    });
  }

  async function init() {
    release = await fetchRelease();
    hydrate(release);

    // React re-renders may overwrite our updates — observe and re-apply.
    const root = document.getElementById('root') || document.body;
    new MutationObserver(scheduleHydrate).observe(root, {
      childList: true, subtree: true, characterData: true,
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // App.jsx may still be transpiling — give it a tick.
    setTimeout(init, 50);
  }
})();
