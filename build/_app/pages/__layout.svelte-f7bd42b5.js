import{S as y,i as k,s as h,e as w,c as S,a as j,d as m,b as q,g as p,o as u,p as I,q as _,F as M,v as B,n as C,G as D,w as d,k as E,x as $,m as F,y as g,H as G,I as H,J,B as b,K}from"../chunks/vendor-bf419eb7.js";import{c as v}from"../chunks/collectionStore-store-a57c0b6d.js";import N from"../chunks/StartModal-092b2b95.js";import O from"../chunks/Navbar-2a866995.js";function V(l){let o,r,t;o=new O({});const c=l[2].default,s=D(c,l,l[1],null);return{c(){d(o.$$.fragment),r=E(),s&&s.c()},l(e){$(o.$$.fragment,e),r=F(e),s&&s.l(e)},m(e,a){g(o,e,a),p(e,r,a),s&&s.m(e,a),t=!0},p(e,a){s&&s.p&&(!t||a&2)&&G(s,c,e,e[1],t?J(c,e[1],a,null):H(e[1]),null)},i(e){t||(_(o.$$.fragment,e),_(s,e),t=!0)},o(e){u(o.$$.fragment,e),u(s,e),t=!1},d(e){b(o,e),e&&m(r),s&&s.d(e)}}}function z(l){let o,r;return o=new N({}),{c(){d(o.$$.fragment)},l(t){$(o.$$.fragment,t)},m(t,c){g(o,t,c),r=!0},p:K,i(t){r||(_(o.$$.fragment,t),r=!0)},o(t){u(o.$$.fragment,t),r=!1},d(t){b(o,t)}}}function A(l){let o,r,t,c;const s=[z,V],e=[];function a(n,i){return n[0].collection?1:0}return r=a(l),t=e[r]=s[r](l),{c(){o=w("div"),t.c(),this.h()},l(n){o=S(n,"DIV",{class:!0});var i=j(o);t.l(i),i.forEach(m),this.h()},h(){q(o,"class","wrapper svelte-hkifws")},m(n,i){p(n,o,i),e[r].m(o,null),c=!0},p(n,[i]){let f=r;r=a(n),r===f?e[r].p(n,i):(C(),u(e[f],1,1,()=>{e[f]=null}),I(),t=e[r],t?t.p(n,i):(t=e[r]=s[r](n),t.c()),_(t,1),t.m(o,null))},i(n){c||(_(t),c=!0)},o(n){u(t),c=!1},d(n){n&&m(o),e[r].d()}}}const U=!0;async function W({fetch:l,stuff:o,session:r}){{const t=await l("/api/collection");try{if(t.status===403)return{props:{collection:null}};const s=(await(await l("/api/categories")).json()).categories.reduce((a,n)=>(a[n._id]=n,a),{}),e=await t.json();return v.update(a=>(a.collection=e.collection,a.categories=s,a)),{}}catch{}}return{}}function L(l,o,r){let t;M(l,v,e=>r(0,t=e));let{$$slots:c={},$$scope:s}=o;return B(async()=>{}),l.$$set=e=>{"$$scope"in e&&r(1,s=e.$$scope)},[t,s,c]}class X extends y{constructor(o){super();k(this,o,L,A,h,{})}}export{X as default,W as load,U as prerender};
