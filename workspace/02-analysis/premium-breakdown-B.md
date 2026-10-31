# Premium breakdown B: five sites, taken apart for our Home

Date: 2026-10-31. Scope: Cityblock, Rock Pediatric Dentistry, Camp Little Tooth, ORAL Dental Studio, SF Pediatric Dentistry (grades in `premium-benchmark.md`, not redone). Our Home = branch `claude/laughing-keller-b48kzx-layout`, captures `04-logs/home-demo/H8-*`.

**Evidence and limits.** Only each site's Home was captured (phone 390, desktop 1280): `01-research/premium/<slug>/phone|desktop/{1-fold,2-full}.png`, `meta.json`, `html/`. Live sites were unreachable from this session (proxy 403), and the saved HTML holds DOM plus inline CSS only, so sizes are read from the 2x captures and band detection (`~` = estimate) and motion is read from class names, inline CSS and library hooks (`(U)` = inferred, not seen moving). Rule for every move: take the idea, never their layout, wording, images or brand (anti-slop guide, "Cloning is out of bounds").

## A. Page inventory

| Site | Captured | Home sections (phone = desktop order) | Pages known from nav links only |
|---|---|---|---|
| Cityblock | Home | 8: nav, hero, "care designed" text+photo, "care for scale" text+photo, founder quote, mission+video, 3 link cards, footer | 15+: approach, locations, coverage, care overview, urgent care, hospital-to-home, primary care, mental health, social care, partners, providers, careers x2, about, testimonials, records request (nav only) |
| Rock | Home | 14: social/phone row, nav, hero, stance checklist (the real H1), first visit, testimonial slider, services icon grid, doctor, location+hours, approach, promotions, contact form, reviews widget, Instagram feed (+ footer) | 20: about, doctor, blog, services + 7 service pages, new patients, insurance & financing, offers, savings plan, forms (external), reviews, "rock kids", contact (nav only) |
| Camp | Home | 11: office utility row (desktop), nav, hero, 4 photo cards, video, doctor bio, practice story + video, airway centre, memorial, two office cards + drawn map + badges, footer | ~45: about, 2 request pages, 3 team pages, tour, why us, 17 service pages, 7 airway pages, new campers, forms, membership/financing, payments, contact (nav only) |
| ORAL | Home | 20: split book/phone bar, nav, hero, emergency band, intro, AI tech, sedation, braces, surgeon, why us, "the space" (blank in capture), dentists, before/after gallery, services accordion, experience accordion, logo carousel, about block, contact prompt, contact/hours card, footer (+ promo popup) | ~100: services mega menu (~40 pages), technology, about, blog, insurance, emergency, comfort, contact, after-work visits (nav only) |
| SF Peds | Home | 9: nav, hero, doctor welcome, team prompt, social, membership band, FAQ/blog prompts, location+hours, footer | 13: meet us, 2 FAQ pages, book online, contact, blog, covid, forms, new/current patient booking, membership, disclaimer, privacy (nav only) |

## B-D. Per site: anatomy, Home, nav, motion, best moves

### 1. Cityblock (techy-calm)
| Core | Measure |
|---|---|
| Grid | P one column, 20 px gutter (hero 40); D content ~1120 px, hero copy ~420 px, 50/50 photo-text zigzag (`desktop/2-full.png`) |
| Rhythm | ~80 px section padding; 24-32 px inside groups |
| Type | H1 national2 300, 56 D / ~40 P, lh 1.2; H2 ~28-32 300; body 16/1.5 navy; no italic; quote ~24 light, centred |
| Colour | white/mint ~65%, navy+blue gradient ~30%, lime only inside gradient; actions uncoloured (outlined) |
| Shape, image | radius 0, no shadow; documentary photos, natural grade, ~4:3 |
| Hero | P ~416 px under 60 px nav: H1 3 lines, subline, outlined "Learn more" 220x48; no phone, no photo |
| Button, cards | 2 px outline rectangle + arrow, ~48 px; image-top cards with a gradient edge strip |

**Home (phone 5,865 px):** hero 416 (Learn more) / care designed ~670 (Get support = tel) / care for scale ~490 / founder quote ~625 (no CTA) / mission + video ~640 / 3 cards ~1,580 (Call us, Read more, Apply) / footer ~1,380. Works as stance, then how care reaches you, then who, then a named belief; one outlined action per section. Proof is one quote; no booking path.
**Nav:** P 60 px transparent over the hero, white wordmark, hamburger; D ~60 px, 5 links (two dropdowns) + outlined "Contact us"; fixed. Menu holds "Call now" and the number. No announcement bar.
**Motion:** almost nothing moves: static grain gradient, a muted autoplay Vimeo in the mission band (third party; renders as a solid navy block when blocked, `phone/2-full.png`), hover states (U). Content complete without motion.

| Best move (seen in) | Why it works | Our better version | Eff | Gate 9 / red line |
|---|---|---|---|---|
| Big light display at large size (`phone/1-fold.png`) | Calm authority without bold shouting | Desktop H2s to 2.75 rem, Fraunces wght ~430 and opsz max; phone H2 stays 1.9 rem/560 for legibility | S | Item 8 helped (clear steps) |
| Photo-text zigzag (`desktop/2-full.png`) | Shows care happening, not a feature list | `Inside.astro`: per office one large arch-topped room photo + caption + 2 small, alternating sides on desktop, stacked on phone | M | Item 7: ranked sizes, not equal tiles; named photo slots only |
| One named quote band (`phone/2-full.png`) | A real person's belief beats adjectives | "In the doctors' words": one quote, Fraunces italic 1.5 rem, our single centred moment, between Care by age and Doctors; slot `doctors[].statement: Fact<string>` (source: written by the doctor, date) | S | Item 6 allows one centred moment; never a patient quote |
| Footer entity disclosure (`phone/2-full.png`) | Says who legally provides care | Footer line from `practice.legalEntity: Fact<string>`: "[Medical services provided by: to confirm with counsel]" | S | Legal text stays DRAFT |

Avoid: gradient/grain hero (item 10); a phone fold with no call or request (item 4).

### 2. Rock Pediatric Dentistry (playful)
| Core | Measure |
|---|---|
| Grid | P one centred column, 12-24 px gutters; D centred hero copy ~470 px, services 4x2, blob-backed 2-column rows |
| Rhythm | loose: ~120-160 px D gaps; organic blobs replace bands |
| Type | Poppins 500 lowercase headline ~26 P / ~32 D; tracked-caps pink eyebrows ~11 px; Montserrat body ~14-16 grey, centred |
| Colour | white ~45%, blush ~30%, baby blue ~20%, hot pink ~5% (buttons and eyebrows, checks, quote marks) |
| Shape, image | pill buttons, blobs, wave dividers, soft 59 px shadow; mascot illustrations, one doctor photo in a blob crop |
| Hero | P ~500 px: social+phone icon row, logo, headline, tagline, 5-line paragraph, pink pill, mascot over a wave |
| Button | pink pill ~215x52, white tracked caps 14 px (~2.4:1, fails AA) |

**Home (phone 9,867):** header ~110 / hero ~390 (Book) / stance checklist ~500 / first visit ~590 (Learn about your first visit) / testimonial ~410 / services grid ~930 / doctor ~960 (Meet Dr.) / location+hours ~500 (Book) / approach ~600 / promotions ~1,680 / contact form ~1,130 / reviews + Instagram ~870, both empty ("No posts found", `phone/2-full.png`). Booking repeats every 2-3 sections; the stance checklist (Medicaid, sedation-free) answers "will they take us" in screen two.
**Nav:** P ~110 px (icon row + logo/hamburger), not sticky; left off-canvas drawer with sliding sub-panels; floating pink call button fixed bottom-right. D ~100 px: address+phone utility row, 5 tracked-caps links with dropdowns, pink "Book" pill.
**Motion:** fixed call button (`transition: right .3s`), slick testimonial slider (auto-advance U), fadeInUp entrances (U), drawer slide, 0.2 s background hovers. Content works without motion; the slider then shows one quote.

| Best move (seen in) | Why it works | Our better version | Eff | Gate 9 / red line |
|---|---|---|---|---|
| Stance checklist in screen two (`phone/1-fold.png`) | Parents check coverage first | `Insurance.astro` opens with `practice.medicaidChp: Fact<string>` ("Medicaid and Child Health Plus: [to confirm, with date]") before the dated plan list | S | Dated list only; no "most plans" |
| Doctor as a person, then a profile link (`phone/2-full.png`) | Warmth before credentials | `DoctorCards.astro`: arch portrait, name, role, a 2-line first-person note (`doctors[].note: Fact<string>`), languages; the credential grid moves into a `<details>` "Training and licence" on phone, open on desktop. Saves ~500 px phone | M | Credentials stay fact slots; nothing hidden on desktop |
| One voice across headings | Memorable without a mascot | Voice rule: each H2 is the visitor's own question, answered in its first line ("Where do we go?", "Who will we see?") | S | Copy change: owner approves wording |

Avoid: tracked-caps eyebrows and low-contrast pill text (items 9, 11); embedded review and Instagram widgets that render empty.

### 3. Camp Little Tooth (themed, heavy)
| Core | Measure |
|---|---|
| Grid | P one column ~20 px; D full-bleed to 1440, 4 equal cards, 2-column text/photo rows |
| Rhythm | uneven: tight 10 px card gaps, ~80 px dark bands |
| Type | Boogaloo hand-lettered caps H1 ~50 D, larger on P (4+ lines); condensed H2 ~20-24; system sans 16/24 centred |
| Colour | wood photo/charcoal ~45%, white ~30%, forest green ~20%, red/brown badges ~5% |
| Shape, image | radius 2-4 buttons, 12-15 cards, drop shadows; real rooms and real kids, warm grade, dark hero overlay |
| Hero | P ~960 px: two badge logos, brand-name H1, two equal green buttons below the fold, cookie panel over it (`phone/1-fold.png`) |

**Home (phone 8,868):** nav 62 / hero ~960 / 4 photo cards ~2,500 (no links) / video ~400 / doctor + story ~1,750 (Meet Dr., Request) / office cards + drawn map + badges ~2,970 / footer ~220. Strong place identity, weak argument: no CTA until ~1,700 px down on phone.
**Nav:** P 62 px green, centred cabin icon, hamburger, sticky top and bottom; right drawer with ~110 links. D ~107 px: dark utility row with both offices (name, phone, address) + green bar of 7 links with dropdowns, active underline, no button.
**Motion:** sticky header, parallax hero (scroll, U), Lottie (U), Swiper, icon hover scale 1.06-1.11 at 0.3 s ease-out, several 1 s transitions (feel laggy), cookie fade 350 ms. Content present without motion.

| Best move (seen in) | Why it works | Our better version | Eff | Gate 9 / red line |
|---|---|---|---|---|
| Both offices equal in the bar (`desktop/2-full.png`, top) | Two-office families see their number at once | `FactRow.astro`: each office's "today" item gains its tel link under the status (phone and desktop); desktop header gets a 36 px non-sticky utility row with both offices + `OpenNow` | S | No "A · B" strings: two labelled blocks; hours from `practice.ts` |
| Drawn map of the locations (`desktop/2-full.png` footer) | Ownable, local, no embed | Self-drawn SVG at the top of `Locations.astro`: one line from Elmhurst (Queens) east to Hicksville (Nassau), two arch pins, "not to scale"; strokes in on-dark `#c9c4e3`, pins white | M | Item 14 one stroke; item 15 subject; no embedded map; no aqua/gold decoration |
| Family plan for the uninsured (`phone/2-full.png`) | Removes "can we afford it" | Insurance adds "No insurance?" with `practice.selfPay: Fact<string>` and a link to the billing/Good Faith Estimate page | S | No price until confirmed and dated |

Avoid: brand-name H1 and no fold CTA (items 4, 5); unsourced award badges (red line).

### 4. ORAL Dental Studio NYC (busy, commercial)
| Core | Measure |
|---|---|
| Grid | P one column 20 px; D 1140 px container, editorial 3 columns: side label / body / photo (`desktop/2-full.png`) |
| Rhythm | beige panels with 30-40 px padding; very long (phone 16,870) |
| Type | display caps H1 ~70 D / ~45 P; tracked-caps headings ~22; Poppins body 13 px grey (too small) |
| Colour | white ~55%, beige ~25%, charcoal ~15%, black buttons ~3%, tan top bar |
| Shape, image | 3 px buttons, 24 px frosted hero card, square photos, no shadow; real interior + stock-like portraits + before/after |
| Hero | P ~634 px photo with frosted card: caps tagline, insurance exclusion, pun H1, "4.9, 503 reviews" with Google mark |
| Button | black rectangle, 13 px, ~36 px tall (under 44) |

**Home:** split bar 42 (Book / phone) / nav 76 / hero 634 (proof, no button) / emergency band 358 (phone + hours) / ~9,150 of editorial blocks each with a black button / before/after ~1,690 / two accordions ~1,800 / footer area ~3,140. Proof and the urgent path come first, then the page sprawls.
**Nav:** P split bar + 76 px header, both sticky, calendar FAB and "Open 7 Days" bottom bar. D ~50 px: 8 links, 6 dropdowns, wrapping to 2 lines, outlined phone + black "Book Now"; ~40-link services mega menu.
**Motion:** autoplay muted looping MP4, Elementor fadeIn x4 / fadeInUp x1 scroll entrances (blank areas in `desktop/2-full.png`), logo carousel with dots, ripple and scale(1.1) hovers, a blanket `transition: .3s` on 162 rules, a promo popup after 5 s (`animation: css 0s 5s forwards`). Reveal content may stay hidden without scripts (U).

| Best move (seen in) | Why it works | Our better version | Eff | Gate 9 / red line |
|---|---|---|---|---|
| Rating + count in the hero (`phone/1-fold.png`) | Data, not adjectives | `FactRow.astro` item "Google reviews": `offices[].googleRating: Fact<{rating,count}>`, shown as text "4.x from N reviews, checked [date]" linking to the profile; demo shows the slot | S | Only confirmed and dated; re-check monthly; no stars in gold, no AggregateRating |
| Urgent band right after the hero (`phone/2-full.png`) | A sick child needs a number now | `Visits.astro` "Sick today?": list both offices with `OpenNow` + tel link inline (no dialog step); `practice.sickVisits: Fact<string>` slot | S | Never "same-day" until confirmed |
| Honest insurance stance | Saves wasted calls | Insurance: accepted plans first (dated), then `practice.plansNotTaken: Fact` | S | Lead with accepted, not exclusions |

Avoid: popups, "Open 7 Days" bars and sticky clutter over the fold (CLAUDE.md, item 4); scroll-reveal sections that leave blank bands.

### 5. SF Pediatric Dentistry (static, calm)
| Core | Measure |
|---|---|
| Grid | P one column 20 px; D ~1100 px, 2-column text + captioned photo, centred text 600-750 |
| Rhythm | very loose: ~100 px between paragraphs |
| Type | light humanist sans; heading ~22 P / 30 D; body 15 with keyword bumps to ~18; tracked bold welcome; italic band |
| Colour | white ~60%, pale blue ~25%, light grey ~12%, black text, no accent |
| Shape, image | radius 0-2, outline rectangles; personal snapshots with captions ("Dr. Kristina with her first child.") |
| Hero | P ~518 px pale blue: line logo (Golden Gate teeth), welcome, white "Call or text" button 250x42; no H1 |

**Home (phone 5,383):** hero 518 (call/text) / doctor welcome ~1,730 / team ~390 / social ~310 / membership ~160 / FAQ+blog prompts ~1,000 / contact + hours ~1,100 (phone-tag scheduler) / footer ~250. A first-person letter from one doctor; no proof.
**Nav:** P ~45 px transparent, fixed; menu with 5 links + "More" (6). D ~45 px, 5 tracked-caps links, boxed active item, no button, no phone.
**Motion:** Weebly fade-in on load (U); otherwise static.

| Best move (seen in) | Why it works | Our better version | Eff | Gate 9 / red line |
|---|---|---|---|---|
| Captioned personal photos (`desktop/2-full.png`) | Captions make photos true | `PhotoSlot` and portraits get a `figcaption` naming who and where ("Dr. Park, Elmhurst exam room") | S | Item 2: real, consented photos only |
| Which doctor, which days (`phone/2-full.png` hours) | Two doctors, two offices: the key question | `Locations.astro` "Doctors here" adds `offices[].doctorDays: Fact<string>` per doctor | S | Days only once confirmed |
| Names the phone-tag pain | Honest framing of a callback | `Request.astro` subline: leave a name and number and a best time; the office calls you | S | Contact fields only |

Avoid: no H1 and light text on pale blue (items 5, 12); keyword size bumps inside paragraphs.

## C. Our recommended navigation
- **Phone:** keep the demo banner (demo only) and the 64 px sticky header: logo, outlined Call (office dialog), menu. Keep it stable on scroll: no shrink or hide. Menu panel: Doctors, Locations, Insurance, Contact, then an "Our offices" block with both offices (name, `OpenNow`, tel link), as Cityblock and Camp put numbers in the menu. No filled button in the header: the hero's gold action is the screen's one fill. Keep the bottom Call/Request bar after the hero (already better than Rock's or ORAL's floating buttons: labelled, hidden over the form and footer).
- **Desktop:** an 80 px sticky row (logo, the 4 links, outlined Call), plus a 36 px cream utility row above it on lg+, not sticky: Elmhurst and Hicksville each with status and number (Camp's parity). No dropdowns, no tracked caps, no mega menu, 5 links maximum.

## Top 6 moves for our Home (ranked)
1. **Office-aware urgent path:** "Sick today?" lists both offices with status and tel; FactRow items carry the numbers (ORAL, Camp). `Visits.astro`, `FactRow.astro`. Conversion and clarity.
2. **Rating + count as a dated fact** in the hero FactRow (ORAL). `FactRow.astro`, `practice.ts`. Trust.
3. **Person first, credentials folded:** first-person note, which doctor on which days, credentials in `<details>` on phone (Rock, SF). `DoctorCards.astro`, `Locations.astro`. Trust, and ~500 px shorter.
4. **Insurance stack:** Medicaid/CHP line, dated plans, plans not taken, self-pay link (Rock, ORAL, Camp). `Insurance.astro`. Clarity.
5. **Real rooms, ranked and captioned,** alternating on desktop (Cityblock, Camp, SF). `Inside.astro`, `PhotoSlot.astro`. Premium feel.
6. **Two-office line map** at the top of the offices band (Camp). New SVG in `Locations.astro`. Distinctiveness (item 15).

Also: our phone Home is 11,581 px vs 5,383-9,867 for four of the five; the offices band alone is 2,322 px. Show grouped hours (`weekSummary`, plus today) on Home and keep the full week on location pages; target under 10,000 px.

## Animation for our Home (ranked)
Animation style across the five: Cityblock and SF barely move (the calmest and most credible); Rock moves to be playful; Camp and ORAL move to sell (parallax, video, carousels, popups, scroll reveals) and show the failure modes. Ours should feel like a calm practice: motion only answers a tap or a change of state.

Tokens (add to `global.css`): `--dur-press 150ms`, `--dur-state 220ms` (exits 150ms), `--dur-signature 500ms`, `--ease-out cubic-bezier(.22,1,.36,1)`. Only opacity and transform. Write decorative rules inside `@media (prefers-reduced-motion: no-preference)`; the existing global `reduce` rule stays as the backstop. CSP: CSS only, or bundled module scripts.

| # | Where | Trigger, property, timing | Job | Reduced motion | CSS-only build |
|---|---|---|---|---|---|
| 1 | All actions (add `.btn` to the sticky bar and dialog links) | tap: scale .97, 150 ms ease-out | Feedback before the tel: handoff | colour change only | existing `.btn:active` |
| 2 | Call dialog | open: opacity 0 to 1, translateY 12 px to 0, 220 ms; close 150 ms; backdrop fade | Shows the dialog came from the tap | instant | `@starting-style`, `transition-behavior: allow-discrete` on `display` and `overlay`; Escape stays native |
| 3 | Mobile menu panel | open: opacity + translateY(-8 px), 200 ms | Ties the panel to the header | instant | same pattern on `[hidden]` |
| 4 | FAQ answers | open: answer opacity + translateY(-4 px), 220 ms; plus-icon rotate (exists) | Confirms which question opened | instant | `details[open] > div { animation: … }`; no height animation |
| 5 | Sticky bottom bar (exists) | translateY 200 ms in, 150 ms out | New action available | instant | keep, check `inert` sync |
| 6 | Text links with arrows | hover/focus: arrow translateX 3 px, 150 ms | Affordance | none | `:is(:hover,:focus-visible) svg`, hover inside `(hover:hover)` |
| 7 | Header (optional) | scroll 0-48 px: hairline opacity 0 to 1 | Separates content passing under | static border | `@supports (animation-timeline: scroll())` |
| 8 | Signature, only if the map is built | pins rise 8 px + fade, 500 ms, second pin +120 ms, on view entry | Shows how the two places relate | static, visible | `animation-timeline: view()` in `@supports`; visible by default; no text animated |

Never: animate the H1, the gold action or the hero portraits (LCP); scroll-reveal sections; carousels; count-ups; pulsing "open now" dots; parallax; video; ripples; popups. Check every change three ways: normal, reduced motion, no JavaScript (U14.19).
