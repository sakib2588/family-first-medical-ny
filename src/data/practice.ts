// One source of truth for the practice. EVERY value below is a PLACEHOLDER until the client confirms it
// (see workspace/06-handoffs/2026-10-31-session-handoff.md, "Client facts still needed").
// Pages read from here so names, phones and addresses can never disagree between sections.

export const practice = {
  name: 'AIMSS Family Health',
  tagline: 'Family medicine and pediatrics in Queens and Nassau County.',
  lastReviewed: 'Sample date (placeholder)',
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
  week: readonly DayHours[]
  getting: readonly string[]
  doctors: readonly string[]
}

export const offices: readonly Office[] = [
  {
    slug: 'elmhurst', name: 'Elmhurst office', neighborhood: 'Elmhurst, Queens',
    addr: '123 Sample Street, Elmhurst, NY 11373', phone: '(718) 555-0142',
    open: { 0: null, 1: [9, 18], 2: [9, 18], 3: [9, 18], 4: [9, 18], 5: [9, 18], 6: [9, 16] },
    week: [['Monday to Friday', '9 AM to 6 PM'], ['Saturday', '9 AM to 4 PM'], ['Sunday', 'Closed']],
    getting: ['Subway and bus lines: to be confirmed with the client.', 'Parking: to be confirmed with the client.', 'Step-free entrance: to be confirmed with the client.'],
    doctors: ['arjun-mehta', 'elena-park'],
  },
  {
    slug: 'hicksville', name: 'Hicksville office', neighborhood: 'Hicksville, Long Island',
    addr: '456 Example Avenue, Hicksville, NY 11801', phone: '(516) 555-0188',
    open: { 0: null, 1: [10, 17], 2: [10, 17], 3: [10, 17], 4: [10, 17], 5: [10, 17], 6: null },
    week: [['Monday to Friday', '10 AM to 5 PM'], ['Saturday', 'Closed'], ['Sunday', 'Closed']],
    getting: ['Train and bus: to be confirmed with the client.', 'Parking: to be confirmed with the client.', 'Step-free entrance: to be confirmed with the client.'],
    doctors: ['arjun-mehta', 'elena-park'],
  },
]

export interface Doctor {
  slug: string
  name: string
  role: string
  ages: string
  languages: string
  blurb: string
  bio: string
  careAreas: readonly string[]
  img: string
  alt: string
}

export const doctors: readonly Doctor[] = [
  {
    slug: 'arjun-mehta', name: 'Dr. Arjun Mehta', role: 'Pediatrics and adolescent care', ages: 'Newborns to age 21',
    languages: 'English (others to be confirmed)',
    blurb: 'Well-child visits, vaccines, school and sports physicals, and calm answers for worried parents.',
    bio: 'Sample biography for layout only. The real text, training and board certification must come from the doctor and be checked against the public license record before launch.',
    careAreas: ['Well-child visits', 'Newborn care', 'Vaccines', 'School and sports physicals', 'Teen health'],
    img: '/demo/doctor-male.webp', alt: 'Dr. Arjun Mehta, pediatrician (stand-in photo)',
  },
  {
    slug: 'elena-park', name: 'Dr. Elena Park', role: 'Family medicine', ages: 'Teens and adults',
    languages: 'English (others to be confirmed)',
    blurb: "Annual physicals, chronic condition care, women's health and preventive screenings for adults.",
    bio: 'Sample biography for layout only. The real text, training and board certification must come from the doctor and be checked against the public license record before launch.',
    careAreas: ['Annual physicals', 'Chronic condition care', "Women's health", 'Preventive screenings'],
    img: '/demo/doctor-female.webp', alt: 'Dr. Elena Park, family physician (stand-in photo)',
  },
]

// Policy set from workspace/02-analysis/legal-and-footer-comparison.md section 5. All DRAFT, verify with counsel.
export const legalPages = [
  { slug: 'privacy', title: 'Website privacy policy', short: 'Privacy' },
  { slug: 'notice-of-privacy-practices', title: 'Notice of privacy practices (HIPAA)', short: 'Notice of privacy practices' },
  { slug: 'terms', title: 'Terms of use, medical disclaimer and emergencies', short: 'Terms of use' },
  { slug: 'accessibility', title: 'Accessibility statement', short: 'Accessibility' },
  { slug: 'nondiscrimination', title: 'Nondiscrimination and language help', short: 'Nondiscrimination and language help' },
  { slug: 'patient-rights', title: 'Patient rights and complaints', short: 'Patient rights' },
  { slug: 'billing', title: 'Billing, prices and No Surprises Act notice', short: 'Billing and prices' },
] as const

export const telHref = (phone: string) => `tel:+1${phone.replace(/\D/g, '')}`
export const mapsHref = (addr: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`
export const officeBySlug = (slug: string) => offices.find(o => o.slug === slug)
export const doctorBySlug = (slug: string) => doctors.find(d => d.slug === slug)
