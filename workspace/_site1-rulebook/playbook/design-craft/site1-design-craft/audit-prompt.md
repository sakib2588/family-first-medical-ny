# Creative-director audit (gate 8)

Use the prompt below as written. When a helper that did not build the page is available, give it the prompt; otherwise run it on yourself. Attach the latest 390 and 1440 fold tiles and every slice, `02-design-brief.md`, `04-concepts.md` (the chosen direction) and `01-facts.md`. For a one-section restyle without gates 2 to 4, attach `05-tokens.css` and the brief instead. Write the answer into `templates/08-audit.md`, saved as `08-audit.md`.

---

**Prompt**

Act as a creative director who did not build this page and has seen a thousand generated landing pages. The client is [client] and the primary action is [action]. Judge only from the screenshots and the attached brief, direction and facts.

**1. Score each principle 1 to 5**, with the screenshot name and the element as evidence. 1 = generic or broken, 3 = competent but could belong to a competitor, 5 = clearly made for this client.

| # | principle | what earns a 5 |
|---|---|---|
| P1 | Belongs to this client | The idea sentence is visible in the hero and in the lower sections. Cover the name and the page still could not belong to a competitor. |
| P2 | First look | At 390 and 1440 the eye meets the brief's first-look order. The H1 names the offer. One filled primary action. |
| P3 | Typography | A visible pair with real contrast, few sizes with big steps, a comfortable measure, no default body face. |
| P4 | Color roles | One accent, on actions only. Ground, ink and muted are consistent. No new hue per section. |
| P5 | Composition and rhythm | Neighbouring sections differ. Content is ranked, not equal cards. Space inside groups is smaller than between groups. Radius and shadow differ by role. |
| P6 | Honesty and proof | Every fact is in the facts file. Placeholders are labelled. No invented person, number or quote. |
| P7 | Phone design | The phone layout is designed, not stacked: order, sizes and tap targets fit a thumb. |
| P8 | Finish (every part) | The form, navigation, footer, sample components and placeholders are designed, not defaults. No text is clipped and nothing is cut off at 390. |
| P9 | Still screenshot | It looks complete in a still screenshot. Focus, selection and link styles are themed. Nothing is misaligned, clipped or orphaned. |

**Idea diversity:** answer three questions.
- Which inventory item is the page's idea?
- Is it one of the idea defaults (hours, a week or a timeline strip; a labelled sample diagram of the client's operation; the split hero)? If it is, name what in this client's inventory it beats.
- Would another client of this type end up with the same idea? If yes, P1 is at most 3.

**2. Per section:** give REFINE (list the exact changes) or REBUILD (say why the layout cannot carry the content). Name every generic element with its tell number from SKILL.md.

**3. Removal pass:** for each section, name one thing to remove, or one line on why everything stays.

**4. Keep:** the branding the brief pins, every fact, the primary action and its target. Do not add content.

---

## Before/after rule

- Record the score of every principle before any change.
- Apply the changes in one batch, shoot again with `tools/shoot.mjs`, and score again.
- Write a table with these columns: principle | before | change made | after | screenshot.
- A change that lowers any principle, contrast, tap size or the primary action's visibility is reverted.
- Proceed to gate 9 when no principle is below 3 (our convention, not measured).
- If the page is still below 3 after two batches, say so in the file and carry it to the final report.

## Honesty line

End `08-audit.md` with one of these two lines:
- "Self-audit by the builder; not an independent review." (Playbook rule U09.15: the reviewer is not the agent that built the page.)
- "Audit by a helper that did not build the page."

Never quote these scores to a client as an absolute grade. They rank versions of the same page.
