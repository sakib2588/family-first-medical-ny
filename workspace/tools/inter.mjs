import { chromium } from 'playwright'
import fs from 'node:fs'
const dir='../01-research/sites/familyfirstmedicalny/phone/sections'
const b=await chromium.launch(); const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true}); const p=await ctx.newPage()
await p.goto('https://www.familyfirstmedicalny.com/',{waitUntil:'domcontentloaded'})
const st=async l=>console.log(l,JSON.stringify(await p.evaluate(()=>{const g=s=>{const e=document.querySelector(s);if(!e)return null;const r=e.getBoundingClientRect(),c=getComputedStyle(e);return {op:c.opacity,vis:c.visibility,disp:c.display,tr:c.transform.slice(0,30),top:Math.round(r.top),cls:String(e.className).slice(0,60)}};return {intro:g('#intro'),cta:g('.mobile-cta'),sheet:g('#callsheet'),y:scrollY}})))
for(const t of [300,1500,3000,5000,8000]){await p.waitForTimeout(t===300?300:1500);await st('t='+t)}
await p.screenshot({path:`${dir}/18-after-intro-top.png`})
await p.evaluate(()=>scrollTo(0,900));await p.waitForTimeout(800);await st('scrolled900')
await p.evaluate(()=>scrollTo(0,0));await p.waitForTimeout(800);await st('top')
// sticky call
await p.evaluate(()=>scrollTo(0,2500));await p.waitForTimeout(800)
await p.tap('.mobile-cta > *:first-child');await p.waitForTimeout(900);await st('after tap call')
await p.screenshot({path:`${dir}/19-callsheet-open.png`})
console.log(await p.evaluate(()=>document.querySelector('#callsheet').innerText.replace(/\s+/g,' ')))
console.log(await p.evaluate(()=>[...document.querySelectorAll('#callsheet a,#callsheet button')].map(a=>[a.tagName,a.innerText.trim().slice(0,40),a.getAttribute('href'),Math.round(a.getBoundingClientRect().height)])))
await p.keyboard.press('Escape');await p.waitForTimeout(600);await st('after esc')
// hamburger
await p.evaluate(()=>scrollTo(0,0));await p.tap('header button');await p.waitForTimeout(800)
await p.screenshot({path:`${dir}/20-mobile-menu-open.png`})
console.log(await p.evaluate(()=>[...document.querySelectorAll('.mnav a,.mnav button')].map(a=>a.innerText.trim().slice(0,30)+' '+(a.getAttribute('href')||''))))
await b.close()
