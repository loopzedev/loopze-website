// Loopze Homepage build — transpiles every *.jsx in the project root
// to a sibling *.js file, ready to be loaded by a plain <script> tag.
//
//   npm run build         one-shot transpile of every .jsx file
//   npm run watch         re-transpile on change (poll-based, no fswatch dep)
//
// Why we do this: Babel Standalone runs JSX→JS transpilation in the browser
// (~640 KiB + multi-second parse cost). Pre-transpiling at build time turns
// that into a no-op at runtime. Source of truth is .jsx; output .js is
// committed so the site still works as plain static files on GitHub Pages.

import { transformAsync } from '@babel/core';
import presetReact from '@babel/preset-react';
import { readdir, readFile, writeFile, stat } from 'node:fs/promises';

const BANNER = '// AUTO-GENERATED from the matching .jsx file — do not edit by hand.\n// Run `npm run build` after editing the .jsx source.\n';

async function listJsx() {
  const entries = await readdir('.', { withFileTypes: true });
  return entries
    .filter((d) => d.isFile() && d.name.endsWith('.jsx'))
    .map((d) => d.name)
    .sort();
}

async function buildOne(file) {
  const src = await readFile(file, 'utf8');
  const { code } = await transformAsync(src, {
    filename: file,
    presets: [[presetReact, { runtime: 'classic' }]],
    babelrc: false,
    configFile: false,
    sourceMaps: false,
    comments: true,
  });
  const out = file.replace(/\.jsx$/, '.js');
  await writeFile(out, BANNER + code);
  return { in: file, out, bytes: code.length };
}

async function buildAll() {
  const files = await listJsx();
  if (files.length === 0) {
    console.log('no .jsx files found');
    return;
  }
  const results = await Promise.all(files.map(buildOne));
  for (const r of results) {
    console.log(`  ${r.in.padEnd(20)} → ${r.out.padEnd(20)} ${String(r.bytes).padStart(6)} B`);
  }
  console.log(`built ${results.length} file(s)`);
}

async function watch() {
  await buildAll();
  console.log('\nwatching for changes (Ctrl-C to stop)...');
  const seen = new Map();
  for (const f of await listJsx()) {
    seen.set(f, (await stat(f)).mtimeMs);
  }
  while (true) {
    await new Promise((r) => setTimeout(r, 500));
    const files = await listJsx();
    for (const f of files) {
      const m = (await stat(f)).mtimeMs;
      if (seen.get(f) !== m) {
        seen.set(f, m);
        try {
          const r = await buildOne(f);
          console.log(`[${new Date().toLocaleTimeString()}] rebuilt ${r.out} (${r.bytes} B)`);
        } catch (err) {
          console.error(`[${new Date().toLocaleTimeString()}] ${f}: ${err.message}`);
        }
      }
    }
  }
}

const isWatch = process.argv.includes('--watch');
await (isWatch ? watch() : buildAll());
