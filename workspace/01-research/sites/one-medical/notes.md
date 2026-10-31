# Amazon One Medical — https://www.onemedical.com
Captured: 2026-10-30 (PHONE ONLY: 390x844) · tier: aspirational (national membership primary care + pediatrics, Amazon-owned) · source of find: candidates.md #10 (digital-first benchmark; was a 403 on text fetch)
DESKTOP WAS BLOCKED: desktop/1-fold.png and 2-full.png (identical 34 KB files) are a CloudFront "403 ERROR: The request could not be satisfied" page; html/desktop.html is that same error (923 bytes), meta.json desktop view = status 403, h1 "403 ERROR". Nothing about the desktop layout can be reviewed from these captures; we did not try to evade the block. Everything below is the PHONE view only. Multi-language out of scope.
Raw: phone/{1-fold,2-full}.png (2-full is 1188 px wide, see the caveat), phone/tiles (7), html/phone.html (233 KB), meta.json.
Capture caveat (honest): the phone full-page PNG is 1188 px wide instead of 780 (so the rendered layout width was about 594 css px, wider than the 390 viewport): the announcement text overflows the right edge ("adults 65 and ol...") in the fold shot, and in the tiles the content hugs the left two thirds with white on the right. This is probably a horizontal-overflow bug in the page or an artefact of the capture (we cannot tell which; (U)). Also several feature rows lack their icons/images in the capture (blank bands in tiles t02 and t03, where the 5 value-prop rows are only text), so lazy-loaded imagery did not paint. Only 5 images are in the DOM.

## Snapshot
Who: Amazon One Medical (1Life Healthcare, Inc.), membership primary care, in-office and remote (video, messaging), offices in about 25 US metros incl. New York and New Jersey; includes pediatrics (/kids/, /services/kids/), 65+ care, mental health, lab, Amazon Pharmacy, employer plans. Audience: adults first; kids secondary. Price on home: "Membership costs only $99/year" (member price). PRIMARY ACTION: "Book an appointment" (to health.amazon.com/onemedical/service-areas/) and "Join now" (to app.onemedical.com/registration/signup). No phone number (0 tel: links). Taps to book on phone: 1 from the first screen to the service-area picker, then app signup (off-capture).

## Phone (390x844) section by section
Order: peach announcement banner (Medicare enrollment) > header (logo + hamburger) > hero > photo > tabs-like service cards > value-prop rows (insurance, same/next-day, longer appointments, labs, services, offices, providers) > membership panel ($99/yr) > "See what makes One Medical different" video > "Become a One Medical patient" CTA band > footer.

| # | Section | What it does | CTA | Flaws | Strengths |
|---|---|---|---|---|---|
| 0 | Announcement banner | peach, "Medicare Annual Enrollment is from Oct. 15 to Dec. 7. Are you ready? | Discover Primary Care designed for adults 65 and older" | text link with chevron | the second line is cut off at the right edge; 3 lines (140 css px of the fold); seasonal and about a different audience than a parent | timely |
| 1 | Header | wordmark "amazon one medical" in dark and green, hamburger; no CTA in the bar | none in header | no Book/Join in the bar, and no phone, forcing the first-screen CTA to carry everything | clean, little chrome |
| 2 | Hero | blue serif H1 "Primary care designed for you" (3 lines); "Schedule in-office and remote appointments for everything from physicals to chronic care." | Book an appointment (dark green pill, full 54px high) | H1 is saturated blue on warm gray, 4.0-4.5:1 at best (U contrast); two small links under the button ("Already a member? Follow these steps to apply the Amazon Prime savings", "company sponsored membership? Click here") add noise and push the photo down | one verb, plain promise; honest segmentation links for members and employer plans |
| 3 | Hero photo | smiling provider/patient crop with a blue arc graphic | none | 1.5 screens before anything else happens; partially unloaded in capture | |
| 4 | Service cards | stacked photo cards: Mental health ("Care for your mental health"), Annual wellness ("The annual physical, reimagined"), Amazon Pharmacy ("Finally, a pharmacy that really delivers"), each with "Learn more >" | Learn more | content card width is narrower than the screen in the capture; each card is 550px tall; Learn more is text-sized (small touch target (U)) | clear benefit headlines, real photography |
| 5 | Value-prop rows | "Fall in love with your doctor's office": We accept most major health insurance plans... + "See if we're in network with your insurance >"; Same/next-day appointments in person or video that start on time; Longer appointments so you don't feel rushed; Drop-in lab services at our offices; Covering everything from physicals and chronic care to mental health; Primary care offices in many US cities (Visit us); Compassionate providers (Find a provider) | text links after each row | icons missing in capture; all links are low-key text; no insurance logos | insurance sentence and quick-visit promise in the first rows; the "starts on time" promise is a memorable differentiator |
| 6 | Membership panel | dark green gradient: "Membership costs only $99/year", 4 inclusions (Direct Message Care 24/7, Video Care 24/7, message care team, request/renew prescriptions), Learn more about membership, Join now (amber pill) | Join now | the price comes late (about the 6th screen) and "only" is salesy; membership fee is separate from visit copays (not stated in this block, (U)) | price and inclusions with a single strong button |
| 7 | Video | "See what makes One Medical different", a 0:30 Wistia player with a visible poster | play | video embed loads Wistia scripts (tracking surface) | short length stated |
| 8 | CTA band | "Become a One Medical patient" + amber "Book an Appointment" | Book an Appointment | band is 800px tall with large empty gradient | a clear closing CTA |
| 9 | Footer | see below; includes a "Your Location (ALL)" drawer (a form of 25+ service_area checkboxes) | location picker | very many legal links in small text (about 12 px) | most complete legal set of the 5 sites |

Sticky/fixed (fixedEls): nav menu panel and a location drawer in the footer. No sticky bottom CTA, no sticky header CTA seen.

## Desktop
NOT REVIEWABLE. 403 from CloudFront ("Request blocked"). Not tried with another network or browser, in line with the no-evasion rule. Re-capture in a real browser by the owner if desktop layout is needed.

## Strengths
- S1 One plain promise and one verb in the hero ("Primary care designed for you", "Book an appointment") (1-fold.png).
- S2 Price and inclusions are stated on the home ($99/year, 4 membership benefits) (phone t04 region). Vendor claim, (U) current.
- S3 "Same/next-day appointments ... that start on time" and "Longer appointments so you don't feel rushed": the service promises are about the patient's time, which is the best fit for a busy-parent audience (t02).
- S4 Insurance sentence with a "See if we're in network" link in the first value-prop (t02).
- S5 Honest segmentation under the CTA: members, Prime, employer-sponsored (1-fold.png).
- S6 The full legal footer: Terms of Use, Medical Terms of Service, Privacy Notice, SMS Short Code Terms, Notice of Privacy Practices, Notice of Non-Discrimination, Employee Privacy Notice (California), Medical Records, Privacy and Deletion Requests (t05/t06).
- S7 Real, natural-light photography (service cards) with a consistent green-and-cream system and serif headlines.

## Flaws (severity, our fix)
- F1 M: no phone number or tel: link on the page; no sticky CTA; header has no booking button on phone. Our fix: header and bottom sticky bar with Call and Book.
- F2 M: announcement bar overflow and seasonal Medicare message at the top of the page for every visitor; 3 lines of fold used. Our fix: no promo bar, or short and relevant to our patients.
- F3 M: very long page (about 7,900 css px on phone, per meta scrollHeight 7,927) before the membership price appears. Our fix: price/first-visit information within 2 scrolls.
- F4 M: horizontal overflow/narrow-column rendering seen in the capture (see caveat), possible real layout bug, a lesson: test 360 px width.
- F5 L: a blue H1 on warm gray and low-contrast green text in the footer legal links; small 12 px legal links; (U) contrast measured by eye only.
- F6 L: hero secondary links ("Follow these steps", "Click here.") are vague link text.
- F7 L: Wistia video and GTM add third-party requests for little value on a healthcare page (see tech facts).

## Conversion machinery inventory
- CTAs: Book an appointment (hero; to Amazon Health service-area picker), Join now (membership panel, signup), Book an Appointment (closing band), Learn more (x many), See if we're in network, Find a provider, Visit us. Header: Log in and Sign up in the menu.
- Booking path: Book -> health.amazon.com/onemedical/service-areas/ (pick area) -> app signup (membership) -> book in app. 
- Taps on phone: 1 to start; at least 3 more to finish (U).
- Sticky: none seen (nav drawer only).
- Forms on page: 1, the footer location drawer (service_area checkboxes; not a contact form).
- Trust/proof: brand (Amazon), "most major insurance plans", "starts on time", video. No review stars, no doctor photos on the home, no counts. Not found in the phone capture.
- Insurance: sentence + link to /insurance/; no payer logos on the home.
- New patient flow: sign up for membership first, then book.
- Hours/location: none on the home; the footer location drawer and /locations/ cover this. New York and New Jersey listed in the footer.

## Design notes
Type: bold high-contrast serif for headlines (blue H1, dark-green H2s), a humanist sans for body and links. Colour: dark pine green, mid green links, cream and mint backgrounds, amber CTAs (membership band) and a saturated blue hero headline. Imagery: documentary photo cards. Density: low, plenty of white space; page is about 7,900 css px. Mobile nav: hamburger only, no CTA in the bar.

## Footer inventory
Location drawer: All Locations plus about 25 metros (Atlanta, Austin, Boston, Chicago, Cleveland, Columbus, Connecticut, D.C. Metro, Dallas-Ft. Worth, Houston, Los Angeles, Miami-Ft. Lauderdale, New England, New Jersey, New York, North Carolina, Orange County, Phoenix, Portland, Raleigh-Durham, San Diego, Seattle-Tacoma, SF Bay Area, Tucson, plus Seniors variants); links: Blog, Media center, About, Sponsored membership, Careers, Contact us, FAQ, Give a membership; 5 social icons; US-only disclaimer and (c) 2026 1Life Healthcare, Inc. LEGAL PRESENT (9): One Medical Terms of Use, Medical Terms of Service, Privacy Notice, SMS Short Code Terms of Service, Notice of Privacy Practices (/hipaa/), Notice of Non-Discrimination, Employee Privacy Notice (California), Medical Records, Privacy and Deletion Requests. No accessibility statement found in the footer text (U: may exist elsewhere).
Header/menu groups (from links): Offices, Virtual Care, Adults under 65, Adults 65+, Kids, Medicare agents, Business (Overview, Results, Mental Health, Small Business, For Consultants), Resource Center, Get in Touch, Log in, Sign up, search.

## Tech facts (meta.json + html)
- Phone: status 200, load 22 s, 0 console errors, lang=en, viewport meta present, images 5 (0 without alt), scrollHeight 7,927 css px.
- Desktop: status 403 (CloudFront).
- Hosts in html: onemedical.com, app.onemedical.com, health.amazon.com, pharmacy.amazon.com, googletagmanager (5 refs), Wistia (fast.wistia.com, embed-ssl.wistia.com), nice-incontact.com (a contact-center widget host, (U)), go2.onemedical.com (marketing automation form host).
- Inline script mentions: Mixpanel (13), GTM (7), Bing (1). Tracker presence is a reference-level finding, not network-verified.
- Forms: 1 (location drawer checkboxes). No JSON-LD found in the phone view (meta jsonld empty/absent; the DOM has none that parsed), so no Review/Rating markup.
- No tel: links.

## Unverified claims on the site (do not reuse)
"Membership costs only $99/year"; "Same/next-day appointments ... that start on time"; "We accept most major health insurance plans"; "Compassionate providers who are experts at medicine and caring"; "Primary care offices in many US cities"; video claims (not viewed).
