# U22. Multilingual and localization (optional)

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This optional module answers when a site gets a second language and, once it does, how URLs, hreflang, language markup, locale formats, legal text and the language switcher work. It applies only when `site.yaml` lists more than one language. It runs with IA (see U06), SEO (see U18) and legal pages (see U20).

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U22.1 | Add a language only when the record names, for that language, a fluent human translator or reviewer and a channel that answers customers in that language (staff on the phone, replies to forms); without both, the site stays single-language. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U22.2 | Never publish raw machine translation: a named human translator edits every translated page before release, because automated translation used to mass-produce pages falls under Google's scaled content abuse policy. | universal | A | [source: https://developers.google.com/search/docs/essentials/spam-policies, A, 2026, opened 2026-10-30] | R |
| U22.3 | Give each language its own URL (default: a subdirectory such as `/es/`); never switch language by cookie, IP or browser settings alone, and never auto-redirect by perceived language or location. | universal | A | [source: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites, A, 2025, opened 2026-10-30] | G |
| U22.4 | Every language version carries hreflang annotations (one method: head links, HTTP header or sitemap) that list itself and every other version with fully qualified URLs, are reciprocal, and include `x-default` for the fallback or selector page. | universal | A | [source: https://developers.google.com/search/docs/specialty/international/localized-versions, A, 2026, opened 2026-10-30] | G |
| U22.5 | hreflang values use an ISO 639-1 language code with an optional ISO 3166-1 region (`en-GB`, never `en-UK` or a region alone); a guard rejects unknown codes. | universal | A | [source: https://developers.google.com/search/docs/specialty/international/localized-versions, A, 2026, opened 2026-10-30] | G |
| U22.6 | Set `lang` on the `html` element to the page language as a BCP 47 tag, mark passages in another language with their own `lang`, and do not use the Content-Language meta element. | universal | A | [source: https://www.w3.org/International/questions/qa-html-language-declarations, A, 2026, opened 2026-10-30]; [source: https://www.w3.org/TR/WCAG22/, A, 2024] | G |
| U22.7 | Each page uses one language for content and navigation, translates the full main content (not only menus and footers), and shows no side-by-side translations. | universal | A | [source: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites, A, 2025, opened 2026-10-30] | R |
| U22.8 | The language switcher appears in the header of every page, links to the equivalent page in each language (not the home page), labels each language by its own name in that language, and uses no flag icons. | universal | B | [source: https://www.w3.org/TR/i18n-html-tech-lang/, B, 2014, opened 2026-10-30]; [source: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites, A, 2025, opened 2026-10-30] | G |
| U22.9 | Dates, times, numbers, currency and plural forms render through locale-aware formatting (the Intl API or the framework's equivalent) from record values, never from hand-typed strings per language; dates in prose use the month name, never an all-numeric form. | universal | A | [source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl, A, 2026, opened 2026-10-30] | G |
| U22.10 | Each language version links to a privacy policy, terms, accessibility statement and consent banner in that language, or states plainly which language version governs; counsel decides which applies per jurisdiction before launch. | universal | unverified | [source: https://www.crowell.com/en/insights/client-alerts/proposed-ccpa-regulations-from-california-attorney-general-just-issued-part-i-an-analysis-of-required-consumer-notice, unverified, 2019] | R |
| U22.11 | Forms, error messages, confirmation pages, autoreplies and emails exist in every site language, and each lead is tagged with its language so the reply comes in that language. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |
| U22.12 | Facts (prices, hours, phone, address, offers) come from the record into every language, never from translated copy; each translated page stores the source version it was made from and is flagged stale, then fixed or hidden, when the source page changes. | universal | unverified | [source: playbook/_research/R14-universal-playbook-research.md, unverified, 2026] | G |

## Anti-patterns
- A browser-translation widget bolted on as "Spanish version". Pages get no own URLs, no hreflang and no human edit, and no one answers in Spanish; add a language only under U22.1 and U22.2.
- A geo-redirect that forces visitors from one country into one language. Users and crawlers cannot reach the other versions; use links and the switcher (U22.3, U22.8).
- Flags in the switcher. A flag names a country, not a language; use language names (U22.8).
- hreflang on the English page only. Without return links the tags may be ignored; generate the full set for every version (U22.4).
- A translated price list that lags the English one. Facts come from the record, never from copy (U22.12).
- A Spanish form whose confirmation and error messages are in English (U22.11).

## Checklist
- [ ] Translator and answering channel named in the record for each added language (U22.1).
- [ ] Translator sign-off logged for every translated page (U22.2).
- [ ] Each language has its own URLs; no auto-redirect (U22.3).
- [ ] hreflang set reciprocal, absolute, with `x-default`; codes validated (U22.4, U22.5).
- [ ] `lang` correct on `html` and on foreign passages (U22.6).
- [ ] Full main content translated; one language per page (U22.7).
- [ ] Switcher on every page, equivalent-page links, own-language names, no flags (U22.8).
- [ ] Locale formatting in use; no numeric-only dates in prose (U22.9).
- [ ] Legal pages and consent banner per language, or governing-language statement, decided by counsel (U22.10).
- [ ] Form flow and lead routing work in each language (U22.11).
- [ ] Facts sourced from the record; stale-translation flag works (U22.12).

## How an AI builder uses this
The builder reads `site.yaml` (languages, translator per language, answering channel per language, jurisdictions) and the sitemap from U06. If any added language lacks a named translator or an answering channel, it stops and asks; it does not add the language. Otherwise it produces language routes, the hreflang set, `lang` markup, locale formatting helpers, a switcher component, per-language form strings and a translation register (page, source version, translator, date). It must refuse to publish machine-translated pages without a translator sign-off, to geo-redirect, to use flags for languages, and to copy facts into translated text by hand. Legal pages per language follow U20 and wait for counsel.

## Open questions
- counsel: whether California consumer notices must be offered in each language the business uses with consumers (seen only in secondary summaries, not in the regulation text).
- counsel: which language version of the terms governs when versions differ, per jurisdiction.
- Owner: fonts for non-Latin scripts and how text expansion affects layouts; set a test language per project (see U11).
- Owner: whether a reviewed machine-translation draft is an acceptable cost saver when the translator edits it fully.
