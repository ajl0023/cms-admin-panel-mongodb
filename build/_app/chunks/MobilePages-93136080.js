var O=Object.defineProperty;var M=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var T=(i,e,t)=>e in i?O(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,b=(i,e)=>{for(var t in e||(e={}))Q.call(e,t)&&T(i,t,e[t]);if(M)for(var t of M(e))R.call(e,t)&&T(i,t,e[t]);return i};import{S as U,i as W,s as X,l as A,g as y,n as I,o as u,p as P,q as h,d,e as $,c as k,a as E,b as S,N as G,F as Y,w as D,x as V,L as v,y as N,B as q,t as Z,k as B,h as x,m as w}from"./vendor-f58ccb3c.js";import{c as ee}from"./category-store-95d00765.js";import{E as te}from"./_page_-6249f350.js";import H from"./ImagesContainer-318d161c.js";import{v as J}from"./v4-bf0bf616.js";import"./preload-helper-e4860ae8.js";import"./CategoryImage-a3c05f83.js";function F(i,e,t){const n=i.slice();return n[2]=e[t],n}function L(i,e,t){const n=i.slice();return n[5]=e[t],n}function ne(i){let e,t,n,s,l,o,r,a;l=new te({props:{options:i[1].categories[i[2].category].insertable.endpoints_mobile,belongs_to:"collection",data:b({},i[2])}});let g=i[2].phases,f=[];for(let c=0;c<g.length;c+=1)f[c]=j(L(i,g,c));const K=c=>u(f[c],1,1,()=>{f[c]=null});return{c(){e=$("div"),t=$("span"),n=Z("Behind The Scenes"),s=B(),D(l.$$.fragment),o=B();for(let c=0;c<f.length;c+=1)f[c].c();r=B(),this.h()},l(c){e=k(c,"DIV",{class:!0});var m=E(e);t=k(m,"SPAN",{});var p=E(t);n=x(p,"Behind The Scenes"),p.forEach(d),s=w(m),V(l.$$.fragment,m),o=w(m);for(let _=0;_<f.length;_+=1)f[_].l(m);r=w(m),m.forEach(d),this.h()},h(){S(e,"class","bts-mobile-container")},m(c,m){y(c,e,m),v(e,t),v(t,n),v(e,s),N(l,e,null),v(e,o);for(let p=0;p<f.length;p+=1)f[p].m(e,null);v(e,r),a=!0},p(c,m){const p={};if(m&3&&(p.options=c[1].categories[c[2].category].insertable.endpoints_mobile),m&1&&(p.data=b({},c[2])),l.$set(p),m&3){g=c[2].phases;let _;for(_=0;_<g.length;_+=1){const C=L(c,g,_);f[_]?(f[_].p(C,m),h(f[_],1)):(f[_]=j(C),f[_].c(),h(f[_],1),f[_].m(e,r))}for(I(),_=g.length;_<f.length;_+=1)K(_);P()}},i(c){if(!a){h(l.$$.fragment,c);for(let m=0;m<g.length;m+=1)h(f[m]);a=!0}},o(c){u(l.$$.fragment,c),f=f.filter(Boolean);for(let m=0;m<f.length;m+=1)u(f[m]);a=!1},d(c){c&&d(e),q(l),G(f,c)}}}function se(i){let e,t;return e=new H({props:{set_name:i[2].page,set_id:J(),options:i[1].categories[i[2].category].endpoints_mobile,col:"images",images:i[2].images,page:i[2]}}),{c(){D(e.$$.fragment)},l(n){V(e.$$.fragment,n)},m(n,s){N(e,n,s),t=!0},p(n,s){const l={};s&1&&(l.set_name=n[2].page),s&3&&(l.options=n[1].categories[n[2].category].endpoints_mobile),s&1&&(l.images=n[2].images),s&1&&(l.page=n[2]),e.$set(l)},i(n){t||(h(e.$$.fragment,n),t=!0)},o(n){u(e.$$.fragment,n),t=!1},d(n){q(e,n)}}}function j(i){let e,t,n,s;return n=new H({props:{options:i[1].categories[i[2].category].endpoints_mobile,set_name:"Phase "+i[5].phase,images:i[5].images,page:b(b({},i[2]),i[5]),set_id:J()}}),{c(){e=$("div"),t=$("div"),D(n.$$.fragment),this.h()},l(l){e=k(l,"DIV",{class:!0});var o=E(e);t=k(o,"DIV",{class:!0});var r=E(t);V(n.$$.fragment,r),r.forEach(d),o.forEach(d),this.h()},h(){S(t,"class","images-container svelte-9g87xh"),S(e,"class","phase-container")},m(l,o){y(l,e,o),v(e,t),N(n,t,null),s=!0},p(l,o){const r={};o&3&&(r.options=l[1].categories[l[2].category].endpoints_mobile),o&1&&(r.set_name="Phase "+l[5].phase),o&1&&(r.images=l[5].images),o&1&&(r.page=b(b({},l[2]),l[5])),n.$set(r)},i(l){s||(h(n.$$.fragment,l),s=!0)},o(l){u(n.$$.fragment,l),s=!1},d(l){l&&d(e),q(n)}}}function z(i){let e,t,n,s;const l=[se,ne],o=[];function r(a,g){return a[2].page!=="behind-the-scenes"?0:1}return e=r(i),t=o[e]=l[e](i),{c(){t.c(),n=A()},l(a){t.l(a),n=A()},m(a,g){o[e].m(a,g),y(a,n,g),s=!0},p(a,g){let f=e;e=r(a),e===f?o[e].p(a,g):(I(),u(o[f],1,1,()=>{o[f]=null}),P(),t=o[e],t?t.p(a,g):(t=o[e]=l[e](a),t.c()),h(t,1),t.m(n.parentNode,n))},i(a){s||(h(t),s=!0)},o(a){u(t),s=!1},d(a){o[e].d(a),a&&d(n)}}}function oe(i){let e,t,n=i[0],s=[];for(let o=0;o<n.length;o+=1)s[o]=z(F(i,n,o));const l=o=>u(s[o],1,1,()=>{s[o]=null});return{c(){e=$("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){e=k(o,"DIV",{class:!0});var r=E(e);for(let a=0;a<s.length;a+=1)s[a].l(r);r.forEach(d),this.h()},h(){S(e,"class","wrapper")},m(o,r){y(o,e,r);for(let a=0;a<s.length;a+=1)s[a].m(e,null);t=!0},p(o,[r]){if(r&3){n=o[0];let a;for(a=0;a<n.length;a+=1){const g=F(o,n,a);s[a]?(s[a].p(g,r),h(s[a],1)):(s[a]=z(g),s[a].c(),h(s[a],1),s[a].m(e,null))}for(I(),a=n.length;a<s.length;a+=1)l(a);P()}},i(o){if(!t){for(let r=0;r<n.length;r+=1)h(s[r]);t=!0}},o(o){s=s.filter(Boolean);for(let r=0;r<s.length;r+=1)u(s[r]);t=!1},d(o){o&&d(e),G(s,o)}}}function ae(i,e,t){let n;Y(i,ee,l=>t(1,n=l));let{items:s}=e;return i.$$set=l=>{"items"in l&&t(0,s=l.items)},[s,n]}class he extends U{constructor(e){super();W(this,e,ae,oe,X,{items:0})}}export{he as default};
