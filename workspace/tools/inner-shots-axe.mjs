// Inner pages: screenshots (motion on, scrolled once) at 390 and 1440, and axe-core violations at 390 and 1280.
// Usage (dev server running): node inner-shots-axe.mjs <out-dir>
import { chromium } from 'playwright'
import fs from 'node:fs'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const axeSrc = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8')
const out = process.argv[2] ?? '.'
fs.mkdirSync(out, { recursive: true })
const pages = ['/doctors', '/doctors/elena-park', '/locations', '/locations/hicksville', '/locations/elmhurst', '/contact', '/legal', '/legal/privacy']
const b = await chromium.launch()
for (const [w, sw] of [[390, 390], [1440, 1280]]) {
  for (const [vw, shot] of (w === sw ? [[w, true]] : [[w, true], [sw, false]])) {
    const ctx = await b.newContext({ viewport: { width: vw, height: 900 }, isMobile: vw < 500, hasTouch: vw < 500 })
    const p = await ctx.newPage()
    for (const path of pages) {
      await p.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' })
      const H = await p.evaluate(() => document.documentElement.scrollHeight)
      for (let y = 0; y < H; y += 400) { await p.evaluate(y => scrollTo(0, y), y); await p.waitForTimeout(60) }
      await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(900)
      if (shot && (vw === 390 || vw === 1440)) await p.screenshot({ path: `${out}/${vw}${path.replace(/\W/g, '_')}.png`, fullPage: true })
      if (vw === 390 || vw === 1280) {
        await p.waitForTimeout(200); await p.evaluate(axeSrc)
        const r = await p.evaluate(() => axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa', 'best-practice'] }))
        console.log(vw, path, 'violations', r.violations.length, r.violations.map(v => `${v.id}(${v.nodes.length}): ${v.nodes[0].target}`).join(' | '))
      }
    }
    await ctx.close()
  }
}
await b.close()
