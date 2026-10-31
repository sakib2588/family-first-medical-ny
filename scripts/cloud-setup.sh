#!/usr/bin/env bash
# One-time setup for a fresh environment (cloud session or new PC). Safe to re-run.
set -euo pipefail
cd "$(dirname "$0")/.."
echo "[1/3] site dependencies"; npm ci
echo "[2/3] QA tool dependencies + Chromium"; (cd workspace/tools && npm ci && npx playwright install chromium)
echo "[3/3] verify"; npm run check
echo "Ready. Read CLAUDE.md, then workspace/06-handoffs/2026-10-31-session-2-cloud-handoff.md"
