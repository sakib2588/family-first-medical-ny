# Premium design benchmark: healthcare / clinic websites

Date: 2026-10-31. Purpose: raise the design ceiling for a NY 2-doctor family medicine + pediatrics site (phone-first, 1-week build). Rubric: benchmark-methodology (nine dimensions, adapted to clinics) with frontend-design-direction as the lens for craft.

## Limits (read first)
- Evidence = screenshots (phone 390px, desktop 1280px), saved HTML and computed CSS. No real-user data, no analytics, no Lighthouse run, no interaction testing beyond what a static capture shows. Hex values are approximate; contrast ratios are my estimates, not tool-measured.
- Full-page phone captures of scroll-animated sites (Little Otter) show blank bands: capture artifact (reveal-on-scroll), not necessarily a live bug.
- Design roundups (Freshysites, Delmain, UENI, CyberOptik) are agency marketing lists; most of their picks were template-grade when captured (see Calibration). Awwwards/Godly/Land-book/Lapa searches returned gallery pages only, no usable independent-clinic winners in the family-medicine niche; I did not capture those gallery entries. The set is therefore a judgment sample, with survivorship bias toward well-funded brands.
- Candidate domains I guessed from memory sometimes were wrong (see Rejected). Scores are 1-5 against this set only; a 4 should mean the same thing everywhere (re-read side-by-side before relying).
- Accessibility is a visual estimate (contrast, type size, alt counts from capture), not an audit. Cassia phone view was blocked by a bot challenge (403) and was skipped, not evaded.

## Final list (10 sites; all returned HTTP 200 to a browser; Cassia phone was challenged)
| # | Site | URL | Type |
|---|---|---|---|
| 1 | Cassia Optimal Health (Atlanta) | https://cassiaoptimalhealth.com/ | solo membership primary care |
| 2 | Little Otter | https://www.littleotterhealth.com/ | family mental health group |
| 3 | Grand Street Dental (Brooklyn) | https://grandstreetdental.com/ | independent boutique dental |
| 4 | TejoMed (Lisbon) | https://tejomed.com/ | membership family medicine |
| 5 | Bluebird Kids Health (FL) | https://www.bluebirdkids.com/ | pediatric group |
| 6 | Cityblock Health | https://www.cityblock.com/ | community primary care system |
| 7 | Rock Pediatric Dentistry (Boulder) | https://rockpediatricdentistry.com/ | independent pediatric dental |
| 8 | Camp Little Tooth (Lafayette, CO) | https://camplittletooth.com/ | independent pediatric dental |
| 9 | ORAL Dental Studio NYC | https://www.oraldentalstudio.com/ | independent boutique dental |
| 10 | SF Pediatric Dentistry | https://www.sfpediatricdentistry.com/ | solo pediatric dental |

No truly premium NYC independent primary-care or pediatric site was found; that gap is itself the opportunity. Only Grand Street and ORAL are NYC; both are dental.

## Comparison matrix (1-5; Distinct/Cred = tension poles, separate)
| Site | URL | Model | Pos | Voice | Visual | Offer | Trust | A11y | Price | Mobile | Distinct/Cred |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [Cassia Optimal Health (Atlanta)](../01-research/premium/cassia/notes.md) | https://cassiaoptimalhealth.com/ | Solo physician, membership/direct primary care, weight+menop | 5 | 4 | 4 | 4 | 4 | 2 | 3 | n/c | 4/4 |
| [Little Otter (family mental health)](../01-research/premium/littleotter/notes.md) | https://www.littleotterhealth.com/ | Venture-scale virtual family mental-health group (now 'a Haz | 4 | 4 | 5 | 4 | 4 | 4 | 4 | 3 | 4/4 |
| [Grand Street Dental (Williamsburg, Brooklyn)](../01-research/premium/grandstreetdental/notes.md) | https://grandstreetdental.com/ | Independent boutique cosmetic dental practice, Brooklyn NYC | 5 | 4 | 4 | 3 | 5 | 2 | 2 | 4 | 5/4 |
| [TejoMed (Lisbon, Portugal)](../01-research/premium/tejomed/notes.md) | https://tejomed.com/ | Membership family-doctor group, small panels ('Fewer patient | 4 | 4 | 4 | 4 | 4 | 3 | 3 | 3 | 4/4 |
| [Bluebird Kids Health (Florida)](../01-research/premium/bluebirdkids/notes.md) | https://www.bluebirdkids.com/ | Multi-location pediatric group (PE/venture-backed), 'Trusted | 4 | 3 | 4 | 5 | 4 | 4 | 4 | 5 | 3/5 |
| [Cityblock Health](../01-research/premium/cityblock/notes.md) | https://www.cityblock.com/ | Venture-scale community-based care for Medicaid/Medicare mem | 4 | 4 | 4 | 3 | 3 | 3 | 2 | 4 | 4/4 |
| [Rock Pediatric Dentistry (Boulder, CO)](../01-research/premium/rockpeds-dental/notes.md) | https://rockpediatricdentistry.com/ | Independent pediatric dental practice; character brand ('roc | 5 | 5 | 4 | 4 | 3 | 3 | 3 | 4 | 5/3 |
| [Camp Little Tooth (Lafayette, CO)](../01-research/premium/camplittletooth/notes.md) | https://camplittletooth.com/ | Independent pediatric dentistry with a full camp-lodge theme | 5 | 4 | 3 | 3 | 3 | 2 | 2 | 2 | 5/2 |
| [ORAL Dental Studio NYC](../01-research/premium/oraldental/notes.md) | https://www.oraldentalstudio.com/ | Independent boutique dental practice, Lower Manhattan | 3 | 3 | 3 | 4 | 4 | 3 | 4 | 3 | 3/4 |
| [SF Pediatric Dentistry (San Francisco)](../01-research/premium/sfpeds-dental/notes.md) | https://www.sfpediatricdentistry.com/ | Solo-doctor independent practice; minimalist | 3 | 3 | 3 | 3 | 2 | 3 | 2 | 3 | 3/3 |

Columns: Pos = positioning clarity; Voice; Visual = visual craft; Offer = offer packaging/booking; Trust = evidence; A11y; Price = pricing/insurance clarity; Mobile; Distinct/Cred = tension (memorable vs medically credible). 'n/c' = not captured. No composite score by design.

## Per-site summaries (full notes in 01-research/premium/<slug>/notes.md)
**Cassia**: forest green + cream + gold, high-contrast display serif, hairline accordions, one real doctor photo, a two-question plan picker. Weak on contrast (small gold text) and price (tiers hidden). Template for a calm, doctor-led feel.

**Little Otter**: highest craft: serif headline with italic phrase, arch-cropped photos, leaf motif, warm off-white, navy. Risks: scroll-reveal dependence, big cookie bar over the fold.

**Grand Street Dental**: most ownable identity; a graphic shape system replaces stock photos; press wall as proof. Risks: puffery, no pricing, missing alt text, heavy load (about 25s in capture), cosmetic register.

**TejoMed**: mechanism-based positioning ('Fewer patients. More time.'), licence number + review count trust strip, comparison table. Cookie wall blocks the phone fold (GDPR; not needed for a US practice with minimal trackers).

**Bluebird Kids**: best conversion fold: announcement bar, big pill Book button, tappable phone, 5-item trust strip, NCQA badges, insurance H2. Yellow/cyan identity is loud but bespoke.

**Cityblock**: disciplined light-weight sans on gradient; reads tech, not family doctor. Borrow typography only.

**Rock Pediatric Dentistry**: mascot + lowercase wordmark + consistent voice; very ownable, too cute for adults; white-on-pink CTA contrast.

**Camp Little Tooth**: full theme with real interior photos; on phone the huge headline and cookie panel bury the CTA.

**ORAL Dental Studio NYC**: Google 4.9 / 503 reviews in hero, sticky hours bar, explicit insurance stance; but pop-ups, 13px body, 2-line nav wrap, frosted card over busy photo.

**SF Pediatric Dentistry**: sparse and calm, nice line logo, but thin content and no proof; restraint reference only.

## Calibration: roundup picks that were NOT premium
Captured and viewed on phone: Almaden Pediatrics (blurred stock-feel hero, two buttons that are not booking), Avala Pediatrics (carousel text unreadable over photo, stock doctor-with-teddy-bear), Agave Pediatrics (flyer image as hero, floating chat bubble over text). Acorn and Happy Tooth were captured (200) but not examined in detail. These sit at about 2-3 on visual craft and illustrate the generic baseline.

## Rejected / not captured (honest log)
- tend.com: now a farm-software site (the dental 'Tend' is at hellotend.com, 403, blocked, skipped). Capture folder 01-research/premium/tend is junk; ignore.
- bravecare.com: current page is a Thai gambling-spam page (domain appears hijacked or expired). Discarded; ignore 01-research/premium/bravecare (not deleted: deletion was not permitted in this session).
- summerhealth.com: root 404, www redirects to doctronic.ai. Skipped.
- PrimaryMD (primarymd.com): 200 but blank dark page at 6s; not evaluated (folder primarymd is empty-render).
- Zen Dental Studio: Access Denied (bot block), skipped (folder zendental is a block page). Oula, Kindbody, Carbon Health: 403 to scripted fetch, not captured.
- Awwwards gallery entries (Debski Clinic, L'Avenir Dental, Halo Dental): leads only; actual sites not captured.

## Cross-site design principles
1. One idea, one doctor, one promise: the strongest sites (Cassia, TejoMed, Grand Street) put a single mechanism or stance in the H1, not 'trusted care'.
2. One ownable device beats a style: arch crops (Little Otter), half-circle shapes (Grand Street), pills + cloud scallops (Bluebird), mascot (Rock). Pick one and repeat it.
3. Warm off-white or cream instead of clinical white; one deep ink color (navy, forest green, teal) for text and buttons; one accent. 3-4 colors total.
4. Type: one expressive display face (serif or hand-lettered) with one quiet sans; light/regular weights at large size; sentence-case or small tracked uppercase buttons, not both.
5. Real people and real rooms. Premium examples show the actual doctor/space; generic ones show stock doctor-with-teddy-bear.
6. Booking is in the first phone fold: primary action + tappable phone number (Bluebird, Cassia, ORAL). Premium does not mean hiding the CTA.
7. Proof as data, not adjectives: rating + count, licence/NPI, named credentials, footnoted stat; avoid 'leader', 'best', 'optimal'.
8. Generous vertical rhythm (80-120px between bands), single-column text at 600-680px, hairline dividers, near-zero shadow, restrained radius (0, about 8px, or full pill).
9. Insurance/price is a visible section, not a nav link (Bluebird H2 'Most Insurances Accepted'; Little Otter accepted plans).
10. Motion is optional; reveal-on-scroll (Little Otter) has the largest failure mode (blank content if JS is slow).

## Premium vs generic checklist
| Check | Premium | Generic |
|---|---|---|
| H1 | specific promise (what is different) | 'Trusted pediatric care in [city]' |
| Photography | real doctors/space, consistent crop | stock child with stethoscope/teddy bear |
| Palette | 3-4 colors, off-white base | white + default blue/green + many accents |
| Type | 2 families, big light display type | one system font, bold everywhere |
| Phone fold | logo, H1, Book + call, trust strip | slider/flyer, cookie wall, chat bubble |
| Proof | rating + count, licence, named credentials | 'Top Doctor' logos with no source |
| Buttons | one primary style, 44px+ tall | 4 styles, tiny text |
| Insurance/price | visible section, plain words | 'call for details' |
| Shapes/illustration | one repeated device | random clip-art |
| Motion | opacity/translate only, respects reduced-motion | parallax, autoplay carousels |
| Pop-ups | none on first view | promo modals, giveaways |
| Performance | light, few images | 150 images, 25s load |

## The 5 most transferable design moves
1. Bluebird-style first fold: slim announcement bar ('Accepting new patients, same-week sick visits'), logo, specific H1, big pill 'Book a visit' + tappable phone, and a 4-5 item trust strip (rating + count, languages spoken, same-day sick visits, insurance accepted, NPI/licence).
2. One ownable shape device derived from the logo (Grand Street / Little Otter): arch-cropped doctor portrait or a few half-circle shapes in 3 brand colors as hero background and dividers. One SVG and CSS radius; removes the stock-photo problem.
3. Warm off-white + one deep ink + one accent, serif display headline with one italic phrase over a quiet sans (Little Otter / Cassia); sentence-case buttons; AA contrast.
4. Doctor-led hero and a 'typical practice vs ours' comparison (Cassia, TejoMed): real photo of the two doctors and a concrete mechanism ('longer visits, same-day sick appointments, one doctor who knows your family').
5. Insurance and proof as visible plain sections plus a 'which visit do you need' two-question picker (Cassia) ending in booking; Google rating + count in the hero; licence/NPI in the footer; fixed mobile 'Call / Book' bar (Rock/ORAL pattern).

## Medical-practice guardrails
Avoid superlatives ('best', 'leader', 'optimal'); substantiate any award/'top doctor' badge with a link; do not make the CTA depend on animation; no blocking cookie modals; check contrast of gold/pink/pastel accents against AA; add alt text; keep pages light; no patient photos/testimonials without consent and HIPAA review.
