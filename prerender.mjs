// Prerender — runs the built .js component files in a Node vm sandbox,
// captures the React element passed to ReactDOM.createRoot().render(),
// renders it to a static HTML string and injects it between the
// LOOPZE_SSR_START / LOOPZE_SSR_END markers inside <div id="root"> in
// index.html. Crawlers then see the full content without executing JS.
//
// Effects (useEffect) do not run during renderToString, so anything that
// only fires in the browser (IntersectionObserver, intervals, clipboard,
// postMessage) is naturally skipped. We still stub those globals so
// initial useState / module-top-level code does not blow up.

import { readFile, writeFile } from 'node:fs/promises';
import vm from 'node:vm';
import React from 'react';
import { renderToString } from 'react-dom/server';

const SCRIPT_ORDER = [
  'tweaks-panel.js',
  'chrome.js',
  'hero.js',
  'why.js',
  'features.js',
  'app.js',
];

const SSR_START = '<!--LOOPZE_SSR_START-->';
const SSR_END   = '<!--LOOPZE_SSR_END-->';

let captured = null;

const noop = () => {};
class StubObserver { observe() {} unobserve() {} disconnect() {} }

const sandbox = {
  React,
  ReactDOM: {
    createRoot: () => ({ render: (el) => { captured = el; }, unmount: noop }),
    hydrateRoot: (_, el) => { captured = el; },
  },
  document: {
    getElementById: () => ({}),
    documentElement: { setAttribute: noop, removeAttribute: noop, classList: { add: noop, remove: noop } },
    addEventListener: noop,
    removeEventListener: noop,
    querySelectorAll: () => [],
  },
  navigator: { clipboard: { writeText: noop } },
  setTimeout, clearTimeout, setInterval, clearInterval,
  IntersectionObserver: StubObserver,
  ResizeObserver: StubObserver,
  MutationObserver: StubObserver,
  console,
};
sandbox.window = sandbox;
sandbox.self = sandbox;
sandbox.globalThis = sandbox;
sandbox.parent = { postMessage: noop };

vm.createContext(sandbox);

for (const f of SCRIPT_ORDER) {
  const src = await readFile(f, 'utf8');
  vm.runInContext(src, sandbox, { filename: f });
}

if (!captured) {
  throw new Error('prerender: no React element captured — did app.js call ReactDOM.createRoot().render()?');
}

const ssrHtml = renderToString(captured);

let indexHtml = await readFile('index.html', 'utf8');
const re = new RegExp(`${SSR_START}[\\s\\S]*?${SSR_END}`);
if (!re.test(indexHtml)) {
  throw new Error(`prerender: markers ${SSR_START} / ${SSR_END} not found in index.html`);
}
indexHtml = indexHtml.replace(re, `${SSR_START}${ssrHtml}${SSR_END}`);
await writeFile('index.html', indexHtml);

console.log(`prerendered ${(ssrHtml.length / 1024).toFixed(1)} KiB into #root`);
