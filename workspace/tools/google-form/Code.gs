// Builds the Family First Medical NY kickoff questionnaire as a Google Form.
// Run createForm() once; the Execution log prints the edit and share links.

const SECTIONS = [
  {
    title: 'A. The client',
    items: [
      { q: '1. Is the real client the same shape as the base site (2 doctors, family medicine + pediatrics, 2 offices)? If not, what is it?', type: 'para' },
      { q: '2. Online appointment requests, or phone-only?', type: 'choice', choices: ['Add a request-appointment form, no symptoms collected (recommended)', 'Phone only', 'Not sure'] },
      { q: '3. Do they use a patient portal or booking tool now? Which one?', type: 'text' },
      { q: '4. IV therapy, cosmetic or wellness services: promote, hide or drop?', type: 'choice', choices: ['Promote', 'Hide', 'Drop', 'They do not offer these'] },
      { q: '5. Which insurance plans do they take, and who keeps the list current?', type: 'para' },
      { q: '6. Target patients: which areas (Queens, Hicksville, wider)?', type: 'para' },
    ],
  },
  {
    title: 'B. Goal and success',
    items: [
      { q: '7. Main goal of the site', type: 'choice', choices: ['More new patients', 'Fewer no-shows', 'Better look and trust'] },
      { q: '8. What counts as a lead? (pick all that apply)', type: 'check', choices: ['A phone call', 'A form request', 'A booked slot'] },
      { q: '8b. Who answers leads, and how fast?', type: 'text' },
      { q: '9. Can you share existing data (Google Business Profile insights, call log, Search Console)?', type: 'choice', choices: ['Yes, I can share it', 'No data exists', 'Not sure'] },
    ],
  },
  {
    title: 'C. Design taste',
    items: [
      { q: '10. Name 2-3 sites you like (any industry) and what you like about each', type: 'para' },
      { q: '11. Direction', type: 'choice', choices: ['Clinical and calm', 'Warm and family-friendly (recommended)', 'Premium boutique'] },
      { q: '12. Do they have a logo, brand colors and real photos of doctors and offices?', type: 'choice', choices: ['All of them', 'Some', 'None yet'] },
      { q: '13. Base site colors (navy and red)', type: 'choice', choices: ['Keep them', 'Free to choose new ones'] },
    ],
  },
  {
    title: 'D. Legal and risk',
    items: [
      { q: '14. Is there a lawyer or counsel for the client?', type: 'choice', choices: ['Yes', 'No'] },
      { q: '15. Do they receive HHS or Medicaid funds?', type: 'choice', choices: ['Yes', 'No', 'Not sure'] },
      { q: '16. May the site collect any health info?', type: 'choice', choices: ['No, scheduling details only (recommended)', 'Yes, with a signed BAA and counsel approval'] },
      { q: '17. Analytics and ad pixels', type: 'choice', choices: ['Privacy-safe analytics only, none on appointment or portal pages (recommended)', 'Full analytics and ad pixels', 'None'] },
      { q: '18. Show patient reviews on the site?', type: 'choice', choices: ['Yes, real reviews only', 'No'] },
    ],
  },
  {
    title: 'E. Scope',
    items: [
      { q: '19. Pages for v1 (pick all that apply)', type: 'check', choices: ['Home', 'Doctors', 'Services', 'Locations', 'Insurance', 'New patients', 'Contact', 'Legal pages (privacy, terms, notice of privacy practices, accessibility)'] },
      { q: '20. Domain: keep familyfirstmedicalny.com? Who controls the domain, DNS and Google Business Profile?', type: 'para' },
      { q: '21. Timeline and budget guardrails', type: 'para' },
    ],
  },
  {
    title: 'F. Process',
    items: [
      { q: '22. Review cadence', type: 'choice', choices: ['Review each reference site together', 'Batch 3-4 sites, then show findings'] },
      { q: '23. Legal-page research: raw captures stay local for analysis only, their wording is never reused. Confirm?', type: 'choice', choices: ['Confirmed', 'Discuss first'] },
    ],
  },
];

function createForm() {
  const form = FormApp.create('Family First Medical NY - Kickoff Questions');
  form.setDescription('Answer what you can. Skipped questions do not block research. Recommended defaults are marked.');
  form.setCollectEmail(false);
  form.setProgressBar(true);

  SECTIONS.forEach((section, index) => {
    if (index === 0) {
      form.addSectionHeaderItem().setTitle(section.title);
    } else {
      form.addPageBreakItem().setTitle(section.title);
    }
    section.items.forEach(item => addQuestion(form, item));
  });

  Logger.log('Edit link:  ' + form.getEditUrl());
  Logger.log('Share link: ' + form.getPublishedUrl());
}

function addQuestion(form, item) {
  switch (item.type) {
    case 'text':
      form.addTextItem().setTitle(item.q);
      break;
    case 'para':
      form.addParagraphTextItem().setTitle(item.q);
      break;
    case 'choice': {
      const choiceItem = form.addMultipleChoiceItem().setTitle(item.q);
      choiceItem.setChoices(item.choices.map(label => choiceItem.createChoice(label)));
      choiceItem.showOtherOption(true);
      break;
    }
    case 'check': {
      const checkItem = form.addCheckboxItem().setTitle(item.q);
      checkItem.setChoices(item.choices.map(label => checkItem.createChoice(label)));
      checkItem.showOtherOption(true);
      break;
    }
    default:
      throw new Error('Unknown question type: ' + item.type);
  }
}
