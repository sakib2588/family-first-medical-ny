// usage: node style-probe.mjs  -- prints computed type/colour/button styles for the premium benchmark set
import { chromium } from 'playwright'
const sites = {cassia:'https://cassiaoptimalhealth.com/',littleotter:'https://www.littleotterhealth.com/',grandstreet:'https://grandstreetdental.com/',tejomed:'https://tejomed.com/',bluebird:'https://www.bluebirdkids.com/',cityblock:'https://www.cityblock.com/',rock:'https://rockpediatricdentistry.com/',camp:'https://camplittletooth.com/',oral:'https://www.oraldentalstudio.com/',sfpd:'https://www.sfpediatricdentistry.com/'}
const b = await chromium.launch()
for (const [k, u] of Object.entries(sites)) {
  const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage()
  try {
    await p.goto(u, { waitUntil: 'domcontentloaded', timeout: 45000 }); await p.waitForTimeout(4000)
    const r = await p.evaluate(() => {
      const cs = e => (e ? getComputedStyle(e) : null)
      const h = document.querySelector('h1'), body = document.body
      const btn = [...document.querySelectorAll('a,button')].find(a => { const s = getComputedStyle(a); return s.backgroundColor !== 'rgba(0, 0, 0, 0)' && a.offsetWidth > 80 && a.offsetHeight > 28 && a.offsetHeight < 80 })
      const hs = cs(h), bs = cs(body), bt = cs(btn)
      const bgs = {}
      ;[...document.querySelectorAll('section,header,footer,div')].slice(0, 400).forEach(e => { const c = getComputedStyle(e).backgroundColor; if (c !== 'rgba(0, 0, 0, 0)') bgs[c] = (bgs[c] || 0) + e.offsetWidth * e.offsetHeight })
      const top = Object.entries(bgs).sort((a, b) => b[1] - a[1]).slice(0, 4).map(x => x[0])
      const sh = [...document.querySelectorAll('*')].slice(0, 600).map(e => getComputedStyle(e).boxShadow).filter(s => s !== 'none')
      return { h1: hs && [hs.fontFamily.split(',')[0], hs.fontSize, hs.fontWeight, hs.color, hs.letterSpacing, hs.lineHeight], body: [bs.fontFamily.split(',')[0], bs.fontSize, bs.color, bs.backgroundColor], btn: bt && [btn.innerText.trim().slice(0, 25), bt.backgroundColor, bt.color, bt.borderRadius, bt.textTransform, bt.fontSize, bt.letterSpacing], bgTop: top, shadows: sh.length, shadowEx: sh[0] || '' }
    })
    console.log(k, JSON.stringify(r))
  } catch (e) { console.log(k, 'ERR', String(e).slice(0, 80)) }
  await p.context().close()
}
await b.close()
