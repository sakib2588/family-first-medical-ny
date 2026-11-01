// Dissect familyfirstmedicalny.com section by section (phone + desktop): height, padding, columns, cards, images, toggles.
// Usage: node dissect-base.mjs [url]   Writes ../02-analysis/base-phone-dissection.json and full-page shots to ../04-logs/trim/
import { chromium } from 'playwright'
import fs from 'node:fs'
const url = process.argv[2] ?? 'https://www.familyfirstmedicalny.com/'
const views = { phone: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }, desktop: { viewport: { width: 1280, height: 800 } } }
const out = {}
const b = await chromium.launch()
for (const [name, opts] of Object.entries(views)) {
  const p = await (await b.newContext(opts)).newPage()
  await p.goto(url, { waitUntil: 'networkidle', timeout: 60000 })
  await p.waitForTimeout(4500) // intro splash
  const H = await p.evaluate(() => document.documentElement.scrollHeight)
  for (let y = 0; y < H; y += 400) { await p.evaluate(y => scrollTo(0, y), y); await p.waitForTimeout(80) }
  await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(600)
  out[name] = await p.evaluate(() => {
    const body = document.body
    const blocks = [...body.querySelectorAll('body > *, main > *')].filter(el => {
      const r = el.getBoundingClientRect(); const cs = getComputedStyle(el)
      return r.height > 20 && cs.position !== 'fixed' && !['SCRIPT', 'STYLE', 'MAIN'].includes(el.tagName)
    })
    return {
      total: document.documentElement.scrollHeight,
      sections: blocks.map(el => {
        const cs = getComputedStyle(el)
        const grids = [...el.querySelectorAll('*')].filter(n => getComputedStyle(n).display.includes('grid')).slice(0, 4).map(n => `${n.className.toString().split(' ')[0]}:${getComputedStyle(n).gridTemplateColumns.split(' ').length}col`)
        return {
          tag: el.tagName.toLowerCase(), id: el.id, cls: el.className.toString().slice(0, 40),
          h: Math.round(el.getBoundingClientRect().height),
          pad: `${cs.paddingTop}/${cs.paddingBottom}`,
          heading: (el.querySelector('h1,h2,h3')?.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 60),
          imgs: el.querySelectorAll('img').length, links: el.querySelectorAll('a').length,
          details: el.querySelectorAll('details,[aria-expanded]').length,
          tels: el.querySelectorAll('a[href^="tel:"]').length,
          grids,
          text: (el.innerText || '').replace(/\s+/g, ' ').slice(0, 220),
        }
      }),
    }
  })
  await p.screenshot({ path: `../04-logs/trim/base-${name}.png`, fullPage: true })
  console.log(`\n${name}: total ${out[name].total}`)
  for (const s of out[name].sections) console.log(String(s.h).padStart(6), s.pad.padEnd(12), `${s.tag}#${s.id}.${s.cls}`.slice(0, 36).padEnd(37), `img${s.imgs} tel${s.tels} tog${s.details}`, '|', s.heading)
}
fs.writeFileSync('../02-analysis/base-phone-dissection.json', JSON.stringify(out, null, 1))
await b.close()
