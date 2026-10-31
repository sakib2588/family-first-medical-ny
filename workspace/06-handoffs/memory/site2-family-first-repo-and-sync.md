---
name: site2-family-first-repo-and-sync
description: "Site2 (AIMSS / Family First Medical NY) lives in its own private repo, not uni-planning; where everything is and what is not synced between devices (2026-10-31)"
metadata:
  node_type: memory
  type: project
---

Site2 real-customer site = private repo `sakib2588/family-first-medical-ny` (local: `/mnt/All/Sakib/Website creation/Site2_real_customer/family-first-medical-ny`). Astro 7 + Tailwind 4 home-page design demo for AIMSS. `uni-planning` (the repo at /mnt/All/Sakib) ignores `Website creation/` entirely, and `maskura-group` is an unrelated project. Site1 template/playbook is a separate repo, `sakib2588/site1-lead-sites`.

State as of 2026-10-31: `main` at 923877d. PR #3 added `workspace/` text (analysis, decisions, Site1 digests, handoff docx, tools); PR #4 added ~500 MB of research captures and demo screenshots plus `public/demo/care-visit.webp`. The repo `.gitignore` no longer ignores `workspace/`. The original local `Site2_real_customer/workspace/` folder is now duplicated inside the repo.

Not in git: `node_modules`/`dist`/`.astro` (rebuild), `Site1/Free_Web_Design_Skills.xlsx` (untracked), Site1 `design-lab/*/.env` (deliberately ignored, unread), `~/.claude` rules/agents/settings, and this memory folder. Memory was zipped to `/mnt/All/Sakib/claude-memory.zip` for WhatsApp transfer to the work laptop; unzip into the laptop's `~/.claude/projects/<folder>/`.

**Why:** user works across two devices and wants the laptop to have full context.
**How to apply:** for site work, pull the family-first repo, not uni-planning; offered but not yet done: commit the xlsx to Site1 and zip `~/.claude/rules` + `agents` for the laptop. Auto-mode blocked copying `~/.claude` memory into a pushed repo, so keep memory transfer out-of-band (zip). Related: [[site1-knowledge-digest-for-medical-client]], [[site1-local-business-stack]].
