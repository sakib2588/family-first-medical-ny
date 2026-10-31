# U03. Goals, success metrics, measurement plan

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module fixes the one action the site exists to produce, the secondary actions, and a measurement plan in which every KPI has a baseline, a target, a date and a data source. It runs during intake (see U02), is signed off with the brief at S1, and feeds the page specs (see U06, U08) and the event map built in U19.

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U03.1 | `goals.primary` names exactly one visitor action (for example book, call, buy, donate, request a demo, apply, reserve), written as a verb plus its object; a list or a vague aim ("engagement", "awareness") fails. | universal | A | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] [source: https://www.gov.uk/service-manual/service-standard, A, 2019] | G |
| U03.2 | Secondary actions are listed separately in `goals.secondary`, and no secondary action is given equal visual weight to the primary on the same screen (see U08, U10). | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U03.3 | Each goal is mapped to at least one signal (the user behavior that shows progress) and one metric (how that signal is counted), following the goals-signals-metrics method (old study, 2010: use the direction, not a figure). | universal | B | [source: https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/, B, 2010] | R |
| U03.4 | Every KPI in `goals.kpis` has five filled fields, named as in `site.yaml`: `metric`, `baseline`, `target`, `target_date` and `source` (with `baseline_is_guess` set); a KPI missing any field is not reported. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U03.5 | A baseline the client guessed is marked `baseline_is_guess: true` in `goals.kpis` and labeled "estimate" in every report; a new site with no history records its baseline as null and sets its target only after the first full reporting period after launch. | universal | C | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] [source: vault/wiki/compliance/unverified-claims.md, C, 2026] | G |
| U03.6 | Targets come from the client's own baseline and capacity, not from published industry averages; vendor conversion benchmarks with undisclosed samples are never used as a target or quoted to the client as a norm. | universal | C | [source: vault/wiki/compliance/unverified-claims.md, C, 2026] | R |
| U03.7 | Targets are written as goals, never as guarantees, and no KPI promises a ranking position, traffic, leads or revenue (see U01); Google backs the ranking part only, the rest is owner policy. | universal | B | [source: https://developers.google.com/search/docs/fundamentals/do-i-need-seo, A, 2026, opened 2026-10-30] [source: vault/wiki/compliance/red-lines.md, C, 2026] | R |
| U03.8 | Every page spec names the action it serves (the primary or one secondary); a page that serves no listed action is cut or justified in the decisions log. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U03.9 | Each conversion action has one named event in the measurement plan, defined before build, with its trigger (the confirmed success, not the button click) and the KPI it feeds; implementation and the fire-once test are in U19. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U03.10 | When the analytics tool is GA4, the primary conversion event is marked as a key event; secondary events are marked only when a KPI uses them. | universal | A | [source: https://support.google.com/analytics/answer/13128484, A, 2026, opened 2026-10-30] [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U03.11 | A conversion that completes off the site (phone call, walk-in, offline sale, third-party booking widget) names its counting method and its source system (call log, CRM, booking platform report) in the plan; one with no counting method is reported as unmeasured, not estimated. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U03.12 | Every KPI's data source is accessible to the builder by invitation and confirmed at gate K0; a KPI whose source nobody can open is removed. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U03.13 | A KPI read from an analytics tool that runs only after consent is labeled partial in reports, because visitors who decline are not counted; the consent setup itself is decided in U19 and U20 with counsel. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U03.14 | Page views, sessions and time on page are reported only as signals tied to a named goal, never as the success measure on their own (old study, 2010: use the direction, not a figure). | universal | B | [source: https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/, B, 2010] | R |
| U03.15 | The plan sets a review cadence (the post-launch checks at T+7, T+30 and T+90, then a regular report built from data), and each review records what will change as a result; the T+7, T+30 and T+90 points are owner policy (the USDS playbook backs frequent, data-informed review, not these dates). | universal | B | [source: https://playbook.usds.gov/, A, 2014, opened 2026-10-30] [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | R |
| U03.16 | The goals, KPIs and measurement plan are approved by the named client approver at sign-off S1, and a later change to the primary conversion is a change request (see U01). | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |

## Anti-patterns
- "Get more leads" as the goal with no baseline, number or date; nobody can say later whether the site worked (U03.4).
- Three equal buttons in the hero because the client wants every action; the visitor picks none (U03.1, U03.2).
- Copying an industry "average conversion rate" from a vendor blog into the target; the sample is unknown (U03.6).
- Counting a click on "Submit" as a lead when the form failed; count the confirmed success (U03.9).
- Reporting traffic growth as success while bookings stayed flat (U03.14).
- A phone-led business measured only by form fills; the main channel stays invisible (U03.11).

## Checklist
- [ ] One primary conversion, verb plus object (U03.1).
- [ ] Secondary actions listed and visually subordinate (U03.2).
- [ ] Each goal has a signal and a metric (U03.3).
- [ ] Each KPI has metric, baseline, target, date, source; guesses labeled `estimate` (U03.4, U03.5).
- [ ] Targets based on the client's baseline, no vendor benchmarks, no guarantees (U03.6, U03.7).
- [ ] Every page spec names its action (U03.8).
- [ ] One event per conversion, triggered on confirmed success; key event marked where GA4 is used (U03.9, U03.10).
- [ ] Off-site conversions have a counting method (U03.11).
- [ ] Data sources accessible and confirmed at K0 (U03.12).
- [ ] Consent-gated KPIs labeled partial (U03.13).
- [ ] Review cadence set; plan signed at S1 (U03.15, U03.16).

## How an AI builder uses this
Inputs: the intake answers on goals in `site.yaml`, the selected vertical and model overlays (which name the usual primary conversion for that client type, see U00), and the access matrix. The builder writes `goals.primary`, `goals.secondary` and `goals.kpis`, a goals-signals-metrics table, and the draft event list handed to U19; it tags each page spec in U06 with its action. It must refuse to invent a baseline, to set a target from an industry average, to word a target as a promise, and to report a KPI whose source it cannot open. Where the primary conversion from the overlay and from the client differ, the client's answer is recorded and the difference is logged.

## Open questions
- Whether the default analytics stack is cookieless for every client, which changes U03.13 (owner, counsel).
- The length of the reporting period used to set a first baseline on new sites (owner).
- V11 (unverified, from tutorial dYUL9-m6U1o): the client's stated priorities, such as fast loading or bookings, veto visual effects that do not serve the goal.
