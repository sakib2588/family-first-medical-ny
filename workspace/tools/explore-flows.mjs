// read-only walk of public booking flows: clicks only (no typing, never submits). Output: ../01-research/inner/<slug>/steps/
import { chromium } from 'playwright'
import fs from 'node:fs'
const base='../01-research/inner'
const b=await chromium.launch()
const labels = () => [...document.querySelectorAll('label,input,select,textarea,legend,button,[role=radio],[role=checkbox]')].filter(e=>e.offsetParent!==null).map(e=>`${e.tagName.toLowerCase()}${e.type?':'+e.type:''} | ${(e.innerText||e.placeholder||e.name||e.getAttribute('aria-label')||'').trim().replace(/\s+/g,' ').slice(0,70)}`).slice(0,60)
async function run(slug,url,steps){
  const dir=`${base}/${slug}/steps`; fs.mkdirSync(dir,{recursive:true})
  const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true,userAgent:'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1'})
  const p=await ctx.newPage(); const out=[]
  try{ await p.goto(url,{waitUntil:'domcontentloaded',timeout:60000}); await p.waitForTimeout(6000)
    for(let i=0;i<steps.length;i++){ const s=steps[i]
      try{ if(s.click){ await p.locator(s.click).first().click({timeout:8000}) } ; await p.waitForTimeout(3500)}catch(e){out.push(`step${i} click failed: ${String(e).slice(0,80)}`)}
      await p.screenshot({path:`${dir}/s${i}.png`,fullPage:false}); out.push(`step${i} url=${p.url().slice(0,100)}`); out.push(...(await p.evaluate(labels)).map(x=>'  '+x)) }
  }catch(e){out.push('ERR '+String(e).slice(0,100))}
  fs.writeFileSync(`${dir}/log.txt`,out.join('\n')); console.log(slug,'\n'+out.join('\n').slice(0,2500)); await ctx.close()
}
await run('nao-appt','https://book.naomedical.com/appointment/urgent-care?facility=Astoria&source=marketing-page',[{}, {click:'button:has-text("3:00 pm"), button:has-text("3:15 pm")'},{click:'button:has-text("Reserve this time")'}])
await run('tribeca-appt','https://www.tribecapediatrics.com/register-now/',[{}, {click:'text=Transferring a child'}])
await run('pafl-appt','https://healow.com/apps/practice/pediatric-associates-family-of-companies-thepafccom-22293?v=2&t=2&brand=pediatric-associates',[{}, {click:'text=Accept All Cookies'}, {click:'text=Visit Reason'}])
await b.close()
