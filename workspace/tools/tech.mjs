import { chromium } from 'playwright'
const view=process.argv[2]
const O={phone:{viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true},desktop:{viewport:{width:1280,height:800}}}[view]
const b=await chromium.launch(); const ctx=await b.newContext(O); const p=await ctx.newPage()
const reqs=[]; p.on('response',async r=>{const h=r.headers();reqs.push({u:r.url(),t:r.request().resourceType(),s:+(h['content-length']||0),st:r.status()})})
await p.addInitScript(()=>{window.__cls=0;window.__lcp=0;new PerformanceObserver(l=>{for(const e of l.getEntries())if(!e.hadRecentInput)window.__cls+=e.value}).observe({type:'layout-shift',buffered:true});new PerformanceObserver(l=>{const e=l.getEntries().pop();window.__lcp=e.startTime;window.__lcpEl=e.element?.tagName+'.'+String(e.element?.className).slice(0,30)+' '+(e.url||'').slice(-40)}).observe({type:'largest-contentful-paint',buffered:true})})
await p.goto('https://www.familyfirstmedicalny.com/',{waitUntil:'networkidle'});await p.waitForTimeout(3000)
const H=await p.evaluate(()=>document.documentElement.scrollHeight)
for(let y=0;y<H;y+=400){await p.evaluate(y=>scrollTo(0,y),y);await p.waitForTimeout(100)}
await p.evaluate(()=>scrollTo(0,0));await p.waitForTimeout(500)
const hosts={};let total=0;for(const r of reqs){const h=new URL(r.u).host;hosts[h]=(hosts[h]||0)+1}
const types={};for(const r of reqs){types[r.t]=(types[r.t]||0)+1}
const nav=await p.evaluate(()=>{const n=performance.getEntriesByType('navigation')[0];return {dcl:n.domContentLoadedEventEnd,load:n.loadEventEnd,transfer:performance.getEntriesByType('resource').reduce((a,e)=>a+e.transferSize,0)+n.transferSize,fcp:performance.getEntriesByName('first-contentful-paint')[0]?.startTime}})
const d=await p.evaluate(()=>{
 const vis=e=>{const r=e.getBoundingClientRect();const s=getComputedStyle(e);return r.width>0&&r.height>0&&s.visibility!='hidden'&&s.display!='none'}
 const tap=[...document.querySelectorAll('a[href],button,input,select,textarea,[role=button],summary')].filter(vis).map(e=>{const r=e.getBoundingClientRect();return {tag:e.tagName,txt:(e.innerText||e.getAttribute('aria-label')||'').trim().slice(0,30),w:Math.round(r.width),h:Math.round(r.height),inFooter:!!e.closest('footer')}}).filter(x=>x.w<44||x.h<44)
 const imgs=[...document.images].map(i=>({src:i.currentSrc.split('/').slice(-1)[0].slice(0,40),alt:i.alt,hasAttr:i.hasAttribute('alt'),w:i.naturalWidth,h:i.naturalHeight,loading:i.loading,dw:Math.round(i.getBoundingClientRect().width)}))
 const heads=[...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(h=>h.tagName+': '+h.innerText.replace(/\s+/g,' ').slice(0,50))
 const lum=c=>{const [r,g,b]=c.map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*r+.7152*g+.0722*b}
 const parse=s=>{const m=s.match(/[\d.]+/g).map(Number);return m}
 const bg=e=>{while(e){const c=parse(getComputedStyle(e).backgroundColor);if(c.length<4||c[3]>0.9)return c.slice(0,3);e=e.parentElement}return [255,255,255]}
 const cr=(a,b)=>{const x=lum(a),y=lum(b);return +((Math.max(x,y)+.05)/(Math.min(x,y)+.05)).toFixed(2)}
 const sel=['.hero .lead','.hero p','.mobile-cta a','header a','.util','.trust span','.trust p','footer p','footer a','.faq summary','#reviews .rev-meta','.callsheet a','#wellness p','.eyebrow']
 const con=[];for(const s of sel){const e=document.querySelector(s);if(!e)continue;const fg=parse(getComputedStyle(e).color).slice(0,3);con.push([s,getComputedStyle(e).fontSize,cr(fg,bg(e)),(e.innerText||'').trim().slice(0,25)])}
 const btns=[...document.querySelectorAll('a.btn,.btn,.mobile-cta a')].slice(0,8).map(e=>{const fg=parse(getComputedStyle(e).color).slice(0,3);const bgc=parse(getComputedStyle(e).backgroundImage.includes('gradient')?(getComputedStyle(e).backgroundImage.match(/rgb[a]?\([^)]+\)/)||['rgb(255,255,255)'])[0]:getComputedStyle(e).backgroundColor).slice(0,3);return [e.innerText.trim().slice(0,25),cr(fg,bgc)]})
 return {tap,imgs,heads,con,btns,forms:document.forms.length,inputs:document.querySelectorAll('input,textarea,select').length,iframes:[...document.querySelectorAll('iframe')].map(i=>i.src),mapLinks:[...document.querySelectorAll('a[href*="google"],a[href*="maps"]')].map(a=>a.innerText.trim().slice(0,25)+' -> '+a.href),social:[...document.querySelectorAll('a[href]')].map(a=>a.href).filter(h=>/facebook|instagram|yelp|wechat|xiaohongshu|youtube|tiktok|mailto|sms:|whatsapp/.test(h)),metaTags:[...document.querySelectorAll('meta')].map(m=>m.name||m.getAttribute('property')).filter(Boolean),langAttr:document.documentElement.lang,scripts:[...document.scripts].map(s=>s.src||'inline:'+s.textContent.length),cookieEls:[...document.querySelectorAll('[class*=cookie],[id*=cookie],[class*=consent],[id*=consent]')].length,chat:[...document.querySelectorAll('[class*=chat],[id*=chat],[class*=intercom],[id*=hubspot]')].length,ls:Object.keys(localStorage),ss:Object.keys(sessionStorage),ctaHrefs:[...document.querySelectorAll('.mobile-cta a,header a.btn')].map(a=>a.innerText.trim()+' -> '+a.getAttribute('href'))}
})
const ck=await ctx.cookies()
const cls=await p.evaluate(()=>({cls:window.__cls,lcp:window.__lcp,el:window.__lcpEl}))
console.log(JSON.stringify({view,hosts,types,count:reqs.length,nav,cls,cookies:ck.map(c=>c.name),failed:reqs.filter(r=>r.st>=400).map(r=>r.u)},null,0))
console.log(JSON.stringify({...d,imgs:undefined,tap:undefined},null,0))
console.log('TAP',view,d.tap.length,JSON.stringify(d.tap.slice(0,40)))
console.log('IMGS',d.imgs.length,'noAttr',d.imgs.filter(i=>!i.hasAttr).length,'emptyAlt',d.imgs.filter(i=>i.hasAttr&&!i.alt).length, JSON.stringify(d.imgs.filter(i=>!i.alt).map(i=>i.src)))
console.log('IMGSIZE',JSON.stringify(d.imgs.filter(i=>i.dw&&i.w>i.dw*2.2).map(i=>[i.src,i.w,i.dw])).slice(0,600),'lazy',d.imgs.filter(i=>i.loading=='lazy').length)
console.log('BIG',JSON.stringify(reqs.filter(r=>r.t=='image').sort((a,b)=>b.s-a.s).slice(0,6).map(r=>[r.u.split('/').pop(),r.s])))
await b.close()
