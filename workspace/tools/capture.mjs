// usage: node capture.mjs <url> <slug> [outRoot]
import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'

const [url, slug, root = '../01-research/sites'] = process.argv.slice(2)
if (!url || !slug) throw new Error('usage: capture.mjs <url> <slug>')
const out = path.resolve(root, slug)
for (const d of ['phone', 'desktop', 'html']) fs.mkdirSync(path.join(out, d), { recursive: true })

const VIEWS = {
  phone: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1' },
  desktop: { viewport: { width: 1280, height: 800 } },
}
const browser = await chromium.launch()
const meta = { url, slug, capturedAt: new Date().toISOString(), views: {} }
for (const [name, opts] of Object.entries(VIEWS)) {
  const ctx = await browser.newContext(opts)
  const page = await ctx.newPage()
  const errors = []
  page.on('console', m => m.type() === 'error' && errors.push(m.text().slice(0, 200)))
  const t0 = Date.now()
  let status = null
  try {
    const r = await page.goto(url, { waitUntil: process.env.WAIT || 'networkidle', timeout: 60000 })
    status = r?.status()
  } catch (e) { meta.views[name] = { error: String(e).slice(0, 200) }; await ctx.close(); continue }
  await page.waitForTimeout(Number(process.env.SETTLE||1500))
  await page.screenshot({ path: path.join(out, name, '1-fold.png') })
  await page.screenshot({ path: path.join(out, name, '2-full.png'), fullPage: true })
  const info = await page.evaluate(() => {
    const txt = el => (el?.innerText || '').trim().replace(/\s+/g, ' ')
    const links = [...document.querySelectorAll('a[href]')].map(a => ({ text: txt(a).slice(0, 80), href: a.href, inFooter: !!a.closest('footer') }))
    const footer = document.querySelector('footer')
    return {
      title: document.title,
      h1: [...document.querySelectorAll('h1')].map(txt),
      h2: [...document.querySelectorAll('h2')].map(txt).slice(0, 40),
      links,
      footerText: txt(footer).slice(0, 4000),
      telLinks: links.filter(l => l.href.startsWith('tel:')),
      forms: [...document.forms].map(f => ({ action: f.action, fields: [...f.elements].map(e => `${e.tagName.toLowerCase()}:${e.type || ''}:${e.name || e.id || ''}`) })),
      imgNoAlt: [...document.images].filter(i => !i.alt).length,
      images: document.images.length,
      scrollHeight: document.documentElement.scrollHeight,
      jsonld: [...document.querySelectorAll('script[type="application/ld+json"]')].map(s => s.textContent.slice(0, 1500)),
      hasViewportMeta: !!document.querySelector('meta[name=viewport]'),
      lang: document.documentElement.lang,
      fixedEls: [...document.querySelectorAll('*')].filter(e => ['fixed', 'sticky'].includes(getComputedStyle(e).position)).map(e => e.tagName + '.' + String(e.className).slice(0, 40)).slice(0, 10),
    }
  })
  fs.writeFileSync(path.join(out, 'html', `${name}.html`), await page.content())
  meta.views[name] = { status, loadMs: Date.now() - t0, consoleErrors: errors.slice(0, 10), ...info }
  await ctx.close()
}
await browser.close()
fs.writeFileSync(path.join(out, 'meta.json'), JSON.stringify(meta, null, 2))
console.log('ok', out)
