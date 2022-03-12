import{S as R,i as U,s as W,l as L,g as j,q as _,e as b,t as z,k as S,w as G,c as w,a as x,h as H,d,m as V,x as J,b as E,L as u,y as K,j as X,o as y,B as M,n as C,p as N,N as O,F as Z}from"./vendor-bf419eb7.js";import{c as ee,E as te}from"./_page_-f84985c0.js";import ne from"./CategoryImage-09f30460.js";import"./preload-helper-e4860ae8.js";import"./collectionStore-store-a57c0b6d.js";function P(c,t,i){const r=c.slice();return r[2]=t[i],r}function A(c,t,i){const r=c.slice();return r[5]=t[i],r}function F(c){let t,i,r=c[0],n=[];for(let l=0;l<r.length;l+=1)n[l]=Y(P(c,r,l));const g=l=>y(n[l],1,1,()=>{n[l]=null});return{c(){for(let l=0;l<n.length;l+=1)n[l].c();t=L()},l(l){for(let e=0;e<n.length;e+=1)n[e].l(l);t=L()},m(l,e){for(let a=0;a<n.length;a+=1)n[a].m(l,e);j(l,t,e),i=!0},p(l,e){if(e&3){r=l[0];let a;for(a=0;a<r.length;a+=1){const m=P(l,r,a);n[a]?(n[a].p(m,e),_(n[a],1)):(n[a]=Y(m),n[a].c(),_(n[a],1),n[a].m(t.parentNode,t))}for(C(),a=r.length;a<n.length;a+=1)g(a);N()}},i(l){if(!i){for(let e=0;e<r.length;e+=1)_(n[e]);i=!0}},o(l){n=n.filter(Boolean);for(let e=0;e<n.length;e+=1)y(n[e]);i=!1},d(l){O(n,l),l&&d(t)}}}function T(c){let t,i;return t=new ne({props:{img:c[5],page:c[2],col:"images"}}),{c(){G(t.$$.fragment)},l(r){J(t.$$.fragment,r)},m(r,n){K(t,r,n),i=!0},p(r,n){const g={};n&1&&(g.img=r[5]),n&1&&(g.page=r[2]),t.$set(g)},i(r){i||(_(t.$$.fragment,r),i=!0)},o(r){y(t.$$.fragment,r),i=!1},d(r){M(t,r)}}}function Y(c){let t,i,r,n=c[2].page+"",g,l,e,a,m,v,k,I;a=new te({props:{data:c[2],options:c[1].category.endpoints}});let $=c[2].images,s=[];for(let o=0;o<$.length;o+=1)s[o]=T(A(c,$,o));const Q=o=>y(s[o],1,1,()=>{s[o]=null});return{c(){t=b("div"),i=b("div"),r=b("span"),g=z(n),l=S(),e=b("div"),G(a.$$.fragment),m=S(),v=b("div");for(let o=0;o<s.length;o+=1)s[o].c();k=S(),this.h()},l(o){t=w(o,"DIV",{class:!0});var f=x(t);i=w(f,"DIV",{class:!0});var h=x(i);r=w(h,"SPAN",{});var p=x(r);g=H(p,n),p.forEach(d),l=V(h),e=w(h,"DIV",{class:!0});var D=x(e);J(a.$$.fragment,D),D.forEach(d),h.forEach(d),m=V(f),v=w(f,"DIV",{class:!0});var q=x(v);for(let B=0;B<s.length;B+=1)s[B].l(q);q.forEach(d),k=V(f),f.forEach(d),this.h()},h(){E(e,"class","edit-bar"),E(i,"class","top-bar"),E(v,"class","images-container"),E(t,"class","phase-container")},m(o,f){j(o,t,f),u(t,i),u(i,r),u(r,g),u(i,l),u(i,e),K(a,e,null),u(t,m),u(t,v);for(let h=0;h<s.length;h+=1)s[h].m(v,null);u(t,k),I=!0},p(o,f){(!I||f&1)&&n!==(n=o[2].page+"")&&X(g,n);const h={};if(f&1&&(h.data=o[2]),f&2&&(h.options=o[1].category.endpoints),a.$set(h),f&1){$=o[2].images;let p;for(p=0;p<$.length;p+=1){const D=A(o,$,p);s[p]?(s[p].p(D,f),_(s[p],1)):(s[p]=T(D),s[p].c(),_(s[p],1),s[p].m(v,null))}for(C(),p=$.length;p<s.length;p+=1)Q(p);N()}},i(o){if(!I){_(a.$$.fragment,o);for(let f=0;f<$.length;f+=1)_(s[f]);I=!0}},o(o){y(a.$$.fragment,o),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)y(s[f]);I=!1},d(o){o&&d(t),M(a),O(s,o)}}}function ae(c){let t,i,r,n,g,l,e=c[0].length>0&&F(c);return{c(){t=b("div"),i=b("div"),e&&e.c(),r=S(),n=b("style"),g=z(`.wrapper {
  overflow-y: auto;
}

.phase-container {
  margin-top: 30px;
}

.top-bar {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}
.top-bar .edit-bar {
  margin-left: 30px;
}

.images-container {
  display: flex;
  flex-wrap: wrap;
}
.images-container .image-container {
  width: 100px;
  padding: 2px;
  height: 100px;
}
.images-container .image-container img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}`),this.h()},l(a){t=w(a,"DIV",{class:!0});var m=x(t);i=w(m,"DIV",{class:!0});var v=x(i);e&&e.l(v),v.forEach(d),r=V(m),n=w(m,"STYLE",{lang:!0});var k=x(n);g=H(k,`.wrapper {
  overflow-y: auto;
}

.phase-container {
  margin-top: 30px;
}

.top-bar {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}
.top-bar .edit-bar {
  margin-left: 30px;
}

.images-container {
  display: flex;
  flex-wrap: wrap;
}
.images-container .image-container {
  width: 100px;
  padding: 2px;
  height: 100px;
}
.images-container .image-container img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}`),k.forEach(d),m.forEach(d),this.h()},h(){E(i,"class","wrapper"),E(n,"lang","scss"),E(t,"class","wrapper")},m(a,m){j(a,t,m),u(t,i),e&&e.m(i,null),u(t,r),u(t,n),u(n,g),l=!0},p(a,[m]){a[0].length>0?e?(e.p(a,m),m&1&&_(e,1)):(e=F(a),e.c(),_(e,1),e.m(i,null)):e&&(C(),y(e,1,1,()=>{e=null}),N())},i(a){l||(_(e),l=!0)},o(a){y(e),l=!1},d(a){a&&d(t),e&&e.d()}}}function re(c,t,i){let r;Z(c,ee,g=>i(1,r=g));let{items:n}=t;return c.$$set=g=>{"items"in g&&i(0,n=g.items)},[n,r]}class fe extends R{constructor(t){super();U(this,t,re,ae,W,{items:0})}}export{fe as default};
