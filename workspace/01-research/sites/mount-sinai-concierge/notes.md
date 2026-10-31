# Mount Sinai Doctors-Concierge Care — https://conciergecareny.mountsinai.org/
Captured: 2026-10-30 (phone 390x844 @2x = 780px PNG, desktop 1280x800) · tier: aspirational/adjacent (hospital-system concierge membership primary care, Hudson Yards NYC, includes a Pediatric Concierge Membership) · source of find: SERP (concierge query), originally HOLD after a 403 to curl · raw: phone/ desktop/ (1-fold, 2-full, tiles/), html/, meta.json
Method: phone fold + both phone tiles, desktop fold + the one desktop tile viewed. Status 200 on both. No error page. A cookie consent bar covers the lower part of the first screen on both viewports (details below). The home page is extremely short: phone 1,681 css px (3,362 PNG px), desktop 1,392 css px; there is almost no content to review. Interactive states (nav dropdown, hamburger, inquire page) not captured.

## Snapshot
A concierge-medicine membership practice within Mount Sinai Doctors (not a fee-for-service door-open practice): sells memberships, not visits. Offers: Employer-Sponsored Membership, Personal Membership, Pediatric Membership, Healthspan Membership; "Multi-specialty team of providers ... in a state-of-the-art practice at Hudson Yards". Home page has no H1/H2 elements at all (meta.json h1 [] h2 []; headings are styled text inside two cards). PRIMARY ACTION = "INQUIRE ABOUT MEMBERSHIP" (button in the header, links to /apply/); secondary: MEMBER LOGIN (Mount Sinai MyChart). No phone, no booking, no prices on the home page.

## Phone (390x844) section by section
| # | Section | Evidence | Notes |
|---|---|---|---|
| 1 | Header | 1-fold | Dark navy bar 86 css px: white wordmark "Mount Sinai Doctors / Concierge Care" (logo is an image, white on navy, readable), a hamburger on the right (3 white bars, small). Neither "Inquire" nor "Member login" is in the header on phone (both are only in the hamburger menu, unseen). |
| 2 | Hero + two cards | 1-fold, t00 | A full-bleed photo of a clean modern clinic corridor with a blurred figure in a white coat; over it two translucent white cards stacked on phone. Card 1: serif (Playfair-like) headline "I am looking for a concierge medical membership", body "Dedicated primary care physician to lead your care 24/7 from our practices, in your home, and virtually." and a pale grey-blue "LEARN MORE" button (low contrast: grey button on a near-white card, the label is dark so it reads OK, but the button barely separates from the card). Card 2 begins below ("My employer is sponsoring my membership", "GET STARTED") and is hidden by the cookie bar in the capture. The cards use a "who are you" self-selection pattern (I am looking... / My employer is sponsoring...). |
| 3 | Cookie bar | 1-fold | White panel over the lower 40% of the first screen: a paragraph, "Adjust cookie settings" and "Privacy policy" text links, a full-width bright blue "Agree to all" and a text-only "Decline all". Equal-ish choice offered (Decline is visible but text-only, visually weaker than Agree). Fixed element `ppms_cm_popup_overlay` (Piwik PRO consent manager). |
| 4 | Footer | t01 | Black/dark grey: three link groups stacked (Mount Sinai Doctors-Concierge Care: About Us, Our Provider Team, Contact Us; Membership Options: the 4 memberships; Resources: Member Portal, Blog), Instagram and Facebook icons, then a darker strip with "(c)2026 Mount Sinai Doctors-Concierge." and Privacy Policy | Terms and Conditions | HIPAA Privacy Practices. A large empty black block sits above the legal strip (about 250 css px, unused). A hidden text "The Health Center at Hudson Yards" exists in the HTML but is not visible in the capture (so the practice's address is not shown anywhere on the home page). |
No sections for hours, locations, reviews, FAQs, team, insurance, or pricing exist on the home page.

## Desktop (1280x800)
Dark navy top bar with logo left, nav (Our Memberships with chevron, About Us, Our Team, Blog) and two outlined buttons right: "INQUIRE ABOUT MEMBERSHIP" and "MEMBER LOGIN". The hero image fills the rest of the screen (a corridor); the two cards sit side by side near the bottom edge ("I am looking for a concierge ..." and "My employer is sponsoring ...") and are partly covered by the cookie bar in the fold. The full-page capture shows the page ends right after the hero: footer in three columns plus social icons, then a legal strip. In total two screens. The hero photo is about 950 px tall and carries no message of its own. The desktop logo is cropped/clipped to the left edge in the full capture (it touches the page edge, no left margin).

## STRENGTHS
1. **"Who are you?" self-selection into two clear paths** (individual vs employer-sponsored) with one CTA each. Why: a segment chooser replaces a menu on the first screen; copy is plain ("Dedicated primary care physician to lead your care 24/7"). Evidence: phone 1-fold.png, desktop fold. Our analogue: "New patient / Existing patient / Sick today".
2. **Persistent primary conversion in the desktop header ("INQUIRE ABOUT MEMBERSHIP") and a separate quiet MEMBER LOGIN**: the sales action and the existing-member action are visually separated. Evidence: desktop 1-fold.png.
3. **Equal-handed consent bar with a visible "Decline all"** (both choices one tap each; the detail panel lists analytics, A/B testing, conversion tracking, user feedback). Evidence: phone 1-fold.png, HTML text.
4. **Compact legal strip present on every page**: Privacy Policy, Terms and Conditions, HIPAA Privacy Practices, copyright 2026. Evidence: phone t01, desktop t00.
5. **Brand borrowing**: the Mount Sinai wordmark gives instant institutional trust with zero proof elements; real interior photography (a clinic corridor with a clinician) signals premium. Evidence: all screenshots.
6. **Pediatric Concierge Membership is a first-class item** in the nav and footer (the only candidate of the four with pediatrics as a membership tier). Evidence: meta.json links, footer.

## FLAWS
1. **H: No phone number, no address, no hours, no booking, no pricing on the home page** (0 tel links; only a hidden "Health Center at Hudson Yards" string in HTML). A visitor cannot learn where it is or what it costs. For our purposes: a concierge model is a different business; copying its opacity would hurt a walk-in primary-care practice. Fix: visible address, hours, phone, price/insurance statement on the first scroll.
2. **H: Home page has no H1/H2 elements** (meta.json h1 [] h2 []), no explanation of what a concierge membership is, and no proof (no reviews, ratings, doctors, credentials, counts). Weak SEO and no persuasion beyond the brand. Fix: one real H1, a plain-language "what you get" section, named doctors with credentials.
3. **M: On phone, the only conversion actions (Inquire, Member login) are hidden inside the hamburger.** The visible CTAs are "Learn more"/"Get started" which lead to marketing pages, not a form. Fix: primary action visible in the mobile header.
4. **M: Low-contrast ghost buttons** (grey-blue button on a pale translucent card) and a translucent card over a busy photo reduce legibility. Fix: solid button color with 4.5:1+ label contrast and an opaque card.
5. **M: The consent bar takes about 40% of the phone screen and hides the second card.** Fix: smaller banner.
6. **M: Hero photo on desktop is about 950 px of image with the message at its bottom edge**, so the first screen above the fold is mostly picture and nothing explains the offer until the cards appear (they are cut off by the cookie bar). Fix: headline in the first 400 px.
7. **L: Empty black block above the legal strip in the footer; the desktop logo is flush to the left edge with no margin.** Polish gaps.
8. **L: Site is WordPress/Divi on a subdomain of the health system**: all legal links and the portal live on mountsinai.org (shared policies, not practice-specific). Fine for them; for us, own the privacy page.
9. **L: Slow load**: 20.7 s phone / 19.6 s desktop in headless capture, likely driven by the tracking stack. Not a field measurement.

## Conversion machinery inventory
- CTAs: INQUIRE ABOUT MEMBERSHIP (header desktop; in hamburger on phone, unseen), MEMBER LOGIN, LEARN MORE (-> /personal/), GET STARTED (-> /employer/), footer membership links.
- Booking path: no booking. Inquiry path: header Inquire (1 tap on desktop; 2 on phone: menu then Inquire) -> /apply/ (form not captured, fields unknown).
- Sticky: `HEADER` is fixed on both viewports (meta.json fixedEls: HEADER). So the header (and on desktop the Inquire button) stays visible while scrolling; page is short so it matters little.
- Forms: site search only (input s, WordPress search; no visible search field in the screenshots).
- Trust/proof: Mount Sinai brand and the clinical interior photo only. No reviews, no stats, no credentials, no doctor names on the home page (Our Team page exists).
- Insurance: nothing on the home page (concierge = membership fee; possibly insurance-agnostic, unverified).
- New-patient flow: "Inquire about membership" -> /apply/; no steps shown.
- Hours/location cards: none.
- Portal: MEMBER LOGIN to Mount Sinai MyChart (mychart.mountsinai.org).

## Design notes
- Type: high-contrast display serif (Playfair Display-like) for the card headlines at about 22-24 css px on phone; Noto Sans/Open Sans-like sans for body; uppercase letter-spaced button labels (Lato-like).
- Color: deep navy header (#04192b-ish), dark charcoal footer, white translucent cards, a cool grey-blue button, cyan/bright blue only in the consent bar (cookie bar colors do not match the brand).
- Imagery: one full-bleed professional interior photo (no faces). Premium feel; zero people proof.
- Density: extremely low. Two cards total.
- Mobile nav: hamburger, white 3-bar icon top right (about 22 css px wide, a small target).

## Footer / legal
Groups: Mount Sinai Doctors-Concierge Care (About Us, Our Provider Team, Contact Us); Membership Options (Employer-Sponsored, Personal Concierge, Pediatric Concierge, Healthspan); Resources (Member Portal, Blog); social: Instagram, Facebook. Legal strip: "(c)2026 Mount Sinai Doctors-Concierge." + Privacy Policy (mountsinai.org/privacy), Terms and Conditions (mountsinai.org/tou), HIPAA Privacy Practices (a Mount Sinai compliance page). Legal links present: privacy, terms, HIPAA. Absent: nondiscrimination/language-assistance notice, accessibility statement, price transparency, address/phone in footer. Note: the HTML source includes a commented-out typo "HIPPA".

## Tech facts (meta.json + html)
- Platform: WordPress with Divi theme (ChildThemeDivi, divi-v; ~79 divi mentions).
- Consent: Piwik PRO Consent Manager (ppms classes, ~1,200 mentions): categories Analytics, A/B testing and personalization, Conversion tracking, User feedback. The html also references Cookiebot (7), OneTrust (6), Salesforce (5), LinkedIn Insight tag (snap.licdn.com / ads.linkedin, 2), gtag (2), Google Fonts, Akamai (2), MyChart (6). I did not test which of these actually fire before consent (unverified; mention counts include comments and config).
- Forms: 1 (WordPress search, input name s). Images: 3, all with alt. Visible text of the whole page is about 2,264 characters (very thin).
- JSON-LD: BreadcrumbList, Organization, WebPage, WebSite. No MedicalOrganization/Physician, no LocalBusiness, no AggregateRating/Review/FAQ.
- No H1/H2 on the home page (h1 [] h2 []).
- Console errors: none. Load: 20.7 s phone / 19.6 s desktop (headless).
- Fixed: HEADER, consent popup overlay.

## Unverified claims on the site
"Dedicated primary care physician to lead your care 24/7" (access policy not described); "state-of-the-art practice at Hudson Yards"; "multi-specialty team" (no staff list on home); membership prices and what is included are not on the home page; Pediatric membership details not captured.

## Steal / avoid for Family First
Steal: the two-path "who are you" hero; visually separate "sign up/book" from "existing-patient login"; equal Agree/Decline consent pair (or avoid cookies altogether); compact legal strip on every page; real interior photography. Avoid: no address/phone/hours on the home page; no headings/proof; actions hidden in the hamburger; low-contrast ghost buttons; an empty hero with the message at the bottom edge.
