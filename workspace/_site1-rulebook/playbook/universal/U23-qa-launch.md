# U23. QA and launch

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module answers how a finished build is tested, how it goes live, how it is rolled back, and what is checked after launch. It covers sign-offs S5 (staging QA) and S6 (launch) in `playbook/kit/signoff-log.md`, and it feeds the post-launch section of `playbook/kit/handoff-pack.md` before handoff (see U24). It checks the rules of earlier modules; it does not restate them.

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U23.1 | A QA matrix runs on staging with one section each for content, function, accessibility, performance, SEO, legal and cross-device; every row records check, method or tool, result, tester and date, and S5 is signed only when each row passes or is a dated known defect with an owner. | universal | C | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026]; [source: playbook/kit/signoff-log.md, C, 2026] | G |
| U23.2 | The tester is not the builder: a different person signs the matrix first, then the client approver; a builder's self-review, or a review by the same model session that built the page, counts only as a pre-check. | universal | C | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026]; [source: vault/wiki/knowledge/pre-launch-checklist.md, C, 2026] | G |
| U23.3 | Before any design review, confirm the page loads on the staging URL with no console errors and every imported file exists; in a 2025 benchmark of generated sites, failure to launch or to adapt the template caused more than half of task errors. | universal | B | [source: vault/wiki/knowledge/webgen-bench-notes.md, B, 2025] | G |
| U23.4 | Content: a scan of the built HTML finds no placeholder, template token, lorem text or "Sample" label; the banned-phrase search is clean; name, contact details, hours and offer are identical on every page and match the record; and a spelling and broken-link pass is clean (old study, 2002: use the direction, not a figure). | universal | B | [source: vault/wiki/knowledge/pre-launch-checklist.md, C, 2026]; [source: https://credibility.stanford.edu/guidelines/index.html, B, 2002, opened 2026-10-30] | G |
| U23.5 | Function: tests are written as one action plus one expected result, cover every requirement in the brief and nothing outside it, and include each conversion path end to end (both destinations, confirmation, forced failure) (see U08). | universal | B | [source: vault/wiki/knowledge/webgen-bench-notes.md, B, 2025] | G |
| U23.6 | Accessibility: automated checks show no critical or serious issue, then a keyboard-only and a screen-reader pass cover navigation, forms and every action, and results are recorded in WCAG-EM order (scope, explore, sample, evaluate, report) (see U16). | universal | A | [source: https://www.w3.org/WAI/test-evaluate/conformance/wcag-em/, A, 2014] | G |
| U23.7 | Performance: gate on the median of five Lighthouse mobile runs at fixed throttling, against the U17 budgets, and re-measure after every change before claiming a baseline; the median of five runs is about twice as stable as one. | universal | A | [source: DR:I5, B, 2026]; [source: https://developers.google.com/web/tools/lighthouse/variability, A, 2024, opened 2026-10-30] | G |
| U23.8 | After launch, field data is checked at p75 against the Core Web Vitals limits (LCP 2.5 s, INP 200 ms, CLS 0.1) once enough traffic exists; lab scores alone are not reported as real-user speed. | universal | A | [source: https://web.dev/articles/vitals, A, 2024] | G |
| U23.9 | Cross-device: test the latest stable Chrome, Edge, Firefox, Samsung Internet and Safari, add any browser the client's analytics show in use, and run the phone checks on at least one real iOS and one real Android phone; resizing a window or a builder's device preview is not a device pass. | universal | B | [source: https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices, A, 2026, opened 2026-10-30]; [source: vault/wiki/knowledge/pre-launch-checklist.md, C, 2026] | G |
| U23.10 | SEO: each page has a unique title and description, one H1 and a self-referencing canonical; the sitemap holds the expected page count; staging `noindex` and crawl blocks are removed; structured data validates; the not-found page returns a real 404 (see U18). | universal | A | [source: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes, A, 2026, opened 2026-10-30] | G |
| U23.11 | Redirects: after cutover every old URL in the U06 redirect map is requested and checked against U06.12 and U06.13 (see U06, which owns hops and duration); a failure blocks S6 sign-off. | universal | A | [source: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes, A, 2026, opened 2026-10-30] | G |
| U23.12 | Indexing: at go-live submit the new sitemap and remove the old one, file a Change of Address only for a domain or subdomain move, and watch index and traffic reports, expecting a few weeks for a small or medium site to move. | universal | A | [source: https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes, A, 2026, opened 2026-10-30] | G |
| U23.13 | Legal: launch is blocked until every "must" row in the client's compliance checklist carries a counsel sign-off, required pages are live and linked, and the consent gate is checked in a clean browser (see U20). | universal | C | [source: playbook/universal/U20-legal-privacy.md, C, 2026] | G |
| U23.14 | Security and wiring: no secret is in the repository or build output, forms post to production endpoints and not test webhooks, and the header scan from U21 has run. | universal | C | [source: vault/wiki/knowledge/pre-launch-checklist.md, C, 2026] | G |
| U23.15 | Run the U19.3 fire-once check on staging for every key event, including a confirmation-page reload (see U19). | universal | C | [source: playbook/universal/U19-analytics.md, C, 2026] | G |
| U23.16 | Changes reach production only from staging or a preview build, after S5 and on the named approver's go-ahead; nobody edits the live site directly. | universal | C | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026]; [source: playbook/kit/signoff-log.md, C, 2026] | G |
| U23.17 | The launch card, signed at S6, lists the date and window, owners, and steps: DNS TTL lowered in advance, DNS zone exported, email records kept (U23.21), backup taken, deploy, live smoke test of every conversion path, redirect test, sitemap submission and listing updates. | universal | C | [source: vault/wiki/knowledge/pre-launch-checklist.md, C, 2026]; [source: playbook/kit/signoff-log.md, C, 2026] | G |
| U23.18 | A rollback plan is written and rehearsed on staging before S6: the trigger conditions (for example conversion path down, site unreachable, wrong domain indexed), the owner, the steps to restore the previous build and DNS, and who tells the client. | universal | C | [source: vault/wiki/knowledge/pre-launch-checklist.md, C, 2026]; [source: playbook/kit/signoff-log.md, C, 2026] | G |
| U23.19 | Post-launch checks at T+7, T+30 and T+90 are scheduled at S6 with an owner and date; their items, timing and the S7 hand-in follow U24.14 (see U24), which owns them. | universal | C | [source: playbook/kit/handoff-pack.md, C, 2026] | G |
| U23.20 | A model-graded appearance score compares versions of one page only; it is never a pass mark, never quoted to the client, and never replaces the matrix. | universal | B | [source: vault/wiki/knowledge/webgen-bench-notes.md, B, 2025] | R |
| U23.21 | On a cutover that changes the DNS host or zone, the MX, SPF, DKIM, DMARC and verification TXT records are copied to the new zone before the switch, the zone export is compared after cutover, and a test email is sent to and from the client domain (see U21.14); Google warns that old or incorrect MX records can stop email working. | universal | B | [source: https://knowledge.workspace.google.com/admin/domains/set-up-mx-records-for-google-workspace, A, 2026, opened 2026-10-30]; [source: playbook/universal/U21-security-hosting.md, B, 2026] | G |

## Anti-patterns
- "Fully responsive" claimed after looking at a builder's tablet and phone frames. Run real phones and the browser list (U23.9).
- The agent screenshots its own page, judges it and fixes it in a loop, and the loop is called QA. Useful as a pre-check; the matrix needs a different tester (U23.2).
- Re-running a scoring tool until the page hits a perfect score. Scores compare versions, nothing more (U23.20).
- Speed judged by eye on a fast laptop. Use the median of five mobile runs (U23.7).
- Staging `noindex` left in production, or every old URL sent to the home page. Check both at cutover (U23.10, U23.11).
- Live edits pushed with no staging step, then no way back. Stage first and write the rollback before launch (U23.16, U23.18).

## Checklist
- [ ] QA matrix complete for all seven areas (U23.1).
- [ ] Tester named, not the builder; client signed after (U23.2).
- [ ] Load check and file check pass (U23.3).
- [ ] Content scan clean (U23.4).
- [ ] Function tests pass for every path (U23.5).
- [ ] Accessibility results recorded (U23.6).
- [ ] Median-of-five Lighthouse gate passes (U23.7).
- [ ] Field data check booked for T+30 (U23.8).
- [ ] Browser list and real phones tested (U23.9).
- [ ] SEO checks pass (U23.10).
- [ ] Redirect map tested after cutover (U23.11).
- [ ] Sitemap submitted; index watch set (U23.12).
- [ ] Counsel sign-offs on all "must" rows; counsel review needed (U23.13).
- [ ] No secrets; production endpoints; headers scanned (U23.14).
- [ ] Events fire once (U23.15).
- [ ] Staging-first rule followed (U23.16).
- [ ] Launch card signed at S6 (U23.17).
- [ ] Rollback written and rehearsed (U23.18).
- [ ] T+7, T+30 and T+90 owners and dates set (U23.19).

## How an AI builder uses this
The builder reads the brief and page specs, the U08 test cases, the U19 event map, the U06 redirect map, the U17 budgets and the client compliance checklist from U20. It generates the QA matrix and the automated parts (load and file check, placeholder and banned-phrase scan, link test, Lighthouse median runs, accessibility scan, redirect and SEO checks), writes the launch card and rollback plan, and fills the S5 and S6 entries in `playbook/kit/signoff-log.md` for people to sign. It must refuse to sign S5 as tester for its own build, to push to production without S5 and the approver's go-ahead, to report a single Lighthouse run or a device preview as a pass, and to launch with an open "must" legal row; counsel review needed. It merges each overlay's common mistakes into the matrix as extra rows.

## Open questions
- Owner: whether a separate agent session with a fresh context may serve as the tester for small sites, or a person is always required; for a solo freelancer, U23.2 has no second person: options are a paid second reviewer per launch, or the client approver as tester working from a written script (no A or B source found).
- Owner: content and media migration on a redesign beyond URLs and redirects (old form endpoints, media library, user accounts, analytics continuity); a migration runbook is an owner decision.
- Owner: uptime monitoring is set in U24.16; who pays for and owns the monitor account.
- Owner: minimum traffic before field performance data is read at T+30.
- V175 (unverified, from tutorial 5QM78yqpONI): judge the result as a working page with motion and phones, not one desktop view.
- V180 (unverified, from tutorial 86HM0RUWhCk): an agent screenshot loop over at least two passes; V182 says to turn it off for animated elements.
- V183 (unverified, from tutorial 86HM0RUWhCk): a rules-file line to test locally and push only when told.
- V188 (unverified, from tutorial AiewbroXV8c): replace every placeholder before publishing; U23.4 covers it.
- V191 (unverified, from tutorial VMvZuhcDdnw): upload the build output, with the home page at the top level of the archive.
- V203 (unverified, from tutorial Ysr7oNDajJI): compare before and after in version control to catch regressions.
- V205 (unverified, from tutorial drHar9V62LE): register and verify the domain early in the runbook.
