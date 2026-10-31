# Design brief (DRAFT) for the NY primary-care and pediatrics website

Date: 2026-10-31. Status: recommendation for owner/client review (Q14 taste is OPEN). This is a direction, not the Site1 nine-gate design brief: Site1's gate 4 still requires three concepts that differ on 4+ of 10 axes before a client lock. Practice name is not confirmed: all copy below uses [Practice name], [Office A], [Office B], [Doctor 1], [Doctor 2].

Evidence base: flaw-register.md, strengths-register.md, improvement-plan.md, 02-analysis/design-inspiration.md, 02-analysis/premium-benchmark.md, _digests-site1/digest-C-overlays.md (medical-wellness overlay, design-craft gates), digest-A-vault.md (red lines).

## 1. Recommended direction: "A Warm Clinic" with Quiet Editorial discipline (hybrid A + C), one ownable arch device

Rationale tied to evidence:
- Audience is both parents (pediatrics) and adults (family medicine). B Soft Playful (yellow accent, rounded fonts) fits only half of that and carries a contrast risk (yellow text) and the "childish" risk noted in design-inspiration.md section 5; the premium set shows loud kid brands (BB, ROCK) are ownable but wrong for adult patients (premium-benchmark.md Cross-site principle 2 and the BB/ROCK risks).
- C Quiet Editorial alone is best for "impress the client" and adult trust, but is formal for children and depends on excellent doctor portraits we do not yet have (design-inspiration.md section 5C; weak evidence: no photos in hand).
- A is the lowest-risk fit across both halves (design-inspiration.md recommendation), and 4 of the 5 most transferable premium moves (premium-benchmark.md) are compatible with it: warm off-white + deep ink + one accent; serif headline with one italic phrase; first fold with action + phone + trust strip; ownable shape device; insurance and proof as visible plain sections.
- Hybrid: take A's palette and type, C's restraint (large calm portraits, hairlines, whitespace, near-zero shadow), and an arch/half-circle device (LO, GS) so the site is not photo-dependent in a 1-week build.
- Honest flag: Site1 design-craft lists "cream + serif display + terracotta accent" among "defaults to recognise" (digest-C section 8.5) that a brief must earn. Our written reason: the medical-trust and calm-for-parents requirement, and the audience's moment of use (a worried or busy parent on a phone), with the accent kept to the one action. If the owner or client prefers to avoid the default entirely, fallback accent for actions is forest #2F5C4D (section 4) and the arch device carries the identity. The decision belongs in the client's concept review.
- Not a copy of any reference: no Little Otter leaf or arch proportions, no Grand Street colours, no Bluebird scallops. The arch is generic geometry; counsel has not cleared lookalikes, so we avoid matching any one site's combination.

## 2. Type pairing
- Headings: Fraunces (variable, OFL), weight 500-600, one italic phrase per H1 at most, tight optical size. Sentence case. 
- Body/UI: Figtree (variable, OFL), 400/500/600. Not a Site1 "default" body face (Inter, Roboto, Open Sans, Arial, system).
- Scale (phone 390): H1 34-36px / 1.15; H2 26px; H3 20px; body 17px / 1.6; small 15px (never below 14px); line length 60-68 characters. Desktop: H1 52-56px, body 18px.
- Loading: self-hosted WOFF2, Latin subset, preload the two files used above the fold, `font-display: swap`. Budget check needed: Site1 found Newsreader + italic + Hanken at about 154 KB, over a 100 KB target; Fraunces variable with italic may also exceed it. Mitigation: use static instances or subset axes (weight 500/600 only, one italic cut), measure, and if still over, drop the italic and use weight contrast. (Weak evidence: sizes not yet measured.)
- Only two families (Site1 gate 6 rule). No icon font; one drawn SVG icon set, one stroke weight.

## 3. Imagery rules
- Real photographs only for people and places: [Doctor 1], [Doctor 2], the two entrances, waiting and exam rooms, front desk (with consent from everyone identifiable). Consistent crop, one white balance, AVIF/WebP, hero <=120 KB.
- No stock people, no generated people, no stethoscope/hands/teddy-bear genre (Site1 E3, tell 12; flaw F-018).
- AI-generated images only as clearly labelled DRAFT placeholders for layout review, never of people, never published; remove before client launch.
- If photos are not ready: a named empty slot component ("Photo of [Doctor 1] to come") on a draft, or the arch/half-circle shapes alone. Never a stand-in presented as the client's.
- Every informative image has alt text (names and roles for portraits); decorative images alt="". No text inside images (F-055: NAO promo images carry hours, price and phone).
- Maintain an image log: file, source, who is pictured, consent date.

## 4. Palette (hex) with WCAG 2.x contrast computed (relative luminance formula, not estimated)

| Token | Hex | Role |
|---|---|---|
| ink | #1F3B34 | headings, header/footer fills, outline buttons |
| text | #2B2B28 | body copy |
| muted | #5A5F58 | secondary text |
| cream | #FAF6EF | page ground |
| sage-tint | #E6EDE3 | alternate section ground |
| apricot-tint | #F1E3D6 | callout/office-card ground |
| action | #A8452D | the single filled primary action and its hover/focus accents only |
| action-hover | #8E3822 | hover/pressed |
| link | #3F6B5C | inline links (underlined) |
| error | #8F2D1F | form errors (with icon + text) |
| sage | #7C9A82 | decorative shapes only, never text or controls |
| fallback-action | #2F5C4D | if the terracotta-family accent is rejected |

Computed ratios (script run 2026-10-31):
- ink #1F3B34 on cream #FAF6EF: 11.25:1 (pass AAA)
- text #2B2B28 on cream: 13.18:1
- muted #5A5F58 on cream: 6.07:1; on sage-tint 5.47:1; on apricot-tint 5.20:1
- white on action #A8452D: 5.91:1 (pass AA for normal text); white on action-hover #8E3822: 7.67:1
- action #A8452D as text on cream: 5.48:1; on apricot-tint: 4.70:1
- ink on sage-tint: 10.15:1; ink on apricot-tint: 9.63:1
- cream on ink: 11.25:1; apricot-tint on ink: 9.63:1; sage-light #C9D9CB on ink: 8.23:1
- link #3F6B5C on cream: 5.62:1; on sage-tint: 5.07:1
- error #8F2D1F on cream: 7.61:1
- focus ring ink on cream: 11.25:1 (needs >=3:1 for controls)
- fallback white on #2F5C4D: 7.61:1
- FAILS (do not use): sage #7C9A82 on cream 2.87:1 (decorative only); white on terracotta #C8654B from the older Direction A 3.88:1 (fails 4.5:1 for normal text, so the original A accent must not carry white button text); gold #8B6B1F on cream 4.62:1 passes only barely and is not used.
- Contrast must be re-checked after any hex change; these ratios are for flat colour, not text over photos (we place no text on photos).

## 5. First-fold spec

### Phone 390x844 (and check 358x667)
Top to bottom, exactly one filled action visible:
1. Header (about 64px): [Practice name] wordmark (display face; no generic cross/heart/stethoscope mark), outlined "Call" button showing the main number, menu button. All >=44px.
2. Optional slim notice row (max 40px): only a real, dated service notice (holiday hours). Absent by default. 911 line sits in the footer and under the form, not as a banner, unless counsel/owner prefer an emergency strip.
3. H1 (max 3 lines), plain offer + place, e.g. "Family medicine and pediatrics in [Neighborhood A] and [Neighborhood B]" (placeholders until client confirms). One short supporting line: ages seen and "newborns to adults" only if true.
4. ONE filled primary action: "Request a visit" (action colour, 52px high, full width). Secondary: text link "Or call [number]" (office choice dialog). Nothing else filled.
5. Status line under the buttons (plain text, 15px): "Accepting new patients" (only if client confirms, dated) and "[Office A] open today until [time]" computed from the hours file with a static fallback.
6. Trust strip, 2x2 chips peeking at the fold (only verifiable facts, each sourced in a fact list): accepting new patients (dated), languages spoken (client), board certification named by board (after ABMS check), insurance plans accepted ("as of [date]"), two offices with hours. Optional: Google rating + count only if read live and linked (default off).
7. Next section peeks (arch-framed portrait of the two doctors, or the shape device if no photos).
Sticky bar: hidden in the fold; appears after the hero is out of view; Call outlined + Request filled; hidden on the form and in the footer (Site1 gate 6: one filled action per screen, no-JS = no bar).

### Desktop 1280x800
- Sticky header: wordmark; 5 nav items (Doctors, Locations, Insurance, New patients, Contact); outlined Call button with number; quiet "Patient portal" text link in a utility row.
- Two columns: left = H1, one supporting line, filled "Request a visit", outlined Call with number, status line; right = arch-cropped real portrait of the doctors (or labelled empty slot + shapes).
- Below the buttons inside the fold: the same trust strip as a single row of 4-5 items. Both office cards begin to peek at the bottom edge.
- No carousel, no video, no promo bar, no chat, no cookie banner.

## 6. Component list (build once, reuse)
Header with Call; office-choice dialog; sticky action bar; status chip ("Open now"); arch photo frame; shape divider; trust strip chip; office card (address, today's hours, Call, Directions, getting-here); hours table; doctor card and doctor profile facts block; intent routing cards (radio-card pattern); request form (fields, inline errors, helper line, consent line, confirmation); insurance list by carrier with "Last verified" stamp; FAQ details/summary; footer block (entity, NAP, hours, 911, legal row, last-reviewed date); /legal/ hub list; notice row (optional); empty-slot placeholder (designed, labelled, draft only).

## 7. Motion rules
- Opacity/translate 8-16px on section entry only, `prefers-reduced-motion: no-preference`, content visible with JS off; never on H1, the primary action, or the LCP element.
- Hover/focus states only on controls; no autoplay, carousels, parallax, cursor effects, scroll-jacking, preloader or splash (flaw F-049; Site1 B1-B6).
- Dialog (office choice) opens with a short fade, closes on Escape.
- One optional signature moment per page, none required for v1.

## 8. "Premium vs generic" checklist applied (design-inspiration.md section 4 + premium-benchmark.md table)
Planned status (to be verified with screenshots and Lighthouse after the build; this is a target, not a result):
1. One primary action per screen: planned (single filled "Request a visit").
2. Real people and places: conditional on photos (CL); fallback is shapes, not stock.
3. 3-4 colour palette on off-white: planned (ink, cream, one accent, two tints).
4. Two typefaces, heading with character: planned (Fraunces + Figtree).
5. Whitespace, 16px+ body, 1.5+ leading: planned (17px / 1.6).
6. No carousels/autoplay: planned.
7. Tap-to-call and directions one tap; sticky bar: planned.
8. Hours show open-now and holiday exceptions: planned (hours file).
9. Credentials specific and verifiable: conditional on verification.
10. Copy sounds like the doctors, not a template: needs the doctors' input (CL).
11. Consistent photo crop/grade/radius: planned (arch frame).
12. Fast (images <=150 KB, LCP <=2.5s): planned; must be measured.
13. Accessible (4.5:1, focus, 44px, alt): planned; must be tested.
14. Complete footer: planned.
15. Forms ask the minimum and say what happens next: planned.
Also premium-benchmark rows: specific H1 promise (not "trusted care"), proof as data, insurance visible, one repeated shape device, no pop-ups.
Site1 slop test (15 points, pass >=12 with items 1-4 yes) to be run by someone other than the builder before READY.

## 9. The 3 things most likely to make the client say wow (and what each depends on)
1. A calm, doctor-led first screen: arch-framed portrait of their own two doctors, a plain H1, one clear action, and a live "[Office A] open today until 6" line. Depends on real portraits (CL) and hours data. It beats the base site (which shows the call button below the fold and a LCP of 11.1s) and nearly every reference we reviewed.
2. A request path that takes about 30 seconds on a phone and asks nothing sensitive: four intent cards, three fields, a plain "we will call you [timeframe]" and the call alternative. Depends on Q13/Q4/counsel. Few of the reference sites do this without trackers or DOB.
3. Visible care about privacy and speed as part of the design: a clean footer with a dated "Last reviewed", a short plain-language /legal/ hub, "no advertising trackers on this site" backed by the build's real script list, and a measured fast load. Depends on counsel text; speed numbers must be measured before we say them.

## 10. Do-not-do list (from the flaw register and Site1 red lines)
- No fake reviews, testimonials, ratings, star widgets, review counts or "5.0 verified" unless read live from the real listing and linked (F-015, F-045; Site1 H6, FTC 16 CFR 465).
- No invented staff, bios, credentials, years in practice, awards, "top doctor" logos, hospital affiliations, addresses, phone numbers, hours, or insurance plans; every fact has a source and date (F-004, F-034; Site1 red lines, gate 1).
- No claims like best, top, leading, most experienced, highest quality, #1, only, first, guaranteed, safe, effective, cure; "board-certified" only after a board lookup names the board (F-004).
- No pixels, ad tags, social SDKs, analytics tags, session replay, heatmaps or chat widgets anywhere; absolutely none on request, doctor, insurance or portal pages (F-003, F-027; Site1 medical-wellness.4, I6).
- No health data in forms: no symptoms, diagnoses, medications, history, DOB, sex, insurance ID or card photo, SSN, photos, or free-text reason (F-010); no records or cards by email.
- No stock or AI-generated people, no AI image published unlabelled, no photo captioned as the client's if it is not (F-018; Site1 E3, tell 12).
- No cookie banner covering content; no overlay accessibility widget as a compliance claim; no promo bar above the logo; no splash; no carousels; no content hidden until scroll JS (F-002, F-012, F-017, F-019, F-020, F-049).
- No text over photos; no ghost buttons; no contrast below the tokens above; no tap targets under 44px (F-016, F-030, F-032).
- No site-wide "Open 7 days" or any blanket hours claim; no comparison with other practices; no wellness/IV or elective services with efficacy language unless the client decides and counsel approves (F-031, F-040, F-048).
- No third-party scheduler or portal hand-off without counsel, a BAA where PHI is involved and a tracker scan; no texting until SMS terms and a HIPAA-safe tool exist (F-033, F-037).
- No legal text copied from another site; no policy published undated; no legal page stays orphaned; legal pages remain DRAFT until counsel or a recorded owner waiver (F-011, F-029; Site1 U20.22).
- No lookalike of any reference site's layout, wording, imagery, colours or marks (counsel has not cleared lookalikes).
- No hard-coded practice name until identity is confirmed; no domain-bound assumptions (canonicals, sitemap) until the domain is owned.

## 11. What evidence is still weak or missing (do not overclaim)
- Traffic and ranking: no search-volume, Similarweb, Search Console, Maps-pack or SERP data; the search tool returned summaries, not live rankings (candidates.md). "Direct competitors" came from a handful of queries; Healthy Kids Queens and National Pediatrics Center were blocked and never reviewed. A manual 20-minute SERP/Maps check is still recommended.
- Conversion: nothing here is measured. No conversion rate, call volume, A/B result or heatmap for any reference site or the base. Claims such as "sticky bar lifts calls" are unproven (Site1 G1 states no study backs it).
- User testing: none. No real-device check, no screen-reader session, no parents or patients interviewed. Site1's own playbook has never been validated on a real client or by a lawyer.
- Visuals: Mobbin was unavailable (paid plan); design-inspiration.md section 3 is judgement, not observation; premium-benchmark contrast numbers are estimates (ours in section 4 are computed from hex, but real rendering and anti-aliasing were not tested).
- Captures: headless, one pass; load times (15-37s) are noisy and not field data; ACP home screenshots were blank; Tia desktop, One Medical desktop, Mount Sinai and NVP policy pages were blocked (403, not evaded); several sites showed scroll-reveal blank bands that are capture artifacts.
- Trackers: static DOM name matches only, no network inspection.
- Legal: keyword scans, not legal reading; nothing here is advice; Site1's medical overlay is a 4-row draft with 5 open counsel questions and the whole playbook was written for NYC trades.
- Premium set: biased to well-funded brands and dental practices; no truly premium NYC independent primary-care or pediatric site was found, which is itself the opportunity but also means we have no local premium benchmark.
- Client facts: practice identity, doctors' credentials, languages, hours, parking, insurance, photos, callback process and portal vendor are all unconfirmed.
- Type: Fraunces/Figtree file sizes and rendering not measured; licence (OFL) to be confirmed at download.

## 12. Source files cited
02-analysis/flaw-register.md, strengths-register.md, improvement-plan.md, design-inspiration.md, premium-benchmark.md, conversion-patterns-seen.md, inner-pages.md, legal-and-footer-comparison.md, candidates.md; 01-research/sites/*/notes.md; 01-research/inner/NOTES.md; 01-research/premium/*/notes.md; 01-research/legal/*/analysis.md; 03-decisions/deferred-questions.md; _digests-site1/digest-A-vault.md; _digests-site1/digest-C-overlays.md.
