# U02. Discovery and intake

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module sets what must be learned about the business, its users, its constraints and its current site before any planning or design, how answers enter the client record, and when to stop or decline. It runs between the signed scope (see U01) and kickoff gate K0. The questions themselves live in `playbook/kit/intake-questionnaire.md` and the gate in `playbook/kit/kickoff-checklist.md`; this module states the rules those files serve.

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U02.1 | Discovery records, before planning: who the users are, what they are trying to do, how they do it today, the constraints and which of them are fixed, how success will be measured, and what the current problem costs the business. | universal | A | [source: https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works, A, 2026, opened 2026-10-30] | R |
| U02.2 | No design concepts, page layouts or code are produced during discovery; design work starts only after every blocking item of gate K0 is ticked. | universal | A | [source: https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works, A, 2026, opened 2026-10-30] [source: playbook/kit/kickoff-checklist.md, B, 2026] | G |
| U02.3 | A solution the client arrives with ("we need an app", "copy this site") is written down as the problem it is meant to solve, and the problem, not the solution, enters the record. | universal | A | [source: https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works, A, 2026, opened 2026-10-30] | R |
| U02.4 | The pre-call screen is run alone from public sources before the first call, and each fact found is written to `site.yaml` as `status: draft` with its source and date. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U02.5 | Any "yes" on the stop list in the intake questionnaire halts the process until resolved, and the flag and outcome are written in the decisions log; a red-line request that stays a condition ends the engagement. | universal | B | [source: playbook/kit/intake-questionnaire.md, B, 2026] [source: vault/wiki/compliance/red-lines.md, C, 2026] | R |
| U02.6 | Facts are collected through the written questionnaire; meaning (purpose, audience, voice) is collected in a live interview, one question at a time, with a restatement and one follow-up before the next topic. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U02.7 | A generic answer ("modern and clean", "everyone", "great service") is not recorded until the client gives one concrete example, customer story or number for it. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U02.8 | Every recorded answer carries provenance (source, who gave it, channel, date, who verified it); a question with no answer stays `null` and is never filled with a guess. | universal | C | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] [source: vault/wiki/knowledge/lead-site-playbook.md, C, 2026] | G |
| U02.9 | Intake depth follows engagement size (short path for small sites, full path for brand-plus-site or large redesigns), but the primary conversion, the legal triggers and the decision makers are asked on every path. | universal | B | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] [source: playbook/kit/intake-questionnaire.md, B, 2026] | G |
| U02.10 | Users' accessibility needs, language needs and device and connection constraints are asked and recorded under `audience`, and feed U16 and U22. | universal | A | [source: https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works, A, 2026, opened 2026-10-30] | R |
| U02.11 | Compliance triggers (licensed profession, health data, children, visitors in California or the EU or UK, subscriptions or auto-renewal, financing, earnings or health claims, payments) are recorded in `legal.triggers`, select overlays per U00, and each one becomes a counsel item. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U02.12 | Every offer listed in the record is confirmed by the client as something it sells today; offers seen on an old site or a listing are not carried over unconfirmed. | universal | B | [source: playbook/kit/kickoff-checklist.md, B, 2026] [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U02.13 | The proof inventory starts at intake: each review, case study, credential, award, press item, photo and data claim is listed with its source and permission status, and the plan uses only proof that exists today (see U05). | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U02.14 | For a redesign, the current site is inventoried (pages, traffic where available, what works, what fails) and every existing URL is listed before the new sitemap is drafted (see U06). | universal | A | [source: https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works, A, 2026, opened 2026-10-30] [source: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes, A, 2026, opened 2026-10-30] | R |
| U02.15 | Access to registrar, DNS, hosting, analytics, Search Console, business listings and platforms is verified by logging in through an invitation before K0; "I will send it later" fails the gate. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U02.16 | When several owners or partners decide, each is interviewed alone first, then agreements and tensions are listed and resolved by the named tie-breaker (see U01). | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U02.17 | Discovery ends with a stop-or-go decision: the project stops or shrinks when no site would improve the users' outcome, the likely gain does not justify the cost, or a fixed constraint blocks a real improvement; the reason is logged. | universal | A | [source: https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works, A, 2026, opened 2026-10-30] | R |

## Anti-patterns
- Sending a long questionnaire and treating the returned checklist answers as the brand brief; meaning needs the live interview (U02.6).
- Recording "our customers are everyone"; the audience block then drives generic copy (U02.7).
- Letting the model fill unanswered fields from the old site or from a guess (U02.8, U02.12).
- Starting mood boards in the first call because the client is eager (U02.2).
- Skipping the legal-trigger questions on a "simple" site; a booking widget or a children's audience changes the overlays (U02.9, U02.11).
- Rebuilding a site without listing its old URLs; search traffic is lost at launch (U02.14).

## Checklist
- [ ] Discovery notes cover users, tasks, current journey, constraints, success measure and cost of the problem (U02.1).
- [ ] No design or code before K0 (U02.2).
- [ ] Client's proposed solution restated as a problem (U02.3).
- [ ] Pre-call screen facts in `site.yaml` as draft with source and date (U02.4).
- [ ] Stop list run; flags logged (U02.5).
- [ ] Questionnaire returned; live interview held at the depth the engagement needs (U02.6, U02.9).
- [ ] No generic answers recorded; every answer has provenance; gaps are null (U02.7, U02.8).
- [ ] Accessibility and language needs recorded (U02.10).
- [ ] Compliance triggers recorded and sent to the counsel list (U02.11).
- [ ] Offers confirmed; proof inventory started (U02.12, U02.13).
- [ ] Redesign: inventory and old-URL list done (U02.14).
- [ ] Access verified by login (U02.15).
- [ ] Stakeholders interviewed separately where several decide (U02.16).
- [ ] Stop-or-go decision logged (U02.17).

## How an AI builder uses this
Inputs: the signed scope (see U01), `playbook/kit/intake-questionnaire.md` for the questions and stop list, `playbook/kit/kickoff-checklist.md` for gate K0, and `playbook/kit/asset-and-proof-request.md` for proof collection. The builder runs the pre-call screen, sends the questionnaire, prepares one-question-at-a-time interview prompts, and writes each answer into `site.yaml` with provenance. It produces the draft record, the decisions-log entries for stop flags and overlay selection (see U00), the counsel list seed (see U20) and the stop-or-go note. It must refuse to fill a null field, to invent an audience or offer, to begin design before K0, and to continue past a stop flag without the owner.

## Open questions
- The project-size threshold at which the full multi-session brand interview is required (owner).
- Whether discovery is always sold as a separate paid phase or folded into small builds (owner).
- V7 (unverified, from tutorial dYUL9-m6U1o): a requirements document separating needs, nice-to-haves, design preferences and goals before design.
- V8 (unverified, from tutorial dYUL9-m6U1o): a written audit of what fails on the current site; partly covered by U02.14.
- V9 (unverified, from tutorial dYUL9-m6U1o): collect a small set of category reference sites from the client as direction, not to copy.
