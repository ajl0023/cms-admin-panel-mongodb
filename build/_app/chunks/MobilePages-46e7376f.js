var fe=Object.defineProperty;var U=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var W=(r,t,o)=>t in r?fe(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o,F=(r,t)=>{for(var o in t||(t={}))ue.call(t,o)&&W(r,o,t[o]);if(U)for(var o of U(t))_e.call(t,o)&&W(r,o,t[o]);return r};import{S as ge,i as he,s as me,e as I,k as S,t as O,c as D,a as V,d as p,m as N,h as Q,b as B,g as q,L as y,_ as X,j as se,q as h,w as L,x as z,y as G,o as v,B as H,n as M,p as A,N as J,F as pe,v as de,l as Y}from"./vendor-bf419eb7.js";import{c as ve}from"./collectionStore-store-a57c0b6d.js";import ce from"./CategoryImage-09f30460.js";import{E as R}from"./_page_-f84985c0.js";import"./preload-helper-e4860ae8.js";function Z(r,t,o){const l=r.slice();return l[3]=t[o],l}function x(r,t,o){const l=r.slice();return l[9]=t[o],l}function ee(r,t,o){const l=r.slice();return l[6]=t[o],l}function te(r,t,o){const l=r.slice();return l[6]=t[o],l}function le(r){let t,o;return t=new R({props:{data:r[3],options:r[1].categories[r[3].category].insertable.endpoints_mobile}}),{c(){L(t.$$.fragment)},l(l){z(t.$$.fragment,l)},m(l,e){G(t,l,e),o=!0},p(l,e){const u={};e&1&&(u.data=l[3]),e&3&&(u.options=l[1].categories[l[3].category].insertable.endpoints_mobile),t.$set(u)},i(l){o||(h(t.$$.fragment,l),o=!0)},o(l){v(t.$$.fragment,l),o=!1},d(l){H(t,l)}}}function ne(r){let t,o;return t=new R({props:{data:r[3],options:r[1].categories[r[3].category].endpoints_mobile}}),{c(){L(t.$$.fragment)},l(l){z(t.$$.fragment,l)},m(l,e){G(t,l,e),o=!0},p(l,e){const u={};e&1&&(u.data=l[3]),e&3&&(u.options=l[1].categories[l[3].category].endpoints_mobile),t.$set(u)},i(l){o||(h(t.$$.fragment,l),o=!0)},o(l){v(t.$$.fragment,l),o=!1},d(l){H(t,l)}}}function be(r){let t,o,l=r[3].phases,e=[];for(let a=0;a<l.length;a+=1)e[a]=oe(x(r,l,a));const u=a=>v(e[a],1,1,()=>{e[a]=null});return{c(){t=I("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=D(a,"DIV",{class:!0});var i=V(t);for(let n=0;n<e.length;n+=1)e[n].l(i);i.forEach(p),this.h()},h(){B(t,"class","bts-mobile-container")},m(a,i){q(a,t,i);for(let n=0;n<e.length;n+=1)e[n].m(t,null);o=!0},p(a,i){if(i&3){l=a[3].phases;let n;for(n=0;n<l.length;n+=1){const $=x(a,l,n);e[n]?(e[n].p($,i),h(e[n],1)):(e[n]=oe($),e[n].c(),h(e[n],1),e[n].m(t,null))}for(M(),n=l.length;n<e.length;n+=1)u(n);A()}},i(a){if(!o){for(let i=0;i<l.length;i+=1)h(e[i]);o=!0}},o(a){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)v(e[i]);o=!1},d(a){a&&p(t),J(e,a)}}}function $e(r){let t,o,l=r[3].images,e=[];for(let a=0;a<l.length;a+=1)e[a]=re(te(r,l,a));const u=a=>v(e[a],1,1,()=>{e[a]=null});return{c(){for(let a=0;a<e.length;a+=1)e[a].c();t=Y()},l(a){for(let i=0;i<e.length;i+=1)e[i].l(a);t=Y()},m(a,i){for(let n=0;n<e.length;n+=1)e[n].m(a,i);q(a,t,i),o=!0},p(a,i){if(i&1){l=a[3].images;let n;for(n=0;n<l.length;n+=1){const $=te(a,l,n);e[n]?(e[n].p($,i),h(e[n],1)):(e[n]=re($),e[n].c(),h(e[n],1),e[n].m(t.parentNode,t))}for(M(),n=l.length;n<e.length;n+=1)u(n);A()}},i(a){if(!o){for(let i=0;i<l.length;i+=1)h(e[i]);o=!0}},o(a){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)v(e[i]);o=!1},d(a){J(e,a),a&&p(t)}}}function ae(r){let t,o;return t=new ce({props:{img:r[6],page:r[3]}}),{c(){L(t.$$.fragment)},l(l){z(t.$$.fragment,l)},m(l,e){G(t,l,e),o=!0},p(l,e){const u={};e&1&&(u.img=l[6]),e&1&&(u.page=l[3]),t.$set(u)},i(l){o||(h(t.$$.fragment,l),o=!0)},o(l){v(t.$$.fragment,l),o=!1},d(l){H(t,l)}}}function oe(r){let t,o,l,e,u=r[9].phase+"",a,i,n,$,w,E,b;n=new R({props:{data:F(F({},r[3]),r[9]),options:r[1].categories[r[3].category].endpoints_mobile}});let d=r[9].images,_=[];for(let s=0;s<d.length;s+=1)_[s]=ae(ee(r,d,s));const C=s=>v(_[s],1,1,()=>{_[s]=null});return{c(){t=I("div"),o=I("div"),l=I("span"),e=O("Phase "),a=O(u),i=S(),L(n.$$.fragment),$=S(),w=I("div");for(let s=0;s<_.length;s+=1)_[s].c();E=S(),this.h()},l(s){t=D(s,"DIV",{class:!0});var f=V(t);o=D(f,"DIV",{class:!0});var k=V(o);l=D(k,"SPAN",{});var g=V(l);e=Q(g,"Phase "),a=Q(g,u),g.forEach(p),i=N(k),z(n.$$.fragment,k),k.forEach(p),$=N(f),w=D(f,"DIV",{class:!0});var P=V(w);for(let c=0;c<_.length;c+=1)_[c].l(P);P.forEach(p),E=N(f),f.forEach(p),this.h()},h(){B(o,"class","top-bar"),B(w,"class","images-container svelte-65qigw"),B(t,"class","phase-container")},m(s,f){q(s,t,f),y(t,o),y(o,l),y(l,e),y(l,a),y(o,i),G(n,o,null),y(t,$),y(t,w);for(let k=0;k<_.length;k+=1)_[k].m(w,null);y(t,E),b=!0},p(s,f){(!b||f&1)&&u!==(u=s[9].phase+"")&&se(a,u);const k={};if(f&1&&(k.data=F(F({},s[3]),s[9])),f&3&&(k.options=s[1].categories[s[3].category].endpoints_mobile),n.$set(k),f&1){d=s[9].images;let g;for(g=0;g<d.length;g+=1){const P=ee(s,d,g);_[g]?(_[g].p(P,f),h(_[g],1)):(_[g]=ae(P),_[g].c(),h(_[g],1),_[g].m(w,null))}for(M(),g=d.length;g<_.length;g+=1)C(g);A()}},i(s){if(!b){h(n.$$.fragment,s);for(let f=0;f<d.length;f+=1)h(_[f]);b=!0}},o(s){v(n.$$.fragment,s),_=_.filter(Boolean);for(let f=0;f<_.length;f+=1)v(_[f]);b=!1},d(s){s&&p(t),H(n),J(_,s)}}}function re(r){let t,o;return t=new ce({props:{col:"images",img:r[6],page:r[3]}}),{c(){L(t.$$.fragment)},l(l){z(t.$$.fragment,l)},m(l,e){G(t,l,e),o=!0},p(l,e){const u={};e&1&&(u.img=l[6]),e&1&&(u.page=l[3]),t.$set(u)},i(l){o||(h(t.$$.fragment,l),o=!0)},o(l){v(t.$$.fragment,l),o=!1},d(l){H(t,l)}}}function ie(r){let t,o,l,e,u=X.startCase(r[3].page)+"",a,i,n,$,w,E,b,d,_,C,s=r[1].categories[r[3].category].insertable&&le(r),f=!r[1].categories[r[3].category].insertable&&ne(r);const k=[$e,be],g=[];function P(c,m){return c[3].page!=="behind-the-scenes"?0:1}return b=P(r),d=g[b]=k[b](r),{c(){t=I("div"),o=I("div"),l=S(),e=I("span"),a=O(u),i=S(),n=I("div"),s&&s.c(),$=S(),f&&f.c(),w=S(),E=I("div"),d.c(),_=S(),this.h()},l(c){t=D(c,"DIV",{class:!0});var m=V(t);o=D(m,"DIV",{class:!0}),V(o).forEach(p),l=N(m),e=D(m,"SPAN",{class:!0});var j=V(e);a=Q(j,u),j.forEach(p),m.forEach(p),i=N(c),n=D(c,"DIV",{class:!0});var T=V(n);s&&s.l(T),T.forEach(p),$=N(c),f&&f.l(c),w=N(c),E=D(c,"DIV",{class:!0});var K=V(E);d.l(K),_=N(K),K.forEach(p),this.h()},h(){B(o,"class","edit-bar svelte-65qigw"),B(e,"class","category-name text-decoration-underline svelte-65qigw"),B(t,"class","flex-container svelte-65qigw"),B(n,"class","document-edit-container"),B(E,"class","images-container svelte-65qigw")},m(c,m){q(c,t,m),y(t,o),y(t,l),y(t,e),y(e,a),q(c,i,m),q(c,n,m),s&&s.m(n,null),q(c,$,m),f&&f.m(c,m),q(c,w,m),q(c,E,m),g[b].m(E,null),y(E,_),C=!0},p(c,m){(!C||m&1)&&u!==(u=X.startCase(c[3].page)+"")&&se(a,u),c[1].categories[c[3].category].insertable?s?(s.p(c,m),m&3&&h(s,1)):(s=le(c),s.c(),h(s,1),s.m(n,null)):s&&(M(),v(s,1,1,()=>{s=null}),A()),c[1].categories[c[3].category].insertable?f&&(M(),v(f,1,1,()=>{f=null}),A()):f?(f.p(c,m),m&3&&h(f,1)):(f=ne(c),f.c(),h(f,1),f.m(w.parentNode,w));let j=b;b=P(c),b===j?g[b].p(c,m):(M(),v(g[j],1,1,()=>{g[j]=null}),A(),d=g[b],d?d.p(c,m):(d=g[b]=k[b](c),d.c()),h(d,1),d.m(E,_))},i(c){C||(h(s),h(f),h(d),C=!0)},o(c){v(s),v(f),v(d),C=!1},d(c){c&&p(t),c&&p(i),c&&p(n),s&&s.d(),c&&p($),f&&f.d(c),c&&p(w),c&&p(E),g[b].d()}}}function ke(r){let t,o,l=r[0],e=[];for(let a=0;a<l.length;a+=1)e[a]=ie(Z(r,l,a));const u=a=>v(e[a],1,1,()=>{e[a]=null});return{c(){t=I("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=D(a,"DIV",{class:!0});var i=V(t);for(let n=0;n<e.length;n+=1)e[n].l(i);i.forEach(p),this.h()},h(){B(t,"class","wrapper svelte-65qigw")},m(a,i){q(a,t,i);for(let n=0;n<e.length;n+=1)e[n].m(t,null);o=!0},p(a,[i]){if(i&3){l=a[0];let n;for(n=0;n<l.length;n+=1){const $=Z(a,l,n);e[n]?(e[n].p($,i),h(e[n],1)):(e[n]=ie($),e[n].c(),h(e[n],1),e[n].m(t,null))}for(M(),n=l.length;n<e.length;n+=1)u(n);A()}},i(a){if(!o){for(let i=0;i<l.length;i+=1)h(e[i]);o=!0}},o(a){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)v(e[i]);o=!1},d(a){a&&p(t),J(e,a)}}}function we(r,t,o){let l;pe(r,ve,u=>o(1,l=u));let{items:e}=t;return de(async()=>{console.log(e)}),r.$$set=u=>{"items"in u&&o(0,e=u.items)},[e,l]}class Be extends ge{constructor(t){super();he(this,t,we,ke,me,{items:0})}}export{Be as default};