# Session handoff: 2026-10-31

## Start here on the PC
1. Get the code. Fetch, then check out the findings branch: `git fetch origin` and `git checkout worktree-workspace-findings-2026-10-31` (draft PR #5). After PR #5 is merged, use `git checkout main` and `git pull` instead.
2. Set up the site. Use Node 24 (see `.nvmrc`), then run `npm install`, `npm run dev` (http://localhost:4321) and `npm run build`. The laptop built cleanly on Node 26 too.
3. Set the git identity for this repo on the PC. The repo config on the laptop has the AIUB address, which the global rules forbid for commits. Check `git config user.email`, then set `sakib2588` and `153538974+sakib2588@users.noreply.github.com`.
4. Read the notes in this order: this file, then `02-analysis/design-critique-mobile-home-2026-10-31.md`, then `03-decisions/`.
5. Memory: the laptop's Claude memory folder for this project was empty. The site notes are in `06-handoffs/memory/`. The other-projects notes (`claude-memory.zip`) exist only on the laptop, not in git.
6. If the PC already has its own copy of `workspace/`, keep it. Do not overwrite it from git.
7. Do not rewrite history or force-push. The open decisions are below.

## Repo state
- Repo: sakib2588/family-first-medical-ny (private on GitHub).
- `main` was at 923877d (PR #4 merged) when this branch was cut. The local checkout was fast-forwarded to match.
- Site: Astro 7 + Tailwind 4 static home demo. `npm run build` completed on 2026-10-31. Output went to a temp folder and was not checked visually.
- This branch adds research and notes only. It changes no site code.

## Design status
Source: the mobile critique dated 2026-10-31 (`02-analysis/design-critique-mobile-home-2026-10-31.md`, score 25/36 at 390 px), checked against the current code. Not re-checked visually on a phone.

Fixed in code since the critique:
- Locations: filled Call button. Directions now opens a Google Maps search, not a link to `#locations`.
- Insurance: "Check your plan" card present.
- Services: filter pills. Ages: age-range rows.

Still open:
- Photos: stand-in Unsplash images in mixed treatments. Needs one treatment, then real photos with written consent.
- Trust layer: none yet. The hero proof strip and "Open today until 6 PM" are sample copy, not confirmed facts. Do not replace them with invented reviews.
- Doctor portraits repeat in the "Meet our doctors" pill and the Doctors section.
- About band: indigo overlay on the hands photo. Not checked against the critique's "dark, low information" note.

## Client facts still needed
From the 2026-10-31 site notes (`06-handoffs/memory/`):
- Practice name and domain. "AIMSS Family Health" and the 555 numbers are placeholders.
- Whether AIMSS operates the practice (AIMSS is a 501(c)(3)).
- Real photos, with written consent for any patient photo.
- A dated insurance list, and charity-care or sliding-scale wording if it applies.
- The client questionnaire (`Family-First-Medical-Client-Questions.docx`, this folder). Not yet sent.

## Open decisions for the owner (resolved 2026-10-31: 1 keep workspace/ in git, 2 remove care-visit.webp, 3 READMEs fixed)
1. **`workspace/` is in git.** Its README says "local only, never in git". It was committed in 543e8df and 8c70502: about 526 MB of captures, logs and screenshots. Decide whether to keep it or untrack it and keep it local. Rewriting history needs explicit approval.
2. **`public/demo/care-visit.webp`** (added in 8c70502) shows a clinician with a "National Cancer Institute" badge. No site code uses it, but it ships in the build from `public/`. Recommend removing it from the tree.
3. **READMEs are out of date.** Root `README.md` now says screenshots and raw logs are kept off-repo, which the committed folders contradict. `workspace/README.md` still says "never in git".

## Git identity
The repo-level `user.email` is the AIUB address, which the global rules say never to use for commits. The commits on this branch used the sakib2588 noreply identity through environment variables. The repo config was not changed.

## Left out on purpose
- `claude-memory.zip` in the repo root (untracked). It also holds notes for other projects: a collaborator's UAV paper review, whisper tooling, and a tool quirk. Only the two site notes were copied here.
- `.claude/` and `.impeccable/`, except the critique. These are local tool state.
- The original WhatsApp zip stays where it was. A copy is in `01-research/reference-screens/`.

## Next steps
- Review and merge the draft PR, then `git pull` on the PC.
- Decide the three open items above.
- Send the client questionnaire once you're ready.
