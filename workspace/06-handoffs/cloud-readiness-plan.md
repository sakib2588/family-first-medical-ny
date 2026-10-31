# Cloud readiness plan (2026-10-31)

Question: will a cloud Claude session have what we built up locally? Answer: **no, only what is in the git repo.** A cloud session clones the repo into a fresh machine. It has none of this PC's `~/.claude` folder, no chat history, no installed tools. This file lists what is missing and what we did about it.

## 1. Inventory: what a fresh cloud session lacks

| # | Item | Where it lives now | In the cloud by default? | What we did | Status |
|---|---|---|---|---|---|
| 1 | Conversation history (24 h of decisions) | local transcript files in `~/.claude/projects/` | No | Replaced by handoff notes, `LOG.md` and `03-decisions/`. Transcripts are NOT committed: they contain a pasted ngrok token and personal data | Done |
| 2 | Project guidance (red lines, commands, design rules) | nowhere (repo had no `CLAUDE.md`) | No | Added `CLAUDE.md` at the repo root | Done |
| 3 | Skills (307 local) | `~/.claude/skills/` | No | Copied the 31 that fit this project into `.claude/skills/` (UI, quality, security/health data, the competitor-research pipeline, copy, process). The other ~276 are unrelated (Rust, Kotlin, logistics...) and stay local. All skills came from https://github.com/affaan-m/ECC (commit ef648e0, installed 2026-10-09) | Done |
| 4 | Global rules (coding style, security, testing, git, review) | `~/.claude/rules/ecc/common/` | No | Copied 8 relevant files into `.claude/rules/`. Left out `hooks.md` and `performance.md` (describe local setup only) | Done |
| 5 | Agents and commands | `~/.claude/agents/` (code-reviewer, mle-reviewer), `~/.claude/commands/` (code-review). The `ecc:planner`-style agents named in the rules were never installed on this PC either | No | Copied `code-reviewer` to `.claude/agents/` and `/code-review` to `.claude/commands/`. mle-reviewer left out (ML, not relevant). Full ECC set is public: install it in the cloud from the source above if wanted | Done / optional |
| 6 | Memory notes | `~/.claude/projects/-mnt-All-Sakib/memory/` | No | Site notes now in `workspace/06-handoffs/memory/` (4 files). Unrelated notes (UAV paper review, whisper tooling) stay local on purpose | Done |
| 7 | Logs | `workspace/04-logs/LOG.md` (in git) but had no entries for session 2 | Yes, but stale | Appended session 2 entries | Done |
| 8 | Handoff notes | `workspace/06-handoffs/` | Yes | Session 2 cloud handoff already on `main` | Done |
| 9 | Dependencies and browser (node_modules, Playwright Chromium) | local only | No | `scripts/cloud-setup.sh` installs everything and runs `npm run check` | Done (untested in a real cloud env) |
| 10 | QA tooling | `workspace/tools/qa-pages.mjs` (in git) | Yes, needs item 9 | Covered by the setup script | Done |
| 11 | Permission allowlist (so common commands do not prompt) | `~/.claude/settings.json` | No | **Blocked:** the permission checker refused to let me create `.claude/settings.json`. Suggested content below; the owner must add it | OWNER ACTION |
| 12 | Plugins (savvy-progress, blast-radius, replay-theater, reflect-mod, cache-tax, token-weather) | local plugins | No | Not needed for this project. Skipped | Skipped |
| 13 | MCP connectors (Notion, Google Drive/Docs, Canva, n8n, Cloudflare, Supabase...) | claude.ai account | Probably, if enabled for the account | Owner to confirm in the cloud session settings | OWNER CHECK |
| 14 | `impeccable` design-critique tool (used for the 25/36 critique) | was run on the laptop; not installed on this PC, package name unconfirmed | No | Critique result is saved in `02-analysis/design-critique-mobile-home-2026-10-31.md`. Re-run only if the owner supplies the package | Known gap |
| 15 | ngrok, dev server, auth token | local | No | Replaced by a public Cloudflare Pages deploy (owner decision 2026-10-31, see handoff "Sharing the site"). ngrok is optional and local only. The token must never be committed; rotate it | OWNER ACTION |
| 15b | Live share link for other people | none yet | No | Cloud agent sets up Cloudflare Pages per the handoff; owner connects the repo once in the Cloudflare dashboard | OPEN |
| 16 | Site1 vault (source of the digests) | `Website creation/Site1/vault` and repo `sakib2588/site1-lead-sites` | No | Distilled digests A to E already in `workspace/_digests-site1/` | Done |
| 17 | Client facts, photos, questionnaire | client (not received) | n/a | Listed in the handoff. Questionnaire is in `06-handoffs/` and still unsent | Open |
| 18 | Git identity | repo config here | No | `CLAUDE.md` states it. Cloud must set `user.email` to the noreply address | Done |

## 2. Owner actions (cannot be done from inside the repo)
1. **Rotate the ngrok auth token** (it was pasted in chat): dashboard.ngrok.com.
2. **Install the permission allowlist** (fewer prompts in the cloud). The permission checker would not let me create `.claude/settings.json` myself, so the content is in `workspace/06-handoffs/suggested-claude-settings.json`. Run once in the repo root: `! cp workspace/06-handoffs/suggested-claude-settings.json .claude/settings.json` and commit it. Review it first: it only allows npm, astro and read-only git/gh commands.
3. **Confirm in the cloud environment**: GitHub access to this private repo, the setup command (`bash scripts/cloud-setup.sh`), and which connectors are on.
4. **Decide** whether to install the full ECC set in the cloud (item 5) or keep the minimal one we ship.

## 3. First message to give the cloud session
> Read CLAUDE.md, then workspace/06-handoffs/2026-10-31-session-2-cloud-handoff.md and cloud-readiness-plan.md. Run `bash scripts/cloud-setup.sh`. Then continue with the "Can do without the client" list in the handoff.

## 4. How to verify the cloud session is truly ready
- It can state the red lines from memory of `CLAUDE.md` (no trackers, no invented reviews, no PHI in the form).
- `npm run check` passes (17 pages).
- It lists the skills under `.claude/skills/` when asked.
- It uses the noreply git identity on its first commit.
