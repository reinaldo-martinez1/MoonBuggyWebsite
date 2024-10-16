const y="data-astro-transition-persist";function _(t){for(const e of document.scripts)for(const n of t.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!e.src&&e.textContent===n.textContent||e.src&&e.type===n.type&&e.src===n.src)){n.dataset.astroExec="";break}}function $(t){const e=document.documentElement,n=[...e.attributes].filter(({name:o})=>(e.removeAttribute(o),o.startsWith("data-astro-")));[...t.documentElement.attributes,...n].forEach(({name:o,value:r})=>e.setAttribute(o,r))}function q(t){for(const e of Array.from(document.head.children)){const n=U(e,t);n?n.remove():e.remove()}document.head.append(...t.head.children)}function B(t,e){e.replaceWith(t);for(const n of e.querySelectorAll(`[${y}]`)){const o=n.getAttribute(y),r=t.querySelector(`[${y}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&j(n)&&!V(n,r)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const W=()=>{const t=document.activeElement;if(t?.closest(`[${y}]`)){if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement){const e=t.selectionStart,n=t.selectionEnd;return()=>E({activeElement:t,start:e,end:n})}return()=>E({activeElement:t})}else return()=>E({activeElement:null})},E=({activeElement:t,start:e,end:n})=>{t&&(t.focus(),(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&(typeof e=="number"&&(t.selectionStart=e),typeof n=="number"&&(t.selectionEnd=n)))},U=(t,e)=>{const n=t.getAttribute(y),o=n&&e.head.querySelector(`[${y}="${n}"]`);if(o)return o;if(t.matches("link[rel=stylesheet]")){const r=t.getAttribute("href");return e.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},j=t=>{const e=t.dataset.astroTransitionPersistProps;return e==null||e==="false"},V=(t,e)=>t.getAttribute("props")===e.getAttribute("props"),K=t=>{_(t),$(t),q(t);const e=W();B(t.body,document.body),e()},z="astro:before-preparation",G="astro:after-preparation",J="astro:before-swap",Q="astro:after-swap",Z=t=>document.dispatchEvent(new Event(t));class N extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(e,n,o,r,i,u,a,l,d,c){super(e,n),this.from=o,this.to=r,this.direction=i,this.navigationType=u,this.sourceElement=a,this.info=l,this.newDocument=d,this.signal=c,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class tt extends N{formData;loader;constructor(e,n,o,r,i,u,a,l,d,c){super(z,{cancelable:!0},e,n,o,r,i,u,a,l),this.formData=d,this.loader=c.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class et extends N{direction;viewTransition;swap;constructor(e,n){super(J,void 0,e.from,e.to,e.direction,e.navigationType,e.sourceElement,e.info,e.newDocument,e.signal),this.direction=e.direction,this.viewTransition=n,this.swap=()=>K(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function nt(t,e,n,o,r,i,u,a,l){const d=new tt(t,e,n,o,r,i,window.document,u,a,l);return document.dispatchEvent(d)&&(await d.loader(),d.defaultPrevented||(Z(G),d.navigationType!=="traverse"&&R({scrollX,scrollY}))),d}function ot(t,e){const n=new et(t,e);return document.dispatchEvent(n),n.swap(),n}const rt=history.pushState.bind(history),v=history.replaceState.bind(history),R=t=>{history.state&&(history.scrollRestoration="manual",v({...history.state,...t},""))},O=!!document.startViewTransition,x=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),F=(t,e)=>t.pathname===e.pathname&&t.search===e.search;let f,p,g;const X=t=>document.dispatchEvent(new Event(t)),Y=()=>X("astro:page-load"),st=()=>{let t=document.createElement("div");t.setAttribute("aria-live","assertive"),t.setAttribute("aria-atomic","true"),t.className="astro-route-announcer",document.body.append(t),setTimeout(()=>{let e=document.title||document.querySelector("h1")?.textContent||location.pathname;t.textContent=e},60)},P="data-astro-transition-persist",D="data-astro-transition",S="data-astro-transition-fallback";let I,T=0;history.state?(T=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):x()&&(v({index:T,scrollX,scrollY},""),history.scrollRestoration="manual");async function it(t,e){try{const n=await fetch(t,e),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function C(){const t=document.querySelector('[name="astro-view-transitions-fallback"]');return t?t.getAttribute("content"):"animate"}function at(){let t=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const n=e.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=e.innerHTML;for(const r of e.attributes){if(r.name==="src"){const i=new Promise(u=>{o.onload=o.onerror=u});t=t.then(()=>i)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",e.replaceWith(o)}return t}const H=(t,e,n,o,r)=>{const i=F(e,t),u=document.title;document.title=o;let a=!1;if(t.href!==location.href&&!r)if(n.history==="replace"){const l=history.state;v({...n.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",t.href)}else rt({...n.state,index:++T,scrollX:0,scrollY:0},"",t.href);if(document.title=u,g=t,i||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(t.hash){history.scrollRestoration="auto";const l=history.state;location.href=t.href,history.state||(v(l,""),i&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function ct(t){const e=[];for(const n of t.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${P}="${n.getAttribute(P)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),e.push(new Promise(r=>{["load","error"].forEach(i=>o.addEventListener(i,r)),document.head.append(o)}))}return e}async function k(t,e,n,o,r){async function i(l){function d(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const c=document.getAnimations();document.documentElement.setAttribute(S,l);const w=document.getAnimations().filter(h=>!c.includes(h)&&!d(h));return Promise.allSettled(w.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!t.signal.aborted)try{await i("old")}catch{}const u=document.title,a=ot(t,n.viewTransition);H(a.to,a.from,e,u,o),X(Q),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?i("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function lt(){return f?.controller.abort(),f={controller:new AbortController}}async function M(t,e,n,o,r){const i=lt();if(!x()||location.origin!==n.origin){i===f&&(f=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&R({scrollX,scrollY}),F(e,n)&&(t!=="back"&&n.hash||t==="back"&&e.hash)){H(n,e,o,document.title,r),i===f&&(f=void 0);return}const a=await nt(e,n,t,u,o.sourceElement,o.info,i.controller.signal,o.formData,l);if(a.defaultPrevented||a.signal.aborted){i===f&&(f=void 0),a.signal.aborted||(location.href=n.href);return}async function l(s){const w=s.to.href,h={signal:s.signal};if(s.formData){h.method="POST";const b=s.sourceElement instanceof HTMLFormElement?s.sourceElement:s.sourceElement instanceof HTMLElement&&"form"in s.sourceElement?s.sourceElement.form:s.sourceElement?.closest("form");h.body=b?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(s.formData):s.formData}const m=await it(w,h);if(m===null){s.preventDefault();return}if(m.redirected){const b=new URL(m.redirected);if(b.origin!==s.to.origin){s.preventDefault();return}s.to=b}if(I??=new DOMParser,s.newDocument=I.parseFromString(m.html,m.mediaType),s.newDocument.querySelectorAll("noscript").forEach(b=>b.remove()),!s.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!s.formData){s.preventDefault();return}const A=ct(s.newDocument);A.length&&!s.signal.aborted&&await Promise.all(A)}async function d(){if(p&&p.viewTransition){try{p.viewTransition.skipTransition()}catch{}try{await p.viewTransition.updateCallbackDone}catch{}}return p={transitionSkipped:!1}}const c=await d();if(a.signal.aborted){i===f&&(f=void 0);return}if(document.documentElement.setAttribute(D,a.direction),O)c.viewTransition=document.startViewTransition(async()=>await k(a,o,c,r));else{const s=(async()=>{await Promise.resolve(),await k(a,o,c,r,C())})();c.viewTransition={updateCallbackDone:s,ready:s,finished:new Promise(w=>c.viewTransitionFinished=w),skipTransition:()=>{c.transitionSkipped=!0,document.documentElement.removeAttribute(S)}}}c.viewTransition?.updateCallbackDone.finally(async()=>{await at(),Y(),st()}),c.viewTransition?.finished.finally(()=>{c.viewTransition=void 0,c===p&&(p=void 0),i===f&&(f=void 0),document.documentElement.removeAttribute(D),document.documentElement.removeAttribute(S)});try{await c.viewTransition?.updateCallbackDone}catch(s){const w=s;console.log("[astro]",w.name,w.message,w.stack)}}async function dt(t,e){await M("forward",g,new URL(t,location.href),e??{})}function ut(t){if(!x()&&t.state){location.reload();return}if(t.state===null)return;const e=history.state,n=e.index,o=n>T?"forward":"back";T=n,M(o,g,new URL(location.href),{},e)}const L=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&R({scrollX,scrollY})};{if(O||C()!=="none")if(g=new URL(location.href),addEventListener("popstate",ut),addEventListener("load",Y),"onscrollend"in window)addEventListener("scrollend",L);else{let t,e,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(t),t=void 0;return}if(e===scrollY&&n===scrollX){clearInterval(t),t=void 0,L();return}else e=scrollY,n=scrollX};addEventListener("scroll",()=>{t===void 0&&(o=history.state.index,e=scrollY,n=scrollX,t=window.setInterval(r,50))},{passive:!0})}for(const t of document.scripts)t.dataset.astroExec=""}export{J as T,z as a,dt as n,O as s};
