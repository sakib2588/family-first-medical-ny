---
name: site1-design-craft
description: Use when a task designs, builds, redesigns, restyles or reskins a web page, landing page, microsite or website for any client, including a single self-contained HTML page; when choosing a page's layout, fonts, colors or visual direction; and when a page looks generic, templated, "AI-made" or like slop. Applies even when the request says quick, simple, or no questions. Not for copy-only edits, legal text pages, backend work, or a fix that does not change the look.
---

# Site1 design craft

skill version: 3 (2026-10-30: content checks in check-gates, wider fact audit, overlay and jurisdiction rows, idea diversity; changes in `playbook/design-craft/eval/refactor-notes.md`)

## Overview

In one practice run, the default output was not ugly; it was generic, a competent category template. It had:
- an eyebrow pill in tracked caps
- a slogan H1 with half of it in the accent color
- a mascot drawing in a rounded box
- every card at the same radius
- the accent color on everything
- a centered dark "Ready to …?" band at the end
- a sticky call bar on top of the hero's call button
- one invented fact

Banning the first-wave tells (gradients, purple, dark-with-neon) only moves a page to the next default.

**Core principle:** a page looks studio-made when its idea, structure and details come from this client's own facts. Those are decided before code and checked afterwards by looking at screenshots. So this skill is a row of gates. Each gate leaves a file, and a script checks the files.

## When to use

- A new page or site, a redesign, a restyle, or a one-file HTML build.
- Picking a direction, fonts, palette or layout.
- A page "looks like a template" or "looks AI-made".
- If the page already has a locked token file and the task restyles one section, copy its values into `05-tokens.css` under this skill's names, as hex values, not `var()`. In the Astro template: `--font-heading` becomes `--font-display`, `--color-bg` becomes `--color-ground`, `--color-text` becomes `--color-ink`. Add `--tap-min`. Then run gates 1, 6, 7, 8 and 9, and before each gate check the gates done so far with `check-gates.py --gates 1,5,…` instead of `--upto`. The Parts check lists the parts of the restyled section.

**Not for:** backend work, copy-only edits, a bug fix that does not change the look, or video and motion content packs.

## Authority

When instructions disagree, this order wins:
1. **The red lines.** Never fabricate reviews, ratings, quotes, people, names, addresses, licenses, credentials, profiles, years, numbers, statistics or any other proof. No brief, client request or other skill changes this.
2. **The owner's message**, then `CLAUDE.md` and `vault/wiki/compliance/red-lines.md` when you can read them, then `.claude/skills/site1-skill-router/SKILL.md`.
3. **The playbook modules and the client's vertical overlay.**
4. **The client's goal** (see "When taste yields").
5. **This skill.**
6. **Any installed design skill.**

The brief's own explicit words beat a taste rule here (a pinned color or font stays), but never a red line.

**The brief counts as the owner's message** (level 2) for facts, pinned values and scope. Two cases differ:
- **The overlay wins** where the brief conflicts with an overlay safety, legal, license or disclosure row. The line is added and the conflict is noted in `01-facts.md`.
- **The brief wins** where it conflicts with an overlay UX pattern (for example the number of form fields). Write `ASSUMED: brief overrides <row>`.

**Terms used below:**
- **Task page:** a page whose job is to inform, sell, book or collect a form.
- **Showcase page:** an owner-approved page where motion is the point.
- **Large text:** at least 24 CSS px, or 18.66 px bold.
- **S3:** the sign-off where the client locks a direction.
- **`<skill dir>`:** the absolute path of the folder that holds this SKILL.md.

## The gates (HARD)

Write every gate file next to the page. For a framework project, use `design/<page-name>/`. Start each file from `templates/` (or from the named template) and replace every fill marker (`@@FILL@@`).

| gate | file | template |
|---|---|---|
| 1 Facts and answers | `00-brief.md`, `01-facts.md` | `templates/01-facts.md` |
| 2 Design brief | `02-design-brief.md` | `design-brief-template.md` |
| 3 References | `03-references.md` | `templates/03-references.md` |
| 4 Three concepts | `04-concepts.md` | `templates/04-concepts.md` |
| 5 Locked tokens | `05-tokens.css` | `token-lock-template.css` |
| 6 Build | the page (`index.html` or the template) | none |
| 7 Screenshot review | `07-review.md`, `shots/` | `templates/07-review.md` |
| 8 Audit and fact audit | `08-audit.md`, `08-fact-audit.md` | `templates/08-audit.md`, `templates/08-fact-audit.md` |
| 9 Slop test and release gates | `09-slop-test.md` | `templates/09-slop-test.md` |

**Rules for all gates:**
- Before you start gate N (from gate 2 on), run `python3 <skill dir>/tools/check-gates.py <gate dir> --upto <N-1>`. For a framework page, build first and add `--page dist/<route>/index.html`; a URL fails gate 6. It must print `ok`, which means every slot is filled and every recorded result passes. It does not judge the design.
- No page markup or CSS before `05-tokens.css` passes.
- Quick, simple or time pressure shortens the prose. It never removes a gate, a required slot or a count: 8 to 12 inventory items, an argument row per section, three directions with an axis table, and the token checks.
- If a gate cannot run, its file says why in one line (for example `NOT VIEWED: no browser available`), and the final report repeats it. Never skip a gate in silence.
- A script that exits non-zero, or prints `FAILED`, is a failed gate. Do not explain the failure away. Never delete a safety, legal or disclosure line to make a script pass: record the line as `overlay-required` in `01-facts.md`, and pass `--facts` (gate 9).

### Gate 1. Facts and answers → `00-brief.md`, `01-facts.md`

1. Save the client brief word for word as `00-brief.md`, even when it was pasted into the prompt. The tools read it.
2. **Load the vertical overlay.** Find the nearest match in `playbook/overlays/vertical/` (list the folder; take the match from `site.yaml` `archetype` or the brief).
   - Read all of it: "Primary conversion", "Trust signals", "UX patterns", "Compliance rows", "Common mistakes" and "Reference sites".
   - Write the jurisdictions under "Jurisdictions". Take them from `site.yaml`. Failing that, take them from the brief's place, marked `ASSUMED`; for example, a New York City borough gives `nyc`, `new-york` and `us-federal`.
   - Apply every row whose condition the vertical and the jurisdictions trigger, not only the first few.
   - List every line those rows require on this page in `01-facts.md`, with the row id, marked `overlay-required`: safety, legal, license, disclosure, contact and hours lines.
   - Write every row with a counsel flag under "Counsel items", with what waits on it. Publishing waits on open counsel items, so the page stays a DRAFT.
   - If you cannot read `playbook/`, the overlay text in the brief is authoritative.
   - If there is neither, write `overlay: not available` and say in the final report that the overlay lines were not checked.
   - If no overlay fits, write `overlay: none fits`.
3. Ask the clarifying questions first (skeleton P1), in one message: at most eight, and only the ones that change the design.
4. If nobody can answer in this session (you run as a subagent, the request says "no questions", or no reply comes), mark each question `ASSUMED: <the narrowest reading of the brief>` or `UNKNOWN: kept off the page`, and go on. Never invent an answer that adds a fact.
5. Write the **fact list**: every fact the page may show, each with its source (brief line, record field, owner reply, overlay row).
6. **Proof and claims may come only from the fact list.** Never add testimonials, reviews, ratings, quotes, people, names, statistics, counts, years in business, awards, client logos, addresses, prices, phone numbers, emails, service areas, response times, licenses, "insured", "family-owned", "free estimates", "24/7", guarantees, or opening days and hours the brief does not state. For example, if only the open days are given, do not add "closed on the other days".
7. Lines that the overlay requires (safety, contact, hours, address) are allowed even when the brief lacks them, marked `overlay-required`. Their values (numbers, hours, an address) still come from the facts or stay placeholders.
8. A missing item uses the brief's own placeholder wording when there is one (for example "address to be confirmed"). Otherwise use `[Placeholder: what is needed]`, or leave the item off the page. Copy the brief's labels for sample values. On a service-area trades site, no address line appears at all, not even a placeholder (red lines; local-trades.15).
9. **Microsite or referral site:** this applies when `site.yaml` `model` includes `microsite`, or the business named on the page is not the one that does the work.
   - Add two `overlay-required` lines, with the red-lines row as the source: a link to the referral-marketing disclosure page, and the sentence "We connect you with a local licensed [trade]."
   - Claim no license or contractor status that the site does not hold.
   - List the overlay's license, address and identification rows (local-trades .14, .15, .22, .24) as counsel items.

### Gate 2. Design brief → `02-design-brief.md`

Fill `design-brief-template.md`. Its slots are what a default builder skips:
- **Subject inventory:** 8 to 12 things from the fact list that belong to this client and not to every business of its kind.
- **Argument:** the page as claims with proof, one row per section. A section with no claim is cut. This replaces the stock sequence.
- **Idea sentence:** "On this page, [an inventory item] becomes [a visual device, or the page's structure: its order, grouping, density or first screen]." A structural idea is as good as a visual one, and better on Operate and Read pages.
- **Swap test:** keep the device and swap in a competitor's values (other hours, prices, name, area). Write what another client of this type would do with this idea.
  - If the device still works with only the values changed, the idea belongs to the category; find another. "Partly" counts as "still works".
  - Write `Still works for the category: no` only when the swap breaks the device.
  - Hours, a week, prices, a phone number, a service list and a map are facts every business of this kind has. They get a Parts row and are designed, but they are not the idea.
  - If two ideas in a row fail and the facts are thin, take a structural idea from the moment of use and the primary action, and carry `swap test: weak (thin facts)` to the final report.
- **Only here:** one thing a competitor page of this type would not have, taken from the facts, with its F-id. It must be visible on the page.
- **First-look order** at 390 x 844 and at 1440 x 900.
- **Parts:** one row for every part of the page, not only the hero: header and navigation, logo or wordmark, hero, each section, every form, every sample or illustrated component (a chart, a timeline, a table, a diagram, a price list), the placeholders, and the footer. Each row says how the idea or the chosen direction shapes that part, and which default it replaces. A part with no row gets browser or template defaults. In a blind test, that was where the craft pages lost points: plain bordered form boxes, default link navigation, footers made of placeholders, and lower sections that fell back to stock blocks.

### Gate 3. References → `03-references.md`

Use at most three references, only from these sources:
- **(a)** A site listed for this client in the brief, the client record, or the "Reference sites" list of the overlay read in gate 1. Check the overlay's list first.
- **(b)** One brand write-up from the installed `awesome-design-md` skill (read its SKILL.md first). Take only its token system: type ratio, spacing rhythm, density. Never take its logo, name, imagery or copy. When (a) and (c) give nothing, you may take one write-up from a category unlike the client's, for rhythm and type ratio only. Say so in the file.
- **(c)** A site the client or owner names.

For each reference, write what to take (one or two properties) and what not to take. If none is available, write `none available: <reason>`; that passes the gate.

Never search the web for a page to imitate. Never clone a layout, wording or asset: a lookalike carries originality and copyright risk, and that question goes to counsel. This gate is stricter than the anti-slop guide's three to five gallery sites, on purpose.

### Gate 4. Three concepts → `04-concepts.md`

Use skeleton P3 and `templates/04-concepts.md`. Write three directions that differ on **at least four** of these ten axes:
- layout density
- typography treatment
- weight play
- visual metaphor
- hero treatment
- section rhythm
- shape language
- elevation
- proof style
- whitespace

Color alone is not a difference. **Each direction starts from a different item of the subject inventory.** Each direction has:
- an evocative name (never "Option 1")
- its inventory item
- its idea sentence
- palette roles in hex
- a font pair with its license source and how it loads
- the hero treatment
- the section order
- a 390 px ASCII wireframe
- trade-offs
- the closest item in "Defaults to recognise", and the two properties that make the direction differ from it

The three hero treatments differ from each other, and at most one is the split hero (headline left, card or panel right).

Choose one, with a reason in terms of the brief (audience, moment of use, primary action), not taste.

**The chosen direction may not be one of the "Defaults to recognise".** It must differ from the nearest default in two concrete properties, or a brief line must earn that default. For the idea defaults (an hours or week strip; a labelled sample diagram of the client's operation), the "Default check" line must also name what in this client's inventory the choice beats. Write which.

On a trades page, start the font search from the overlay's trades pairings (local-trades.9).

In a client project, gate 5 waits for the client's written choice (S3); record the date. In a draft, record `draft: chosen by builder; client lock pending`.

### Gate 5. Locked tokens → `05-tokens.css`

Copy `token-lock-template.css` and fill every marker. The file holds:
- the type pair, with a contrast reason and its license and loading
- the base size and ratio of the type scale
- leading and measure
- color roles, with the accent's jobs written out
- state colors
- spacing, section gap and container
- radius and shadow by role
- the tap minimum
- the motion budget

The type ratio, base size, section gap and container each carry a one-line reason from the chosen direction's density and whitespace axes. A copied default is not a choice.

Write the contrast of every text and background pair in the file's record. Compute it with `python3 <skill dir>/tools/craft.py contrast '#1b1b1b' '#fff'`; 3- and 6-digit hex both work. Text needs at least 4.5:1, large text at least 3:1, and controls and focus at least 3:1.

The body face is not a default (Inter, Roboto, Open Sans, Arial, the system stack) unless the brief pins it. If the brief pins a brand color, it may be the accent. It may also appear where the brief pins it (for example a logo mark), and, as `--color-brand`, on the surfaces or bands the Parts table names. The border language is a choice too (`--border`).

Write every color token as hex. The gate passes when `check-gates.py --upto 5` prints `ok`. That check recomputes the text contrast pairs and rejects a default body face.

### Gate 6. Build

1. Paste the `:root` block of `05-tokens.css` unchanged as the first `:root` block of the page's styles. Components use `var(--…)` only. With Tailwind, map the theme colors to the tokens (`var(--color-…)`) and use only those class names; palette classes such as `bg-red-600` are raw colors.
2. Build the hero first and shoot it alone with `--fold-only` (the gate 7 command). Then build the sections one at a time, in the order of the argument.
3. Neighbouring sections never share a layout. Carry the idea into every section, not only the first screen. Build each row of the brief's Parts table as designed; a part left to defaults is unfinished.
4. Write the CSS for phone width first, then design the desktop layout. Do not just stack the desktop layout.
5. Apply these rules while you build:
   - Put `data-cta="primary"` on the page's primary action (the one the brief names) and on nothing else. Gates 6, 7 and 9 measure that element, and with no marker the call-to-action gate fails.
   - The H1 names the offer (and the place, when the brief gives one). The business name sits in the header.
   - No eyebrow label, kicker or tracked-caps line above a heading. The router's exception needs the owner's written approval.
   - The accent appears only on actions and on uses the brief pins. The brand role (`--color-brand`) may fill the surfaces the Parts table names. Emphasis inside a heading comes from weight or size, never color.
   - Exactly one filled primary action per screen. A second route (such as a request form) may have a filled submit only in a screen where the primary action is not visible, and never in the accent when the brief pins the accent to the primary action.
   - A sticky action bar shows only while no other primary action, form or footer is in view. Hide the bar in CSS and show it from JavaScript, so with JavaScript off there is no bar. If you cannot make that work, use no sticky bar.
   - Every link or button outside running text is at least 44 x 44 CSS px. That is the project rule (U16.6); the WCAG 2.2 AA floor is 24 px.
   - Images: the client's real images, an illustration built from an inventory item, or a named empty slot. Never a category mascot, stock people, or a generated image of people, premises or work. Any other generated image is labelled as generated. Nothing is captioned as the client's work unless it is.
   - Motion appears only if the token file's budget lists it. Keep native scroll and respect reduced motion. Content shows without JavaScript; motion is added on top.
   - Theme the browser surfaces from the tokens: focus ring, `::selection`, link underline offset.
   - **Navigation:** links are styled from the tokens (type step, weight, spacing, hover and focus). Default blue underlined links in a header read as unfinished. On a one-page task site, two or three links at most, or none.
   - **Logo:** with no client logo, set the name as a wordmark in the display face. Never draw a generic icon mark (a house, a leaf, a gear, a spark) and present it as the client's logo.
   - **Forms:** a form is designed like a section, not dropped in as a bordered box. Labels, field heights, spacing, grouping, the submit button and the helper or privacy line all come from the tokens and the direction's shape language. Native `select` and inputs get their borders, radius, focus and padding from the tokens. Field order follows the visitor's task. A plain white box with a 1 px grey border beside the hero is a default (tell 23).
   - **Sample and illustrated components** (a chart, a timeline, a table, a diagram, a price list) carry enough labelled detail to look real without inventing facts:
     - structural detail is allowed when it is labelled as a sample illustration: axis labels at every step, units, states, a legend, row and column headings, and neutral sample labels
     - business facts are not allowed: customer names, results, ratings or performance numbers
     - the states, columns, actions and integrations shown are only features the fact list names; a sample shows how a named feature looks, never a feature the brief does not name
     - a sparse wireframe of grey blocks reads as a placeholder, not a product
   - **No clipped text.** No fixed heights on boxes that hold text (use min-height and padding). Every label fits inside its block at 390 and 1440. A component wider than the phone gets a designed phone version (stacked, or a scroll container with a visible cue and its first column pinned), not a crop at the screen edge.
   - **Placeholders** are one designed, token-styled element: a muted label in the body face, the same everywhere. Never a dashed debug box. Group them where they belong (for example one line in the footer). A section, or a footer, whose content is mostly placeholders is cut or merged until the facts arrive.
   - **Footer:** design it as the last section, with the direction's type, rhythm and the idea. It holds the facts a visitor needs at the end (contact, hours or area if known, the primary action as a text link), not a bare list of "to be confirmed" lines.
   - **Full-width bands** (a dark stat or fact band, a closing call-to-action band) appear only if the argument gives them a claim no other section makes, and never as the default way to show three facts (tell 23).
   - Use at most two font families, loaded the way `05-tokens.css` says.
6. Check for raw colors outside `:root`. The command must exit 0:
   ```bash
   python3 <skill dir>/tools/craft.py raw-colors index.html
   ```
   It catches hex, color functions, named colors, SVG color attributes and Tailwind palette classes in styles, `style=""` and class names, outside `:root` and `@theme` blocks. For a framework page, run it on the built HTML (`dist/<route>/index.html`), on every CSS file the build emits (`dist/_astro/*.css`) and on each component file. Inline SVG uses `currentColor` or a class, not hex. `check-gates.py --gates 6` also runs it, checks the `data-cta` element and checks that the token block was pasted unchanged.

### Gate 7. Screenshot review → `07-review.md`

1. Shoot the page:
   ```bash
   node <skill dir>/tools/shoot.mjs <page dir>/index.html <page dir>/shots <name> --full-slices
   ```
   - For a call-first trades page, add `--viewport 358x667`. This adds the trades first screen, `<name>-358-fold.png`, and its call-to-action measurement.
   - For a framework page, start the dev or preview server and pass its URL instead of the file, for example `http://localhost:4321/<route>`. Gate 6 still runs on the built file.
   - An unknown flag stops the script with exit 2.
   - The script finds Playwright through `site-template/` in the repository (from the skill's folder or the working directory) and installs nothing. Outside such a repository it stops at once; then use step 2.
   - It writes these files, measured at 390 x 844 and 1440 x 900:
     - `<name>-390-fold.png` and `<name>-1440-fold.png`
     - slices `<name>-<width>-s1.png`, `-s2.png` and so on, down to the footer with `--full-slices`
     - `<name>-metrics.json`
     - `<name>-text.txt`, the page's text at every width, plus alt, title, aria-label, meta and JSON-LD text
   - `--max-slices N` sets another cap.
2. If the script fails to run, put the error in the file and capture the same two widths, full page, with the `playwright-cli` skill. If no capture is possible, write `NOT VIEWED`; the gate fails and the final report says so.
3. Open both fold tiles and every slice with the Read tool, and list each file name under "Screenshots viewed". The last slice at each width must show the footer.
4. Copy the metrics into the table at each width.
5. A `WARN: font named but not loaded` line, or a non-empty `fontsNotLoaded`, means the visitor sees a fallback face. Fix the font loading and shoot again. A system face (for example Georgia) is judged against the build machine, so name its fallback in the stack.
6. For a call-first trades page, fill "Trades first screen" from the 358 tile: each overlay Primary conversion item, in order, either inside the 667 px or cut by the priority rule.
7. Per screenshot, write what looks generic (name the element and its tell number from the table below), what looks unfinished or misaligned, and what you changed.
8. **Parts check:** for every row of the brief's Parts table, name the screenshot that shows it and answer two questions. Is it designed or default? Is any text clipped, cut off at the screen edge, or overflowing? Look hardest at the lower slices: the form, the footer, the sample components, the placeholders and the 390 view of anything wide. Any default or clipped part is fixed in this round.
9. Blur test: does the first-look order hold when you squint?
10. Change the generic items in one batch, shoot again, and review again. Stop after three rounds. Any generic item you keep needs a one-line reason.

### Gate 8. Audit and fact audit → `08-audit.md`, `08-fact-audit.md`

1. Run `audit-prompt.md` on the latest screenshots. It gives a 1 to 5 score per principle and REFINE or REBUILD per section, follows the before/after rule, and answers the idea-diversity questions. When the Agent tool is available, give it to a helper that did not build the page.
2. Removal pass: in each section, remove one thing (an accessory, a line, a border, a badge), or write why it stays.
3. Shoot again after the changes.
4. Go on when no principle is below 3 (our convention). If a principle is still below 3 after two batches, carry it to the final report.
5. The audit file states who graded it. A self-audit is not the independent review the playbook requires (rule U09.15: the reviewer is not the builder).
6. **Fact audit (red lines).** After the last re-shoot, run `python3 <skill dir>/tools/craft.py claims <page dir>/shots/<name>-text.txt`.
   - Put every line it prints in the table of `08-fact-audit.md`, copied exactly, with its source.
   - The filter is not a proof. Read the whole text file once, and add a row for any line it missed that names a person, credential, review, guarantee, warranty, response time, count or business attribute.
   - Status is one of: `ok` (cite an F-id), `overlay-required` (cite the row id), `sample-structure` (an axis step, day name or legend of a labelled sample), `placeholder`, `not-a-claim`, or `removed`.
   - A line with no source is removed from the page before you go on.
   - `check-gates.py` fails when a claim line has no row, when an F-id is not in `01-facts.md`, or when the audit is older than the last shot.
7. Also run gate 9's automatic check now, and give every word or number its `no_invented_claims` line names a row.

### Gate 9. Slop test and release gates → `09-slop-test.md`

1. Run the automatic checks and paste the output into the file:
   ```bash
   python3 <skill dir>/tools/auto_checks.py <page dir> --brief <page dir>/00-brief.md --facts <page dir>/01-facts.md <page dir>/08-fact-audit.md --metrics <page dir>/shots/<name>-metrics.json
   ```
   - It reads `<page dir>/index.html`; for a framework page, pass the built route folder.
   - It fails on any of these:
     - lorem text
     - a claim word or a number not in the brief (a hint list, not a proof; the fact audit is the check)
     - contrast at 390 or 1440: body text under 4.5:1, text under 24 px under 4.5:1, any text under 3:1 (alpha and opacity are blended in), or text it cannot measure
     - tap targets under 44 px
     - a missing primary call to action, or one below the 390 fold or the 358 x 667 trades screen
     - a font error or a fallback face
     - HTML over 150 KB
     - a missing `lang`, or an image without `alt`
   - `--facts` counts as sourced every F-row of `01-facts.md` and every fact-audit row marked `overlay-required` or `sample-structure`, for example an emergency number in a safety line. Anything it still flags is fixed on the page. The exit code is the gate.
2. Fill the release-gates table:
   - the automatic checks above
   - one `data-cta="primary"` element, with a working target (`tel:`, form or page)
   - no video, canvas or animation library on a task page
   - at most two font families
   - the fact-audit result
   - **reduced motion and no JavaScript:** with `playwright-cli`, open a context with `javaScriptEnabled: false` and `reducedMotion: 'reduce'` at 390 x 844. Save a full-page screenshot as `shots/<name>-nojs-390.png`, view it, and name it. Every section and the primary action must still show.
3. Answer the 15 items of `slop-test.md`. Item 1 comes from the fact audit.
4. Pass: **at least 12 of 15, and items 1 to 4 all yes**, plus every release gate. This is our convention, not a measured threshold.
5. Write `Graded by:`. Status takes one of three values:
   - `DRAFT: …` when a placeholder, a sample value or an open counsel item remains
   - `READY FOR REVIEW: self-graded` when none remains and the builder graded the page
   - `READY: graded by <a helper that did not build the page, or the owner>`

   Only `READY` may be published. When the Agent tool is available, give gate 8's audit and this test to such a helper.
6. On a fail, go back to gate 6. After two loops, stop and report the failing items honestly.
7. **Drafts:** a page that shows any `[Placeholder: …]` or `[Photo: …]` slot, or a sample value, is a draft. Write `Status: DRAFT: not for publishing until these are filled`, and list them. Publishing needs no placeholder or sample value visible (the anti-slop guide's rule).

**Final report:**
- the gate files and the `check-gates.py` output
- the slop score and who graded it
- the release-gate results
- every `ASSUMED`, `UNKNOWN` and overlay line not checked
- every counsel item and what waits on it
- every placeholder the client must fill
- the draft status

## Slop tells and fixes

| # | tell | fix | test item |
|---|---|---|---|
| 1 | Motion for its own sake (scroll video, cursor follower, typewriter, marquee) | Each motion has a job; one moment at most | 12 |
| 2 | Generic stock or generated imagery, category mascot | Real images, an illustration from an inventory item, or a named slot | 2, 14 |
| 3 | Text over busy media, decoration over the headline | Measured scrim; nothing on the headline | 12 |
| 4 | Invented testimonials, quotes, bios | Only real, dated proof; none means no section | 1 |
| 5 | Stock section order ending in a centered "Ready to…?" band | Sections from the argument; no claim, no section | 6 |
| 6 | Slogan H1, "Get started", two equal buttons | H1 names the offer; one filled action named for what it does | 4, 5 |
| 7 | Phone layout is a squashed desktop | Phone first; designed order | 4 |
| 8 | Invented facts, thin sections | Fact list only; placeholders visible and the page a draft | 1, 3 |
| 9 | Gradient text, glow blobs, aurora | Flat color; emphasis by size and weight | 10 |
| 10 | Invented numbers, counters | A number only from the fact list | 1 |
| 11 | Eyebrow labels, tracked caps, "A · B" meta, 01/02/03 | Put it in the heading or drop it | 11 |
| 12 | AI people shown as real | Real people with consent, or none | 2 |
| 13 | Dark by default | Light or dark from the moment of use | 10 |
| 14 | Equal card grids | Rank: one dominant item, then a list or split | 7 |
| 15 | One radius, one grey shadow, one gap everywhere | Radius, shadow and spacing by role from tokens | 13 |
| 16 | Default fonts | A licensed pair with real contrast, chosen for the subject | 8 |
| 17 | Flat type hierarchy | Few sizes, big steps | 8 |
| 18 | Centered everything | Left-align; center one moment at most | 6 |
| 19 | Adjective-stacked copy | Plain, specific sentences from facts | 5 |
| 20 | Accent on everything, new color per section | One accent with written jobs: actions only | 9 |
| 21 | Emoji or glyphs as icons | One drawn set, one stroke | 14 |
| 22 | The friendly template (rounded pills, accent word in the H1, mascot panel, dark closing band) | The idea sentence plus the swap test | 15 |
| 23 | Hero-only design: a bordered form box, link navigation, a dark stat band, a term/definition list, a generic logo mark, a footer of placeholders | A Parts row for each, designed from the direction | 7, 12 |
| 24 | Thin or clipped sample components (grey blocks, no labels, cut at the phone edge) | Labelled sample detail; no fixed heights; a designed phone version | 12 |

### Defaults to recognise

A chosen direction may not be one of these unless the brief earns it (gate 4):
- cream background with a serif display and terracotta accent
- near-black with one acid accent
- broadsheet hairlines with zero radius
- identical rounded cards with soft grey shadows
- template chrome (eyebrows, middle-dot meta, appended arrows, monospace labels)
- the friendly template in row 22
- a quiet light page with one serif, hairlines and a single colored button, unless a brief line names why the audience needs that restraint
- the split hero (headline and lede left, a form card or panel right), unless a brief line needs the action beside the headline at 1440
- the client's hours, week or schedule drawn as a day or time strip, or a week board, as the page's idea
- a labelled sample diagram of the client's operation as the page's idea

## Prompt skeletons

Use them on yourself, on a helper, or on Stitch. Fill the brackets from the gate files.

**P1 Clarifying questions.** "Brief: [business, place, primary action]. Before any design, list the questions whose answers change the design: audience and moment of use, primary action and its target, real proof and its dates, real images, fixed brand values, what it must not look like, area served, out of scope. Save the questions and answers to 01-facts.md, and mark each unanswered one ASSUMED or UNKNOWN."

**P2 References.** "For each of [up to three references from the allowed sources], say what to take (structure, type scale, rhythm, density) and what not to take. Copy no layout, wording, logo or image. If none is available, write 'none available' and why."

**P3 Concept directions.** "Propose three directions for [client] that differ on at least four of: layout density, typography treatment, weight play, visual metaphor, hero treatment, section rhythm, shape language, elevation, proof style, whitespace. Each starts from a different inventory item and gets a name, an idea sentence from that item, hex roles, a licensed font pair, the hero treatment, the section order, a 390 px ASCII wireframe, trade-offs, and the nearest default with two properties that make it differ. No code. Choose one by fit to [audience, primary action]; the choice may not be a default the brief does not earn."

**P4 Token lock.** "Fill token-lock-template.css for [direction] as 05-tokens.css: the type pair with license and loading, the base and ratio with a reason from the density and whitespace axes, color roles in hex (accent jobs: [actions only, plus pinned uses]), state colors, section gap and container with a reason, radius and shadow by role, the tap minimum, and the motion budget. Record the contrast of every text pair. Components will use these tokens only."

**P5 Review loop.** "Shoot [page] with tools/shoot.mjs --full-slices. Look at the 390 and 1440 fold tiles and every slice down to the footer. List each element that looks generic with its tell number, each unfinished detail, and the fix. Fix them in one batch, shoot again, and repeat at most three times."

**P6 Audit.** Use `audit-prompt.md` as written.

## When taste yields to the client's goal

The client's goal outranks every taste rule here. These win:
- **The primary action:** calls, bookings, sales, sign-ups or forms.
- **Accessibility:** WCAG 2.2 AA contrast; 44 px targets (project rule U16.6; the AA floor is 24 px); reduced motion; a page that works without JavaScript.
- **Speed:** the page's performance budget.

**Call-first trades layout.** Use it only when the primary action is a call **and** the client is a home-service trade (the local-trades overlay) or an emergency-call business. Other call-to-book clients get one filled `tel:` action in the 390 fold and their own overlay's rules, not this layout.
- The first phone screen follows the local-trades overlay's "Primary conversion" list, in its order. When it does not all fit at 358 x 667, the earlier items win.
- That list includes two safety lines:
  - **Gas smell:** on every page of a gas-work trade as the overlay's item 2 defines it, the home page included, and on gas-appliance pages (item 2; rows local-trades.16 and .27).
  - **Carbon monoxide:** on fuel-burning heating and hot-water pages (item 3; row .17).
  - Take the wording from a sourced fact in the brief or the record. With none, use the overlay's text, list `counsel: local-trades.16` (or .17), and mark the page DRAFT.
  - The emergency number (911 in the US, row .27) is plain text, not a link.
  - Never remove these lines to pass a check.
- It also includes the problem or service H1 with the trade and area; a license line only for a license the client holds (rows local-trades.14 and .15); a fee line; one text link; and trust chips only from the facts.
- Every compliance row that the jurisdictions trigger applies, not only .14 to .17: for example .21 (fee disclosure), .22 (license lookup links), .23 and .24 (when they include `nyc`), and .27 (when they include `us-federal`).
- The overlay's UX patterns local-trades.1 to .13 and .26 apply. They forbid, among other things: two filled calls in one view; a sticky bar while another call shows; a slogan H1; an unstaffed "24/7"; a preloader, carousel or autoplay; and a stand-in image captioned as the client's job.
- Add for every call-first page: no hero video, no scroll hijack, no full-viewport hero, no custom cursor. A scroll effect may run only below the fold, on desktop, and short.

A plain page that gets the call beats a striking one that delays it.

**On any task page:** native scroll; no hero video or 3D; nothing animates the H1 or the primary action. A showcase page with motion needs the owner's written approval.

**Operate and Read pages:** the one-filled-primary rule applies per task screen, and the idea may be structural (gate 2).

## Installed skills (optional; at most one design skill per page)

Read a skill's SKILL.md before using it.
- `frontend-design`: its list of generated-design clusters and its "remove one accessory" rule. It names the accent-word-in-headline and all-caps-label tells.
- `design-taste-frontend`, steps 1, 2 and 4 only: subject inventory, argument, idea sentence and competitor test. Do not use its motion floor, its picture floor, or its "sample details" for gaps; facts come only from gate 1.
- `impeccable`, `reference/craft-floor.md` only: the eyebrow ban, cards, browser surfaces, light or dark by the use scene.
- `ui-ux-pro-max`: a lookup for font pairs and palettes, to get off default fonts.
- `awesome-design-md`: references (gate 3), tokens only.
- `landing-page-design`: section-order ideas only; never its people, proof or gradient text.

Do not take these parts of these skills:
- `landing-page-design` and `redesign-existing-projects`: invented names and proof, gradient heading text.
- `high-end-visual-design`: eyebrow pills, a scroll entrance on every element.

## Stitch (optional)

Use this only if the Stitch tools are loaded in this session. You may then draft concept screens for gate 4 with Stitch. A Stitch screen is a draft: rebuild it with `05-tokens.css`, and treat any name, review or number it invents as a placeholder to delete. Use one draft source per page. If the tools are not loaded, skip this section; no gate depends on it.

## Rationalizations

| you think | answer |
|---|---|
| "Keep it quick, no questions" | Run every gate with short prose. Mark the questions ASSUMED or UNKNOWN in about two minutes. The slots and counts stay. |
| "The brief already says everything" | Then gate 1 is a copy of the facts with sources, and it still decides what the page may not show. |
| "A table needs a second row / the section needs a quote" | No fact, no row. Drop the row or use a labelled placeholder. |
| "The safety line is not in the brief, so it is an invented fact" | Overlay-required lines are allowed, marked with their overlay row. Only proof must come from the brief. |
| "I already know the right direction" | Your first direction is the default. Write three; the one you pick may still be your first, with a reason. |
| "Tokens slow me down; I'll tidy the CSS later" | Later never comes, and raw values are how one radius ends up everywhere. Lock first. |
| "The template's numbers are fine" | A copied scale is the same page for every client. Choose the ratio and gaps from the direction. |
| "It looks fine in my head" or "the code is correct" | Code is not the look. Shoot it and read the PNGs, down to the footer. |
| "Screenshots failed, so skip review" | Use `playwright-cli`, or write NOT VIEWED and report it. Never claim you reviewed it. |
| "The audit scored well, ship it" | A self-audit is not independent review. Run the fact audit, the automatic checks and the slop test. |
| "Placeholders are labelled, so it can go live" | A labelled placeholder makes the page a draft. Drafts are not published. |
| "The hero is done, the rest is standard" | Judges look at the whole page. A default form, nav or footer is what they name as generic. Design every Parts row. |
| "I can't invent detail, so the sample stays bare" | Structural detail (axes, states, legend, headings), labelled as a sample, is not a fact. Add it; leave out business claims. States and actions come only from named features. |
| "The hours are this client's most visible fact, so they are the idea" | Every business of the type has hours. The swap test fails. Design them as a part; find the idea elsewhere in the inventory. |
| "The script flags the safety number, so I'll drop the line" | Record it as `overlay-required` and pass `--facts`. Never delete a safety line to pass a check. |
| "A striking hero will win the client" | On a task page, the primary action, speed and accessibility win. |
| "Everyone uses an eyebrow above the H1" | That is why it reads as generated. Put the information in the H1. |

## Red flags: stop and go back a gate

- You are writing HTML and `check-gates.py --upto 5` does not print `ok`.
- A line in `<name>-text.txt` holds a fact that is not in `01-facts.md` or an overlay row.
- The idea still works after the swap test, or it is the client's hours drawn as a strip.
- The accent appears on a heading, a divider or a background panel.
- Two filled primary buttons are visible in one screenshot.
- A lower slice shows a browser-default form, link list or a footer of placeholders.
- Any text is clipped or a component is cut off at the 390 edge.
- A trades page lacks a first-screen line that its overlay requires.
- You are about to write "done" without having opened a PNG, or with a script that printed FAILED.

## Files in this skill

- **Gate 2:** `design-brief-template.md`.
- **Gate 5:** `token-lock-template.css`.
- **Gate 8:** `audit-prompt.md`.
- **Gate 9:** `slop-test.md`, the 15 statements.
- **Other gates:** `templates/`, one template per remaining gate file.
- **`tools/shoot.mjs`:** screenshots, metrics and page text (gate 7). Kept identical to `playbook/design-craft/eval/shoot.mjs`.
- **`tools/auto_checks.py`:** automatic release checks (gate 9). Kept identical to the evaluation copy.
- **`tools/check-gates.py`:** checks the slots, counts, recorded results and the page per gate.
- **`tools/craft.py`:** `contrast`, `raw-colors` and `claims`.
- **`tools/test_tools.py`:** tests for the tools.
