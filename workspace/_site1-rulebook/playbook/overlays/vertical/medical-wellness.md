# Overlay: vertical/medical-wellness

Status: draft | Owner task: T8 | Updated: 2026-10-30

## Trigger
- `archetype: medical-wellness` in `site.yaml`: medical and dental practices, clinics, therapists, physical therapy, med spas and wellness studios that make health claims.
- Usually `model: [booking]` or `[lead-gen]`; a practice that sells products adds `ecommerce`.
- `jurisdictions` adds state board and state health-privacy rows. `counsel` in the record is required (see U01).

## Primary conversion
- An appointment request or an online booking; a call stays the fallback. Existing patients need a portal link, kept apart from the new-patient path.
- Pattern block: book or request an appointment, with call fallback and a separate portal login (see U08).
- The request form collects scheduling details only, never symptoms or history, unless the form vendor signs a business associate agreement and counsel approves (see U08, U21).

## Page-set delta
Against the universal page set (see U06):
- Add: Services or treatments (one page each); Providers (one bio each); Locations and hours; Insurance and pricing; New patients (forms, what to bring); Patient portal link; Telehealth if offered.
- Add legal pages counsel confirms: notice of privacy practices; good-faith-estimate notice; nondiscrimination and language assistance where they apply (see U20).
- Drop: before-and-after galleries unless written patient consent is on file and counsel approves; a blog of health claims without clinical review.

## Trust signals
1. Provider credentials (license, board certification), each checked against the issuing board's public lookup before launch (see U05).
2. A current list of accepted insurance plans, dated, confirmed by the front desk at each content review (see U05, U24).
3. Real patient reviews shown with a link to the source; replies never confirm that someone is a patient (see U05).

## UX patterns
- medical-wellness.1: Find a provider by specialty, location and language (refines U15).
- medical-wellness.2: Booking works on phones as fully as on desktop; the call button is always one tap away (refines U08).
- medical-wellness.3: Plain-language copy and larger default text for older readers (refines U11, refines U07).
- medical-wellness.4: No ad pixels or session replay on appointment, portal, condition or provider-search pages; analytics there are cookieless and counsel approves the setup (overrides U19.8).
- medical-wellness.5: Health claims on service pages are reviewed by the provider and backed by evidence before publishing (refines U07).

## Schema types
See U18. Checked on schema.org, opened 2026-10-30:
- `MedicalClinic`, `Dentist` or `Physician` (subtypes of `MedicalBusiness`): `name`, `address`, `telephone`, `url`, `openingHoursSpecification` from the business record; `medicalSpecialty` from the services list; `availableService` from treatments offered (on `Physician`).
- `Person` per provider bio with `hasCredential` only for credentials checked against the board.
- Accepted insurance plans appear only from `overlay.medical-wellness.insurance_plans`, with its `as_of` date shown.

## Compliance rows
| rule | source | date checked | counsel flag |
|---|---|---|---|
| medical-wellness.6: When jurisdictions includes us-federal: A HIPAA covered entity whose website describes its services must post its notice of privacy practices prominently on the site and make it available electronically | [source: https://www.law.cornell.edu/cfr/text/45/164.520, B, 2026, opened 2026-10-30] | 2026-10-30 | counsel |
| medical-wellness.7: When jurisdictions includes us-federal: providers must tell uninsured and self-pay patients about their right to a good-faith estimate, including a notice prominently shown on the website and findable by search engines | [source: https://www.law.cornell.edu/cfr/text/45/149.610, B, 2026, opened 2026-10-30] | 2026-10-30 | counsel |
| medical-wellness.8: When jurisdictions includes us-federal: health apps and services outside HIPAA that hold personal health records may fall under the FTC Health Breach Notification Rule | [source: https://www.law.cornell.edu/cfr/text/16/318.1, B, 2026, opened 2026-10-30] | 2026-10-30 | counsel |
| medical-wellness.9: When jurisdictions includes us-federal: recipients of HHS funding face a web and mobile accessibility duty to WCAG 2.1 AA, with dates in 2027 and 2028 set by employee count | [source: https://www.law.cornell.edu/cfr/text/45/84.84, B, 2026, opened 2026-10-30] | 2026-10-30 | counsel |

as of 2026-10-30, counsel review needed

## Common mistakes
- Ad or social pixels firing on appointment and portal pages.
- "Top doctor" or "best clinic" claims with no documented basis.
- Before-and-after photos without written patient consent.
- Insurance lists that are years out of date.
- Booking forms that ask for symptoms or medical history.
- Review replies that confirm the reviewer was treated.

## Reference sites
No endorsement; studied for patterns only.
- https://my.clevelandclinic.org/ (opened 2026-10-30, title: Cleveland Clinic: Every Life Deserves World Class Care): appointments, find a provider, locations and the patient portal as four distinct top-level actions, with a phone number beside booking.
- https://nyulangone.org/ (opened 2026-10-30, title: Patient Care at NYU Langone Health): "find a doctor and schedule" as one combined path, search by location, portal login kept separate.

## Open counsel questions
- Tracking: after the 2024 court ruling on the HHS online tracking bulletin (HHS page blocked this session), which pages may carry analytics or ad tags, and which vendors need a business associate agreement? Counsel to answer.
- Section 504 accessibility: which date applies to this client (by size and funding), and does the client receive HHS funds at all? Counsel to confirm [source: https://www.law.cornell.edu/cfr/text/45/84.84, B, 2026, opened 2026-10-30].
- State rules: which medical, dental or wellness board advertising rules and state health-data laws apply in each jurisdiction? Not researched; counsel to identify.
- Claims and testimonials: what evidence federal guidance on health claims expects (the FTC guidance page failed the link check this session), and what consent and disclosure counsel requires before any patient story or before-and-after image is published.
- Nondiscrimination and language-assistance notices: does this client need them on the site? Counsel to answer.
