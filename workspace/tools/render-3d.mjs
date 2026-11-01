// Build-time 3D renders (design plan section 2, tier 2): three.js runs HERE, in headless Chromium, never on the site.
// Each scene in ./render/<name>.js draws into a canvas; this script saves it as public/art/<name>.webp.
// Versions are pinned (three 0.187.0 in package.json, Playwright's bundled Chromium) so a re-render is reproducible.
// Re-render whenever a brand colour or a scene changes:  node render-3d.mjs trust-band
// Needs ImageMagick (`magick`) on PATH for the PNG to WebP step.
import { chromium } from 'playwright'
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.resolve(here, '../../public/art')
// trust-band: 1280 x 340 CSS px at 2x (the desktop band)
// Each scene lists its outputs; a scene may also return data (office-map: the projected pin positions).
const MAX_KB = 120
const scenes = {
  'trust-band': { outputs: [{ file: 'trust-band', width: 2560, height: 680, quality: 72 }] },
  'office-map': { outputs: [
    { file: 'office-map', variant: 'desktop', width: 2400, height: 1200, quality: 82 },
    { file: 'office-map-phone', variant: 'phone', width: 1200, height: 1160, quality: 82 },
  ] },
}
const name = process.argv[2] ?? 'trust-band'
const spec = scenes[name]
if (!spec) { console.error(`unknown scene "${name}"; known: ${Object.keys(scenes).join(', ')}`); process.exit(2) }

const TYPES = { '.html': 'text/html', '.js': 'text/javascript' }
// Tiny static server for the harness: files under workspace/tools only, never a directory, never outside it.
const server = http.createServer((req, res) => {
  try {
    const rel = path.normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname))
    const file = path.join(here, rel)
    const inside = !path.relative(here, file).startsWith('..') && !path.isAbsolute(path.relative(here, file))
    if (!inside || !fs.statSync(file, { throwIfNoEntry: false })?.isFile()) { res.writeHead(404).end(); return }
    res.writeHead(200, { 'content-type': TYPES[path.extname(file)] ?? 'application/octet-stream' }).end(fs.readFileSync(file))
  } catch { res.writeHead(400).end() }
})
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
const port = server.address().port

const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--ignore-gpu-blocklist'] })
const results = {}
try {
  fs.mkdirSync(outDir, { recursive: true })
  for (const o of spec.outputs) {
    const png = path.join(here, `render/${o.file}.png`)
    const page = await browser.newPage({ viewport: { width: o.width, height: o.height } })
    page.on('console', m => { if (m.type() === 'error') console.error('scene:', m.text()) })
    // A scene error (bad import, no WebGL context) never sets __done: fail fast instead of waiting for the timeout.
    const failed = new Promise((_, reject) => page.on('pageerror', e => reject(new Error(`scene failed: ${e.message}`))))
    await page.goto(`http://127.0.0.1:${port}/render/scene.html?scene=${name}&w=${o.width}&h=${o.height}${o.variant ? `&variant=${o.variant}` : ''}`)
    await Promise.race([page.waitForFunction(() => window.__done === true, null, { timeout: 60000 }), failed])
    const dataUrl = await page.evaluate(() => document.querySelector('canvas').toDataURL('image/png'))
    results[o.variant ?? o.file] = { width: o.width, height: o.height, pins: await page.evaluate(() => window.__result ?? null) }
    fs.writeFileSync(png, Buffer.from(dataUrl.split(',')[1], 'base64'))
    const webp = path.join(outDir, `${o.file}.webp`)
    // Lower the quality until the file fits the budget (office-map only; trust-band keeps its fixed quality).
    for (let q = o.quality; ; q -= 4) {
      execFileSync('magick', [png, '-quality', String(q), webp])
      if (name !== 'office-map' || fs.statSync(webp).size <= MAX_KB * 1024 || q <= 30) break
    }
    console.log(`${webp}: ${Math.round(fs.statSync(webp).size / 1024)} KB`)
    fs.rmSync(png, { force: true })
    await page.close()
  }
  if (name === 'office-map') writeMapData(results)
} catch (e) {
  console.error(e.message); process.exitCode = 1
} finally {
  await browser.close()
  server.close()
}

// office-map: pin positions as % of each image, written for the HTML pins (JSON for reference, CSS for the layout).
// CSP forbids style="" attributes, so the component imports the generated stylesheet instead.
function writeMapData(res) {
  const pct = (v, total) => Math.round((v / total) * 10000) / 100
  const data = {}
  for (const [variant, r] of Object.entries(res)) {
    data[variant] = { width: r.width, height: r.height, pins: Object.fromEntries(Object.entries(r.pins).map(([slug, p]) => [slug, { left: pct(p.x, r.width), top: pct(p.y, r.height) }])) }
  }
  const root = path.resolve(here, '../..')
  fs.writeFileSync(path.join(root, 'src/data/office-map.json'), JSON.stringify(data, null, 2) + '\n')
  const rule = (variant, indent) => Object.entries(data[variant].pins).map(([slug, p]) => `${indent}.om-pin[data-office='${slug}'] { left: ${p.left}%; top: ${p.top}%; }`).join('\n')
  const css = `/* GENERATED by workspace/tools/render-3d.mjs office-map (do not edit). Pin anchors as % of the rendered image. */\n${rule('phone', '')}\n@media (min-width: 640px) {\n${rule('desktop', '  ')}\n}\n`
  fs.writeFileSync(path.join(root, 'src/styles/office-map-pins.css'), css)
  console.log('wrote src/data/office-map.json and src/styles/office-map-pins.css')
}
