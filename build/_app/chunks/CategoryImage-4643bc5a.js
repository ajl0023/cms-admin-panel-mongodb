import{S as z,i as G,s as M,e as f,k as O,c as h,a as y,d as g,m as Q,b as m,Q as u,T as b,g as H,N as v,O as _,U as T,l as k,I,H as U}from"./vendor-4a9258b4.js";import{d as S}from"./_page_-90c026dc.js";import{h as j}from"./category-store-9f0f87f3.js";import"./preload-helper-e4860ae8.js";function C(l){let t,e,i,a,n,c,o;return{c(){t=f("div"),e=f("div"),i=O(),a=f("img"),this.h()},l(d){t=h(d,"DIV",{class:!0});var r=y(t);e=h(r,"DIV",{class:!0}),y(e).forEach(g),i=Q(r),a=h(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(g),this.h()},h(){m(e,"class","selected-container svelte-138gyv3"),u(e,"selected",l[6].deleted.find(l[7])),b(a.src,n=l[0].url)||m(a,"src",n),m(a,"alt",""),m(a,"class","svelte-138gyv3"),m(t,"class","image-container svelte-138gyv3"),u(t,"thumbs",l[2]==="thumbs")},m(d,r){H(d,t,r),v(t,e),v(t,i),v(t,a),c||(o=[_(t,"dragstart",l[8]),_(t,"dragover",l[9]),_(t,"dragend",l[10]),_(t,"click",l[11])],c=!0)},p(d,r){r&65&&u(e,"selected",d[6].deleted.find(d[7])),r&1&&!b(a.src,n=d[0].url)&&m(a,"src",n),r&4&&u(t,"thumbs",d[2]==="thumbs")},d(d){d&&g(t),c=!1,T(o)}}}function w(l){let t,e=l[0].url&&C(l);return{c(){e&&e.c(),t=k()},l(i){e&&e.l(i),t=k()},m(i,a){e&&e.m(i,a),H(i,t,a)},p(i,[a]){i[0].url?e?e.p(i,a):(e=C(i),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null)},i:I,o:I,d(i){e&&e.d(i),i&&g(t)}}}function A(l,t,e){let i;U(l,S,s=>e(6,i=s));let{img:a}=t,{page:n}=t,{column:c}=t,{index:o}=t,{set_id:d}=t,{dragStore:r}=t;const N=s=>s.image_id===a._id,q=s=>{r.dragStart(s,a,o,d)},D=s=>{r.dragover(o)},E=s=>{r.dragend(s)},V=()=>{S.addItem({image_id:a._id,page_id:n._id,page_category:n.category,column:c})};return l.$$set=s=>{"img"in s&&e(0,a=s.img),"page"in s&&e(1,n=s.page),"column"in s&&e(2,c=s.column),"index"in s&&e(3,o=s.index),"set_id"in s&&e(4,d=s.set_id),"dragStore"in s&&e(5,r=s.dragStore)},l.$$.update=()=>{l.$$.dirty&1&&a&&a.url&&e(0,a.url=a.url.replace("https://test12312312356415616.store",j)+"?size=true",a)},[a,n,c,o,d,r,i,N,q,D,E,V]}class L extends z{constructor(t){super();G(this,t,A,w,M,{img:0,page:1,column:2,index:3,set_id:4,dragStore:5})}}export{L as default};