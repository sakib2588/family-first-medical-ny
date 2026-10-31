# Site2 workspace (tracked in git)

Everything that is not shipping code lives here. As of 2026-10-31 the owner decided to keep `workspace/` in git (about 500 MB of captures, logs and screenshots). Do not rewrite history or force-push to shrink it. `tools/node_modules` stays ignored.

| Folder | Holds |
|---|---|
| `00-inbox/` | Raw things the owner drops in (client messages, files). Triage out, never edit in place. |
| `01-research/sites/<slug>/` | One folder per reference site: `phone/`, `desktop/`, `html/`, `notes.md` (flaws, strengths), `meta.json`. |
| `01-research/legal/<slug>/` | That site's footer, privacy, terms and other policy pages: raw capture + `analysis.md`. Analysis only; never reuse their wording. |
| `02-analysis/` | Cross-site work: scoring matrix, flaw register, strength register, improvement list, per-page-type findings. |
| `03-decisions/` | Owner decisions, dated (one line each + why). |
| `04-logs/` | `LOG.md` (append-only, dated) and per-session logs. |
| `05-assets/` | Client-supplied logos, photos, copy. |
| `06-handoffs/` | Resume notes when a session ends. |
| `tools/` | Capture scripts + node_modules. Throwaway, rebuildable. |
| `_site1-rulebook/` | Read-only copy of the useful parts of the owner's Site1 playbook and vault (question kits, modules, overlays, red lines, design gates). Start at its README. |
| `_digests-site1/` | Distilled rules from Site1 (A vault, B universal, C overlays, D research/edge cases, E build). |

Rules: dates are absolute (YYYY-MM-DD). Every research step is logged in `04-logs/LOG.md` with tool, parameters, and result. Claims from sites are unverified until checked. Analysis notes never copy competitor text.
