---
title: Astro + Cloudflare build spec (from the course skill)
type: knowledge
status: draft
updated: 2026-10-24
---

# Astro + Cloudflare build spec

Concrete settings from the course's `new-site` skill, `prompt.txt` and lessons 5-15 (B12 F08, F12-F13, F19-F22, F26). The course skill's version pins are early-2026 and out of date: as of 2026-10-24 the current Astro is **7.4.2, which needs Node 22.23.4 or newer** (use Node 24 LTS, not the Current line; W:R5 8.1). **Verify against current docs before installing.** Process is in [[vibe-coding-workflow]]; our stack choice is [[tech-stack-decision]].

## Scaffold

- `npx create-astro@latest .astro-scaffold --template minimal --no-install --no-git --yes --skip-houston` in a temp folder, then move files up (a non-empty root confuses the CLI). Node 22.23.4+ (Node 24 LTS recommended).
- Deps: `@tailwindcss/vite ^4`, `tailwindcss ^4`, `wrangler ^4`. The course also adds `@astrojs/cloudflare ^13`; **a fully static site does not need that adapter** (Astro docs, W:R5 8.2): add it only for an on-demand route or form handler that must run as a Worker. React only if an island needs it.
- **Astro 7 can break generated templates** (W:R5 8.1): stricter compiler (unclosed tags and invalid nesting now error), `compressHTML` strips spaces between inline elements (check `<span>`/`<em>` spacing or set `compressHTML: true`), Vite 8, a new default Markdown processor. Tell Claude the Astro version in `CLAUDE.md` and run `astro check` plus a build after every batch.
- `astro.config.mjs`: `output: 'static'`, Tailwind via `vite.plugins`, no `@astrojs/tailwind`. (With the adapter, the course also sets `imageService: 'compile'`; static builds optimize `<Image>` at build time without it.)
- `wrangler.jsonc` for a static site: `name`, `compatibility_date`, `assets.directory: "./dist"`. Deploy with `npx astro build && npx wrangler deploy`; preview with `npx wrangler dev`. The adapter variant in the course uses `./dist/client`, flags `nodejs_compat` and `global_fetch_strictly_public` (needed for `/_image`), binding `ASSETS`, and `public/.assetsignore` listing `_worker.js` and `_routes.json`.

## Styles and tokens

- `global.css`: font `@import`s first, then `@import "tailwindcss"`, then theme and base.
- 7 colour tokens per palette: primary, secondary, accent, bg, surface, text, muted. The course ends on `@theme static` with brand-named tokens because it ships one palette. **Our template needs per-business and per-trade palettes from `business.yaml`, so keep plain `@theme` (CSS variables) and override per site.** Either way: no hard-coded hex or font names in components.
- Fonts self-hosted with `@fontsource-variable/*`. Never a Google Fonts `<link>` (adds 1-2 s to first paint). Remove unused font packages after the design is chosen.
- A `<style>` block that uses `@apply` needs `@reference "../../styles/global.css"`; prefer utility classes in markup.

## Images and performance rules

- Content images in `src/assets/images/`, rendered with `<Image>`: explicit `width`/`height`, `quality={80}`, `widths` (1x, 2x) and `sizes` on responsive images.
- Hero: `loading="eager" fetchpriority="high" decoding="sync"`. All else lazy. Descriptive alt on every image.
- `public/` is for `favicon.ico`, logo, `robots.txt`, OG images only. Third-party URLs: plain `<img>` with width/height.
- No `will-change` in base CSS. `content-visibility: auto` + `contain-intrinsic-size: auto 600px` only on heavy below-fold sections (not hero, header, sticky, footer, anchor targets).
- No external render-blocking CSS. After `npm run build`: `lint:fix`, `lint` must be clean.
- Compress photos before use; the demo's multi-MB originals were visibly slow.
- R2 is optional. For a 10-30 image trade site, local `src/assets` is simpler. If R2 is used: custom domain for production (`r2.dev` is dev-only, about 1,000 req/min), bucket-scoped API token, never commit keys.

## Pages and content

- Content collection per repeatable type (services, areas, later testimonials): template page + markdown files; frontmatter `status` field; document it in `docs/` and link from `CLAUDE.md`.
- `/design-system` page must be `noindex`.

## SEO integrations (all free)

Set the live `site` URL first. Then `@astrojs/sitemap` (`/sitemap-index.xml`), `astro-robots-txt`, `astro-seo` (titles, canonicals, OG, Twitter, noindex prop), `astro-seo-schema` (LocalBusiness, WebSite, Service, FAQ). Check the sitemap lists every service page; the demo's did not at first. Rules for what goes in titles and schema stay in [[on-page-seo-and-schema]]; also check robots for accidental AI-bot blocks.

## Forms

Webhook trigger (POST) in n8n; Claude wires the form with a method that works on Workers (no Node-style server route). Test with the test URL, then **swap to the production URL** or it silently fails live. Our additions, not in the course: the webhook URL sits in client code, so add a honeypot and rate limit or Turnstile, and show the phone number when submission fails ([[call-tracking-and-lead-routing]]).

## Deploy and domain

Cloudflare Workers + GitHub: push to `main` auto-deploys, other branches get preview URLs. Custom domain via Worker settings (DNS planned automatically). **A Workers custom domain needs the domain on Cloudflare DNS**; if a client will not move DNS, host that site on Pages (W:R5 8.2). Free plan: static asset requests are free and unlimited; the 100,000-per-day limit and 10 ms CPU apply to Worker invocations (form or lead-routing code); 3,000 build minutes a month. Turnstile Free: 20 widgets, 10 hostnames each. Then Images > Transformations, Speed > Polish, caching level Standard. Free-tier numbers in the course are in [[unverified-claims]].

Related: [[pre-launch-checklist]] · [[page-architecture]]
