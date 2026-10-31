# Premium upgrade plan for Home (from breakdowns A and B, 2026-10-31)

Sources: `premium-breakdown-A.md` (Cassia, Little Otter, Grand Street, TejoMed, Bluebird) and `premium-breakdown-B.md` (Cityblock, Rock, Camp Little Tooth, ORAL, SF). Both breakdowns judged Home pages only (other pages are known from nav links). Measurements are estimates from screenshots and saved HTML. Nothing is built yet: the owner answers the questions first.

## What the ten sites tell us
- **Home length:** their Homes have 8 to 20 sections (median about 14) and run 5,400 to 9,900 px on phone. Ours has 13 sections and runs 11,581 px. Most of the excess is the two full weeks of hours in the office cards (the offices band alone is about 2,300 px).
- **Order:** the best sites put insurance high (2nd at Little Otter and Bluebird; ours is 8th) and show a phone number in the first screen (ours does not).
- **Proof:** premium means proof as data (rating with count and date, licence), never adjectives.
- **Motion:** the calmest sites barely move (TejoMed, Cityblock, SF). Scroll reveals leave blank areas (Little Otter, Bluebird, ORAL). Pop-ups, parallax and autoplay are the clearest failures.

## Ranked upgrades (both agents agree unless noted)
| # | Upgrade | Where | Effort | Needs client fact |
|---|---|---|---|---|
| 1 | Tappable office numbers in the phone fold, as text links under the gold button | `Hero.astro` | S | no (numbers are in `practice.ts`) |
| 2 | "Sick today?" lists both offices with open-now status and a tap-to-call number | `Visits.astro` | S | no |
| 3 | Grouped hours on Home ("Mon to Fri 9 AM to 6 PM", today marked); the full week moves to the location pages. Saves about 1,000 px | `Locations.astro` | S | no |
| 4 | Insurance moves up: an insurance line in the hero fact row, and the section moves to 3rd. Medicaid and Child Health Plus first, then the dated plan list, plans not taken, and self-pay | `FactRow`, `Insurance`, order | M | yes (dated plan list) |
| 5 | A dated Google rating per office in the fact row and the reviews section, as a slot. No stars graphic and no AggregateRating markup | `FactRow`, `Reviews` | S | yes |
| 6 | Doctor cards person-first: which days at which office; credentials fold into a disclosure on phone | `DoctorCards.astro` | M | yes (schedule) |
| 7 | Menu as a full-height dialog with both office numbers and language help; desktop gets a thin, non-sticky utility row with both numbers and open status | `Header.astro` | M | no |
| 8 | A two-question visit picker that ends in the request or a call (A only; B prefers the current split) | `Visits.astro` | M | no |
| 9 | Captioned office photos at different sizes (when real photos arrive) | `Inside.astro` | S | yes (photos) |
| 10 | A self-drawn line map linking the two offices (B only; no embedded map) | `Locations.astro` | M | no |

## Motion plan (CSS only, `transform` and `opacity` only, reduced motion = none)
Tokens: 150 ms press, 220 ms state change, one signature moment of at most 500 ms. Never animated: the H1, the gold button, the hero photos, the form. Content never starts hidden.
1. Press feedback on buttons and links (exists).
2. Call dialog and menu: fade and slight rise on open (`@starting-style`).
3. FAQ answers: height and opacity on open (`details`, `interpolate-size`).
4. Sticky bar: slide up when it appears (exists; tune to the tokens).
5. Arrow nudge on hover and focus only.
6. Today's hours row: tint fades in once.
7. **Signature moment (pick one):** A proposes a growing line down the "Care by age" rows as the section enters view; B proposes a line drawing between the two offices on the map. Recommended: the Care by age line, because it needs no new section.

## Questions for the owner
1. Build upgrades 1 to 7 now, in that order, one at a time with a phone screenshot each? (Recommended: yes.)
2. Grouped hours on Home, with the full week on each location page? (Recommended: yes.)
3. Move insurance up to 3rd and add it to the fact row? (Recommended: yes.)
4. Visit picker (8) and line map (10): skip for now? (Recommended: skip both, revisit after real content.)
5. Signature motion: the Care by age line? (Recommended: yes.)
