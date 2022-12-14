const F=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))m(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&m(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}};F();function u(e){e=Math.round(e),e<0&&(e=0);const t=("0"+Math.floor(e%1e3/10)).slice(-2),s=("0"+Math.floor(e/1e3%60)).slice(-2);return`${("0"+Math.floor(e/60/1e3)).slice(-2)}:${s}.${t}`}var $="/RDC2022/assets/countdown.d79f80a0.mp3",B="/RDC2022/assets/long_beeps.c5591596.mp3",V="/RDC2022/assets/beeps.3e6219b9.mp3";class j{constructor(){this.isRunning=!1,this.startTime=0,this.overallTime=0}_getTimeElapsedSinceLastStart(){return this.startTime?Date.now()-this.startTime:0}start(){this.isRunning||(this.isRunning=!0,this.startTime=Date.now())}stop(){!this.isRunning||(this.isRunning=!1,this.overallTime=this.overallTime+this._getTimeElapsedSinceLastStart())}reset(){if(this.overallTime=0,this.isRunning){this.startTime=Date.now();return}this.startTime=0}getTime(){return this.startTime?this.isRunning?this.overallTime+this._getTimeElapsedSinceLastStart():this.overallTime:0}}const d=document.querySelector("#countdown-timer"),l=document.querySelector("#countup-timer"),I=document.querySelector("#stop");let S=0,c=0,E=!1;const f=new j,w=new Audio;w.src=$;w.preload="auto";w.volume=.5;const L=new Audio;L.src=B;L.preload="auto";L.volume=.5;const x=new Audio;x.src=V;x.preload="auto";x.volume=.5;const A=30*1e3,b=1*60*1e3,h=3*60*1e3;function C(e=b){d.disabled=!1,l.disabled=!1,c=e,f.start(),S=setInterval(N,8),console.log("start timer, ",c)}function v(){d.disabled=!0,l.disabled=!0,f.stop(),clearInterval(S)}function N(){const e=f.getTime();if(e>=c-5200&&!E&&(E=!0,w.play()),c===h&&e>=h){console.log("ho",e),L.play(),v(),I.click(),l.innerText=u(h),d.innerText=u(0),l.classList.add("times-up"),d.classList.add("times-up");const t=new CustomEvent("timerEnded",{detail:{targetTime:h}});document.dispatchEvent(t);return}else c==b&&e>=b?(console.log("hey"),E=!1,x.play(),v(),f.reset(),c=h,f.start(),S=setInterval(N,8)):c===A&&e>=A&&(L.play(),v(),I.click(),l.innerText=u(A),d.innerText=u(0),l.classList.add("times-up"),d.classList.add("times-up"));l.innerText=u(e),d.innerText=u(c-e)}function D(){S=0,f.reset(),E=!1,c=b,d.innerText=u(b),l.innerText=u(0),l.classList.remove("times-up"),d.classList.remove("times-up")}const p={},G=["Alkali Metal","Now","Delta Three-ta","4gotton","Team Fire","Cancer","Group 7","Infinity","Cloud9"],P=["123","456","789","147","258","369","159","357"],T=document.querySelector("#start"),y=document.querySelector("#stop"),_=document.querySelector("#reset"),k=document.querySelector("#appeal");document.querySelector("#save");document.querySelector("#load");document.querySelector("#cal-final-score");const U=document.querySelectorAll(".team-name"),M=document.querySelectorAll(".counter"),O={red:document.querySelector("#red-base"),blue:document.querySelector("#blue-base")},i=document.querySelector("#grid");let g;U.forEach(e=>{G.forEach(t=>{const s=document.createElement("option");s.value=t,s.text=t,e.appendChild(s)})});M.forEach(e=>{p[e.id]=0,e.addEventListener("contextmenu",t=>t.preventDefault()),e.addEventListener("mousedown",t=>{H(t,e.id),e.innerText=p[e.id],e.id.split("-").slice(0,1)})});Object.values(O).forEach(e=>{e.addEventListener("click",t=>{t.currentTarget.textContent="\u2713"}),e.addEventListener("contextmenu",t=>{t.preventDefault(),t.currentTarget.textContent=""})});Array.from(i.children).forEach(e=>{e.addEventListener("click",t=>{t.target.classList.remove("bg-[#545454]","bg-blue-700"),t.target.classList.add("bg-red-700"),t.target.dataset.color="red"}),e.addEventListener("contextmenu",t=>{t.preventDefault(),t.target.classList.remove("bg-[#545454]","bg-red-700"),t.target.classList.add("bg-blue-700"),t.target.dataset.color="blue"})});i.addEventListener("mousedown",e=>{setTimeout(()=>{const t=Array.from(i.children).filter(r=>r.dataset.color),s=t.filter(r=>r.dataset.color==="red"),m=t.filter(r=>r.dataset.color==="blue"),n=s.map(r=>r.id),o=m.map(r=>r.id);P.forEach(r=>{const a=i.querySelector(`[data-comb='${r}']`);if(n.includes(r[0])&&n.includes(r[1])&&n.includes(r[2])){a||R(r,"red");const q=new CustomEvent("greatVictory",{detail:{team:"red"}});document.dispatchEvent(q)}else(a==null?void 0:a.dataset.color)==="red"&&i.removeChild(a);if(o.includes(r[0])&&o.includes(r[1])&&o.includes(r[2])){a||R(r,"blue");const q=new CustomEvent("greatVictory",{detail:{team:"blue"}});document.dispatchEvent(q)}else(a==null?void 0:a.dataset.color)==="blue"&&i.removeChild(a)})},200)});function R(e,t){const s=document.createElement("div");switch(s.className="bg-[#FFDF00BC] pointer-events-none rounded-full h-[5%] absolute transform -translate-x-1/2 -translate-y-1/2",s.dataset.comb=e,s.dataset.color=t,e){case"123":s.classList.add("w-[80%]","top-1/6","left-1/2");break;case"456":s.classList.add("w-[80%]","top-1/2","left-1/2");break;case"789":s.classList.add("w-[80%]","top-5/6","left-1/2");break;case"147":s.classList.add("w-[80%]","top-1/2","left-1/6","rotate-90");break;case"258":s.classList.add("w-[80%]","top-1/2","left-1/2","rotate-90");break;case"369":s.classList.add("w-[80%]","top-1/2","left-5/6","rotate-90");break;case"159":s.classList.add("w-[90%]","top-1/2","left-1/2","rotate-45");break;case"357":s.classList.add("w-[90%]","top-1/2","left-1/2","-rotate-45");break}i.appendChild(s)}function H(e,t){if(typeof e=="object")switch(e.button){case 0:return p[t]++,"+1";case 2:return p[t]--,"-1"}}T.addEventListener("click",()=>{T.disabled=!0,y.classList.remove("hidden"),_.classList.add("hidden"),C()});y.addEventListener("click",()=>{y.classList.add("hidden"),_.classList.remove("hidden"),v()});_.addEventListener("click",()=>{T.disabled=!1,k.classList.add("hidden"),D(),W()});k.addEventListener("click",()=>{D(),T.disabled=!0,y.classList.remove("hidden"),_.classList.add("hidden"),C(30*1e3)});document.addEventListener("timerEnded",e=>{k.classList.remove("hidden")});function W(){M.forEach(e=>{p[e.id]=0,e.innerText=p[e.id]}),Object.values(O).forEach(e=>{e.textContent=""}),Array.from(i.children).forEach(e=>{e.classList.remove("bg-red-700","bg-blue-700"),e.classList.add("bg-[#545454]"),delete e.dataset.color}),i.querySelectorAll("div").forEach(e=>i.removeChild(e)),g==null||g.remove()}document.addEventListener("greatVictory",e=>{if(g)return;v(),y.click();const t=document.createElement("div");t.classList.add("great-victory");const s=document.createElement("h1");s.innerText="Great Victory",s.classList.add("text-size-3xl","font-bold"),t.appendChild(s),document.querySelector(`#${e.detail.team}-team`).appendChild(t),g=t});
