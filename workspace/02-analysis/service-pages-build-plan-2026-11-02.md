# Build plan v2: dedicated pages for every service (2026-11-02)

Sources: Local_SEO_Domination_Playbook_v6.md (5.1, 5.4, 13.2, 13.8-13.11, 15.6, 15.7, C.3); the SEO plan (`seo-plan-2026-11-02.md`, branch docs/seo-plan, PR #62); two independent reviews of v1 (playbook compliance, code and red lines); competitor research on service pages from the owner's dashboard (section 11, added when the research agents report). Owner decision: every service gets its own page, nested URLs. Branch `feat/service-pages`. Nothing is built yet.

## What the reviews changed (v1 -> v2)
| # | Finding | Change |
|---|---|---|
| 1 | `practice.demo` is already `false` and the public workers.dev site is the "presentation build": any `sample()` text would go PUBLIC with no doctor review (code reviewer, HIGH) | Draft/sample text is shown only when `PUBLIC_DRAFT_CONTENT=1` (local and preview builds). The Cloudflare production build never sets it, so production shows only fact-derived content. The "SEO_LAUNCH" switch is dropped. |
| 2 | "Request a callback" does not match ActionPair / OfficeCard ("Request a visit") (code, HIGH) | Reuse ActionPair unchanged. Wording consistency across the whole site (visit vs callback) is a separate task. |
| 3 | "When to call us" and "What a visit includes" make medical claims (code, HIGH) | `callIf` = ONE fixed line on every page ("In an emergency, call 911. To book or ask a question, call the office."), not a Fact. `expect` stays null (hidden) until a doctor writes it; never pre-written as sample(). |
| 4 | Both cities in every title and H1 cannibalise Home, categories and the location pages; Elmhurst (Queens) and Hicksville (Nassau) are separate markets; 13.8 says one profile per location page and Home represents ONE profile (SEO reviewer, HIGH) | Title/H1 geo is an OPEN OWNER DECISION (D1). Default until decided: no geo in the title ("{Service} for {audience} \| AIMSS Family Health"); geo lives in the office blocks and the location pages. If the owner picks a primary office: that city only. |
| 5 | Short brand "AIMSS" breaks the one-exact-name rule (15.7); 13.11 asks 50-60 characters, not 40-60 | Full brand on every title, padded with a plain descriptor; script checks 50-60. |
| 6 | Only block links, no editorial in-sentence links; breadcrumb uses up the first link to the category (13.9) | One in-sentence link to the category and one to a sibling inside the answer/who-for text, with different anchors from the breadcrumb; Home gets one 50-100 word block per category; category list anchors = service name only. |
| 7 | 30% shared-sentence test is too weak for templated text | Strip the service name, compare 5-word shingles, fail above 15%; every page needs one page-specific fact (which doctor, which offices, ages seen); a page with none is merged into its category. |
| 8 | Build order backwards (5.4, 13.10: categories first, no bulk publishing) | Demo may hold all pages as noindex, but the LAUNCH releases 2 category pages + 2-3 reviewed services, then small batches. |
| 9 | 200-250 word floor contradicts 15.6 (no word target; match the SERP) | No word floor. Required: answer block (40-50 words), named reviewer + date once reviewed, then match the real SERP length at launch. |
| 10 | Content gaps (15.6, 13.10): H2s must be question-shaped and repeat the subject; 1 outbound link per 1,000 words to a high-trust source; credentials conflict with red line | Question-shaped H2s naming the service; CDC / NYS DOH link on vaccine and screening pages (check `npm run check` allows outbound anchors); reviewer shown as name + date only, no credentials. |
| 11 | Schema undecided (13.2, 15.7) | Decided now: LocalBusiness/MedicalClinic only on each office's landing page, one node per office with its own @id, none on service pages; Person nodes for doctors with worksFor; no BreadcrumbList (< 50-100 pages). Built later, from confirmed facts only. |
| 12 | Pages do not yet mirror a GBP services list (13.8) | Client confirms the GBP services list before launch; the 10 are provisional. |
| 13 | robots Disallow hides the noindex from Google (13.11.2) | At launch remove BOTH together. |
| 14 | Slug/Fact model gaps; qa-pages path list is hard-coded; PageHead eyebrow duplicates; OfficeCard heading level; chip targets (code) | Slug function strips apostrophes + collision test; `doctor` derived from the group; one shared category map (also used by Services.astro); qa-pages paths generated from services.ts; explicit eyebrow; OfficeCard under an H2; chips `min-h-11`. |
| 15 | Titles/descriptions and the check script should come BEFORE the pages | Task order changed. |

## 1. Scope
In: 2 category pages, 10 service pages, internal links, titles/descriptions on all pages, the SEO check script. Out (later): About page, JSON-LD, canonical/sitemap/OG (need the domain), supporting articles, GBP. Site stays `noindex` + robots Disallow.

## 2. Page inventory (12 new pages)
| URL | H1 | Parent |
|---|---|---|
| /pediatrics | Pediatric care for babies, children and teens | Home |
| /family-medicine | Family medicine for teens and adults | Home |
| /pediatrics/newborn-care, /well-child-visits, /vaccines, /developmental-screening, /school-and-sports-physicals, /teen-health | the service name | /pediatrics |
| /family-medicine/annual-physicals, /chronic-condition-care, /womens-health, /preventive-screenings | the service name | /family-medicine |
Title formula (decision D1 pending): `{Service} {descriptor} | AIMSS Family Health`, 50-60 characters, descriptor written per page (never filler). Description 150-160 characters, unique, built from facts only (service one-liner, the doctor, "two offices", "call or request a visit"). Existing pages get the same treatment.
One URL = one query group. Home must not reuse a service page's target phrase. No service x town pages (C.3, U18.14).

## 3. Data model (single source of truth)
New `src/data/services.ts` built FROM `serviceGroups` (names, one-liners, doctor via the group):
```
Category { slug; groupId; title }   // one shared map, also imported by Services.astro
Service  { slug (apostrophes stripped, collision-tested); name; category; line; 
           answer: Fact<string>      // 40-50 words, answer first
           whoFor: Fact<string>
           expect: Fact<readonly string[]>   // null until a doctor writes it
           reviewed: Fact<string> }          // "Dr. Name, date"; null = no "Reviewed by" line
```
Draft `answer`/`whoFor` are created with `sample()` and only render when `PUBLIC_DRAFT_CONTENT=1`; confirmed text sets source + checkedOn and always renders. Without draft text, a service page still has the fact-derived answer built from the one-liner, the doctor and the offices (no medical claims).

## 4. Templates (Astro, same shell as doctors/locations)
`src/pages/pediatrics/index.astro`, `src/pages/family-medicine/index.astro` (explicit, so no clash with the dynamic route) and `src/pages/[category]/[service].astro` (getStaticPaths limited to the two categories). Service page, top to bottom: breadcrumb (PageHead, explicit eyebrow) -> H1 -> answer block -> "Who is {service} for?" -> "What does a {service} visit include?" (only when `expect` exists) -> doctor card -> "Where can I get {service}?" (H2 over both OfficeCards) -> related services -> fixed line (911 + call the office) -> ActionPair -> "Reviewed by" line only when `reviewed` exists. Null Facts render nothing.

## 5. Content rules (13.10, medical-wellness.5, red lines)
Allowed sources: what the site already says + a plain-language description of what the service is. No prices, no numbers of weeks/months/ages/schedules, no outcome or comparison words, no "same-day", no insurance, no accepting-new-patients, no credentials, no symptom advice. The form stays contact-info only. Banned phrases (13.10) enforced by script. Doctors approve every sentence before launch; the AI draft is only a draft (13.10 gate: fact check, 20-30% human edit).

## 6. Internal links (13.9)
Home Services: card name -> service page; one 50-100 word block per category with an in-sentence link. Category page: service names as anchors. Service page: one in-sentence link to the category and one to a sibling (anchors different from the breadcrumb), doctor, both offices. Doctor care-area chips link to the service pages (44 px). Location pages list their services. Footer unchanged (no service list). Every page within 2 clicks of Home.

## 7. Gates (`workspace/tools/seo-check.mjs` on dist; qa-pages paths generated from services.ts)
One H1; unique title 50-60 and description 150-160; breadcrumb; links to both offices and the doctor; >= 3 inbound internal links; banned phrases; no digits in the text sections (office cards excluded); 5-word-shingle duplication <= 15% after stripping the service name; one page-specific fact per page. Plus `npm run check`, qa-pages (overflow, 44 px, Escape), axe 0 at 390 and 1280, code-reviewer on each diff, red-line re-read. Launch gate: `npm run check` fails if any service page is indexable (noindex removed) while a service Fact is still `sample()` or `reviewed` is null.

## 8. Task list (one task = one commit; the owner sees the FIRST service page before the other nine)
1. `services.ts`, slug test, shared category map (no UI).
2. Titles/descriptions on existing pages + `seo-check.mjs` + qa-pages path generation (gates first).
3. Service template + ONE page (well-child visits) -> screenshots 390/1280 -> owner review.
4. Remaining 9 service pages.
5. Two category pages.
6. Internal links (Home blocks, chips, location lists).
7. Independent review + code-reviewer, fix, PR (owner merges). Later: About, JSON-LD, canonical/sitemap/OG, supporting articles, GBP.

## 9. Owner/client decisions
D1 Title/H1 geo: none (default), one primary city, or both. D2 Which office is Home's GBP landing page. D3 Draft text on preview builds only (default) vs also public. D4 Nested URLs (owner: yes). D5 Provisional services list vs the real GBP services list. D6 "Request a visit" vs "Request a callback" site-wide.

## 10. Risks
Thin pages until doctors write text (merge into category if so); duplication across 10 templates (script); unreviewed medical text (production hides drafts, launch gate); no ranking promises (U18.18).

## 11. Competitor service-page research (3 agents, 36 real pages fetched, 2026-11-02)
Data: the owner's "Competitor Sites" dashboard (artifact HYLPYykK6oNNRufeYcLr43): 17,759 sitemap URLs of 12 competitor sites, sorted by section. Method: robots.txt first, read-only polite fetches, measured with scripts. Not fetched: Northern Virginia Pediatrics (403 on robots.txt, skipped, not worked around), NYP Queens and NYU Garden City (one page each, not opened). Mobile is inferred from HTML only; no speed was measured.

### Who does service pages how
| Site | Structure | Verdict |
|---|---|---|
| Pediatric Associates FL | /well-visits/{age band}, /pediatric-services/{topic}; one template, visit timeline | best structure; near-duplicate boilerplate between age pages; FAQ hidden in 286 accordion nodes |
| Nao Medical | one 9-H2 template cloned across ~80 services x ~11 clinics (925 location URLs); rich JSON-LD; cites CDC/AAP | citations good; 89-94% of sentences identical between two cities = doorway risk; 3-8 CTA repeats; no named reviewer |
| Summit Health | /services/{service}, one page per service, no location duplication; 1,230-1,440 words | clear and shallow; no JSON-LD, no reviewer; dead-end pages (2-word body); pediatric location page is a generic 872 KB list |
| Tia | /services hub + 10-H2 template; MedicalWebPage/Service/FAQPage JSON-LD | benefit-bullet opening with booking button above the fold is the best; flu-shot and annual-exam share identical H2s; primary-care page is blank without JavaScript; 65 repeated city links |
| Tribeca Pediatrics | 2 service URLs; /previsit/* (22 visit-by-age pages), /health-info/well-visit-vaccines, 159 blog Q&As | newborn page opens with a checklist of what happens; vaccine page has one H3 per vaccine + CDC fact-sheet links; but no H2s, a missing meta description, no pages for sick visits/school physicals/teen health, flu-shots-1..4 slugs never consolidated |
| ACP NY | 3-4 levels deep, long editorial pages | first 60 words are navigation; generic repeated H2s; copied-looking claim (24/7 advice line from another health system) |
| Parsley Health | condition-led, ~1,500-word template | 8+ identical sign-up buttons; unsourced outcome statistics ("89% improve"); disparaging comparison; no reviewer |

### WHAT WORKS (evidence)
1. Answer first, then ONE call to action above the fold (Tia annual-physical, Nao /pediatric-vaccines-nyc).
2. A concrete "what happens" checklist or timeline (Tribeca /previsit/newborn-visit, Pediatric Associates /well-visits/newborn-to-11-months). The age band in title and H1 matches how parents search ("Teen Well Visits (Ages 12-18)").
3. One vaccine/topic per H3 with links to the CDC fact sheet (Tribeca). Citing CDC/AAP (Nao).
4. Shallow URL tree, one page per service with no location duplication (Summit, Pediatric Associates).
5. A "when to seek urgent care" safety line (Nao).
6. Unique, specific headings ("Bring discharge weight, birth history, medicines") rather than "Eligibility: X".

### WHAT DOESN'T
1. Cloning one template across services or cities: Nao 89-94% identical sentences (doorway risk), Tia flu shot = annual exam, Pediatric Associates newborn = teen.
2. Pages that open with navigation or a generic intro instead of the answer (ACP NY, Summit).
3. FAQ hidden in accordions (Pediatric Associates); content that needs JavaScript (Tia primary-care blank).
4. CTA overload (Parsley 8+, Nao 3-8) and vague CTAs ("Schedule an appointment" to a doctor search).
5. Blog posts doing the job of service pages (Tribeca): hard to find, stale, duplicate slugs.
6. Location pages with no services (Tribeca /your-office/*) and service pages repeated per city (Tia, Nao).
7. No reviewer name or date anywhere (all 36 pages); unsourced outcome claims (Parsley); copy that may belong to another health system (ACP NY); "treatment" headings on templated pages.

### Rules adopted for OUR pages (and what we reject)
Adopted: answer block + one CTA above the fold; fixed set of specific H2s in server-rendered HTML; unique text per service (shingle check 15%, plan section 7); one page per service shared by both offices, with each office's own hours/doctors/neighbourhood in the office block (not cloned text); CTA at most 3 times (top, middle, end) plus the phone link; CDC/NYS DOH link on vaccine and screening pages; sibling, doctor and office links with descriptive anchors; "Reviewed by {name}, {date}" shown only once a doctor signs (name + date, no credentials: red line); the fixed 911 + call-the-office line; FAQ items visible, not in accordions; offices list their services.
Rejected for now: online-booking buttons (booking unconfirmed), insurance/cost answers on each page (plans unconfirmed, dated-fact red line), "named reviewer WITH credentials" (credentials red line), outcome statistics and comparison claims, JSON-LD (built later, confirmed facts only), BreadcrumbList (playbook: only above 50-100 pages), age-band page splits beyond our real services (we do not invent pages).
Added to the build: an age line in the H1/answer where the service has one (newborn care: newborns; school and sports physicals: school-age; teen health: teens), drawn from `agesSeen`/the doctor's ages, never invented.
