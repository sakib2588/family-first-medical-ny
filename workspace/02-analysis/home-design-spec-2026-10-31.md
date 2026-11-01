# Home page design specification (build-ready), 2026-10-31 (rev. 2)

Status: SPEC ONLY. Nothing built. The owner approves it before task 1.
Revision 2: rebuilt after reading all the sources below. It replaces rev. 1 in place.

## Sources used (each read or viewed in this session)
- Project: `CLAUDE.md`; `src/pages/index.astro`; `src/components/home/Hero.astro` (classes); `src/data/practice.ts`; `src/styles/global.css`.
- Our current look: `workspace/04-logs/home-demo/H8-phone-full.png` (11,581 px at 390).
- Base site: `01-research/sites/familyfirstmedicalny/notes.md`, `phone/1-fold.png`, all 20 `phone/sections/*.png` (01 to 20, intro excluded from design), all 17 `desktop/sections/*.png` (01 to 17). I viewed the sections as contact sheets.
- Analysis: `02-analysis/competitor-teardown-2026-10-31.md`, `premium-upgrade-plan-2026-10-31.md`, `premium-breakdown-A.md`, `premium-breakdown-B.md`, `premium-benchmark.md`.
- Decisions: `03-decisions/home-demo-direction.md`, `2026-10-31-constraints.md`, `2026-10-31-home-colour-and-hero.md`, `2026-10-31-home-page-decisions.md`, `2026-10-31-home-layout-round3.md`, `deferred-questions.md`.
- Rulebook: `playbook/universal/U10-hierarchy-layout.md`, `U11-typography.md`, `U12-color.md`, `U14-motion.md`, `U16-accessibility.md`; `design-craft/anti-slop-design-guide.md`; `design-craft/site1-design-craft/slop-test.md`.
- Skills (principles only): `.claude/skills/frontend-design-direction`, `design-system`, `make-interfaces-feel-better`, `accessibility`, `motion-foundations` (its React code is translated to CSS).

## 0. Direction
The base site is the model: light, premium and photo-led. It has a large serif H1 with one italic phrase, real faces in the first screen, proof near the top, office cards with photos and both numbers, complete hours with today marked, an FAQ on light rows, a dark "plan your visit" band, a dark footer, and one call-led action.
Where we improve on it:
- Hours are true per office (no "Open 7 Days").
- Insurance comes up in the first two screens.
- There is a contact-only request path.
- Every target is at least 44 px and every text pair meets AA.
- The dialogs close on Escape.
- No chip clouds, eyebrow labels, glass cards, coloured accent words or carousels.
- The page is about 43% shorter than the base site (16,260 to 9,344 px).
We never clone it: no red, no lobby-photo hero with cut-outs, no copied wording or icons. Our device is the arch.

Colour and ground follow the accepted decisions:
- The hero is flat indigo with the doctors in it (`home-colour-and-hero`). The base site's light hero was considered and rejected there.
- Light sections alternate cream and white. Lavender is not used as a ground on Home.
- Request a visit is the one filled action. Call is outlined or a text link (`home-page-decisions` #1).

What we took from the measured anatomy (breakdowns A/B, benchmark):
- H1 is about 40 px on phone and 52 to 70 px on desktop.
- Body text is 16 to 17 px.
- Section rhythm is 80 to 120 px on desktop. U10.8 caps it at 64 to 96, so we use 96.
- Headers are 60 to 80 px tall. Desktop utility rows are about 36 px (we use 44 px for tap targets).
- The calmest sites barely move.

## 1. Design tokens

### 1.1 Colour
Ratios use the WCAG formula, computed in this session. Light grounds are cream and white only.

| Token | Hex | Role (U12.1) | Where | Text/background pairs |
|---|---|---|---|---|
| `indigo` | #17123a | ink, dark ground | H1-H3 on light; hero, request, footer grounds | on cream 16.57, white 17.74, mist 15.49, slot 16.24 |
| `indigo-soft` | #231c52 | raised dark surface | utility row, footer office blocks | white 15.45, on-dark 9.19, aqua 7.49 |
| `teal` | #0e8a8a | brand graphic only (U12.10) | care-by-age line and nodes, icon strokes on light (non-text, 3:1 min met) | never text |
| `teal-deep` | #0b6f6f | ACTION on light | filled button, text links | white on it 5.97; as text on cream 5.58, white 5.97, mist 5.21 |
| `teal-darker` | #0a5656 | action hover/pressed | | white on it 8.47; text on mist 7.40 |
| `gold` | #d9a02c | ACTION on indigo; 2 px arch rule | hero button, arch rule under H1 | indigo on gold 7.61; gold on indigo 7.61 (rule, non-text); gold text on cream 2.18 FORBIDDEN |
| `gold-light` | #e8b54a | gold hover | | indigo on it 9.41 |
| `aqua` | #5fc4c4 | accent on indigo only | focus ring on dark, underline of hero phone links | on indigo 8.60, indigo-soft 7.49 |
| `on-dark` | #c9c4e3 | body on dark | | indigo 10.55, indigo-soft 9.19 |
| `cream` | #faf7ef | ground A | | |
| `white` | #ffffff | ground B, cards on cream | | |
| `text` | #3d3a58 | body | | cream 10.09, white 10.80, mist 9.43 |
| `muted` | #5b5878 | secondary; control borders | captions, input borders (3:1 non-text met) | cream 6.30, white 6.75, mist 5.89, slot 6.18 |
| `line` | #e3ddf0 | decorative hairline only | dividers, card edges (never a control boundary) | 1.24 (decorative) |
| `mist` NEW | #e6f2f1 | light tint of the action role (U12.2) | today row, open-status pill, Medicaid/CHP panel | see column pairs above |
| `slot` NEW | #fff4dc | fact-slot ground | `FactSlot` | indigo 16.24, slot-ink 4.97, muted 6.18 |
| `slot-ink` NEW | #9a5b00 | fact-slot label | bracket text in slots | on slot 4.97 |
| `state-open` NEW | #1d6b3c | state token (U12.3) | "Open now" word and dot on light | cream 6.09, white 6.52, mist 5.69 |
| `state-open-dark` NEW | #8fdcaa | state on dark | open word and dot in the hero, utility row and footer | indigo 10.97, indigo-soft 9.55 |
| `state-error` NEW | #b3261e | form error text and icon | request form (with an icon and words) | white 6.54 |
Rules:
- Closed status shows a hollow 8 px ring in `muted` plus the words "Closed now". Colour is never the only cue (U12.9).
- `state-open` is not an action. It appears as text with a dot, never as a pill fill (U12.4, U12.5).
- Links in body copy are underlined.

### 1.2 Type scale (rem; 1 rem = 17 px; fluid `clamp()` between 390 and 1280; U11.3)
| Token | Font, weight | Phone | Desktop | Line height | Tracking | Max width |
|---|---|---|---|---|---|---|
| `t-display` (H1) | Fraunces 560, one italic phrase (U11.2) | 2.35rem (40 px) | 3.53rem (60 px) | 1.06 / 1.04 | -0.015em | 16ch |
| `t-h2` | Fraunces 560 | 1.76rem (30 px) | 2.47rem (42 px) | 1.12 / 1.08 | -0.01em | 22ch |
| `t-h3` | Fraunces 600 | 1.29rem (22 px) | 1.41rem (24 px) | 1.2 | -0.005em | 28ch |
| `t-lead` | Figtree 450 | 1.06rem (18 px) | 1.18rem (20 px) | 1.5 | 0 | 36ch / 48ch |
| `t-body` | Figtree 400 | 1rem (17 px) | 1rem | 1.6 | 0 | 64ch (U11.6 target 60-68) |
| `t-small` | Figtree 450 | 0.88rem (15 px) | same | 1.5 | 0 | 56ch |
| `t-caption` (minimum) | Figtree 500 | 0.82rem (14 px) | same | 1.45 | 0.005em | 44ch |
| `t-num` | Figtree 600, tabular-nums | 1rem | 1rem | 1.4 | 0 | |
| `t-btn-lg` / `t-btn` | Figtree 650 / 600 | 1.06rem / 1rem | same | 1 | 0.005em | |
Type rules:
- Each section uses at most three size levels (U10.5).
- No uppercase tracked labels.
- No text box has a fixed height (U11.8).
- Preload only the Fraunces WOFF2 that the H1 uses (U11.14).

### 1.3 Spacing (4 px steps, written in rem; U10.7)
`s1 .25rem(4) · s2 .5(8) · s3 .75(12) · s4 1(16) · s5 1.25(20) · s6 1.5(24) · s8 2(32) · s10 2.5(40) · s12 3(48) · s16 4(64) · s24 6(96)`.
Spacing rules (U10.9):
- Space inside a group is s1 to s6.
- Card to card is s4 on phone and s6 on desktop.
- Heading to content is s6 on phone and s8 on desktop.
- Sections are separated by their padding.

### 1.4 Section padding
| Kind | Phone top/bottom | Desktop |
|---|---|---|
| standard | s16 / s16 (64) | s24 / s24 (96, U10.8 max) |
| compact (fact row, reviews) | s10 (40) | s16 (64) |
| hero | 32 / 40 | 72 / 88 |
| footer | 48 / 104 (clears the sticky bar) | 80 / 48 |
`scroll-padding-top`: 16 px on phone (the header is not sticky) and 96 px on desktop (80 px header plus 16) (U16.5).

### 1.5 Radius, shadow, border (each differs by role)
| Token | Value | Role |
|---|---|---|
| `r-control` | 999px | buttons, status pill |
| `r-field` | 12px | inputs |
| `r-card` | 20px | cards, panels |
| `r-arch` | 999px 999px 20px 20px | primary photos only |
| `r-thumb` | 12px | small gallery photos |
| `r-dialog` | 28px top corners (phone sheet); 28px all corners (desktop) | dialogs |
| `shadow-lift` | 0 1px 2px rgb(23 18 58/.06), 0 12px 32px -18px rgb(23 18 58/.28) | doctor cards, sticky bar |
| `shadow-dialog` | 0 24px 64px -24px rgb(23 18 58/.45) | dialogs |
| `b-hair` | 1px `line` | dividers, card edges |
| `b-control` | 1.5px `muted` | inputs, outline buttons on light |
| `b-control-dark` | 1.5px `on-dark` | outline buttons on indigo |
| `b-arch` | 2px `gold` on dark | portrait frames, H1 rule |
Every other surface has no shadow; we use hairlines instead (the base site's soft shadows become hairlines, the editorial choice). Cards never sit inside cards (frontend-design-direction).

### 1.6 Motion tokens and inventory (U14.1, U14.2; CSS only; transform and opacity only)
| Token | Duration | Easing |
|---|---|---|
| `m-press` | 150ms | ease-out |
| `m-state` | 220ms | cubic-bezier(.2,.8,.2,1) |
| `m-enter` | 260ms | cubic-bezier(.2,.8,.2,1) |
| `m-exit` | 150ms | ease-in |
| `m-sheet` | 300ms | cubic-bezier(.32,.72,0,1) |
| `m-signature` | 480ms | cubic-bezier(.65,0,.35,1) |

| # | Animation | Job | Trigger | Property | Token | Reduced motion |
|---|---|---|---|---|---|---|
| 1 | Button press | feedback | :active | transform scale(.97) | m-press | none |
| 2 | Link/button hover colour | feedback | :hover/:focus-visible | color, background-color | m-state | instant |
| 3 | Arrow nudge | feedback | hover/focus | translateX(3px) | m-state | none |
| 4 | Menu and call dialog | change of state | open/close | opacity, translateY(8px) (`@starting-style`) | m-enter / m-exit | opacity only, 150ms |
| 5 | Sticky bar | change of state | hero button leaves view | translateY(100% to 0) | m-sheet | instant |
| 6 | FAQ answer | change of state | details open | answer opacity 0 to 1 + translateY(-4px to 0). Height is never animated (U14.13) | m-state | instant |
| 7 | Care-by-age line (signature, U14.10) | shows how the stages relate | `animation-timeline: view()` under `@supports` and `no-preference` | transform scaleY / scaleX 0 to 1 | m-signature | full line, static |
The page never animates the H1, the gold button, the hero photos (the LCP) or the form. No content starts hidden. With no JS, everything is present (U14.19).

## 2. Grid
| Width | Container | Columns | Column gap | Side margin |
|---|---|---|---|---|
| 390 | 350 | 4 | 16 | 20 |
| 768 | 704 | 8 | 24 | 32 |
| 1280 | 1160 | 12 (74.67 each) | 24 | 60 |
| 1440 | 1160 (capped, U10.13) | 12 | 24 | 140 |
Grid rules:
- At 320 px everything reflows with no horizontal scroll (U10.11).
- Text columns keep their ch caps.
- One break of the grid is allowed: the hero portraits stagger on desktop (U10.14).

## 3. Page map (final order; heights are targets, +-8%)
| # | Section | Ground | 390 h | 1280 h |
|---|---|---|---|---|
| 0 | Utility row (desktop only, not sticky) | indigo-soft | 0 | 44 |
| 1 | Header | white | 64 | 80 |
| 2 | Hero | indigo | 700 | 640 |
| 3 | Fact row | white | 300 | 140 |
| 4 | Visits + Sick today | cream | 560 | 400 |
| 5 | Insurance | white | 640 | 440 |
| 6 | Offices | cream (white cards) | 1,500 | 740 |
| 7 | Care by age | white | 800 | 560 |
| 8 | Doctors | cream (white cards) | 1,100 | 600 |
| 9 | Inside each office | white | 760 | 540 |
| 10 | Reviews | cream | 420 | 300 |
| 11 | FAQ | white | 620 | 500 |
| 12 | Request | indigo | 980 | 600 |
| 13 | Footer | indigo, 1 px indigo-soft rule above | 900 | 420 |
| | **Total** | | **9,344** | **6,004** |
Sums checked: phone 64+700+300+560+640+1500+800+1100+760+420+620+980+900 = 9,344. Desktop 44+80+640+140+400+440+740+560+600+540+300+500+600+420 = 6,004.
The sticky bar and the dialogs are overlays and add no height.
Changes from the current Home: insurance moves from 8th to 3rd content section; Visits and Sick today merge into one band.

---

## 4. Sections
Shared rules:
- H2s are left-aligned. At most one centred moment on the page: none planned.
- Every phone, address and hour comes from `practice.ts`.
- Every unconfirmed fact is a `FactSlot` (slot ground, slot-ink text, "[need: …]").
- Neighbouring sections use different compositions.
- One filled action per screen: gold in the hero, teal-deep in the sticky bar and the request form. Everything else is outlined or a text link.

### 4.0 Utility row (desktop >= 1024, not sticky)
- **From the base site:** their dark row (both numbers, "Open 7 Days", EN/中文, about 36 px).
- **Improved:** open status per office, in true words.
- **Layout at 1280:** 44 tall, `indigo-soft` ground, `t-small`, `on-dark` text.
  - Left: "Elmhurst" + `tel:` link (white, aqua underline) + status ("Open now until 6 PM" in `state-open-dark`).
  - Then a 32 px gap and the same for Hicksville.
  - Right: "Language help" link to the footer's language line (decision #7: English only, help line in the footer).
  - Every link has `min-block-size: 44px`.
- **No JS:** the status reads as a grouped hours summary instead ("Mon-Fri 9 AM-6 PM").
- **A11y:** `<nav aria-label="Call an office">`. Contact order matches the footer and the call dialog (U16.7).
- **Files:** `Header.astro` (UtilityRow), `OpenNow.astro`.

### 4.1 Header
- **From the base site:** logo top-left, desktop nav of 6 links plus a filled call button.
- **Improved:** no filled button in the header (the hero holds it), and every target is 44 px.
- **Layout at 390:** 64 tall, white, `b-hair` bottom edge, not sticky (U10.10 standard patterns).
  - Logo lockup: arch mark 28x32 + name in Fraunces 600 at 19 px.
  - Menu button: 96x44 (22 px icon + the word "Menu"), `b-control`, `r-control`.
- **Layout at 1280:** 80 tall, sticky, white.
  - Logo: 36 px mark + 22 px name.
  - Nav: Offices, Care by age, Doctors, Insurance, Questions. `t-btn` at 16 px, link height 44, gap 28.
  - Right: an outline "Call an office" button (44 tall, `b-control`, teal-deep text) that opens the call dialog.
  - Hover: a 2 px teal-deep underline at offset 6. The current anchor keeps it.
- **A11y:** the skip link is the first focusable element.

### 4.2 Menu dialog (phone)
- **From the base site:** a full-screen menu with both phones (`phone/sections/20`).
- **Improved:** native `<dialog>`; Escape closes it and focus returns to the Menu button; rows are 56 px; no 34 px language toggles.
- **Layout at 390:** full height (`100dvh`), white.
  - Top bar: 64 tall, logo + "Close" (44x44).
  - Six links (Offices, Care by age, Doctors, Insurance, Questions, Request a visit): rows 56 tall, Fraunces at 22 px, `b-hair` between, 336 px in total.
  - "Call an office": two rows 72 tall, each one whole `tel:` link with the office name (`t-body` 600), the number (`t-num`, teal-deep) and the status (`t-caption` + state colour).
  - "Language help" line + `FactSlot practice.languages`.
  - 24 px plus the safe area at the bottom.
- **No JS:** "Menu" is a link to `#site-nav` in the footer.
- **Motion:** #4.
- **Files:** `Header.astro`, new `MenuDialog.astro`, an external JS module (the CSP forbids inline script).

### 4.3 Hero (indigo)
- **From the base site:** the serif H1 with an italic phrase, both doctors in the first screen with name cards, a short lead.
- **Improved:**
  - No photo behind the H1 (their H1 sits on a ceiling light).
  - The faces are arch portraits, not cut-outs.
  - No credentials until they are verified.
  - One filled action plus both numbers, all inside the 390x844 fold (theirs sat below it).
- **Layout at 390** (700 tall; container 350):

| Element | Spec |
|---|---|
| H1 | `t-display`, white: "Pediatrics and family medicine in *Elmhurst* and *Hicksville*" (italic places), 4 lines, about 170 px |
| Arch rule | 48x2 gold, 16 px below the H1 |
| Lead | `t-lead`, `on-dark`, 16 px below, 34ch: "One practice for newborns, children, teens and adults." |
| Gold button | 24 px below; 350x56, `r-control`, indigo `t-btn-lg` "Request a visit" (links to `#request`) |
| Office numbers (the U10.2 secondary link group) | 12 px below; a 2-column grid of 167 + 16 + 167. Each cell is a `tel:` link 48 tall: caption "Elmhurst" in `on-dark`, then the number in `t-num` white with a 2 px aqua underline |
| Portraits | 28 px below; two arches 167x209 (4:5), 2 px gold outline at offset 4; captions 8 px below: name (`t-h3` 18 px, white), role (`t-small`, `on-dark`), "Sample name and photo" (`t-caption`, demo only) |

  Fold check: the content above the portraits ends at about 430 px below the header, and the portrait tops show inside the fold, so it reads as unfinished-in-a-good-way and invites the scroll (U10.3). There is no false floor (U10.4).
- **Layout at 1280** (640 tall; padding 72/88):
  - Copy in columns 1-6: H1 at 60 px, 3 lines, about 190 px; lead 48ch; button 280x60; the two number links sit inline to its right (48 tall, gap 32).
  - Portraits in columns 8-12: arches 250x312; the second is 48 px lower (the one deliberate grid break).
- **Images:** AVIF/WebP with srcset (167, 334, 250, 500 w), width and height set, no lazy loading, `fetchpriority=high` on the first portrait.
- **States:**
  - Button: hover `gold-light`, press #1.
  - Number links: hover turns the text aqua.
  - Focus: aqua ring, 3 px, offset 3.
- **Gate 9:** items 4, 5, 2 and 12 pass.

### 4.4 Fact row (white, directly under the hero)
- **From the base site:** a compact proof strip (2x2 on phone, 4 across on desktop, `phone/sections/04`).
- **Improved:**
  - Facts are shown as data with a date or slot, not unsourced "25+ years" or "board-certified".
  - There is no photo behind them and no glass.
  - Insurance comes first (upgrade 4) and there is a rating per office (upgrade 5).
- **Layout at 390** (300 tall; padding 24/24): a `<dl>` in a 2x2 grid of 167-wide cells, each at least 116 tall, separated by `b-hair` lines (no boxes).
  - Each cell: `dt` in `t-caption` muted; `dd` in `t-body` 600 indigo (a value or a slot); a date line in `t-caption`.
  - (1) Insurance: `FactSlot` "[need: Medicaid and Child Health Plus taken? with date]". Decision #8 says no plan claim until it is dated, so even Medicaid is a slot.
  - (2) Ages we see: "Newborns to adults" (decision #3).
  - (3) Elmhurst on Google: `FactSlot offices[0].googleRating`.
  - (4) Hicksville on Google: `FactSlot offices[1].googleRating`.
- **Layout at 1280** (140 tall): one row of four 290-wide cells with vertical hairlines.
- **Rating format, once confirmed:** "4.9 on Google, 128 reviews, checked 2026-11-02", as text. No stars and no AggregateRating.
- **Files:** `FactRow.astro`, `FactSlot.astro` (slot tokens), `practice.ts` (new `googleRating: Fact<{ rating: string; count: number }>` per office).

### 4.5 Visits + Sick today (cream)
- **From the base site:** nothing directly; their "Same-Day Sick Visits" card was an unverified claim.
- **Improved:** two plain paths, and a same-day answer that lists both offices with their status (upgrade 2). We claim no same-day visits (decision: removed until verified).
- **Layout at 390** (560):
  - H2 "What brings you in?"
  - Two stacked rows, not cards. Each has a 40x40 arch-outline icon (teal, 2 px stroke), a `t-h3` title, one body line and a text link with an arrow (44 tall).
  - Row 1 "Planning a visit" links to "Request a visit".
  - Row 2 "Sick today?": "Call the office that is open now. In an emergency, call 911." (911 in `t-body` 600).
  - Under row 2, a white panel (`r-card`, `b-hair`, padding 0 16) with two rows 64 tall: name (`t-body` 600), status (`t-caption`, state colour plus words), and the number on the right as a teal-deep `tel:` link.
- **Layout at 1280** (400): a 6+6 split; the panel is 568 wide.
- **States:**
  - With JS, the office that is open now is listed first; with no JS, the data order is kept.
  - A closed office reads "Closed today, opens Tue 10 AM".
- **Files:** `Visits.astro`, `OpenNow.astro`.

### 4.6 Insurance (white, now 3rd)
- **From the base site:** a highlight banner (Medicaid, Medicare and most insurances) plus plan chips, a "Verify coverage" link and a disclaimer (`desktop/sections/15`).
- **Improved:**
  - The highlight is a calm `mist` panel, not a red gradient.
  - Plans are a dated text list, not chips.
  - It names the plans not taken and the self-pay option.
  - The disclaimer passes AA.
- **Layout at 390** (640):
  - H2 "Insurance".
  - Mist panel (`r-card`, padding 20, about 150 tall): `t-h3` "Medicaid and Child Health Plus" + a `FactSlot` for the status and date.
  - "Other plans": a 2-column list in `t-body` with rows 36 tall and `b-hair` lines, or one slot "[need: plan list from the front desk, with date]".
  - "Plans we do not take" (slot) and "No insurance: self-pay" (slot), as rows 44 tall.
  - Note in `t-small` `text`: "Plans change. Call your office to check before your visit."
  - Outline button "Call to check your plan" (48 tall), which opens the call dialog.
- **Layout at 1280** (440): columns 1-5 hold the H2, the panel and the note; columns 7-12 hold the plan list in 3 columns plus the two rows.
- **Files:** `Insurance.astro`; `practice.ts` (`insurance` becomes `{ publicPlans: Fact<string>, plans: Fact<string[]>, notTaken: Fact<string>, selfPay: Fact<string> }`, each with `checkedOn`).

### 4.7 Offices (cream ground, white cards)
- **From the base site:** their best block (`desktop/sections/11`, `16`).
  - Photo-top cards, address, visible phone, one-line hours, transit and parking.
  - "Call This Office" plus Directions.
  - A separate hours card with today's row tinted.
- **Improved:**
  - Grouped hours with today marked (upgrade 3).
  - The tag over the photo becomes a caption below it, so no text sits on the image.
  - Access facts are dated slots.
  - Both cards are the same height.
- **Layout at 390** (1,500 = H2 block 110 + 2 cards x 670 + gap 24 + link 26). Card: white, `r-card`, `b-hair`, padding 20, 350 wide.

| Element | Spec |
|---|---|
| Photo | arch 310x180; empty: dashed `PhotoSlot` "Photo: Elmhurst entrance from the street" |
| Title row | `t-h3` "Elmhurst office"; neighbourhood in `t-caption`; status in a mist pill 28 tall with a `state-open` dot and words |
| Address | `t-body`, 2 lines; "Directions" text link (44 tall) to the maps URL |
| Phone | `t-num` at 20 px, teal-deep `tel:` link, 48 tall |
| Hours (grouped, `weekSummary`) | rows 40 tall: group left, hours right (`nowrap` inside a range); today's group gets a `mist` row, indigo 600 text and the word "Today"; at most 3 rows |
| Getting here | 3 rows 32 tall: label muted, value or slot |
| Doctors here | caption + 2 linked names |
| Actions | outline "Call Elmhurst" (full width, 48); text link "Full week and details" to `/locations/elmhurst` |

- **Layout at 1280** (740): two 568-wide cards; photo 528x260. Inside, two columns: address, phone and actions on the left (240); hours and access on the right (264).
- **Files:** `Locations.astro`, `OpenNow.astro`.

### 4.8 Care by age (white; the signature)
- **From the base site:** "Care for all ages", age-ordered rows with a thumbnail, the age range, a title and a line (`desktop/sections/09`).
- **Improved:**
  - The rows hang on one teal line, which is the design idea: one practice along a life.
  - Each row names the doctor who leads it.
  - No red accent words; the age range is indigo.
  - The thumbnails are named arch slots, not stock photos.
- **Layout at 390** (800 = H2 110 + 4 rows x 160 + link 50):
  - A left rail of 32 px: a 2 px teal line with 12 px arch nodes.
  - Content column 302: a 56x64 arch thumbnail slot on the left, then the range in `t-body` 600 indigo, the title in `t-h3`, one body line, and "Led by Dr. …" in `t-small` with a link.
  - Row gap 24.
- **Layout at 1280** (560): the line runs horizontally across 4 columns, 272 wide each; the nodes sit on the line; the thumbnails are 72x84 above the text.
- **Motion:** #7.
- **Data:** `ageBands`.
- **Files:** `Services.astro`, renamed to `CareByAge.astro`.

### 4.9 Doctors (cream ground, white cards)
- **From the base site:** a labelled credential grid that reads as checkable (`desktop/sections/06`).
- **Improved:**
  - Person first: the face, who they see, and the days at each office (upgrade 6).
  - Credentials fold away on phone.
  - No "25+ years" panel, no red panel, no pill tags.
  - Their card is 2,490 px on phone; ours is 470 per doctor.
- **Layout at 390** (1,100 = H2 110 + 2 x 470 + gap 24 + 26). White card, `r-card`, `shadow-lift`, padding 20.
  - Top row: arch portrait 96x120 (small; the large faces stay in the hero, round-3 #2), then the name (`t-h3`), role and ages.
  - "Where and when": 2 rows 44 tall, office and days (`FactSlot doctor.schedule`).
  - Blurb: 3 lines.
  - `<details>` summary "Training and licence" (48 tall); open, it shows a 5-row `dl` of credential slots.
  - Text link "About Dr. Mehta" (44).
- **Layout at 1280** (600): two 568-wide cards; portrait 140x175; credentials always visible as a 2-column `dl` (no details).
- **Files:** `DoctorCards.astro`; `practice.ts` (new `schedule: { office: Office['slug']; days: Fact<string> }[]`).

### 4.10 Inside each office (white)
- **From the base site:** real rooms grouped under each office's name and address (`desktop/sections/12`).
- **Improved:**
  - Three captioned photos per office, not six: entrance large, two small.
  - Captions sit below the photo, not over it.
  - The full set lives on the location page.
- **Layout at 390** (760): H2, then per office a `t-h3` name, one arch 350x220, and two `r-thumb` photos 167x140, each with a `t-caption` below.
- **Layout at 1280** (540): the two offices side by side; per office, a large 568x300 and two small 272x170.
- **Empty state:** dashed `PhotoSlot` "Photo: reception (to come)".
- **Files:** `Inside.astro`, `PhotoSlot.astro`.

### 4.11 Reviews (cream, compact)
- **From the base site:** "Families who trust us", a rating line, real quotes, a link to Google (`desktop/sections/13`).
- **Improved:**
  - No quotes until there is permission and a source (round-3 #4).
  - No stars and no "verified".
  - A per-office dated line with a 44 px link to read every review on Google.
- **Layout at 390** (420): H2 "What families say"; a white panel with 2 rows x 88 (office, rating slot, "Read reviews on Google" link with the slot `googleProfile`); a `t-small` note: "We link to Google so you can read every review."
- **Layout at 1280** (300): H2 in columns 1-4, rows in columns 6-12.
- No review schema.

### 4.12 FAQ (white)
- **From the base site:** "Questions, answered", bordered rows with plus icons and matching FAQ schema (`desktop/sections/14`).
- **Improved:**
  - Left-aligned, not centred.
  - Adds the questions they missed: how to book, after-hours, records, new patients, language help.
  - Every answer that needs a fact uses a slot (no invented policy).
- **Layout at 390** (620): H2; 7 `details` items. The summary row is 60 tall (Fraunces 560 at 19 px, plus/minus icon 20 px); `b-hair` between items; the answer is padded 0 0 16.
- **Layout at 1280** (500): H2 in columns 1-4; list in columns 6-12 (measure about 64ch).
- **Motion:** #6.
- **Files:** `Faq.astro`.

### 4.13 Request (indigo; the last filled action)
- **From the base site:** "Plan your visit", a dark closing band (`desktop/sections/16`).
- **Improved:** it adds a contact-only callback request beside the phone numbers.
- **Layout at 390** (980):
  - H2, white: "Request a visit".
  - Lead in `on-dark`: "Leave your name and number. We'll call you back during office hours." (decision #2).
  - White form panel (`r-card`, padding 20) with these fields:
    - Name (`autocomplete=name`).
    - Phone (`type=tel autocomplete=tel`, one input; U16.8).
    - Office: 2 radios, 48 tall each.
    - Best time: 3 radios (Morning, Afternoon, Either), 48 tall each.
  - Field style: label `t-body` 600 indigo; input 52 tall, `r-field`, `b-control`; 16 px between fields.
  - Errors: `state-error` text with an icon and words.
  - Notice in `t-small`: "Please do not include symptoms or health details."
  - Demo box: "Demo: this form does not send."
  - Submit: teal-deep, 52 tall, full width, "Send request".
  - Below the panel: "Prefer to call?" with both numbers as aqua-underlined links.
- **Layout at 1280** (600): columns 1-5 hold the heading, lead and numbers; columns 7-12 hold the form.
- **Fields:** NO field for symptoms, DOB or insurance; the fields do not change.
- **Routing:** hipaa-compliance, then healthcare-phi-compliance, then security-review, before any edit.
- **Files:** `Request.astro`, `RequestForm.astro`.

### 4.14 Footer (indigo)
- **From the base site:** a dark 4-column footer with the logo, both addresses and phones, and site links.
- **Improved:**
  - Hours summary per office.
  - Legal links marked DRAFT (theirs had none).
  - Language-help line.
  - Links 44 tall (theirs were 22).
- **Layout at 390** (900):
  - Logo and tagline.
  - Two office blocks on `indigo-soft`, padding 16, `r-card`: name, address, phone link, grouped hours.
  - `#site-nav` list.
  - Legal list: Privacy, Notice of privacy practices, Terms, Accessibility, Nondiscrimination, each "(draft)".
  - Language-help line with the slot.
  - "In an emergency, call 911."
  - © line.
  - Bottom padding 104.
- **Layout at 1280** (420): 4 columns, 3/3/3/3.
- **Files:** `Footer.astro` (reads `legalPages`).

### 4.15 Sticky bar (phone)
- **From the base site:** an always-visible bottom bar with call and visit.
- **Improved:**
  - It appears only after the hero button leaves the view, so the fold has one filled action.
  - It hides while the request band is in view.
  - Request is filled, Call is outlined (decision #1).
- **Layout at 390:** 72 tall plus the safe area, white, `shadow-lift`, padding 12/20. "Request a visit" in teal-deep (206x48); "Call" outline (128x48), which opens the call dialog.
- **Motion:** #5.
- **No JS:** the bar is shown after the hero via a sticky wrapper.
- **Files:** `StickyBar.astro`.

### 4.16 Call dialog
- **From the base site:** "Call which office?" with two big buttons (`phone/sections/19`).
- **Improved:**
  - A `<dialog>` that closes on Escape and on a backdrop click.
  - Each row shows the open status.
  - The rows are not two filled buttons (one filled action).
- **Layout at 390:** a bottom sheet, `r-dialog`, padding 24/20 plus the safe area.
  - Title: `t-h3` "Call which office?"
  - Two `tel:` rows, 72 tall, white with `b-hair`: name, status, number in teal-deep `t-num`.
  - "Cancel" text button, 48 tall.
- **Desktop:** centred, 440 wide. The numbers are shown as text, because desktops often cannot dial.
- **Motion:** #4.
- **QA:** Escape closes it (existing check).
- **Files:** `CallDialog.astro`.

## 5. Build order (each task is one PR-sized step and ends with the CLAUDE.md Definition of done)
| # | Task | Skills (routing) | Acceptance |
|---|---|---|---|
| 1 | Tokens in `global.css`: mist, slot, slot-ink, state-open(-dark), state-error, radius, shadow, motion, type clamps. Remove lavender from Home | design-system, accessibility | `npm run check`; every pair in 1.1 rechecked; no visual change beyond FactSlot |
| 2 | `practice.ts`: googleRating, insurance object, doctor schedule Facts | design-system | builds; slots render |
| 3 | Header, utility row, menu dialog | frontend-design-direction, then design-system, then make-interfaces-feel-better; accessibility; click-path-audit | 390 and 1280 shots; Escape closes; targets >= 44; axe 0 |
| 4 | Hero with office numbers | design trio; accessibility | 390x844 fold shows H1, gold button, both numbers and portrait tops; one filled action |
| 5 | Fact row | design trio | 2x2 / 1x4; slots labelled; no stars |
| 6 | Visits + Sick today | design trio; click-path-audit | status correct for a fixed test date; tel links |
| 7 | Insurance moved to 3rd | design trio | order matches section 3; no plan claim without a date |
| 8 | Offices with grouped hours | design trio | today row marked; band <= 1,550 px at 390 |
| 9 | Care by age + signature line | design trio; motion-foundations | reduced motion shows the full line; works with no JS |
| 10 | Doctors, person-first | design trio; accessibility | details works by keyboard; band <= 1,150 px |
| 11 | Inside, Reviews | design trio | slots named; no review markup |
| 12 | FAQ | design trio; motion-foundations | no height animation; reduced motion instant |
| 13 | Request restyle (fields unchanged) | hipaa-compliance, then healthcare-phi-compliance, then security-review; then the design trio | still exactly name, phone, office, best time; autocomplete set |
| 14 | Footer, sticky bar, call dialog | design trio; accessibility; click-path-audit | the bar is hidden over the hero and the request band; dialog Escape |
| 15 | Full-page pass | verification-loop, then code-reviewer, then browser-qa (`qa-pages.mjs`) | 390 height < 10,000; Gate 9 items 2-15 yes; three renders pass (normal, reduced motion, no JS); LOG line; PR |
Every task: 390 then 1280 screenshots to `workspace/04-logs/home-demo/`, axe through `qa-pages`, and `npm run check`.

## 6. Gate 9 (items 2-15)
| Item | How this spec meets it |
|---|---|
| 2 | Stand-in people are labelled "Sample name and photo". |
| 3 | Every slot says what it needs. |
| 4 | The fold has offer, place and one filled action; the sticky bar waits until the hero button scrolls away. |
| 5 | The H1 is plain: the service and the places. |
| 6 | The order follows the visitor's questions: who and where, insurance, which office, what age, which doctor, the rooms, proof, questions, act. There is no centred band. |
| 7 | Every neighbour differs: dl, rows, panel and list, cards, timeline, cards, gallery, rows, accordion, form. |
| 8 | Fraunces versus Figtree, with steps of 40, 30, 22 and 17. |
| 9 | Teal-deep and gold appear only on actions. The teal line is a brand graphic (U12.4). Headings never use an accent colour. |
| 10 | No gradients; the hero is flat indigo. |
| 11 | No eyebrow labels. |
| 12 | No text sits over a photo. |
| 13 | Radius and shadow differ by role (see 1.5). |
| 14 | One icon set with a 2 px stroke. |
| 15 | The arch and the age line make the page recognisably ours. |

## 7. Open questions
1. The owner calls the base site's light look the favourite, but the accepted colour decision keeps an indigo hero. Should the indigo hero stay, as this spec assumes, or should we test a light hero (cream, with the teal-deep button)? A light hero would change the hero and the sticky-bar colours only.
2. On phone the header is not sticky and the sticky bar carries the actions. Is that OK?
3. Should we ask the client now for each doctor's days at each office (the new schedule Fact)?
4. Should the fact row show a Google rating per office, as specced, or one combined line? A combined line needs a single Google profile, and the base site's mixed profiles warn against that.
