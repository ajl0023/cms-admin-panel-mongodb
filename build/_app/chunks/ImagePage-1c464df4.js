import{S as F,i as L,s as M,e as y,t as P,k as v,w as k,c as C,a as E,h as z,d as h,m as b,x as I,b as S,g as j,L as u,y as w,_ as B,j as A,q as _,o as d,B as q,l as D,n as G,p as H,N as J,F as K,v as O}from"./vendor-bf419eb7.js";import{c as Q}from"./collectionStore-store-a57c0b6d.js";import R from"./CategoryImage-09f30460.js";import{E as T}from"./_page_-f84985c0.js";import"./preload-helper-e4860ae8.js";function N(l,n,i){const s=l.slice();return s[2]=n[i],s}function V(l){let n,i,s=B.startCase(l[2].page)+"",t,m,e,o,a,f,p;return e=new T({props:{method:"put",data:l[2],options:l[1].categories[l[2].category].endpoints}}),a=new R({props:{img:l[2].image,col:"image",page:l[2]}}),{c(){n=y("div"),i=y("div"),t=P(s),m=v(),k(e.$$.fragment),o=v(),k(a.$$.fragment),f=v(),this.h()},l(r){n=C(r,"DIV",{class:!0});var c=E(n);i=C(c,"DIV",{class:!0});var g=E(i);t=z(g,s),g.forEach(h),m=b(c),I(e.$$.fragment,c),o=b(c),I(a.$$.fragment,c),f=b(c),c.forEach(h),this.h()},h(){S(i,"class","page-title"),S(n,"class","item-container")},m(r,c){j(r,n,c),u(n,i),u(i,t),u(n,m),w(e,n,null),u(n,o),w(a,n,null),u(n,f),p=!0},p(r,c){(!p||c&1)&&s!==(s=B.startCase(r[2].page)+"")&&A(t,s);const g={};c&1&&(g.data=r[2]),c&3&&(g.options=r[1].categories[r[2].category].endpoints),e.$set(g);const $={};c&1&&($.img=r[2].image),c&1&&($.page=r[2]),a.$set($)},i(r){p||(_(e.$$.fragment,r),_(a.$$.fragment,r),p=!0)},o(r){d(e.$$.fragment,r),d(a.$$.fragment,r),p=!1},d(r){r&&h(n),q(e),q(a)}}}function U(l){let n,i,s=l[0],t=[];for(let e=0;e<s.length;e+=1)t[e]=V(N(l,s,e));const m=e=>d(t[e],1,1,()=>{t[e]=null});return{c(){for(let e=0;e<t.length;e+=1)t[e].c();n=D()},l(e){for(let o=0;o<t.length;o+=1)t[o].l(e);n=D()},m(e,o){for(let a=0;a<t.length;a+=1)t[a].m(e,o);j(e,n,o),i=!0},p(e,[o]){if(o&3){s=e[0];let a;for(a=0;a<s.length;a+=1){const f=N(e,s,a);t[a]?(t[a].p(f,o),_(t[a],1)):(t[a]=V(f),t[a].c(),_(t[a],1),t[a].m(n.parentNode,n))}for(G(),a=s.length;a<t.length;a+=1)m(a);H()}},i(e){if(!i){for(let o=0;o<s.length;o+=1)_(t[o]);i=!0}},o(e){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)d(t[o]);i=!1},d(e){J(t,e),e&&h(n)}}}function W(l,n,i){let s;K(l,Q,m=>i(1,s=m));let{items:t}=n;return O(async()=>{}),l.$$set=m=>{"items"in m&&i(0,t=m.items)},[t,s]}class te extends F{constructor(n){super();L(this,n,W,U,M,{items:0})}}export{te as default};
