# U15. Components and navigation patterns

Status: draft | Owner task: T7 | Updated: 2026-10-30 | Scope: universal

## Purpose
This module answers how the shared parts of a site behave: header and navigation, footer, cards, tables, filters and search, accordions, modals, location finders, pricing tables, error and empty states and the not-found page. Behavior comes from public pattern libraries (GOV.UK Design System and USWDS); only the look comes from the client tokens (see U09). It runs during build, after the design system is locked, and feeds accessibility testing (see U16).

## Rules
| id | rule | scope | grade | source | enforce |
|---|---|---|---|---|---|
| U15.1 | Never reinvent a standard control: links are `<a href>`, actions are `<button>`, choices are native inputs, selects or checkboxes, and each component's behavior follows a named GOV.UK or USWDS component, with the reference recorded in the component inventory. | universal | A | [source: https://design-system.service.gov.uk/components/, A, 2026, opened 2026-10-30]; [source: https://designsystem.digital.gov/components/overview/, A, 2025, opened 2026-10-30]; [source: https://www.nngroup.com/articles/ten-usability-heuristics/, B, 2024, opened 2026-10-30] | G |
| U15.2 | Navigation is visible at the top with a Home link and text labels; small screens show the top-level items as links when there are four or fewer and use a standard menu icon only beyond that; sticky menus have a solid background and never depend on hover on touch devices (old study, 2016: use the direction, not a figure). | universal | B | [source: DR:G5, B, 2026]; [source: https://www.nngroup.com/articles/find-navigation-mobile-even-hamburger/, B, 2016, opened 2026-10-30] | G |
| U15.3 | The header starts with a skip link to the main content, uses `header`, `nav`, `main` and `footer` landmarks, and marks the current page in the navigation with `aria-current="page"`. | universal | A | [source: https://design-system.service.gov.uk/components/, A, 2026, opened 2026-10-30]; [source: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/, A, 2026, opened 2026-10-30] | G |
| U15.4 | A dropdown or menu button is a disclosure button with `aria-expanded` that opens on click, tap, Enter or Space, closes on Escape and returns focus to its button; a sticky header never hides the focused element (see U16). | universal | A | [source: https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/, A, 2026, opened 2026-10-30]; [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U15.5 | The footer repeats contact and help links in the same relative order on every page and links the privacy notice and accessibility statement (see U16, U20). | universal | A | [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U15.6 | Cards are used only for a collection of related items that each summarize a topic and link to its details; each card has a heading in page-outline order, the group is a list, and cards never replace a table, a single button or decoration. | universal | A | [source: https://designsystem.digital.gov/components/card/, A, 2025, opened 2026-10-30] | G |
| U15.7 | Tabular data is a real `<table>` with a `<caption>` and header cells with `scope`; on small screens it stacks or scrolls inside a focusable container, and tables are never used for layout. | universal | A | [source: https://designsystem.digital.gov/components/table/, A, 2025, opened 2026-10-30] | G |
| U15.8 | A pricing comparison is a table under U15.7 with plans as columns, the same rows in every column and prices as text with any condition beside the price (see U07 for price honesty). | universal | B | [source: https://designsystem.digital.gov/components/table/, A, 2025, opened 2026-10-30] | G |
| U15.9 | Site search has a label (visible or visually hidden), a submit button whose name includes "Search", an input at least 27 characters wide, and keeps the query in the box on the results page; a very small site may omit search. | universal | A | [source: https://designsystem.digital.gov/components/search/, A, 2025, opened 2026-10-30] | G |
| U15.10 | Filters are native checkboxes or radios grouped in a fieldset with a legend, show the number of results, offer a clear-all control and keep their state in the URL so a filtered view can be shared. | universal | B | [source: https://design-system.service.gov.uk/components/, A, 2026, opened 2026-10-30]; [source: https://www.nngroup.com/articles/ten-usability-heuristics/, B, 2024, opened 2026-10-30] | R |
| U15.11 | Accordions are used only when users need a few of many related sections; never for content every user needs, never nested and never to split up a series of questions. | universal | A | [source: https://design-system.service.gov.uk/components/accordion/, A, 2026, opened 2026-10-30] | R |
| U15.12 | A modal is a last resort, used only to confirm an irreversible action, to require an acknowledgement or to explain a term; never for multi-step tasks, field errors, page messages or long content. | universal | A | [source: https://designsystem.digital.gov/components/modal/, A, 2025, opened 2026-10-30] | R |
| U15.13 | An open modal is labelled by its heading, keeps keyboard focus inside, closes on Escape and returns focus to the control that opened it. | universal | A | [source: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/, A, 2026, opened 2026-10-30]; [source: https://designsystem.digital.gov/components/modal/, A, 2025, opened 2026-10-30] | G |
| U15.14 | A store or office finder lists every location as HTML text (name, address, hours, contact) searchable by a plain form; an embedded map is an extra, never the only way to find a location. | universal | B | [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U15.15 | Every interactive component is specified and rendered in each applicable state (default, hover, focus-visible, active, disabled, error, loading, empty) before sign-off, with a screenshot of each in the review log. | universal | B | [source: https://www.nngroup.com/articles/ten-usability-heuristics/, B, 2024, opened 2026-10-30]; [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |
| U15.16 | Loading and empty states say what is happening or why nothing is shown and offer the next step; a disabled control has nearby text that says why it is unavailable. | universal | B | [source: https://www.nngroup.com/articles/ten-usability-heuristics/, B, 2024, opened 2026-10-30] | R |
| U15.17 | Form errors show an error summary at the top of `main` headed "There is a problem" that links to each field, an inline message beside each field with the same wording, and "Error:" at the start of the page title. | universal | A | [source: https://design-system.service.gov.uk/components/error-summary/, A, 2026, opened 2026-10-30] | G |
| U15.18 | The 404 page has the H1 "Page not found", plain words without "404", "oops" or blame, links to the home page, search and contact, and returns a 404 or 410 status code, never 200. | universal | A | [source: https://design-system.service.gov.uk/patterns/page-not-found-pages/, A, 2026, opened 2026-10-30]; [source: https://developers.google.com/search/docs/crawling-indexing/http-network-errors, A, 2026, opened 2026-10-30] | G |
| U15.19 | Every component spec states its target size: at least 24 x 24 CSS px or the WCAG spacing exception (the AA floor); recommended, not required by WCAG AA: 44 x 44 CSS px for navigation links, primary actions and form controls (see U16). | universal | A | [source: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html, A, 2024, opened 2026-10-30]; [source: https://www.w3.org/TR/WCAG22/, A, 2024, opened 2026-10-30] | G |

## Anti-patterns
- A hamburger icon hiding three links on phones. Visitors use the navigation less when it is hidden. Fix: show the links (U15.2).
- A `div` with a click handler styled as a button. It cannot be reached by keyboard or announced. Fix: native elements (U15.1).
- A transparent sticky header over a moving hero. Links lose contrast and focused items vanish under it. Fix: solid background (U15.2, U15.4).
- A pricing grid built from cards with different rows per plan. Plans cannot be compared. Fix: a table (U15.8).
- The whole service description tucked into an accordion. Hidden content goes unnoticed. Fix: write it as headed sections (U15.11).
- A newsletter modal on page load. It blocks the task. Fix: an inline form (U15.12).
- A location page that is only a map embed. Fix: text list first (U15.14).
- A playful "Oops!" not-found page that returns status 200. Fix: plain wording, real status (U15.18).

## Checklist
- [ ] Component inventory names a GOV.UK or USWDS reference for each standard control (U15.1).
- [ ] Navigation visible; menu icon only when more than four top-level items (U15.2).
- [ ] Skip link, landmarks and `aria-current` present (U15.3).
- [ ] Menus work by click, keyboard and Escape (U15.4).
- [ ] Footer help order identical on every page (U15.5).
- [ ] Cards, tables and pricing tables use the right markup (U15.6, U15.7, U15.8).
- [ ] Search and filters meet their rules (U15.9, U15.10).
- [ ] Accordion and modal uses pass review (U15.11, U15.12, U15.13).
- [ ] Location finder works without the map (U15.14).
- [ ] State screenshots for every component in the review log (U15.15, U15.16).
- [ ] Error summary and inline errors match (U15.17).
- [ ] not-found page wording and status code checked (U15.18).
- [ ] Target sizes stated in every component spec (U15.19).

## How an AI builder uses this
The builder reads the locked tokens and component inventory (U09), the site plan and page list (U06), the record's locations, contact details and prices, and any vertical overlay's patterns. It builds each component from the named library reference with native elements, renders every state, and logs screenshots per state at desktop and phone width. It produces the header, footer, cards, tables, search, filters, accordions, modals, finder, pricing table and not-found page as reusable parts. It must refuse to replace a native control with a custom one, to hide four or fewer top-level links behind a menu icon, to open a modal on page load, to make a map the only route to a location, or to serve a not-found page with status 200. Overlays may add patterns (booking, cart) but take behavior from the same libraries.

## Open questions
- Evidence: the NN/g study names 4 to 5 top-level items for visible navigation; this module keeps four, as in the snapshot rule.
- Evidence: neither library has a store-finder or pricing-table component; U15.8 and U15.14 are built from table and WCAG guidance (grade B).
- Owner: whether a component library from a third party may be used when its behavior matches a GOV.UK or USWDS reference.
- V156 (unverified, from tutorial -KykjvLOsts): start from designer-made library components and place each one explicitly.
- V157 (unverified, from tutorial VMvZuhcDdnw): choose components that fit the stack picked at the start.
- V158 (unverified, from tutorial AiewbroXV8c): smooth-scroll anchors must not land under a sticky bar (now covered by U14.15 and U16).
- V159 (unverified, from tutorial VMvZuhcDdnw): collapse navigation only above four links; tighten the wordmark in the phone pass.
