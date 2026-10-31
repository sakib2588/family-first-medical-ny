# Nao Medical — https://naomedical.com/
Captured: 2026-10-30 (phone 390x844 @2x = 780px PNG, desktop 1280x800) · tier: adjacent (urgent + primary, 11 clinics) · source of find: SERP (Astoria primary care) · raw: phone/ desktop/ (1-fold, 2-full, tiles/), html/, meta.json
Method: phone fold + all 13 phone tiles (1700px of the 2x PNG each) viewed, then desktop fold + tiles 01-04. Page status 200 on both, no consoleErrors, no cookie wall or error page. Phone full-page PNG 21,270px tall (10,635 css px); desktop 7,144px. Things marked (U) are unverified against an outside source. Multi-language out of scope. Interactive states (menu dropdown, booking modal, clinic accordion) were NOT captured, only the closed state.

## Snapshot
Large NYC/LI group (11 clinics: Astoria, LIC, Jackson Heights, Jamaica, Crown Heights, Williamsburg, 174th St and Bartow Mall Bronx, StuyTown, Mineola, Hicksville) selling urgent care first, primary care second, then 19 service lines (psychiatry, ADHD, Spravato, DOT/TLC/immigration exams, STD/PrEP, weight management, etc). One hub page, dozens of SEO-style service/location pages behind it. PRIMARY ACTION = "Book an appointment" (opens a service picker modal, then book.naomedical.com per-clinic booking) with phone as secondary. Pediatrics is not named anywhere on the home page (text search of the HTML) -> this is NOT a pediatric competitor, it is a convenience/urgent-care benchmark.

## Phone (390x844) section by section
Order: header > hero > "What's new" promo carousel > service finder (chips + 19 cards) > "Healthcare that puts you first" stats > "200,000+ 5-star reviews" > "Find your nearest clinic" map > "Plan your visit" > "Before you book" accordion > "What would you like to book?" > footer.

| # | Section | Evidence | Notes |
|---|---|---|---|
| fold | Header + hero | 1-fold.png | Logo left, tappable phone number with handset icon center-right, hamburger right. White, thin rule. H1 is a huge serif (about 6 lines at 390px) and eats the fold; sub-line "Trusted High-Quality Healthcare: It's All About You."; second headline "Comprehensive healthcare, tailored to you" with green accent; line "Walk-in, book online, or use virtual care". Two buttons side by side at the very bottom of the fold: filled green "Book an appointment" and outlined "Find a clinic". Primary button sits right at the 844px edge, nothing below it but a clipped "What's new" label. The green (#8fbf7f-ish) fill with navy text is low-contrast on the label (U, not measured). |
| t00-t01 | Promo carousel | t01 | 5-dot carousel, first slide is a weight-loss promo ("1 Month Free...", capped at $99) with a stock-photo woman and "Prefer to book by phone? Call ... Mon-Fri 8AM-4PM EST" inside the image. Text is baked into the image (not real text, not selectable, small on phone). The ONLY place hours appear on the home page. |
| t01-t05 | Service finder | t01-t05 | Intro copy plus filter chips (All services, Everyday care, Mental and behavioral health, Medical exams and work, Sexual and preventive health, Ongoing support), counter "19 services shown", then a 2-column card grid with flat illustration, title, one-line description, "Explore care ->". About 3,400px (roughly 4 phone screens) of scrolling for 19 cards. Illustrations are reused (the same STD/PrEP/CABENUVA picture three times; the same therapy picture for therapy and ADHD) and the last three cards (Addiction, Weight, Nutrition) show empty tinted blocks at capture = lazy-load not finished or missing art. |
| t06-t07 | Stats band | t06, t07 | Navy band: stock photo (doctor + mother + child, generic) then three white cards: "14 years", "2 million patients", "300+ team members". Self-reported, no source. |
| t07-t08 | Reviews | t07, t08 | "200,000+ 5-Star Reviews" headline but NO review text, no stars, no rating shown: three cards (Astoria, StuyTown, Hicksville) each with only "Patient feedback" and an external Google Maps link, plus "More clinic review links". Claim is unprovable on-page. |
| t08 | Clinic finder | t08 | Static Google-style map with pins, "Explore all locations ->", then a collapsed bar "Clinic details and booking links" (the 11 clinics with addresses, Maps links and Book links are hidden inside it, closed in the capture). Map is not interactive in the screenshot, no ZIP search seen. No clinic card (address/hours/phone) visible without a tap. |
| t08-t09 | Plan your visit | t08, t09 | Three plain cards: NYC & Long Island (11 clinics), In person or virtual, Plan your visit (confirm insurance and costs). No steps, no CTA buttons in them. |
| t09-t10 | "Before you book" | t09, t10 | A green panel with 11 closed accordions (choose care, how care works, eligibility, what to bring, when to seek emergency care, results, availability/costs/insurance, triage, urgent vs primary, sources). Each header is 58 css px tall but the chevron is lower than the text (alignment glitch). Content is generic and closed; "What to bring" text exists in the HTML (ID, meds, insurance details, records). Collapsed insurance content = no accepted-plan list on the home page. |
| t11 | Final CTA | t11 | "What would you like to book?" with "call (917) 310-3371" underlined link and a navy "Choose a service" button (opens the same picker). |
| t11-t12 | Footer | t11, t12 | Blank navy gap where the logo should be (empty block above the social row, likely a missing/lazy logo), then LinkedIn/Facebook/Twitter/Instagram + Privacy policy, 6 service/page links, an ADA accommodation notice naming a contact person plus email and a second phone, a sentence saying an LLM assists answers, then "More care information" with 4 links and a stray "Care directory" heading with nothing under it. |

## Desktop (1280x800)
Fold: logo, 6 nav items wrapped onto two lines each (Our Services, Our Locations, Health & wellness, Corporate Health, Insurance & Billing, About Us), phone number as plain link, filled green "Book an Appointment" button, then a hamburger (a second menu). Hero is two columns: H1 and CTAs left, promo carousel right (immigration exam "one fixed price $350" slide visible). The same text-in-image problem as phone. Service grid is 5 columns x 4 rows, cards identical to phone. Stats band split photo/3 cards. Reviews are 3 cards in a row. Map is full width with pins (11). Accordion panel is a centered narrow card. Footer is one navy block with a blank logo slot, social links left, 6 links right. Desktop nav labels wrap (cramped, looks unpolished). No sticky header screenshot proof (fixedEls on desktop: menu-dropdown + home-map figure only), so the header is probably not sticky (U).

## STRENGTHS
1. **Dual hero CTA, "Book an appointment" + "Find a clinic"** (hero, fold). Matches the two real intents (I know what I need / I need the nearest one); both at thumb zone on phone. Evidence: phone 1-fold.png.
2. **Phone number in the header on mobile** as a visible tappable number, not hidden in the hamburger (header, all pages). Zero-tap discovery for call intent. Evidence: phone 1-fold.png; 15 tel: links in meta.json (also in the service modal and "call (917)..." lines).
3. **Booking path per clinic is deep-linked** (`book.naomedical.com/appointment/urgent-care?facility=<clinic>&source=marketing-page`) so a click from the clinic list lands on a pre-selected clinic. Why it works: no re-asking the clinic. Evidence: meta.json links.
4. **Service-first picker modal "What would you like to book? -> Choose a service"** repeated at hero, finder and page end. A single mental model for 19 services. Evidence: t11, html text "Choose a service to continue to the appropriate appointment or information page".
5. **Plain-language "what to bring" and "when to seek emergency care" content + FAQPage JSON-LD** (accordion). Rich result eligible and reassures first-timers. Evidence: t09-t10, jsonld types.
6. **Clear brand system**: navy serif display + sans body, green accent, rounded cards, flat illustration set; consistent and calm. Evidence: all tiles.
7. **Per-clinic Google review links** (3 shown, others in "More") - at least reviews are verifiable off-site. Evidence: t07.

## FLAWS (severity, our fix)
1. **H: "200,000+ 5-Star Reviews" with no visible review, rating or star** (reviews). Claim without proof reads like marketing. Fix: show a real Google rating + 3 verbatim reviews with names/initials and date, and link to the Google profile; never state a count we cannot show.
2. **H: Clinic details hidden behind a collapsed bar on both viewports** (finder). The core local-info card (address, today's hours, phone, buttons) is not in view or in the first-load DOM tap path. Fix: visible location/hours card(s) in the page, open by default.
3. **H: Hero H1 six lines tall on phone** (fold). Headline is 60% of the first screen, CTAs sit on the fold's bottom edge. Fix: H1 max 2-3 lines, CTAs above the fold with margin.
4. **M: Key info is baked into promo images** (carousel: hours, price, phone). Not text, not accessible, not SEO-indexable, small on phone (22 of 41 images have no alt in meta.json). Fix: real text, alt on every image.
5. **M: 19 service cards = 4 phone screens** with duplicated art and empty image slots (t05). Fix: 6-8 core services, one card style, group the rest.
6. **M: Blank footer logo slot and stray empty "Care directory" heading; chevron misaligned in accordions** (t11/t12/t10). Polish/QA gaps that signal a rushed build. Fix: QA pass at 360, 390, 768, 1280.
7. **M: No visible hours for the practice on the home page** except inside a promo image (Mon-Fri 8-4 EST is for the phone line, not the clinics). Fix: hours in a card + in the sticky/footer.
8. **M: No sticky phone/book bar on mobile** (fixedEls only dropdown). After the first fold, booking requires scrolling back up to the header. Fix: bottom action bar.
9. **L: Pediatrics not mentioned.** Irrelevant for them, an opportunity for us.
10. **L: Insurance appears as "Insurance & Billing" page and a collapsed question only** (no plan list on home). Fix: put 6-10 plan names or "we accept most major plans" with a verify-by-phone line on the home page.
11. **L: Stats (14 years, 2 million, 300+) unsourced** (t06).

## Conversion machinery inventory
- CTAs: "Book an Appointment" (header desktop, hero, modal triggers "Choose a service" x2, per-clinic Book buttons inside the finder), "Find a clinic", "Explore care ->" x19, tel: link (header, phone line text, 15 tel links in total incl. a second number (917) 633-1548 for admin/ADA).
- Booking path: phone: tap hero button (1) > service picker modal (2, not captured) > pick service (3) > external book.naomedical.com page for the clinic (4+) = about 4 taps to a clinic booking page; clinic-level book link from the finder is 3 (open accordion, pick clinic, Book). Call path: 1 tap on header number (1).
- Sticky: no sticky bar or header proof; only a dropdown menu element is fixed.
- Forms on site: 0 forms in the HTML (meta.json forms []); booking is on a separate domain (book.naomedical.com), fields there NOT captured.
- Trust/proof: 200,000+ 5-star claim, 14 years / 2 million / 300+ stats, Google review links, stock doctor photo. No licences/board certs on home; provider names (Dr. Priti Jain, Dr. Sandeep Jain) only in nav.
- Insurance: nav "Insurance & Billing", collapsed FAQ item, no plan list on home.
- New-patient flow: none distinct; "Before you book" accordion with what to bring is the closest.
- Hours/location cards: none on home (see flaws); map + 11 clinic addresses hidden in a collapsed bar; clinics each have their own page.
- Patient portal: link in the mobile menu (eClinicalWorks external portal, mycw17.eclinicalweb.com).

## Design notes
- Type: tall light-weight display serif (Canela-like, (U) font name) for headlines, humanist sans for body; large H sizes, comfortable body size. Letter-spacing in the sans body looks irregular in the screenshots ("ap point ment" kerning gaps on a button).
- Color: deep navy + sage/mint green accent, off-white and pale-mint section backgrounds; green button with navy text.
- Imagery: flat vector illustration for services (consistent but repeated), one stock photo, text-heavy promo graphics. No real clinic or staff photos on the home page.
- Density: medium-low in the sections, but long (10,635 css px phone).
- Mobile nav: hamburger only; header keeps logo + phone number.

## Footer / legal (link to ../../legal/nao-medical/analysis.md if produced)
Groups, all links: (a) social: LinkedIn, Facebook, Twitter, Instagram; (b) Privacy policy (privacy-policy.html); (c) quick links: Urgent Care, Primary Care, Nutrition Counseling, Locations, Insurance & Billing, About Us; (d) ADA/website accessibility notice with named contact, email service@naomedical.com and (917) 633-1548 ext 288, plus an AI-assistance disclosure ("large language model wherever applicable"); (e) "More care information": Care directory, Nao Medical Locations, Privacy Policy again, one clinic landing link (174th Street). Mobile menu/top bar also: Careers, Patient Portal, Corporate Health, DOT/immigration exams. Legal links present: privacy only. ABSENT in the footer: Terms of use, HIPAA Notice of Privacy Practices (could be inside the privacy page, not verified), Non-discrimination/Section 1557 notice, price transparency, accessibility statement page (only inline notice), copyright line. No cookie banner seen in the screenshots.

## Tech facts (meta.json + html/phone.html)
- Page title: "Urgent & primary care in NYC & Long Island | Nao Medical"; H1 single; 41 images, 22 without alt; load 9.4s (phone, headless) / 8.4s (desktop).
- Forms: 0. Inputs: none.
- JSON-LD: MedicalOrganization + WebPage, WebSite, FAQPage (Question/Answer). No AggregateRating or Review markup (consistent with unproven 200,000 claim).
- Trackers in captured HTML: none of GTM/GA/Meta/Hotjar found by grep. Notable: a script called `/assets/privacy/no-tracking-20261028.js` (dated 2026-10-28), 4 mentions of eclinicalweb (portal), WordPress path `wp-content` (6x) = likely WordPress. Third-party script loading may happen at runtime and was not tested here.
- Fixed elements: DIV.menu-dropdown (phone); +FIGURE.home-map (desktop).
- Phone numbers: (917) 310-3371 main; (917) 633-1548 admin/ADA.
- tel: links use the unformatted "(917) 310-3371" with spaces/parens in the href (non-standard, works on most phones but better as tel:+19173103371).

## Unverified claims on the site
200,000+ 5-star reviews; 14 years; 2 million patients; 300+ team members; "$350 fixed price" immigration exam and "1 month free ... capped at $99" promo (in images); insurance acceptance (not stated); the Mon-Fri 8AM-4PM EST phone hours. Clinic hours and booking-modal behavior not verified.

## Steal / avoid for Family First
Steal: hero pair "Book" + "Find a clinic"; visible phone in the mobile header; deep-linked per-location booking; FAQPage markup; "what to bring" content. Avoid: reviews headline without real reviews; hiding location details in a collapsed bar; text-in-image promos; huge H1 on phone; unsourced stat band.
