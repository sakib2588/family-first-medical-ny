# Overlay: model/booking

Status: planned | Owner task: T8 | Updated: 2026-10-30

## Trigger
`model` contains `booking` (slug from STRUCTURE.md): visitors pick a slot for an appointment, class, table or visit. Embedded third-party scheduler or not: owner decision (R14 Part 6.2, item 3). Planned (U00.7): the build proceeds with the universal modules and the vertical overlay; these questions go on the counsel list, and launch (S6) waits for recorded counsel review or an owner waiver in the handoff pack.

## Primary conversion
Defaults are not set; launch waits on the questions below (U00.7). Proposed, not decided: a confirmed booking; a call stays the fallback. Conversion paths: U08 (one booking action repeated, the cancellation fee shown before confirmation, a phone fallback when the widget fails). Booking-start and booking-confirmed events, including across a third-party widget: U19. Cancellation and no-show policy, privacy notice for data the widget vendor collects: U20.

## Open counsel questions
- Third-party booking widgets: who is responsible when the vendor's widget is not accessible to disabled users, given the DOJ view that the ADA covers web services; counsel review needed [source: https://www.ada.gov/resources/web-guidance/, A, 2022, opened 2026-10-30].
- Cancellation and no-show fees: which state rules govern how and where the fee must be disclosed before the booking is confirmed (to be identified). Counsel to identify.
- Reminder texts and emails: what consent the booking form must capture before reminders and any marketing follow-ups are sent . Counsel to identify.
- Health bookings: does the widget vendor need a business associate agreement (see the medical overlay)? Counsel to identify.
- Who discloses the vendor's data collection in the privacy notice, client or vendor? Counsel to answer.
