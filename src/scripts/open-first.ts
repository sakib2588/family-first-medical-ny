// Lists marked [data-open-first] show the office that is open now first. Runs after OpenNow has set data-state
// (module scripts run in document order). Shared by Visits, FAQ and Request; Astro bundles it once.
document.querySelectorAll<HTMLElement>('[data-open-first]').forEach(list => {
  const open = [...list.children].filter(li => li.querySelector('[data-state="open"]'))
  open.reverse().forEach(li => list.prepend(li))
})
