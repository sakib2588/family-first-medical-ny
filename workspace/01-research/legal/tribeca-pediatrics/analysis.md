# Legal / footer analysis: Tribeca Pediatrics (tribecapediatrics.com)
Captured 2026-10-31. Not legal advice. Closest analogue to our size/type (NYC independent pediatric group).

## Footer inventory
- Layout: one long flat list of ~25 links in several columns (About Us, Your Office, Health Resources...), then phone 212-226-7666, info@ email, "(c) Tribeca Pediatrics 2026". Social icons (Facebook, Instagram) are unlabeled links.
- Legal-ish links in footer: "Non-Discrimination and Code of Conduct", "Sliding Scale Policy", "Medical Release Form" (PDF), "Insurance". NOT in footer: privacy policy, terms, HIPAA NPP, accessibility, price transparency/No Surprises, emergency notice.
- No address or hours in footer; no license/credential line; no language selector.

## Policy pages fetched
| Page | URL | Date | Words | Notes |
|---|---|---|---|---|
| Privacy Policy | /privacy-policy/ (NOT linked in footer; found by probe, returns 200) | "Effective as of February 18, 2021" | ~860 | Generic template. |
| Non-Discrimination and Code of Conduct | /patient-and-staff-code-of-conduct/ | none | ~545 | A behaviour code (threats, discriminatory language), not a Section 1557 notice. No OCR complaint route, no language-assistance offer. |
| Sliding Scale Policy | /sliding-scale-policy/ | none | ~360 | Eligibility determination described; good, rare among sites. |
| Insurance | /insurances/ | none | ~560 | Lists plans; no price/No Surprises notice. |
| FAQs | /about-us/faqs/ | none | ~1,870 | Carries accessibility, policies, billing FAQs instead of policy pages. |
| Medical Release Form | /pdf/TP-Medical-Release-Form.pdf | n/a | not fetched | PDF-only form. |

## Topic coverage
Privacy page covers: collection, sharing, deletion right, children under thirteen, contact. Missing: cookies/analytics (even though GA4/GTM and a Facebook pixel load on the site), HIPAA distinction, security specifics, breach, NY-specific rights.

## Flaws / risks
1. Privacy policy exists but is orphaned (not in footer): effectively unfindable.
2. Template mismatch: says it governs "The New Basics" (a different brand name) and cites California ECPA / product-recall language that does not fit a NY pediatric practice.
3. Contradicts the site: page loads Google Tag Manager, Google Analytics and a Facebook pixel; policy says it collects nothing unless volunteered (verify with counsel; health-pixel risk).
4. Dated Feb 2021; no review date.
5. "Non-Discrimination" page is a conduct code, not the federal nondiscrimination notice.
6. No HIPAA NPP link at all; no accessibility statement.
7. Flat 25-link footer buries the few legal items (mobile scroll length).

## What to borrow
- Sliding scale policy as a plain page; FAQ-embedded policy answers. Avoid everything under flaws 1-4.
