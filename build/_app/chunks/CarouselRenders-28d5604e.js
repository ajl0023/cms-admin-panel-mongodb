import{S as H,i as J,s as K,e as d,w as F,k as I,l as w,c as y,a as $,x as L,d as m,m as S,b as k,g as p,y as M,q as g,t as j,h as z,L as E,o as v,B as G,n as B,p as D,N as V,F as O,v as Q}from"./vendor-bf419eb7.js";import{c as T}from"./collectionStore-store-a57c0b6d.js";import U from"./CategoryImage-09f30460.js";import{E as W}from"./_page_-f84985c0.js";import"./preload-helper-e4860ae8.js";function C(f,s,i){const a=f.slice();return a[3]=s[i],a}function N(f,s,i){const a=f.slice();return a[6]=s[i],a}function q(f,s,i){const a=f.slice();return a[9]=s[i],a[11]=i,a}function A(f){let s,i,a,r,_,t,l;return t=new U({props:{column:f[6],img:f[9],page:f[3]}}),{c(){s=d("div"),i=d("div"),a=d("span"),r=j(f[11]),_=I(),F(t.$$.fragment),this.h()},l(o){s=y(o,"DIV",{class:!0});var e=$(s);i=y(e,"DIV",{class:!0});var h=$(i);a=y(h,"SPAN",{class:!0});var n=$(a);r=z(n,f[11]),n.forEach(m),h.forEach(m),_=S(e),L(t.$$.fragment,e),e.forEach(m),this.h()},h(){k(a,"class","order svelte-1o8yovy"),k(i,"class","inner-order-container svelte-1o8yovy"),k(s,"class","order-container svelte-1o8yovy")},m(o,e){p(o,s,e),E(s,i),E(i,a),E(a,r),E(s,_),M(t,s,null),l=!0},p(o,e){const h={};e&1&&(h.img=o[9]),e&1&&(h.page=o[3]),t.$set(h)},i(o){l||(g(t.$$.fragment,o),l=!0)},o(o){v(t.$$.fragment,o),l=!1},d(o){o&&m(s),G(t)}}}function P(f){let s,i=f[6]+"",a,r,_,t,l,o=f[3][f[6]],e=[];for(let n=0;n<o.length;n+=1)e[n]=A(q(f,o,n));const h=n=>v(e[n],1,1,()=>{e[n]=null});return{c(){s=d("span"),a=j(i),r=I(),_=d("div");for(let n=0;n<e.length;n+=1)e[n].c();t=I(),this.h()},l(n){s=y(n,"SPAN",{});var c=$(s);a=z(c,i),c.forEach(m),r=S(n),_=y(n,"DIV",{class:!0});var u=$(_);for(let b=0;b<e.length;b+=1)e[b].l(u);t=S(u),u.forEach(m),this.h()},h(){k(_,"class","images-container svelte-1o8yovy")},m(n,c){p(n,s,c),E(s,a),p(n,r,c),p(n,_,c);for(let u=0;u<e.length;u+=1)e[u].m(_,null);E(_,t),l=!0},p(n,c){if(c&5){o=n[3][n[6]];let u;for(u=0;u<o.length;u+=1){const b=q(n,o,u);e[u]?(e[u].p(b,c),g(e[u],1)):(e[u]=A(b),e[u].c(),g(e[u],1),e[u].m(_,t))}for(B(),u=o.length;u<e.length;u+=1)h(u);D()}},i(n){if(!l){for(let c=0;c<o.length;c+=1)g(e[c]);l=!0}},o(n){e=e.filter(Boolean);for(let c=0;c<e.length;c+=1)v(e[c]);l=!1},d(n){n&&m(s),n&&m(r),n&&m(_),V(e,n)}}}function R(f){let s,i,a,r,_;i=new W({props:{data:f[3],options:f[1].categories[f[3].category].endpoints}});let t=f[2],l=[];for(let e=0;e<t.length;e+=1)l[e]=P(N(f,t,e));const o=e=>v(l[e],1,1,()=>{l[e]=null});return{c(){s=d("div"),F(i.$$.fragment),a=I();for(let e=0;e<l.length;e+=1)l[e].c();r=w(),this.h()},l(e){s=y(e,"DIV",{class:!0});var h=$(s);L(i.$$.fragment,h),h.forEach(m),a=S(e);for(let n=0;n<l.length;n+=1)l[n].l(e);r=w(),this.h()},h(){k(s,"class","edit-bar")},m(e,h){p(e,s,h),M(i,s,null),p(e,a,h);for(let n=0;n<l.length;n+=1)l[n].m(e,h);p(e,r,h),_=!0},p(e,h){const n={};if(h&1&&(n.data=e[3]),h&3&&(n.options=e[1].categories[e[3].category].endpoints),i.$set(n),h&5){t=e[2];let c;for(c=0;c<t.length;c+=1){const u=N(e,t,c);l[c]?(l[c].p(u,h),g(l[c],1)):(l[c]=P(u),l[c].c(),g(l[c],1),l[c].m(r.parentNode,r))}for(B(),c=t.length;c<l.length;c+=1)o(c);D()}},i(e){if(!_){g(i.$$.fragment,e);for(let h=0;h<t.length;h+=1)g(l[h]);_=!0}},o(e){v(i.$$.fragment,e),l=l.filter(Boolean);for(let h=0;h<l.length;h+=1)v(l[h]);_=!1},d(e){e&&m(s),G(i),e&&m(a),V(l,e),e&&m(r)}}}function X(f){let s,i,a=f[0],r=[];for(let t=0;t<a.length;t+=1)r[t]=R(C(f,a,t));const _=t=>v(r[t],1,1,()=>{r[t]=null});return{c(){s=d("div");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){s=y(t,"DIV",{class:!0});var l=$(s);for(let o=0;o<r.length;o+=1)r[o].l(l);l.forEach(m),this.h()},h(){k(s,"class","wrapper svelte-1o8yovy")},m(t,l){p(t,s,l);for(let o=0;o<r.length;o+=1)r[o].m(s,null);i=!0},p(t,[l]){if(l&7){a=t[0];let o;for(o=0;o<a.length;o+=1){const e=C(t,a,o);r[o]?(r[o].p(e,l),g(r[o],1)):(r[o]=R(e),r[o].c(),g(r[o],1),r[o].m(s,null))}for(B(),o=a.length;o<r.length;o+=1)_(o);D()}},i(t){if(!i){for(let l=0;l<a.length;l+=1)g(r[l]);i=!0}},o(t){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)v(r[l]);i=!1},d(t){t&&m(s),V(r,t)}}}function Y(f,s,i){let a;O(f,T,t=>i(1,a=t));let{items:r}=s;const _=["left","right","thumbs"];return Q(async()=>{}),f.$$set=t=>{"items"in t&&i(0,r=t.items)},[r,a,_]}class oe extends H{constructor(s){super();J(this,s,Y,X,K,{items:0})}}export{oe as default};
