# U16. Accessibility

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module sets the accessibility target for every site, the criteria that matter most for common components, the test method and how results are recorded, the accessibility statement page, and the legal context by jurisdiction, which always goes to counsel. It applies from design tokens (see U09) through components (see U15) and motion (see U14) to the pre-launch audit and handoff (see U24).

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U16.1 | Every site targets WCAG 2.2 Level AA at minimum: contrast, visible focus, keyboard operation, target size and text-spacing overrides included. | universal | A | [source: DR:J1, B, 2026]; [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U16.2 | Text contrast is at least 4.5:1, and at least 3:1 for large text, checked by a build guard on every text and background token pair (see U09). | universal | A | [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U16.3 | Where a border or fill identifies a control or its state, it has at least 3:1 contrast against adjacent colors, and so does the focus indicator. | universal | A | [source: DR:J4, B, 2026]; [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U16.4 | Every function works by keyboard alone in a logical order, with a visible focus indicator and no keyboard trap outside an open modal (see U15). | universal | A | [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U16.5 | Sticky bars and headers never fully cover a focused element (WCAG 2.4.11); set `scroll-padding-top` to their height. | universal | A | [source: DR:J5, B, 2026]; [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U16.6 | Tap targets are at least 44 x 44 CSS px as a project recommendation; the WCAG 2.2 AA floor (2.5.8) is 24 x 24 CSS px or the spacing exception, and nothing ships below the floor. | universal | B | [source: DR:G4, B, 2026]; [source: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html, A, 2024, opened 2026-10-30] | G |
| U16.7 | Contact details and other help links keep the same relative order on every page where they repeat (WCAG 3.2.6). | universal | A | [source: DR:J6, B, 2026]; [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U16.8 | Personal fields carry `autocomplete` tokens and the matching input type (WCAG 1.3.5), and a phone number is one input, never split fields. | universal | B | [source: DR:J7, B, 2026]; [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U16.9 | A multi-step form never asks again for something the user already entered in the same process; it is filled in or offered for selection (WCAG 3.3.7). | universal | A | [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | R |
| U16.10 | Sign-in allows paste and password managers and never requires a memory test or puzzle unless an alternative method is offered (WCAG 3.3.8). | universal | A | [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U16.11 | Honor the reduced-motion preference everywhere (see U14). | universal | A | [source: DR:J2, B, 2026]; [source: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion, A, 2026, opened 2026-10-30] | G |
| U16.12 | Auto-playing sound, carousels and marquees follow U14.7, U14.8 and U14.16 (see U14, which owns motion and audio; WCAG 2.2.2 pause control); scrollbars are never hidden or restyled. | universal | B | [source: DR:J3, C, 2026]; [source: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html, A, 2024, opened 2026-10-30] | G |
| U16.13 | Informative images have alt text that gives their purpose, decorative images have empty alt, and prerecorded video with speech has captions. | universal | A | [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U16.14 | Testing has three layers on every template and key flow: an automated scan, a keyboard-only pass, and a screen-reader pass on at least one desktop and one phone screen reader; a clean automated report alone is never treated as proof (ada.gov pairs manual checks with automated checkers and says a clean report does not mean everything is accessible; the keyboard and screen-reader layers are project policy). | universal | B | [source: https://www.ada.gov/resources/web-guidance/, A, 2022, opened 2026-10-30]; [source: https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/, A, 2014, opened 2026-10-30] | R |
| U16.15 | Results are recorded in WCAG-EM steps: scope and target, the explored templates and flows, a sample (every template, every form, navigation and modals, plus random pages), per-criterion pass or fail with date and tools, and a report. | universal | A | [source: https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/, A, 2014, opened 2026-10-30] | G |
| U16.16 | An accessibility statement page is linked from the footer and states the commitment, the standard targeted, known limitations in plain words, the last test date and a contact route for problems (see U20). | universal | A | [source: https://www.w3.org/WAI/planning/statements/, A, 2021, opened 2026-10-30] | G |
| U16.17 | Neither the statement nor any other copy says a site conforms fully or meets a law; it says the site aims to meet the target and lists known issues, and any stronger wording goes to counsel. | universal | A | [source: https://www.w3.org/WAI/planning/statements/, A, 2021, opened 2026-10-30]; [source: vault/wiki/compliance/red-lines.md, C, 2026] | G |
| U16.18 | When jurisdictions includes us-federal: as of 2026-10-30, counsel review needed: the DOJ's 2022 guidance says ADA requirements cover goods and services that public accommodations offer on the web, sets no detailed web standard for businesses, and names WCAG and the federal Section 508 standards as helpful guidance. | universal | A | [source: https://www.ada.gov/resources/web-guidance/, A, 2022, opened 2026-10-30] | R |
| U16.19 | When jurisdictions includes eu-eea: as of 2026-10-30, counsel review needed: the European Accessibility Act covers services that include e-commerce and banking, so a client selling to EU consumers is flagged for counsel (intake, see U02, records the jurisdiction). | universal | A | [source: https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en, A, 2026, opened 2026-10-30] | R |
| U16.20 | Every jurisdiction the client serves is recorded at intake and its accessibility duties go to counsel; the playbook supplies the WCAG target and test record, never a legal conclusion. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U16.21 | No accessibility overlay or widget is installed as the accessibility fix; issues are fixed in the code, and an overlay never replaces the tests in U16.14 (project policy on the Overlay Fact Sheet; ada.gov says such tools can help but need to be used carefully). | universal | B | [source: https://overlayfactsheet.com/en/, B, 2026, opened 2026-10-30] | G |

## Anti-patterns
- A green automated score reported to the client as "fully accessible". Automated tools miss keyboard and screen-reader failures. Fix: three test layers and a recorded sample (U16.14, U16.15).
- An overlay toolbar added instead of fixing contrast and labels. Fix: fix the code (U16.21).
- Focus outlines removed because they "look messy". Keyboard users lose their place. Fix: a visible indicator with enough contrast (U16.3, U16.4).
- A sticky header that hides the field a keyboard user just tabbed into. Fix: scroll padding (U16.5).
- Phone number split into three boxes with no `autocomplete`. Autofill fails. Fix: one input with tokens (U16.8).
- A statement page that promises full conformance with no test record. Fix: aims-to-meet wording, known issues, test date (U16.16, U16.17).
- Telling a client the site "meets the ADA". Fix: no legal conclusions; counsel (U16.18, U16.20).

## Checklist
- [ ] Target recorded as WCAG 2.2 AA (U16.1).
- [ ] Contrast guard passes for text and non-text pairs (U16.2, U16.3).
- [ ] Keyboard pass done; focus visible and never obscured (U16.4, U16.5).
- [ ] Target sizes meet the floor; recommendation met or the exception logged (U16.6).
- [ ] Help order consistent across pages (U16.7).
- [ ] Form fields have `autocomplete`; no repeated entry; sign-in allows paste (U16.8, U16.9, U16.10).
- [ ] Reduced motion honored; no autoplay sound, carousel or marquee (U16.11, U16.12).
- [ ] Alt text and captions present (U16.13).
- [ ] Automated, keyboard and screen-reader results recorded in WCAG-EM steps (U16.14, U16.15).
- [ ] Statement page live, footer-linked, aims-to-meet wording (U16.16, U16.17).
- [ ] Jurisdictions recorded and sent to counsel (U16.18, U16.19, U16.20).
- [ ] No overlay installed (U16.21).

## How an AI builder uses this
The builder reads the record's jurisdictions and audiences (U02), the token file (U09), the component inventory (U15) and the motion inventory (U14). It runs the contrast guard and an automated scan in the build, performs or schedules the keyboard and screen-reader passes, writes the test record in WCAG-EM steps, and drafts the statement page from that record. It produces a list of open issues with the criterion each one fails. It must refuse to call a site accessible, conformant or lawful, to install an overlay as a fix, to remove focus indicators, to ship targets below the AA floor, or to give legal advice; jurisdiction questions go to counsel. Vertical overlays add their own duties (for example, government or health clients) on top of this target.

## Open questions
- Open counsel questions: the DOJ Title II rule for state and local governments and its deadlines (R14 lists conflicting dates); whether a given business client is a public accommodation for web purposes.
- Open counsel questions: the European Accessibility Act application date, the microenterprise exemption for services, the information duty for service providers and the harmonised standard; the Directive text did not load and the R14 sources conflict.
- Open counsel questions: UK, Canadian and US state duties for clients outside New York; not researched.
- Evidence: the Overlay Fact Sheet is a practitioner statement (grade B), not a study; an independent overlay study would strengthen U16.21.
- Owner: PDF and document accessibility (menus, datasheets): a PDF that carries required content needs an HTML equivalent or tagging and a test; not yet a rule.
- Owner: which screen readers and devices form the standard test pair, and whether testing with disabled users is offered as a paid extra.
