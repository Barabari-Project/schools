var B=Object.defineProperty;var O=(t,n,e)=>n in t?B(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>(O(t,typeof n!="symbol"?n+"":n,e),e);function G(){}function R(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function it(){return Object.create(null)}function F(t){t.forEach(z)}function lt(t){return typeof t=="function"}function ct(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let m;function rt(t,n){return t===n?!0:(m||(m=document.createElement("a")),m.href=n,t===m.href)}function st(t){return Object.keys(t).length===0}function W(t,...n){if(t==null){for(const i of n)i(void 0);return G}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ot(t,n,e){t.$$.on_destroy.push(W(n,e))}function ut(t,n,e,i){if(t){const l=M(t,n,e,i);return t[0](l)}}function M(t,n,e,i){return t[1]&&i?R(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const l=t[2](i(e));if(n.dirty===void 0)return l;if(typeof l=="object"){const s=[],c=Math.max(n.dirty.length,l.length);for(let o=0;o<c;o+=1)s[o]=n.dirty[o]|l[o];return s}return n.dirty|l}return n.dirty}function ft(t,n,e,i,l,s){if(l){const c=M(n,e,i,s);t.p(c,l)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function dt(t){return t??""}let y=!1;function ht(){y=!0}function mt(){y=!1}function I(t,n,e,i){for(;t<n;){const l=t+(n-t>>1);e(l)<=i?t=l+1:n=l}return t}function J(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let l=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(l>0&&n[e[l]].claim_order<=u?l+1:I(1,l,q=>n[e[q]].claim_order,u))-1;i[r]=e[a]+1;const w=a+1;e[w]=r,l=Math.max(w,l)}const s=[],c=[];let o=n.length-1;for(let r=e[l]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);o>=r;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);s.reverse(),c.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<c.length;r++){for(;u<s.length&&c[r].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(c[r],a)}}function K(t,n){if(y){for(J(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function Q(t,n,e){t.insertBefore(n,e||null)}function U(t,n,e){y&&!e?K(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function L(t){return document.createElement(t)}function S(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function yt(){return N(" ")}function bt(){return N("")}function gt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function xt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Et(t){return t.dataset.svelteH}function Tt(t){return Array.from(t.childNodes)}function j(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function C(t,n,e,i,l=!1){j(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const r=e(o);return r===void 0?t.splice(c,1):t[c]=r,l||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const r=e(o);return r===void 0?t.splice(c,1):t[c]=r,l?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function D(t,n,e,i){return C(t,l=>l.nodeName===n,l=>{const s=[];for(let c=0;c<l.attributes.length;c++){const o=l.attributes[c];e[o.name]||s.push(o.name)}s.forEach(c=>l.removeAttribute(c))},()=>i(n))}function vt(t,n,e){return D(t,n,e,L)}function Nt(t,n,e){return D(t,n,e,S)}function V(t,n){return C(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function wt(t){return V(t," ")}function A(t,n,e){for(let i=e;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===n)return i}return-1}function At(t,n){const e=A(t,"HTML_TAG_START",0),i=A(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new k(n);j(t);const l=t.splice(e,i-e+1);E(l[0]),E(l[l.length-1]);const s=l.slice(1,l.length-1);for(const c of s)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new k(n,s)}function kt(t,n){n=""+n,t.data!==n&&(t.data=n)}function Ht(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function X(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function Mt(t,n){const e=[];let i=0;for(const l of n.childNodes)if(l.nodeType===8){const s=l.textContent.trim();s===`HEAD_${t}_END`?(i-=1,e.push(l)):s===`HEAD_${t}_START`&&(i+=1,e.push(l))}else i>0&&e.push(l);return e}class Y{constructor(n=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=S(e.nodeName):this.e=L(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)Q(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(E)}}class k extends Y{constructor(e=!1,i){super(e);f(this,"l");this.e=this.n=null,this.l=i}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let i=0;i<this.n.length;i+=1)U(this.t,this.n[i],e)}}function Lt(t,n){return new t(n)}let p;function g(t){p=t}function b(){if(!p)throw new Error("Function called outside component initialization");return p}function St(t){b().$$.on_mount.push(t)}function jt(t){b().$$.after_update.push(t)}function Ct(t){b().$$.on_destroy.push(t)}function Dt(){const t=b();return(n,e,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[n];if(l){const s=X(n,e,{cancelable:i});return l.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}const h=[],H=[];let d=[];const T=[],P=Promise.resolve();let v=!1;function Z(){v||(v=!0,P.then(tt))}function Pt(){return Z(),P}function $(t){d.push(t)}function qt(t){T.push(t)}const x=new Set;let _=0;function tt(){if(_!==0)return;const t=p;do{try{for(;_<h.length;){const n=h[_];_++,g(n),nt(n.$$)}}catch(n){throw h.length=0,_=0,n}for(g(null),h.length=0,_=0;H.length;)H.pop()();for(let n=0;n<d.length;n+=1){const e=d[n];x.has(e)||(x.add(e),e())}d.length=0}while(h.length);for(;T.length;)T.pop()();v=!1,x.clear(),g(t)}function nt(t){if(t.fragment!==null){t.update(),F(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach($)}}function Bt(t){const n=[],e=[];d.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),d=n}export{Dt as A,Ct as B,Et as C,gt as D,qt as E,S as F,Mt as G,Nt as H,rt as I,pt as J,k as K,At as L,dt as M,F as N,it as O,tt as P,lt as Q,st as R,$ as S,Bt as T,p as U,g as V,z as W,h as X,Z as Y,ht as Z,mt as _,yt as a,jt as b,wt as c,E as d,bt as e,L as f,vt as g,Tt as h,U as i,xt as j,Ht as k,N as l,V as m,kt as n,St as o,H as p,Lt as q,ut as r,ct as s,Pt as t,ft as u,_t as v,at as w,K as x,G as y,ot as z};