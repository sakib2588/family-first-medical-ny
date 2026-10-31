// usage: node legal_render.mjs <slug> <name> <url>  -> ../01-research/legal/<slug>/raw/<name>.rendered.html + .txt (one normal page load, no evasion)
import { chromium } from 'playwright'
import fs from 'node:fs'
const [slug, name, url] = process.argv.slice(2)
const dir = `../01-research/legal/${slug}/raw`; fs.mkdirSync(dir, { recursive: true })
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1280, height: 900 } })
const r = await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 }).catch(e => ({ status: () => 'ERR ' + e.message.slice(0, 80) }))
await p.waitForTimeout(4000)
const st = r.status(); const txt = await p.evaluate(() => (document.querySelector('main')||document.body).innerText)
fs.writeFileSync(`${dir}/${name}.rendered.html`, await p.content()); fs.writeFileSync(`${dir}/${name}.rendered.txt`, txt)
console.log(slug, name, st, txt.split(/\s+/).length, 'words', p.url()); await b.close()
