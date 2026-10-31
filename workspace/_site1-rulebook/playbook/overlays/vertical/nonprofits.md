# Overlay: vertical/nonprofits

Status: draft | Owner task: T8 | Updated: 2026-10-30

## Trigger
- `archetype: nonprofits` in `site.yaml` (see U00): charities, foundations and associations that ask the public for money or time.
- `model` almost always contains `donations`; transaction rules (receipts, fee cover, card scope) live in `playbook/overlays/model/donations.md`. Monthly giving adds `subscription` to `model`; galas add `ticketing` (U00.5).
- `jurisdictions` loads the matching overlays.

## Primary conversion
A completed donation, one-time or monthly (`goals.primary: donate`); volunteer sign-up and newsletter are secondary. Pattern block: the donation form in U08 (see U08), with the use of funds stated next to the form and the completed-gift event in U19.

## Page-set delta
Against the universal page set (see U06):
- Adds: mission and about; one page per program with its impact; financials (annual report, latest Form 990 where filed); donate; volunteer; ways to give; events; stories; donor privacy policy; solicitation disclosures where counsel requires them.
- Drops: service-area pages and the price page; "offers" become programs.

## Trust signals
See U05. Never fabricated.
1. Use of funds stated next to the donate button. Each figure from `proof.data` with `source_doc`, `period` and `measured_by`.
2. Third-party ratings. Each from `proof.awards` with issuer, year and `evidence_url`, checked by us on the rater's page at launch.
3. Program-level evidence of impact (studies, project reports, dated photos), from `proof.data` or `proof.cases` with the source document; reach and outcome labeled separately.

## UX patterns
- nonprofits.1: The mission sentence and a plain "Donate" button sit in the first screen of the home page; the button wording does not change across pages [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026]: refines U08 and U06.2.
- nonprofits.2: A monthly option is offered on the donation form, with the monthly choice and its cancel route stated before payment (counsel review needed, see the subscription overlay): refines U08.
- nonprofits.3: "Ways to give" covers money, items and time on one page: refines U03.2.
- nonprofits.4: Beneficiary photos and stories run only with documented consent and keep the person's dignity; no generated people: refines U13 and U04.10.
- nonprofits.5: The completed-gift event fires on the processor's success state, never on the button click: refines U19.2.

## Schema types
See U18. Only from record fields.
- `NGO` (a subtype of `Organization`) with `name`, `legalName`, `address`, `nonprofitStatus` and `funding`, from `business`, `legal.nonprofit_status` and `overlay.nonprofits.funding` [source: https://schema.org/NGO, A, 2026, opened 2026-10-30].
- `Organization` recommended properties such as `logo`, `sameAs`, `taxID` and `contactPoint`, from `brand.logo`, `hosting.accounts`, `legal.tax_id` and `contacts.public` [source: https://developers.google.com/search/docs/appearance/structured-data/organization, A, 2026, opened 2026-10-30].
- `DonateAction` with `recipient` for the donate page, from `business` [source: https://schema.org/DonateAction, A, 2026, opened 2026-10-30].

## Compliance rows
| rule | source | date checked | counsel flag |
|---|---|---|---|
| nonprofits.6: When jurisdictions includes us-federal: A single gift of $250 or more needs a written acknowledgment from the charity naming the charity, the cash amount or a description of non-cash property, and whether any goods or services were given in return | [source: https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-contributions-written-acknowledgments, A, 2026, opened 2026-10-30] | 2026-10-30 | counsel |
| nonprofits.7: When jurisdictions includes us-federal: A payment over $75 that is partly a gift and partly for goods or services (gala ticket, thank-you gift) needs a written disclosure of the deductible limit and a good-faith estimate of the value received, at solicitation or receipt | [source: https://www.irs.gov/charities-non-profits/charitable-organizations/charitable-contributions-quid-pro-quo-contributions, A, 2026, opened 2026-10-30] | 2026-10-30 | counsel |
| nonprofits.8: When jurisdictions includes us-federal: exempt organizations must make their exemption application and recent annual returns (such as Form 990) available to the public; whether web posting meets the duty is not stated on the page we read | [source: https://www.irs.gov/charities-non-profits/public-disclosure-and-availability-of-exempt-organizations-returns-and-applications-documents-subject-to-public-disclosure, A, 2026, opened 2026-10-30] | 2026-10-30 | counsel |
| nonprofits.9: When jurisdictions includes us-federal: email whose primary purpose is commercial (shop, paid events) needs a working opt-out honored within the stated period and a valid postal address; whether a pure appeal is commercial is a counsel call | [source: https://www.law.cornell.edu/uscode/text/15/7704, B, 2003, opened 2026-10-30] | 2026-10-30 | counsel |

as of 2026-10-30, counsel review needed

## Common mistakes
- The donate button hidden in a menu or worded differently on each page.
- Vague impact claims with no source document or period.
- Stock images of suffering used without dignity or consent.
- No annual report or financial summary anywhere on the site.
- Ratings badges shown after the rating has lapsed.

## Reference sites
- https://www.charitywater.org/ (opened 2026-10-30, title: charity: water | Help Bring Clean and Safe Water to Communities). Learn: one "GIVE TODAY" action, the use of funds stated beside it, and projects documented with location data and photos.
- https://www.givedirectly.org/ (opened 2026-10-30, title: GiveDirectly: Send money to people living in poverty). Learn: monthly giving as the default path, links from the home page to the research behind the program, and third-party ratings shown with their source.

## Open counsel questions
- For us-federal clients: in which states does an online donate page that reaches residents require charitable solicitation registration first, and which disclosure statements must the page carry? The advisory Charleston Principles page could not be opened tonight, so it is not cited.
- For us-federal clients: does posting the Form 990 on the site satisfy the public-disclosure duty for this client, and which years must be posted?
- For us-federal clients: is a fundraising appeal email "commercial" under the federal email rules, and which consent is needed for text-message appeals?
- May the form ask donors to cover processing fees, and how must the fee and the net gift be shown?
- What must a donor privacy policy promise about selling or sharing donor lists?
- For non-US clients: which charity registration, donor-receipt or tax-relief rules apply (see the jurisdiction overlay)? Counsel to identify.
