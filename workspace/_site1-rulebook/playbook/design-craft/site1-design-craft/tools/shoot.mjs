#!/usr/bin/env node
// Screenshots and browser measurements for one page.
// Usage: node shoot.mjs <file path or http URL> <out dir> <name> [--allow-unstyled] [--fold-only]
//        [--max-slices N] [--full-slices] [--viewport WxH]
// Slices: 3 screens below the fold by default; --max-slices N sets the cap; --full-slices
// shoots down to the bottom of the page (footer included), capped at 40 per width.
// --viewport WxH adds a viewport (fold only), e.g. 358x667 for the trades first screen.
// <name>-text.txt holds the page text at every width plus alt, title, aria-label, meta and JSON-LD text.
// The call to action is the element marked data-cta="primary"; with no marker, cta is null.
// Playwright is loaded from site-template (createRequire anchored there); nothing is installed.
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
function findRoot(dir) {
  for (;;) {
    if (fs.existsSync(path.join(dir, 'site-template', 'package.json'))) return dir;
    const parent = path.dirname(dir);
    if (parent === dir) throw new Error('repo root (site-template/package.json) not found');
    dir = parent;
  }
}
let root;
try { root = findRoot(here); } catch (e) { root = findRoot(process.cwd()); }
const require = createRequire(path.join(root, 'site-template', 'package.json'));
const { chromium } = require('playwright');

const USAGE = 'usage: shoot.mjs <file or url> <out dir> <name> [--allow-unstyled] [--fold-only] [--max-slices N] [--full-slices] [--viewport WxH]';
const KNOWN_FLAGS = ['--allow-unstyled', '--fold-only', '--full-slices'];
const extraViewports = [];
const args = process.argv.slice(2);
const flags = new Set();
const positional = [];
let maxSlices = 3;
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === '--max-slices') {
    const n = Number(args[++i]);
    if (!Number.isInteger(n) || n < 0) { console.error(USAGE); process.exit(2); }
    maxSlices = n;
  } else if (a === '--viewport') {
    const v = /^(\d{3,4})x(\d{3,4})$/.exec(args[++i] || '');
    if (!v) { console.error(USAGE); process.exit(2); }
    extraViewports.push([Number(v[1]), Number(v[2])]);
  } else if (a.startsWith('--')) {
    if (!KNOWN_FLAGS.includes(a)) { console.error(`unknown flag ${a}\n${USAGE}`); process.exit(2); }
    flags.add(a);
  }
  else positional.push(a);
}
const [target, outDir, name] = positional;
if (!target || !outDir || !name) {
  console.error(USAGE);
  process.exit(2);
}
const FULL_SLICE_CAP = 40;
if (flags.has('--full-slices')) maxSlices = FULL_SLICE_CAP;
const allowUnstyled = flags.has('--allow-unstyled');
const foldOnly = flags.has('--fold-only');
const isUrl = /^https?:\/\//.test(target);
const url = isUrl ? target : pathToFileURL(path.resolve(target)).href;
const htmlBytes = isUrl ? null : fs.statSync(path.resolve(target)).size;
const WIDTHS = [[390, 844], [1440, 900], ...extraViewports];
const EXTRA = new Set(extraViewports.map(([w]) => w));
const MIN_FOLD_BYTES = 5 * 1024;
fs.mkdirSync(outDir, { recursive: true });

// Runs in the page. Returns plain measurements; no thresholds here.
function measure(foldHeight) {
  const lum = (rgb) => {
    const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
    return 0.2126 * f(rgb[0]) + 0.7152 * f(rgb[1]) + 0.0722 * f(rgb[2]);
  };
  const parse = (s) => {
    const m = s.match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(/[ ,\/]+/).filter(Boolean).map(Number);
    return { rgb: p.slice(0, 3), a: p.length > 3 ? p[3] : 1 };
  };
  const ratio = (a, b) => { const la = lum(a), lb = lum(b); return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05); };
  // nearest opaque background, or null when an image or gradient sits in between
  const backgroundOf = (el) => {
    for (let e = el; e; e = e.parentElement) {
      const cs = getComputedStyle(e);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') return null;
      const c = parse(cs.backgroundColor);
      if (c && c.a >= 0.99) return c.rgb;
    }
    return [255, 255, 255];
  };
  const visible = (el) => {
    const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none';
  };
  const out = {};
  out.pageHeight = document.documentElement.scrollHeight;
  out.fonts = [...document.fonts].map((f) => ({ family: f.family, status: f.status }));
  out.bodyFontFamily = getComputedStyle(document.body).fontFamily;
  // Families named first in a font stack (body, headings, primary action) that the browser
  // cannot render: not a loaded web font and not installed, so a fallback face is shown.
  const GENERIC = new Set(['serif', 'sans-serif', 'monospace', 'cursive', 'fantasy', 'system-ui', 'ui-serif',
    'ui-sans-serif', 'ui-monospace', 'ui-rounded', 'emoji', 'math', 'fangsong', '-apple-system', 'blinkmacsystemfont']);
  const ctx = document.createElement('canvas').getContext('2d');
  const sample = 'mmmmmmmmmmlli1WQ@#';
  const renders = ([fam, wt, st]) => ['monospace', 'serif', 'sans-serif'].some((g) => {
    ctx.font = `${st} ${wt} 72px ${g}`; const base = ctx.measureText(sample).width;
    ctx.font = `${st} ${wt} 72px "${fam}", ${g}`; return ctx.measureText(sample).width !== base;
  });
  const firstFamilies = new Map();
  for (const el of [document.body, ...document.querySelectorAll('h1, h2, h3, [data-cta="primary"]')]) {
    const fam = getComputedStyle(el).fontFamily.split(',')[0].trim().replace(/^["']|["']$/g, '');
    const cs = getComputedStyle(el);
    if (fam && !GENERIC.has(fam.toLowerCase())) firstFamilies.set(`${fam}|${cs.fontWeight}|${cs.fontStyle}`, [fam, cs.fontWeight, cs.fontStyle]);
  }
  out.fontsNotLoaded = [...new Set([...firstFamilies.values()].filter((f) => !renders(f)).map((f) => f[0]))];
  out.styleRules = [...document.styleSheets].reduce((n, s) => { try { return n + s.cssRules.length; } catch (e) { return n + 1; } }, 0);
  const cta = document.querySelector('[data-cta="primary"]');
  if (cta) {
    const r = cta.getBoundingClientRect();
    out.cta = { href: cta.getAttribute('href'), text: cta.textContent.trim().slice(0, 80),
      box: { x: r.x, y: r.y + window.scrollY, w: r.width, h: r.height },
      inFold: r.width > 0 && r.height > 0 && r.top < foldHeight && r.bottom > 0 };
  } else { out.cta = null; }
  const bodyBg = backgroundOf(document.body);
  const bodyColor = parse(getComputedStyle(document.body).color);
  out.bodyContrast = bodyBg && bodyColor ? { color: bodyColor.rgb, background: bodyBg, ratio: +ratio(bodyColor.rgb, bodyBg).toFixed(2) } : null;
  let min = null, minSmall = null, unmeasurable = 0, counted = 0;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const seen = new Set();
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const el = n.parentElement;
    if (!el || seen.has(el) || !n.textContent.trim() || !visible(el)) continue;
    seen.add(el);
    const c = parse(getComputedStyle(el).color), bg = backgroundOf(el);
    if (!c || !bg) { unmeasurable++; continue; }
    let alpha = c.a;
    for (let e = el; e; e = e.parentElement) alpha *= Number(getComputedStyle(e).opacity);
    const shown = c.rgb.map((v, i) => v * alpha + bg[i] * (1 - alpha));
    const r = ratio(shown, bg); counted++;
    const fcs = getComputedStyle(el); const px = parseFloat(fcs.fontSize);
    const large = px >= 24 || (px >= 18.66 && Number(fcs.fontWeight) >= 700);
    if (!large && (minSmall === null || r < minSmall)) minSmall = r;
    if (min === null || r < min) min = r;
  }
  out.minTextContrast = min === null ? null : +min.toFixed(2);
  out.minSmallTextContrast = minSmall === null ? null : +minSmall.toFixed(2);
  out.unmeasurableText = unmeasurable; out.measuredText = counted;
  const onScreen = (e) => { const r = e.getBoundingClientRect(); return r.width > 1 && r.height > 1 && r.right > 0 && r.left < innerWidth; };
  const targets = [...document.querySelectorAll('a[href], button, input[type=submit], [role=button]')].filter(visible).filter(onScreen);
  const inRunningText = (el) => el.tagName === 'A' && getComputedStyle(el).display === 'inline'
    && el.parentElement && el.parentElement.textContent.trim().length > el.textContent.trim().length + 8;
  const dims = (list) => list.length ? { count: list.length, minWidth: Math.round(Math.min(...list.map((e) => e.getBoundingClientRect().width))),
    minHeight: Math.round(Math.min(...list.map((e) => e.getBoundingClientRect().height))) } : null;
  out.tapAll = dims(targets); out.tapOutsideText = dims(targets.filter((e) => !inRunningText(e)));
  out.imgCount = document.images.length;
  out.imgMissingAlt = [...document.images].filter((i) => !i.hasAttribute('alt')).length;
  out.lang = document.documentElement.getAttribute('lang');
  return out;
}

const browser = await chromium.launch();
const metrics = { name, url, htmlBytes, widths: {} };
const textLines = new Set();
let failed = false;
const fail = (msg) => { console.error('FAIL: ' + msg); failed = true; };
for (const [w, h] of WIDTHS) {
  const context = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  let bytes = 0;
  page.on('response', async (resp) => { try { bytes += (await resp.body()).length; } catch (e) { /* ignore */ } });
  let networkIdle = true;
  try {
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
    } catch (e) {
      // some pages never go idle (open connections): fall back to the load event plus a short wait
      networkIdle = false;
      await page.goto(url, { waitUntil: 'load', timeout: 15000 });
      await page.waitForTimeout(2000);
    }
    await page.evaluate(() => document.fonts.ready);
  } catch (e) { fail(`navigation at ${w}: ${e.message}`); await context.close(); continue; }
  const fold = path.join(outDir, `${name}-${w}-fold.png`);
  await page.screenshot({ path: fold });
  if (fs.statSync(fold).size < MIN_FOLD_BYTES) fail(`fold tile under 5 KB at ${w}`);
  const m = await page.evaluate(measure, h);
  m.transferredBytes = bytes;
  m.networkIdle = networkIdle;
  if (!foldOnly && !EXTRA.has(w)) {
    for (let i = 1; i <= maxSlices; i++) {
      const y = i * h;
      if (y >= m.pageHeight) break;
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(150);
      await page.screenshot({ path: path.join(outDir, `${name}-${w}-s${i}.png`) });
    }
  }
  if (m.styleRules === 0 && !allowUnstyled) fail(`zero stylesheet rules at ${w} (use --allow-unstyled for an unstyled control)`);
  if (m.fonts.some((f) => f.status === 'error')) fail(`a font failed to load at ${w}`);
  if (m.fontsNotLoaded.length) console.error(`WARN: font named but not loaded at ${w} (fallback shown): ${m.fontsNotLoaded.join(', ')}`);
  metrics.widths[w] = m;
  const pageText = await page.evaluate(() => [document.body.innerText,
    ...[...document.querySelectorAll('[alt], [title], [aria-label], meta[name="description"], meta[property^="og:"]')]
      .flatMap((e) => ['alt', 'title', 'aria-label', 'content'].map((a) => e.getAttribute(a)).filter(Boolean)),
    ...[...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent.replace(/\s+/g, ' '))].join('\n'));
  for (const ln of pageText.split('\n')) if (ln.trim()) textLines.add(ln.trim());
  await context.close();
}
await browser.close();
fs.writeFileSync(path.join(outDir, `${name}-text.txt`), [...textLines].join('\n'));
fs.writeFileSync(path.join(outDir, `${name}-metrics.json`), JSON.stringify(metrics, null, 2));
console.log(`${failed ? 'FAILED' : 'ok'}: ${name} -> ${outDir}`);
process.exit(failed ? 1 : 0);
