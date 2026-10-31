# U04. Audience, positioning and brand

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module answers who the site is for, what those people need to do and fear, what they would do instead, why they should choose this business, and how the business sounds and tells its story. It runs after discovery (see U02) and goals (see U03) and before page sets (see U06), copy (see U07) and design direction (see U09). Its output is the brief that the client approves at sign-off S1; every later artifact cites it.

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U04.1 | The brief names each primary audience as a segment defined by situation and need (who they are, what triggers the visit, what they must decide), backed by at least one research input collected for this client (interview, support or sales log, search queries, analytics); "everyone" or a demographic-only line fails review. | universal | A | [source: https://www.gov.uk/service-manual/service-standard, A, 2019]; [source: https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works, A, 2026] | R |
| U04.2 | A persona is used only if it is built from research data for this client and states its data source; an invented persona never drives a decision, and a persona never replaces testing with real users. | universal | B | [source: https://www.nngroup.com/articles/persona/, B, 2025, opened 2026-10-30] | R |
| U04.3 | The brief ranks each audience's top tasks from evidence (search terms, most-visited pages, support questions, interviews), and every top task maps to a page or section in the sitemap (see U06); a top task with no destination blocks sign-off S2. | universal | B | [source: https://smashingmagazine.com/2022/05/top-tasks-focus-what-matters-must-defocus-what-doesnt/, B, 2022, opened 2026-10-30] | G |
| U04.4 | Where the client has enough existing visitors or customers to survey, a top-tasks survey shows one randomly ordered list of 50-80 tasks, each respondent picks at most five, and results are read only after at least 100 responses (400 or more for reliable ranking). | universal | B | [source: https://smashingmagazine.com/2022/05/top-tasks-focus-what-matters-must-defocus-what-doesnt/, B, 2022, opened 2026-10-30] | G |
| U04.5 | The brief lists the questions and objections buyers raise before acting, each with where it was heard and the page section that answers it; an objection with no answering section is either answered or logged as an open question, never silently dropped (old study, 2016: use the direction, not a figure). | universal | B | [source: https://www.nngroup.com/articles/trustworthy-design/, B, 2016]; [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U04.6 | The brief lists the competitive alternatives: what customers would do if this business did not exist, including doing nothing, doing it themselves, a generalist and a direct competitor type; a brief with no alternatives cannot state a differentiator. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U04.7 | Each differentiator is a concrete attribute the alternatives lack, paired with the value it gives the customer and a proof item in the record (see U05); a differentiator with no proof is dropped or logged as proof to obtain, and generic lines such as "quality service" or "modern and clean" fail. | universal | B | [source: vault/wiki/knowledge/course-design-method.md, C, 2026]; [source: https://developers.google.com/search/docs/fundamentals/creating-helpful-content, A, 2026] | R |
| U04.8 | The positioning statement fills five slots: target segment, need, market category, key value, and the alternative it beats with the proof behind it; every slot comes from U04.1-U04.7 and none is left generic. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U04.9 | Voice is written as three to five "we are / we are not" pairs, each with one example sentence, plus words to use and words to avoid; voice stays constant while tone changes by context (error, confirmation, legal text, celebration). | universal | B | [source: https://styleguide.mailchimp.com/voice-and-tone/, B, 2023, opened 2026-10-30]; [source: vault/wiki/knowledge/content-and-ai-quality.md, C, 2026] | G |
| U04.10 | The narrative (origin, why now, the people customers meet) uses only facts in the record with provenance and consent; no invented founders, years, milestones or staff, and no AI-generated people presented as real. | universal | A | [source: https://developers.google.com/search/docs/fundamentals/creating-helpful-content, A, 2026]; [source: vault/wiki/compliance/red-lines.md, C, 2026] | R |
| U04.11 | When an answer is generic ("everyone", "modern and clean"), the interviewer asks for one concrete example or number and records the answer with its provenance; an unanswered field stays null and is not rendered or hedged. | universal | C | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026]; [source: vault/wiki/knowledge/course-design-method.md, C, 2026] | R |
| U04.12 | Depth scales with the engagement: a small or one-page site uses the short questionnaire path, and the full multi-session brand discovery runs only when brand work is in the signed scope (see U01). | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U04.13 | With several decision-makers, each is interviewed separately before a joint session; conflicts are recorded as tensions with options, and one named approver signs S1. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U04.14 | Existing identity elements (logo, colors, fonts, brand guide) are recorded as locked or "moving away from" before concept work; for a redesign they are taken from the current site first (see U09). | universal | C | [source: vault/wiki/knowledge/course-design-method.md, C, 2026]; [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U04.15 | Superlative or comparative brand claims ("best", "number one", "only") appear only with proof in the record and reviewer sign-off; in regulated client types counsel reviews them first (see U20) (old study, 2016: use the direction, not a figure). | universal | B | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026]; [source: https://www.nngroup.com/articles/trustworthy-design/, B, 2016] | R |
| U04.16 | Every page spec and design direction cites the brief section it implements; an artifact with no citation fails review. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |

## Anti-patterns
- The audience is "homeowners" or "small businesses". Nothing can be prioritized, so every page tries to speak to everyone. Fix: segment by situation and decision (U04.1).
- A persona with a stock photo, a name and hobbies, written in a workshop with no data. It looks like research and steers decisions on guesswork. Fix: build from data or drop it (U04.2).
- Differentiators copied from competitor sites ("trusted", "family values", "passion for quality"). They differentiate nothing. Fix: alternatives first, then attributes with proof (U04.6, U04.7).
- Voice written as adjectives only ("friendly, professional"). Writers cannot apply it. Fix: paired traits with example sentences (U04.9).
- A founder story padded with invented dates or a made-up team to feel authentic. It breaks the red lines and trust. Fix: record facts only (U04.10).
- A full brand workshop sold into a small brochure site, eating the budget before any page exists. Fix: scale depth (U04.12).

## Checklist
- [ ] Each primary audience is a situation-based segment with a named research input (U04.1).
- [ ] Every persona in use states its data source (U04.2).
- [ ] Top tasks are ranked with evidence and each maps to a sitemap page or section (U04.3, U04.4).
- [ ] Objections list has a source and an answering section for each row (U04.5).
- [ ] Competitive alternatives are listed; each differentiator has value and a proof item (U04.6, U04.7).
- [ ] Positioning statement has all five slots filled from the brief (U04.8).
- [ ] Voice pairs have example sentences and a word list (U04.9).
- [ ] Narrative facts all trace to the record with consent (U04.10).
- [ ] Generic answers were probed; null fields are null (U04.11).
- [ ] Discovery depth matches the signed scope (U04.12).
- [ ] One named approver signed S1; tensions are logged (U04.13).
- [ ] Identity elements are marked locked or moving away from (U04.14).
- [ ] Every superlative has proof and sign-off, with counsel for regulated types (U04.15).
- [ ] Page specs and directions cite the brief (U04.16).

## How an AI builder uses this
The builder reads the client record (`audience`, `positioning`, `voice`, `story`, `proof`, `brand_assets`), the discovery notes from U02 and the goals from U03, then merges the vertical overlay's trust signals and audience notes. It runs the interview one question at a time, probes vague answers, and writes the brief plus the matching record fields with provenance. It produces the audience and top-task table, the objections table, the alternatives and differentiator table, the positioning statement and the voice pairs. It must refuse to invent personas, differentiators, origin stories, people, numbers or testimonials, to fill a null field with a plausible guess, or to start sitemap, copy or design work before S1 is signed.

## Open questions
- Owner: the engagement size above which the full multi-session brand discovery is offered (R14 open decision on brand-discovery depth).
- Evidence: the positioning components are taken from secondary summaries of a positioning book; the book itself was not read in this session.
- Owner: whether a top-tasks survey is ever worth running for small local clients, given the response counts in U04.4.
- V13 (unverified, from tutorial 86HM0RUWhCk): keep brand assets in one named folder referenced by the project rules file.
- V14 (unverified, from tutorial GQdmqxY1RaI): save the interview result as a brand-kit document that every later prompt cites.
- counsel: which comparative claims each regulated overlay forbids outright, not only requires proof for.
