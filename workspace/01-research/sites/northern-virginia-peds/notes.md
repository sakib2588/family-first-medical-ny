# Northern Virginia Pediatric Associates — https://northernvirginiapediatrics.com
Captured: 2026-10-30 (phone 390x844 @2x, desktop 1280x800) · tier: direct on model (single-office independent pediatric practice, walk-in + 7-day hours), aspirational only for content, not for design · source of find: candidates.md #14 (hours up front, New Patient/Newborn split, testimonials, AAP checker, form fees)
Raw: phone/{1-fold,2-full}.png (+11 tiles), desktop/ (4 tiles), html/, meta.json. Multi-language out of scope.
Capture caveat (honest): no cookie wall. Several areas render as grey or empty blocks in the full-page shots (the map band above "Your First Visit" and two big grey bands on desktop, i.e. lazy sections), and the Google map at the footer is a static tile on phone. A chat bubble (Chatling widget iframe, dark-blue circle) floats bottom-right on both views. A popup plugin (Popups, "spu-box") exists in the DOM but no popup is visible in the captures.

## Snapshot
Who: one-office pediatric practice in Falls Church VA (107 North Virginia Ave), board-certified pediatricians (claim from the SEO description), open 365 days a year with walk-in hours for established patients, in-house lab, patient portal (FollowMyHealth), virtual visits. Audience: parents of newborns to teens. Site is a WordPress marketing-agency build (WebSubstance footer credit). PRIMARY ACTION: not one; the hero stacks 7 orange buttons: Office Hours, Walk-In Hours, Newborns Register Here, New Patients Register Here, Follow My Health, Use The AAP Symptom Checker, (plus "Immediate Advice & When to Come In"). Phone: a single tel: link in the footer ("24 Hour Phone #: (703) 532-4446"), none in the header. Taps to book on phone: no booking; "register" is 1 tap to the new-patient page (forms off-capture), calling needs a scroll to the footer (about 9,300 css px page) or the hamburger (U).

## Phone (390x844) section by section
Order: emergency strip > header (logo, search, hamburger) > hero photo with 4 translucent blue info panels of orange buttons > "Immediate Advice & When to Come In" > general information (office hours, walk-in hours, forms, alerts, announcements cards) > service-tile stack (New Patients & Newborns, Laboratory, Wheelchair Accessibility) > testimonials slider > map + "Your First Visit" > dark footer.

| # | Section | What it does | CTA | Flaws | Strengths |
|---|---|---|---|---|---|
| 0 | Emergency strip | grey bar: "If this is a life-threatening emergency, call 911 immediately" | none | takes about 50 css px of the fold, no styling emphasis | safety message at first sight: the best triage pattern of the five sites |
| 1 | Header | wide blue logo with tagline (Providing the highest standards of healthcare for children), search icon, hamburger | none | the logo bitmap is dated and soft (JPEG upscaled at 2x); no Call or Book in the header | |
| 2 | Hero | full-bleed autumn photo (child in leaves) overlaid with 4 semi-transparent blue boxes: "Open 7 Days a Week" [Office Hours][Walk-In Hours]; "We Are Accepting New Patients" [Newborns Register Here][New Patients Register Here]; "Follow My Health Patient Portal" (3 lines of hours/urgency text + [Follow My Health]); "Immediate Advice & When to Come In" [Use The AAP Symptom Checker] | 7 orange buttons | hero is 1,900+ css px tall on phone, about 2.2 screens; white text on translucent blue over a busy photo is low contrast (esp. the portal paragraph); no H1 (meta h1 empty), no value proposition sentence; orange buttons left-aligned with different widths | answers the real parent questions straight away: are you open, are you taking new patients, how do I register, when should I come in |
| 3 | General information | "Office Hours - Open 365 days per year": Mon-Thu 8-6, Fri 8-5, Sat 8-1, Sun 9-12 (weekend = sick visits by appointment only, extra fee possible); "Walk-in Hours" Mon-Fri 8-1 and 2-5, weekends none; walk-in only for established patients | none (text) | dense text with ** footnotes; two sets of hours (office vs walk-in vs lab) are easy to confuse | full hours on the home page with the caveats stated honestly; "Weekend and Holidays are reserved for Sick ONLY" and fee notice |
| 4 | Forms | ADHD Assessment, Patient Forms Online & PDFs, School Forms, Shot Record Request (text links) | links | links are plain 16px text rows (tap targets about 42 px) | parent chores one tap away |
| 5 | Alerts / Announcements | cards with stock photos (flu clinics, immunization record, walk-in hours and mask policy, virtual visits, FollowMyHealth portal) + Read More Announcements | card links | all announcements, no hierarchy; stock photos (immunization form with stethoscope, superhero child) | up-to-date notices |
| 6 | Service tiles | 3 dark photo tiles with icons: New Patients & Newborns ("What you need to know before your first visit"), Laboratory ("more convenient for patients"), Wheelchair Accessibility ("our building is not wheelchair accessible") | tile arrows | the accessibility tile is honest but a negative, shown prominently | transparency on accessibility |
| 7 | Testimonials | slider of 8 dots, e.g. initials "R M" (13 years in the practice), "Russell Karlin" (full name), 5 gold stars, "Read more" links | Read more testimonials | initials-only attribution on some; self-curated; carousel; stars decorative (no aggregate score) | long-tenure quotes feel real |
| 8 | Map + First visit | static Google map tile (links to the Maps place), blue band "Your First Visit" + dark-blue button "What you need to know for your first visit" | button | map is small and non-interactive | clear first-visit link |
| 9 | Footer | FollowMyHealth portal text and a Follow My Health button, Hours and Walk-in hours (again), Quick Links, Contact Information (address, 24 Hour Phone, Fax), Facebook, Instagram, Google icons, (c) 2026, "Powered by WebSubstance" | tel: link | the only phone number is here; "24 Hour Phone" wording; forms notice: forms outside a well visit cost $25 (and $50 expedited) | policy honesty: fees stated on the home |

Sticky/fixed: slide-out menu panels, a "mobile-disabled" element, popup box (spu), and a floating Chatling chat bubble (bottom-right, 55 css px). No sticky call/book bar.

## Desktop (1280x800)
Fold: grey emergency strip; header with a wide logo and a 7-item nav (Patient Forms, FollowMyHealth FAQ, Services, About Us, Insurance & Policies, Resources, Contact) that is squeezed: the logo is huge, nav labels wrap onto 2 lines ("Insurance & Policies", "About Us") and the last button (a blue one, probably Pay/Book) is clipped at the right edge of the viewport (x about 1270; an overflow bug). Hero is a 1,100 px-wide photo (child in autumn leaves) with the same 3 translucent blue panels and orange buttons stacked on the left, a chat bubble bottom-right. Below: Office Hours and Walk-in Hours cards side by side, Forms and Alerts, a 4-card announcements row (Immunizations, Walk-in hours & mask policy, Virtual visits, FMH), then 3 service tiles, a testimonial slider with 2 visible cards, a grey (unpainted) map band, "Your First Visit" blue band, and a 4-column footer (Portal, Hours, Quick Links, Contact Information). Large grey blocks are lazy-load gaps.

## Strengths
- S1 Hours are on the home page, in full, with honest caveats: office hours 365 days, walk-in rules (established patients only), weekend sick-only, fee notes (phone t01-t07 montages; desktop footer).
- S2 The hero answers parents' four questions with explicit buttons: Open?/Walk-in?/New patient?/Newborn? and "Immediate Advice & When to Come In" with the AAP Symptom Checker (1-fold.png phone and desktop).
- S3 Separate "Newborns Register Here" and "New Patients Register Here" buttons: a triage pattern worth copying (1-fold).
- S4 Safety: "life-threatening emergency, call 911" strip above the header; portal message-time notice ("may take up to 72 hours"; for urgent concerns call and select option 1) (1-fold).
- S5 Billing and forms transparency on the home page ($25 administrative charge for forms outside a well visit, $50 expedited), plus "Insurance & Billing 101", Billing Inquiries, Insurance Accepted, Policies, Types of Visits pages (menu).
- S6 Honest accessibility notice ("Please be aware that our building is not wheelchair accessible") (t07 montage).
- S7 Long-tenure testimonials (13 years, 8 years) with 5 stars and "Read more" (t07).
- S8 Resource depth: Symptom Checker, Helpful Information, FAQs, Urgent Line (nurse line), Prescription Refills, Virtual Visits, shot-record request, ADHD assessment, school forms: it is a working practice, not a brochure.

## Flaws (severity, our fix)
- F1 H: no header Call button, no sticky call/book bar, no tel: link until the footer; the phone number is 9,000+ px down on phone. Our fix: header Call button and sticky bottom bar with Call + Book.
- F2 H: 7 equal orange buttons and no hierarchy: no single primary action; hero has no H1/value sentence (meta h1 is empty; the page title is only the practice name). Our fix: one primary Call or Request, 2 secondary (new patient, newborn), H1 with who/where/ages.
- F3 M: translucent blue panels over a busy photo: white text legibility is poor (1-fold phone); hero consumes about 2.2 screens. Our fix: solid panels, compact hero.
- F4 M: desktop header overflow (nav labels wrapping, final button clipped at the right edge) and a soft low-res logo. Our fix: test at 1280/1366/1440.
- F5 M: dated WordPress/WPBakery look, stock photos, mixed fonts (Montserrat headings with Open Sans body), grey unpainted lazy blocks. Our fix: our own consistent system.
- F6 M: tracking/chat: a Chatling AI chat widget on a pediatric practice site (embed.chatling.ai) collecting messages from parents with no visible privacy or BAA notice on the page (U). Our fix: no chat widget unless counsel clears it and a BAA exists.
- F7 L: schema is thin: Organization with "Care provider for children", WebPage, WebSite, BreadcrumbList; no MedicalClinic, no address, no hours, no phone in structured data (despite complete hours on the page). Our fix: MedicalClinic/Pediatric with openingHoursSpecification, geo, phone.
- F8 L: 2 of 8 images without alt (meta imgNoAlt=2).
- F9 L: the page is a link dump (the menu list repeated, 120+ links), plus footer link "Privacy" only (see legal).

## Conversion machinery inventory
- CTAs: Office Hours, Walk-In Hours, Newborns Register Here, New Patients Register Here, Follow My Health, Use The AAP Symptom Checker, Patient Forms, Read More Announcements, Read more testimonials, What you need to know for your first visit, Continue to PayMyDoctor (payment). No "Book appointment" button; the Appointments page exists in the menu (/appointments/).
- Booking path: Appointments page (off-capture) or phone; new patients register via a form page (fields not captured; (U) whether the practice uses an EHR/portal form).
- Taps on phone: no one-tap path to booking or calling from the first screen; to call: scroll to footer or find the number in the menu (U).
- Sticky: none for conversion; chat bubble floats.
- Forms on home: 1 (site search only).
- Trust/proof: testimonials slider (8), claim "board-certified physicians" (meta description), open 365 days, 24-hour phone line.
- Insurance: a menu group (Insurance & Billing 101, Billing Inquiries, Insurance Accepted, Policies, Types of Visits, Forms) and a line in announcements about filing insurance; no payer logos on the home.
- New patient flow: Newborns / New Patients register pages + "What you need to know for your first visit" page.
- Hours/location: hours tables twice (body + footer), address and 24-hour phone in the footer, static map tile with a Google Maps link.

## Design notes
Type: Montserrat-style geometric heading font and Open Sans body; large orange buttons with white text (about 3:1 contrast, (U)), navy label tabs ("General Information", "Forms", "Alerts", "Testimonials"), white cards with soft shadows. Colour: sky blue, navy, orange and a slate-purple footer. Imagery: stock photography (child in autumn leaves, superhero child, immunization record). Density: high and cluttered. Mobile nav: hamburger + search; no CTA in the bar. Page about 9,300 css px on phone.

## Footer inventory
Columns: FollowMyHealth Patient Portal (message-time and emergency notice; forms-fee notice; Follow My Health button); Hours (office + walk-in); Quick Links (Appointments, Accessibility, Contact, Urgent Line, Policies, Privacy, School Forms); Contact Information (name, address, 24 Hour Phone tel link, Fax); Facebook, Instagram, Google; (c) 2026; "Powered by WebSubstance". LEGAL: Privacy (privacy-policy) and Policies pages present; Accessibility page present; ABSENT: Notice of Privacy Practices link (not in the footer list; (U) may sit under Policies), terms of use, nondiscrimination notice.

## Tech facts (meta.json + html)
- Status 200, load 24.8 s (capture), 0 console errors, lang en-US, viewport meta present, images 8 (2 without alt), scrollHeight 9,301 css px (phone), links about 175 first-party.
- Platform: WordPress with WPBakery page builder, All in One SEO Pro 5.0.4, Salient-like theme (slide-out widget area, "ajax-content-wrap"), agency WebSubstance.
- Third parties found: Google Fonts, Google Maps link, embed.chatling.ai (AI chat widget), a "google-analytics" string (2 refs; (U) whether GA is active), a Stripe string (1; (U) possibly a script mention), external payment link to paymydoctor.com, FollowMyHealth portal (external). Popup plugin (Popups) in DOM.
- Forms: 1 (site search `s`). 
- JSON-LD: AIOSEO graph with BreadcrumbList, Organization ("Care provider for children"), WebPage (dateModified 2026-10-01), WebSite. No MedicalClinic/Physician, no AggregateRating/Review markup even though testimonials with stars are on the page.

## Unverified claims on the site (do not reuse)
"Open 7 Days a Week / Open 365 days per year" (hours table shows limited weekend/holiday hours and sick-only); "board-certified physicians" (meta description); "Providing The Highest Standards Of Healthcare For Children" (tagline); "Our laboratory is much more convenient"; testimonial quotes (practice-selected, initials/first names; not verified); "24 Hour Phone" (nature of after-hours service not described on the home page).
