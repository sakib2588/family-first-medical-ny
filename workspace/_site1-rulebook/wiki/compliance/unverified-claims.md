---
title: Unverified practitioner claims (do not quote)
type: compliance
status: stable
updated: 2026-10-29
---

# Unverified practitioner claims

Each is a single self-reported anecdote from a course speaker or community member. Useful for planning ranges, never for a sales deck or client promise. (MASTER_REPORT §6.)

- "62 microsites, 224 validated leads, $84 build-out, $4.65/mo, 164% cumulative ROI, 733%/mo carrying ROI" (B06 F09).
- "About 20% of microsites produce leads" (CV01 F04) and "sites cook 3-6 months".
- "$500,000 job, $28,000 commission" on pay-per-job (B11 F08).
- "$1,000,000 lead sold for $150" (B11 F09).
- "Claude-Code-built site worth $20-30k sold for $5,000 in 2 hours" (B11 F02).
- "$300-$1,000/month per microsite, 3-10 calls a month" (B11 F09).
- "$8 per lead, 30 clients in 30 days" from Facebook ads (B05 F02).
- "47% traffic increase from internal-link redistribution" (B09 F12).
- Plano plumber "rank 17 to 2.35 in two weeks, $50,000 revenue" (B09 F04).
- "Lead-gen tools cost $8-15/month per site; 50 sites about $400/mo" (B11 F09).
- AI-generated GBP flyer images cause suspension (speaker's theory, CV02 F06).
- "Google formalized an Open Knowledge Format in June 2026" (B11 F05, check before repeating).
- Cloudflare Workers "free up to about 70,000-100,000 visits per month" (B12 F01) is misframed. Per Cloudflare docs (W:R5 8.3): static asset requests are free and unlimited; the 100,000-per-day Free limit applies only to Worker invocations (form or SSR code).
- R2 "10 GB free, no egress fee, $0.015/GB-month" (B12 F12): **confirmed 2026-10-29** on developers.cloudflare.com/r2/pricing (Standard storage, 10 GB-month, 1M Class A and 10M Class B operations free; direct egress free). Image transformations "5,000 unique per month free, $0.50 per 1,000 after": confirmed again on developers.cloudflare.com/images/pricing (images stored outside Cloudflare Images, such as R2, count toward the same allowance), **with a plan condition** (re-read 2026-10-29): the $0.50 per 1,000 overage is billed only on the Images Paid plan; on the Free plan, new transformations past 5,000 "return a `9422` error" while cached ones keep serving. Default to build-time image processing ([[design-rules]] I4).
- Cloudflare **Polish** as a free image optimizer (B12): **wrong for us.** Polish is on Pro, Business and Enterprise only, not Free (developers.cloudflare.com/images/polish, 2026-10-29). Whether it applies to Workers static assets is not stated; do not rely on it.
- "Authority Hacker made 11 concepts before choosing" and "$100K agency quality" framing (B12 F04, F23): marketing, not a result.

- "Respond within 5 minutes or you are 21x less likely to qualify the lead": misquoted almost everywhere. The 2007 InsideSales/MIT study measured B2B rep callbacks on web leads (qualify odds, 5 versus 30 minutes), "did not address close ratios" and is not about home services (W:R4 2.1). Use 5 minutes as an operating target only.
- Vendor home-services figures: human answer rate 52 percent, HVAC 34 percent (Invoca); forms 78 percent and calls 22 percent of conversions (Ruler Analytics); 4.87 percent average conversion (Ruler); 2.6 percent median (Unbounce) (W:R4 1, 2.3). All vendor claims, sample sizes undisclosed.
- "Click-to-call lifts of 20 to 250 percent" for sticky bars: agency blogs, no rigorous home-service test (W:R4 3.2).

- Sticky-call and landing-page stats from agencies (Webtonic, redefineweb, clicksgeek, 2026): "87% of top roofing sites had a fixed mobile call button vs 19% of weak ones", "sticky CTAs lift booked calls 15-40%", "mobile conversion lags desktop by 30-44%", "trust badges near the button +12.6%", "mobile LCP averages 9.76 s on home-service Facebook landing pages". Correlational or unsourced; searched 2026-10-29, no primary data found.
- Form length: "3 fields 25%, 3-5 fields 20%, 6+ fields 15%", a roofing table "18% / 9% / 4%", a roofer "7 to 3 fields, +40%". All vendor or anecdote, no named data. Direction (fewer fields) is consistent, magnitude is not.
- Google click-to-call: "70% of mobile searchers have used click to call", "+8% click-through with a phone number in ads" are 2014 Think with Google figures. Old; recheck before quoting.
- NN/g numbers: concise/scannable/objective web text scored +58% / +47% / +27% / +124% combined (Morkes and Nielsen, 1997, small test of one site); 79% of users scan (same family of studies); "57% of viewing time above the fold, 74% in the first two screens" (2018 eyetracking, quoted second-hand). Use as direction, not as quotes. Baymard checkout field counts differ by source (about 11 to 15 fields); not re-verified.
- A "2.0 s LCP target in 2026" claim: not on web.dev. web.dev thresholds are LCP 2.5 s, INP 200 ms, CLS 0.1 at the 75th percentile (read 2026-10-29).

When we have our own numbers (leads per site, cost per lead, close rate), replace these.

## Tutorial-video claims (added 2026-10-30)

The 23 tutorial videos in [[video-design-notes]] contain 43 speaker claims about income, price, speed, results, dark-mode or serif-trust statistics and one legal point (AI output is free to sell; counsel review needed). They are listed in full, with video id and timestamp, under "Claims" in `playbook/_research/R13-parts/candidates.md`. All are unverified: none was checked against a source, none is a rule, and none goes into a client deck. They are not copied here to avoid a second list drifting; this entry points to that one list.
