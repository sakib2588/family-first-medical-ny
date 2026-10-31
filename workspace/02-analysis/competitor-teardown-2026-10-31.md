# Competitor teardown: familyfirstmedicalny.com Home (2026-10-31)

Owner brief (relayed 2026-10-31): "follow what works and improve upon them"; "create a creative design but follow their style". So we keep their proven **structure and feel**: premium, light, serif + sans, photo-led, dense proof near the top, per-office detail. Each pattern is rebuilt as our own. No cloning of layout, wording, photos or icons (anti-slop guide). No invented claims (CLAUDE.md red lines). Gate 9 still applies.
Evidence: `01-research/sites/familyfirstmedicalny/notes.md`, `phone/sections/`, `desktop/sections/`, owner desktop shots 1-5 (session upload) and six more (relayed, same as `desktop/sections/09-16`), our `04-logs/home-demo/H7-*-full.png`. Prior registers are not repeated. Tell n = anti-slop guide table; G9-n = Gate 9 item; (U) = unverified.

## 1. Their page, section by section (phone order; desktop same order)

| # | Section | Job | Pattern (structure) | Works | Wrong | Evidence |
|---|---|---|---|---|---|---|
| 00 | Intro splash | none | Full-screen overlay | - | Delays LCP; owner banned it | phone/00 |
| 01-02 | Util bar, header | Hours, language, nav | Status pill, language toggle, logo; desktop nav + Call | Language visible | "Open 7 Days" false for Hicksville; 34 px toggles | phone/01-02 |
| 03 | Hero | Who, what, where, act | Serif H1, two doctor cut-outs with name/role cards, 6 icon chips, 2 buttons | Real faces + role in first screen | H1 over photo (tell 3); 2 equal buttons + sticky bar (tell 6); "board-certified" x3 (U) | phone/03, shot 1 |
| 04 | Trust band | Proof at a glance | 4 glass cards on blurred photo | Proof right under hero | "25+ years / since 1998" (tell 10, U); red icons (tell 20); repeats chips | phone/04, shot 2 |
| 05 | Welcome | Why this practice | Photo mosaic + 5 equal cards with app icons | One concrete differentiator | Tells 11, 14, 20, 21; generated-looking photos (2, 12) | phone/05, shot 3 |
| 06 | Doctors | Who, how qualified | Coloured portrait panel + stat + pill; credential grid + care tags | Named fields read as checkable | Tells 11, 20; 2,490 px on phone; all (U); no licence link | phone/06, shot 4 |
| 07 | Promise band | Mood | Centred italic quote over office photo + 3 claims | Pause | Unsourced quote; centred (18); claims repeated | phone/07, shot 5 |
| 08 | Services | Need covered? | Filter tabs + 10 icon cards with kicker | Plain one-liners | Equal icon cards (14); kickers (11); dead-end links | phone/08 |
| 09 | Ages | Fit per family member | 5 rows: thumbnail, coloured age range, colour rule, title + line; faded photo backdrop | Clearest way to say "whole family"; rows scan fast | 5 accent colours (20); busy backdrop; duplicates services | desktop/09 |
| 10 | IV therapy | Upsell | 5 drip cards, dashed disclosure note, branded carousel | **Honest "not billed to insurance" note** | Efficacy claims; foreign brand | phone/10 |
| 11 | Locations | Which office, how to get there | Storefront photo + place pill; address, phone, hours line, transit, parking; filled Call + outlined Directions | Per-office call, real storefront, transit | Hours in one line; "Open 7 days"; transit/parking (U) | phone/11 |
| 12 | Gallery | Recognise the place | 6 captioned photos per office under name + address | Real rooms, grouped by office | About 300 KB each; empty alt on informative photos | desktop/12 |
| 13 | Reviews | Social proof | Rating line, star cards, first name + source, Google link | Real quotes, source linked | "5.0", "verified" (U); rating markup; carousel; 2.96:1 link | phone/13 |
| 14 | FAQ | Objections | Accordion, schema matched | Matches JSON-LD | No booking/after-hours answers | phone/14 |
| 15 | Insurance | Plan taken? | Gradient banner, plan chips, verify pill, disclaimer | Names plans people search for | Undated list (U); "& many more"; tells 9, 20 | desktop/15 |
| 16 | Plan your visit | When, how to book | Dark band: 4 info tiles + both offices' week side by side, today highlighted | Both offices' "when" at one glance | "Walk-ins welcome", "Open 7 days" (U); 12th call button | desktop/16 |
| 17 | Footer | NAP | Dark 4-col, language buttons | NAP present | No legal links; 22 px links | phone/17 |

## 2. What makes their page feel credible and premium (ranked)

1. **Real faces with name and role in the first screen.**
2. **Real rooms, captioned and grouped by office** (gallery, storefront on each office card).
3. **A named credential field per doctor** (school, residency years, board, hospital, licence, languages). Specific fields read as checkable.
4. **Proof density right under the hero**: 4-6 short facts in the first 1.5 phone screens.
5. **Per-office specificity**: own photo, place label, transit and parking line, a call for that office.
6. **Both offices' full week side by side**, today highlighted, closed days stated.
7. **Light, photo-led, serif + sans.** Polish matters less than 1-6: their credibility is specificity; their slop is the decoration.

## 3. Fact-slot rule (every pattern below)

- **Type:** add to `practice.ts` `Fact<T> = { value: T | null; source?: string; checkedOn?: string }` and `practice.demo = true`.
- **Component:** one `FactSlot.astro`. If the value is set, render it ("as of [date]" where the rule needs one). If null on the demo, render muted `[what is needed]` inside the labelled draft (tell 8 fix). If null on the live site, render nothing (U00.10).
- **Photo slots:** use the same `Fact` and render a named empty frame ("[Photo: Elmhurst entrance from the street]"), never stock.

## 4. Our better version of each pattern

| Pattern | User job | Our structure (phone, then desktop) | Component | Fact slots (`practice.ts`) and verification | Gate 9 risk, how avoided |
|---|---|---|---|---|---|
| **Fact row** | "Can they see us?" | Phone: 2-col `dl` on indigo under the doctor arch cards, hairline rows, no icons. Desktop: one 4-up row across the hero foot | `Hero.astro` + new `FactRow.astro` | `doctors[].ages` (exists); `languages: Fact<string[]>` [Languages spoken: to confirm]; `offices[].open` (computed open/closed now); `acceptingNew: Fact<boolean>` [New patients: to confirm, dated], `checkedOn` required, re-checked each review | Tells 10, 14, 20: text only, no years or numbers, no icons |
| **Doctor detail card** | "Who sees my child; are they qualified?" | Phone: white card, small arch portrait (72 px) beside name and role, credential `dl` (muted labels, indigo values), care areas as text, "Check licence" link. Desktop: portrait left, 2-col grid right; same field on the same row for both doctors | New `home/Doctors.astro`; also `doctors/[slug].astro` | `school`, `residency {program, years}`, `board {body, specialty}`, `nyLicense`, `npi`, `hospitals[]`, `languages`, each `Fact` with `source` + `checkedOn`. Placeholder [Board: check ABMS, add date]. Verify licence via NYSED Office of the Professions + NY Physician Profile, board via ABMS/specialty board, NPI via NPPES (medical-wellness overlay). `Person.hasCredential` only when checked | Tells 11, 20, 10: no coloured panel, stat, pill or tracked caps; small portrait so faces do not repeat as a second hero |
| **Care by age** (replaces our two check-lists) | "Do they see my baby / teen / me?" | Rows in age order: arch thumbnail slot, age range in indigo Fraunces, one services line, doctor's name as a link; hairlines, no colour rule. Desktop: two columns (children, adults) | `home/Services.astro` | `serviceGroups` gains `ageBands: { range: Fact<string>, items, photo: Fact }[]`; ranges confirmed by each doctor | Tells 20, 14: one colour, list not cards, no faded backdrop |
| **Why one practice** | "Why bring the whole family here?" | One lead reason (H3, 2 lines, proof line) with arch photo slot, then 2-3 reasons as a hairline list. Desktop 7/5 split | New `home/Reasons.astro` | `reasons: { title, line, proof, checkedOn }[]`, ranked by order. Candidates to ask about, never state: in-house blood draws (CLIA certificate), parent and child in one office, per-office weekend hours | Tells 14, 21, 19: ranked, no icons, proof or cut. **Under 2 confirmed reasons, drop the section** |
| **Office cards** (have; improve) | "Which office; open; how to get there?" | Arch-top entrance photo with a neighbourhood label on a white pill over its bottom edge; address, **phone as visible text**, open-now line, full week with **today's row tinted and bold**, "Getting here" (transit, parking, step-free), doctors here, outlined Call (dials this office) + Directions. Desktop: cards side by side, so the weeks sit side by side | `home/Locations.astro` | `offices[].photo: Fact`; `getting` becomes `transit`, `parking`, `stepFree` as `Fact<string>`, each [to confirm with client]; client confirms in writing | Tells 2, 20: real photo or named slot; today shown by tint + weight, not accent colour; no filled button (one filled per screen) |
| **Inside each office** (gallery) | "What will I walk into?" | Home: 3 captioned slots per office (entrance, reception, exam room), entrance large + 2 small, grouped under office name; no carousel. Full set on `/locations/[slug]`. Desktop: 3-up per office | New `home/Inside.astro`; location pages | `offices[].gallery: { photo: Fact<{src, alt}>, caption }[]`; real photos with consent log (U13); AVIF/WebP, width/height set, lazy | Tells 2, 12: named empty frames until real photos; real alt text on every informative photo |
| **Reviews** | "Do families like it?" | Default: one line linking out to each office's Google profile. When data exists: up to 3 real reviews, full text, reviewer as on the source, date, link; stacked, no carousel or stars | New `home/Reviews.astro` | `reviews: Fact<{ text, author, date, url, permission }[]>` + `profiles: { office, url }`; render only with source URL, date and recorded permission; count/rating only as "[n] reviews on Google as of [date]" if the client wants it. No AggregateRating markup (red line) | Tells 4, 10: demo shows [Reviews: link to each office's Google profile] only, never sample quotes |
| **Insurance** | "Is my plan taken?" | Plain heading, dated plan list as a 2-col text list (no chips, no banner), "as of [date]" line, outlined "Call to check your plan", plain disclaimer at AA contrast | `home/Insurance.astro` | `insurance: Fact<{ plan, type: 'Medicaid managed care' \| 'Medicare' \| 'commercial' }[]>` with `checkedOn` (front desk, each content review; overlay trust signal 2). Null: only the call line (today's version) | Tells 9, 20: no gradient banner, no "& many more" |
| **Elective-service disclosure** (from IV) | "Will insurance pay?" | Reuse only the idea: any elective service carries a plain "Elective: not billed to insurance" line beside its name | `Services.astro` when needed | `items[].elective: boolean`, client confirms | No IV section, no efficacy wording |

## 5. Borrowing their visual feel, our way (phone first)

- **Light and photo-led:** cream/white grounds; indigo only for the hero, the offices band and the footer. A photo leads the hero (faces), office cards (entrance), age rows (thumbnails) and the gallery.
- **The arch replaces their rounded rectangles:** arch-top crops for faces, entrance photos and age thumbnails; plain radius for panels; pills for controls only.
- **Place label on photo, made ours:** a white sentence-case pill sitting half on the arch photo's bottom edge (like our name cards), not a red tag in the corner.
- **Hours like theirs, better:** full week per office, today's row tinted cream with bold text, open/closed status from `open`. On desktop, both cards sit side by side.
- **Their proof density, verified:** fact row inside the hero and credential grid two sections later. Each fact appears once.
- **Serif + sans:** Fraunces headings that name the content; sentence-case muted labels, not red tracked caps.
- **Colour:** gold = filled action on indigo; teal-deep = filled action on light; aqua = links and focus on indigo. Their red on icons, headings and highlights maps to weight and tint.

## 6. Patterns to reject

| Pattern | Reason |
|---|---|
| Intro splash; photo-background hero with cut-outs | Owner decision; cloning; tell 3; their LCP 11.1 s |
| Glass cards, faded photo backdrops, gradient banners | Decoration and weight; tells 9, 20 |
| App-style icon tiles; colour-coded ages | Tells 14, 20, 21 |
| Eyebrows; accent-coloured heading words; slogan headings | Tells 11, 20, 6, 19 |
| Promise / quote band | No real quote exists; centred, repeats claims (tells 4, 18). A signed doctors' statement, if ever written, goes left-aligned on `/doctors` as `doctorsStatement: Fact<string>` |
| Separate plan-your-visit hours band | Improved office cards already show both weeks side by side |
| Filter tabs + 10 service cards | Tell 14; age rows do it with no JS |
| IV section | Efficacy claims (keep only the disclosure idea) |
| "25+ years", "board-certified" chips, rating, "verified", "walk-ins welcome", "Open 7 days", undated "accepting" | Red lines; tell 10. Each fact once, verified, where used |

## 7. Proposed Home order (phone)

| # | Section | Reason |
|---|---|---|
| 1 | Header (outlined Call) | Phone in 0 taps |
| 2 | Hero: H1, one gold action, doctor arch cards, fact row | Who, what, where, act, plus proof before scrolling |
| 3 | What brings you in? | Routes planned visits from "sick today" (keep) |
| 4 | Offices (indigo band, photo-led cards) | "Where and when" is the next question |
| 5 | Care by age | Whole-family claim shown as a sequence |
| 6 | Your doctors (detail cards) | Proof behind the faces |
| 7 | Inside each office | Real rooms; renders as named slots in the demo |
| 8 | Why one practice | Only with 2 or more documented reasons |
| 9 | Reviews | Link-out line now; real reviews later |
| 10 | Insurance | Dated plan list slot |
| 11 | Common questions | Objections (keep) |
| 12 | Request a visit | The action (keep) |
| 13 | Footer | NAP, policies, 911 (keep) |

Neighbours differ: cards on indigo (4), rows (5), split cards (6), photo grid (7), ranked split (8), line (9), list (10), accordion (11).

**Drop from current Home:**
- The two check-list columns in Services: replaced by age rows.
- The closing band after the form ("Your family's doctors, close to home." + two buttons). It is a stock "Ready to...?" ending (tells 5, 6) right under the action. Hide it on Home.

## 8. Questions for the owner

| # | Question | Recommended default |
|---|---|---|
| 1 | Decision #5 removed the proof strip. May the demo show the fact row with labelled `[to confirm]` slots so the client sees what we need? | Yes on the demo; live renders confirmed facts only |
| 2 | Doctor cards repeat the hero faces. Use a small arch portrait (72 px) in the cards? | Yes, small; the hero keeps the large faces |
| 3 | Ask the client now for real photos: both entrances, reception, one exam room each, and both doctors? | Yes; named empty frames until then, never stock |
| 4 | Reviews: link out to each office's Google profile only, or also show up to 3 real reviews with permission? | Link out only until permission and source links are recorded |
| 5 | Which 2-3 reasons to choose the practice can the client document? | Ask at intake; drop the section under 2 |
| 6 | Accept the 13-section order (offices moved up, age rows replace check-lists)? | Yes; build one section at a time with a phone screenshot each |
