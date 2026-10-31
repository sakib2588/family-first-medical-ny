# Intake questionnaire

Status: draft | Owner task: T9 | Updated: 2026-10-30 | Scope: universal | Serves: U00, U01, U02, U03, U04, U05

Use this file with any client type: a plumber, a restaurant, a law firm, a store, a nonprofit. It has five parts: a pre-call screen we run alone, the stop and decline list, the client questionnaire, the live-interview method, and the steps after intake. Every answer goes into the client record (`site.yaml`) with its source. Questions that matter for only one kind of business live in the overlays (`overlay:<slug>`); this file points to them and does not repeat them. Engagement terms and prices live in U01 and the agreement, never here.

## How to run the intake

- Two channels. The written questionnaire collects facts. A live interview collects meaning: why the business exists, who it is for, how it should sound (U02, U04).
- In the live interview, ask one question at a time. Restate the answer in your own words, then ask one deeper follow-up or close the topic (U04).
- When an answer names a value or a choice, ask why it matters, and keep asking until a real reason appears (U04).
- When an answer is generic ("modern and clean", "everyone", "great service"), ask for one concrete example, one customer story or one number (U04, U07).
- Null means omitted. A question with no answer stays `null` in the record, and the site shows nothing for it: no placeholder, no hedge (U00, U02).
- Build around proof that exists today. Two real reviews means a plan for two reviews (U05).
- One named approver per decision. The builder never approves on the client's behalf (U01).
- Several owners or partners: interview each one alone first, then compare the answers and list where they agree and where they pull apart (U04).
- Record every answer with who gave it, in which channel, and the date, under `provenance:` in `site.yaml` (U02).

## Depth by engagement size

| Engagement | Sections | Live interview |
|---|---|---|
| Short path: one page, a small brochure site, a microsite | Q1 to Q4, Q6 (logo, colors and fonts, three words only), Q7 to Q11, Q12.1 and Q12.2; Q5 only for reference sites | One session |
| Full path: brand plus site, a large redesign, several stakeholders | All sections, Q1 to Q12 | Several sessions, one brand topic per session, notes saved after each |

Never skip Q2 (one primary conversion), Q9 (legal triggers) or Q11 (decision makers), whatever the size.

## 1. Pre-call screen (15 minutes, before any call)

We run this alone, from public sources, before we talk to the client. Write what you see into `site.yaml` with `status: draft` and the source and date of each fact. Anything you did not see stays null.

- [ ] Archetype guess: which one vertical overlay fits (`archetype`); a hybrid or unknown fit goes to the owner as an open question, and the build does not start until it is settled (U00, U02).
- [ ] Business model guess: lead-gen, microsite, booking, ecommerce, subscription, donations or ticketing; one site can have more than one (U00, U08).
- [ ] Where the business operates and where its visitors are; note any sign of EU, UK or California visitors (U00, U20).
- [ ] Regulated work visible: a licensed profession, health, money, law, real estate, services for children, alcohol or similar; if yes, flag `counsel review needed` before scoping (U01, U20).
- [ ] Transactions today or planned: payments, deposits, subscriptions, donations, tickets (U08, U21).
- [ ] Current site snapshot: does a site exist, what the first phone screen shows, whether the main action is visible, broken pages or forms (U06, U23).
- [ ] Listings and profiles: maps listing, review platforms, marketplaces, social accounts; copy the name, address and phone exactly as each one shows them, with the date (U05, U18).
- [ ] Visible proof: reviews (platform and count as shown), portfolio, credentials, press; note what exists, not how good it looks (U05).
- [ ] Real-business check: a real entity, a real contact route and real operations are visible; if not, see the stop list (U02).
- [ ] Mismatches between sources (two names, two phone numbers, an old address) listed for the call (U02, U18).
- [ ] Appetite fit: the likely scope matches one of the engagement models in U01; this kit holds no figures (U01).
- [ ] The person we will speak to can decide, or we know who can (U01).
- [ ] Stop flags seen, from section 2, written down (U02).
- [ ] Three to five opening questions for the call, written from what you saw (U02).

## 2. When to stop, pause or decline

Any "yes" below stops the process until the action is done. Log the flag and the outcome in the client's decisions log.

| Signal | Action | Module |
|---|---|---|
| Does the client want reviews, testimonials, staff, addresses, licenses, awards or numbers we cannot verify, or AI-made people shown as real? | Decline. These are red lines (`vault/wiki/compliance/red-lines.md`). | U05, U20 |
| Is a guaranteed ranking, traffic level, lead count or revenue a condition of the deal? | Explain that no one can promise these. Decline if it stays a condition. | U03, U18 |
| Is there no real business behind the site, or no way to confirm who runs it? | Decline. | U02 |
| Is the business regulated (law, accounting, medicine, dentistry, financial advice, insurance, lending, real estate, services for children, alcohol or similar) with no counsel to review the site? | Pause. Resume when a named counsel agrees to review the legal items. Counsel review needed. | U01, U20 |
| Is there no single person who can approve, or no one who breaks a tie? | Pause until one approver per decision is named. | U01 |
| Will the client share passwords but not invitations, or does a third party hold the domain, listing or hosting and refuse to transfer it? | Pause. Log the risk. Never accept a password. | U21, U24 |
| Will the client supply no facts, content or proof and ask the model to "just write something"? | Offer a smaller site built from what exists, or decline. More model text is not an option. | U07 |
| Does the client ask for red-line tactics: hidden text, thin doorway pages, bought links, traffic bots, fake listings, or sites made to look like independent businesses? | Decline the tactic; decline the project if it is a condition. | U18 |
| Does the client want to imitate another business, or claim a license, address or affiliation that belongs to someone else? | Decline. | U05, U20 |
| Must the site collect health, financial, children's or payment-card data while the scope cannot cover the safeguards? | Pause and rescope, or refer. Counsel review needed. | U20, U21 |
| Is the deadline impossible for any honest scope? | Offer a smaller first release, or decline. | U01, U23 |
| Would taking this client break an existing client agreement? | Check before the call; decline if it would. | U01 |

## 3. Client questionnaire

Each section says which part of `site.yaml` it fills. Send sections Q1 to Q11 as a written form before the kickoff call; go through the gaps live. An answer the client does not know is left blank and becomes `null`; it is never filled with a guess.

### Q1. Business

Fills `business`, `contacts.public`, `proof.team`. Who answers: the owner.

- Q1.1 What is the legal name of the business, and the name customers know it by, if different (U02)? Fills `business.legal_name`, `business.display_name`.
- Q1.2 In one sentence a customer would understand, what do you sell and to whom (U02, U04)? Fills `business.summary`.
- Q1.3 When did the business start, and which document shows it? Leave it blank if you are not sure; a blank means the site makes no "years in business" claim (U05). Fills `business.founded_year`.
- Q1.4 Do customers come to you, do you go to them, is it online only, or a mix (U02, U06)? Fills `business.presence`.
- Q1.5 Which locations or service areas do you serve, and in which can you show real work or customers (U05, U06)? Fills `business.locations`, `business.service_areas`.
- Q1.6 Which address, phone and email should the public see, written exactly as on your signs and listings (U02, U18)? Fills `contacts.public`.
- Q1.7 What are your real opening or answering hours, counting only the hours when a person responds (U02, U07)? Fills `business.hours`.
- Q1.8 How do customers buy from you today: phone, walk-in, form, booking app, online store, marketplace, referral (U02, U08)? Fills `business.how_customers_buy`, and `model` (confirm the pre-call guess).
- Q1.9 Are you part of a franchise, group or parent brand with its own website rules (U02, U09)? Fills `business.parent_brand`.
- Q1.10 Is the business seasonal, and which months matter most (U02, U07)? Fills `business.seasonality`.
- Q1.11 What do you never do, or never want to be asked for (U02, U07)? Fills `business.never_do`.
- Q1.12 Which languages do your customers use, and who on your side can answer in each one (U22)? Fills `business.languages`.
- Q1.13 Who would a customer meet (names, roles, credentials), and has each person agreed to appear with name and photo (U05)? Fills `proof.team`.

### Q2. Goals and the one primary conversion

Fills `goals`, `analytics.report`. The site has one primary conversion: one action, not three. Everything else is secondary.

- Q2.1 What is the one action a visitor should take: call, request a quote, book, buy, donate, subscribe, apply, register, book a demo, save a search, or visit in person (U03, U08)? Fills `goals.primary`.
- Q2.2 Which other actions matter, in order, and which can wait for a later release (U03)? Fills `goals.secondary`.
- Q2.3 What happens today after that action: who responds, in which tool, and how fast can you honestly promise (U08)? Fills `goals.after_action`.
- Q2.4 Where must each enquiry or order land? Every enquiry goes to two places, for example an inbox and a log, so none is lost (U08, U21). Fills `goals.destinations`.
- Q2.5 How many of these actions happen now in a typical month? If you are guessing, say so and we label it a guess (U03). Fills `goals.kpis[].baseline`.
- Q2.6 What target do you want, by what date, and why that date (U03)? Fills `goals.kpis[].metric`, `goals.kpis[].target`, `goals.kpis[].target_date`.
- Q2.7 Where will the numbers come from: analytics, booking system, store, CRM, call log, point of sale (U03, U19)? Fills `goals.kpis[].source`.
- Q2.8 What would make you call this project a success a few months after launch, and what would make you call it a failure (U03)? Fills `goals.success_definition`, `goals.failure_definition`.
- Q2.9 Which channels send customers now (search, maps, social, email, ads, referrals, passers-by), and which do you plan to add (U19)? Fills `goals.channels`.
- Q2.10 Who reads reports about the site, and how often (U19, U24)? Fills `analytics.report`.

### Q3. Audience and top tasks

Fills `audience`. Who answers: the owner and, where possible, the staff who talk to customers.

- Q3.1 Who exactly buys from you? Describe one recent real customer without personal details (U04). Fills `audience.primary`, `audience.example_customer`.
- Q3.2 Who uses, who decides and who pays, if these are different people (U04)? Fills `audience.decision_roles`.
- Q3.3 What are the five things visitors most need to do on the site (U04, U06)? Fills `audience.top_tasks`.
- Q3.4 What are the ten questions customers ask before they buy (U04, U07)? Fills `audience.questions`.
- Q3.5 What makes people hesitate, or leave without buying (U04, U07)? Fills `audience.objections`.
- Q3.6 Who is not a good fit, and should the site gently turn them away (U04)? Fills `audience.not_for`.
- Q3.7 Which words do customers use for what you sell, as opposed to trade terms (U07, U18)? Fills `audience.customer_words`.
- Q3.8 Where do customers look before choosing: search, maps, marketplaces, social, friends, directories (U18)? Fills `audience.where_they_look`.
- Q3.9 On what device, and in what situation, do most visitors arrive (U10, U17)? Fills `audience.devices`.
- Q3.10 Do your visitors include older people, people with low vision, screen-reader users, people reading in a second language or people on slow connections (U16, U22)? Fills `audience.access_needs`.

### Q4. Offer and pricing display

Fills `offer`, `pages`. We never suggest prices. The client decides whether and how prices appear, and every figure comes from the client's own price list.

- Q4.1 List each offer you sell now: name, what it is, who it is for, how it is delivered. Is each one available today (U02, U06)? Fills `offer.items[]`.
- Q4.2 Which three offers earn the most, and which do you want more of (U02, U03)? Fills `offer.items[].revenue_rank`.
- Q4.3 Which offers need their own page, and which can share one (U06)? Fills `offer.items[].page`.
- Q4.4 Do you want prices shown: exact, starting from, a range, on request, or not at all? Why (U07, U08)? Fills `offer.items[].price_display`.
- Q4.5 If prices appear, who keeps them current, and which fees, taxes, deposits or minimums must appear next to them (U07, U20)? Fee display rules vary by place and industry; counsel review needed. Fills `offer.items[].price_source`.
- Q4.6 Which guarantees, warranties, refunds or cancellation terms do you offer in writing? Send the document; only written terms appear on the site (U05, U20). Fills `offer.guarantees`.
- Q4.7 Do you offer promotions, discounts, financing or payment plans, and who approved the wording (U20)? Counsel review needed. Fills `offer.promotions`, `offer.financing`.
- Q4.8 What delivery time, turnaround or response time can you keep every time, not only on good days (U07)? Fills `offer.turnaround`.
- Q4.9 For bookings, orders, tickets, donations or memberships: what are the rules for capacity, lead time, deposits, cancellations and no-shows (U08)? See `overlay:booking`, `overlay:model/ecommerce`, `overlay:ticketing`, `overlay:donations`, `overlay:subscription`. Fills `offer.transaction_rules`.
- Q4.10 Which offers do you want to stop selling or play down (U06)? Fills `offer.downplay`.

### Q5. Competitors, alternatives and references

Fills `positioning`, `brand.references`. Best asked live; written answers here tend to be thin.

- Q5.1 If you did not exist, what would your customers do instead: another firm, a marketplace, do it themselves, or nothing (U04)? Fills `positioning.alternatives`.
- Q5.2 What can you do that those alternatives cannot, and what proof shows it (U04, U05)? Fills `positioning.differentiators`; each one needs a proof item.
- Q5.3 Which competitors do customers compare you with, and what do those competitors do well (U04)? Fills `positioning.competitors`.
- Q5.4 Which customers get the best results from you, and why them (U04)? Fills `positioning.best_fit`.
- Q5.5 What kind of business would a customer say you are, and is that the category you want (U04)? Fills `positioning.category`.
- Q5.6 Which business, in or outside your field, do you respect but would not want to resemble, and what exactly puts you off (U04, U09)? Fills `positioning.admired_not_copied`.
- Q5.7 Which three to five websites, from any industry, do you like, and what exactly do you like on each (U09)? Fills `brand.references.liked`.
- Q5.8 Which websites do you dislike, and why (U09)? Fills `brand.references.disliked`.

### Q6. Brand and voice

Fills `brand`. Short path: ask only Q6.1, Q6.3 and Q6.5.

- Q6.1 Do you have a brand guide, logo files, set colors and fonts? Which parts are fixed, and which are you moving away from (U09, U12)? Fills `brand.guide`, `brand.colors`.
- Q6.2 Who designed the logo, and do you own it or hold a license for it (U05, U09)? Fills `brand.logo.rights_id`.
- Q6.3 Who bought your fonts, and does the license cover use on a website (U11)? Fills `brand.fonts[].license`, `brand.fonts[].web_embedding`, `brand.fonts[].self_hosting`.
- Q6.4 If the business walked into a room, how would people describe it (U04)? Fills `brand.personality`.
- Q6.5 Which three words describe how you want to sound, and which three must you never sound like (U04, U07)? Fills `brand.voice.we_are`, `brand.voice.we_are_not`.
- Q6.6 Which words and phrases do you always use, and which should never appear (U07)? Fills `brand.voice.use_words`, `brand.voice.avoid_words`.
- Q6.7 How do you speak to customers face to face: formal, plain, warm, playful, technical (U07)? Fills `brand.voice.register`.
- Q6.8 Is the founder the face of the brand, or should the company speak as a team (U04, U05)? Fills `brand.founder_led`.
- Q6.9 Which values would you keep even if they cost you sales (U04)? Fills `brand.values`.
- Q6.10 How did the business start, and why does that story matter now (U04)? Fills `brand.story`.
- Q6.11 Do you have real photos of your work, place and people, and can a photo shoot be arranged? Are illustrations acceptable? AI images, if used at all, are labeled and never shown as your real people or work (U13). Fills `brand.imagery_policy`.

### Q7. Content and assets

Fills `content`, `assets`, `proof`, `pages`. Details of each asset go in `asset-and-proof-request.md`; page-by-page needs go in `content-request.md`.

- Q7.1 Which existing pages, posts, brochures or documents should we keep, rewrite or drop (U06, U07)? Fills `pages[]`, `content.inventory`.
- Q7.2 For each page, who writes it: you, us from your interview answers, or someone else? Who approves it (U07)? Fills `content.writers`, `content.matrix`.
- Q7.3 Which proof exists today: reviews, testimonials, case studies, licenses, certifications, awards, press, data (U05)? Fills `proof`.
- Q7.4 Do you hold the rights to every photo, video, logo, font and illustration you plan to send, and who made each one (U05, U13)? Fills `assets.*[].rights_id`.
- Q7.5 Do identifiable people, homes, premises or customers appear in your photos, and do you have their written consent (U05, U13)? Fills `assets.photos[].consent_ids`.
- Q7.6 Can you send product data, menus, schedules, course lists or price lists as editable files (spreadsheet or text), not images (U06, U07)? See `overlay:vertical/ecommerce`, `overlay:restaurants`, `overlay:education-courses`, `overlay:events-venues`. Fills `assets.documents`, and the overlay shapes in `site.yaml` `overlay:` (events, menus with cuisine and holiday hours, product identifiers, insurance plans, funding). Trades: the service-call or diagnostic fee and when it is waived, as on your LSA profile; your gas utility; see `overlay:local-trades`. Fills `overlay.local-trades`.
- Q7.7 Who owns your legal text (privacy notice, terms, disclaimers, required notices), and who reviews it (U20)? Counsel review needed. Fills `legal.pages[].owner`.
- Q7.8 How much time can you or your team give to content review each week during the build (U07)? Fills `content.client_review_capacity`.
- Q7.9 If the site needs more than one language, who translates and who checks each translation (U22)? Fills `content.translator`.
- Q7.10 Is there anything you may not publish: confidential clients, work under non-disclosure terms, partner logos (U05)? Fills `content.restrictions`.

### Q8. Current site and access

Fills `hosting`, `analytics`, `features`, and the access matrix. We ask to be invited to each account with the smallest role the work needs. Never send us a password; if one is sent by mistake, change it and tell us.

- Q8.1 Is there a current site? What is its address, platform, builder and host (U06, U21)? Fills `hosting.host`, `pages`.
- Q8.2 Which pages bring visits, calls or sales today, if you know (U06, U19)? Fills `analytics.baseline_export`.
- Q8.3 Which web addresses must keep working because they are printed or shared (vehicles, cards, menus, QR codes, ads, emails) (U06, U23)? Feeds the redirect map.
- Q8.4 Who registered the domain, in whose account, and when does it renew (U21, U24)? Fills `hosting.domain`.
- Q8.5 Where is DNS managed, and who can change it (U21)? Fills `hosting.dns`.
- Q8.6 Does email run on the domain? Which provider, and who manages it (U21)? Fills `hosting.email_on_domain`.
- Q8.7 Who owns the analytics, search console and tag manager accounts (U18, U19)? Fills `analytics.property_owner`.
- Q8.8 Who owns and manages your maps listing, review profiles and social accounts (U05, U18)? Fills `hosting.accounts[]`.
- Q8.9 Which booking, store, payment, CRM, email-marketing or chat tools do you use, and who is the admin of each (U08, U21)? Fills `features[]`.
- Q8.10 Does a former agency, freelancer, employee or vendor control any of these, and have they agreed to transfer it (U21, U24)? Fills `hosting.third_party_control`.
- Q8.11 Can you invite us to each account with the role listed in the access matrix (U21)? Feeds the access matrix.
- Q8.12 Has the site, domain or any listing ever been hacked, suspended, penalized or flooded with spam (U18, U21)? Feeds the risk register.

### Q9. Technical and legal constraints

Fills `legal`, `features`, `jurisdictions`. These questions select overlays and counsel items. A "yes" is not a problem; it becomes a row for counsel. Nothing here is legal advice, and we never state that a site meets a legal requirement. Counsel review needed on every row this section raises.

- Q9.1 Is the business a licensed profession or a regulated activity (law, accounting, medicine, dentistry, therapy, financial advice, insurance, lending, real estate, education for children, alcohol or similar)? Which regulator, and which license numbers (U05, U20)? Counsel review needed. Fills `legal.triggers`, `proof.licenses`.
- Q9.2 Will the site collect or pass on health information, financial details, data about children or payment-card data (U20, U21)? Counsel review needed. Fills `legal.triggers`.
- Q9.2a Which personal data will each form, booking or checkout ask for, why, how long is it kept, and who else receives it (U08, U20)? Counsel review needed. Fills `legal.data_collected`.
- Q9.3 In which states or countries are your customers and visitors? Do you sell to or serve people in the EU, the UK or California (U20)? Counsel review needed. Fills `jurisdictions`.
- Q9.4 Do you sell subscriptions, memberships or anything that renews automatically (U08, U20)? See `overlay:subscription`; counsel review needed. Fills `legal.triggers`.
- Q9.5 Do you make claims about health, earnings, results, savings, the environment, or being "the best"? What evidence backs each one (U07, U20)? Counsel review needed. Fills `content.claims`.
- Q9.6 Do you pay, discount or reward anyone for reviews or referrals, or show testimonials from staff, family or business partners (U05, U20)? Counsel review needed. Fills `proof.reviews[].relationship`.
- Q9.7 Do you want a chatbot, an AI assistant or AI-made images on the site (U13, U20)? Disclosure rules vary by place; counsel review needed. Fills `legal.ai_disclosure`.
- Q9.8 Which tracking or advertising tools do you want, and what is each one for (U19, U20)? Consent depends on where visitors are; counsel review needed. Fills `analytics.tools` (with an owner per tool), `analytics.tracking_numbers` where calls are tracked, `legal.consent_posture`.
- Q9.9 Does any contract, grant, public body or customer require a specific accessibility standard (U16)? Counsel review needed. Fills `legal.accessibility_target`.
- Q9.10 Which systems must the site connect to: CRM, point of sale, booking, inventory, accounting, email platform (U08, U21)? Fills `features[]`.
- Q9.11 Who will edit the site after launch, and how comfortable are they with web tools (U15, U24)? Fills `maintenance.editor`.
- Q9.12 Is the site meant for, or likely to attract, children or teenagers? What is the youngest visitor you expect (U20)? Counsel review needed. Fills `legal.audience_min_age`.
- Q9.13 Nonprofits: what tax-exempt status does the issuer's record show, with a link to that record (U18, U20)? Counsel review needed. Fills `legal.nonprofit_status`, `legal.tax_id`.
- Q9.14 Which approvals inside your organization (brand, legal, franchise, board) must happen before anything is published, and how long do they take (U01, U20)? Fills `project.approval_steps`.
- Q9.15 Do you have security, hosting or data-location requirements, such as a vendor list or a policy your IT team applies (U21)? Fills `hosting.requirements`.

### Q10. Budget and timeline

Fills `project`. This kit records appetite and dates only. Prices, estimates and payment terms live in the agreement (U01), never in this file or the record.

- Q10.1 How much time and money are you prepared to put into this first version? We fit the scope to that appetite and say what it buys; the figure goes in the agreement, not the record (U01). Fills `project.appetite` (a size, never a figure).
- Q10.2 Is there a fixed launch date? What drives it (an opening, a season, an event, a campaign), and can it move (U01, U23)? Fills `project.launch_target`, `project.launch_driver`.
- Q10.3 Which dates are blocked for you or your approvers: holidays, peak season, travel (U01)? Fills `project.blocked_dates`.
- Q10.4 If the scope must shrink to hit the date, what goes first (U01, U06)? Fills `project.scope_cut_order`.
- Q10.5 After launch, do you want to maintain the site yourselves, or have us look after it under a care plan (U24)? Fills `maintenance.care_plan`.
- Q10.6 Who handles invoices, purchase orders or vendor registration on your side (U01)? Fills `contacts.billing`.

### Q11. Decision makers

Fills `contacts` and the sign-off log (`signoff-log.md`).

- Q11.1 Who has the final say on scope, the brief, design direction, content and launch? One named person for each (U01). Fills `contacts.approver`.
- Q11.2 Who signs the agreement, and can that person commit the business (U01)? Counsel review needed if unclear. Fills `contacts.signatory`.
- Q11.3 If two people disagree, who decides (U01)? Fills `contacts.tie_break`.
- Q11.4 Who else must be consulted: partners, staff, franchise, board, counsel (U01, U02)? Fills `contacts.contributors`.
- Q11.5 Who is the day-to-day contact, and who stands in when that person is away (U01)? Fills `contacts.day_to_day`, `contacts.backup`.
- Q11.6 How quickly can approvers answer a review request, and through which channel (U01)? Fills `contacts.response_expectation`.
- Q11.7 If there are several owners, can we interview each one alone before a joint session (U04)? Feeds the interview plan.

### Q12. After launch

Fills `maintenance`. Full path; on the short path ask Q12.1 and Q12.2 only.

- Q12.1 Who will update what (hours, prices, menus, team, posts, events), and how often (U24)? Fills `maintenance.editor`, `maintenance.cadence`.
- Q12.2 Who should we call if the site goes down, a form stops sending or a payment fails (U24)? Fills `maintenance.incident_contact`.
- Q12.3 Which reports do you want after launch, and who reads them (U19)? Fills `analytics.report`.
- Q12.4 Which features or pages did we set aside for a later phase (U01, U24)? Fills `project.later`.

## 4. Live interview: method and prompts

The live interview covers meaning: purpose, positioning, audience, personality, voice, story, and the pull between founder and company. Its depth follows the engagement size above. Close a topic when two follow-ups in a row add nothing new; write a short summary, the exact phrases the client used, and the open points into the interview notes. The notes stay in the client repo, never on the site.

- Purpose: why did the business start, and why does that still matter to you (U04)?
- What would customers miss most if the business closed next year (U04)?
- Which customer story are you proudest of, and what did you do there that others would not (U04, U05)?
- What do people get wrong about your field, and how do you correct it with customers (U04, U07)?
- When customers recommend you to a friend, what do they say (U04, U07)?
- Where do you and your partners see the business differently, and why (U04)?
- What should the business be known for in a few years, and what will you refuse to do to get there (U04)?
- Follow-up after any value word: why does that matter, and can you give an example from the last month (U04)?

## 5. After the intake

- [ ] Answers written into `site.yaml` with the source, the person and the date; unanswered questions stay `null` (U02).
- [ ] Overlays chosen from `archetype`, `model` and `jurisdictions`, and any conflict with a universal module logged in the decisions log (U00).
- [ ] Open questions, risks and stop flags logged in the client repo (U01, U02).
- [ ] Every legal trigger from Q9 listed in `legal.counsel_items` with `counsel review needed` (U20).
- [ ] Asset and proof request (`asset-and-proof-request.md`) sent with a due date (U05).
- [ ] Content request (`content-request.md`) sent with owners and due dates (U07).
- [ ] Interview notes saved as a summary plus the client's exact phrases, with the date, in the client repo (U04).
- [ ] Kickoff gate K0 (`kickoff-checklist.md`) scheduled; design does not start before it passes (U01, U09).
