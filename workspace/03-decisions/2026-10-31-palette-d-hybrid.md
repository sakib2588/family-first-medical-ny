# Decision: palette and hero style "D hybrid" (AIMSS foundation look)

**Date**: 2026-10-31 · **Status**: accepted (owner: "D hybrid, go build it") · **Deciders**: owner

## Context
The owner likes aimssfoundation.org (the parent organisation) and asked for a better colour foundation. Options A, B, C and D are in `02-analysis/palette-research-2026-10-31.md`, with previews in `04-logs/home-demo/palette-option*.png`.

## Decision
- Keep the AIMSS colours: indigo #17123a, teal-deep #0b6f6f, gold #d9a02c, cream #faf7ef, aqua #5fc4c4 (on indigo only).
- **Hero background:** a vertical gradient from indigo to deep teal, as on the AIMSS site. It is brief-pinned as parent-brand consistency, and it is the only gradient on the page. No gradient text, no glow.
- **Pulse-line motif** (from the AIMSS logo): a thin gold line behind the hero at about 35% opacity. Decorative, `aria-hidden`.
- **One gold underline** under one H1 word as the brand mark. No coloured headline words.
- **Hero action:** solid gold "Request a visit" with indigo text (7.61:1). The secondary action is an outlined white pill.
- **Light grounds:** the action is a teal-deep pill (a teal-to-indigo gradient fill is allowed on light grounds only; white text stays at least 5.9:1 over the whole gradient).
- **Gold arch frame** around the hero doctor photos (2 px outline): part of the AIMSS brand look, brief-pinned like the underline. No other decorative accent colour.
- **Not copied:** their tracked-caps eyebrow pill and their two-colour headline.

## Consequences
- Gate 9 item 10 has one documented exception (the hero background, brief-pinned).
- The clinic reads as part of the AIMSS family.
- This supersedes the hero colour line of `2026-10-31-home-colour-and-hero.md`; its other rules stay.
