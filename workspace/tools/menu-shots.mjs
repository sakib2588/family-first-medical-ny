// Screenshots the phone menu drawer at several sizes. Usage: node menu-shots.mjs <outDir> [baseUrl]
import { chromium } from 'playwright'
const out = process.argv[2], base = process.argv[3] || 'http://localhost:4330'
const b = await chromium.launch(process.env.CHROME ? { executablePath: process.env.CHROME } : {})
for (const [w, h] of [[320, 568], [360, 640], [390, 844], [430, 932]]) {
  const p = await b.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 })
  await p.goto(base + '/'); await p.waitForTimeout(2800)
  await p.click('#menu-btn'); await p.waitForTimeout(1200)
  const m = await p.evaluate(() => { const d = document.querySelector('dialog.drawer'); return { sh: d.scrollHeight, ch: d.clientHeight, ow: document.documentElement.scrollWidth } })
  console.log(w, h, JSON.stringify(m))
  await p.screenshot({ path: `${out}/menu-${w}x${h}.png` }); await p.close()
}
await b.close()
