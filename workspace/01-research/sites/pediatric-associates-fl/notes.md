# Pediatric Associates (Florida) — https://www.pediatricassociates.com
Captured: 2026-10-30 (phone 390x844 @2x, desktop 1280x800; the html/phone.html and desktop.html are the same size but differ in bytes) · tier: direct on service model (pediatrics, same-day sick, walk-in, after-hours), but a 95+ location Florida group, so adjacent on scale · source of find: candidates.md (book-appointment repeated; per-office cards; new patient guide)
Raw: phone/{1-fold,2-full}.png (+11 tiles), desktop/ (4 tiles), html/, meta.json. Multi-language out of scope (it has an English/Spanish switch in the top bar; not reviewed).
Capture caveat (honest): the map in "Your neighborhood pediatricians" never loaded in either view (a grey box "Loading map..." and an orange spinner on a green panel, phone t04-t05, desktop t01). The hero is a 3-slide carousel with a seasonal slide ("Power up! Say BOO to flu", Halloween costume photo); slides 2 and 3 not seen. No cookie wall visible in the screenshots, though a TrustArc consent manager ID is in the page data layer (U whether it shows for NY/other visitors).

## Snapshot
Who: Pediatric Associates, a Florida-wide pediatric group ("70+ years", "95+ locations across Florida" (vendor claims), care from birth to age 21). Services: well visits, same-day sick, walk-in, after-hours and weekend, newborn and prenatal visits, in-house labs and X-ray, virtual visits through an app (KidzDocNow), allergy/asthma, behavioral health, EKG/ECHO. PRIMARY ACTION: "BOOK AN APPOINTMENT" (every button goes to a healow.com patient-portal scheduling URL). Secondary: find your location by ZIP. Phone numbers are not on the home page body; 97 tel: links sit inside the Locations & Providers mega-menu data. Taps to book on phone: 1 (Book an appointment is visible in the first screen, under the header), then the Healow flow off-capture.

## Phone (390x844) section by section
Order: header (logo, search, hamburger) > full-width Book an Appointment bar > hero carousel (Power up!, 2 buttons) > "70+ years" green band > 4 feature cards (Exceptional pediatric care / More offices, more access / All-in-one care / Virtual visits / After hours & weekend visits) > "Your neighborhood pediatricians" ZIP search + map > "Trusted care from day one" + vaccines resource (VaxFacts) > "Hear from our families" review carousel > insurance band > "Ready when you are" + Book > footer accordions.

| # | Section | What it does | CTA | Flaws | Strengths |
|---|---|---|---|---|---|
| 1 | Header | logo (orange mark), search button (grey tile), green hamburger tile | none in bar | hamburger holds all nav, including patient portal, pay bill and telehealth (utility links are only in the top bar on desktop; on phone they live in the menu (U)) | big square tap targets (88 px at 2x = 44 css px) |
| 2 | Book bar | a full-width dark green "BOOK AN APPOINTMENT" button directly under the header, before the hero | Book an appointment | it is a normal block, not sticky (fixedEls lists a sticky header, not a bar) | the primary CTA is the first thing in the page on phone |
| 3 | Hero carousel | seasonal slide: cut-out costume photo on abstract shapes, "Power up!" + "Say 'BOO' to flu", Book + Learn more (both identical green style) | Book an appointment, Learn more | hero is seasonal flu/Halloween content and not the value prop; the H1 for SEO is further down ("70+ years of healthy kids and parents choosing Pediatric Associates"); 2 equal-weight buttons; carousel with 3 dots | bright illustrated brand style, child-focused |
| 4 | "70+ years" band | green block, headline, 1 sentence, Learn more about us | link | claim-only trust ("70+ years", "highest quality of care") | clear brand claim in white on green |
| 5 | Feature cards | 5 outlined/colored cards with icons: Exceptional pediatric care, More offices more access (amber, "visit any location in the region"), All-in-one care (in-house labs and X-rays), Virtual visits (KidzDocNow app), After hours & weekend visits ("sniffles, fevers and uh-oh moments"); each Learn more | Learn more | all five link to info pages, none books directly | the three differentiators for parents (labs in-house, evenings/weekends, virtual) are stated in plain words |
| 6 | Neighborhood search | "Your neighborhood pediatricians": ZIP/city/address field + Search + "95+ locations" sentence + map | Search | map didn't load in capture; results go to a locations page | a location finder directly on the home |
| 7 | Trusted care | photo + "from the very first moments after birth ... all the way to age 21"; "Your medical home" link; "A comprehensive resource for vaccines in 2026" + vaxfacts.info link | links | external vaccine microsite promotion in the home (vendor-adjacent); big images (203 images in the DOM, many are menu thumbnails (U)) | vaccine-confidence content for parents |
| 8 | Reviews | "Hear from our families", carousel with 5 green stars, a one-line quote, first name + initial (e.g. "Doctor and staff were AWESOME!" Mary S.) | arrows | the first quote is 5 words; stars are decorative, no aggregate or count; review source not named | short real-sounding quotes, first-name attribution |
| 9 | Insurance band | amber band with a shield icon, "We accept most major insurances", "Medicaid, Commercial & Employer Group, or an Individual & Family Marketplace Plan", View all insurances accepted | link | no logos or plan names on the home; "most major" is vague | the three plan types (Medicaid, employer, marketplace) in plain words |
| 10 | Closing CTA | "Ready when you are" + Book an Appointment | Book | | repeated CTA |
| 11 | Footer | logo, 5 legal links, language, Locations and Services accordions, Facebook, Instagram | none | the footer has very few links on phone because Locations and Services are collapsed | legal links present |

Sticky/fixed: header (sticky top), a sticky panel in the menu/search overlay, a full-screen hidden overlay. No sticky bottom Book or call bar on phone.

## Desktop (1280x800)
Fold: grey utility bar (Telehealth visits, Patient portal, Pay bill, Careers, Contact us, language), main header with logo, 5 nav items (Locations & Providers, Your Visit, Services, About Us, Knowledge Center), a dark-green "BOOK AN APPOINTMENT" button and a search tile. Then a 2-column hero (seasonal copy + 2 buttons left, illustrated costume child right, carousel arrows). Lower: 4 feature cards in one row, a split green panel with a ZIP search on the left and map on the right (map unloaded), a 2-image row (care team with a child; a vaccine) with the "Trusted care from day one" and VaxFacts text, review carousel (2 visible, second greyed), amber insurance band (icon left, text right), Book CTA, footer with legal links to the right of the logo and two collapsed accordions (Locations, Services) even on desktop. Mega-menu (links list) shows the full IA: Locations & Providers (county regions, Find a Provider), Your Visit (New patient guide, visit types, resources, insurance, forms, records), Services (8), About Us (Who we are, medical home, hospital affiliations, Refer a patient, blog), Knowledge Center (vaccines, well-visit schedule, health topics, classes and events).

## Strengths
- S1 Book is the first block under the phone header and also in the header on desktop, in the same dark green, and repeats at the end (1-fold.png phone and desktop; t07).
- S2 The three differentiators for parents are surfaced as plain cards: in-house labs and X-ray, after-hours and weekends, virtual visits (phone t01/t02 montage).
- S3 Information architecture for parents: Your Visit menu with a "New patient guide", Newborn and Prenatal visits, Same-day sick, Walk-in, Well visits by age and stage (Babies 0-11 mo, Toddlers, Preschool, Grade school, Teen, Young adult 19-21); a Knowledge Center and vaccine schedule (links list). This is the best parent-facing IA of the five sites.
- S4 A location finder on the page (ZIP/city/address) and county-level region pages.
- S5 Friendly, kid-first visual identity: orange mark, saturated green and amber, illustrated blobs and icons, Poppins-like geometric sans; high contrast white text on green (t01/t07).
- S6 Insurance stated in plain categories (Medicaid, employer, marketplace) with a link to the full list (t07).
- S7 Legal basics: NPP, Florida Patient's Rights and Responsibilities, Website Privacy Statement, Site Map in the footer (t07).

## Flaws (severity, our fix)
- F1 M: seasonal campaign owns the hero (Halloween flu shot): the value prop and the H1 ("70+ years...") are not in the first screen. Our fix: permanent hero that says who/where/ages and offers Call + Book, with seasonal content in a thin banner.
- F2 M: no phone number visible in the page body or a sticky call bar on phone despite 97 tel: links in the menu; a parent with a sick child cannot call from the home in one tap. Our fix: sticky Call/Book bar.
- F3 M: the map did not load (spinner + "Loading map...") on both views: a heavy embed (Google Maps JS) that delays the section and looks broken. Our fix: static map image or just an address card with directions link.
- F4 M: 203 images and a 1.28 MB HTML document; very heavy DOM for a home page (the mega-menu includes the full location list with phone numbers in the markup, 894 links). Our fix: lazy-load menus.
- F5 M: reviews carousel with 5 stars and one-line quotes but no source (Google/Healthgrades?), count or date. Our fix: label source, link to the review profile, show count and date if used.
- F6 L: two same-style green buttons ("Book" and "Learn more") side by side in the hero, no primary/secondary hierarchy.
- F7 L: the vaccine section promotes an external site (vaxfacts.info), sending parents off-site.
- F8 L: footer collapses Locations and Services into accordions on both views; footer has no phone or hours.
- F9 L: grey "Loading..." states and carousels that hide content (hero slides 2-3, review 2+), no static alternative.

## Conversion machinery inventory
- CTAs: BOOK AN APPOINTMENT (header on desktop, first block on phone, hero, closing; 4 instances in the links list), Learn more (x many), Search (ZIP), View all insurances accepted, Telehealth visits / Patient portal / Pay bill in the utility bar, Find a Provider, Refer a patient. All booking links go to healow.com practice page "pediatric-associates-family-of-companies-thepafccom-22293" (eClinicalWorks Healow open scheduling; JSON-LD ContactPoint "appointments" points to the same URL).
- Booking path: Book -> healow.com scheduling flow (external, off-capture; (U) steps).
- Taps on phone: 1 to start.
- Sticky: header only; no bottom bar.
- Forms: 2 search forms (site search; location autocomplete with a hidden brand_id). No contact or booking form on the page.
- Trust/proof: "70+ years", "95+ locations" (claims), review carousel with stars, hospital affiliations page, medical home page, newborn and prenatal visits.
- Insurance: amber band on home + /insurance page.
- New-patient flow: Your Visit > New patient guide, forms and policies, request medical records (pages).
- Hours/location cards: not on the home body; per-location pages via the finder. After-hours and weekend care promoted as a card and a page.

## Design notes
Type: rounded geometric sans (Poppins-like) in large dark headings, widely letter-spaced uppercase buttons. Colour: strong green (#167a43-ish), amber/orange (#ffab00-ish), white, light gray utility bar; illustration palette adds sky blue, coral, navy. Imagery: cut-out kids on abstract shapes plus real care-team photos; illustrated icons. Density: medium; large cards. Mobile nav: hamburger tile + a search tile; the primary CTA sits below the header as a full-width bar.

## Footer inventory
Logo; legal links (5): Florida Patient's Rights & Responsibilities, Notice of Privacy Practices, Patient Referrals, Site Map, Website Privacy Statement; language selector (English; Spanish exists at /es-mx); accordions: Locations, Services; Facebook, Instagram; (c) 2026. Top utility bar (desktop): Telehealth visits, Patient portal, Pay bill, Careers, Contact us. LEGAL PRESENT: NPP, Website Privacy Statement, state patient-rights notice. ABSENT in footer: Terms of use, accessibility statement, nondiscrimination notice (U, may exist elsewhere).

## Tech facts (meta.json + html)
- Status 200, load 4.3 s, 0 console errors, lang=en, viewport meta, 203 images (0 without alt per meta), scrollHeight 8,679 css px on phone, HTML 1.28 MB.
- Forms: 2 (site search `q`; location autocomplete, hidden `brand_id`).
- JSON-LD: one @graph with MedicalOrganization (name, medicalSpecialty Pediatric, areaServed State Florida, sameAs Facebook/Instagram, ContactPoint contactType "appointments" with the Healow URL), OfferCatalog of services with Offer items. NO Review/AggregateRating markup. No per-location LocalBusiness markup on this page.
- Tracking clues in html: Google Tag Manager container GTM-WBDLPDR6 and a GA4-style dataLayer (page_locale, brand_id, trustarc_consent_manager_id), a TrustArc consent manager reference; 103 healow.com links (booking), 97 Google refs (maps/fonts). No Facebook pixel string found, no chat widget found. (References only, not network-verified.)
- Platform: custom/CMS-driven (assets under /assets/media/, no generator tag; (U) CMS), Tailwind-style utility classes (sticky top-0 z-50).
- 97 tel: links, all location phone numbers inside the menu (visible only inside the menu overlay).

## Unverified claims on the site (do not reuse)
"70+ years of healthy kids and parents"; "95+ locations across Florida"; "all the way to age 21"; "highest quality of care"; "We accept most major insurances"; "Zero waiting time" style review quotes (customer quotes, source not named); "pediatrician-supported clarity" (VaxFacts); in-house lab and X-ray availability at every office (U).
