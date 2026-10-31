# Anti-slop design guide

Status: draft | Updated: 2026-10-30 | Scope: universal | Readers: Claude Code and a freelancer

This guide turns what the 23 tutorial videos and the installed design skills agree on into tells, fixes, a process, prompts and a test. It adds taste to the design modules (see U09 to U14) and never overrides a red line or a playbook rule.

How the counts were made. Video counts: the ANTI-PATTERN and REJECT items in `playbook/_research/R13-parts/notes/`, plus the "Anti-patterns seen" lines in `playbook/_research/R13-parts/visual/`, were grepped for each tell's keyword stems. Each hit was read by hand and kept only if it calls the pattern a problem (a NEW or REFINES line only where it names an AI tell). Skill names come from the same grep over each `SKILL.md` and `impeccable/reference/craft-floor.md`; a skill that prescribes the pattern is listed as a conflict. Counts show frequency, not effect.

## What slop looks like

| # | tell | why it reads as AI | fix | agreement |
|---|---|---|---|---|
| 1 | Motion for its own sake: scroll-scrubbed video, cursor followers, typewriter or word-by-word headlines, marquees, film grain, shaders | Cheap to generate; the visitor does not need it | Each motion needs a stated job, and the page gets one signature moment at most (see U14). Content must work with no motion | 13 of 23 videos; named by impeccable, frontend-design. Conflict: high-end-visual-design and design-taste-frontend require motion everywhere |
| 2 | Generated or generic stock imagery standing in for the client's real work, premises or product | Glossy, placeless, slightly wrong; not theirs | Use real photos. Otherwise leave a named empty slot, or use credited archive images. Generated images must be disclosed (see U13) | 11 of 23 videos; named by design-taste-frontend, impeccable, redesign-existing-projects |
| 3 | Text over busy media, or decoration over the headline | Effects layered without a legibility check | Add a scrim measured against the brightest frame. Nothing sits on top of a headline | 9 of 23 videos; named by design-taste-frontend, landing-page-design |
| 4 | Invented testimonials, reviews, quotes, owner bios | The model fills any proof slot it is given | Use only real, dated proof. With none, drop the section (red lines; see U05) | 8 of 23 videos; named by design-taste-frontend, impeccable. Conflict: landing-page-design and redesign-existing-projects tell the agent to invent names |
| 5 | The stock section sequence: hero, logo row, stats, three features, testimonials, pricing, final call to action | It is the average of every landing page | Write the page as claims with proof first. A section with no claim is cut | 8 of 23 videos; named by impeccable, design-taste-frontend, frontend-design, redesign-existing-projects |
| 6 | A hero with no job: a slogan H1, a "Get started" button, two equal buttons | A brand-sounding line replaces what and where | The H1 names the service and the place, with one filled action named for what it does (see U10) | 7 of 23 videos; named by impeccable, design-taste-frontend, landing-page-design |
| 7 | The phone layout is a squashed desktop | Desktop was designed first and mobile only "checked" | Design at phone width first and run a separate mobile pass | 7 of 23 videos; named by impeccable, design-taste-frontend, high-end-visual-design |
| 8 | Placeholder or model-invented facts and copy; thin sections | The agent fills the gaps with plausible content | Every fact comes from the client record. Gaps stay visible as placeholders until settled | 6 of 23 videos; named by design-taste-frontend, frontend-design, redesign-existing-projects, landing-page-design |
| 9 | Gradient text, glow blobs, aurora or purple washes | The best-known AI fingerprint | Flat color. Emphasis comes from size and weight | 5 of 23 videos; named by impeccable, design-taste-frontend, redesign-existing-projects. Conflict: landing-page-design uses gradient heading text |
| 10 | Invented numbers: stat bars, ratings, counters | "Key statistics" appear without any data | Show a number only when it is in the client record (see U14) | 4 of 23 videos; named by impeccable, design-taste-frontend |
| 11 | Eyebrow labels, tiny tracked caps, monospace as costume, 01/02/03 markers | Template chrome that appears whatever the subject | Put the information in the heading, or drop it. Use numbering only for a real sequence | 4 of 23 videos; named by impeccable, design-taste-frontend, frontend-design, redesign-existing-projects. Conflict: high-end-visual-design prescribes eyebrow pills |
| 12 | AI-made people or likenesses shown as real | Uncanny faces; a team or customer that does not exist | Real people, with consent, or none (red lines) | 3 of 23 videos; named by design-taste-frontend, redesign-existing-projects |
| 13 | Dark by default | "Premium" read as near-black with one neon accent | Pick light or dark from where and how the page is used (see U12). One video recommends dark as a quick fix, so the sources disagree | 3 of 23 videos; named by impeccable, frontend-design, redesign-existing-projects |
| 14 | Equal-weight card grids (icon, heading, text, three across) | The lazy container; nothing is ranked | Rank the content: one dominant item, then a list or a split | 2 of 23 videos; named by impeccable, design-taste-frontend, frontend-design, high-end-visual-design, redesign-existing-projects |
| 15 | One radius, one soft grey shadow, one gap everywhere; or packed tight | Untuned defaults | Use a spacing scale with tight groups and generous separation. Radius and shadow come from tokens | 2 of 23 videos; named by impeccable, design-taste-frontend, frontend-design, high-end-visual-design, redesign-existing-projects |
| 16 | Default fonts (Inter, Roboto, Open Sans) | The model reaches for the most common faces | A licensed pair with real contrast, chosen for the subject (see U11) | 2 of 23 videos; named by frontend-design, high-end-visual-design, redesign-existing-projects, landing-page-design |
| 17 | Flat type hierarchy | Heading and body sizes sit too close | Use few sizes with big steps between them | 2 of 23 videos; named by impeccable, design-taste-frontend, frontend-design, redesign-existing-projects |
| 18 | Centered everything | The centered hero repeated down the page | Left-align by default; center at most one moment | 2 of 23 videos; named by design-taste-frontend, redesign-existing-projects |
| 19 | Adjective-stacked copy ("world-class", "seamless") | It over-explains and tries to impress | Plain, specific sentences from the facts | 2 of 23 videos; named by redesign-existing-projects, landing-page-design |
| 20 | Palette drift: a new accent or blue in each section | No color roles were set | One accent with stated jobs (see U12) | 1 of 23 videos; named by design-taste-frontend, redesign-existing-projects |
| 21 | Emoji or glyphs used as icons | The quickest stand-in for an icon system | One drawn icon set with one stroke weight | 0 of 23 videos; named by impeccable, design-taste-frontend, ui-ux-pro-max |

A caution from the skills and one blog: banning the first-wave tells does not make a page original. The model slides to the next common look (cream and terracotta, near-black with neon) [source: https://capitalandcompute.net/blog/fix-ai-slop-design/, C, 2026, opened 2026-10-30]. `frontend-design` lists the same second wave. The fix is the subject's own content, not a longer ban list.

## The process that avoids slop

| step | input | output | skills |
|---|---|---|---|
| 1. Intake and clarifying questions | client record, the current site if any | answers file: goal, primary action, audience, required brand values, out-of-scope list (see U02) | brainstorming; impeccable `shape` |
| 2. Real content and proof before layout | client record, real photos, real reviews | content inventory and a claims-with-proof list; gaps marked as placeholders (see U05, U07) | design-taste-frontend steps 1, 2 and 4 (subject inventory, argument, idea sentence and competitor test); landing-page-design for structure only |
| 3. Three to five reference sites | the client's category; galleries searched by trade | a note for each site on what to take (structure, type, rhythm, density) and what not to take | awesome-design-md (token systems, never logos or imagery); Mobbin for reference |
| 4. Two or three concept directions | answers, references, locked brand values | directions that differ on four or five of the ten axes, each with a name, hex palette, licensed fonts and trade-offs (see U09) | Stitch MCP for draft screens; design-taste-frontend `draw.mjs`; ui-ux-pro-max for palette and type lookups |
| 5. Lock tokens in one file | the chosen direction | one tokens file: type pair, palette roles, spacing scale, radius, shadow and border language, motion budget (see U09, U14) | impeccable `document` (DESIGN.md) |
| 6. Build one section at a time | tokens, copy deck | hero first and judged alone, then each section in turn; neighbouring sections never share a layout | frontend-design or impeccable (one per page) |
| 7. Screenshot-and-compare loop | the running page | captures at phone and desktop width, compared with the direction and fixed in batches, a few rounds at most | playwright-cli; impeccable "verify by looking" |
| 8. Creative-director audit | captures, this guide's test | a scored audit with before and after captures, and REFINE or REBUILD per section (see `vault/wiki/knowledge/course-design-method.md`) | impeccable `critique`; redesign-existing-projects for a built site |
| 9. Removal pass | the audited page | one element removed per section, or a written reason to keep it | frontend-design ("remove one accessory") |
| 10. Gates last | the finished page | accessibility, speed and call-to-action checks pass (see U16, U17, U23) | web-design-guidelines; global `accessibility` and `benchmark` |

The `site1-design-craft` skill is stricter than step 3: at most three references, taken from the brief, the vertical overlay, one `awesome-design-md` write-up or the owner, and no web search.

Cloning is out of bounds. Two videos rebuilt another business's page and swapped in a brand, and a third took a close copy of a reference as success (count: grep of notes/ for clone and copy wording). A lookalike carries originality and copyright risk, which goes to counsel (see U20). References give structure and ideas. They never give layout, wording or assets.

Stitch: the Google Stitch MCP is connected for UI ideation, but its tools load only after a session restart, and it was not live in this session. A Stitch screen is a draft that gets rebuilt with our tokens (`.claude/skills/site1-skill-router/SKILL.md`). Use one design skill per page and one draft source per page, as the router says.

## Prompt patterns that worked across the videos

Counts are the video ids in the named rows of `playbook/_research/R13-parts/candidates.md`. They show a similar pattern was used. They do not show it worked.

1. **Clarifying questions** (8 of 23 videos; rows V4 to V7, V14, V190). "Here is the brief for [business, place, primary action]. Before any code, ask every question you need on audience, proof, assets and out-of-scope items; save my answers to [answers file]."
2. **Reference screenshots** (13 of 23 videos; rows V9, V69 to V75). "Attached are [three to five] reference screenshots. For each, say what to take (structure, type scale, rhythm) and what not to. Copy no layout, wording, logos or images."
3. **Concept directions** (4 of 23 videos; rows V52 to V55, V67, V79). "Propose [two or three] directions for [business] that differ on four or five of these axes: [axis list]. Each gets a name, hex palette, licensed fonts, trade-offs and fit to [audience]. No code."
4. **Token lock** (10 of 23 videos; rows V14, V47, V65, V66, V91, V103, V105, V106, V108). "Write [tokens file] for direction [name]: type pair and scale, palette roles in hex (one accent with its jobs), spacing, radius, shadow, border and motion budget. Components use tokens only."
5. **One section at a time** (9 of 23 videos; rows V58 to V60, V62, V94). "Build only the [section] from [copy deck] with [tokens file]. Change nothing else; list what changed."
6. **Review loop** (4 of 23 videos; rows V96, V175, V180, V185 to V187, V201). "Run the page locally. Capture [section] at phone and desktop width, compare with [direction], fix the gaps in one batch, repeat at most [two] times."
7. **Anti-slop audit** (4 of 23 videos; rows V77, V89, V98, V186, V200, V202, V204). "Act as a creative director who did not build this. Score [page] against [this guide's test] and list each tell with location and fix. Keep branding and facts. Report before and after."
8. **Motion restraint** (6 of 23 videos; rows V140 to V143, V153). "Add motion only where it answers a visitor action or shows a change of state. Keep native scroll; never delay the H1, call button or form; animate a number only if it is in [client record]; respect reduced motion."
9. **Copy from facts** (5 of 23 videos; rows V10, V16, V17, V188, V190). "Write the copy only from [client record]. Where a fact is missing, leave [PLACEHOLDER: what is needed]. Never invent reviews, numbers, people, prices or credentials."
10. **Named image slot** (6 of 23 videos; rows V62, V118 to V120). "Put a named, empty image slot in [section] for [real photo to come]. Do not generate or pick stock images of people, jobs or premises."

## Does it look like slop? A 15-point test

Answer from phone and desktop screenshots; pass means the statement is true.

1. Every review, quote, rating and number on the page is in the client record.
2. No person shown is generated, and no generated image is presented as the client's work.
3. No lorem, unlabelled placeholder or dead section is visible; sample values (such as a sample price) carry the label the brief requires. A page that shows any placeholder or sample value is a draft and is not published.
4. The first phone screen shows what, where, and one filled primary action.
5. The H1 names the service or offer; it is not a slogan.
6. The sections do not follow the stock hero-logos-features-testimonials-pricing order unchanged.
7. Neighbouring sections use different compositions, and no section is a row of identical cards.
8. Heading and body sizes are clearly different, with one visible type pair.
9. One accent appears, on actions only.
10. No gradient text, glow blob or aurora wash.
11. No eyebrow label above headings, and no 01/02/03 markers without a real sequence.
12. All text over images is readable, and nothing covers a headline.
13. Most text is left-aligned; centering is used at most once or twice.
14. Icons are one drawn set, with no emoji.
15. In a still screenshot nothing looks unfinished, so the page does not rely on motion to look complete.

Scoring (our own convention, untested): a page passes at 12 of 15, and points 1 to 4 must all pass (the same line as the installed `site1-design-craft` skill).

Also check the nine WebGen-Bench flaws (`vault/wiki/knowledge/webgen-bench-notes.md`):

- (a), (b), (c) the page fails to load
- (d) only the background renders
- (e) UI components such as buttons are missing
- (f) an image does not display
- (g) the stock template is used with no customization
- (h) content is misplaced, such as misaligned text
- (i) the background color is wrong for the page

## Where taste must yield

The client's goal outranks flash. On a call-first trades page, the call button, speed and accessibility win over every taste rule here. That means no scroll hijack (see U14), no hero video or 3D on task pages (see U14, U17), no full-viewport hero (see U10), and no custom cursor or pointer-only effects (see U14, U15). The bounds come from these modules:

- **U09:** directions, token lock, and the rule against generated proof.
- **U10:** first-look order and the phone first screen.
- **U11:** licensed fonts and the font budget.
- **U12:** color roles and the contrast guard.
- **U13:** real imagery and disclosure.
- **U14:** the motion inventory, reduced motion and the showcase-only gate.
- **U15:** components behave like public pattern libraries.
- **U16:** the accessibility target.
- **U17:** performance budgets.
- **Trades overlay:** `playbook/overlays/vertical/local-trades.md`.

Where a skill disagrees with these, the skill loses (`.claude/skills/site1-skill-router/SKILL.md`, order of authority). The conflicts found while writing this guide:

- `landing-page-design` tells the agent to invent testimonial names and customer brands, and uses gradient heading text and a blurred floating nav.
- `redesign-existing-projects` suggests realistic-sounding names, "organic" sample data, randomized dates and stock placeholder photos.
- `high-end-visual-design` requires a scroll entrance on every element, eyebrow pills and glass navigation.
- `design-taste-frontend` requires a motion layer with a minimum count of moving elements, and found video loops.

Use them for critique and craft checks only.

## Evidence honesty

Taste claims here are practitioner consensus, not measured results. Nothing here shows that removing a tell raises calls or sales.

**(a) Agreed by many sources.** Tells 1 to 9 in the table, each named by five or more videos and by installed skills. Same genre, shared tools: "independent" is generous.

**(b) Measured, from pages or files opened:**

- Normal text needs a contrast ratio of 4.5:1 and large text 3:1 at Level AA [source: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html, A, 2023, opened 2026-10-30].
- In eyetracking, users ignored generic stock photos of people as filler. They looked longer at real staff portraits [source: https://www.nngroup.com/articles/photos-as-web-content/, B, 2010, opened 2026-10-30]. That study is old and is not about AI images.
- WebGen-Bench found that more than half of task errors came from pages that failed to launch or a template that was not modified. Its appearance rubric ranks versions; it gives no absolute grade [source: vault/wiki/knowledge/webgen-bench-notes.md, B, 2025].
- The `design-taste-frontend` skill reports its own panel study of real sites. It is the skill author's unreviewed claim and is not repeated here as fact [source: .claude/skills/design-taste-frontend/SKILL.md, C, 2026].

**(c) Single source or blog only:**

- The default-font tell: two videos, plus agency and blog posts that cite no data [source: https://www.925studios.co/blog/ai-slop-design-tells, C, 2026, opened 2026-10-30].
- Choosing dark or light by client type.
- The 60-30-10 color split.
- The second-wave tells.

No speaker's price, income or result claims are repeated.

## Open items

- Nothing here was A/B-tested on conversion. The test's pass line is a guess.
- Keyword counts may miss tells worded differently; a second reader should recount a sample.
- The guide has not been tried on a real site. Next: run the test on the current demo pages, fix the failures, and compare calls and form starts before and after.
- After a restart, test whether Stitch drafts raise or lower the tell count.
- The owner decides how to fix the skill conflicts (router rows or local overrides).
- Whether crediting a reference is enough for a close lookalike is a counsel question (see U20).
