import { chromium } from 'playwright'
const b=await chromium.launch(); const ctx=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true}); const p=await ctx.newPage()
await p.goto('https://www.familyfirstmedicalny.com/',{waitUntil:'networkidle'});await p.waitForTimeout(3000)
const r=await p.evaluate(()=>{const o={};
for(const s of document.querySelectorAll('main>section, main>div, footer, .callsheet, .mnav, .util, .mobile-cta')){o[(s.id||s.className||s.tagName)]=s.innerText.replace(/\s+/g,' ').slice(0,1100)}
return o});
for(const k in r)console.log('##',k,'\n',r[k])
await b.close()
