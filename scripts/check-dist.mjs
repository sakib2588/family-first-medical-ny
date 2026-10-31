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
  // public/_headers sends a strict CSP (script-src 'self', style-src 'self'): inline code would be blocked.
  const rel = page.replace(dist, '')
  for (const m of html.matchAll(/<script\b([^>]*)>/g)) {
    if (!/\bsrc=/.test(m[1]) && !/\btype="application\/(?:ld\+)?json"/.test(m[1])) problems.push(`${rel}: inline <script> (blocked by the CSP)`)
  }
  if (/<style\b/.test(html)) problems.push(`${rel}: inline <style> (blocked by the CSP)`)
  if (/<[a-z][^>]*\sstyle="/.test(html)) problems.push(`${rel}: style="" attribute (blocked by the CSP)`)
  if (/<[a-z][^>]*\son[a-z]+="/.test(html)) problems.push(`${rel}: inline event handler (blocked by the CSP)`)
  for (const m of html.matchAll(/<a\b[^>]*\bhref="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
    const path = m[1]
    const target = path === '/' ? join(dist, 'index.html') : existsSync(join(dist, path, 'index.html')) ? join(dist, path, 'index.html') : join(dist, path)
    if (!existsSync(target)) problems.push(`${page.replace(dist, '')}: dead link ${path}`)
  }
}
const headers = join(dist, '_headers')
const csp = existsSync(headers) ? readFileSync(headers, 'utf8').match(/^\s+Content-Security-Policy:(.*)$/m)?.[1] : undefined
if (!csp) problems.push('_headers: missing, or no Content-Security-Policy')
// The CSP must stay self-only: no 'unsafe-*' keywords, no other hosts, no wildcard, no data:/blob: sources.
else if (/unsafe-|https?:|\*|\bdata:|\bblob:/.test(csp)) problems.push(`_headers: CSP is no longer self-only:${csp}`)
if (problems.length) { console.error([...new Set(problems)].join('\n')); process.exit(1) }
console.log(`check-dist: ${pages.length} pages, no external resources, no dead internal links, no inline code, CSP present`)
