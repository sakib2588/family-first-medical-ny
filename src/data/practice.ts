// One source of truth for the practice. EVERY value below is a PLACEHOLDER until the client confirms it
// (see workspace/06-handoffs/2026-10-31-session-handoff.md, "Client facts still needed").
// Pages read from here so names, phones and addresses can never disagree between sections.

/** A fact the client must confirm (decision 03-decisions/2026-10-31-home-layout-round3.md).
 *  value null = not confirmed: the demo shows a labelled slot "[need]", the live site shows nothing (rulebook U00.10).
 *  When the client confirms: set value, source (who or which document) and checkedOn (ISO date). */
export interface Fact<T> { value: T | null; need: string; source?: string; checkedOn?: string }
const toConfirm = <T>(need: string): Fact<T> => ({ value: null, need })
/** Demo-only sample value (owner request 2026-11-01). NOT a client fact: replace with the confirmed value before launch.
 *  Never used for credentials, ratings, insurance or new-patient status (CLAUDE.md red lines). */
const sample = <T>(value: T, need: string): Fact<T> => ({ value, need, source: 'DEMO SAMPLE, replace' })
/** Same, for facts that must show a date: the date reads "sample date" so nobody mistakes it for a checked fact. */
const sampleDated = <T>(value: T, need: string): Fact<T> => ({ ...sample(value, need), checkedOn: 'sample date' })
/** Show this fact's row at all? Confirmed facts always; unconfirmed ones only as demo slots (live: hidden). */
export const isShown = (f: Fact<unknown>) => f.value !== null || practice.demo
export interface Photo { src: string; alt: string }

export const practice = {
  name: 'AIMSS Family Health',
  tagline: 'Family medicine and pediatrics in Queens and Nassau County.',
  lastReviewed: '',
  /** false = presentation mode (owner decision 2026-11-01, design plan section 12): the site reads as the client's own.
   *  Unconfirmed facts (value null) are hidden, never shown as "[need]" slots. sample() values below still need the
   *  client's confirmation before launch; nothing here is invented as a claim (no ratings, plans, credentials). */
  demo: false,
  languages: sample<string>('English and Spanish', 'to confirm'),
  agesSeen: sample<string>('Newborns to adults', 'Newborns to adults: doctors to confirm'),
  // NEVER turn this into a yes/no without a dated check (checkedOn): accepting new patients is a CLAUDE.md red line.
  acceptingNew: sample<string>('Call either office to ask about openings for new patients.', 'accepting new patients? (yes/no, date)'),
  afterHours: sample<string>('Call the office number; after hours it goes to our answering service.', 'after-hours line or answering service'),
  // What happens after a visit request (Home request band, desktop). Repeats only what the site already says (we call
  // you back during office hours); the client confirms the process before launch, because the form does not send yet.
  callbackSteps: sample<readonly string[]>(['Leave your name and number.', 'Pick your office and a time.', 'We call you back.'], 'how the office handles a callback request'),
  records: sample<string>('Ask the front desk for a records release form. Transfers usually take a few business days.', 'how to request or transfer records'),
  /** Insurance (spec 4.6). No plan claim until it is dated (decision #8): even Medicaid is a slot. */
  insurance: {
    publicPlans: sample<string>('Plans change, so call your office to check yours before your visit.', 'taken? with date'),
    plans: toConfirm<readonly string[]>('plan list from the front desk, with date'),
    notTaken: toConfirm<string>('plans not taken, with date'),
    selfPay: sample<string>('Ask the front desk for the visit price before you come in.', 'self-pay option and how to ask'),
  },
} as const

export type DayHours = readonly [day: string, hours: string]

export interface Office {
  slug: 'elmhurst' | 'hicksville'
  name: string
  neighborhood: string
  addr: string
  phone: string
  /** Opening hours by JS weekday (0 = Sunday). null = closed. [openHour, closeHour] in 24h local time. */
  open: Record<number, readonly [number, number] | null>
  access: readonly { label: string; fact: Fact<string> }[]
  photo: Fact<Photo>
  gallery: readonly Fact<Photo>[]
  googleProfile: Fact<string>
  /** Shown as text once confirmed: "4.9 on Google, 128 reviews, checked 2026-11-02". No stars, no AggregateRating. */
  googleRating: Fact<string>
  doctors: readonly string[]
}

const officeExtras = (place: string, transitLabel: string, transit: string, parking: string) => ({
  access: [
    { label: transitLabel, fact: sample<string>(transit, 'to confirm') },
    { label: 'Parking', fact: sample<string>(parking, 'to confirm') },
    { label: 'Step-free entrance', fact: sample<string>('Street-level entrance', 'to confirm') },
  ],
  photo: sample<Photo>({ src: `/demo/entrance-${place.toLowerCase()}.webp`, alt: `${place} office building` }, `Photo: ${place} entrance from the street`),
  gallery: place === 'Hicksville' ? [sample<Photo>({ src: '/demo/reception.webp', alt: 'Reception desk' }, 'Photo: reception'), sample<Photo>({ src: '/demo/waiting-area.webp', alt: 'A nurse checking a patient' }, 'Photo: waiting area'), sample<Photo>({ src: '/demo/exam-room.webp', alt: 'A doctor talking with a patient' }, 'Photo: an exam room')].reverse() : [sample<Photo>({ src: '/demo/reception.webp', alt: 'Reception desk' }, 'Photo: reception'), sample<Photo>({ src: '/demo/waiting-area.webp', alt: 'A nurse checking a patient' }, 'Photo: waiting area'), sample<Photo>({ src: '/demo/exam-room.webp', alt: 'A doctor talking with a patient' }, 'Photo: an exam room')],
  googleProfile: sample<string>(`https://www.google.com/maps/search/?api=1&query=AIMSS+Family+Health+${place}`, 'Google profile link: to confirm'),
  googleRating: toConfirm<string>('rating, count, date'),
})

export const offices: readonly Office[] = [
  {
    slug: 'elmhurst', name: 'Elmhurst office', neighborhood: 'Elmhurst, Queens',
    addr: '123 Example Street, Elmhurst, NY 11373', phone: '(718) 555-0142',
    open: { 0: null, 1: [9, 18], 2: [9, 18], 3: [9, 18], 4: [9, 18], 5: [9, 18], 6: [9, 16] },
    ...officeExtras('Elmhurst', 'Subway and bus', 'Near subway and buses', 'Street parking nearby'),
    doctors: ['arjun-mehta', 'elena-park'],
  },
  {
    slug: 'hicksville', name: 'Hicksville office', neighborhood: 'Hicksville, Long Island',
    addr: '456 Example Avenue, Hicksville, NY 11801', phone: '(516) 555-0188',
    open: { 0: null, 1: [10, 17], 2: [10, 17], 3: [10, 17], 4: [10, 17], 5: [10, 17], 6: null },
    ...officeExtras('Hicksville', 'Train and bus', 'Near LIRR and buses', 'Free parking lot on site'),
    doctors: ['arjun-mehta', 'elena-park'],
  },
]

// Services by group: each doctor page shows its group's names (careAreas below is derived from it).
// Home shows care by age (ageBands, below). Sample list: the client confirms which services each office offers,
// and the doctors review every line before launch (rulebook medical-wellness.5).
export interface ServiceGroup {
  id: 'children' | 'adults'
  title: string
  doctor: string
  items: readonly (readonly [name: string, line: string])[]
}

export const serviceGroups: readonly ServiceGroup[] = [
  {
    id: 'children', title: 'Babies, children and teens', doctor: 'arjun-mehta',
    items: [
      ['Newborn care', 'The first weeks at home: feeding, weight and sleep.'],
      ['Well-child visits', 'Regular visits that follow growth and development.'],
      ['Vaccines', 'Shots on the recommended schedule.'],
      ['Developmental screening', 'Milestone checks for speech, movement and learning.'],
      ['School and sports physicals', 'The exam and the form in one visit.'],
      ['Teen health', 'Checkups and health questions for teenagers.'],
    ],
  },
  {
    id: 'adults', title: 'Teens and adults', doctor: 'elena-park',
    items: [
      ['Annual physicals', 'A once-a-year visit to review your health.'],
      ['Chronic condition care', 'Ongoing care and follow-up, visit to visit.'],
      ["Women's health", 'Routine and preventive care.'],
      ['Preventive screenings', 'Matched to your age and history, and tracked over time.'],
    ],
  },
]

const careAreasOf = (slug: string) => serviceGroups.filter(g => g.doctor === slug).flatMap(g => g.items.map(([name]) => name))

const scheduleSlots = () => (['elmhurst', 'hicksville'] as const).map(office => ({ office, days: sample<string>(office === 'elmhurst' ? 'Monday, Wednesday, Friday' : 'Tuesday, Thursday', 'days at this office') }))

export interface Doctor {
  slug: string
  name: string
  role: string
  ages: string
  languages: Fact<string>
  /** Days at each office (spec 4.9). The client confirms them (owner answer 3). */
  schedule: readonly { office: Office['slug']; days: Fact<string> }[]
  /** Credential grid. Each value is checked before it shows: NY licence via NYSED Office of the Professions and
   *  the NY Physician Profile, board via ABMS or the specialty board, NPI via NPPES (medical-wellness overlay). */
  credentials: readonly { label: string; fact: Fact<string> }[]
  blurb: string
  bio: string
  careAreas: readonly string[]
  img: string
  alt: string
}

export const doctors: readonly Doctor[] = [
  {
    slug: 'arjun-mehta', name: 'Dr. Arjun Mehta', role: 'Pediatrics and adolescent care', ages: 'Newborns to age 21',
    languages: sample<string>('English and Spanish', 'to confirm'),
    schedule: scheduleSlots(),
    credentials: [
      { label: 'Medical school', fact: toConfirm<string>('to confirm') },
      { label: 'Residency', fact: toConfirm<string>('to confirm') },
      { label: 'Board certification', fact: toConfirm<string>('check with ABMS, add date') },
      { label: 'NY license', fact: toConfirm<string>('check with NYSED, add date') },
      { label: 'Hospital affiliation', fact: toConfirm<string>('to confirm') },
    ],
    blurb: 'Well-child visits, vaccines, school and sports physicals, and calm answers for worried parents.',
    bio: 'Dr. Mehta practices pediatrics and adolescent care.',
    careAreas: careAreasOf('arjun-mehta'),
    img: '/demo/doctor-male.webp', alt: 'Dr. Arjun Mehta, pediatrician',
  },
  {
    slug: 'elena-park', name: 'Dr. Elena Park', role: 'Family medicine', ages: 'Teens and adults',
    languages: sample<string>('English and Spanish', 'to confirm'),
    schedule: scheduleSlots(),
    credentials: [
      { label: 'Medical school', fact: toConfirm<string>('to confirm') },
      { label: 'Residency', fact: toConfirm<string>('to confirm') },
      { label: 'Board certification', fact: toConfirm<string>('check with ABMS, add date') },
      { label: 'NY license', fact: toConfirm<string>('check with NYSED, add date') },
      { label: 'Hospital affiliation', fact: toConfirm<string>('to confirm') },
    ],
    blurb: "Annual physicals, chronic condition care, women's health and preventive screenings for adults.",
    bio: 'Dr. Park practices family medicine.',
    careAreas: careAreasOf('elena-park'),
    img: '/demo/doctor-female.webp', alt: 'Dr. Elena Park, family physician',
  },
]

// Care by age: life stages in order, each with the doctor who leads it (sample: each doctor confirms the ranges).
export const ageBands = [
  { range: 'Birth to 12 months', title: 'Newborns and babies', photo: sample<Photo>({ src: '/demo/child-joy.webp', alt: 'A smiling baby' }, 'Photo: baby'), line: 'First checkups, feeding, first vaccines.', doctors: ['arjun-mehta'] },
  { range: '1 to 12 years', title: 'Children', photo: sample<Photo>({ src: '/demo/child-play.webp', alt: 'A child playing' }, 'Photo: child'), line: 'Checkups, vaccines, school physicals.', doctors: ['arjun-mehta'] },
  { range: '13 to 21 years', title: 'Teens', photo: sample<Photo>({ src: '/demo/hands.webp', alt: 'A caring hand on a shoulder' }, 'Photo: teen'), line: 'Checkups, sports physicals, teen health.', doctors: ['arjun-mehta', 'elena-park'] },
  { range: '22 and up', title: 'Adults and seniors', photo: sample<Photo>({ src: '/demo/adult-care.webp', alt: 'A blood pressure check for an adult patient' }, 'Photo: adult'), line: "Physicals, ongoing care, women's health.", doctors: ['elena-park'] },
] as const

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const hourLabel = (h: number) => `${((h + 11) % 12) + 1} ${h < 12 ? 'AM' : 'PM'}`
/** Full week, Monday first, built from `open`: the ONLY hours source (cards, location pages, open-now chip). */
export const fullWeek = (o: Office) => [1, 2, 3, 4, 5, 6, 0].map(d => {
  const h = o.open[d]
  return { day: d, name: DAY_NAMES[d], hours: h ? `${hourLabel(h[0])} to ${hourLabel(h[1])}` : 'Closed' }
})

/** The week grouped for short lines ("Monday to Friday: 9 AM to 6 PM"), also built from `open`. */
export const weekSummary = (o: Office) => fullWeek(o).reduce<{ from: string; to: string; hours: string }[]>((acc, d) => {
  const last = acc.at(-1)
  if (last && last.hours === d.hours) return [...acc.slice(0, -1), { ...last, to: d.name }]
  return [...acc, { from: d.name, to: d.name, hours: d.hours }]
}, []).map(g => [g.from === g.to ? g.from : `${g.from} to ${g.to}`, g.hours] as const)

// Policy set from workspace/02-analysis/legal-and-footer-comparison.md section 5. All DRAFT, verify with counsel.
export const legalPages = [
  { slug: 'privacy', title: 'Website privacy policy', short: 'Privacy' },
  { slug: 'notice-of-privacy-practices', title: 'Notice of privacy practices (HIPAA)', short: 'Privacy notice' },
  { slug: 'terms', title: 'Terms of use, medical disclaimer and emergencies', short: 'Terms of use' },
  { slug: 'accessibility', title: 'Accessibility statement', short: 'Accessibility' },
  { slug: 'nondiscrimination', title: 'Nondiscrimination and language help', short: 'Nondiscrimination' },
  { slug: 'patient-rights', title: 'Patient rights and complaints', short: 'Patient rights' },
  { slug: 'billing', title: 'Billing, prices and No Surprises Act notice', short: 'Billing and prices' },
] as const

export const telHref = (phone: string) => `tel:+1${phone.replace(/\D/g, '')}`
export const mapsHref = (addr: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`
export const officeBySlug = (slug: string) => offices.find(o => o.slug === slug)
export const doctorBySlug = (slug: string) => doctors.find(d => d.slug === slug)
