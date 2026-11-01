# Design plan: modern and dynamic with three.js and CSS, without breaking the rulebook (2026-11-01)

Status: **PLAN, reviewed (APPROVE WITH CHANGES, all applied: section 9), desktop tier decided by council (4.7); waiting for the owner's picks** (section 8). Nothing here is built yet.
Inputs: owner brief (cloud chat, `06-handoffs/PC-HANDOVER.md` section 4), the threejs-skills pack (https://github.com/cloudai-x/threejs-skills, read on the PC 2026-11-01), the rulebook (`_site1-rulebook`, U14 motion, U15 components, U16 accessibility, design-rules B1 to B6), the base-site dissection (`base-site-css-js-dissection-2026-11-01.md`, `base-phone-dissection.json`) and two owner screenshots of the desktop Visits and Insurance sections.

Owner brief in one line: *"Make it more modern and dynamic with three.js and CSS. No robots. Something unique that makes us better than other clinic sites, with no conflict with this site's rules."*

## 1. The rules that shape the plan (checked in the rulebook, not from memory)
| Rule | What it says | What it means here |
|---|---|---|
| U14.11 / B6 | WebGL, canvas scenes and smooth-scroll libraries stay off task pages; only on a **showcase page the owner approved in writing**. | No live three.js on Home, Doctors, Locations or Contact. Live 3D goes on one showcase page. |
| U14.14 | A showcase still meets the phone budget, loads the scene after the main content, and shows a still image without WebGL or with reduced motion. | Poster image first, scene lazy-loaded, fallbacks. |
| U14.8 / WCAG 2.2.2 | Anything that starts by itself and runs more than 5 s needs a pause control. | Ambient motion either stops within 5 s or gets one pause button. |
| U14.9 | Never animate the H1, the primary action or the LCP element; reveal targets stay visible without JS. | Word reveals on H2 only; the hero headline and buttons stay still. |
| U14.10 / B5 | One signature motion moment per page. | Home's signature is already the Care-by-age line; new effects are small reveals, not a second signature. |
| U14.12 | CSS first; a JS library only when CSS cannot do it (3D is a valid reason, written down). | three.js only for true 3D, and only on the showcase or at build time. |
| U14.17 | No pointer-only decoration (cursor followers) on task pages. | Magnetic buttons and cursor spotlight are out on task pages. |
| B3 / U14.21 / J3 | No carousel or marquee. | The services marquee is out. |
| U14.3 / U14.4 | Reduced motion removes movement (not just slows it); scripts check `matchMedia` before starting. | Every effect has a still state. |
| improvement-plan rank 6 | Phone LCP <= 2.5 s, first load <= 1 MB, hero <= 120 KB. | See the measurement below. |

**Measured on the PC (three r187, esbuild, minified):** the smallest real scene is **141 KB gzip** (glass arch: renderer, extruded shape, physical material, two lights) and a bare shader background is **130 KB gzip**. Either one is bigger than the whole hero budget. So three.js never goes into a page's first load: it is either lazy-loaded on the showcase page or used **at build time** to render still images.

## 2. The approach in one picture
Three tiers, so we get a unique 3D look everywhere without breaking a rule:

| Tier | Where | Tech | Weight on a phone |
|---|---|---|---|
| **1. Modern CSS motion** | Every page | CSS only (`@property`, scroll timelines in `@supports`, view transitions, CSS 3D transforms) | ~0 KB JS |
| **2. 3D art rendered at build time** | Home, Locations, Doctors | three.js runs on our machine (`workspace/tools/render-3d.mjs` in headless Chromium) and saves WebP/AVIF stills into `public/art/`. Live data (open/closed) sits on top as HTML. | Image bytes only (target <= 60 KB each), no 3D code |
| **3. Live 3D showcase** | One new page, e.g. `/our-practice` ("Explore our practice") | three.js lazy-loaded after content, poster first, pause button, fallbacks | ~140 KB gzip, only for people who open that page |

Tier 2 is the unique part nobody else in this space does: the site *looks* 3D (a glass AIMSS arch and a 3D two-office map) yet loads like a plain page, and the same 3D models drive the live showcase.

## 3. Idea list with a verdict for each
### Tier 1: modern CSS (task pages; allowed)
| # | Idea | What it looks like | Rule check |
|---|---|---|---|
| C1 | **Page morph** (cross-document View Transitions) | A doctor photo or office card grows into its page. | OK: orientation job (U14.1). Native CSS, no JS; browsers without support just navigate. |
| ~~C2~~ | ~~Stacking office cards~~ | | **Dropped (plan review):** stacked cards cover the earlier cards' Call links (WCAG 2.4.11, U16.5). |
| C3 | **Border light** (rebuilt) | A soft light passes once along the form card's edge when it appears. Job: draws the eye to the one form (U14.1). | Only as `transform`/`opacity` on a pseudo-element (U14.13), not an `@property` angle. Request card only. |
| ~~C4~~ | ~~Heading rise~~ | | **Dropped:** `Base.astro` already reveals every H2; a second effect has no job (U14.1). |
| C5 | **Heartbeat divider** *(new)* | The AIMSS pulse line appears once between two sections. Job: brand orientation. | Rebuilt as an `opacity`/`transform` (clip by a moving mask) instead of `stroke-dashoffset` (U14.13). Optional. |
| ~~C6~~ | ~~CSS 3D icon tiles~~ | | **Dropped:** no job (U14.1); the tiles already pop on reveal. |
| ~~C7~~ | ~~Colour drift~~ | | **Dropped:** starts on its own (B5) and animates a gradient (U14.13). The showcase's S2 does this job. |
| C8 | Section progress rail | A slim rail on desktop shows where you are on the page. | OK, low value. Optional. |
| C9 | Scroll-linked arch line | The arch line draws as you scroll. | Desktop only, `@supports`, below the fold (B2). Use on Locations, because Home already has a signature. |

### Tier 2: 3D art rendered at build time (task pages; allowed, no WebGL in the browser)
| # | Idea | What it looks like | Rule check |
|---|---|---|---|
| R1 | **Glass arch hero art** *(new)* | The AIMSS arch as frosted glass with teal and gold light, rendered as a still and placed in the hero beside the headline. It is decoration, not the LCP element. | OK: an image (<= 60 KB). C7 can drift the background behind it. |
| R2 | **3D office map with live pins** *(new; brings idea C to task pages)* | A clean 3D model of Queens to Nassau, rendered once. Two HTML pins sit on top, glowing teal when that office is open now (the same `OpenNow` logic as the rest of the site), with a CSS ping. | OK: the image is static; the pins are text and buttons, so they are accessible and tappable. |
| R3 | 3D care-stage icons *(new)* | Four small rendered 3D objects (rattle, ball, backpack, heart) for the Care by age stages. | OK: images. Optional. |

### Tier 3: live three.js (showcase page only; needs the owner's written approval, U14.11)
| # | Idea | Notes |
|---|---|---|
| S1 (A) | **Living glass arch** | Turns slowly and leans toward the pointer or the phone's tilt. The poster is R1. |
| S2 (E) | **Shader colour field** | Behind S1. Paused off screen. |
| S3 (C) | **Live two-office map** | Drag to rotate; pins are open or closed live; tap a pin for its call and directions (HTML). |
| S4 (B) | **Heartbeat particles** | Gold points form the pulse line and flow into the arch as you scroll. |
| S5 (D) | **Care journey** | The camera follows a ribbon through the four life stages as the page scrolls natively (no scroll-jacking, U14.5). |
| S6 (F) | **Line-art skyline** | Queens to Long Island in thin lines, at the bottom of the showcase. |

Every live scene follows the threejs-skills performance rules: `setPixelRatio(Math.min(devicePixelRatio, 2))`, `setAnimationLoop(null)` when off screen or the tab is hidden, dispose geometry and materials, one renderer per page, and a pause button (U14.8). The scene does not start, and the poster stays, for: `prefers-reduced-motion`, `saveData`, `deviceMemory < 4`, `hardwareConcurrency < 4`, or no WebGL.

### Not doing (and why)
| Idea | Why not |
|---|---|
| Live WebGL in the Home hero | U14.11 / B6: Home is a call-first task page. R1 gives the same look as a still. |
| Magnetic buttons | They animate the primary action (U14.9) and are pointer-only (U14.17). |
| Cursor spotlight on task pages | Pointer-only decoration (U14.17). Allowed on the showcase if wanted. |
| Services marquee | No marquee (B3, U14.21). |
| Word reveal on the H1 | U14.9. |
| Lenis or other smooth-scroll libraries | B6, U14.5. |
| Robots or anything gimmicky | Owner brief. |

## 4. Section redesigns the owner asked for (desktop screenshots, 2026-11-01)
Skill route (CLAUDE.md): `frontend-design-direction` (decide), then `design-system` (tokens), then `make-interfaces-feel-better` (polish).

**Scope (owner, 2026-11-01): "the mobile version is ok but not the desktop version".**
- **Desktop only:** these redesigns change layout at `lg` (1024 px and up). The phone layout at 390 px stays as it is now, after PR #33.
- **Motion:** new motion may run on both sizes, but it must not change the phone layout.
- **Phone check:** every PR still screenshots 390 px to prove the phone layout did not change.
- **Exception:** the FAQ heading bug fix (4.5) touches markup on both sizes, but it is visible only on desktop.

### 4.1 "What brings you in?" (`src/components/home/Visits.astro`)
**Problem (desktop):** two text columns floating on cream. The left column ends early and leaves a large empty area, the icons are thin outlines, and only the right side has a card. It reads unfinished next to the redesigned sections.
**Direction:**
- **Purpose:** route the two intents in one glance: a planned visit goes to the request form, a sick visit goes to a call to the office that is open.
- **Audience:** a tired parent, often on a phone.
- **Tone:** calm and certain.
- **Memorable detail:** the office that is open now glows (a teal ring and a pinging dot), the same signal the 3D map pins use later.

**Layout (base pattern: their "Plan your visit" 2-up cards):**
- **Two equal-height `card-soft` cards** side by side on desktop and stacked on phone. Each card has a gradient icon tile (teal for planning, rose for sick).
- **"Planning a visit" card:** the lead line, then a 2x2 mini list of visit types with small icons (checkups, physicals, new baby, vaccines; plain words, no claims), then a ghost button "Request a visit". There is no second filled button: one filled action per screen.
- **"Sick today?" card:** both offices as rows (name, live status pill, the number large and tabular, and an outlined **Call** button with a 44 px or larger target). With JS, the open office is listed first and gets the teal ring.
- **911 line:** a full-width strip inside the card's bottom edge with a shield icon. Plain text, with no colour that fails contrast.
- **No-JS:** data order, no ring, everything still readable and tappable.

### 4.2 "Insurance" (`src/components/home/Insurance.astro`)
**Problem (desktop):** the left column is a small mint box and an outlined button; the right column is a bare text list with long dated sample sentences, so it feels like a form, not a section.
**Direction:** **Purpose:** answer "do they take my plan?" in a scan. **Memorable detail:** the Medicaid and Child Health Plus panel as the one rich, dark card on a light section.

**Layout (base pattern: feature card plus plan list plus verify button):**
- **Left column:**
  - eyebrow, H2 and a one-line lead;
  - a **feature panel** in indigo with a teal gradient and a shield icon tile, holding the Medicaid and Child Health Plus status, dated;
  - a "what to bring" line with card and ID icons.
- **Right column:**
  - "Other plans" as a tidy grid of **plain text pills** (no logos, no "& many more", dated "Checked [date]");
  - then two small tiles side by side, **"Plans we do not take"** and **"No insurance? Self-pay"**, each with an icon and its dated fact;
  - then the ghost **"Call to check your plan"** button.
- **Columns:** both columns end at the same height on desktop.
- **Red-line check:** every value stays a dated `Fact` from `practice.ts`. Pills are a layout choice, not a claim.
- **Owner decision needed:** the old spec 4.6 said "no chips", and the base site uses pills. Owner to confirm.

### 4.3 "Care by age" (`src/components/home/CareByAge.astro`), owner asked for "more dynamic"
**Problem (desktop):**
- a thin grey line with tiny arch caps;
- small 76 px photos floating in white space;
- the "Led by" links wrap unevenly (Teens drops "Dr. Elena Park" to its own line because each link is a 44 px inline block).

**Direction:** keep it as Home's one signature moment (U14.10), but make it a **growth timeline** people want to follow.
- **Each stage becomes a `card-soft` card hanging from the line.** It has:
  - a taller arch photo (about 9 rem);
  - an age badge in its own stage colour (teal, gold, rose, indigo: the existing `tile-*` set);
  - a title and one line of text;
  - **"Led by" as doctor chips** (round photo plus name, each 44 px tall), so two doctors sit side by side cleanly.
- **Dynamic, all CSS:**
  - the line draws left to right as the section scrolls in (already built, kept);
  - each node fills with its stage colour and the card rises **in sequence** with the line (reveal stagger);
  - hovering or focusing a card lifts it and warms its node.
  - Reduced motion: everything is shown, static.
- **Phone: unchanged** (owner scope). The new cards, chips and colours apply from `lg` only.
**Plan-review fixes:** age badges use indigo text on a light tint of the stage colour (white on rose or teal fails AA); stay within the three-colour decision (indigo, teal, gold; rose only as a tint); at 1024 px the doctor chips stack (no room side by side); the cards reveal by the normal stagger, not "in sync with the line" (different timing systems).

### 4.4 "Inside each office" (`src/components/home/Inside.astro`)
The owner's screenshot shows the old desktop layout (big arch plus captions below). PR #33 already moved phone and desktop to the base site's 2-column labelled tiles.
**Next step:**
- **Desktop mosaic per office:** the first photo is tall on the left and the other two are stacked on the right (base gallery rhythm).
- **Dynamic:**
  - tiles reveal in a stagger;
  - on hover or focus the photo zooms 4% inside its frame (transform only) and the caption band brightens;
  - each office header gets a "See the office" link that **morphs into the location page** (C1 page morph).
- No slider (B3).

### 4.5 "Questions" (`src/components/home/Faq.astro`)
**Bug to fix first:** on desktop the eyebrow and the H2 are separate grid items, so "QUESTIONS" sits beside the heading (owner screenshot). Fix: wrap them in one `lg:col-span-4` block. Check the other sections for the same pattern.

**Problem:** the left column is empty under the heading, and the list is plain lines.
**Direction (base pattern: boxed questions with a coloured plus):**
- **Each question becomes a rounded item** with a plus in a teal circle. The open item gets a mist background and a teal left edge.
- **The left column gets a sticky "Still have a question?" card:**
  - an icon tile;
  - both offices with their live status and number (reuses `OpenNow`; the open office is first);
  - a ghost "Request a callback" button.
- **Dynamic:** the answer fades and rises (already built; height never animates, U14.13), and the plus turns into an x.
- Native `<details>` stays, so it works without JS.

### 4.6 "Request a visit" (`src/components/home/Request.astro`)
**Problem (desktop):** the left column ends after "Prefer to call?" and leaves a large empty indigo area. The form card is plain.
**Direction (base pattern: "Ready when you are" glass cards):**
- **Left column becomes "What happens next"**, a 3-step strip with numbered glass circles joined by a line. The wording repeats only what the site already says:
  1. Send your name and number.
  2. The office calls you back during office hours.
  3. You choose a time together.
- **Below it, "Prefer to call?"** becomes two glass office cards with the live status and the number.
- **Dynamic:**
  - the step line draws and the numbers pop in sequence when the section enters;
  - the form card's border light runs once (C3);
  - a very faint arch watermark sits in the background (static).
- **Form fields do not change** (red line: name, phone, office, best time only).

### 4.7 Desktop tier (council decision, 2026-11-01)
The owner asked whether desktop can carry a richer design ("any desktop can handle better design") and said they would follow a four-voice council's recommendation.

**Options:**
- **A:** a richer desktop tier inside the rules.
- **B:** A plus a signed exception for one live three.js scene on Home, desktop only.
- **C:** no desktop tier.

**Verdict: A, unanimous (4 of 4).** B was rejected for now. C does not fix the owner's "sparse desktop" complaint.

**Why not B:**
- A pre-rendered 3D still looks almost the same as a live scene in a demo.
- A live scene costs 130 to 141 KB gzip plus GPU work on the phone-number page.
- Board members will likely view the demo on weak office PCs or projectors.
- One exception makes U14.11 negotiable.

B can be reconsidered after the owner has seen the showcase page, with real measurements.

**What the desktop tier adds at `lg` and up (phone unchanged):**
- **Bold layouts:** full-width bands, bento grids, larger photography; no two thin floating columns.
- **Desktop-only scroll effects** under B2: below the fold, vertical, `@supports` guarded, no essential text, call button reachable. Examples: Welcome mosaic depth, the arch line drawing on Locations, stacking office cards.
- **Rich hover and focus states:** lift, gentle photo zoom, border light. Every one also on keyboard focus (U14.17). No cursor followers.
- **Larger 3D art (R1, R2)** as build-time stills, with the HTML live pins on the map.

**Guardrails the council asked for:**
1. **Desktop-tier budgets, measured in every PR:**
   - each 3D still is AVIF/WebP, <= 60 KB at desktop size and <= 120 KB for the whole hero;
   - phone LCP <= 2.5 s, unchanged;
   - no layout shift from desktop effects (CLS <= 0.1).
2. **Desktop-tier tests in every PR:**
   - keyboard order and visible focus;
   - 200% zoom at 1280 px (WCAG 1.4.10);
   - reduced-motion and no-JS renders (U14.19).
3. **Build the showcase page early** (move P6 up, after P3), so the owner sees live 3D before judging "wow".
4. **Record the decision** in `03-decisions/` (ADR) with the measured numbers, including the owner's earlier "no conflict with the playbook".
5. **Content beats effects:** real photos of the two offices and the doctors, and real facts, will differentiate more than any 3D. They stay the top client ask (photo plan: `03-decisions/2026-11-01-hero-photo-plan.md`).

## 4b. How every section is done (owner's method, 2026-11-01)
**Plan → plan review → build → review → fix → owner critique.** One section per PR.
1. **Plan:** this document. The section's direction comes from `frontend-design-direction`, then `design-system` for tokens.
2. **Plan review:** an independent reviewer agent checks the plan against the rulebook (U14, U15, U16, red lines) and the base pattern before any code is written. The owner sees its notes.
3. **Build:** phone at 390 px first, then desktop at 1280 px. `make-interfaces-feel-better` for polish. Motion goes into the motion inventory (U14.2).
4. **Review:** `npm run check`, `qa-pages.mjs`, three renders (normal, reduced motion, no JS; U14.19), screenshots, and the code-reviewer agent.
5. **Fix:** every CRITICAL, HIGH and MEDIUM finding.
6. **Owner critique** on the screenshots or the preview, then the next section.

## 5. Build order (each phase is its own PR with phone and desktop screenshots)
| Phase | What | Gate |
|---|---|---|
| P0 | Owner picks (section 8). **Motion inventory for Home (U14.2) written first.** Fix the two existing violations: the hero H1 entrance animation (`global.css:119`, U14.9) and the endless open-dot ping (`global.css:126`, U14.8; set it to 2 runs then rest). Record `03-decisions/2026-11-0X-threejs-allowed.md`: three.js allowed at build time and on the approved showcase page only. Update the "Motion or animation" row in `CLAUDE.md`. Install the skill pack: `fundamentals`, `geometry`, `materials`, `lighting`, `shaders`, `animation`, `interaction` and `performance` into `.claude/skills/` (not `react-three-fiber`). | Decision file merged |
| P1 | Section redesigns, one PR each, in this order: FAQ heading bug fix (quick), Visits (4.1), Insurance (4.2), Care by age (4.3), Request (4.6), FAQ (4.5), Inside (4.4). CSS only. | Section 4b loop; Definition of done in CLAUDE.md |
| P2 | C3 (Request card only), C5 (optional), C1 page morph with the reduced-motion and naming fixes from section 9. | Reduced motion and no-JS renders checked (U14.19) |
| P3 | `render-3d.mjs` pipeline (three.js in headless Chromium, writes `public/art/*.webp`). R1 glass arch in the hero plus C7 colour drift. | Phone LCP <= 2.5 s; hero bytes <= 120 KB |
| P3b | **Showcase page early** (council): `/our-practice` with S1 + S2 and the posters from P3, so the owner sees live 3D before judging. S3 follows in P6. | three.js chunk loads only on this page |
| P4 | R2 3D map still with live HTML pins on Home Locations and `/locations`. C9 on `/locations`. | Pins pass 44 px and keyboard checks |
| P5 | (merged into P2; C2 dropped) | |
| P6 | Showcase page `/our-practice`: S1 + S2 hero, S3 live map, pause button, posters from P3. Link from Home as a quiet secondary link. | three.js chunk loads only on this page; a new `check-dist` rule fails if any other page references it |
| P7 | Optional: S4, S5, S6. | Same as P6 |

Fixed technical points:
- `three` comes from npm and is bundled by Astro. The CSP stays `script-src 'self'`, because WebGL shaders need no `eval`.
- Dynamic `import('three')` runs only on the showcase page, after `load`, and when the canvas is in view.
- Canvases are `aria-hidden`; every number, hour and button stays HTML.

## 6. Risks
- **Page weight creep:** the `check-dist` rule (P6) and the measured LCP gate on every phase guard against it.
- **"Looks like a template":** use our own arch and pulse shapes only, no stock 3D assets.
- **Showcase page scope (Q20 in `deferred-questions.md`):** it is an extra page, so the client may need to approve it too.
- **Version drift:** the skill pack teaches r186 and npm has r187. Check the r187 changelog for APIs we use.

## 7. Why this beats the competitors
Clinic sites in the research set are either flat templates or heavy and slow (WebGL sites measured at 2.7 to 23.6 MB, design-rules B6). This plan gives a **signature 3D identity** (glass arch, 3D office map with live open pins) that loads like a plain page on an old phone, plus a real interactive 3D showcase for people who want to explore.

## 8. Questions for the owner
1. Approve the **three tiers**, live 3D on one showcase page only? Or sign a written exception for one live scene on Home? An exception conflicts with U14.11 and is not recommended.
2. Which ideas: the **recommended set** is C1 to C6, R1, R2, then the showcase with S1, S2 and S3. Or pick by number.
3. Insurance plans as **pills** (base-site pattern) instead of the old "no chips" list?
4. Name of the showcase page: "Explore our practice" (`/our-practice`), or another?

## 9. Plan review (independent reviewer agent, 2026-11-01): APPROVE WITH CHANGES, all applied
The three tiers are a correct reading of U14.11 and U14.14: a build-time still is an image, not WebGL. The changes below are applied to sections 3, 4, 5 or added here as build rules.

**HIGH (applied):**
1. **Motion with no job, or animating the wrong properties** (U14.1, U14.13, B5): C4, C6, C7 dropped; C3 and C5 rebuilt as transform/opacity. The motion inventory moved to P0.
2. **Endless open-dot ping** (U14.8, WCAG 2.2.2): it runs 2 times then rests, everywhere it appears (Visits ring, FAQ card, Request cards, R2 pins).
3. **Contrast** (U16.2, U16.3):
   - stage badges use indigo text on light tints;
   - ghost buttons use a `muted` or `teal-deep` border (the current `.btn-ghost` border is about 1.3:1 on white);
   - the Insurance panel gradient ends at `hero-teal` (5.92:1 with on-dark text).
4. **"Phone unchanged" must be provable:**
   - every new class is `lg:`-gated;
   - the Request step strip and the FAQ sticky card are `hidden lg:block`;
   - each PR pixel-diffs 390 px against a baseline from `main`, rendered with reduced motion.

**MEDIUM (applied as build rules):**
5. **Hero headline animation:** the hero H1 animates today (fix in P0). R1 may become the desktop LCP, so measure hero bytes and LCP before and after R1.
6. **C1 page morph:**
   - add `@media (prefers-reduced-motion: reduce) { @view-transition { navigation: none } }`, because the global `* { animation: none }` does not reach view-transition pseudo-elements;
   - give every doctor and office a unique `view-transition-name`.
7. **CSP and build:**
   - no inline `style="--i:n"` (blocked by `style-src 'self'` and the inline guard); stagger with `nth-child` or from JS like `Base.astro`;
   - the showcase needs no Draco/KTX2 and no embedded GLTF textures (`blob:` is blocked), or a `_headers` rule scoped to `/our-practice` only;
   - headless rendering needs `--enable-unsafe-swiftshader`; stills are rendered offline and committed;
   - `three` lives in `workspace/tools/package.json` until P6;
   - the `check-dist` "no three outside the showcase" guard starts in P3.
8. **Sticky FAQ card:** sticky only on tall screens (`min-height: 50rem`), top offset = header height, so its button is never pushed off screen (WCAG 2.4.11). C2 dropped for the same reason.
9. **Hidden claims:**
   - the "What happens next" steps and any "callback" promise become a sample `Fact` in `practice.ts`, with the demo note (the form does not send yet);
   - the Visits visit-type list reads from the services sample in `practice.ts`, never typed into the component.
10. **Care by age:** doctor chips stack at 1024 px; no "in sync with the line" claim; no fourth brand colour.

**LOW (applied as notes):**
- **Showcase page:**
  - it holds no unique facts; everything on it also appears on `/locations` (U14.5);
  - the JS budget is <= 200 KB for three.js, the scene and the app code together, measured on a phone profile (I2);
  - one pause control covers all motion on the page;
  - S1 tilt needs an iOS permission tap.
- **R2 map:** credit OpenStreetMap (ODbL) if its geometry is used; give the map alt text pointing to the office text list (U15.14).
- **Inside (4.4):** morph the existing heading link instead of adding a "See the office" link; zoom on hover/focus needs a focusable element.
- **Insurance pills:** no shadow, so they don't look like filter buttons.
- **Screenshots:** every PR adds screenshots of each component state (U15.15).
