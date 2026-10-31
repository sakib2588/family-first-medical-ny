#!/usr/bin/env bash
# One-time setup for a fresh environment (cloud session or new PC). Safe to re-run.
set -euo pipefail
cd "$(dirname "$0")/.."
echo "[1/3] site dependencies"; npm ci
echo "[2/3] QA tool dependencies + Chromium"; (cd workspace/tools && npm ci)
# Claude cloud containers block the Playwright browser download but ship Chromium in /opt/pw-browsers.
# qa-pages.mjs finds that browser on its own, so only download when it is missing.
if compgen -G "/opt/pw-browsers/chromium-*/chrome-linux*/chrome" >/dev/null; then
  echo "  using the pre-installed Chromium in /opt/pw-browsers (no download)"
else
  # Non-fatal: the site check in step 3 needs no browser; only qa-pages.mjs does.
  (cd workspace/tools && npx playwright install chromium) || echo "  WARNING: no Chromium; qa-pages.mjs will not run"
fi
echo "[3/3] verify"; npm run check
echo "Ready. Read CLAUDE.md, then workspace/06-handoffs/2026-10-31-session-2-cloud-handoff.md"
