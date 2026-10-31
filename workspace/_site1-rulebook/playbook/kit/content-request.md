# Content request

Status: draft | Owner task: T9 | Updated: 2026-10-30 | Scope: universal | Serves: U05, U06, U07, U08, U18, U20

This file tells the client what to provide for each page, who writes it, by when, and how review works. It goes out with the asset and proof request after intake. The page set comes from the site plan (U06) and the archetype overlay (`overlay:<slug>`), which adds or removes page types; this file covers the types most sites share.

## How content works on this project

- Facts come only from the client record (`site.yaml`). A fact that is not in the record does not appear on any page (U00, U07).
- Each page has one job and one primary action, set in the site plan (U06, U07).
- A page gets written in one of four ways: the client writes it; we draft it from the interview and the record; an existing page is reused and edited; or a specialist (counsel, translator) writes it. The content matrix says which, per page (U07).
- If the client cannot supply what a page needs, the honest options are to merge the page, drop it, or make the site smaller. Padding with model-written text is not an option (U07).
- Late content pauses the schedule, and the agreement says how a new date is set (U01).

## Who writes: options per page

| Option | Who drafts | Who checks facts | Who approves | Typical pages |
|---|---|---|---|---|
| Client writes | Client | Us, against the record | Client approver | About, story, specialist explanations |
| We draft from the interview | Us, from interview notes and the record | Client | Client approver | Home, offer pages, FAQ |
| Reuse an existing page | Us, editing the client's text | Client | Client approver | Redesigns with pages that already work |
| Specialist writes | Counsel, a translator or another named expert | Client | Client approver, plus counsel for legal text | Legal pages, translations |

## Content matrix (template)

Keep one matrix per project, in the client repo (`content.matrix` in `site.yaml` points to it).

| Page | Page type | Job of the page | Primary action | Writer | Source | Proof needed | Word target | Due | Status | Approver |
|---|---|---|---|---|---|---|---|---|---|---|
| `<page>` | `<type>` | `<one sentence>` | `<action>` | client, us or specialist | interview, existing page or record | `<proof ids>` | `<set by the page's job>` | `<YYYY-MM-DD>` | requested | `<name>` |

Status values, in order: `requested`, `draft`, `edited`, `client review`, `approved`, `published`.

- [ ] One row per page in the site plan, with every column filled or marked `null` (U06, U07).
- [ ] Each row names the proof items it needs, and each of those items exists in `proof` (U05, U07).
- [ ] Each row has a writer, an approver and a due date (U07).
- [ ] Word targets follow the page's job, not a fixed length; search engines set no word-count target [source: https://developers.google.com/search/docs/fundamentals/seo-starter-guide, A, 2025] (U07, U18).

## What you provide, per page type

### Home

- [ ] What must a first-time visitor understand in the first phone screen: what you offer, for whom, where, and the one action to take (U07, U10)?
- [ ] Which two or three pieces of proof are your strongest (U05)?
- [ ] Which top tasks need a direct link from the home page (U04, U06)?

### About and story

- [ ] How and why did the business start, in your own words (U04)?
- [ ] Who are the people behind it, and have they consented to names and photos (U05)?
- [ ] Which values show in how you work, with one real example each (U04, U07)?

### Offer pages (a service, product, program, practice area, plan or menu section)

- [ ] What is it, who is it for, and who is it not for (U07)?
- [ ] How does it work, step by step, from first contact to finished (U07, U08)?
- [ ] What is included, and what is not (U07)?
- [ ] How long does it take, and what changes that (U07)?
- [ ] Is the price shown as decided in intake Q4.4, with figures taken only from your own price list (U07, U20)?
- [ ] Which real customer questions does this page answer (U07, U18)?
- [ ] Which proof belongs to this offer in particular (U05)?

### Collection and listing pages (categories, catalogs, menus, course lists, property or job listings)

- [ ] How are the items grouped, and which filters or sort orders do visitors need (U06, U15)?
- [ ] Who updates the item data, and from which source file (U06, U24)?

### Location or area pages

- [ ] Do you have unique local proof for each place (real jobs, customers, photos, staff, directions)? Without it, one combined area page is used instead (U06, U18). See `overlay:local-trades`.

### Case studies and portfolio items

- [ ] For each one: the client's written sign-off, the problem, what you did, and the result with its source and period (U05, U07).

### Team and people

- [ ] For each person: name, role, credentials, a real photo and written consent (U05).

### Pricing or plans

- [ ] The exact terms, fees, renewal and cancellation rules, in wording counsel has approved; counsel review needed (U07, U20).

### FAQ

- [ ] Which questions do customers really ask, and which answer have you approved for each (U07)?
- [ ] Each answer is short, factual and matches the record; FAQ content is written for people, not for a search feature (U07, U18).

### Contact, booking, checkout, donation or application

- [ ] Which fields are required, and why is each one needed (U08)?
- [ ] Where does each submission go (two destinations), and who answers it (U08, U21)?
- [ ] What should the confirmation message and email say, including what happens next and when (U08)?
- [ ] What should a visitor see when something fails, and how else can they reach you (U08)?
- [ ] What does the site say outside opening hours, and which response time can you honestly promise (U07, U08)?

### Blog, news and resources

- [ ] Who writes, how often can you keep it up, and which real customer question does each post answer (U07, U18)?
- [ ] Who reviews each post before it goes live (U07)?

### Events, schedules and menus

- [ ] Which editable source holds the dates, times, items and prices, and who updates it (U06, U24)? See `overlay:restaurants`, `overlay:events-venues`, `overlay:education-courses`.

### Legal and policy pages

- [ ] Privacy notice, terms, cookie notice, accessibility statement, refund or cancellation policy, and any notices your field requires: who supplies each one, and who reviews it? Counsel review needed (U16, U20).
- [ ] We format and place legal text; we do not write it as legal advice, and we never describe a page as meeting a legal requirement (U20).

### Careers (optional)

- [ ] Real open roles, how to apply, and who receives applications (U07, U08).

### System pages: thank-you, confirmation, not-found, maintenance

- [ ] What should each one say, and where should it send people next (U08, U15)?

### Translated pages

- [ ] Which pages are translated, who translates them, and who checks each translation (U22)?

## Deadlines and review rounds

- [ ] Each content item has a due date in the matrix, agreed at kickoff (U01, U07).
- [ ] Content arrives in the shared document format we agree, not scattered across messages (U07).
- [ ] Review rounds per page follow the agreement; this kit's default is two rounds of client comments, then approval (U01, U07).
- [ ] In each round the approver sends one combined set of comments, after collecting colleagues' input (U01, U07).
- [ ] Comments arrive within the agreed response time; a missed date moves the schedule, never the quality checks (U01).
- [ ] After content sign-off S4, a change goes into the record first and then the page; a fact is never edited only inside a page (U02, U07).
- [ ] A new page after the site plan is a change request (U01, U06).
- [ ] Late or missing content: we confirm the new date in writing and log it (U01).

## The human-edit rule

- [ ] No raw model draft is ever published or sent for client approval (U07).
- [ ] The model drafts only from the record, the interview notes and the client's own words; it never adds a fact (U07).
- [ ] A person edits every draft for facts, specificity and voice, with the heaviest edit at the start of the page (rule from `vault/wiki/knowledge/content-and-ai-quality.md`) (U07).
- [ ] Generic claims are replaced with the client's real specifics (names, steps, timeframes) from the record (U07).
- [ ] The draft is searched for the banned-phrase list (seed list in `vault/wiki/knowledge/content-and-ai-quality.md`, extended per client) before review (U07).
- [ ] Every claim in the copy maps to a record entry with provenance; a claim without one is cut (U05, U07).
- [ ] The editor's name and the edit date are recorded per page in the content matrix (U07).
- [ ] Where AI use in the content or on the site must be disclosed, the disclosure is planned with counsel; counsel review needed (U20).

## Before content sign-off (S4)

- [ ] Every page in the matrix is `approved` by the named approver (U07).
- [ ] Legal and regulated content approved by counsel where flagged; counsel review needed (U20).
- [ ] The record is set to `locked` and its version is noted in the sign-off log (U02, U07).
- [ ] Alt text written for each image, according to its purpose on the page (U13, U16).
- [ ] Page titles and descriptions drafted from each page's job and the customer's own words (U18).
