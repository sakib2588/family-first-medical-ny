# Decision: Home colour system and hero, round 2

**Date**: 2026-10-31
**Status**: accepted (owner feedback with phone screenshots; final look approved in PR #18)
**Deciders**: owner (Sharif), cloud session

## Context
Owner reviewed the live demo on a phone and sent screenshots. Three points:
1. The competitor (familyfirstmedicalny.com) hero is stronger: real doctor faces in the first screen.
2. Use a better colour combination. The owner's reference demos each use three colours with clear jobs: one dark base, one bright accent, one punchy action colour.
3. Flaws: the "Meet our doctors" pill was clipped (already removed in PR #18), and the office hours wrap ("9 AM to / 6 PM") at phone widths.
Our Home used five colours with no clear jobs: cream and lavender alternated as section grounds, and teal, gold and indigo all appeared as accents. It read washed out. `home-demo-direction.md` said "not a cinematic dark hero".

## Decision
Three colours, each with one job, all from the AIMSS palette. Cream and white are neutrals.
| Role | Colour | Where |
|---|---|---|
| Dark base | indigo `#17123a` | hero, offices band, footer |
| Bright accent | aqua `#5fc4c4` (new token; the logo's teal) | accent words and icons on indigo only (8.6:1) |
| Action | gold `#d9a02c` with indigo text on indigo grounds (7.61:1); teal-deep `#0b6f6f` with white text on light grounds (5.97:1) | the one filled button per screen |

- Lavender is no longer a section ground on Home. Light sections alternate cream and white.
- The hero is indigo, with the two doctors' photos and name cards in it. The separate "Meet the doctors" section is dropped so the faces do not repeat.
- Name cards show the name, role and ages only. No "board-certified" or other credentials until they are checked (red line).
- Office hours never break inside a time range.
- This replaces the "not a cinematic dark hero" line in `home-demo-direction.md` for Home. The hero stays calm: flat indigo, no gradient, no photo overlay.

## Alternatives considered
- **Keep the light hero, add doctor photos.** Least change, but it keeps the five-colour wash the owner flagged. Rejected.
- **Copy the competitor's layout** (photo background, cut-out doctors, red action). Rejected: we never copy the base site, and its photo hero was the slowest part of its page (LCP 11 s).
- **Teal button on the indigo hero.** It reads muddy (2.97:1 against indigo). Rejected in favour of gold.

## Consequences
- Positive: the first screen shows who you will see. One colour per job. Fewer colours on Home. The footer's raw logo-teal becomes a token.
- Negative: the action colour depends on the ground (gold on dark, teal on light). This is documented in `global.css`.
- Risk: inner pages still use lavender. Align them page by page when each page gets its question round (owner method).
