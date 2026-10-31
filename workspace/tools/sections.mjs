import { chromium } from 'playwright'
import fs from 'node:fs'
const view=process.argv[2]
const O={phone:{viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true},desktop:{viewport:{width:1280,height:800}}}[view]
const dir=`../01-research/sites/familyfirstmedicalny/${view}/sections`; fs.mkdirSync(dir,{recursive:true})
const b=await chromium.launch(); const ctx=await b.newContext(O); const p=await ctx.newPage()
await p.goto('https://www.familyfirstmedicalny.com/',{waitUntil:'networkidle'})
await p.screenshot({path:`${dir}/00-intro-initial.png`})
await p.waitForTimeout(4000)
// slow scroll to trigger reveals
const H=await p.evaluate(()=>document.documentElement.scrollHeight)
for(let y=0;y<H;y+=300){await p.evaluate(y=>scrollTo(0,y),y);await p.waitForTimeout(120)}
await p.evaluate(()=>scrollTo(0,0));await p.waitForTimeout(800)
const names=[['header-util','.util'],['header','header'],['hero','section.hero'],['trust','div.trust'],['welcome','section.welcome'],['doctors','#doctors'],['interlude','section.interlude'],['services','#services'],['ages','#ages'],['wellness-iv','#wellness'],['locations','#locations'],['gallery','#office'],['reviews','#reviews'],['faq','#faq'],['insurance','#insurance'],['visit','#visit'],['footer','footer']]
let i=1
for(const [n,sel] of names){
  const el=p.locator(sel).first()
  try{await el.scrollIntoViewIfNeeded();await p.waitForTimeout(500)
  await el.screenshot({path:`${dir}/${String(i).padStart(2,'0')}-${n}.png`,animations:'disabled'})}catch(e){console.log('fail',n,String(e).slice(0,80))}
  i++
}
await b.close()
