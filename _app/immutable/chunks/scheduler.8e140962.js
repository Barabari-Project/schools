var B=Object.defineProperty;var O=(t,n,e)=>n in t?B(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>(O(t,typeof n!="symbol"?n+"":n,e),e);function G(){}function R(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function it(){return Object.create(null)}function F(t){t.forEach(z)}function lt(t){return typeof t=="function"}function st(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let m;function ct(t,n){return t===n?!0:(m||(m=document.createElement("a")),m.href=n,t===m.href)}function rt(t){return Object.keys(t).length===0}function W(t,...n){if(t==null){for(const i of n)i(void 0);return G}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ot(t,n,e){t.$$.on_destroy.push(W(n,e))}function ut(t,n,e,i){if(t){const l=L(t,n,e,i);return t[0](l)}}function L(t,n,e,i){return t[1]&&i?R(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const l=t[2](i(e));if(n.dirty===void 0)return l;if(typeof l=="object"){const r=[],s=Math.max(n.dirty.length,l.length);for(let o=0;o<s;o+=1)r[o]=n.dirty[o]|l[o];return r}return n.dirty|l}return n.dirty}function ft(t,n,e,i,l,r){if(l){const s=L(n,e,i,r);t.p(s,l)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function dt(t){return t??""}function ht(t,n,e){return t.set(e),n}let y=!1;function mt(){y=!0}function pt(){y=!1}function I(t,n,e,i){for(;t<n;){const l=t+(n-t>>1);e(l)<=i?t=l+1:n=l}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let l=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,a=(l>0&&n[e[l]].claim_order<=u?l+1:I(1,l,q=>n[e[q]].claim_order,u))-1;i[c]=e[a]+1;const w=a+1;e[w]=c,l=Math.max(w,l)}const r=[],s=[];let o=n.length-1;for(let c=e[l]+1;c!=0;c=i[c-1]){for(r.push(n[c-1]);o>=c;o--)s.push(n[o]);o--}for(;o>=0;o--)s.push(n[o]);r.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<r.length&&s[c].claim_order>=r[u].claim_order;)u++;const a=u<r.length?r[u]:null;t.insertBefore(s[c],a)}}function K(t,n){if(y){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function Q(t,n,e){t.insertBefore(n,e||null)}function U(t,n,e){y&&!e?K(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function M(t){return document.createElement(t)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function gt(){return N(" ")}function bt(){return N("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Et(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function vt(t){return t.dataset.svelteH}function Tt(t){return Array.from(t.childNodes)}function j(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,n,e,i,l=!1){j(t);const r=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,l||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,l?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function D(t,n,e,i){return C(t,l=>l.nodeName===n,l=>{const r=[];for(let s=0;s<l.attributes.length;s++){const o=l.attributes[s];e[o.name]||r.push(o.name)}r.forEach(s=>l.removeAttribute(s))},()=>i(n))}function Nt(t,n,e){return D(t,n,e,M)}function wt(t,n,e){return D(t,n,e,S)}function V(t,n){return C(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function At(t){return V(t," ")}function A(t,n,e){for(let i=e;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===n)return i}return-1}function kt(t,n){const e=A(t,"HTML_TAG_START",0),i=A(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new k(n);j(t);const l=t.splice(e,i-e+1);E(l[0]),E(l[l.length-1]);const r=l.slice(1,l.length-1);for(const s of r)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new k(n,r)}function Ht(t,n){n=""+n,t.data!==n&&(t.data=n)}function Lt(t,n){t.value=n??""}function Mt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function St(t,n,e){t.classList.toggle(n,!!e)}function X(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function jt(t,n){const e=[];let i=0;for(const l of n.childNodes)if(l.nodeType===8){const r=l.textContent.trim();r===`HEAD_${t}_END`?(i-=1,e.push(l)):r===`HEAD_${t}_START`&&(i+=1,e.push(l))}else i>0&&e.push(l);return e}class Y{constructor(n=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=S(e.nodeName):this.e=M(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)Q(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(E)}}class k extends Y{constructor(e=!1,i){super(e);f(this,"l");this.e=this.n=null,this.l=i}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let i=0;i<this.n.length;i+=1)U(this.t,this.n[i],e)}}function Ct(t,n){return new t(n)}let p;function b(t){p=t}function g(){if(!p)throw new Error("Function called outside component initialization");return p}function Dt(t){g().$$.on_mount.push(t)}function Pt(t){g().$$.after_update.push(t)}function qt(t){g().$$.on_destroy.push(t)}function Bt(){const t=g();return(n,e,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[n];if(l){const r=X(n,e,{cancelable:i});return l.slice().forEach(s=>{s.call(t,r)}),!r.defaultPrevented}return!0}}const h=[],H=[];let d=[];const v=[],P=Promise.resolve();let T=!1;function Z(){T||(T=!0,P.then(tt))}function Ot(){return Z(),P}function $(t){d.push(t)}function Gt(t){v.push(t)}const x=new Set;let _=0;function tt(){if(_!==0)return;const t=p;do{try{for(;_<h.length;){const n=h[_];_++,b(n),nt(n.$$)}}catch(n){throw h.length=0,_=0,n}for(b(null),h.length=0,_=0;H.length;)H.pop()();for(let n=0;n<d.length;n+=1){const e=d[n];x.has(e)||(x.add(e),e())}d.length=0}while(h.length);for(;v.length;)v.pop()();T=!1,x.clear(),b(t)}function nt(t){if(t.fragment!==null){t.update(),F(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach($)}}function Rt(t){const n=[],e=[];d.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),d=n}export{h as $,Bt as A,qt as B,vt as C,xt as D,Gt as E,S as F,jt as G,wt as H,ct as I,Lt as J,yt as K,F as L,k as M,kt as N,dt as O,St as P,ht as Q,W as R,lt as S,it as T,tt as U,rt as V,$ as W,Rt as X,p as Y,b as Z,z as _,gt as a,Z as a0,mt as a1,pt as a2,Pt as b,At as c,E as d,bt as e,M as f,Nt as g,Tt as h,U as i,Et as j,Mt as k,N as l,V as m,Ht as n,Dt as o,H as p,Ct as q,ut as r,st as s,Ot as t,ft as u,_t as v,at as w,K as x,G as y,ot as z};
