// Lists every button-like element with its real colours and contrast. Usage: QA_BASE_URL=http://localhost:4330 node button-audit.mjs [phone|desktop]
import { chromium } from 'playwright'
const BASE = process.env.QA_BASE_URL ?? 'http://localhost:4321'
const [w, h] = process.argv[2] === 'desktop' ? [1440, 900] : [390, 844]
const pages = ['/', '/doctors', '/doctors/elena-park', '/locations', '/locations/hicksville', '/contact', '/legal/privacy', '/nope']
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: w, height: h } })
const rows = new Map()
for (const path of pages) {
  await p.goto(BASE + path, { waitUntil: 'networkidle' }); await p.waitForTimeout(2800)
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise(r => setTimeout(r, 60)) } scrollTo(0, 0) })
  await p.waitForTimeout(600)
  const found = await p.evaluate(() => {
    const parse = c => { const m = c.match(/[\d.]+/g)?.map(Number) ?? [0,0,0,0]; return { r: m[0], g: m[1], b: m[2], a: m[3] ?? 1 } }
    const lum = ({ r, g, b }) => { const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4 }; return .2126 * f(r) + .7152 * f(g) + .0722 * f(b) }
    const ratio = (x, y) => { const a = lum(x), c = lum(y); return (Math.max(a, c) + .05) / (Math.min(a, c) + .05) }
    const over = (top, under) => ({ r: top.r * top.a + under.r * (1 - top.a), g: top.g * top.a + under.g * (1 - top.a), b: top.b * top.a + under.b * (1 - top.a), a: 1 })
    const bgOf = el => { let stack = []; for (let n = el; n; n = n.parentElement) { const cs = getComputedStyle(n); const c = parse(cs.backgroundColor); if (c.a > 0) stack.push(c); if (c.a === 1) break; if (cs.backgroundImage !== 'none' && n !== el) break } let base = { r: 255, g: 255, b: 255, a: 1 }; for (const c of stack.reverse()) base = over(c, base); return base }
    const out = []
    const sel = 'a.btn, button.btn, .btn, .visit-cta, .office-call, .chip-btn, button:not(.sr-only), [role=button], .filter-pill, .tab'
    for (const el of document.querySelectorAll(sel)) {
      const r = el.getBoundingClientRect(); if (r.width < 8 || r.height < 8) continue
      const cs = getComputedStyle(el); if (cs.visibility === 'hidden' || cs.display === 'none') continue
      const fg = parse(cs.color); let own = parse(cs.backgroundColor); const grad = cs.backgroundImage.includes('gradient')
      const parentBg = bgOf(el.parentElement)
      let fill = own.a > 0 ? over(own, parentBg) : (grad ? null : null)
      if (grad) { const m = cs.backgroundImage.match(/rgba?\([^)]*\)/g); if (m) fill = parse(m[m.length - 1]) ; fill = { ...fill, a: 1 } }
      const text = (el.textContent || el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 34)
      const bw = parseFloat(cs.borderTopWidth) || 0; const border = bw > 0 ? parse(cs.borderTopColor) : null
      const surface = fill ?? parentBg
      out.push({ text, cls: el.className.toString().split(' ').filter(c => /btn|visit|office|chip|pill|tab/.test(c)).join('.') || el.tagName, textContrast: +ratio(fg, surface).toFixed(2), fillVsPage: fill ? +ratio(fill, parentBg).toFixed(2) : null, edge: border ? +ratio(over(border, parentBg), parentBg).toFixed(2) : null, fg: `rgb(${fg.r|0},${fg.g|0},${fg.b|0})`, fill: fill ? `rgb(${fill.r|0},${fill.g|0},${fill.b|0})` : 'none', page: location.pathname, size: Math.round(r.height) })
    }
    return out
  })
  for (const f of found) { const k = f.cls + '|' + f.text + '|' + f.fg + '|' + f.fill; if (!rows.has(k)) rows.set(k, { ...f, pages: [f.page] }); else rows.get(k).pages.push(f.page) }
}
const list = [...rows.values()].sort((a, c) => a.textContrast - c.textContrast)
for (const r of list) {
  const flags = []
  if (r.textContrast < 4.5) flags.push('TEXT<4.5')
  if (r.fill !== 'none' && r.fillVsPage < 3 && !r.edge) flags.push('SHAPE<3 no edge')
  if (r.edge !== null && r.edge < 3 && r.fillVsPage !== null && r.fillVsPage < 3) flags.push('EDGE<3')
  console.log(`${flags.join(',').padEnd(18)} txt ${String(r.textContrast).padEnd(5)} fillVsPage ${String(r.fillVsPage).padEnd(5)} edge ${String(r.edge).padEnd(5)} ${r.fg} on ${r.fill} | ${r.cls} | "${r.text}" | ${r.pages.length}p`)
}
await b.close()
