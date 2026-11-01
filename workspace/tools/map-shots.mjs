// Screenshots of the R2 office map on / and /locations at 390 and 1440 (motion on, scrolled first). Usage: node map-shots.mjs <out-dir>
import { chromium } from 'playwright'
import fs from 'node:fs'
const out = process.argv[2] ?? '.'
fs.mkdirSync(out, { recursive: true })
const b = await chromium.launch()
for (const vw of [390, 1440]) {
  const ctx = await b.newContext({ viewport: { width: vw, height: 900 }, isMobile: vw < 500, hasTouch: vw < 500, timezoneId: 'America/New_York' })
  const p = await ctx.newPage()
  for (const path of ['/', '/locations']) {
    await p.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' })
    const H = await p.evaluate(() => document.documentElement.scrollHeight)
    for (let y = 0; y < H; y += 400) { await p.evaluate(y => scrollTo(0, y), y); await p.waitForTimeout(60) }
    const el = p.locator('.om').first()
    await el.scrollIntoViewIfNeeded(); await p.waitForTimeout(1200)
    await el.screenshot({ path: `${out}/${vw}${path === '/' ? '_home' : '_locations'}.png` })
    console.log(vw, path, JSON.stringify(await p.evaluate(() => [...document.querySelectorAll('.om-label')].map(l => { const r = l.getBoundingClientRect(); return [Math.round(r.left), Math.round(r.right), Math.round(r.top), Math.round(r.bottom)] }))))
  }
  await ctx.close()
}
await b.close()
