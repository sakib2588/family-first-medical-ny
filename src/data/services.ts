// One page per service (workspace/02-analysis/service-pages-build-plan-2026-11-02.md). Built FROM `serviceGroups`
// in practice.ts, so names, one-liners and the doctor are never retyped. Owner decisions: every service has its own
// page, nested under its category (/pediatrics/well-child-visits).
//
// Medical text rule: draft text (sample facts) renders ONLY when PUBLIC_DRAFT_CONTENT=1 (local and preview builds).
// The production build never sets it, so production shows only facts the site already states (name, one-liner, doctor,
// offices) until the doctors confirm text. `expect` stays null until a doctor writes it; it is never pre-written.
import { serviceGroups, doctorBySlug, sample, type Fact, type Photo } from './practice'

export type CategorySlug = 'pediatrics' | 'family-medicine'
export interface Category { slug: CategorySlug; groupId: 'children' | 'adults'; name: string; h1: string; lead: string; titleLead: string; descLead: string }

/** One shared map: category slug <-> serviceGroups id (Services.astro has the same labels; see plan item 14). */
export const categories: readonly Category[] = [
  { slug: 'pediatrics', groupId: 'children', name: 'Pediatrics', h1: 'Pediatric care for babies, children and teens', lead: 'Checkups, vaccines and everyday care for your child, from the first weeks to the teen years.', titleLead: 'Pediatric care for kids and teens', descLead: 'checkups, vaccines and everyday care from the first weeks to the teen years.' },
  { slug: 'family-medicine', groupId: 'adults', name: 'Family medicine', h1: 'Family medicine for teens and adults', lead: 'Physicals, ongoing care and preventive health for teenagers and adults.', titleLead: 'Family medicine for teens and adults', descLead: 'physicals, ongoing care and preventive health for teens and adults.' },
]
export const categoryBySlug = (slug: string) => categories.find(c => c.slug === slug)

const DRAFT = import.meta.env.PUBLIC_DRAFT_CONTENT === '1'
/** True on preview builds that show draft text: pages mark it so drafts never look final. */
export const showingDrafts = DRAFT
/** A fact made with sample() is a draft until a doctor/client confirms it (source then changes). */
export const isDraft = (f: Fact<unknown>) => f.source === 'DEMO SAMPLE, replace'
/** The fact's value if it may be shown now: confirmed always, drafts only on preview builds. */
export const showText = <T>(f: Fact<T>): T | null => (f.value !== null && (DRAFT || !isDraft(f)) ? f.value : null)

export interface Service {
  slug: string
  name: string
  category: CategorySlug
  line: string
  doctorSlug: string
  /** Title = `${titleLead} | AIMSS Family Health` (50 to 60 characters, checked by the SEO script). */
  titleLead: string
  /** Meta description middle part: `${name}: ${summary} ${doctor}, at our Elmhurst and Hicksville offices. Call or request a visit.` */
  summary: string
  icon: 'baby' | 'heart' | 'shield' | 'check' | 'users' | 'calendar' | 'clock' | 'star' | 'sun'
  photo: Fact<Photo>
  /** 40 to 50 words, answer first. */
  answer: Fact<string>
  whoFor: Fact<string>
  /** "What a visit usually includes": null until a doctor writes it. */
  expect: Fact<readonly string[]>
  /** "Dr. Name, date" once a doctor signs the page; null = no "Reviewed by" line. */
  reviewed: Fact<string>
}

export const slugify = (name: string) => name.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const none = <T>(need: string): Fact<T> => ({ value: null, need })
const photo = (src: string, alt: string) => sample<Photo>({ src, alt }, `Photo: ${alt}`)

// Per-service editorial fields. Names, one-liners and doctors come from serviceGroups; only what cannot be derived is here.
const EDITORIAL: Record<string, Pick<Service, 'titleLead' | 'summary' | 'icon' | 'photo'> & Partial<Pick<Service, 'answer' | 'whoFor'>>> = {
  'newborn-care': { titleLead: 'Newborn care for the first weeks', summary: 'help with feeding, weight and sleep in the first weeks.', icon: 'baby', photo: photo('/demo/child-joy.webp', 'A smiling baby') },
  'well-child-visits': {
    titleLead: 'Well-child visits for kids and teens', summary: 'regular checkups that follow growth and development.', icon: 'heart', photo: photo('/demo/child-play.webp', 'A child playing'),
    answer: sample<string>("A well-child visit is a regular checkup for a child who is not sick. Your doctor follows your child's growth and development, answers your questions and keeps vaccines on schedule. Parents can bring questions about sleep, eating, school or anything else.", 'doctors to review'),
    whoFor: sample<string>('Well-child visits are for healthy babies, children and teens. If your child is sick today, call the office that is open now.', 'doctors to review'),
  },
  'vaccines': { titleLead: 'Vaccines for babies, kids and teens', summary: 'shots for babies, children and teens on the recommended schedule.', icon: 'shield', photo: photo('/demo/exam-room.webp', 'An exam room') },
  'developmental-screening': { titleLead: 'Developmental screening for kids', summary: 'milestone checks for speech, movement and learning.', icon: 'star', photo: photo('/demo/child-play.webp', 'A child playing') },
  'school-and-sports-physicals': { titleLead: 'School and sports physicals for kids', summary: 'you get the exam and the form in one visit.', icon: 'check', photo: photo('/demo/exam-room.webp', 'An exam room') },
  'teen-health': { titleLead: 'Teen health checkups and questions', summary: 'checkups and a place for teenagers to ask health questions.', icon: 'users', photo: photo('/demo/hands.webp', 'A caring hand on a shoulder') },
  'annual-physicals': { titleLead: 'Annual physicals for adults and teens', summary: 'a once-a-year visit to review your health with your doctor.', icon: 'calendar', photo: photo('/demo/adult-care.webp', 'A blood pressure check for an adult patient') },
  'chronic-condition-care': { titleLead: 'Ongoing chronic condition care', summary: 'ongoing care and follow-up, visit after visit.', icon: 'clock', photo: photo('/demo/adult-care.webp', 'A blood pressure check for an adult patient') },
  'womens-health': { titleLead: "Women's health and preventive care", summary: 'routine and preventive care with a doctor who knows you.', icon: 'heart', photo: photo('/demo/hands.webp', 'A caring hand on a shoulder') },
  'preventive-screenings': { titleLead: 'Preventive screenings for adults', summary: 'matched to your age and history, and tracked over time.', icon: 'sun', photo: photo('/demo/exam-room.webp', 'An exam room') },
}

export const services: readonly Service[] = serviceGroups.flatMap(g => {
  const found = categories.find(c => c.groupId === g.id)
  if (!found) throw new Error(`services.ts: no category for group "${g.id}"`)
  const category = found.slug
  return g.items.map(([name, line]) => {
    const slug = slugify(name)
    const e = EDITORIAL[slug]
    if (!e) throw new Error(`services.ts: no editorial entry for "${name}" (${slug})`)
    return { slug, name, category, line, doctorSlug: g.doctor, titleLead: e.titleLead, summary: e.summary, icon: e.icon, photo: e.photo,
      answer: e.answer ?? none<string>('answer, 40 to 50 words, reviewed by the doctor'),
      whoFor: e.whoFor ?? none<string>('who it is for, one short paragraph'),
      expect: none<readonly string[]>('what a visit usually includes: 3 to 5 plain steps, written by the doctor'),
      reviewed: none<string>('reviewer name and date') }
  })
})

const slugs = services.map(s => s.slug)
if (new Set(slugs).size !== slugs.length) throw new Error('services.ts: duplicate service slug')

export const serviceBySlug = (category: string, slug: string) => services.find(s => s.category === category && s.slug === slug)
export const servicesOf = (category: CategorySlug) => services.filter(s => s.category === category)
export const serviceUrl = (s: Pick<Service, 'category' | 'slug'>) => `/${s.category}/${s.slug}`
export const doctorOf = (s: Service) => {
  const d = doctorBySlug(s.doctorSlug)
  if (!d) throw new Error(`services.ts: service "${s.name}" names an unknown doctor "${s.doctorSlug}"`)
  return d
}
export const serviceTitle = (s: Service) => `${s.titleLead} | AIMSS Family Health`
export const serviceDescription = (s: Service) => `${s.name}: ${s.summary} ${doctorOf(s).name}, at our Elmhurst and Hicksville offices. Call or request a visit.`
export const categoryTitle = (c: Category) => `${c.titleLead} | AIMSS Family Health`
export const categoryDescription = (c: Category) => `${c.name}: ${c.descLead} ${doctorOf(servicesOf(c.slug)[0]).name}, at our Elmhurst and Hicksville offices. Call us today.`
/** The answer block: the doctor-reviewed or draft text when it may show, else a sentence built only from facts the site already states. */
export const answerOf = (s: Service) =>
  showText(s.answer) ?? `${doctorOf(s).name} sees patients for ${s.name.charAt(0).toLowerCase() + s.name.slice(1)} at both our Elmhurst and Hicksville offices.`

for (const c of categories) {
  if (new Set(servicesOf(c.slug).map(s => s.doctorSlug)).size > 1) throw new Error(`services.ts: category "${c.slug}" has services with different doctors; CategoryPage shows one`)
}
