# Home page design specification (build-ready), 2026-10-31

Author: design pass (skills: frontend-design-direction, design-system, make-interfaces-feel-better, accessibility, motion-foundations, principles translated to Astro + CSS).
Status: SPEC ONLY. Nothing built. Owner approves before task 1.
Inputs: base site notes and captures (`01-research/sites/familyfirstmedicalny/`), `competitor-teardown-2026-10-31.md`, `premium-upgrade-plan-2026-10-31.md` (+ breakdowns A/B, benchmark), all of `03-decisions/`, slop test (Gate 9), U10/U11/U12/U14/U16, current code and `H8-phone-full.png` (11,581 px at 390).

## 0. Direction in one paragraph
Take from the base site what made it the owner's favourite: a light, premium, photo-led page; a big serif headline; real faces in the first screen; proof and per-office detail high; complete hours; one call-led action everywhere. Improve on it where it is weak: honest per-office hours (no "Open 7 Days"), insurance answered in the first two screens, a contact-only request path besides the phone, 44 px targets, AA contrast, a dialog that closes on Escape, a page about 40% shorter (base 16,260 px; ours today 11,581 px; target 9,300 px). Never clone: no red, no cut-out doctors on a lobby photo, no glass cards, no copied wording, no chip cloud. Our own device stays the arch. Only the hero and the request band stay indigo; everything between them goes light (cream, white, a new warm ivory and a pale teal mist), which is the base site's "light premium" feel in our palette.

---

## 1. Design tokens

### 1.1 Colour (existing tokens kept; 4 new tokens marked NEW)
All ratios computed with the WCAG 2.x formula (script in this session, 2026-10-31).

| Token | Hex | Role | Where used | Pairs (ratio, verdict) |
|---|---|---|---|---|
| `indigo` | #17123a | headings, dark grounds | H1-H3 on light; hero, request band, footer ground | on cream 16.57, on white 17.74, on ivory ~16, on mist 15.49: AAA |
| `indigo-soft` | #231c52 | raised surface on indigo | hero photo frames' ground, footer cards | `on-dark` on it 9.19 AAA |
| `teal` | #0e8a8a | brand decoration only | arch outline strokes, care-by-age line, icons on light at >= 24 px stroke 2 (non-text 3:1 min: passes) | never small text |
| `teal-deep` | #0b6f6f | THE filled action on light grounds; text links on light | buttons, link text, "today" marker | white on it 5.97 AA; as text on cream 5.58, white 5.97, ivory 5.29, mist 5.21, lavender 5.23: AA |
| `teal-darker` | #0a5656 | hover/pressed of teal-deep | button hover, link hover | white on it 8.47; as text on mist 7.40 |
| `gold` | #d9a02c | filled action on indigo; arch hairline | gold button (indigo text), 2 px arch line under H1 | indigo on gold 7.61 AA; gold on cream 2.18: FORBIDDEN as text |
| `gold-light` | #e8b54a | hover/pressed of gold | | indigo on it 9.41 |
| `cream` | #faf7ef | page ground | default section ground | |
| `white` | #ffffff | card ground | office cards, doctor cards, FAQ panel, form fields | |
| `lavender` | #f2eefc | quiet alternate ground (kept, used once: FAQ) | FAQ | text on it 9.47; muted on it 5.92 (AA, but below our 6.3 house floor: use `text` for small copy there) |
| `ivory` NEW | #f4f1e8 | warm alternate ground (base site's light grey band, warmed) | Visits/Sick today, Care by age, Reviews | text 9.56, muted 5.98 (small copy uses `text`), teal-deep 5.29 |
| `mist` NEW | #e6f2f1 | pale teal tint: "today" row, open-now pill ground, insurance highlight panel | hours today row, Medicaid/CHP panel | indigo 15.49, teal-darker 7.40, teal-deep 5.21 |
| `slot` NEW | #fff4dc | fact-slot ground (pale gold, reads "pending", not error) | `FactSlot` | indigo 16.24; slot ink 4.97 |
| `slot-ink` NEW | #9a5b00 | fact-slot bracket text | `FactSlot` label only | on slot 4.97 AA |
| `text` | #3d3a58 | body | everywhere on light | cream 10.09, white 10.80 |
| `muted` | #5b5878 | secondary on cream/white only | captions, meta | cream 6.30, white 6.75 |
| `line` | #e3ddf0 | hairlines (decorative, not a boundary that conveys state) | dividers, card borders | 1.24 on cream: decorative only; form fields use `line-strong` |
| `line-strong` NEW-ish (reuse `muted`) | #5b5878 | input borders, focus-independent control boundary | form inputs, FAQ summary rule | 6.30 >= 3:1 non-text |
| `aqua` | #5fc4c4 | accent on indigo only | focus ring on dark, underline under hero call link, open dot on dark | on indigo 8.60 |
| `on-dark` | #c9c4e3 | body on indigo | hero, request, footer copy | on indigo 10.55, on indigo-soft 9.19 |

Open/closed status: open dot `teal-deep` on light / `aqua` on dark, plus the WORD "Open now" / "Closed now" (colour never alone). Closed dot is a hollow 8 px ring in `muted`.

### 1.2 Type scale (Fraunces Variable display, Figtree Variable sans; html 17 px = 1 rem)
| Style | Font, weight | Phone size / LH | Desktop size / LH | Tracking | Max width |
|---|---|---|---|---|---|
| display-1 (H1) | Fraunces 560, opsz auto, SOFT 50 | 40 px / 1.06 | 60 px / 1.04 | -0.015em | 16ch |
| display-2 (H2) | Fraunces 560 | 30 px / 1.12 | 42 px / 1.08 | -0.01em | 20ch |
| title (H3, card) | Fraunces 600 | 22 px / 1.2 | 24 px / 1.2 | -0.005em | 24ch |
| lead | Figtree 450 | 18 px / 1.5 | 20 px / 1.5 | 0 | 36ch phone, 44ch desktop |
| body | Figtree 400 | 17 px / 1.6 | 17 px / 1.65 | 0 | 62ch |
| body-strong | Figtree 600 | 17 / 1.5 | 17 / 1.5 | 0 | |
| small | Figtree 450 | 15 px / 1.5 | 15 px / 1.5 | 0.003em | 52ch |
| caption (min) | Figtree 500 | 14 px / 1.45 | 14 px / 1.45 | 0.005em | 44ch |
| number (hours, phones) | Figtree 600, `tabular-nums` | 17 px / 1.4 | 17 px | 0 | |
| button-lg | Figtree 650 | 18 px / 1 | 18 px | 0.005em | |
| button | Figtree 600 | 17 px / 1 | 17 px | 0 | |
No text under 14 px. No uppercase tracked labels (Gate 9 item 11). Italic Fraunces allowed once: the H1's place names (our improvement on the base's red italic line, in `indigo` on dark it reads white italic; no colour change, so item 9 holds).

### 1.3 Spacing (4 px base)
`s1 4 · s2 8 · s3 12 · s4 16 · s5 20 · s6 24 · s8 32 · s10 40 · s12 48 · s16 64 · s20 80 · s24 96 · s30 120`.
Rule: inside a card <= s6; card to card s4 (phone) / s6 (desktop); heading to content s6 phone / s8 desktop; section to section = section padding.

### 1.4 Section padding
| Kind | Phone (top/bottom) | Desktop |
|---|---|---|
| standard | 64 / 64 | 112 / 112 |
| compact (fact row, reviews) | 40 / 40 | 64 / 64 |
| hero | 32 / 40 | 72 / 88 |
| footer | 48 / 104 (clears sticky bar) | 80 / 48 |
Side gutter: 20 px phone, 32 px tablet, auto (container) desktop.

### 1.5 Radius, shadow, border (differ by role, Gate 9 item 13)
| Token | Value | Role |
|---|---|---|
| `r-control` | 999px | buttons, pills |
| `r-field` | 12 px | inputs, select |
| `r-card` | 20 px | cards, panels |
| `r-media` | arch: 999px 999px 20px 20px | photos only |
| `r-dialog` | 28px 28px 0 0 phone sheet; 28 px desktop | dialogs |
| `shadow-none` | none | default on light (editorial: hairlines instead) |
| `shadow-lift` | 0 1px 2px rgb(23 18 58/.06), 0 12px 32px -18px rgb(23 18 58/.28) | doctor cards, office cards on hover only, sticky bar |
| `shadow-dialog` | 0 24px 64px -24px rgb(23 18 58/.45) | dialogs |
| `b-hair` | 1 px `line` | card edges, list rows |
| `b-control` | 1.5 px `muted` | inputs, secondary button |
| `b-arch` | 2 px `gold` (on dark) / 2 px `teal` (on light) | arch outlines, H1 rule |

### 1.6 Motion tokens (CSS only; `transform`/`opacity` only; reduced motion = no movement, final state shown)
| Token | Duration | Easing | Use |
|---|---|---|---|
| `m-press` | 150 ms | ease-out | `.btn:active` scale .97 |
| `m-state` | 220 ms | cubic-bezier(.2,.8,.2,1) | hover colour, FAQ open, today tint |
| `m-enter` | 260 ms | cubic-bezier(.2,.8,.2,1) | dialog fade + 8 px rise (`@starting-style`) |
| `m-sheet` | 300 ms | cubic-bezier(.32,.72,0,1) | sticky bar slide-in 100% to 0 |
| `m-signature` | 480 ms | cubic-bezier(.65,0,.35,1) | care-by-age line `scaleY(0 to 1)` |
| `m-nudge` | 180 ms | ease-out | arrow `translateX(3px)` on hover/focus |
Never animated: H1, gold button, hero photos, form. Content never starts hidden.

## 2. Grid
| Breakpoint | Container | Columns | Gutter (col gap) | Side margin |
|---|---|---|---|---|
| 390 (base) | 350 px | 4 | 16 px | 20 px |
| 768 (md) | 704 px | 8 | 24 px | 32 px |
| 1280 (lg) | 1160 px | 12 (col 74.67 px) | 24 px | 60 px |
Reading measure capped by `ch` widths above regardless of columns. Full-bleed grounds; content always in the container.

## 3. Page map (final order; heights are targets, +-8%)
| # | Section | Ground | 390 h (px) | 1280 h (px) |
|---|---|---|---|---|
| 0 | Utility row (desktop only) | indigo-soft | 0 | 44 |
| 1 | Header | white, hairline below | 64 | 80 |
| 2 | Hero | indigo | 700 | 640 |
| 3 | Fact row (attached to hero, light) | white | 300 | 140 |
| 4 | Visits + Sick today | ivory | 560 | 420 |
| 5 | Insurance | cream | 640 | 460 |
| 6 | Offices | cream to white cards | 1,500 | 760 |
| 7 | Care by age | ivory | 760 | 560 |
| 8 | Doctors | cream | 1,100 | 620 |
| 9 | Inside each office | white | 760 | 560 |
| 10 | Reviews | ivory | 420 | 320 |
| 11 | FAQ | lavender | 620 | 520 |
| 12 | Request | indigo | 980 | 620 |
| 13 | Footer | indigo (soft rule above) | 900 | 420 |
| | **Total** | | **9,304** | **6,164** |
Sticky bar (phone) and dialogs are overlays (0). Order change vs today: insurance from 8th to 3rd content section (upgrade 4); offices before care by age kept; "Visits" and "Sick today" merge in one band. Light/dark rhythm: dark, light x9, dark, dark (footer separated by a 1 px `indigo-soft` rule and a different composition).

---

## 4. Sections

Shared rules: H2 left-aligned; one filled action per screen (the gold hero button, the teal-deep request submit; elsewhere actions are text links or outline buttons); every phone/address/hour reads from `practice.ts`; every unconfirmed fact renders `FactSlot` (`slot` ground, `slot-ink` text, "[Name: to confirm]"); no section is a row of equal icon cards.

### 4.0 Utility row (desktop >= 1024 only, non-sticky)
- Purpose: phone numbers and open status in the first glance on desktop (base had "Open 7 Days" pill + language; we make it true per office).
- Layout 1280: height 44, container 1160, `indigo-soft` ground, `small` 15 px `on-dark`. Left: "Elmhurst  (718) 555-0142 · Open now until 6 PM" then 32 px gap then "Hicksville  (516) 555-0188 · Closed now, opens Mon 10 AM". Each number is a `tel:` link, each link `min-block-size: 44px`. Right: "Language help" link to `#faq-language` (no toggle; languages are a Fact).
- Files: `Header.astro` (new `UtilityRow` partial), `OpenNow.astro`.
- States: no-JS shows hours summary ("Mon-Fri 9-6") instead of live status; JS (external module, CSP-safe) swaps in status.
- A11y: `<nav aria-label="Call an office">`; aqua dot + word. Gate 9: no pill, no tracked caps.

### 4.1 Header
- Base: logo + hamburger 84 px, sticky. Improve: 64 px, not sticky on phone (the sticky bar carries the action), sticky on desktop at 80 px with a call link, never a second filled button.
- 390: height 64; logo lockup left (arch mark 28x32 + "AIMSS Family Health" Fraunces 600 19 px, `indigo`); right: "Menu" button 44x44 min (icon 22 px + visible word "Menu" 15 px), outline `b-hair`, `r-control`, 16 px horizontal padding (=96x44).
- 1280: height 80, sticky, white 96% + hairline. Logo 36 px mark + 22 px name. Nav (Figtree 600 16 px, targets 44 tall, gap 28): Offices, Care by age, Doctors, Insurance, Questions. Right: ONLY an outline button "Call an office", 44 tall, `b-control` border, teal-deep text, opens the call dialog (the filled action stays in the hero).
- States: nav link hover underline 2 px teal-deep offset 6; current anchor `aria-current` underline persists.
- Files: `Header.astro`. A11y: skip link first focusable, visible on focus, 44 tall.

### 4.2 Menu dialog (phone, upgrade 7)
- Base: full-screen anchor menu with both phones; language buttons 34 px. Improve: native `<dialog>` full height, Escape closes, focus returns to Menu button, 56 px rows.
- 390: 390x100dvh, white. Top bar 64 (logo + "Close" 44x44). List of 6 links (Offices, Care by age, Doctors, Insurance, Questions, Request a visit), each row 56 tall, Fraunces 22 px, hairline between, 20 px gutter (6x56 = 336). Then block "Call an office" (24 top): two rows 72 tall: office name body-strong + number `number` style teal-deep, open status caption; full row is the `tel:` link. Then "Language help" small paragraph + `FactSlot languages` (Fact `practice.languages`). Bottom safe-area padding 24.
- Motion: `m-enter` fade + 8 px rise; reduced: instant.
- No-JS: Menu is an `<a href="#site-nav">` to the footer nav (exists in footer). Files: `Header.astro`, new `MenuDialog.astro`, external JS module.

### 4.3 Hero
- Base: big serif H1 with red italic line, both doctors as cut-outs over a lobby photo with credential cards; 1,120 px tall on phone, buttons below fold. Improve: indigo ground, H1 + gold button + both office numbers inside 390x844 fold; faces as two arch portraits (not cut-outs), person-first captions without unconfirmed credentials.
- 390 (height 700 incl. 32/40 padding; container 350):
  | Element | Spec |
  |---|---|
  | H1 | display-1 40/1.06, white, "Pediatrics and family medicine in *Elmhurst* and *Hicksville*" (places italic), 3-4 lines, ~170 px tall, max 16ch |
  | Gold rule | 48x2 px gold, 16 px below H1, left |
  | Lead | 18/1.5 `on-dark`, 16 px below, max 34ch, 2 lines (~54 px): "One practice for newborns, children, teens and adults." |
  | Gold button | 24 px below; full width 350 x 56, `r-control`, indigo text button-lg "Request a visit" (to `#request`) |
  | Office numbers (upgrade 1) | 12 px below; 2-column grid 167+16+167, each a `tel:` link 48 tall: line 1 caption `on-dark` "Elmhurst", line 2 `number` white with aqua 2 px underline. Not filled (one filled action) |
  | Portraits | 28 px below; 2 columns 167 px, arch ratio 4:5 = 167x209; frame 2 px `gold` outline offset 4; caption below each 8 px: name title 18 px white, role small `on-dark`, "Sample name and photo" caption when demo (~66 px) |
  Fold check at 844 (minus 64 header): H1 to numbers ends ~ 32+170+18+70+80+60 = 430 px. Portraits start in fold (peek, invites scroll), sticky bar not shown until hero button leaves view.
- 1280 (640 tall; padding 72/88): grid 12 cols, copy cols 1-6 (H1 60 px, 16ch, 3 lines ~190 px; lead 20 px 44ch; button 280x60 inline; numbers inline to the right of the button as two 48-tall links, gap 32), portraits cols 8-12: two arches 250x312, second offset down 48 px (staggered, improves on the base's even pair).
- Images: AVIF/WebP, `srcset` 167w/334w/250w/500w, `width/height` set, first portrait `fetchpriority=high`, no lazy.
- States: button hover `gold-light`, active `m-press`; number links hover `aqua` text. Focus: aqua ring 3 px offset 3.
- Files: `Hero.astro`. Gate 9: item 4 (one filled action, offer, place), item 2 (stand-ins labelled), item 5 (plain H1).

### 4.4 Fact row (white band attached under the hero)
- Base: 2x2 glass trust cards on blurred photo ("25+ years", "board-certified": unverified). Improve: dated facts as data on white, each a slot until confirmed; insurance first (upgrade 4), Google rating per office (upgrade 5).
- 390 (300 tall, padding 24/24): definition list `<dl>` 2x2 grid, cells 167 wide, min 116 tall, separated by 1 px hairlines (no card boxes). Each cell: `dt` caption muted ("Insurance"); `dd` body-strong indigo value or FactSlot; source/date caption.
  Cells in order: (1) Insurance: "Medicaid and Child Health Plus" + FactSlot `practice.insurance` date. (2) Ages: "Newborns to seniors" (true by design of services). (3) Google rating, Elmhurst: FactSlot `offices[0].googleRating` NEW Fact `{value, count, checkedOn}`. (4) Same for Hicksville. Languages moves to menu/FAQ (space).
- 1280 (140 tall): single row of 4 cells, 290 px each, vertical hairlines.
- Rule: rating shown as "4.9 on Google, 128 reviews, checked 2026-11-02" text only. No stars, no AggregateRating.
- Files: `FactRow.astro`, `practice.ts` (add `googleRating: Fact<{rating:string;count:number}>` per office), `FactSlot.astro` (new slot colours).

### 4.5 Visits + Sick today (ivory)
- Base: none (phone only). Improve: two paths and a same-day answer per office (upgrade 2). Visit picker skipped (owner).
- 390 (560): H2 "What brings you in?" (30 px, 2 lines). Two stacked rows, not cards: each row = arch icon 40x40 (teal stroke 2) left, title 22 px, one line body, text link with arrow (44 tall). Row 1 "Planning a visit" -> "Request a visit" (`#request`). Row 2 "Sick today?" body "Call the office that is open now. In an emergency, call 911." then an office list: two 64-tall rows inside a white panel (`r-card`, `b-hair`, padding 0 16): name body-strong, `OpenNow` status caption, number right-aligned `tel:` link teal-deep. Emergency line uses body-strong, not red.
- 1280 (420): 2 columns 6+6; left "Planning a visit", right "Sick today?" with the panel (width 568, rows 64).
- States: open row first if only one office open (JS sort; no-JS keeps data order). Today closed: caption "Closed today, opens Tue 10 AM".
- Files: `Visits.astro`, `OpenNow.astro`.

### 4.6 Insurance (cream, moved to 3rd)
- Base: chip cloud of plan names + "Verify coverage" (low contrast disclaimer). Improve: answer the low-income family question first, dated list, what we do not take, self-pay.
- 390 (640): H2 "Insurance we take". Highlight panel `mist`, `r-card`, padding 20, ~150 tall: title 22 px "Medicaid and Child Health Plus" + small text "[to confirm]" slot + date. Then "Other plans" list: 2-column list of plan names body 17 px, rows 36 tall, hairline under each (FactSlot when empty: one slot "Plan list from the front desk, with date"). Then two short rows: "Plans we do not take" (FactSlot), "No insurance: self-pay prices" (FactSlot). Closing line small: "Plans change. Call your office to check before your visit." + outline button "Call to check" 44 tall (opens call dialog).
- 1280 (460): cols 1-5 H2 + highlight panel + note; cols 7-12 plan list 3 columns, then the two rows.
- Files: `Insurance.astro`, `practice.ts` (`insurance` becomes `{ public: Fact, plans: Fact<string[]>, notTaken: Fact, selfPay: Fact }`). Gate 9 item 7: list, not chips.

### 4.7 Offices (cream; white cards)
- Base: best block (per-office call + directions + transit). Improve: grouped hours with today marked (upgrade 3), photo arch, access facts, one card height.
- 390 (1,500 = H2 block 110 + 2 cards x 670 + gap 24 + link 50): card white `r-card` `b-hair`, padding 20, width 350.
  | Element | Spec |
  |---|---|
  | Photo | arch 310x180 (ratio 31:18), `PhotoSlot` dashed when empty "Photo: Elmhurst entrance from the street" |
  | Title | 22 px "Elmhurst office", neighbourhood caption, OpenNow pill (`mist`, 28 tall, teal-darker text) |
  | Address | body, 2 lines; "Directions" link (opens maps URL, new tab icon, 44 tall) |
  | Phone | `number` 20 px teal-deep `tel:` 48 tall |
  | Hours | grouped (`weekSummary`): rows 40 tall, `tabular-nums`, day group left, hours right; today's group row `mist` ground + "Today" caption; 3 rows max (~120) |
  | Access | 3 rows 32 tall: label muted, value or FactSlot |
  | Doctors here | caption + 2 names linked |
  | Actions | "Call Elmhurst" outline button full width 48, "Full week and details" text link to `/locations/elmhurst` |
- 1280 (760): two cards side by side 568 wide; photo 528x260; inside: 2 columns (address/phone/actions left 240, hours/access right 264).
- Motion: today row tint fades in once (`m-state`). Files: `Locations.astro`, `OpenNow.astro`.

### 4.8 Care by age (ivory, signature motion)
- Base: 5 stacked life-stage cards that repeat services. Improve: one continuous timeline, which doctor leads each stage, links to services; the line is the design idea (age path = family practice).
- 390 (760 = H2 110 + 4 rows x 150 + link 50): left rail 32 px with a 2 px `teal` line and 12 px arch nodes; content column 302. Row: range caption body-strong `indigo` (teal is only the line), title 22 px, line body, "Led by Dr. ..." small with link. Row gap 24.
- 1280 (560): horizontal: line runs left to right across 4 columns 272 wide, nodes on the line, text below.
- Motion: line `transform: scaleY(0)` to 1 (scaleX on desktop) over `m-signature`, origin top, triggered by `animation-timeline: view()` where supported, else static full line. Rows themselves never hidden. Reduced motion: full line, no animation.
- Data: `ageBands`. Files: `Services.astro` (rename to `CareByAge.astro`).

### 4.9 Doctors (cream, upgrade 6)
- Base: very tall cards (2,490 px phone) with credentials up front. Improve: person-first card (face, name, who they see, which days at which office), credentials folded on phone.
- 390 (1,100 = H2 110 + 2 x 470 + gap 24 + 26): white card `r-card` `shadow-lift`, padding 20. Top row: arch portrait 96x120 + name 22 px, role body, ages small. Then "Where and when" table: 2 rows 44 tall: office | days (FactSlot `doctor.schedule` NEW per office). Then blurb (3 lines). Then `<details>` "Training and licence" summary 48 tall; open shows 5-row `dl` of credential FactSlots. Then text link "About Dr. Mehta" 44.
- 1280 (620): 2 cards 568 wide; credentials always open (no `details`, `dl` in 2 columns), portrait 140x175.
- Files: `DoctorCards.astro`, `practice.ts` (add `schedule: { office, days: Fact<string> }[]`).

### 4.10 Inside each office (white)
- Base: 12 unlabelled photos. Improve: captioned photos at different sizes, per office (upgrade 9 when real photos come).
- 390 (760): H2 then per office: subtitle 22 px; one large arch 350x220 + two small 167x140 (`r-card`, not arch: arch is reserved for primary photos) each with caption small. 2 x 330 + 100.
- 1280 (560): two offices side by side; each: large 568x300, two small 272x170.
- Empty state: `PhotoSlot` dashed `b-control`, text "Photo: reception (to come)". Files: `Inside.astro`, `PhotoSlot.astro`.

### 4.11 Reviews (ivory, compact)
- Base: "5.0 from 5 verified" + carousel. Improve: no quotes until permission; per-office rating line with date and a link to read on Google; no carousel, no stars.
- 390 (420): H2 "What families say". Two rows (white panel, 2 x 88): office, rating Fact text, "Read reviews on Google" link 44 tall (FactSlot `googleProfile`). Small note: "We link to Google so you read every review, not a chosen few."
- 1280 (320): H2 left cols 1-4, rows right cols 6-12.
- Files: `Reviews.astro`. No review schema.

### 4.12 FAQ (lavender)
- Base: 7 Q&As, schema. Improve: questions the base missed (booking, same-day, after-hours, records, languages, new patients), native `details`.
- 390 (620): H2, 7 items, summary row 60 tall (title 19 px Fraunces 560, plus/minus icon 20 px), `b-hair` between, answer body padding 0 0 16. `#faq-language` id on the language item.
- 1280 (520): H2 cols 1-4 sticky inside section; list cols 6-12.
- Motion: `interpolate-size: allow-keywords`, height + opacity `m-state`; reduced: instant. Answers that need facts use FactSlot (no invented policy). Files: `Faq.astro`.

### 4.13 Request (indigo; second and last filled action)
- Base: none (phone only). Improve: contact-only callback request, clear it does not send yet.
- 390 (980): H2 white "Request a visit", lead on-dark: "Leave your name and number. The office calls you back." Form on a white panel (`r-card`, padding 20): fields Name, Phone, Office (radio pair 2 x 48), Best time (radio 3 x 48: Morning, Afternoon, Either). Field: label body-strong indigo, input 52 tall, `r-field`, `b-control`, 16 px gap. Notice small text: "Do not include symptoms or health details." Demo notice box: "Demo: this form does not send." Submit teal-deep 52 full width "Send request" (only filled action in view). Below panel: "Prefer to call?" + both numbers as aqua-underlined links.
- 1280 (620): cols 1-5 heading, lead, numbers; cols 7-12 form (2 column fields where short).
- NO fields for symptoms, DOB, insurance. Files: `Request.astro`, `RequestForm.astro` (routing: hipaa-compliance, healthcare-phi-compliance, security-review before any change).

### 4.14 Footer (indigo)
- Base: tidy NAP, no legal links, 22 px links. Improve: NAP per office, hours summary, legal DRAFT links, 44 px targets.
- 390 (900): logo + tagline; two office blocks (name, address, phone link, hours summary), nav list (site), legal list (Privacy, Notice of privacy practices, Terms, Accessibility, Nondiscrimination: each labelled DRAFT), "In an emergency, call 911", (c) line. Each link 44 tall. Bottom padding 104 for sticky bar.
- 1280 (420): 4 columns 3/3/3/3. Files: `Footer.astro` (reads `legalPages`).

### 4.15 Sticky bar (phone only)
- Base: visible from first paint, two buttons (one red filled). Improve: appears only after the hero button leaves view (so the fold has one filled action), one filled + one outline.
- 390: height 72 + safe area, white, `shadow-lift`, padding 12 20. Left "Request a visit" teal-deep 48 tall (~206 wide); right "Call" outline 48x128 (opens call dialog). Slide-in `m-sheet`; reduced: appear. Hidden while request section is in view (avoid two filled buttons). No-JS: always visible from below the hero (CSS `position: sticky` in a wrapper after the hero).
- Files: `StickyBar.astro`.

### 4.16 Call dialog
- Base: bottom sheet, 52 px buttons, no Escape. Improve: `<dialog>`, Escape + backdrop close, focus trap native, status per office.
- 390: bottom sheet 390 wide, `r-dialog`, padding 24 20 + safe area. Title 22 px "Call which office?"; two rows 72 tall (name, OpenNow status, number) as `tel:` links in white with `b-hair`; "Cancel" text button 48. Desktop: centred 440 wide; numbers shown as text (desktops cannot dial) with "copy" not needed.
- Motion `m-enter`. Files: `CallDialog.astro`. QA: closes on Escape (existing check).

## 5. Build order (one task per PR-sized step; each ends with the Definition of done)
| # | Task | Skills (CLAUDE.md routing) | Acceptance |
|---|---|---|---|
| 1 | Tokens: add ivory, mist, slot, slot-ink, radius/shadow/motion custom props in `global.css`; type scale utilities | design-system, accessibility | `npm run check`; contrast table rechecked; no visual change outside FactSlot |
| 2 | Data: `googleRating`, insurance object, doctor schedule Facts in `practice.ts` | design-system | builds; slots render |
| 3 | Header + utility row + menu dialog | frontend-design-direction -> design-system -> make-interfaces-feel-better; accessibility; click-path-audit | 390 + 1280 shots; Escape closes menu; targets >= 44; axe 0 |
| 4 | Hero with office numbers | same trio; accessibility | 390 fold shows H1, gold button, both numbers; one filled action; LCP image sized |
| 5 | Fact row | same trio | 2x2 at 390, 1x4 at 1280; no stars; slots labelled |
| 6 | Visits + Sick today | same trio; click-path-audit | open status correct for a test date; tel links |
| 7 | Insurance moved to 3rd | same trio | order matches map; mist panel contrast |
| 8 | Offices grouped hours | same trio | today row marked; office band <= 1,550 px at 390 |
| 9 | Care by age + signature line | same trio, motion-foundations | reduced motion shows full line; no hidden content |
| 10 | Doctors person-first | same trio, accessibility | details opens by keyboard; <= 1,150 px |
| 11 | Inside, Reviews | same trio | slots named; no review markup |
| 12 | FAQ | same trio, motion-foundations | details animates; reduced instant |
| 13 | Request band restyle (no field change) | hipaa-compliance -> healthcare-phi-compliance -> security-review, then design trio | fields unchanged: name, phone, office, best time |
| 14 | Footer, sticky bar, call dialog | design trio, accessibility, click-path-audit | sticky bar hidden in hero and request; dialog Escape |
| 15 | Full-page pass | verification-loop -> code-reviewer -> browser-qa (Playwright `qa-pages.mjs`) | total 390 height < 10,000; Gate 9 items 2-15 yes; LOG line; PR |
Every task: screenshot at 390 then 1280 to `workspace/04-logs/home-demo/`, axe via qa-pages, `npm run check`.

## 6. Gate 9 notes (items 2-15)
2 stand-ins labelled "Sample name and photo"; 3 every slot named; 4 one filled action in the fold, sticky bar delayed; 5 plain H1; 6 order follows the visitor's questions (who/where, insurance, which office, which doctor), one centred moment none; 7 each neighbour differs (dl, rows, list, cards, timeline, cards, gallery, rows, accordion, form); 8 Fraunces vs Figtree clear steps 40/30/22/17; 9 teal-deep and gold only on actions, teal line in care by age is the pinned brand device (arch/line), no teal headings; 10 no gradients; 11 no eyebrows; 12 text never over photos; 13 radius/shadow by role; 14 one icon set, 2 px stroke; 15 the arch + age line are ours.

## 7. Open questions (need an owner decision)
1. Header on phone: non-sticky (spec) with the sticky bar carrying actions, or keep a sticky header too? (Recommended: non-sticky.)
2. Utility row "Language help": link to FAQ only until languages are confirmed, OK?
3. Doctor schedule per office (days) is a new client fact: ask the client now?
4. Google rating cell: show both offices in the fact row (spec) or one combined line? Combined would need one GBP, which the base site's mixed profiles warn against.
5. New tokens ivory and mist: approve them, or stay with cream/lavender only (lavender reads cooler than the base site)?
