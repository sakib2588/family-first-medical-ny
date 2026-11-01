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
const scenes = { 'trust-band': { width: 2560, height: 680, quality: 72 } }
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

const png = path.join(here, `render/${name}.png`)
const browser = await chromium.launch({ args: ['--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--ignore-gpu-blocklist'] })
try {
  const page = await browser.newPage({ viewport: { width: spec.width, height: spec.height } })
  page.on('console', m => { if (m.type() === 'error') console.error('scene:', m.text()) })
  // A scene error (bad import, no WebGL context) never sets __done: fail fast instead of waiting for the timeout.
  const failed = new Promise((_, reject) => page.on('pageerror', e => reject(new Error(`scene failed: ${e.message}`))))
  await page.goto(`http://127.0.0.1:${port}/render/scene.html?scene=${name}&w=${spec.width}&h=${spec.height}`)
  await Promise.race([page.waitForFunction(() => window.__done === true, null, { timeout: 30000 }), failed])
  const dataUrl = await page.evaluate(() => document.querySelector('canvas').toDataURL('image/png'))
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(png, Buffer.from(dataUrl.split(',')[1], 'base64'))
  const webp = path.join(outDir, `${name}.webp`)
  execFileSync('magick', [png, '-quality', String(spec.quality), webp])
  console.log(`${webp}: ${Math.round(fs.statSync(webp).size / 1024)} KB`)
} catch (e) {
  console.error(e.message); process.exitCode = 1
} finally {
  fs.rmSync(png, { force: true })
  await browser.close()
  server.close()
}
