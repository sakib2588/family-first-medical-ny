// Phone + desktop QA of every page: horizontal overflow, tap targets under 44px, call dialog + Escape.
// Usage: start `npm run dev` in the repo root, then in workspace/tools: node qa-pages.mjs [screenshot-dir]
import { chromium } from 'playwright'
const S = process.argv[2] ?? '.'
const b = await chromium.launch(); const out = []
for (const [w, h] of [[390, 844], [1280, 800]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 }); const p = await ctx.newPage()
  const errs = []; p.on('console', m => m.type() === 'error' && errs.push(m.text())); p.on('pageerror', e => errs.push(String(e)))
  for (const path of ['/', '/doctors', '/doctors/elena-park', '/locations', '/locations/hicksville', '/contact', '/legal', '/legal/privacy', '/legal/billing', '/nope']) {
    await p.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' })
    const o = await p.evaluate(() => ({ over: document.documentElement.scrollWidth - innerWidth, small: [...document.querySelectorAll('a,button,input,summary')].filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && r.height < 43.5 && getComputedStyle(e).display !== 'inline' && !e.closest('.sr-only') && !e.className.toString().includes('sr-only') }).map(e => (e.textContent || e.name || '').trim().slice(0, 25)).slice(0, 4) }))
    out.push(`${w} ${path} overflow=${o.over} small=${JSON.stringify(o.small)}`)
    if (w === 390 && ['/locations', '/legal/privacy', '/doctors/elena-park', '/'].includes(path)) await p.screenshot({ path: `${S}/shot-${path.replace(/\W/g, '_')}.png`, fullPage: path !== '/' })
  }
  // call dialog
  await p.goto('http://localhost:4321/doctors', { waitUntil: 'networkidle' })
  await p.click('header [data-call]'); const open1 = await p.evaluate(() => document.getElementById('call-dialog').open)
  await p.keyboard.press('Escape'); const open2 = await p.evaluate(() => document.getElementById('call-dialog').open)
  out.push(`${w} dialog opens=${open1} afterEscape=${open2} errors=${JSON.stringify(errs)}`)
  await ctx.close()
}
console.log(out.join('\n')); await b.close()
