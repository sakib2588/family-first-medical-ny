# Premium breakdown A: five sites to the core (pages, Home, nav, motion)

Date: 2026-10-31. Sites: Cassia, Little Otter (LO), Grand Street Dental (GSD), TejoMed, Bluebird Kids (BB). Grades are in `premium-benchmark.md` and are not redone here. Our baseline is H8 (`04-logs/home-demo/H8-*`).

Evidence:
- `01-research/premium/<slug>/{phone,desktop}/{1-fold,2-full}.png`, plus saved DOM in `html/`, plus `meta.json` (fixed elements).
- Heights are CSS px at 390, read off y-labelled contact sheets of the full captures. Treat them as ±10 %.
- `(U)` means inferred.
- Limits: there was no live network, so no hover or scroll testing. Webflow and Framer CSS was not saved. Cassia's phone view was blocked (403), so Cassia heights are desktop.
- LO and BB hide sections behind scroll-reveal, so those rows come from the DOM text and their heights are band estimates.

Rule: take ideas and structure only. Every new fact becomes a `Fact<T>` slot in `src/data/practice.ts`.

## A. Page inventory
Only the Home page was captured per site, on phone and desktop. Everything else is known from nav links (nav only).

| Site | Home sections (incl. bar, nav, footer) | Other pages (nav only) |
|---|---|---|
| Cassia | 15 (desktop) | Memberships; Our Care (Direct Primary Care, Weight, Nutrition, Hormones, Employee Wellness, 2 supplement pages); Blog; About; Financing; Contact; Book Now. 13 pages |
| LO | 15 (phone = desktop order) | 6 age pages (0-2 … Expecting); How Care Works ×5; Pricing & Insurance; Partners ×5; Resources ×7; About, Shop, Careers; Log in. About 28 |
| GSD | 10, plus 2 fixed (bottom bar, contact tab) | Meet Us (Office, Press & Reviews, News, Instagram); Services (4 cosmetic, 12 family); Before & After; Contact; external booking. About 22 |
| TejoMed | 14 | How it works; Doctors; Reviews; Locations (Lisbon, Porto, Algarve, Online, All); FAQ; About; Lightstep; Member login. About 12 |
| BB | 14 | Locations (4 regions, 12 offices); Services ×6; Insurances; Become a Patient ×6; Current Families ×5; Bill Pay; Portal; Careers; Español. About 35 |
| Ours H8 | 13 | Doctors, Locations, Insurance, Contact, legal pages |

## B. Deep Home analysis

In the tables below, h = approximate height in px, ★ = a filled CTA, and "pages" means the link leads to other pages.

### Cassia (desktop, total 12,830 px)
| # | Section | Job | Layout, content | h | CTA |
|---|---|---|---|---|---|
| 1 | Green bar | availability plus phone | one centred line | 60 | phone |
| 2 | Hero, nav overlaid | promise | centred serif over a darkened photo of the doctor at her door | 740 | ★Discovery call, membership link, phone |
| 3 | Recognition | credentials | 5×2 logo/label grid | 700 | none |
| 4 | Why it matters | evidence | one big stat with a BMJ footnote | 950 | Explore options |
| 5 | Physician band | who | green band, name plus 3 lines | 650 | Read story |
| 6 | Difference | mechanism | 3 equal icon cards | 700 | none |
| 7 | Our care | services | numbered accordion | 1150 | per-service links |
| 8 | Finder | choose | 2 questions, 3 tiers, over a dark photo | 1350 | ★Book call |
| 9 | Photo interlude | mood | full-bleed canopy | 800 | none |
| 10 | Journey | process | 3 step cards | 900 | ★Schedule call |
| 11 | Portrait | who | text plus framed portrait | 800 | Learn more |
| 12 | Testimonials | proof | quote carousel | 1200 | none |
| 13 | Learn | content | accordion of videos and blog | 1100 | YouTube |
| 14 | Close plus location | act | green card plus address | 1300 | ★Schedule call, directions |
| 15 | Footer | utility | 4 columns | 500 | none |

How the page works as a whole:
- Argument: relationship → proof → doctor → method → choose → act.
- Proof sits straight after the hero.
- One CTA repeats about every 3,000 px.

Anatomy:
- Text measure about 640 px; bands about 120 px apart.
- H1 Antic Didone light about 68 px, lh 1.05. Body Albert Sans 16 px. Eyebrows about 11 px, gold, tracked 5 px.
- Colour: cream/white 55 %, forest #133820 38 %, gold 3 %.
- Shape: square 12 px caps buttons, 8 px cards.

### Little Otter (phone, total 13,732 px)
| # | Section | Job | Layout, content | h | CTA |
|---|---|---|---|---|---|
| 1 | Merger bar | news | navy, 4 lines | 141 | link |
| 2 | Nav | brand | logo plus menu | 74 | none |
| 3 | Hero | promise | H1 with italic phrase, lead; desktop adds a dome photo | 280 | ★Get support, outline assessment (fade in) |
| 4 | Insurance card | can I pay | white card, plan logos | 670 | Learn more |
| 5 | Who we serve | find my stage | 6 age-band cards | 1450 | pages |
| 6 | What we treat | scope | list | 650 | none |
| 7 | Testimonials | proof | "Trusted by 25,000+", carousel | 1500 | none |
| 8 | Results | outcomes | stats | 550 | none |
| 9 | How it works | process | 3 steps | 1650 | ★Get support |
| 10 | Services | offer | 3 items | 700 | none |
| 11 | Why us | reasons | 6 rows, hairlines | 970 | none |
| 12 | Expertise | authority | navy band | 1440 | Learn more |
| 13 | FAQ | doubts | accordion | 700 | See more |
| 14 | Close | act | navy, curved top | 400 | ★Get support, assessment |
| 15 | Footer | utility | newsletter, crisis lines, sitemap | 2130 | Contact |

How the page works as a whole:
- Payment is answered first, then "is this for my family", then proof, then process.
- The age bands are the navigation.
- Three filled CTAs.

Anatomy:
- Phone gutter 25 px; desktop 85 px, hero split 45/55.
- H1 serif 400: phone about 40 px; desktop 42.7 px, lh 1.3, tracking -1.28.
- Colour: off-white 55 %, cream 20 %, navy #09273B 22 %, butter 2 %.
- Shape: dome photo, elliptical band edges, 7 px buttons.

### Grand Street Dental (phone, total 8,758 px)
| # | Section | Job | Layout, content | h | CTA |
|---|---|---|---|---|---|
| 1 | Nav (fixed) | brand | condensed wordmark plus 3-bar menu | 50 | none |
| 2 | Hero | identity | H1 over a field of half-circles; one shape breaks the bottom edge | 520 | none |
| 3 | Statement plus press | positioning, proof | 24 px light centred text; press quotes | 820 | View press |
| 4 | Photo carousel | real place | doctor in the operatory | 220 | dots |
| 5 | Cosmetic | specialty | before/after slider | 1400 | View gallery |
| 6 | Patient stories | social proof | Instagram 9:16 tiles | 2950 | Load more |
| 7 | Complete care | breadth | photo plus text | 800 | View services |
| 8 | Team | people | photo plus card | 420 | Learn more |
| 9 | Clinic photo | place | full-bleed | 230 | none |
| 10 | Footer | act, proof | "4.9 · 705 reviews", hours, contact | 1050 | Book, call |

How the page works as a whole:
- Brand, then proof, then work, then people.
- On phone, booking relies on fixed elements (a bottom bar with Gallery/Call/Book/Contact, and a side contact tab). The hero has no CTA.

Anatomy:
- H1 sans semibold: phone about 50 px, desktop 70 px.
- Colour: white 60 %, cream 25 %, shapes 10 %.
- Radius 0 everywhere; high-key editorial photos.

### TejoMed (phone, total 12,602 px)
| # | Section | Job | Layout, content | h | CTA |
|---|---|---|---|---|---|
| 1 | Promo bar | side product | navy | 80 | Learn more |
| 2 | Nav | brand plus act | logo, filled button, round menu | 70 | ★Get in touch |
| 3 | Hero | promise | eyebrow, H1, lead, video card | 680 | ★Get in touch, phone |
| 4 | Trust strip | proof | "5.0 Google (109) · area · languages · licence" | 90 | links |
| 5 | Comparison | mechanism | green band; muted old → gold arrow → white new | 1550 | ★Get in touch (gold) |
| 6 | Reviews | proof | rating pill plus card carousel | 670 | Read all |
| 7 | What changes | benefits | 4 benefit rows, includes list, photo | 1780 | none |
| 8 | Scope | conditions | 12-row list plus local SEO links | 990 | ★Get in touch |
| 9 | Doctors | who | cards: portrait, role, licence no., bio | 800 | View profile |
| 10 | One record | tools | data illustration plus device logos | 1500 | none |
| 11 | Locations | where | cards with "Open now" dots | 1050 | View all |
| 12 | FAQ | doubts | filled accordion rows | 1700 | ★Get in touch |
| 13 | Close | act | green panel | 750 | ★Get in touch, phone |
| 14 | Footer | utility | rating, address, licence nos. | 840 | none |

How the page works as a whole:
- Promise → proof (within 90 px) → mechanism → proof → detail.
- A filled CTA appears about every 2,000 px.

Anatomy:
- Container about 1,070 px.
- H1 sans bold 48 px, lh 1.1, tracking -1.5.
- Colour: cream 45 %, white 25 %, green #1C3F3A 25 %, gold 2 %.
- Radius: 4 px buttons, 12 px cards, starburst placeholder for missing portraits.

### Bluebird Kids (phone, total 12,489 px)
| # | Section | Job | Layout, content | h | CTA |
|---|---|---|---|---|---|
| 1 | Newborn bar | news | pale aqua | 79 | Book now |
| 2 | Spanish bar | language | dark | 40 | Español page |
| 3 | Nav | brand | logo, search, menu | 80 | none |
| 4 | Hero | promise plus act | centred H1, lead, pill, phone, cut-out photo | 875 | ★Book, tel |
| 5 | Insurance | can I pay | dark band, "Including Medicaid" | 650 | ★Book, tel |
| 6-7 | Stats plus NCQA | proof | 3 numbers, 2 badges | 1620 | none |
| 8 | Providers | who | quote-card carousel | 1770 | profiles |
| 9 | What we do | services | 3 service blocks | 1900 | ★Book each, tel |
| 10 | Reviews | proof | carousel | 470 | none |
| 11 | Tour | place | 3D tour | 1300 | none |
| 12 | Mid CTA | act | cyan band | 430 | ★Book, tel |
| 13 | Age stages | find my stage | tabs: Infant/Toddler/Elementary/Teen | 1340 | tabs |
| 14 | Footer | utility | accordions | 1930 | none |

How the page works as a whole:
- Act first, then payment, then proof, then people.
- Each service gets its own Book plus a phone number.
- A phone number sits next to every primary button.

Anatomy:
- Phone gutter 20 px; desktop about 1,150 px.
- H1 light serif: phone about 46 px, desktop 52 px.
- Colour: yellow 20 %, dark teal 35 %, white 35 %.
- Shape: 40 px pills, 24 px cards, scalloped cloud edges.

### Our Home against them
- At 11,581 px, our Home is shorter than LO and TejoMed.
- Our order matches the strongest pattern: act and proof in the hero (fact row inside it), then routing, offices, care, doctors and proof.
- Gaps against the set:
  - no phone number in the fold;
  - insurance sits 8th, where LO and BB put it 2nd;
  - no dated rating;
  - only two filled CTAs on the page (hero, request), against 4-6 elsewhere. The sticky bar covers this on phone.

## C. Top navigation
| Site | Bar above | Total header h, phone / desktop | Logo | Desktop links | CTA in bar | Phone no. | Sticky, scroll | Mobile menu |
|---|---|---|---|---|---|---|---|---|
| Cassia | green, phone | n/c / 135 | gold wordmark centred, links split around it | 7 (Home, Memberships, Our Care▾, Blog, About, Financing, Contact) | white square BOOK NOW | in bar | fixed over hero; turns solid (U) | left drawer, 12 links |
| LO | navy merger note | 215 / 117 | mark plus serif wordmark plus parent line | 6 with mega menus | outline Log in plus ★Get support now | no | fixed | menu with 34 links (U) |
| GSD | none visible | 50 / 55 | condensed caps | 5 (Home, Meet Us▾, Services▾, Before & After, Contact) | teal square BOOK ONLINE | menu plus bottom bar | fixed; phone bottom bar; side tab | full-screen slide from top, + accordions, Call/Directions |
| TejoMed | navy promo | 150 / 134 | starburst plus sans | 6 plus EN/PT | ★Get in touch, floating advisor card | menu only | static (U), card fixed | sheet: 7 links, Get in touch, phone |
| BB | newborn note plus Spanish/utility row | 199 / 164 | cyan mark, lowercase 2-line | 5 dropdowns, globe, search | ★cyan pill Book | yes (desktop) | fixed, 400 ms collapse | full-height dropdown, scroll locked |
| Ours | demo banner | 99 / 88 | arch plus AIMSS | 4 (Doctors, Locations, Insurance, Contact) | outline Call (dialog) | no | sticky cream 95 % blur | panel under header |

### Recommended nav for us

**Phone**
- Keep demo banner 30, header 69. That is half of BB's 199 and leaves the faces in the fold.
- Header row: arch logo, outline Call (both offices), menu. The bar never holds a filled button: the hero owns that, then the sticky Call/Request bar takes over (one filled per screen).
- The menu becomes a full-height `<dialog>`:
  - 4 links plus "Request a visit";
  - two office blocks, each with name, open-now line and a 44 px tel link;
  - "Language help / Ayuda con el idioma";
  - `[Patient portal: to confirm]`.
- Escape closes it; focus returns to the menu button.
- Add a single-line announcement only when a dated fact exists (`practice.announcement`, a slot). Never "accepting new patients" unconfirmed.

**Desktop**
- A non-sticky 32 px utility row: "Elmhurst (718)… · Hicksville (516)… · Language help". This is BB's and Cassia's phone-in-bar idea, from `practice.ts`.
- A sticky main row: logo, 5 links (Doctors, Locations, Care by age, Insurance, Questions), outline "Request a visit".
- On scroll: no shrink (that is layout motion). A hairline under the main row fades in.
- Language and portal also appear in the footer.

## D. Animation style
- **Cassia: calm, hotel-like.** Elementor fades headings in on scroll (13 `elementor-invisible`, about 1.25 s (U); invisible without JS). Buttons have 300 ms colour transitions and there is an arrow-driven quote carousel. Its one motion with a job: the tier finder lifts the matching tier (opacity .55→1, translateY -4 px, 250 ms), guarded for reduced motion.
- **LO: soft, editorial, fragile.** GSAP reveals run on about 80 elements from `opacity:0; translate(0,40rem)`, with staggered lists. A looping 11.2 s ticker animates `top`, a blur drifts over 7 s, and footer link fills slide in. No reduced-motion handling was found, and the blank captures prove the risk.
- **GSD: functional, older jQuery.** Slick and Swiper carousels with dots, `all 0.5s` transitions, a menu that slides from the top, and a slide-in contact drawer. Reduced motion is handled for the menu only.
- **TejoMed: quiet, product-grade.** A few Framer appear fades. 150-200 ms colour changes on `cubic-bezier(.4,0,.2,1)`. A 180 ms arrow nudge only under `(hover:hover)`. Button-driven carousels, a swipe review rail on phone, accordions. **Closest to our target.**
- **BB: playful but tidy.** Webflow IX2 reveals (blank in capture), a 35 s press-logo marquee, a 400 ms image zoom on video hover or focus, 300 ms chevron rotation and accordion height. Most are guarded for reduced motion.
- **What we take:** TejoMed's timings, Cassia's state change that has a job, BB's reduced-motion guards. We reject reveals, marquees, tickers and carousels.

## E. Best moves (what they do → our better version)
| From (seen in) | Our version (component; phone → desktop; tokens) | Eff. | Risk → guard |
|---|---|---|---|
| BB tel under the pill (`phone/1-fold`) | `Hero.astro`: "Or call an office" becomes two 44 px number links from `practice.ts`; desktop shows them in the utility row | S | Data-sourced numbers; text links, not filled |
| Cassia 2-question finder (`desktop/2-full`) | `Visits.astro`: "Who is it for?" (baby/child/teen/adult) × "Planned or sick today?" → the right doctor plus one route (call card or request). Radios plus `:has()`; 2-column 44 px pills → split layout on desktop | M | Ages and visit types only, never symptoms; nothing sent; one filled button |
| LO insurance card 2nd (`phone/2-full`), TejoMed and BB trust strips (`desktop/1-fold`) | `FactRow.astro`: add an Insurance item ("[plans, dated]" plus a link to `#insurance`). Desktop: a white panel with arch-top corners overlapping the indigo edge by 48 px, text only | S | Dated list; no icon-card row (Gate 9 item 7) |
| GSD and TejoMed rating with count plus link (`desktop/2-full`) | `Reviews.astro`, per office: "Google [x.x] from [n] reviews, checked [date]" plus a profile link | S | Shown only when confirmed; no AggregateRating, no quotes |
| LO dome, GSD shapes, TejoMed mark placeholder | The arch at every scale: shallow arch bottom on the hero (`border-radius: 0 0 50% 50% / 0 0 40px 40px`; desktop 64 px); arch-framed photo slots in `Inside.astro` with labels kept; an arch-plus-mark portrait fallback in `DoctorCards.astro` | S | No gradient, no second shape; labels stay (Gate 9 items 2 and 3) |
| Cassia sourced credentials, TejoMed licence nos. | `DoctorCards.astro` rows get "source, checked [date]"; `Footer.astro` "NY license [#] … NYSED link" | S | Slots until checked; no "board-certified" before an ABMS check |
| LO italic phrase (`phone/1-fold`) | `Hero.astro`: place names in Fraunces italic, white | S | Italic is not colour (Gate 9 item 9) |
| BB age tabs, LO age pages | `Services.astro` stays fully visible (better than tabs); add an "Expecting a baby" row as a slot if offered | S | Never invent a service |
| TejoMed "typical → here" (`phone/2-full`) | A future band once two documented facts exist (round-3 decision #5) | M | Every row is a claim, so it stays gated |

Avoid:
- dark-overlay hero text and small gold text (Cassia);
- reveal-hidden content and cookie walls (LO, TejoMed);
- puffery and fixed drawers over copy (GSD);
- the stats strip "10,000+ / 1200+ / 40+ years" (BB: red line);
- tracked-caps eyebrows and 01-04 markers (Gate 9 item 11);
- scarcity pills.

## F. Top 6 for our Home (ranked by trust, clarity, premium feel, conversion)
1. Tappable office numbers in the phone fold, plus the desktop utility row. `Hero.astro`, `Header.astro`.
2. The two-question visit picker. `Visits.astro`.
3. Proof strip with insurance, bridging the hero edge. `FactRow.astro`.
4. Dated per-office rating with a link out. `Reviews.astro`.
5. The arch at every scale. `global.css` `.arch`, `Hero`, `Inside`, `DoctorCards`.
6. The full-height menu dialog with office numbers and language help. `Header.astro`. Runner-up: credential source lines.

## G. Animation plan for our Home (ranked)

Tokens:
- `--dur-press:150ms`, `--dur-state:220ms`, `--dur-signature:500ms`
- `--ease-out:cubic-bezier(.22,1,.36,1)`, `--ease-std:cubic-bezier(.4,0,.2,1)`

Rules:
- Animate only `transform` and `opacity`.
- Put decoration inside `(prefers-reduced-motion: no-preference)`. Our global `reduce` rule makes everything else instant.
- Never hide content by default.
- Never animate the H1, the hero CTA, the hero photos (likely LCP) or the form.
- CSS only, apart from existing bundled module scripts. The CSP blocks inline scripts.

| # | Where | Trigger | Property, timing | Job | Reduced | Build |
|---|---|---|---|---|---|---|
| 1 | `.btn`, FAQ `summary`, office actions | `:active` | scale .97, press token | feedback | instant | extend `.btn:active` |
| 2 | `Faq.astro` | open | plus rotates 45°; answer opacity, translateY 4→0, state token | state change | instant | `details[open] > div { animation: rise … }`; rotate `[open] summary svg` |
| 3 | Menu dialog (C) and call dialog | open | opacity, scale .98→1, backdrop fade, state token; close instant | orientation | instant | `dialog[open]` transition plus `@starting-style` |
| 4 | Visit picker | choice | result opacity, translateY 6→0, state token | shows the answer | instant swap | `:has(input:checked)` plus `@starting-style`; no dimming below AA |
| 5 | "Full profile →", "Directions →" | hover, focus | arrow translateX 3 px, 180 ms `--ease-std` | affordance | none | inside `(hover:hover)`, and on `:focus-visible` |
| 6 | Header hairline (desktop) | page scroll | pseudo-element opacity 0→1 | shows the header is now over content | static line | `@supports (animation-timeline: scroll())`; default visible |
| 7 | **Signature (only one)**: `Services.astro` age rule | enters view | indigo rule scaleY 0→1, origin top, over `--dur-signature` | one practice from birth to adult | full line | `@supports (animation-timeline: view())`, `animation-range: entry 10% cover 40%`; default full |
| 8 | `StickyBar.astro` (exists) | hero leaves | translateY 100%→0, state token | brings back the action | instant | keep the module; tokenise the duration |

Never on Home:
- reveal-on-scroll;
- carousels or marquees;
- tickers or count-ups;
- a pulsing open-now dot;
- hero entrances, typewriter text, header shrink;
- scroll-jacking.

These follow U14.5-U14.13 and anti-slop tell 1. Before sign-off, check the page three ways: normal, reduced motion emulated, JS off (U14.19).
