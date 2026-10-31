# Premium breakdown A: five sites, down to the core, with motion

Date: 2026-10-31. Sites: Cassia, Little Otter, Grand Street Dental, TejoMed, Bluebird Kids (grades in `premium-benchmark.md`, not redone). Our baseline: H8 Home (`04-logs/home-demo/H8-*`).
Evidence: screenshots in `01-research/premium/<slug>/{phone,desktop}/` (phone captures are 2x, so px below are CSS px) and saved HTML in `html/`. `~` = estimated from a screenshot; `(U)` = inferred, not seen. Webflow and Framer CSS is external and was not saved, so their sizes are screenshot estimates. Cassia phone was blocked (403). Little Otter and Bluebird hide most sections behind scroll-reveal, so their full captures show blank bands; those sections were read from the HTML text.
Rule for every "our version" below: take the idea, never their layout, wording, photos or icons. Every new fact is a `Fact<T>` slot in `src/data/practice.ts`.

## 1. Cassia Optimal Health (desktop only)

**Anatomy**
| Part | Measured |
|---|---|
| Grid | Text centred at ~640 px; cards and finder ~920-1150 px; 3-up grids |
| Rhythm | ~120 px between bands; ~60 px green announcement bar |
| Type | H1 Antic Didone light ~68 px, lh ~1.05, centred; H2 ~30 px; body Albert Sans 16 px; eyebrows ~11 px gold, tracked ~5 px; finder legend 22 px |
| Colour | cream/white ~55 %, forest #133820 ~38 % (bands, photo overlay), gold #C8B07D ~3 % |
| Shape | 0-2 px buttons, 8 px cards, 999 px choice pills; offset gold block behind the portrait |
| Images | Dark-overlaid full-bleed photo of the doctor at her door; editorial portrait |
| Hero | Phone bar, nav split around a centred logo, eyebrow, 2-line H1, 3-line lead, square button, text link, phone number |
| Button | ~40 px tall, 12 px uppercase, tracked 1.2 px, square |
| States | Finder pill: hover gold border; checked = `label:has(input:checked)` with gold 22 % fill; focus 2 px gold ring, 4 px offset |

**Motion**
| What | Trigger | Duration, easing | Job | Motion off |
|---|---|---|---|---|
| Tier cards: matching card opacity .55→1, translateY(-4px) | tap a choice | 250 ms, default | shows the result | yes (reduced-motion guard in the HTML) |
| Headings fade in (`elementor-invisible`, 13 of them) | scroll | ~1.25 s (U) | none | no: hidden until JS runs (U) |
| Testimonial carousel | arrows | (U) | browsing | first slide only |

**Best moves**
| Move (where seen) | Why it works | Our better version | Effort | Risk and how we avoid it |
|---|---|---|---|---|
| A two-question picker that lights up the match (`desktop/2-full`, tier finder) | A parent answers two easy questions instead of reading every option | `Visits.astro` "What brings you in?" turns into a picker. Q1 is "Who is it for?" (baby, child, teen, adult). Q2 is "Planned or sick today?". The answer shows the right doctor and one route: sick → call card, planned → request. Phone: 2-column 44 px pills, result below. Desktop: questions left, result right. Radios plus `:has()`, no JS | M | Not a symptom checker. The options name ages and visit types, never conditions. Nothing is sent or stored. Only the result's action is filled |
| Credentials set as a ledger under the name, each with a source line (`2-full`, recognition row) | Adults check credentials, and a source makes the claim believable | `DoctorCards.astro` already has the rows. Add a source and date under each confirmed row ("NYSED, checked [date]"). The hero name card gets one confirmed line only | S | Slots until confirmed. No "board-certified" text until ABMS has been checked and dated |
| A three-step "how it happens" (`2-full`, Discover / Define / Begin) | Shows what happens after the click | `Request.astro` steps (a real sequence) get time slots: "Office calls back within [to confirm]" | S | Slot. No "same-day" |

Avoid: centred thin serif over a darkened photo, and small gold text on cream (~2.3:1). Avoid tracked-caps eyebrows and 01-04 markers (Gate 9 item 11).

## 2. Little Otter

**Anatomy**
| Part | Measured |
|---|---|
| Grid | Phone 25 px gutter. Desktop ~85 px gutter, hero 45/55 two columns |
| Rhythm | ~100-140 px bands. Section edges are wide elliptical curves |
| Type | H1 serif 400. Phone ~40 px, 3 lines. Desktop 42.7 px, lh 1.3, tracking -1.28 px, one italic phrase ("whole family"). Body Larsseit 16 px, phone lead ~18 px |
| Colour | off-white #F8F7F3 ~55 %, cream #F3EEDB ~20 %, navy #09273B ~22 %, butter ~2 % (leaf, closing button) |
| Shape | Dome-cropped hero photo, curved band edges, ~7 px buttons, ~16 px cards, one leaf illustration |
| Hero | Bar, logo, H1, lead. On phone the insurance card comes straight after the hero (`phone/2-full`, first tile) |
| Button | Navy solid plus navy outline, sentence case, 14 px, ~44 px tall |
| States | Footer link: background slides in with `translate(0,0%)` on hover |

**Motion**
| What | Trigger | Duration, easing | Job | Motion off |
|---|---|---|---|---|
| 80 elements start at `opacity:0; translate(0,40rem)` (GSAP `fade-item`, `fade-stagger`) | scroll | (U) | decoration | **no**: blank bands in both captures |
| Announcement line, keyframes animating `top` | load, loops | 11.2 s, infinite | rotating message | yes, but it animates a layout property and has no pause |
| Background blur | (U) | 7 s ease | mood | yes |

**Best moves**
| Move | Why | Our better version | Effort | Risk |
|---|---|---|---|---|
| Serif H1 with one italic phrase (`phone/1-fold`) | A human voice inside a plain service line | `Hero.astro`: set "Elmhurst" and "Hicksville" in Fraunces italic (same white). H1 still names the service. Load the italic axis subset only | S | None. Italic is not colour (Gate 9 item 9) |
| Insurance as the first thing after the hero on phone (`phone/2-full`) | "Do they take my plan?" is the second question a parent has | `FactRow.astro` gets an "Insurance" item: "[Accepted plans: list, dated]" plus "See plans" linking to `#insurance` | S | Shows a dated list only, never "most insurance accepted" |
| Age bands as entry points (HTML: Children 0-2 … Parents, Expecting) | A parent finds their child's stage fast | `Services.astro`: add an "Expecting a baby" row (prenatal meet-the-doctor) as a slot, shown only if the practice offers it | S | Slot. Never invent a service |
| One shape used at every scale (dome photo plus curved edges) | Makes the page ownable | Our arch: give the indigo hero a shallow arch bottom edge (`border-radius: 0 0 50% 50% / 0 0 40px 40px`, desktop 64 px) into cream. Not a wave, because that would be a second device | S | Flat colour, no gradient |

Avoid: hiding content until a script runs, a cookie block over a third of the fold, and animating `top`.

## 3. Grand Street Dental

**Anatomy**
| Part | Measured |
|---|---|
| Grid | Phone ~18 px gutter. Desktop centred text ~700 px, press grid 4-up ~1140 px |
| Rhythm | ~80-120 px bands |
| Type | H1 sans semibold, phone ~50 px, desktop 70/77. Lead 24-28 px light, centred. Body Gotham light 16 px #666. Condensed uppercase wordmark |
| Colour | white ~60 %, cream #F0EFE6 ~25 %, shapes (peach, orange, cobalt, teal) ~10 %, yellow highlight ~1 %, charcoal footer ~5 % |
| Shape | Half and quarter circles. 0 radius on buttons and photos. One shape breaks out over the hero's bottom edge (`phone/1-fold`) |
| Images | Bright, high-key editorial photos of the real doctor and rooms. Macro before/after shots. 9:16 story tiles |
| Button | Teal square, 12 px uppercase, tracked. Yellow "highlighter" block for secondary links |

**Motion**
| What | Trigger | Duration | Job | Motion off |
|---|---|---|---|---|
| Doctor and before/after carousels (slick, swiper) | dots, arrows | (U) | browsing | first slide |
| Menu panel and contact drawer | tap | 0.5 s `all` | open/close | yes. Reduced motion is set for the menu only |

**Best moves**
| Move | Why | Our better version | Effort | Risk |
|---|---|---|---|---|
| Brand shapes instead of stock photos (`phone/1-fold`) | Distinct, and needs no photo shoot | `Inside.astro` slots become arch frames (cream on white, indigo 1 px line) with the label kept ("[Photo: waiting area]"). The empty page then reads as designed, not broken | S | Gate 9 item 3: the label stays |
| Rating proof with count and a link out (`desktop/2-full`, footer "4.9 · 705 reviews") | Proof as data, not adjectives | `Reviews.astro`, per office: "Google rating [x.x] from [n] reviews, checked [date]" plus a link to the profile | S | Red line: shows only when confirmed and dated. No AggregateRating, no quotes |
| A brief for real rooms in real light (`desktop/2-full`) | Patients want to see the actual door and room | Each slot names its shot: "Elmhurst entrance from the street, daylight, eye level, no patients" | S | No stock. Photo consent |

Avoid: puffery ("Leader", "new standard"), a fixed drawer that covers copy, a ~25 s load, and missing alt text.

## 4. TejoMed

**Anatomy**
| Part | Measured |
|---|---|
| Grid | Phone 20-24 px gutter. Desktop ~1070 px container, hero two columns |
| Rhythm | ~64-96 px bands. Cream, white and deep green alternate |
| Type | H1 Open Sauce Sans bold 48 px, lh 1.1, tracking -1.5 px. Phone H2 ~40 px. Body 16 px, lead 18 px muted |
| Colour | cream ~45 %, white ~25 %, green #1C3F3A ~25 %, gold ~2 % (arrows, the CTA on green), yellow highlight in reviews |
| Shape | 4 px buttons, 12 px cards, 999 px badges. A starburst mark stands in for missing portraits |
| Images | Candid, in-clinic, natural light |
| Hero | Eyebrow, H1, lead, button. Media card with video. Trust strip under the fold: "5.0 on Google (109 reviews) · area · languages · licence no." |
| Cards | Doctor card: portrait, name, role, licence no., 3-line bio, "View profile →". Location card: status dot plus "Open now" |

**Motion**
| What | Trigger | Duration, easing | Job | Motion off |
|---|---|---|---|---|
| Arrow nudge translateX(3px), inside `@media (hover:hover)` | hover | 180 ms `cubic-bezier(.4,0,.2,1)` | affordance | yes |
| Link colour | hover | 150 ms, same easing | feedback | yes |
| Framer appear (3 elements at opacity 0) | load | (U) | entrance | mostly |
| FAQ and carousels | tap | (U) | disclosure | yes |

**Best moves**
| Move | Why | Our better version | Effort | Risk |
|---|---|---|---|---|
| Licence numbers as proof (trust strip, footer, `desktop/2-full`) | Regulatory proof beats praise for adults | `Footer.astro`: "NY license: Dr Mehta [#], Dr Park [#], checked [date]" with an NYSED verification link | S | Slot until checked |
| "Typical → here" stacked comparison (`phone/2-full`: grey old line, gold arrow, white new line) | Explains the model without hype | A future band, used only when two documented facts exist (decision 2026-10-31-home-layout-round3 #5). Rows read "old (muted) → ours (indigo)". Arrows in muted ink, not accent | M | High: every row is a claim. Keep it gated |
| Placeholder portrait made from the brand mark (`desktop/2-full`) | No stock faces, still looks complete | `DoctorCards.astro`: if the photo is not confirmed on the live site, show an arch frame with the AIMSS mark and the name, not a stock face | S | Gate 9 item 2 is met by design |

Avoid: a full-screen consent wall, a promo bar for a side product, gold tracked eyebrows, and the scarcity pill "Limited new patient availability".

## 5. Bluebird Kids Health

**Anatomy**
| Part | Measured |
|---|---|
| Grid | Phone 20 px gutter, centred. Desktop ~1150 px, photo left / text right |
| Rhythm | ~96-128 px bands. Scalloped "cloud" dividers between bands |
| Type | H1 Basel Classic light, phone ~46 px, desktop 52/67. Body Basel Grotesk 16 px, phone lead ~20 px |
| Colour | yellow #FFDD34 ~20 %, dark teal #052C33 ~35 %, white ~35 %, pale aqua ~7 %, cyan CTA ~2 % |
| Shape | 40 px pills, 24 px cards, circle-chain cloud edges |
| Images | Cut-out people on flat colour. Provider portrait plus quote cards |
| Hero (phone) | Newborn bar, "Se habla Español" bar, logo, search, menu, H1, lead, a ~54 px full-width pill, a tappable phone number with icon (`phone/1-fold`) |
| Hero (desktop) | A 5-item trust pill strip straddles the hero's bottom edge (`desktop/1-fold`) |
| Nav | Utility row (Spanish, Bill Pay, Portal), dropdowns, pill CTA, phone |

**Motion**
| What | Trigger | Duration, easing | Job | Motion off |
|---|---|---|---|---|
| Webflow IX2 reveals (38 `data-w-id`, 33 inline `opacity:0`) | scroll | (U) | decoration | **no**: blank bands |
| Press logo marquee | load, loops | 35 s linear infinite | decoration | yes. No pause control |
| Video facade scale 1.04 | hover, `:focus-within` | 400 ms ease | affordance | yes (reduced-motion guard) |
| Nav dropdown icon rotation | hover | 300 ms ease | state | yes (guarded) |
| Accordion height | tap | 300 ms | disclosure | yes. Animates `height` |

**Best moves**
| Move | Why | Our better version | Effort | Risk |
|---|---|---|---|---|
| A tappable number right under the primary pill (`phone/1-fold`) | A parent with a sick child calls, not fills a form | `Hero.astro`, phone: replace "Or call an office" with two 44 px number links ("Elmhurst (718)…", "Hicksville (516)…") from `practice.ts`. Desktop keeps one link | S | Numbers come from data only. Text links, not filled |
| Trust strip bridging hero and body (`desktop/1-fold`) | All the "can I go here" answers in one glance | `FactRow.astro`, desktop only: a white panel with arch-top corners (28 px) overlapping the indigo edge by 48 px, text only. Phone stays inside the hero | S | No icon-card row (Gate 9 item 7). Values are slots |
| Language help at the very top (`phone/1-fold`) | Queens families scan for their language first | Header utility line "Language help / Ayuda con el idioma" linking to the nondiscrimination page. A languages slot until confirmed | S | Never claim staff speak a language before it is confirmed |
| Portal and bill pay in a utility row | Lets existing patients skip the marketing | Footer and menu: "[Patient portal link: to confirm]" | S | Slot. No third-party embed |

Avoid: the stats strip ("10,000+ babies, 1200+ 5-star, 40+ years": red line), the marquee, reveal-hidden sections, and loud yellow.

## Top 6 moves for our Home (ranked)

1. **Tappable office numbers in the phone fold** (Bluebird). `Hero.astro`. Conversion and trust.
2. **Two-question visit picker** (Cassia). `Visits.astro`. Clarity, then one route to act.
3. **Proof strip bridging hero and body**, now with insurance (Bluebird, Little Otter, TejoMed). `FactRow.astro` and `Hero.astro`. All slots are dated.
4. **Dated rating per office with a link out** (Grand Street, TejoMed). `Reviews.astro`.
5. **The arch at every scale**: a shallow arch on the hero's bottom edge, arch photo slots, the arch-mark portrait fallback (Little Otter, Grand Street, TejoMed). `global.css` `.arch`, `Hero`, `Inside`, `DoctorCards`. Premium feel.
6. **A source line under each credential, and licences in the footer** (Cassia, TejoMed). `DoctorCards.astro`, `Footer.astro`. Runner-up: the italic place names in the H1.

## Animation plan for our Home (ranked)

Tokens to add in `global.css`: `--dur-press:150ms`, `--dur-state:220ms`, `--dur-signature:500ms`, `--ease-out:cubic-bezier(.22,1,.36,1)`, `--ease-std:cubic-bezier(.4,0,.2,1)`. Only `transform` and `opacity` animate. Decorative motion goes inside `@media (prefers-reduced-motion: no-preference)`. Our global `reduce` rule then makes every change instant. Nothing hides content by default, and the H1, the hero CTA, the doctor images (likely LCP) and the form never animate.

| # | Where | Trigger | Property, timing | Job | Reduced motion | CSS-only build |
|---|---|---|---|---|---|---|
| 1 | Every tappable row: `.btn`, FAQ `summary`, office Call/Directions | `:active` | scale .97, `--dur-press` `--ease-out` | press feedback | instant | extend the existing `.btn:active` rule |
| 2 | `Faq.astro` | open | plus icon rotate 45°; answer opacity 0→1, translateY 4px→0, `--dur-state` | shows the state change | instant | `details[open] > div { animation: rise var(--dur-state) var(--ease-out) }` (keyframes run when the element appears); rotate on `details[open] summary svg` |
| 3 | Call dialog | open | opacity 0→1, scale .98→1, backdrop fade, `--dur-state`. Close is instant | orientation | instant | `dialog[open]` transition plus `@starting-style`. Escape still closes |
| 4 | Visit picker (move 2) | radio change | result card opacity and translateY 6px→0, `--dur-state` | shows the answer changed | instant swap | `:has(input:checked)` with `@starting-style` on the shown result. No dimming below AA |
| 5 | "Full profile →", "Directions →" | hover, focus | arrow translateX 3px, 180 ms `--ease-std` | affordance | none | inside `@media (hover:hover)`; also on `:focus-visible` |
| 6 | **Signature, one only**: `Services.astro` "Care by age" | enters view | a thin indigo rule beside the four age rows grows (scaleY 0→1, origin top) over `--dur-signature` | shows one practice from birth to adulthood | static line | `@supports (animation-timeline: view())` with `animation-range: entry 10% cover 40%`. The default state is the full line, so with no support or with reduce it is just there |
| 7 | `StickyBar.astro` (exists) | hero leaves view | translateY 100%→0, `--dur-state` `--ease-out` | brings the action back | instant | keep the existing module script. Swap `duration-200` for the token |
| - | Anchor jumps (exists) | tap a link | smooth scroll | orientation | auto | add `scroll-margin-top` equal to the header height |

Never on Home: scroll reveals that start hidden, carousels, marquees, count-ups, a pulsing "open now" dot, hero entrances, typewriter text or scroll-jacking (U14.5-U14.10, anti-slop tell 1). Before sign-off, check three ways: normal, reduced motion emulated, JS off (U14.19).
