// usage: node shot.mjs <url> <out.png> [phone|desktop] [fullpage]
import { chromium } from 'playwright'
const [url, out, mode = 'phone', full] = process.argv.slice(2)
const ctxOpts = mode === 'phone'
  ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }
  : { viewport: { width: 1280, height: 800 } }
const b = await chromium.launch(); const c = await b.newContext(ctxOpts); const p = await c.newPage()
await p.goto(url, { waitUntil: 'networkidle' }); await p.waitForTimeout(600)
await p.screenshot({ path: out, fullPage: full === 'full' }); await b.close(); console.log('ok', out)
