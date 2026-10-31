# Decision: Home layout round 3, built from the competitor teardown

**Date**: 2026-10-31
**Status**: accepted (owner, relaying the client)
**Deciders**: client (WhatsApp, relayed by the owner), owner (Sharif)

## Context
- The client, on WhatsApp: "Take your time but create a standout website." The client pointed to familyfirstmedicalny.com ("This one").
- The owner's plan, which the client agreed to: "breaking their layout, adding one piece at a time."
- The client also said: "Work on design, later on we can change info." When the owner asked "should I work on content?", the client answered: "Yes plz work on layout and design."
- The owner said: "use the counsel ... do what they recommend". Read as: follow the recommendations in `02-analysis/competitor-teardown-2026-10-31.md`.

## Decision
Build the teardown's layout now. Real information comes later.
The six teardown questions take their recommended defaults, because the client's answer settles them:
1. Every trust fact on the demo shows a labelled **fact slot** (`[… to confirm]`) until the client confirms it. The live site shows confirmed facts only. This updates the Home round-1 decision #5 ("no proof strip"): the strip comes back, as slots, never as invented values.
2. Doctor detail cards use a small arch portrait; the large faces stay in the hero.
3. Photos: named empty frames until the client sends real photos (never stock).
4. Reviews: a slot for a link to each office's Google profile only; no quotes until permission and source links exist.
5. "Why one practice": dropped until at least two documented reasons exist.
6. New phone order: hero (with fact row), what brings you in, offices, care by age, doctors, inside each office, reviews, insurance, common questions, request, footer. The closing band after the form is hidden on Home.

## Alternatives considered
- **Wait for client facts before building the layout.** Rejected: the client asked for layout and design first.
- **Fill the slots with plausible sample values** ("Board-certified", "25+ years"). Rejected: red line in CLAUDE.md and Gate 9 item 1.
- **Copy the competitor's layout one to one.** Rejected: the rulebook forbids cloning. We take their structure, not their layout, wording or images.

## Consequences
- Positive: the client sees exactly which facts and photos are needed, in place.
- Negative: the demo shows more `[to confirm]` text until facts arrive.
- Risk: slots can read as unfinished (Gate 9 items 3 and 15). Mitigation: one quiet slot style (muted, in brackets, in a dashed frame for photos), named for what is needed.
