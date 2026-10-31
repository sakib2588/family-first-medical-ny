import { chromium } from 'playwright'
import fs from 'node:fs'
const axeSrc = fs.readFileSync('node_modules/axe-core/axe.min.js', 'utf8')
const URL = 'http://localhost:4321/'
const b = await chromium.launch()
for (const [name, opts] of [['phone390', { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true }], ['phone358', { viewport: { width: 358, height: 667 }, isMobile: true, hasTouch: true }], ['tablet768', { viewport: { width: 768, height: 1024 } }], ['laptop1024', { viewport: { width: 1024, height: 768 } }], ['desktop1280', { viewport: { width: 1280, height: 800 } }]]) {
  const c = await b.newContext(opts); const p = await c.newPage(); const errs = []
  p.on('console', m => m.type() === 'error' && errs.push(m.text())); p.on('pageerror', e => errs.push(String(e)))
  await p.goto(URL, { waitUntil: 'networkidle' })
  await p.evaluate(axeSrc)
  const r = await p.evaluate(async () => { const x = await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'] } }); return x.violations.map(v => ({ id: v.id, impact: v.impact, n: v.nodes.length, ex: v.nodes[0].html.slice(0, 110) })) })
  const small = await p.evaluate(() => [...document.querySelectorAll('a,button,input,select,summary')].filter(e => e.getClientRects().length).map(e => { const r = e.getBoundingClientRect(); return { t: (e.textContent || e.getAttribute('aria-label') || e.name || '').trim().slice(0, 24), w: Math.round(r.width), h: Math.round(r.height) } }).filter(x => (x.h < 44 || x.w < 44) && x.t !== 'Skip to content'))
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth)
  const weight = await p.evaluate(() => performance.getEntriesByType('resource').reduce((s, e) => s + (e.transferSize || 0), 0))
  console.log(`\n== ${name}: axe violations ${r.length}`, JSON.stringify(r), '\n   small targets:', JSON.stringify(small.slice(0, 8)), '\n   h-overflow px:', overflow, ' resources KB:', Math.round(weight / 1024), ' console errors:', errs.length)
  await c.close()
}
await b.close()
