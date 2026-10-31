import { chromium } from 'playwright'
const dir='../01-research/sites/familyfirstmedicalny/phone/sections'
const b=await chromium.launch(); const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true}); const p=await ctx.newPage()
await p.goto('https://www.familyfirstmedicalny.com/',{waitUntil:'networkidle'});await p.waitForTimeout(2500)
console.log(await p.evaluate(()=>[...document.querySelectorAll('header button,header a')].map(a=>[a.tagName,a.className,a.getAttribute('aria-label'),a.getAttribute('aria-expanded'),a.getAttribute('onclick')])))
await p.tap('header button[aria-label],header .burger,header button:last-of-type');await p.waitForTimeout(900)
await p.screenshot({path:`${dir}/20-mobile-menu-open.png`})
console.log(await p.evaluate(()=>[...document.querySelectorAll('.mnav a,.mnav button')].map(a=>a.innerText.trim().slice(0,30)+' '+(a.getAttribute('href')||'')+' '+Math.round(a.getBoundingClientRect().height))))
// hero call btn
await p.reload({waitUntil:'networkidle'});await p.waitForTimeout(2500)
console.log('herobtn',await p.evaluate(()=>[...document.querySelectorAll('.hero .btn')].map(a=>[a.tagName,a.innerText.trim().slice(0,30),a.getAttribute('onclick')||a.getAttribute('href')])))
console.log('tel links', await p.evaluate(()=>document.querySelectorAll('a[href^=tel]').length))
// lang toggle
await p.tap('.util button:nth-of-type(2), .util [data-lang=zh]');await p.waitForTimeout(800)
console.log('lang',await p.evaluate(()=>[document.documentElement.lang,document.title.slice(0,40),location.href,document.querySelector('h1').innerText.slice(0,30)]))
// faq
console.log('faq',await p.evaluate(()=>[...document.querySelectorAll('#faq details,#faq [aria-expanded]')].length))
await b.close()
