# U07. Content, copy and voice

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module answers what each page must say and how: the job of each page, the message hierarchy, voice and tone, reading level, claims rules, the human-edit rule, banned phrases, and the honesty rules that keep copy free of dark patterns. It runs after the brief (see U04), the proof library (see U05) and the site plan (see U06), and its output is approved at sign-off S4 before build QA (see U23). Translation is handled in U22; legal page text in U20. Legal points are pointers for counsel, written as of 2026-10-30, counsel review needed.

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U07.1 | Every page spec states the page's job before drafting: its audience, the top task it answers (see U04), the one action it serves (see U03), the proof items it uses (see U05) and its owner; a page without a filled spec is not drafted. | universal | C | [source: playbook/kit/content-request.md, C, 2026]; [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U07.2 | The H1 names the visitor's need or the offer in plain words, never a brand slogan, and the business name sits in the header; a short brand line may sit under the H1 but never replaces it. | universal | C | [source: DR:A4, C, 2026] | R |
| U07.3 | Put the most important information first and taper into detail; headings are descriptive and front-loaded, and generic headings such as "Introduction" or "Welcome" are not used. | universal | A | [source: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-structure/, A, 2026, opened 2026-10-30] | R |
| U07.4 | Write concisely, scannably and objectively: in the 1997 study, a concise version tested 58% more usable, a scannable one 47%, an objective one 27% and all three combined 124%; old study (1997): use its direction, not its figures, as a target. | universal | B | [source: DR:H1, B, 2026]; [source: https://www.nngroup.com/articles/how-users-read-on-the-web/, B, 1997, opened 2026-10-30] | R |
| U07.5 | Plain language by default: split any sentence over 25 words, keep paragraphs to five sentences or fewer, prefer short common words, use the active voice unless the outcome matters more than the actor, and explain a specialist term the first time it is used. | universal | A | [source: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/, A, 2026, opened 2026-10-30]; [source: https://digital.gov/guides/plain-language, A, 2026, opened 2026-10-30] | G |
| U07.6 | The brief sets a reading-level target for each audience; a readability score is computed on every draft as a signal only, a person checks hard passages, and specialist audiences keep their exact terms with a first-use explanation; no opened source sets one universal grade, so the number is the owner's choice. | universal | A | [source: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/, A, 2026, opened 2026-10-30] | G |
| U07.7 | Copy follows the voice pairs and word lists in the U04 brief; voice stays constant while tone changes by context (errors, confirmations, legal text, sensitive topics), and each context's tone is written down with one example. | universal | B | [source: https://styleguide.mailchimp.com/, B, 2023] | R |
| U07.8 | The model drafts only from record facts, interview answers and the client's own words; every claim maps to a record entry with provenance, and a fact the model added (origin story, numbers, staff, timeframes, product details) is cut. | universal | A | [source: https://developers.google.com/search/docs/fundamentals/creating-helpful-content, A, 2026, opened 2026-10-30]; [source: vault/wiki/knowledge/content-and-ai-quality.md, C, 2026] | G |
| U07.9 | Human-edit rule: no raw model draft is published or sent for approval; a person edits every draft for facts, specificity and voice, heaviest at the start of the page, and the editor's name and date are recorded per page in the content matrix. | universal | C | [source: DR:H5, C, 2026]; [source: vault/wiki/knowledge/content-and-ai-quality.md, C, 2026] | G |
| U07.10 | Banned-phrase rule: the seed list in the vault page, extended per client with the U04 "words to avoid", goes into every drafting prompt, and a search of the built pages must return no hit before S4 and again before launch. | universal | C | [source: DR:H5, C, 2026]; [source: vault/wiki/knowledge/content-and-ai-quality.md, C, 2026] | G |
| U07.11 | No hype or unbacked superlatives: availability, speed, benefit and guarantee claims appear only when a record fact or written terms back them, and a named guarantee shows its main limits next to it; guarantee wording goes to counsel. | universal | B | [source: DR:H2, B, 2026]; [source: https://www.law.cornell.edu/cfr/text/16/255.2, B, 2023, opened 2026-10-30] | R |
| U07.12 | Specific beats generic: each generic claim ("fast", "quality", "trusted") is replaced with the record's specific fact (time, step, name, number), and trust copy answers the objections documented in the U04 brief with record facts. | universal | C | [source: DR:H3, C, 2026] | R |
| U07.13 | State a fee or price plainly where it is known, and never show a "from" price the business will not honor; where the vertical or model overlay names a total-price duty, counsel confirms the wording (see U08). | universal | C | [source: DR:A6, C, 2026] | R |
| U07.14 | No fake urgency or scarcity: countdowns, "only N left", "N people are viewing" and "offer ends" lines appear only when they are true and read from live data or a fixed, real deadline; a timer that resets is never used; counsel reviews any sale or deadline claim. | universal | A | [source: https://assets.publishing.service.gov.uk/media/624c27c68fa8f527710aaf58/Online_choice_architecture_discussion_paper.pdf, A, 2022, opened 2026-10-30]; [source: https://web.archive.org/web/20251210005255/https://www.ftc.gov/reports/bringing-dark-patterns-light, A, 2022, opened 2026-10-30] | G |
| U07.15 | No confirmshaming: every decline or opt-out option is worded neutrally ("No thanks"), never as an insult or a bad decision; counsel reviews where an overlay names a related rule. | universal | A | [source: https://web.archive.org/web/20251210005255/https://www.ftc.gov/reports/bringing-dark-patterns-light, A, 2022, opened 2026-10-30] | G |
| U07.16 | No fabricated statistics, testimonials or "studies show" lines: every number, quote and research claim in copy links to a proof item or a cited source (see U05), and one with neither is cut; counsel reviews health, money and safety claims (old study, 2002: use the direction, not a figure). | universal | B | [source: https://www.law.cornell.edu/cfr/text/16/255.2, B, 2023, opened 2026-10-30]; [source: https://credibility.stanford.edu/guidelines/index.html, B, 2002, opened 2026-10-30] | G |
| U07.17 | Bylines name real people with real background; no made-up author names, AI headshots or false credentials, and AI use in content is disclosed where readers would reasonably expect it (see U20). | universal | A | [source: https://developers.google.com/search/docs/fundamentals/creating-helpful-content, A, 2026, opened 2026-10-30] | R |
| U07.18 | Page count follows real offers and real proof (see U06): no batch of generated pages that adds little for readers, and no near-duplicate pages that swap a place or keyword. | universal | A | [source: https://developers.google.com/search/docs/essentials/spam-policies, A, 2026, opened 2026-10-30] | R |
| U07.19 | Disclosures, limits and conditions sit next to the claim they qualify; project default (owner policy): same type size as body text and never only behind a link, hover or separate page; the legal disclosure rows are U20.12 to U20.14 (for us-federal clients, 16 CFR 255) and the jurisdiction overlays; counsel approves regulated disclosures. | universal | B | [source: https://www.law.cornell.edu/cfr/text/16/255.2, B, 2023, opened 2026-10-30]; [source: https://web.archive.org/web/20251210005255/https://www.ftc.gov/reports/bringing-dark-patterns-light, A, 2022, opened 2026-10-30] | R |
| U07.20 | Every page in the content matrix is approved by the named approver at S4 and the record is locked; a fact changed after S4 changes the record first, never only the page. | universal | C | [source: playbook/kit/signoff-log.md, C, 2026]; [source: playbook/kit/content-request.md, C, 2026] | G |

## Anti-patterns
- A hero H1 that is a mood line about "crafted living" and names neither the offer nor the audience. Put the need or offer in the H1 (U07.2).
- Given only a name and a city, the model writes an origin story, team bios, project stories and a reviews block. A model fills gaps with plausible fiction; supply facts or leave the section out (U07.8, see U05).
- Product copy with sensory details (origin, method, weight) the client never supplied. Specific detail persuades only when it is true; trace each to the record (U07.8, U07.12).
- A "sale ends tonight" banner whose timer restarts on reload. Remove it, or tie it to the real end date (U07.14).
- A pop-up whose decline link reads "No, I like paying more". Use a neutral decline (U07.15).
- A post-pass that strips AI-sounding phrases and is then published unread. The pass helps; the human edit is still required (U07.9, U07.10).

## Checklist
- [ ] Each page spec filled before drafting (U07.1).
- [ ] H1 names the need or offer; business name in the header (U07.2).
- [ ] Headings front-loaded and descriptive (U07.3).
- [ ] Sentence-length and paragraph-length scan run; long sentences split (U07.4, U07.5).
- [ ] Reading-level target set in the brief and checked as a signal (U07.6).
- [ ] Tone notes per context written (U07.7).
- [ ] Claims audit: each claim maps to a record entry or cited source (U07.8, U07.16).
- [ ] Editor name and date recorded per page (U07.9).
- [ ] Banned-phrase search clean on built pages (U07.10).
- [ ] Guarantee, sale and urgency claims backed and counsel-reviewed (U07.11, U07.14).
- [ ] Generic claims replaced with specifics (U07.12).
- [ ] Prices stated plainly; no unhonored "from" price (U07.13).
- [ ] Decline options neutral (U07.15).
- [ ] Bylines real; AI disclosure planned where expected (U07.17).
- [ ] No thin or near-duplicate generated pages (U07.18).
- [ ] Disclosures placed next to their claims (U07.19).
- [ ] S4 approval recorded and record locked (U07.20).

## How an AI builder uses this
The builder reads the U04 brief (voice pairs, objections, words to avoid), the U05 proof library, the U06 page specs and `playbook/kit/content-request.md` answers, and drafts copy page by page only from those inputs. It then runs the claims audit (each claim linked to a record entry), the banned-phrase search, a sentence-length and readability scan, and a dark-pattern scan for countdowns, stock and viewer counts, and decline wording, and hands the draft to a named human editor. It must refuse to invent facts, numbers, people, reviews or research claims; to publish or send for approval an unedited draft; to add urgency or scarcity that is not true; and to word a decline option as shaming. It merges the vertical overlay's claims rows and tone notes and the jurisdiction overlays' disclosure rows, flagged for counsel (see U20).

## Open questions
- counsel: whether a "from" price or a partial price breaks a total-price duty for this client's model or jurisdiction (see U08).
- counsel: the FTC dark-patterns staff report and the CMA discussion paper are guidance and research, not rules; which binding rule applies to a given pattern depends on the jurisdiction overlays.
- Evidence: ftc.gov pages open in a browser fetch but return 404 to the URL checker; the FTC report was read 2026-10-30 (PDF text, appendix table); do not downgrade rows citing it for that reason alone; counsel confirms its current status.
- Evidence: the NN/g reading study dates from 1997; GOV.UK cites NN/g research that most people read only part of a page, but that figure was not checked at its source.
- V23 (unverified, from tutorial 83geKREHQY0): an outcome-led headline works only if the offer and audience or place stay in the H1 or the line under it.
- V25 (unverified, from tutorial VMvZuhcDdnw): specific sensory detail reads as expert; every such detail must come from the client.
- V26 (unverified, from tutorial G-F5Qvy-7KM): run a phrase-stripping post-pass, then a human edit.
- V27 (unverified, from tutorial v1Gwa1KyUaI): when the model summarizes an existing page, a person checks what it kept and dropped.
