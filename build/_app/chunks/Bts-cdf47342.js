import{S as X,i as Y,s as Z,l as F,g as P,q as g,e as k,t as L,k as w,w as O,c as y,a as E,h as z,d,m as N,x as Q,b as I,L as p,y as R,j as x,o as v,B as T,n as q,p as C,N as U,F as ee}from"./vendor-bf419eb7.js";import{c as te,E as le}from"./_page_-f84985c0.js";import ae from"./CategoryImage-09f30460.js";import"./preload-helper-e4860ae8.js";import"./collectionStore-store-a57c0b6d.js";function G(c,l,a){const e=c.slice();return e[3]=l[a],e}function H(c,l,a){const e=c.slice();return e[6]=l[a],e}function J(c){let l,a,e=c[0],t=[];for(let s=0;s<e.length;s+=1)t[s]=M(G(c,e,s));const o=s=>v(t[s],1,1,()=>{t[s]=null});return{c(){for(let s=0;s<t.length;s+=1)t[s].c();l=F()},l(s){for(let f=0;f<t.length;f+=1)t[f].l(s);l=F()},m(s,f){for(let r=0;r<t.length;r+=1)t[r].m(s,f);P(s,l,f),a=!0},p(s,f){if(f&3){e=s[0];let r;for(r=0;r<e.length;r+=1){const m=G(s,e,r);t[r]?(t[r].p(m,f),g(t[r],1)):(t[r]=M(m),t[r].c(),g(t[r],1),t[r].m(l.parentNode,l))}for(q(),r=e.length;r<t.length;r+=1)o(r);C()}},i(s){if(!a){for(let f=0;f<e.length;f+=1)g(t[f]);a=!0}},o(s){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)v(t[f]);a=!1},d(s){U(t,s),s&&d(l)}}}function K(c){let l,a;return l=new ae({props:{col:"images",img:c[6],page:c[3]}}),{c(){O(l.$$.fragment)},l(e){Q(l.$$.fragment,e)},m(e,t){R(l,e,t),a=!0},p(e,t){const o={};t&1&&(o.img=e[6]),t&1&&(o.page=e[3]),l.$set(o)},i(e){a||(g(l.$$.fragment,e),a=!0)},o(e){v(l.$$.fragment,e),a=!1},d(e){T(l,e)}}}function M(c){let l,a,e,t,o=c[3].phase+"",s,f,r,m,D,$,S,j;m=new le({props:{data:c[3],options:c[1].category.endpoints}});let b=c[3].images,i=[];for(let n=0;n<b.length;n+=1)i[n]=K(H(c,b,n));const W=n=>v(i[n],1,1,()=>{i[n]=null});return{c(){l=k("div"),a=k("div"),e=k("span"),t=L("Phase "),s=L(o),f=w(),r=k("div"),O(m.$$.fragment),D=w(),$=k("div");for(let n=0;n<i.length;n+=1)i[n].c();S=w(),this.h()},l(n){l=y(n,"DIV",{class:!0});var h=E(l);a=y(h,"DIV",{class:!0});var _=E(a);e=y(_,"SPAN",{});var u=E(e);t=z(u,"Phase "),s=z(u,o),u.forEach(d),f=N(_),r=y(_,"DIV",{class:!0});var B=E(r);Q(m.$$.fragment,B),B.forEach(d),_.forEach(d),D=N(h),$=y(h,"DIV",{class:!0});var A=E($);for(let V=0;V<i.length;V+=1)i[V].l(A);A.forEach(d),S=N(h),h.forEach(d),this.h()},h(){I(r,"class","edit-bar svelte-1hi5je0"),I(a,"class","top-bar svelte-1hi5je0"),I($,"class","images-container svelte-1hi5je0"),I(l,"class","phase-container svelte-1hi5je0")},m(n,h){P(n,l,h),p(l,a),p(a,e),p(e,t),p(e,s),p(a,f),p(a,r),R(m,r,null),p(l,D),p(l,$);for(let _=0;_<i.length;_+=1)i[_].m($,null);p(l,S),j=!0},p(n,h){(!j||h&1)&&o!==(o=n[3].phase+"")&&x(s,o);const _={};if(h&1&&(_.data=n[3]),h&2&&(_.options=n[1].category.endpoints),m.$set(_),h&1){b=n[3].images;let u;for(u=0;u<b.length;u+=1){const B=H(n,b,u);i[u]?(i[u].p(B,h),g(i[u],1)):(i[u]=K(B),i[u].c(),g(i[u],1),i[u].m($,null))}for(q(),u=b.length;u<i.length;u+=1)W(u);C()}},i(n){if(!j){g(m.$$.fragment,n);for(let h=0;h<b.length;h+=1)g(i[h]);j=!0}},o(n){v(m.$$.fragment,n),i=i.filter(Boolean);for(let h=0;h<i.length;h+=1)v(i[h]);j=!1},d(n){n&&d(l),T(m),U(i,n)}}}function se(c){let l,a,e=c[0].length>0&&J(c);return{c(){l=k("div"),e&&e.c(),this.h()},l(t){l=y(t,"DIV",{class:!0});var o=E(l);e&&e.l(o),o.forEach(d),this.h()},h(){I(l,"class","wrapper svelte-1hi5je0")},m(t,o){P(t,l,o),e&&e.m(l,null),a=!0},p(t,[o]){t[0].length>0?e?(e.p(t,o),o&1&&g(e,1)):(e=J(t),e.c(),g(e,1),e.m(l,null)):e&&(q(),v(e,1,1,()=>{e=null}),C())},i(t){a||(g(e),a=!0)},o(t){v(e),a=!1},d(t){t&&d(l),e&&e.d()}}}function ne(c,l,a){let e;ee(c,te,o=>a(1,e=o));let{items:t}=l;return c.$$set=o=>{"items"in o&&a(0,t=o.items)},[t,e]}class he extends X{constructor(l){super();Y(this,l,ne,se,Z,{items:0})}}export{he as default};
