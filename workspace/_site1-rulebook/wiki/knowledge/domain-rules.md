---
title: Domain rules for microsites
type: knowledge
status: stable
updated: 2026-10-23
---

# Domain rules for microsites

From B06 F03. Applies to **microsites**, not to client sites that already have a brand.

1. `.com` only.
2. **Exact match** `[service][location].com` (e.g. `septiccleaningstlouis.com`). A branded name holds little value in this method.
3. Vary sites by location or intent, never by word order. `PlumbersHouston.com` and `HoustonPlumbers.com` are one site bought twice.
4. One intent and one geographic footprint per site.
5. Swap word order only if the preferred version is taken.

Register at Cloudflare Registrar (at cost, about $10/yr, no renewal markup) or Porkbun. Avoid cheap-first-year registrars whose renewal jumps.

For client sites: the domain must be registered to the client, with registrar lock, MFA and auto-renew (kit file 05, R05-010/011).

Footprint rules when running several sites: do not interlink them, do not tie them to one Search Console account, vary hosting or hide origin with a WAF (B06 F18). Note: this is the course's risk-avoidance advice. Treat "no cross-linking" as the part to follow; see [[red-lines]] for what we will not do to disguise a network.

Related: [[niche-and-location-selection]]
