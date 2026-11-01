// Phone pixel baseline and diff (design plan section 9 item 4 / section 11 P0-lite).
// Renders pages at 390 px with reduced motion and a FIXED clock (open/closed text depends on the time), so two runs of
// unchanged code give identical pixels. Usage (dev server running):
//   node phone-baseline.mjs save   -> writes ../04-logs/baseline/phone-<page>.png (lossless; commit these)
//   node phone-baseline.mjs diff   -> compares against them; prints changed-pixel counts, writes *-diff.png on change
import { chromium } from 'playwright'
import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
const mode = process.argv[2] ?? 'diff'
const pages = { home: '/', doctors: '/doctors', locations: '/locations', contact: '/contact' }
const FIXED_TIME = new Date('2026-11-03T15:00:00Z') // Tuesday 10:00 AM in New York: both offices open
const dir = fileURLToPath(new URL('../04-logs/baseline', import.meta.url)) // works from any cwd
fs.mkdirSync(dir, { recursive: true })
const b = await chromium.launch()
let changed = 0
try {
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true, reducedMotion: 'reduce' })
for (const [name, path] of Object.entries(pages)) {
  const p = await ctx.newPage()
  await p.clock.setFixedTime(FIXED_TIME)
  await p.goto(`http://localhost:4321${path}`, { waitUntil: 'networkidle' })
  const H = await p.evaluate(() => document.documentElement.scrollHeight)
  for (let y = 0; y < H; y += 500) { await p.evaluate(y => scrollTo(0, y), y); await p.waitForTimeout(40) }
  await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(300)
  const base = `${dir}/phone-${name}.png`, now = `${dir}/phone-${name}.now.png`
  await p.screenshot({ path: mode === 'save' ? base : now, fullPage: true })
  if (mode === 'diff') {
    fs.rmSync(`${dir}/phone-${name}-diff.png`, { force: true })
    if (!fs.existsSync(base)) { console.error(`no baseline for ${name}: run with 'save' first`); process.exit(2) }
    let px = 'size differs'
    try { execFileSync('magick', ['compare', '-metric', 'AE', base, now, `${dir}/phone-${name}-diff.png`], { stdio: 'pipe' }); px = '0' }
    catch (e) {
      if (e.code === 'ENOENT') { console.error('ImageMagick (magick) is not installed'); process.exit(2) }
      px = String(e.stderr || e.message).trim().split(/\s/)[0]
    }
    if (px !== '0') changed++
    console.log(`${name.padEnd(10)} changed pixels: ${px}`)
    if (px === '0') { fs.rmSync(now); fs.rmSync(`${dir}/phone-${name}-diff.png`, { force: true }) } else console.log(`  see ${dir}/phone-${name}-diff.png`)
  } else console.log(`saved ${base}`)
  await p.close()
}
} finally { await b.close() }
if (mode === 'diff') process.exitCode = changed ? 1 : 0
