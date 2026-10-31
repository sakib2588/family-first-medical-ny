---
name: site1-knowledge-digest-for-medical-client
description: "Client AIMSS (aimssfoundation.org, NY 501(c)(3)) is building a SECOND site like familyfirstmedicalny.com (a primary-care/pediatrics practice site) with AIMSS brand colors; Site1 rules/gaps; one-page-at-a-time grilling; repo name family-first-medical-ny is provisional"
metadata:
  node_type: memory
  type: project
  originSessionId: b0ecb4c1-b6d7-4838-be3e-9ff166fa8539
  modified: 2026-10-30T17:21:47.138Z
---

Site1 (`/mnt/All/Sakib/Website creation/Site1`) is the owner's knowledge base for building lead-gen sites; fully analyzed 2026-10-30 by five parallel readers. **Client (owner, 2026-10-31): AIMSS Center for Health Equity, Population Health & Innovation, Inc. (https://aimssfoundation.org/, 501(c)(3), New Hyde Park NY). They plan a SECOND site like https://www.familyfirstmedicalny.com/ (a family medicine + pediatrics practice site); the medical-practice research is the right comparison class. AIMSS's own site only supplies brand colors: indigo #17123a, teal #0e8a8a, gold #d9a02c, cream #faf7ef, lavender #f2eefc (white on brand teal fails AA 4.18:1; use #0b6f6f for buttons).** The new practice name and domain are not set yet. Work lives in sakib2588/family-first-medical-ny (private, name provisional) and Site2_real_customer/workspace. Home demo: mobile first then desktop, stock images OK labelled demo, Astro+Tailwind, micro tasks with a phone screenshot each. Mid-session I briefly mistook the client for a nonprofit-only site; the owner corrected that.

**Why:** user will build the client site one page at a time and wants to be "grilled" with questions per page, using Site1 as the rulebook.

**How to apply:**
- Entry points: `vault/wiki/index.md`, `playbook/universal/U00-how-to-use.md`, `playbook/overlays/vertical/medical-wellness.md` + `model/lead-gen.md` (booking, new-york, us-federal overlays are stubs; nonprofits.md applies only if AIMSS content/donations appear), `playbook/design-craft` (gates 1-9), `playbook/kit/`, `site-template/` (Astro 7 + Tailwind 4; Node 24 at ~/.local/share/node/node-v24.22.1-linux-x64/bin; Cloudflare Workers).
- Everything in Site1 is draft and unvalidated by a lawyer or a real client; vault was written for NYC trades. Launch blocked until counsel review or owner-recorded waiver.
- Medical must-nots: no symptoms/history/DOB in forms without a BAA; no ad pixels/session replay on appointment/portal/provider pages; no patient photos without written consent; never confirm someone is a patient in review replies; credentials checked against the state board; insurance list dated. If AIMSS the nonprofit is the operator, ask about charity-care/sliding-scale wording and any donate link (nonprofits.md, donations.md stub).
- Template guards need at least 5 pages plus / and /contact/, which conflicts with strict one-page-at-a-time; keep stubs or lower limits in a marked commit. AI never deploys; owner runs secrets, migrations, deploy.
- Never quote client-side: vendor conversion stats, 21x/5-minute lift, sticky-bar lifts (all unverified).

**Status 2026-10-31 (end of session):** home page demo (mobile + desktop) built and merged to main of sakib2588/family-first-medical-ny via PR #1 (Astro 7 + Tailwind 4, Fraunces/Figtree, AIMSS palette with teal-deep #0b6f6f for buttons, arch device, sticky Call+Request bar; axe 0 violations at 358/390/768/1024/1280). Working placeholder name "AIMSS Family Health", fictional 555 numbers, Unsplash stand-in photos in public/demo (CREDITS.txt; care-visit.webp not committed: shows an NCI name badge). Research/notes/logs live OUTSIDE git in Site2_real_customer/workspace (owner rule: notes and logs never go to git); registers and design brief in workspace/02-analysis; deferred questions in workspace/03-decisions/deferred-questions.md; client questionnaire (clinic wording, v4 15 questions) in Google Drive + workspace/06-handoffs docx, not yet sent. Open: real practice name, whether AIMSS operates the practice, repo rename, domain. Repo git identity set repo-level (sakib2588 noreply). Tooling: Node 24 path above; workspace/tools has capture.mjs, shot.mjs, qa.mjs (playwright, axe). Avoid rm in commands: the Blast Radius mod prompts and a held prompt times out after 10 min.
