# Plan: nav and hero "same like sample" (2026-11-02)

Branch: `feat/nav-hero-like-sample` (from main `1d27c8a`). Nothing is built yet; this plan comes first.
Request chain: the boss told the user "work on nav and hero, same like sample"; the boss will check with the client (owner) and relay feedback. Sample = familyfirstmedicalny.com.
Rule: copy the STRUCTURE (what is in the nav, order, hero layout), not their words, images, logo or colours. Our tokens and red lines stay.

## 1. What the sample does (from the saved capture 2026-10-30; live re-check pending, see section 6)

Nav, desktop:
- Sticky header with the logo lock-up (logo + "Family Medicine & Pediatrics" tagline), blurred white background, hairline border.
- Links: Our Doctors, Services, All Ages, Locations, Insurance, FAQ (6).
- Right side: filled button "Call to Make an Appt" (opens a call sheet that lists both offices), ghost button "Visit", hamburger on small screens.
- Language toggle EN / 中文 lives in the mobile panel.

Nav, phone: hamburger opens a right panel: the links (plus "IV & Wellness"), language toggle, one call button per office, "Visit".

Hero:
- Two-column. Left: two small pills (a "personalized care for all ages" pill, an "accepting new patients" badge), H1 "Family medicine & pediatrics, all in one place." in three lines, a lead paragraph, two buttons (filled call, ghost "Visit Our Locations").
- Right: a white card with the two doctor portraits (cut-out) and caption bars.
- Background: three office photos behind a white wash, only the edges show.

## 2. What we have now

- Header (`src/components/Header.astro`): dark utility row with both phone numbers and open status, a sticky 80 px white bar, 5 anchors (Offices, Care by age, Doctors, Insurance, Questions), outlined "Call an office", phone "Menu" dialog.
- Hero (`src/components/home/Hero.astro`): headline already matches the sample's line (same headline idea), doctors in arch frames, 4 benefit chips, "Request a visit" + "Offices", live colour field on wide desktop.

## 3. Gap and decision per item

| Item | Sample | Ours now | Plan | Red line check |
|---|---|---|---|---|
| Nav labels | Our Doctors, Services, All Ages, Locations, Insurance, FAQ | Offices, Care by age, Doctors, Insurance, Questions | Re-order to sample order: Doctors, Services, All Ages (our "Care by age"), Locations, Insurance, FAQ. Services anchor exists (round 12). | ok |
| Nav on inner pages | anchors only (single page) | `/#anchor` links | Keep `/#anchor`; add real pages later (service pages, New patients) as dropdown children. | ok |
| Primary button | "Call to Make an Appt" filled, in the header | outlined "Call an office" | Make the header button filled and open our existing `CallDialog` (both offices). The hero then keeps a second, quieter action. See Q2. | one filled action per screen rule: decide where it lives |
| "Visit" button | ghost "Visit" | none | Add ghost "Visit" linking to `#offices`. | ok |
| Language | EN/中文 toggle | "Language help" link | Out of scope for now (client has not confirmed languages). Keep the link. | no invented languages |
| Dropdowns | none | none | Optional: Services and New patients dropdown once those pages exist (next branch). | n/a |
| Hero pills | "Personalized care for all ages", "Accepting new patients" | 4 benefit chips | Swap chips for ONE true pill line ("Care for every age") and NO "accepting new patients" until the client confirms and dates it. | RED LINE: no "accepting new patients", no "board-certified" |
| Hero H1 | 3 lines, accent on "one place" | 2 lines, italic accent | Match the 3-line break and the underline accent on "one place". | ok |
| Hero lead | long, claims board certification | one short line | Keep ours; no credentials. | RED LINE |
| Hero buttons | filled call + ghost locations | "Request a visit" + "Offices" | Filled "Call to make an appointment" (opens CallDialog) + ghost "Visit our offices". Request-a-visit form stays one scroll below. See Q2. | form contacts only |
| Doctors | one white card, cut-out portraits, caption bars | two arch portraits, name cards | Put both doctors in one card like the sample, keep the arch frame. Needs real cut-out photos, which we do not have yet (photo map). | no credentials in captions |
| Background | three office photos behind white wash | one CSS "reception" backdrop + live field | Keep until real photos arrive; note in photo map. | ok |
| Open-now status | none in header | dark utility row | Keep our utility row (it is better than the sample's). | hours from practice.ts only |

## 4. Steps (small, each reviewed)

1. Preview first (owner rule): rough mock screenshots of the new header + hero at 1440 px and 390 px, shown to the user before code.
2. Header: reorder links, add filled call button + ghost Visit, keep the utility row and the phone dialog. Add the phone panel items (one call row per office).
3. Hero: 3-line H1, one pill, filled + ghost buttons, one doctor card. Keep the live field and motion pause.
4. Verify with motion ON at 390 and 1440 (`node workspace/tools/qa-pages.mjs`), no overflow, tap targets 44 px, Escape closes the dialog.
5. `npm run check`, code-reviewer on the diff, red-line pass, LOG.md line, PR (not merged until the user says).

## 5. Open questions for the user (answer before step 2)

- Q1. Services in the nav: link to the Home `#services` section for now (pages come in the next branch)? Default: yes.
- Q2. Which action is the single filled button in the header: "Call to make an appointment" (like the sample) or our "Request a visit"? Default: call (the sample does it, and we have the dialog).
- Q3. Do the portal, video visits, online booking and bill-pay items wait for the client answer (the boss is asking)? Default: yes, no nav items for them yet.
- Q4. "Sample" images: do we have the client's real office photos / doctor cut-outs yet? Default: no, keep stand-ins.

## 6. Live re-check (2026-11-02, curl of the live page, static HTML)

The live site matches the 2026-10-30 capture on every point in sections 1 and 3. Extra detail from the live check:
- Dark utility bar above the header (not sticky): both office phones, "Elmhurst, Queens & Hicksville, LI", an "Open 7 Days" pill, EN / 中文 toggle. Ours already has the phones and open status; skip "Open 7 Days" (red line) and the language toggle.
- Nav has NO dropdowns, six plain anchors, so Q1 default (anchors, no dropdowns) fits.
- Phone: hamburger opens a right drawer (min(360px, 90vw)) with the links, a call button per office and "Visit"; plus a fixed bottom bar with "Call to Make an Appt" + "Visit". We already have a bottom sticky bar (Call / Request); relabel to call + Visit to match.
- Hero: one photo under a white gradient (the three-image strip is hidden by CSS), pills, H1 with red italic accent, two buttons, then under the text a portrait card and a 4-item highlight grid ("Board-Certified", "3 Languages", "Most Insurance Plans", "Open 7 Days"). All four are unconfirmed claims for us: use only our true benefit lines.
- A dark trust band sits right below the hero ("25+ Years of Care", "Board-Certified", ...). Ours is the live 3D trust band; keep it, with no invented numbers.
- Floating back-to-top button after scrolling. Optional, low priority.

Plan changes from this: relabel the phone bottom bar (Call to make an appointment + Visit), keep our utility row. Not verified (JS): intro splash (we do not build it, owner decision), scroll reveals, the call sheet's contents.
