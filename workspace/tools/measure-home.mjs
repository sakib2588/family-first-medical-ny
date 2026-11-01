// Measure home page section heights (phone + desktop) and save full-page shots. Usage: node measure-home.mjs <tag>
import { chromium } from 'playwright'
const tag = process.argv[2] ?? 'now'
const views = { phone: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true }, desktop: { viewport: { width: 1280, height: 800 } } }
const b = await chromium.launch()
for (const [name, opts] of Object.entries(views)) {
  const p = await (await b.newContext({ ...opts, reducedMotion: 'reduce' })).newPage()
  await p.goto('http://localhost:4321/', { waitUntil: 'networkidle' })
  const H = await p.evaluate(() => document.documentElement.scrollHeight) // scroll once so lazy photos load
  for (let y = 0; y < H; y += 500) { await p.evaluate(y => scrollTo(0, y), y); await p.waitForTimeout(60) }
  await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(400)
  const rows = await p.evaluate(() => {
    const els = [document.querySelector('header'), ...document.querySelectorAll('main > *'), document.querySelector('footer')].filter(Boolean)
    return els.map(el => ({ id: el.id || el.className.toString().split(' ')[0] || el.tagName, h: Math.round(el.getBoundingClientRect().height) }))
  })
  const total = await p.evaluate(() => document.documentElement.scrollHeight)
  console.log(`\n${name}: total ${total}px`)
  for (const r of rows) console.log(String(r.h).padStart(6), r.id)
  await p.screenshot({ path: `../04-logs/trim/${tag}-${name}.png`, fullPage: true }) // convert to .webp (magick -quality 70) before committing
}
await b.close()
