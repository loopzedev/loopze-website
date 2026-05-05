# Loopze Homepage

Static marketing site for [Loopze](https://loopze.dev) — industrial flow automation runtime.

## Stack

- Plain HTML + CSS + React (loaded via CDN)
- Source written in JSX, transpiled to plain JS at build time (no runtime Babel)
- `version.js` hydrates version markers from the latest GitHub release at runtime

The deployed site is just static files — `index.html` plus a handful of `.js` files. Open it directly and it works.

## Editing

Source of truth is `*.jsx`. After every edit, run the build to regenerate the matching `*.js`:

```bash
npm install        # one-time, installs Babel toolchain locally
npm run build      # transpiles every .jsx → .js once
npm run watch      # rebuilds on save (poll-based, no extra deps)
```

Both the `.jsx` source and the `.js` output are committed. The `.js` files are what GitHub Pages serves.

| File | Purpose |
|---|---|
| `index.html` | entry point, script imports |
| `styles.css` | all styling, design tokens at the top |
| `chrome.jsx` | top nav + footer |
| `hero.jsx` | hero variants (split / centered / terminal) + flow mockup |
| `why.jsx` | "Why Loopze" comparison section + reliability spotlight |
| `features.jsx` | feature cards |
| `app.jsx` | root composition + tweak panel wiring |
| `tweaks-panel.jsx` | in-page tweak controls (theme, hero variant, typography) |
| `version.js` | runtime fetch of latest GitHub release for version markers |
| `build.mjs` | transpiles every `.jsx` → `.js` (run via `npm run build`) |
| `install` | shell installer served at `loopze.dev/install` |
| `robots.txt`, `sitemap.xml` | SEO basics |
| `public/` | favicons, manifest, OG image |

## Local preview

```bash
npm run serve
# → http://localhost:8000
```

## Deploy

Auto-deployed to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.
Custom domain configured in `CNAME` → `loopze.dev`.

## Version markers

Anywhere in the markup, you can use:

- `<span data-loopze-version>v0.4.1</span>` → replaced with `tag_name`
- `<span data-loopze-released></span>` → replaced with release date
- `<span data-loopze-size></span>` → replaced with primary asset size in MB
- `__LOOPZE_VERSION__` in any text → replaced inline (used in the terminal log)

The fallback text inside the spans is what shows if the GitHub API is unreachable.
