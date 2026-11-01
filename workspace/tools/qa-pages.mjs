// Phone + desktop QA of every page: horizontal overflow, tap targets under 44px, call dialog + Escape.
// Usage: start `npm run dev` in the repo root, then in workspace/tools: node qa-pages.mjs [screenshot-dir]
// Env: QA_BASE_URL (default http://localhost:4321) to test another server; CHROMIUM_PATH to pick a browser.
import { existsSync, readdirSync } from 'node:fs'
import { chromium } from 'playwright'
const S = process.argv[2] ?? '.'
const BASE = (process.env.QA_BASE_URL ?? 'http://localhost:4321').replace(/\/$/, '')
// Cloud containers block Playwright's browser download but ship a Chromium in /opt/pw-browsers.
// Use Playwright's own browser when it is installed, otherwise the newest pre-installed one.
function findChromium() {
  if (process.env.CHROMIUM_PATH) return process.env.CHROMIUM_PATH
  if (existsSync(chromium.executablePath())) return undefined
  const root = '/opt/pw-browsers'
  if (!existsSync(root)) return undefined
  const dirs = readdirSync(root).filter(d => /^chromium-\d+$/.test(d)).sort((a, z) => Number(z.slice(9)) - Number(a.slice(9)))
  for (const d of dirs) for (const sub of ['chrome-linux64/chrome', 'chrome-linux/chrome']) if (existsSync(`${root}/${d}/${sub}`)) return `${root}/${d}/${sub}`
  return undefined
}
const executablePath = findChromium()
if (executablePath) console.log(`browser: ${executablePath}`)
const b = await chromium.launch({ executablePath }); const out = []
for (const [w, h] of [[390, 844], [1280, 800]]) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 }); const p = await ctx.newPage()
  const errs = []; p.on('console', m => m.type() === 'error' && errs.push(m.text())); p.on('pageerror', e => errs.push(String(e)))
  for (const path of ['/', '/doctors', '/doctors/elena-park', '/locations', '/locations/hicksville', '/contact', '/legal', '/legal/privacy', '/legal/billing', '/nope']) {
    await p.goto(BASE + path, { waitUntil: 'networkidle' })
    const o = await p.evaluate(() => ({ over: document.documentElement.scrollWidth - innerWidth, small: [...document.querySelectorAll('a,button,input,summary')].filter(e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && r.height < 43.5 && !(e.closest('#site-footer nav[aria-label] ul') && r.height >= 38) && getComputedStyle(e).display !== 'inline' && !e.closest('.sr-only') && !e.className.toString().includes('sr-only') }).map(e => (e.textContent || e.name || '').trim().slice(0, 25)).slice(0, 4) }))
    out.push(`${w} ${path} overflow=${o.over} small=${JSON.stringify(o.small)}`)
    if (w === 390 && ['/locations', '/legal/privacy', '/doctors/elena-park', '/'].includes(path)) await p.screenshot({ path: `${S}/shot-${path.replace(/\W/g, '_')}.png`, fullPage: path !== '/' })
  }
  // call dialog
  await p.goto(BASE + '/doctors', { waitUntil: 'networkidle' })
  await p.locator('[data-call]:visible').first().click(); const open1 = await p.evaluate(() => document.getElementById('call-dialog').open)
  await p.keyboard.press('Escape'); const open2 = await p.evaluate(() => document.getElementById('call-dialog').open)
  out.push(`${w} dialog opens=${open1} afterEscape=${open2} errors=${JSON.stringify(errs)}`)
  await ctx.close()
}
console.log(out.join('\n')); await b.close()
