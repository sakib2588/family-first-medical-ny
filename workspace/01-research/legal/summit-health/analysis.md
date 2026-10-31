# Legal / footer analysis: Summit Health (summithealth.com)
Captured 2026-10-31. Not legal advice.

## Footer inventory
- Layout: three columns (ABOUT US; PATIENT TOOLS & RESOURCES; policy block) + social (Facebook, Instagram, YouTube, LinkedIn). Final strip "(c) 2026 - Summit Health".
- Policy block (all PDFs): Notice of Privacy Practices NJ, Notice of Privacy Practices NY, Digital Privacy Policy, SMS Terms of Use, No Surprises Act, Notice of right to Good Faith Estimate, Non-discrimination Statement NY & NJ. Plus "Privacy & Nondiscrimination" HTML hub, Code of conduct, Compliance manual, Anonymous hotline (PDF).
- No accessibility statement link, no address/hours, no 911 line.

## Policy pages fetched (all 200)
| Document | Format | Date shown | Words | Notes |
|---|---|---|---|---|
| Privacy & Nondiscrimination hub | HTML | none | ~425 | Plain hub linking the PDFs. |
| NPP (NY) | PDF | "Effective March 2013; Revised February 2026" | ~7,440 | Full HIPAA notice; very long; Flesch about 31. |
| Digital Privacy Policy | PDF | "Effective January 2025; Revised August 2025" (file sits in a 2026-02 folder) | ~4,380 | Names Google Analytics, Facebook, advertising; mentions GPC/Do-Not-Track and "sold". |
| Non-discrimination (NY/NJ) | PDF | file path 2024-08 | ~630 | Contains OCR phone and portal. |
| SMS Terms of Use | PDF | file 2025-03 | ~900 | Opt-out, consent. |
| No Surprises Act notice | PDF | file 2022-05 | ~1,140 | Stale-looking. |
| Good Faith Estimate notice | PDF | file 2022-03 | ~360 | |
| Insurance & pricing | HTML | "Updated on June 05, 2023" | ~2,640 | |

## Flaws / risks
1. PDF-only policy set: not mobile friendly, harder for screen readers, no on-page headings or anchors, and no HTML versions to search or cite.
2. Stale items: NSA notice (May 2022), GFE (Mar 2022), insurance page (2023).
3. Date inconsistency between folder dates, file names and on-document dates (Digital Privacy: Aug 2025 inside a 2026-02 folder).
4. Separate NJ and NY NPPs: right idea for multi-state, but 7.4k words each.
5. No accessibility statement in the footer.
6. Heavy: roughly a dozen separate legal PDFs in the footer; findability is by footer scan only.

## What to borrow
- Dedicated SMS Terms document; separate Digital Privacy Policy vs NPP; Good Faith Estimate and NSA notices linked from the footer (the only NY-adjacent site to do so). Do these as HTML, not PDF.
