import { chromium } from 'playwright'
const b=await chromium.launch()
const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true})
const p=await ctx.newPage()
await p.goto('https://www.familyfirstmedicalny.com/',{waitUntil:'networkidle'})
const r=await p.evaluate(()=>{
 const out=[];
 for(const e of document.querySelectorAll('body > *, main > *')){const r=e.getBoundingClientRect();out.push([e.tagName,e.id,String(e.className).slice(0,40),Math.round(r.top+scrollY),Math.round(r.height),getComputedStyle(e).position,(e.querySelector('h1,h2')?.innerText||'').slice(0,40)])}
 return out})
r.forEach(x=>console.log(x.join(' | ')))
await b.close()
