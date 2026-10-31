# U19. Analytics, attribution and experiments

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module answers how we measure whether the site does its job: which events fire for each conversion pattern, how measurement respects consent, how sources are attributed, how results are reported and reviewed, and when an A/B test can give a valid answer. It implements the goals and KPIs from U03, takes its consent posture from U20, and feeds the launch checks in U23.

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U19.1 | An event map exists before build: one row per step of each conversion pattern with event name, trigger, parameters, key event or not, consent category, where it fires and owner; each U03 goal maps to at least one signal and metric in it (old study, 2010: use the direction, not a figure). | universal | B | [source: https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/, B, 2010]; [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U19.2 | The conversion event fires on the success state, not the attempt: a confirmed booking, a form accepted by the server, a purchase with its transaction id, a completed donation, a confirmed sign-up; a phone-link tap is logged as call intent, separate from a completed call. | universal | A | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026]; [source: https://developers.google.com/analytics/devguides/collection/ga4/ecommerce, A, 2026, opened 2026-10-30] | G |
| U19.3 | Each key event fires once per completed conversion, checked on staging in a debug view for every pattern, including a reload of the confirmation page and the back button; purchases and leads carry an id for de-duplication. | universal | A | [source: https://developers.google.com/analytics/devguides/collection/ga4/ecommerce, A, 2026, opened 2026-10-30]; [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U19.4 | Only events tied to U03 goals are marked as key events, within the platform limit (30 on a standard GA4 property), and they are marked before launch because marking is not retroactive. | universal | A | [source: https://support.google.com/analytics/answer/13128484, A, 2026, opened 2026-10-30] | G |
| U19.5 | No analytics or advertising storage is set before the visitor's consent state is known where the U20 posture requires consent; the consent banner categories map to the tag consent types (ad storage, analytics storage, ad user data, ad personalization); counsel sets the posture per jurisdiction. | universal | A | [source: https://developers.google.com/tag-platform/security/concepts/consent-mode, A, 2026, opened 2026-10-30] | G |
| U19.6 | The consent-mode choice is recorded per client: basic (tags blocked until the visitor chooses, nothing sent on decline) or advanced (cookieless pings before consent); advanced mode needs counsel approval. | universal | A | [source: https://developers.google.com/tag-platform/security/concepts/consent-mode, A, 2026, opened 2026-10-30] | R |
| U19.7 | Owner of the tag register (U17.6 points here): every third-party script or tag is listed in the register (`analytics.tools`, by `register_name`) with an owner, a purpose tied to a U03 goal, its consent category, whether it sets cookies and the pages it loads on; the event map refers to each tag by its register name; a tag missing any of these is removed (see U17). | universal | A | [source: https://almanac.httparchive.org/en/2025/privacy, A, 2025, opened 2026-10-30]; [source: https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html, B, 2026, opened 2026-10-30] | G |
| U19.8 | Advertising pixels never load on pages an overlay flags as sensitive (health conditions, appointments, patient or client portals, children's areas); this owner policy blocks launch until counsel approves any exception in writing. | universal | unverified | [source: vault/wiki/compliance/compliance-checklist.md, unverified, 2026]; [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U19.9 | Every paid, email and social link carries `utm_source`, `utm_medium` and `utm_campaign` in lowercase from one naming sheet, since values are case sensitive and inconsistent names split reports. | universal | A | [source: https://support.google.com/analytics/answer/10917952, A, 2026, opened 2026-10-30] | G |
| U19.10 | When goals.primary includes call: call tracking separates three counts: taps on the phone link, calls through a tracking number that last longer than a minimum length the owner sets, and calls imported as sales from the business's own system. | universal | A | [source: https://support.google.com/google-ads/answer/6095883, A, 2026, opened 2026-10-30] | G |
| U19.11 | When goals.primary includes call: a tracking number (from `analytics.tracking_numbers`) is shown only in the visible page or campaign; the business's real number stays in structured data and listings; call recording or transcription starts only after counsel approves the caller notice. | universal | A | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026]; [source: https://support.google.com/business/answer/3038177, A, 2026, opened 2026-10-30] | R |
| U19.12 | The client dashboard shows the primary conversion count and rate, by source and medium and by landing page, the secondary actions, and each U03 KPI against baseline and target, all read from the data source and never typed in (old study, 2010: use the direction, not a figure); the layout is owner policy, since neither source sets one. | universal | B | [source: https://playbook.usds.gov/, A, 2014, opened 2026-10-30]; [source: https://research.google/pubs/measuring-the-user-experience-on-a-large-scale-user-centered-metrics-for-web-applications/, B, 2010] | G |
| U19.13 | Reports run monthly and at the U23 post-launch checks; each names one change to make or test, with an owner and a date. | universal | A | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026]; [source: https://playbook.usds.gov/, A, 2014, opened 2026-10-30] | R |
| U19.14 | An A/B test runs only if the sample per variant, computed before start as about 16 times the metric variance divided by the squared minimum detectable change (95% confidence, 80% power), can be reached in the planned time; for a 5% conversion rate, a 5% relative change needs under 122,000 users per variant and a 20% change about 7,600. | universal | A | [source: https://exp-platform.com/Documents/controlledExperimentDMKD.pdf, A, 2009, opened 2026-10-30] | G |
| U19.15 | A test runs in whole weeks (at least one, then multiples of a week) to cover day-of-week effects, and longer when primacy or newness effects are likely, such as a navigation change. | universal | A | [source: https://exp-platform.com/Documents/controlledExperimentDMKD.pdf, A, 2009, opened 2026-10-30] | G |
| U19.16 | Each test names one overall evaluation criterion before start, tied to the U03 primary conversion, and reports the sample reached and a confidence interval; an underpowered or early-stopped test is reported as inconclusive. | universal | A | [source: https://exp-platform.com/Documents/controlledExperimentDMKD.pdf, A, 2009, opened 2026-10-30] | R |
| U19.17 | A new testing setup is trusted only after an A/A test, which at 95% confidence should show no significant difference about 95% of the time. | universal | A | [source: https://exp-platform.com/Documents/controlledExperimentDMKD.pdf, A, 2009, opened 2026-10-30] | G |
| U19.18 | When traffic cannot reach the sample, no A/B test is run; use usability or five-second tests (see U06) and before-and-after comparisons labeled as non-causal. | universal | A | [source: https://exp-platform.com/Documents/controlledExperimentDMKD.pdf, A, 2009, opened 2026-10-30] | R |

## Anti-patterns
- Counting a button click as a lead. Failed and spam submissions inflate the number. Fix: fire on the server-accepted success state (U19.2).
- A thank-you page that fires the conversion on every reload. Fix: de-duplicate by id and test reloads (U19.3).
- Tags installed by whoever had access, with no owner. Nobody knows what loads or why. Fix: tag register in the event map (U19.7).
- Mixed-case campaign names that split one campaign into several rows. Fix: one lowercase naming sheet (U19.9).
- Declaring a winner from a test on a low-traffic site after a few days. The result is noise. Fix: compute the sample first, run whole weeks, or do not test (U19.14, U19.15, U19.18).
- A dashboard with hand-typed numbers. Fix: read from the source (U19.12).

## Checklist
- [ ] Event map covers every conversion pattern and U03 goal (U19.1).
- [ ] Conversion events fire on success states; call intent is separate (U19.2).
- [ ] Staging debug test shows one event per conversion, reloads included (U19.3).
- [ ] Key events marked before launch and within the limit (U19.4).
- [ ] No storage before consent where required; consent mode choice recorded with counsel sign-off (U19.5, U19.6).
- [ ] Tag register complete; sensitive pages free of ad pixels (U19.7, U19.8).
- [ ] UTM naming sheet in use (U19.9).
- [ ] Call counts separated; tracking numbers kept out of structured data and listings (U19.10, U19.11).
- [ ] Dashboard reads from data; report cadence scheduled (U19.12, U19.13).
- [ ] Every test has a sample calculation, duration in weeks, one criterion, an A/A check for new setups, or a logged reason it was not run (U19.14 to U19.18).

## How an AI builder uses this
The builder reads the U03 goals and KPIs, the U08 conversion patterns, the U20 consent posture and the overlays' tracking restrictions. It writes the event map and tag register, implements events behind the consent state, tests every event on staging, and builds the dashboard and the monthly report template from live data. Before any experiment it writes the sample calculation and duration and declines the test if traffic cannot reach it. It must refuse to load tags without an owner and consent category, to put ad pixels on sensitive pages without counsel approval, to type numbers into a report, or to call a test result before its planned sample and duration are met.

## Open questions
- Owner and counsel: default consent posture for every client (cookieless analytics by default with ad pixels only after consent, or per client), an open decision in R14.
- counsel: which caller notice each jurisdiction needs before calls are recorded or transcribed.
- Evidence: the sensitive-page pixel rule rests on summaries of health-privacy guidance that were not read at the primary source in this session.
- Evidence: the listing guidelines behind U19.11 forbid numbers that redirect to another business's number but do not say whether a forwarding tracking number on a listing is allowed.
- Owner: which analytics platform is the default when a client has none, and who owns the property at handoff (see U24).
