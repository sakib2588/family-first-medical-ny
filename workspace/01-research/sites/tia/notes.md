# Tia Health — https://asktia.com
Captured: 2026-10-30 (phone 390x844 @2x, desktop 1280x800) · tier: aspirational (women's primary care + gynecology, clinics in NYC/LA/SF/AZ + virtual) · source of find: candidates.md #9 (4-step first-visit flow, "See if you're in network", cash price list)
Raw: phone/{1-fold,2-full}.png (16 tiles), desktop/ (6 tiles), html/, meta.json. Multi-language out of scope.
Capture caveat (honest): no cookie wall in the screenshots (a OneTrust consent layer exists in the DOM, console shows "OneTrust not available", so the banner probably did not show in headless; (U)). Several sections are BLANK bands in the full-page captures (phone tiles t10, t11 and parts of t07/t09: partner logos, care team, locations map sit in unpainted scroll-reveal space; desktop t03-t05 also show big empty beige blocks). So "Meet our care team", "health system partners" and "Find a Tia clinic" are known only from meta.json headings and links, not seen.

## Snapshot
Who: Tia Health, women's-health clinic + virtual care, "whole-person" primary care, gynecology, mental health, skin, hormone, menopause. Audience: women adults, NOT pediatrics. Money: accepts "most PPO" insurance; membership plans Signature and Essential, cash price lists per city, "Predictable Payments" page (prices are on sub-pages, not on the home). PRIMARY ACTION: "Book now" / "Book an appointment" (every one goes to member.asktia.com/signup/, a separate member app). No phone number on the home page at all (0 tel: links). Taps to book on phone: 1 from the first screen (Book now in the header, then the signup flow off-capture).

## Phone (390x844) section by section
Order: orange announcement bar > header > hero > insurance logos > services (photo cards) > "Why Tia" stats > symptoms list > care-that's-personal card > How Tia works (4 steps) > plan options (Signature/Essential) > [partners, care team, clinics: unpainted] > newsletter > FAQ > footer.

| # | Section | What it does | CTA | Flaws | Strengths |
|---|---|---|---|---|---|
| 0 | Announcement bar | orange: "Open Enrollment begins November 1. Not sure what you need? Take our insurance quiz..." | text link to the quiz (learn.asktia.com) | 3 lines, 80px of the fold; seasonal | timely, plan-selection aid |
| 1 | Header | logo left, coral "Book now" pill, hamburger | Book now | not sticky-verified; no Log in or phone without opening the menu | CTA always in the header |
| 2 | Hero | full-bleed warm clinic-interior photo with dark wash; serif H1 "The highest quality, most comprehensive care for women" ("women" italic); 5 pink check bullets (whole-person care in one place; care within days, not months; online and in-clinic; built by women, for women; personalized) ; 2 buttons | Book an appointment (coral) + Find a clinic near you (cream) | H1 5 lines (about 480 css px) and white text over a detailed photo: bullets read poorly over the shelves; the second button is 44px tall but stacked and only half-width | clear who-for, speed promise ("within days") and online + in-clinic in the first screen |
| 3 | Insurance | "We accept most PPO insurances." 6 payer tiles (Anthem BCBS, Cigna, Aetna, Oscar, UnitedHealthcare, Emblem) + coral "See if you're in network" | See if you're in network | "most PPO" is vague; the CTA goes to the same signup as Book now | placed right after the hero, payers as large logo tiles |
| 4 | Services | "Services we offer": 8 big photo cards each with its own "Book appointment ->" (Primary care, Sexual & Gynecological, Weight/Metabolic, Perimenopause/Menopause, Skin, Mental health, ...) | Book appointment on every card | each card is 600px tall on phone, so 8 cards = about 5,000px of scroll; white text on photos with dark gradient only | real clinicians photographed in warm rooms; every service card is also a booking CTA |
| 5 | Why Tia | magenta band, 4 stats: 90% patient satisfaction (9+/10), 2.5x better prevention (cervical screening), 6 care types - 1 roof, +8.8 quality of life boost ("nearly doubles the industry standard") | none | all self-reported vendor stats with no source or footnote visible | big-number style is scannable |
| 6 | Symptoms | "Symptoms we treat" pill list (vaginal infection, cramps, bleeding, sleep, stomach, cold/flu, ear, acne, breast concerns) with icons, each links to a /help-with/ page | each row links to a symptom page | 9 rows x 70px; links lead to SEO pages not to booking | patient-language entry points; SEO landing pages |
| 7 | Care that's personal | cream card + photo + Get care today | Get care today | thin | |
| 8 | How Tia works | 4 steps: 01 Confirm your coverage (check insurance or see cash price list), 02 Choose your care, 03 Book your first visit (in person or virtual), 04 Start your care plan; Book an appointment + Learn about our care options | Book an appointment | an unpainted 700px gap above the steps in the capture (probably an animated illustration, (U)) | the first-visit flow in 4 plain steps; mentions cash price list |
| 9 | Plan options | Signature (magenta card: "for you if..." 4 check items) vs Essential (white card, 4 items) | Start with Signature (coral), Start with Essential (sand) | no price shown on the home cards (prices live on /membership/ and the list pages) | "for you if" framing, self-selection |
| 10-11 | Partners / Care team / Clinics | H2s only in meta ("Our providers are connected to leading health systems", "Meet our Care Team", "Find a Tia clinic near you"); not painted | | not reviewable | |
| 12 | Newsletter | email + phone + unchecked SMS/email marketing consent checkbox, disabled Sign Up until the box is checked | Sign Up | collects PHONE for marketing with an explicit consent line | consent text is explicit (promotional, STOP/HELP) |
| 13 | FAQ | 6 accordions (what's different from a regular doctor's office, primary care, who is Tia for, insurance, cost, membership) | none | FAQPage JSON-LD present | answers insurance and cost objections |
| 14 | Footer | magenta, see inventory | none | footer has the newsletter form a second time | legal links all present |

Sticky/fixed (fixedEls): skip link, header, mobile menu panel, mobile buttons container (a Book now strip inside the header), OneTrust dark filter + preference center. There is no bottom sticky call/book bar seen in captures; the header "Book now" is the persistent CTA.

## Desktop (1280x800)
Fold: orange bar, then header with logo, 5 dropdown nav items (Services & Symptoms, Locations, Insurance & Pricing, How It Works, Resources) plus coral "Book now" and outlined "Log In", then a 50/50 hero: serif H1 + 5 bullets + 2 buttons left, a branded wall photo (magenta arch, "Finally. Care for the whole you.") right. Both CTAs sit on the lower edge of the fold (y about 740-790; cut by the fold at 800). Services become a 3x3 photo grid, symptoms become a 2-col list with a portrait, Why Tia is a 4-column stat band, plan options two cards side by side. Footer is 5 columns. Large empty beige blocks in the capture, same lazy-reveal issue.

## Strengths
- S1 Insurance is the first content after the hero (phone t01): 6 large payer tiles plus "See if you're in network". Evidence: tile t01.
- S2 Every service card carries its own "Book appointment" arrow, and the header carries "Book now": booking is never more than one tap away (phone t02, t03).
- S3 A 4-step first-visit explanation that includes coverage and cash price (t06-t07).
- S4 "Signature vs Essential" self-selection with "is for you if..." lists (t07-t09), a good pattern for comparing visit types or plans.
- S5 Strong brand system: warm cream, magenta, coral, serif display with italic emphasis; real clinician and patient photography (1-fold.png, t02, t03).
- S6 Symptom-led SEO architecture: /help-with/ pages for each symptom, /services/ pages per service, per-city pages and per-city cash price lists (links list).
- S7 Legal and billing transparency: Patient Billing Policy, NPP, Membership Terms, Website Terms, Privacy Policy in the footer; explicit SMS-marketing consent text (t12).

## Flaws (severity, our fix)
- F1 H (privacy/HIPAA risk we must NOT copy): a heavy tracker stack on a healthcare site, see Tech facts (GTM, Meta pixel, TikTok pixel, Bing UET, Amplitude, Intercom, Acuity, OneTrust). Our fix: none of these; first-party anonymous analytics only after counsel review; BAA for any form/chat vendor.
- F2 M: no phone number anywhere on the page (0 tel: links), so a worried parent cannot call. Our fix: tel: in header and a sticky bar.
- F3 M: hero text over a detailed photograph; white bullets lose contrast over shelves (1-fold.png). Our fix: solid panel or stronger overlay.
- F4 M: self-reported stats without source ("90% patient satisfaction", "2.5x better prevention", "nearly doubles the industry standard") (t03). Our fix: no stat without a footnote and date.
- F5 M: Services photo cards 600px tall each on phone; page is about 12,800 css px; important info (care team, clinics) sits very far down. Our fix: compact 2-col service chips with one CTA below.
- F6 M: console error "OneTrust not available" on load; consent layer may block or race (meta consoleErrors). 
- F7 L: 23 of 46 images have no alt text (meta). 
- F8 L: plan cards show no price on the home page (prices only on sub-pages). Our fix: self-pay price or "call for visit price" on the home.
- F9 L: unpainted blocks (see caveat) suggest scroll-triggered reveals; content hidden until JS runs.

## Conversion machinery inventory
- CTAs: Book now (header, coral), Book an appointment (hero, how-it-works), Find a clinic near you, See if you're in network, Book appointment (x8 on cards), Get care today, Start with Signature / Essential, Book a virtual visit. All booking CTAs go to https://member.asktia.com/signup/.
- Booking path: Book -> member signup (separate app subdomain; off-capture).
- Taps on phone: 1 to reach the signup.
- Sticky: header (with Book now), consent layer. No bottom bar.
- Forms: newsletter (email, phone, consent checkbox, submit) twice (home + footer). No booking form on page.
- Trust/proof: 90% satisfaction stat, "connected to leading health systems" section (not painted), care team section, 6 payer tiles, press page, clinical research page.
- Insurance: payer tiles + quiz in the banner + FAQ + /insurance/ + cash price lists per city.
- New patient flow: 4 steps on page (coverage, care, book, plan).
- Hours/location cards: none on the home; /locations/ with city pages (Los Angeles, New York, San Francisco, Arizona, Virtual).

## Design notes
Type: refined serif display (looks like a Newsreader/"Tiempos"-style, (U) font) with italic accent word, grotesk body with slashed zero numerals. Colour: magenta/plum (#8a1a4b-ish), coral CTA (#f9524c-ish), cream and sand backgrounds, orange announcement. Imagery: documentary-style photos of real providers, warm interiors, dark gradient overlays. Density: medium; many large photo cards; mobile nav is a hamburger with a persistent Book now. Corners: soft 8-12px cards, pill buttons.

## Footer inventory
Brand + tagline "Whole-person healthcare designed around you"; Instagram and TikTok; newsletter form (email, phone, consent); groups: Services (Primary Care, Gynecology, Mental Health, Skin Care, All Services); Locations (Los Angeles, San Francisco, New York, Arizona); Company (About Us, Leadership, Careers, Partners, Contact Us); Resources (Insurance, Service List Prices, Blog, Press Center, Clinical Research, FAQs [intercom help]); legal row: Patient Billing Policy, NPP (PDF), Membership Terms, Website Terms, Privacy Policy; (c) Tia 2026. LEGAL PRESENT: Privacy, NPP, Terms x2, Billing. ABSENT: accessibility statement, nondiscrimination notice, no HIPAA badge.

## Tech facts (meta.json + html)
- Status 200, load 22.5 s (capture), 1 console error: "Error getting location: OneTrust not available".
- Stack: Gatsby 2.22.15 (generator meta), Sanity CDN (cdn.sanity.io, 45 refs) for images/content, own app at member.asktia.com, fonts from Google Fonts.
- Third parties found in html (references, not network-verified): googletagmanager (GTM), connect.facebook.net (Meta pixel, fbq), analytics.tiktok.com (TikTok pixel), bat.bing.com (Microsoft UET), cdn.amplitude.com, widget.intercom.io (chat) and intercom.help (FAQ), cdn.cookielaw.org (OneTrust CMP), acuityplatform.com (ad tech), verifi.pdscrb.com (privacy/identity script, (U)), cdn.oursprivacy.com, a cloudfront CDN, a Yext string.
- Forms: 2, both newsletter (email, phone, consent checkbox, submit).
- JSON-LD: 1 block with FAQPage/Question/Answer only. No MedicalClinic, no LocalBusiness, no Review/AggregateRating. (Local pages may carry more, not captured.)
- Headings: H1 once; H2 for each section; 7 repeated "We value your privacy." H2s from the OneTrust DOM (heading noise).
- Images 46, 23 without alt.

## Unverified claims on the site (do not reuse)
"Care within days, not months"; "90% patient satisfaction (9+ out of 10)"; "2.5x better prevention / cervical cancer screening rates"; "+8.8 quality of life boost ... nearly doubles the industry standard"; "most PPO insurances"; "connected to leading health systems"; "Built by women, for women".
