# PC handover (from the cloud session, 2026-11-01; updated on the PC, end of 2026-11-02)

## 0. Latest state (end of 2026-11-02, PC session; read this first)
**Everything is merged to `main` and live** at https://family-first-medical-ny.rnqbank.workers.dev. Verified: the live CSS fingerprints match a fresh build of `main` (`1e98c54`).
- **Open PRs:** only #25, a stale cloud handoff note from 2026-11-01, deliberately not merged.
- **Revert point:** tag `v-pre-design-tier-2026-11-01`.

### What was built, by PR
| PR | What |
|---|---|
| #33 | Phone page trimmed to the base site's patterns |
| #34 | Design plan: `02-analysis/design-plan-3d-css-2026-11-01.md` (council, plan review, rounds 11-12) |
| #35-#44 | P0 rule fixes, desktop redesigns (Visits, Insurance, trust band, Care by age, Request, FAQ, Inside), full-review fixes, Locations fix |
| #45 | Owner rounds 11-17 (details below) |
| #46 | Inner pages (Doctors, Locations, Contact, legal) in the new style; new `OfficeCard` component |
| #47 | 3D office map. The owner then rejected it: it is removed from the pages, and `src/components/OfficeMap.astro` stays unused (delete it if the owner agrees) |
| #48 | Colourful Services cards: five hues, gentle icon bob |
| #49 | Ring-progress loops on How it works and Insurance; TEST glowing particles behind the doctor panels (keep or remove: ask the owner); footer in the base site's clean column style; centred step line; only a compact ⏸ in the top bar |
| #50 | Competitor research notes |

**#45 in detail (owner rounds 11-17):**
- **Presentation mode** (`practice.demo = false`):
  - no demo or sample words on screen; nothing invented;
  - every photo slot is listed in `03-decisions/photo-map.md`.
- **Three-colour system:** `--c3-base #2e2860`, aqua, gold. Gold appears only on dark sections.
- **Five live three.js scenes**, wide desktop only, run by `src/scripts/live3d.ts`. This is an owner exception: `03-decisions/2026-11-01-live-motion-and-3d-exception.md`.
- **Services section** with filter tabs.
- **Research-backed light/dark seams:** about 3:1 luminance steps, with glass strips inside the edges of the dark bands. Flat, straight edges.

### Owner preferences (follow them)
- **Show a preview before building any new visual idea.** The map was built without one and was rejected.
- **No "AI look":** no gradient icon tiles, glow borders, glass boxes or generic copy.
- **Flat edges.**
- **Polished motion only.**
- **Data visualisations as tables.**
- **Use a council or a research sub-agent for hard calls, and verify their output yourself.**
- **Merge only when the owner says "merge"**, then verify the live link.

### Research and documents
- **Competitor pages and portals (12 sites):** `02-analysis/competitor-pages-and-systems-2026-11-01.md`.
- **Dashboard artifact "Competitor Sites":** https://claude.ai/artifact/HYLPYykK6oNNRufeYcLr43. Tables of real pages per section, with an AIMSS row.
- **Client kickoff questions (Google Doc):** https://docs.google.com/document/d/1KVTlNY1PgXqD-JuZQgaOVRQMByiWJX3cmh_VXxdJ9Uk.
  - Part 5 (Q16-24, with our suggestions) was added: records system and portal, booking, telehealth, bill pay, forms, BAA, app or chat, extra pages, and who sends updates.
  - **The owner has not sent this doc to the client yet.**

### Next (suggested order)
1. **Service pages** (about 10, from `serviceGroups`), plus **New patients** and **Insurance** pages. This is the biggest gap against competitors; AIMSS has 16 real pages, and Northern Virginia Peds has 65.
2. Decide on the doctor-panel particle TEST; delete the unused OfficeMap if the owner agrees.
3. Once the client answers Part 5: a Patient portal link, Pay a bill, video visits.
4. Blocking launch:
   - real photos (photo map);
   - confirmed facts: hours, insurance, credentials, accepting new patients;
   - counsel review of the legal pages;
   - BAA for the form.

## 1. Where things stand
- **Live demo:** https://family-first-medical-ny.rnqbank.workers.dev (Cloudflare Workers static assets, auto-deploys from `main`, public, `noindex`).
- **Main branch:** every PR from this session is merged (#26 to #31). There are no open PRs and no unmerged work.
- **Stack:** Astro + Tailwind 4, static, zero third-party requests. `npm run check` must pass before any PR.
- **Single source of truth:** `src/data/practice.ts` holds offices, hours, doctors and facts. `src/data/legal.ts` holds the draft legal text.

## 2. What this session did (in order)
| PR | What |
|---|---|
| #26 | Hero rebuilt like the base site (serif headline, italic teal accent line, doctors with name cards). Removed the duplicate phone-only "Prefer to call?" block. "Best time to call" chips stack on phone. "Sick today" card goes full width. Photo plan added (`03-decisions/2026-11-01-hero-photo-plan.md`). |
| #27 | Demo sample text in placeholder slots, via the `sample()` helper in `practice.ts`. Every value is tagged `source: 'DEMO SAMPLE, replace'`. |
| #28 | Stock photos in every photo slot. They are Unsplash, stored locally in `public/demo/`, with IDs in `public/demo/CREDITS.txt`. Fixed the phone input `pattern` (it was invalid under the browser's `v` regex flag, so validation was silently skipped). The Hicksville gallery order differs from Elmhurst's. |
| #28 (late commit) | Labelled sample text in all remaining slots, via `sampleDated()` for dated facts. Credentials, ratings and insurance read "Sample: ..." on purpose (red lines). There are now zero `[need:]` and zero `[Photo:]` slots on any page. |
| #29 | Full CSS/JS/motion dissection of familyfirstmedicalny.com (`02-analysis/base-site-css-js-dissection-2026-11-01.md`). Motion layer: one easing `--ease-soft`, scroll reveal with stagger (script in `src/layouts/Base.astro`), hero entrance, button and card lift (`.lift`), frosted header and sticky bar (`.frost`), and a ping on the open-office dot. |
| #30 | Hero doctor cards are equal height on phone. Fact row became animated cards (icon draw-in). The reveal start state is instant, so nothing fades out before it fades in. |
| #31 | Base-site section patterns. Hero: pills, gradient primary plus ghost button, 4 at-a-glance chips. Dark photo **trust band** with glass cards. New **Welcome** section (`src/components/home/Welcome.astro`): photo mosaic plus gradient icon-tile cards. **Doctor cards** with a gradient side panel. A component kit in `global.css` (`btn-primary`, `btn-ghost`, `pill`, `eyebrow`, `card-soft`, `glass`, `tile-*`). An eyebrow label above every Home section heading. |

Measured after #31:
- **Section widths:** every section runs 21 to 369 px on phone and 60 to 1220 px on desktop. There is no horizontal overflow.
- **Section padding:** 68 px top and bottom on phone, 102 px on desktop. The hero and the trust band are tighter on purpose.
- **Page height:** 15,580 px on phone and 10,112 px on desktop. The phone page is far over the 10,000 px target (see the next steps).

## 3. Red lines still in force (do not break)
- **Claims:** no "board-certified", "25+ years", "Open 7 days", "accepting new patients" or "most insurance" as real claims. No ratings and no AggregateRating. The base site has all of these; we deliberately did not copy them.
- **Launch blocker:** the FAQ shows "Accepting new patients: Yes, at both offices (sample)". It is sample data and must be replaced or removed before any real launch.
- **Request form:** contact info only (name, phone, office, best time). It does not send.
- **Hosting and assets:** no external requests (fonts, scripts, maps), no splash screen, no analytics. Keep `noindex`, the demo banner and the DRAFT legal boxes.
- **Pre-launch replacement:** every `DEMO SAMPLE` value in `practice.ts` and every photo in `public/demo/` must be replaced with confirmed, dated client facts and consented photos.

## 4. Future plan: design improvements (owner discussion, 2026-11-01)
The owner wants the site to feel **modern, dynamic and unique** compared with other clinic sites, using **Three.js and CSS**, but not a gimmick (no robots). The owner shared https://github.com/cloudai-x/threejs-skills. It is a Claude Code skill pack that teaches current three.js r186 APIs. On the PC, install it into the project:
```bash
git clone https://github.com/CloudAI-X/threejs-skills.git /tmp/threejs-skills
```
```bash
mkdir -p .claude/skills && cp -r /tmp/threejs-skills/skills/* .claude/skills/
```
Use `threejs-fundamentals`, `-geometry`, `-materials`, `-lighting`, `-shaders` and `-performance`. Skip `-react-three-fiber` (no React here).

### 4.1 First, decision to record
The owner is relaxing the old "CSS-only, no animation library" rule to allow three.js.
- Before building, confirm this in one line.
- Write `03-decisions/2026-11-0X-threejs-allowed.md`.
- Update the "Motion or animation" row in `CLAUDE.md`.

### 4.2 Guardrails so 3D does not conflict with the red lines
- Install `three` from npm and bundle it with Astro. It is self-hosted, so `npm run check` stays green. Check that the CSP in `public/_headers` still allows the bundle (no `eval` needed).
- Lazy-load: dynamic `import('three')` only after load, and only when the section is in view (IntersectionObserver).
- Fallback to a static poster image for:
  - `prefers-reduced-motion`
  - `navigator.connection.saveData`
  - low `deviceMemory` or `hardwareConcurrency`
  - WebGL unavailable
- `setPixelRatio(Math.min(devicePixelRatio, 2))`. Pause with `setAnimationLoop(null)` when the canvas is off screen or the tab is hidden. Dispose geometry and materials.
- At most one 3D scene per page. Canvases are `aria-hidden` and decorative. Every phone number, hour and button stays HTML.
- Measure phone LCP before and after. The target is under 2.5 s (budget in `02-analysis/improvement-plan.md`, rank 6).

### 4.3 Idea list (from the brainstorm)
**3D (three.js):**
- A. **Living glass arch.** The AIMSS arch logo as a frosted glass object (ExtrudeGeometry plus MeshPhysicalMaterial transmission) in the hero, with teal and gold light. It rotates slowly and leans toward the pointer.
- B. **Heartbeat particles.** Gold points form the AIMSS pulse line, a heartbeat wave runs through them, and on scroll they morph into the arch.
- C. **3D two-office map.** A simple extruded Queens and Nassau shape with two glowing pins and a route arc. A pin glows when the office is open, using the same `open` hours from `practice.ts`. No map tiles.
- D. **Care-by-age journey.** The camera moves along a 3D ribbon through four stages (baby, child, teen, adult) as you scroll.
- E. **Shader colour field.** A slow indigo, teal and gold mesh-gradient background behind the hero. It can be raw WebGL, about 2 KB.
- F. **Line-art skyline footer.** A Queens to Long Island skyline in thin lines with gentle parallax.
- G. **3D icon tiles.** The icon tiles become small 3D shapes that spin once on reveal.

**CSS (no library):**
1. **View Transitions.** A doctor photo or office card morphs into its page (Astro `<ClientRouter />` or native cross-document view transitions).
2. **Sticky stacking office cards** on scroll.
3. **Animated gradient borders** (`@property`) that run once on reveal.
4. **Split-word heading reveal.**
5. **Cursor spotlight** on cards (desktop).
6. **Magnetic primary buttons** (desktop).
7. **Services marquee** that pauses on hover.
8. **Section progress rail** (desktop).
9. **Scroll-driven parallax** with `animation-timeline: view()` on the welcome mosaic, and the arch line drawing as you scroll.

### 4.4 Recommended package (proposed; the owner has not picked yet)
1. **A + E**: glass arch over the shader colour field in the hero, with a still poster on weak or reduced-motion devices.
2. **C**: 3D two-office map, which is useful as well as unique.
3. **CSS 1 to 4**: view transitions, stacking office cards, gradient borders, heading reveal.

**Ask the owner** which letters and numbers they want (or "recommended") before building. Then build one piece at a time, mobile first, with a phone screenshot after each (the owner's method in `CLAUDE.md`).

### 4.5 Also pending (do before or alongside the 3D work)
1. **Space-trim pass.** The phone page is 15,580 px (target 10,000). Phone numbers appear in about 4 places, "Sick today" appears in two forms, and the Welcome section overlaps the hero chips. Remove the repeats and tighten the hero on phone. Recommended before the 3D work.
2. **Footer office cards** stretch too tall on desktop.
3. **Desktop request band** still shows "Prefer to call?" (removed on phone only, on purpose).
4. **Inner pages** (Doctors, Locations, Contact, legal) still use the older style. Bring them up to the new kit (`btn-primary`, `card-soft`, `eyebrow`, gradient doctor panel), one page at a time.
5. **Small items:**
   - favicon
   - custom 404 handling
   - a console 404 on every page (a missing asset, probably the favicon)
   - footer raw colours to tokens
   - no-JS fallback for the sticky bar
6. **Code-reviewer agent.** It was not run on #26 to #31. Run `/code-review` on the recent diff early on the PC.
7. **Owner actions still open:**
   - rotate the ngrok token
   - add `.claude/settings.json` from `06-handoffs/suggested-claude-settings.json`

## 5. Handy commands on the PC
```bash
npm install
```
```bash
npm run dev
```
```bash
npm run check
```
```bash
cd workspace/tools && npm install && node qa-pages.mjs
```
`qa-pages.mjs` needs the dev server running. On the PC, Playwright can use its own browser, so the cloud path `/opt/pw-browsers` does not apply.

## 6. Cloud-only notes you can ignore on the PC
- The cloud blocked the live site and familyfirstmedicalny.com, so the base-site study used the saved HTML in `01-research/sites/familyfirstmedicalny/`. On the PC you can open the live site directly.
- Image hosts (`images.unsplash.com`, Canva) were allowed in the cloud environment settings only for this session.
- An AI reception image exists in the owner's Canva (media id MAHZpXlEFGI) if a better hero background is wanted.
