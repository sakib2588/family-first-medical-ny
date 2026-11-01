// DRAFT legal text. Rules from our research (workspace/02-analysis/legal-and-footer-comparison.md):
// - State only what the site truly does today. Anything the practice must supply is in [brackets].
// - Wording is ours; nothing is copied from other sites. NOT legal advice. Counsel must approve before launch.
// - Each page: plain-language summary box, anchored outline, dated.
import { offices } from './practice'

export interface LegalSection { id: string; heading: string; body: readonly string[] }
export interface LegalDoc { summary: string; sections: readonly LegalSection[] }

const phones = offices.map(o => `${o.neighborhood.split(',')[0]} ${o.phone}`).join(', ')

export const legal: Record<string, LegalDoc> = {
  privacy: {
    summary: 'This website does not track you. It sets no cookies, loads no analytics, ads, chat or maps from other companies, and hosts its own fonts. Care you get at the practice is covered by a separate notice.',
    sections: [
      { id: 'what-we-collect', heading: 'What this website collects', body: ['Nothing automatically beyond what any web server needs to deliver a page. We do not use analytics, advertising pixels, session replay, chat widgets or cookies.', '[Hosting provider and the server logs it keeps, and for how long, to be confirmed.]'] },
      { id: 'request-form', heading: 'The request form', body: ['The form is not connected yet and does not send anything. When it is live it will ask only for a name, phone number, preferred office and best time to call. It will not ask for symptoms, diagnoses, insurance or date of birth.', '[Where submissions go, who can read them, how long they are kept, and the signed business associate agreement with any provider, to be confirmed before launch.]'] },
      { id: 'children', heading: 'Children', body: ['This website is for parents, guardians and adults. We do not knowingly collect information from children through it.'] },
      { id: 'hipaa', heading: 'This is not the HIPAA notice', body: ['This policy covers the website only. How we handle your health information as a patient is in the Notice of privacy practices.'] },
      { id: 'changes', heading: 'Changes and contact', body: ['We date every change. Questions: [privacy contact to be named], ' + phones + '.'] },
    ],
  },
  'notice-of-privacy-practices': {
    summary: 'This will explain how the practice may use and share your health information and what rights you have. It must be written for this practice and approved by counsel before launch, so it is an outline for now.',
    sections: [
      { id: 'uses', heading: 'How we may use and share your information', body: ['[Treatment, payment and health care operations, and the other uses and disclosures the law allows or requires, written by counsel for this practice.]'] },
      { id: 'rights', heading: 'Your rights', body: ['[To see and get a copy of your records, ask for corrections, get a list of disclosures, ask for limits, ask for confidential communications, and get a paper copy of this notice. Counsel to write each in plain words.]'] },
      { id: 'duties', heading: 'Our duties', body: ['[Counsel to complete: duty to protect your information, to follow this notice, to tell you after a breach, and to tell you if the notice changes.]'] },
      { id: 'complaints', heading: 'Complaints', body: ['You may complain to the practice using the numbers below and to the U.S. Department of Health and Human Services Office for Civil Rights. We will not retaliate against you for complaining. ' + phones + '.'] },
      { id: 'effective', heading: 'Effective date and languages', body: ['[Effective date, and the languages this notice will be offered in, to be confirmed.]'] },
    ],
  },
  terms: {
    summary: 'This website is information, not medical advice. In an emergency call 911. Hours, phones and insurance details can change, so call to confirm.',
    sections: [
      { id: 'emergency', heading: 'Emergencies and after hours', body: ['In an emergency, call 911 or go to the nearest emergency room.', '[After-hours instruction for existing patients, and what the offices tell callers when closed, to be confirmed.]'] },
      { id: 'not-advice', heading: 'Not medical advice', body: ['This website gives general information about the practice. It cannot give medical advice and does not create a doctor and patient relationship. Please do not send symptoms or medical details through it.'] },
      { id: 'accuracy', heading: 'Accuracy of information', body: ['Hours, phone numbers, doctors and the insurance list can change. Please call the office to confirm before you visit. Insurance list last verified: [date to be added].'] },
      { id: 'reviews', heading: 'Reviews and testimonials', body: ['[If patient reviews are shown, how they were collected, that no payment was given, and that results vary, as counsel advises.]'] },
      { id: 'terms', heading: 'Use of this website', body: ['[Counsel to complete: ownership of content, limits of liability, governing law.]'] },
    ],
  },
  accessibility: {
    summary: 'We build to WCAG 2.2 Level AA. This site has not yet had an outside audit or a real screen-reader test. If something does not work for you, call and we will help, or tell us what failed.',
    sections: [
      { id: 'target', heading: 'Our target', body: ['WCAG 2.2 Level AA. The site uses real text, labelled form fields, visible keyboard focus, tap targets of at least 44 pixels, reduced-motion support, and no accessibility overlay widget. Pages can be read and phone numbers used with JavaScript turned off.'] },
      { id: 'known-gaps', heading: 'Known gaps', body: ['Automated checks run on every build, but we have not yet done a keyboard-only pass on every page with a real screen reader. [Date and result of the first manual audit to be added.]'] },
      { id: 'help', heading: 'Get help or report a barrier', body: ['Call either office and we will help by phone: ' + phones + '. [Named accessibility contact, email and promised response time to be confirmed.]'] },
      { id: 'updated', heading: 'Last updated', body: ['See the date at the top of this page.'] },
    ],
  },
  nondiscrimination: {
    summary: 'We treat every patient fairly. Free interpreters and aids are available. This page will carry the full federal notice once counsel supplies it.',
    sections: [
      { id: 'notice', heading: 'Nondiscrimination notice', body: ['[Exact statement required under Section 1557 of the Affordable Care Act, including the protected grounds and the civil rights coordinator, to be supplied by counsel.]'] },
      { id: 'language', heading: 'Language help / Ayuda con el idioma', body: ['Free language help and interpreters are available. Tell us when you call. [Languages spoken at each office, and the same notice in the other top local languages, to be confirmed with counsel.]', 'Ayuda con el idioma gratis: llame a ' + phones + '. [Spanish text to be reviewed by a qualified translator.]'] },
      { id: 'disability', heading: 'Aids and services for people with disabilities', body: ['Free aids and services are available. Call either office to ask: ' + phones + '.'] },
      { id: 'grievance', heading: 'How to file a grievance', body: ['[Grievance procedure and the route to the U.S. Department of Health and Human Services Office for Civil Rights, to be supplied by counsel.]'] },
    ],
  },
  'patient-rights': {
    summary: 'You have the right to respectful care, clear information, privacy and a way to complain. The practice must supply and counsel approve the final list.',
    sections: [
      { id: 'rights', heading: 'Your rights', body: ['[Respectful care, understandable explanations, a say in your care, privacy, and access to your records, written by the practice with counsel.]'] },
      { id: 'responsibilities', heading: 'What we ask of you', body: ['[Shared responsibilities, such as giving accurate information and telling us if you cannot keep a visit, to be written by the practice.]'] },
      { id: 'records', heading: 'Asking for your records', body: ['[How to request records, who to ask, the form, and the time limits, to be confirmed.]'] },
      { id: 'complaints', heading: 'How to complain', body: ['Tell us first: ' + phones + '. You can also contact the New York State Department of Health. [Exact routes to be confirmed with counsel.]'] },
    ],
  },
  billing: {
    summary: 'We will tell you what to expect to pay. If you do not use insurance, you can ask for a Good Faith Estimate in writing before your visit.',
    sections: [
      { id: 'insurance', heading: 'Insurance', body: ['Call your office to check whether we take your plan. Please call to confirm your exact plan before you visit. Insurance list last verified: [date to be added].'] },
      { id: 'self-pay', heading: 'Paying without insurance', body: ['[Self-pay prices, the sliding-scale or charity-care policy if the practice offers one, and how to ask, to be confirmed.]'] },
      { id: 'gfe', heading: 'Good Faith Estimate (No Surprises Act)', body: ['If you do not have insurance or choose not to use it, you have the right to a Good Faith Estimate of expected charges. [Counsel to supply the required notice wording and process.]'] },
      { id: 'bills', heading: 'Questions about a bill', body: ['Call us: ' + phones + '. [Billing contact and hours to be confirmed.]'] },
    ],
  },
}
