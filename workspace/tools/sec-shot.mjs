// node sec-shot.mjs <id> <out> [width] : screenshot one home section with a fixed clock (Tue 10 AM NY = both open) unless CLOSED=1
import { chromium } from 'playwright'
const [id, out, w = '1280'] = process.argv.slice(2)
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +w, height: 900 } })
await p.clock.setFixedTime(new Date(process.env.CLOSED ? '2026-11-03T03:00:00Z' : process.env.ONE ? '2026-11-08T15:00:00Z' : '2026-11-03T15:00:00Z'))
await p.goto('http://localhost:4321/'); await p.locator('#' + id).scrollIntoViewIfNeeded(); await p.waitForTimeout(1500)
await p.locator('#' + id).screenshot({ path: out, animations: 'disabled' }); await b.close()
