# Loopze Homepage

Static marketing site for [Loopze](https://loopze.dev) — industrial flow automation runtime.

## Stack

- Plain HTML + CSS + React (loaded via CDN, transpiled in-browser by Babel)
- No build step, no package.json — open `index.html` and it works
- `version.js` hydrates version markers from the latest GitHub release at runtime

## Deploy

Auto-deployed to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.
Custom domain configured in `CNAME` → `loopze.dev`.

## Local preview

Just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Editing

- `index.html` — entry point, script imports
- `styles.css` — all styling, design tokens at the top
- `chrome.jsx` — top nav + footer
- `hero.jsx` — hero variants (split / centered / terminal) + flow mockup
- `why.jsx` — "Why Loopze" comparison section + reliability spotlight
- `features.jsx` — feature cards
- `app.jsx` — root composition + tweak panel wiring
- `tweaks-panel.jsx` — in-page tweak controls (theme, hero variant, typography)
- `version.js` — runtime fetch of latest GitHub release for version markers

## Version markers

Anywhere in the markup, you can use:

- `<span data-loopze-version>v0.4.1</span>` → replaced with `tag_name`
- `<span data-loopze-released></span>` → replaced with release date
- `<span data-loopze-size></span>` → replaced with primary asset size in MB
- `__LOOPZE_VERSION__` in any text → replaced inline (used in the terminal log)

The fallback text inside the spans is what shows if the GitHub API is unreachable.
