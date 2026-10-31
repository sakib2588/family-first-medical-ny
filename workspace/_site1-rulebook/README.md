# Site1 rulebook (read-only reference copy)

This is a **copy** of the parts of the owner's Site1 knowledge base that this client site needs. The cloud sessions cannot see the Site1 repo, so we put the useful part here. It is reference material: do not edit it, do not build from it blindly.

- Source: private repo `sakib2588/site1-lead-sites` (local: `Website creation/Site1`), commit `76e968c`, copied 2026-10-31.
- Status: written for NYC home-service trades, never validated by a lawyer or a real client. Treat every rule as a strong default, not as law. Launch stays blocked until counsel reviews or the owner records a waiver.
- `workspace/_digests-site1/` holds earlier distilled summaries. When a digest and an original here disagree, the original here wins.

## How to use it (the owner's working method)
Build the site **one page at a time**, mobile first (390 px) and then desktop, in small tasks with a phone screenshot each. For each page, **ask the owner questions first** (grill them), using the modules and kit below as the question source, then build, then screenshot. **AI never deploys or handles secrets**: the owner connects Cloudflare, tokens and any form endpoint.

## Where to look
| Need | File |
|---|---|
| How the playbook works | `playbook/universal/U00-how-to-use.md` |
| Questions to ask the owner or client | `playbook/kit/intake-questionnaire.md`, `content-request.md`, `asset-and-proof-request.md`, `kickoff-checklist.md` |
| Per-topic rules (discovery U02, goals U03, brand U04, proof U05, pages U06, copy U07, conversion U08, design U09-U15, accessibility U16, performance U17, SEO U18, analytics U19, legal U20, security U21, languages U22, QA and launch U23, handoff U24) | `playbook/universal/U*.md` |
| Medical practice rules | `playbook/overlays/vertical/medical-wellness.md` |
| The client is a nonprofit; donate link; charity care | `playbook/overlays/vertical/nonprofits.md`, `model/donations.md` |
| Booking and lead capture | `playbook/overlays/model/booking.md`, `model/lead-gen.md` |
| New York, NYC, US federal law notes (stubs) | `playbook/overlays/jurisdiction/` |
| Questions for counsel | `playbook/counsel_brief.md` |
| Red lines (what we never do), compliance checklist, unverified claims | `wiki/compliance/` |
| Design craft rules, anti-slop guide | `wiki/knowledge/design-rules.md`, `wiki/knowledge/design-craft.md`, `playbook/design-craft/anti-slop-design-guide.md` |
| Design gates 1 to 9 per page (brief, facts, references, concepts, tokens, review, audit, fact-audit, slop test), templates and `check-gates.py` | `playbook/design-craft/site1-design-craft/SKILL.md` and `templates/`; how gates are checked: `playbook/design-craft/eval-README.md` |
| Page architecture, pre-launch checklist, footer and legal notes, SEO and schema, content quality | `wiki/knowledge/` |
| Astro + Cloudflare build spec, domain rules | `wiki/knowledge/astro-cloudflare-build-spec.md`, `domain-rules.md` |
| Sign-off and handoff templates | `playbook/kit/signoff-log.md`, `handoff-pack.md` |

## Medical must-nots (also in `CLAUDE.md`)
No symptoms, history or date of birth in forms without a signed BAA. No ad pixels or session replay on appointment, portal or provider pages. No patient photos without written consent. Never confirm that someone is a patient in a review reply. Check credentials against the state board. Keep any insurance list dated. Never quote vendor conversion statistics (21x lift, 5-minute response, sticky-bar lifts): they are unverified.

## Deliberately left out
Site1's own business material (roofing and HVAC verticals, lead sourcing, outreach, the OpenOutreach audit, competitor teardowns), the Site1 template, demos, PDFs, the course and video source notes, and Site1's logs. Ask the owner if you need any of it.

## Refresh
If Site1 changes, re-copy the same paths from the Site1 repo and update the commit hash above. Do not edit files here by hand.
