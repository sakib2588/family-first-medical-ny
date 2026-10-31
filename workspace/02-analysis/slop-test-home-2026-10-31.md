# Gate 9 slop test: Home (2026-10-31)

Test: `workspace/_site1-rulebook/playbook/design-craft/site1-design-craft/slop-test.md` (15 items, adapted from `anti-slop-design-guide.md`). Pass = at least 12 of 15 yes, and items 1 to 4 all yes.
Judged on: **before** = `04-logs/home-demo/H6-phone-fold.png`, `H6-phone-full.png`, `H6-desktop-full.png` (live `main` after PR #18). **After** = the branch build at 390 and 1280 (hero, visits, footer captures; `H7-*` saved with the PR).
Why it was run: the owner asked whether the design skills were followed to avoid AI slop. Earlier rounds used the `design-system` slop-check and the `frontend-design-direction` anti-patterns, but not this gate. That was a miss.

| # | Statement (yes = pass) | Before | After | Reason / fix |
|---|---|---|---|---|
| 1 | Every review, quote, rating, number, name, date and opening time is in the facts record | no | no | Doctor names, addresses, phones and hours are demo placeholders (`practice.ts`). This cannot pass until the client sends facts. The page is a labelled draft, as the rule says. |
| 2 | No person shown is generated or stock, or presented as the client's own | no | yes | Stand-in doctor photos looked like the real doctors. Each face now carries "Sample name and photo" on screen, not only in alt text: Home hero cards, `/doctors` and each doctor page. |
| 3 | No unlabelled placeholder or dead section | yes | yes | Demo banner, "Sample list" note on services, "Sample Street" addresses, 555 numbers. |
| 4 | The 390 fold shows what, where or for whom, and exactly one filled action | yes | yes | The H1 now carries both the service and the place. One gold button; sticky bar hidden over the hero. |
| 5 | The H1 names the offer in plain words, not a slogan | no | yes | Was "One practice for your whole family." Now "Pediatrics and family medicine in Elmhurst and Hicksville" (places from `practice.ts`). |
| 6 | Section order follows the page's own argument; mostly left-aligned | yes | yes | Route by need, services, offices, insurance, questions, request. Only the doctor name cards are centred. |
| 7 | Neighbouring sections differ; no row of equal icon-heading-text cards | no | yes | "What brings you in?" had two equal icon cards. Now one ranked panel (planning a visit) plus a side note (sick today: call). |
| 8 | Two visibly different type families with clear size steps | yes | yes | Fraunces and Figtree. |
| 9 | Accent colour only on actions | no | yes | On Home: removed the aqua headline word, teal icons (checks, pins, clock, FAQ plus), teal role labels, the gold divider bars (footer and every page head) and the gold footer labels. Colour now sits on the gold and teal actions, links and the focus ring; the logo mark is brief-pinned. Inner pages still have accent on some non-actions (`/doctors` role text, location page icons); they get fixed in their own page rounds. |
| 10 | No gradient text, glow or aurora; light or dark suits the use | yes | yes | Flat colours. Two dark bands (hero, offices) on an otherwise light page. |
| 11 | No eyebrow, tracked-caps tag or fake 01/02/03 | no | yes | Removed the "PEDIATRICS AND FAMILY MEDICINE" eyebrow, the tracked-caps footer labels and the "A · B" meta string in Services ("With Dr. Mehta · Newborns to age 21" is now a plain phrase). The 1-2-3 request steps are a real sequence. The header lockup "FAMILY HEALTH" is the logo. |
| 12 | All text readable; nothing clipped at 390; still screenshot looks complete | yes | yes | Hours no longer wrap (checked at 360). |
| 13 | Radius, shadow and spacing differ by role | yes | yes | Pills = controls, 2xl/3xl = panels, arch = media; one shadow, on the name cards only. |
| 14 | One drawn icon set; no emoji | yes | yes | `Icon.astro`. |
| 15 | With the name covered, it could not be mistaken for a typical competitor | yes | yes | The arch (from the AIMSS logo) frames the faces. Indigo and gold come from AIMSS, not the competitor's navy and red. |

**Before: 9 of 15, items 1 and 2 fail: FAIL.**
**After: 14 of 15. Item 1 still fails, so the gate is not passed.** It can only pass once the client confirms names, photos, addresses, phones and hours. Until then the site stays a labelled design demo (it already is: banner, `noindex`, robots `Disallow: /`).

Code review (no CRITICAL/HIGH) caught three overstatements in this record: the "A · B" string (item 11), unlabelled faces on the doctor pages (item 2) and the teal FAQ icon (item 9). All three were fixed before the PR. Call links now read "Call an office" everywhere on Home.

Also fixed while testing: the sticky Call/Request bar was outside any landmark on inner pages (axe `region`). It is now a labelled `<aside>`.

Still open (owner or client): real photos with consent, real doctor names and credentials, and the base-site-like two-doctor hero (the owner asked for faces first; the arch and colours keep it our own).

## Round 3 (layout from the competitor teardown, branch claude/laughing-keller-b48kzx-layout), judged on `04-logs/home-demo/H8-*`

New sections were checked against every item: hero fact row, photo-led office cards, care by age, doctor credential cards, inside each office, reviews and insurance slots.

| # | Result | Note |
|---|---|---|
| 1 | no | Still waiting on client facts. Every unconfirmed fact is now a typed `Fact` slot in `practice.ts`. With `practice.demo = false`, a clean build shows 0 slots, 0 sample notes and no empty sections (tested 2026-10-31). |
| 2 | yes | Stand-in faces are labelled on screen. Office photos are named empty frames, never stock. |
| 3 | yes | Every slot says what is needed, in brackets and muted; photo frames are dashed and named. |
| 4 | yes | The fact row sits below the doctor cards. The 390 fold still shows what, where, and one gold action. |
| 5, 8, 10, 13, 14 | yes | Unchanged. |
| 6 | yes | The closing two-button band after the form is off on Home. |
| 7 | yes | Neighbours differ: cards on indigo, ranked age rows, credential cards, photo-slot row, single-column links, a two-column list. Reviews and Insurance no longer share one split. |
| 9 | yes | Code review found no accent colour on non-actions. Today's hours row uses a cream tint and weight, not accent. |
| 11 | yes | No eyebrows or tracked caps, and no "A · B" strings. The open-now no-JS text now uses "; ". |
| 12 | yes | Nothing clipped at 360 or 390; axe 0. |
| 15 | yes | The arch device, our palette and our own copy. The structure is borrowed; the layout, wording and photos are not. |

**Round 3: 14 of 15, item 1 still open (client facts).**
