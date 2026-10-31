# AIMSS Family Health: home page design demo

Design demo of a family medicine and pediatrics practice website (home page only), built for AIMSS. It improves on the structure of an existing reference site and uses the AIMSS brand colors.

**Status:** demo. All content is sample content, all photos are stand-in photos (see `public/demo/CREDITS.txt`), the request form does not send anything, and the legal pages are placeholders pending counsel. Nothing here is a live site.

## Stack
Astro 7 + Tailwind CSS 4, static output, no third-party scripts. Node 24 LTS (see `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Design
- Mobile first (390 px), then desktop (1280 px); checked at 358, 390, 768, 1024 and 1280 px.
- Tokens live in `src/styles/global.css`. Brand palette from aimssfoundation.org: indigo, teal, gold, cream, lavender. Brand teal fails AA with white text (4.18:1), so buttons use a deeper teal (5.97:1).
- One shape device (the arch), two typefaces (Fraunces, Figtree), one filled action per screen, sticky Call + Request bar on phones.
- Accessibility: WCAG 2.2 AA targets, 44 px tap targets, visible focus, skip link, no horizontal overflow, 0 axe violations at the five widths above.

## Structure
`src/components/` header and sticky bar; `src/components/home/` one component per section; `src/pages/index.astro` assembles the page.

Research notes, decisions and capture scripts are in `workspace/` (text only; screenshots and raw research logs are kept off-repo). In `workspace/tools`, run `npm install` first.
