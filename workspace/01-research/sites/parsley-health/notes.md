# Parsley Health — https://www.parsleyhealth.com
Captured: 2026-10-30 (phone 390x844 @2x, desktop 1280x800) · tier: aspirational (adjacent, membership telehealth + NYC centre) · source of find: candidates.md #8 (conversion-patterns: visible pricing, objection FAQ, comparison table)
Raw: phone/{1-fold,2-full}.png, desktop/{1-fold,2-full}.png, tiles under phone/tiles (14) and desktop/tiles (7), html/, meta.json. Multi-language out of scope.
Capture caveat (honest): the full-page PNGs have large BLANK bands (phone tiles t07 fully blank, parts of t04/t06; desktop t01/t02/t03 about 700-800px blank bands and a tan block). These are scroll-reveal / lazy sections that did not paint during capture, not a site design choice. So hero image alt carousels, "Work with experts" block, doctor/clinician cards, and review video poster images are only partly seen. Nothing in the captures is a cookie wall or an error. Desktop screenshot also shows a dark 15px stripe on the right edge (scrollbar artefact).

## Snapshot
Who: national telehealth + one NYC centre (126 5th Ave) doing "functional medicine / root-cause" primary care, MD-led teams. For whom: adults with chronic or complex symptoms (gut, hormones, autoimmune, menopause, etc.), NOT pediatrics. Business: annual membership, Complete Care $150/month or $1,500/year in-network ($275/month self-pay), 12-month commitment; Clinical Lab Review $250/visit self-pay. PRIMARY ACTION: "Join now" and "Verify insurance" (both go to /join/care, the second with focus=insurance). No phone number or tel: link anywhere (0 tel links); "Call/Text us" exists in the closing CTA (target not captured as tel; (U)). Taps to book on phone: 1 tap from the first screen to the join funnel (Verify insurance or Join now), then an off-capture multi-step funnel.

## Phone (390x844) section by section
Order: announcement banner > nav > hero > 4 benefit rows > intro statement + Join today > insurance logos block > "Two ways to get started" pricing cards > conditions carousel > "89% improve" video-review carousel > comparison table > FAQ > closing CTA > footer.

| # | Section | What it does | CTA | Flaws | Strengths |
|---|---|---|---|---|---|
| 0 | Announcement bar (dismissable X) | "Parsley is in-network nationwide and FSA/HSA eligible." | Verify insurance (pill) | takes 170px of the first screen at 2x (85 css px); copy on 3 lines | insurance answered before anything else |
| 1 | Nav bar | dark teal; hamburger left, logo, outlined "Join now" right | Join now | hamburger menu not opened/captured; no Log in or call visible without opening the menu (Log in exists in links) | one clear action stays in the bar |
| 2 | Hero | H1 "Medical care that uncovers the root cause of your symptoms", subhead with "board-certified" and "Now accepting insurance nationwide", 2 buttons | Verify insurance (filled) + Join now (outline) | headline (dark teal serif) sits over a busy photo with a translucent wash; lower contrast over the red dress; an odd lighter rectangle starts mid-image (a rendering seam, fold shot) | clear promise, insurance and join paired as primary and secondary |
| 3 | Benefit rows | Insurance accepted / Board-certified clinicians / Advanced lab testing / Nationwide telehealth / HSA-FSA eligible, line icons | none | thin gray icons, low weight | scannable 5 trust facts in 5 short rows |
| 4 | Statement | H2 "Finally, a doctor who asks why - not just what.", large portrait photo (stock-style), 1 paragraph, "Join today" | Join today (full width) | the photo takes 700px with no information | strong voice line |
| 5 | Insurance block | H2 "Functional medicine, now accessible with insurance", 8 payer logos (BCBS, UHC, Anthem, Cigna, Empire, Horizon, Aetna, Florida Blue), price anchor "$150/month", "first and only functional medicine provider to accept insurance nationwide" (vendor claim), "See a clinician within days" | Check eligibility (filled) + Learn more about insurance (outline) | logos are the carrier names not plan-level; "first and only" is an unverified superlative | payer logos + price on the same screen answers the cost objection |
| 6 | Pricing cards (dark band) | Card 1 Complete Care: 6-step list (5 medical visits, 2 nutrition visits, labs, supplements, tests, care team), price $150/mo or $1,500/yr, self-pay $275/mo, "12-month commitment"; Card 2 Clinical Lab Review $250/visit with $250 credit | Join now (filled), Review your labs (outline) | the 12-month commitment is shown in gray small text; the card is 1,500px tall on phone | prices, what's included and commitment on one card: radical transparency, the best pattern here |
| 7 | Conditions | H2 + horizontal card carousel (Gut, Hormone, Autoimmune, Unexplained, Mental, Heart, Metabolic, Longevity, Menopause, Reproductive, Detox), arrows, "See what we treat" | See what we treat + per-card link | the card image area is blank in capture (not loaded); only one card visible per swipe, with 11 cards that is a long swipe | symptom lists in patient words help search |
| 8 | Real results | "89% of Parsley members improve or eliminate symptoms within a year" (own stat, (U)), video testimonial carousel (grey placeholders in capture, play icons), first-name + one-line quote, dots + arrows | See all reviews (amber) | videos did not load in capture; stat is the company's claim with no method note visible; quote text clipped to the card | named real results, video format |
| 9 | Comparison table | "How Parsley compares" Primary Care vs Functional Medicine Clinic vs (desktop only: Concierge Clinic) vs Parsley: root cause, insurance, cost, care team, tracks progress | none | phone drops the Concierge column (a different table from desktop); Parsley column is teal-highlighted; table self-serving | objection handling by contrast |
| 10 | FAQ | 5 accordions (what's included, insurance, replace primary care, which program, upgrade); first open by default | none | only 5 questions; no booking logistics, no emergencies/urgent-care disclaimer visible | the "does this replace my primary care doctor?" question is a good scope-limiter |
| 11 | Closing CTA | "Ready for a different kind of care?" Join now + Call/Text us | Join now, Call/Text us | the only place a human contact is offered, at the bottom | pairs the digital with a human path |
| 12 | Footer | see inventory below | Join Parsley, Speak with an advisor | "Clinical Lab Review" heading and the HIPAA COMPLIANT badge touch or clip the right screen edge on phone; Sign Up button label wraps to 2 lines | legal links all present |

Sticky/fixed (from fixedEls): announcement bar (sticky), nav, a bottom-fixed CTA ("Verify insurance", starts opacity-0, appears after scroll; not visible in any capture (U)), and a right slide-in cart/menu drawer (fixed, z-60; the H2 list has "Your Cart"). So there is a bottom sticky CTA that fades in on scroll.

## Desktop (1280x800)
Same story in a wider frame. Fold: announcement banner on one line with Verify insurance; nav is just hamburger + logo + "Join now" (no inline links; navigation hidden behind the hamburger even at 1280), so desktop has less nav than the phone's links list suggests; the hero is a two-column warm gradient with serif H1 over the left, face right, with both CTAs just at the bottom edge of the fold (y about 740-800). Insurance block becomes 2 columns (copy+buttons left, payer logos right). Pricing: two cards side by side, Complete Care shows the 6 steps as a horizontal timeline. Comparison table has an extra "Concierge Clinic" column. FAQ is 2-column (title left, accordions right). Footer: newsletter + HIPAA badge left, 4 link columns, legal strip. Long unpainted bands (see caveat) make the page look emptier than it is.

## Strengths
- S1 Price and inclusions on the homepage (phone tile t04; desktop t02): $150/mo or $1,500/yr, $275 self-pay, $250 lab visit, 12-month commitment, HSA/FSA. Why it works: removes the main fear (cost) before signup; evidence: pricing card tiles.
- S2 Insurance-first framing (fold banner, hero button "Verify insurance", payer logo grid in t02, "Check eligibility" in t03): the first CTA addresses coverage not "book". Evidence: 1-fold.png, t02.
- S3 One primary funnel, same two verbs everywhere (Join now / Verify insurance) in the banner, nav, hero, intro, pricing, closing and footer. Evidence: links list (about 15 pointing at /join/care).
- S4 Objection-handling: comparison table + FAQ "does this replace my primary care doctor?" (t09-t11).
- S5 Premium editorial look: warm off-white with deep teal and a sage/amber accent, large light serif display against a geometric sans (1-fold, t02).
- S6 Legal completeness: footer has Clinical Membership terms, Terms & Conditions, Terms of Use, Privacy Policy, Notice of Privacy Practices, Accessibility Statement plus a HIPAA COMPLIANT badge (t13).
- S7 Reviews presented as short first-name + one-line quote + video (t08), not a star count only.

## Flaws (severity, our fix)
- F1 H: no tel: link and no address/hours on the home page; phone is hidden behind "Call/Text us" at the very bottom. Not applicable to our local base: we must lead with the phone and office cards (our fix: call button in header and sticky bottom bar).
- F2 M: hero headline over a photo with a washed overlay, an overlay seam visible in the fold (1-fold.png). Our fix: solid-colour text panel or crop the image so text sits on a flat area.
- F3 M: heavy, scroll-reveal content leaves long blank areas (phone t07, desktop t01-t03) and the page needs JS to show; carousels hide content (conditions, reviews). Our fix: static render, no hidden-until-scroll sections for the primary info.
- F4 M: unverified superlatives and stats ("first and only functional medicine provider to accept insurance nationwide", "89% of members improve or eliminate symptoms within a year") with no method visible. Our fix: never reuse; cite source or leave out.
- F5 M: footer right-edge clipping on phone (Clinical Lab Review heading, HIPAA badge), Sign Up wraps (t12/t13). Our fix: test footer at 360px.
- F6 M: the Complete Care price has a 12-month commitment shown only as gray small text (t04). Our fix: put commitment/cancellation next to the price in the same weight.
- F7 L: nav hides everything behind a hamburger even on desktop; discoverability of "Pricing" and "What we treat" is low.
- F8 L: 33 of 50 images have no alt text (meta.imgNoAlt=33, images=50). Our fix: alt on every non-decorative image.
- F9 L: stock-style model photography, not real clinicians; fine for a national brand but we should use real staff.

## Conversion machinery inventory
- CTAs: Join now / Verify insurance / Check eligibility / Join today / Review your labs / See what we treat / See all reviews / Call/Text us / Join Parsley / Speak with an advisor. All except Call/Text go to /join/care (tracking params in the URL: entry=, hv=control, ht=static, so an A/B test on hero variant, (U)).
- Booking path: no appointment picker on home; join funnel off-page (not captured). Taps on phone: 1 (Verify insurance or Join now) from the first screen.
- Sticky: announcement bar, nav, bottom-fixed Verify-insurance CTA that fades in, slide-over drawer.
- Forms on home: 2 newsletter forms (email only, footer), nothing health-related.
- Trust/proof: board-certified, 8 payer logos, HIPAA COMPLIANT badge, 89% stat, video reviews (first names), named founder Dr. Robin Berzin in the footer.
- Insurance: logo wall + eligibility check + FAQ + dedicated /insurance page.
- New patient flow: Join -> eligibility -> plan (off page).
- Hours/location cards: none. Footer shows NYC and Virtual under "Centers", and 126 5th Ave address.
- Newsletter + Instagram widget (snapwidget).

## Design notes
Type: light high-contrast serif display (looks like a Canela/GT-Super style, (U) font), geometric sans for body. Colour: deep teal (#2a4a4c-ish), sage green accent, warm off-white page, amber/terracotta for price highlights, pale mint for the comparison highlight. Imagery: large editorial portraits, stock-like. Density: low, airy, lots of vertical air (page about 11,600 css px on phone). Mobile nav: hamburger + persistent outline "Join now"; the nav is the same hamburger-only pattern on desktop. Buttons: fully rounded pills, 60px tall on phone.

## Footer inventory
Social handle + "Follow Us"; groups: Complete Care (Complete Care, Pricing & Insurance, How It Works, Our Clinicians, Nutrition Coaching); Clinical Lab Review (4 links); About Us (About Parsley, What We Offer, Parsley Symptom Index [quiz], Dr. Robin Berzin, Reviews); Resources (Supplement Store, Blog, Press, Careers, Creators, FAQs, Contact Us); Centers (NYC, Virtual); buttons Join Parsley, Speak with an advisor; newsletter; 4 social icons; HIPAA COMPLIANT badge; (c) line and address 126 5th Ave Fl 2 NY 10011. LEGAL LINKS PRESENT (6): Clinical Membership, Terms & Conditions, Terms of Use, Privacy Policy, Notice of Privacy Practices, Accessibility Statement. Absent: nondiscrimination/language-assistance notice, medical disclaimer, no explicit state licence list.

## Tech facts (meta.json + html)
- Status 200, loadMs 16,159 (capture, noisy), no console errors, lang=en, viewport meta present.
- Stack: Next.js (hits for _next/static, __NEXT_DATA__), Tailwind-style utility classes, CDN cdn-builder.parsleyhealth.com (a headless CMS asset host, likely Builder.io, (U)), pollen.parsleyhealth.com (own subdomain), snapwidget Instagram embed, my.parsleyhealth.com (member login).
- Trackers/clue from html (not network-verified): cdn.oursprivacy.com (privacy/consent/data pipeline vendor, (U)), cdn.lgrckt-in.com (LogRocket session replay), posthog string. Session replay + analytics on a medical-adjacent site: this is exactly the kind of HIPAA-tracker risk we avoid; they cover it with a published NPP and (U) BAAs.
- Forms: 2, both a single email field + submit (newsletter).
- JSON-LD: 1 block, types MedicalOrganization+Organization, ContactPoint (customer support phone +1 332 900 4403, contact URL), ImageObject, Person (founder). NO Review/AggregateRating, no FAQPage, no MedicalClinic/LocalBusiness with hours. Interesting: a phone number exists only in schema, not as tel: on the page.
- Images 50, 33 without alt. Fixed elements listed above.

## Unverified claims on the site (do not reuse)
"first and only functional medicine provider to accept insurance nationwide"; "89% of Parsley members improve or eliminate symptoms within a year"; "in-network nationwide" (insurance is state-limited in JSON-LD description: "insurance accepted in select states" contradicts the banner); "board-certified"; "See a clinician within days"; "functional medicine" efficacy framing; $150/month (price may vary by plan/state).
