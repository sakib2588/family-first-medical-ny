// Single source for the client questionnaire (owner-edited list: 15 questions).
// Removed by owner from the 22-question draft: contact person, main goal, portal, websites liked,
// lawyer, pages, timeline. Suggestion added only to the services question.
module.exports = {
  title: 'Family First Medical NY',
  subtitle: 'Website project: kickoff questions',
  intro: [
    'Thank you for choosing to work with us. These questions help us build a website that brings you new patients and is simple to keep up to date. We plan to deliver the first version within 1 week, so Part 1 is what we need first.',
    'Please answer what you can. Anything you skip, we will go through together on a short call. There are no wrong answers.',
  ],
  warning: 'Please do not write any patient names, symptoms or medical details in this form.',
  sections: [
    { title: 'Part 1. The basics (we need these first)', qs: [
      { q: 'What is the practice’s full legal name, and how should it be written on the website?' },
      { q: 'For each office: address, phone number and opening hours.', hint: 'Include days closed or reduced hours, for example a half day.' },
      { q: 'Which email address should appointment requests be sent to? Please add a backup address.' },
      { q: 'Which doctors or providers should be featured? For each: name, credentials, licence and NPI number, a short bio and a photo.', hint: 'We only print credentials we can verify.' },
      { q: 'Which 5 to 8 services should the site feature? Is there anything we should keep off the site?', hint: 'Suggestion: we draft the list from your current website and you confirm it.' },
      { q: 'Are you accepting new patients? Please tell us the ages you see, and whether you offer same-day or walk-in visits and telehealth.' },
      { q: 'Which insurance plans do you accept (including Medicaid and Medicare)? Who updates this list when it changes?' },
    ]},
    { title: 'Part 2. Appointments', qs: [
      { q: 'How do patients book today, and how should they book on the new site?', hint: 'If you use a portal or booking tool, please tell us its name.', opts: ['Phone call only', 'A short online request form (name, phone, preferred time; no medical details)', 'Link to our existing booking or patient portal'] },
      { q: 'When a patient calls or sends a request, who answers and how quickly?' },
      { q: 'What should the site tell people when the office is closed?', opts: ['“For emergencies call 911” only', '911 line plus an after-hours phone or answering service (number: ______________)'] },
    ]},
    { title: 'Part 3. Look and feel', qs: [
      { q: 'Which feeling fits your practice best?', opts: ['Warm and family-friendly', 'Clean and clinical', 'Premium and polished'] },
      { q: 'Do you have a logo, brand colors and professional photos of the doctors, staff and offices? Do you want to keep your current colors?', hint: 'We only use real photos of your own team and offices.', opts: ['Yes, all of them', 'Some of them', 'Not yet'] },
    ]},
    { title: 'Part 4. Claims, links and domain', qs: [
      { q: 'Which claims do you want on the site, for example “since 1998”, “board-certified” or awards?', hint: 'We need proof for each one before we print it.' },
      { q: 'Please send the links to your current website, Google Business Profile, Google reviews and social media pages.' },
      { q: 'Do you already own a domain name (the web address)? If not, that is fine: we build on a temporary address and connect the domain later. Who will own it, and who manages your Google Business Profile?' },
    ]},
  ],
  sendTitle: 'Please send us when you can',
  send: [
    'Logo files and any brand guide',
    'Photos of the doctors, staff and each office (inside and outside)',
    'Current insurance list with the date it was last confirmed',
    'Any text you want kept from your current website',
  ],
  closing: 'Thank you. Reply to the person who sent you this document, or bring it to our call.',
}
