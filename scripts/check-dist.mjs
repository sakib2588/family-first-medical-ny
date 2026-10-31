// Fails if any built page loads something from another host, or a nav/legal link points nowhere.
// Run after `npm run build`. Zero third-party requests is a project rule (medical site: no trackers).
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
const dist = fileURLToPath(new URL('../dist/', import.meta.url))
const pages = []
const walk = d => { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : f.endsWith('.html') && pages.push(p) } }
walk(dist)
const problems = []
for (const page of pages) {
  const html = readFileSync(page, 'utf8')
  for (const m of html.matchAll(/<(?:script|link|img|iframe|source)\b[^>]*?\b(?:src|href)="(https?:)?\/\/([^"/]+)[^"]*"[^>]*>/g)) {
    const tag = m[0]
    if (/^<a\b/.test(tag)) continue
    if (/<link\b[^>]*rel="(?:canonical|alternate)"/.test(tag)) continue
    problems.push(`${page.replace(dist, '')}: external resource from ${m[2]}`)
  }
  for (const m of html.matchAll(/<a\b[^>]*\bhref="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
    const path = m[1]
    const target = path === '/' ? join(dist, 'index.html') : existsSync(join(dist, path, 'index.html')) ? join(dist, path, 'index.html') : join(dist, path)
    if (!existsSync(target)) problems.push(`${page.replace(dist, '')}: dead link ${path}`)
  }
}
if (problems.length) { console.error([...new Set(problems)].join('\n')); process.exit(1) }
console.log(`check-dist: ${pages.length} pages, no external resources, no dead internal links`)
