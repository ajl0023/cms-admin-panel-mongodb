import{S as A,i as L,s as P,e as m,k as M,t as N,c as g,a as y,m as O,h as D,d as p,b as v,g as T,L as f,M as V,K as S,N as B,F as U,v as q,O as C}from"./vendor-bf419eb7.js";import{c as k}from"./collectionStore-store-a57c0b6d.js";function j(n,s,e){const c=n.slice();return c[7]=s[e],c}function I(n){let s,e,c,_,o,r,d,b=n[7].label+"",u,l,a,h;return{c(){s=m("div"),e=m("input"),o=M(),r=m("label"),d=m("span"),u=N(b),this.h()},l(t){s=g(t,"DIV",{class:!0});var i=y(s);e=g(i,"INPUT",{type:!0,name:!0,id:!0,class:!0}),o=O(i),r=g(i,"LABEL",{for:!0});var E=y(r);d=g(E,"SPAN",{});var w=y(d);u=D(w,b),w.forEach(p),E.forEach(p),i.forEach(p),this.h()},h(){e.__value=c=n[7].name,e.value=e.__value,v(e,"type","radio"),v(e,"name","collection-input"),v(e,"id",_=n[7].name),v(e,"class","svelte-wutjgc"),n[5][0].push(e),v(r,"for",l=n[7]),v(s,"class","inputs-container svelte-wutjgc")},m(t,i){T(t,s,i),f(s,e),e.checked=e.__value===n[0],f(s,o),f(s,r),f(r,d),f(d,u),a||(h=V(e,"change",n[4]),a=!0)},p(t,i){i&1&&(e.checked=e.__value===t[0])},d(t){t&&p(s),n[5][0].splice(n[5][0].indexOf(e),1),a=!1,h()}}}function F(n){let s,e,c,_,o,r,d,b,u=n[2],l=[];for(let a=0;a<u.length;a+=1)l[a]=I(j(n,u,a));return{c(){s=m("div"),e=m("div");for(let a=0;a<l.length;a+=1)l[a].c();c=M(),_=m("div"),o=m("button"),r=N("Enter"),this.h()},l(a){s=g(a,"DIV",{class:!0});var h=y(s);e=g(h,"DIV",{class:!0});var t=y(e);for(let w=0;w<l.length;w+=1)l[w].l(t);c=O(t),_=g(t,"DIV",{class:!0});var i=y(_);o=g(i,"BUTTON",{class:!0});var E=y(o);r=D(E,"Enter"),E.forEach(p),i.forEach(p),t.forEach(p),h.forEach(p),this.h()},h(){v(o,"class","btn btn-primary"),v(_,"class","button-container svelte-wutjgc"),v(e,"class","modal-container svelte-wutjgc"),v(s,"class","wrapper svelte-wutjgc")},m(a,h){T(a,s,h),f(s,e);for(let t=0;t<l.length;t+=1)l[t].m(e,null);f(e,c),f(e,_),f(_,o),f(o,r),d||(b=V(o,"click",n[6]),d=!0)},p(a,[h]){if(h&5){u=a[2];let t;for(t=0;t<u.length;t+=1){const i=j(a,u,t);l[t]?l[t].p(i,h):(l[t]=I(i),l[t].c(),l[t].m(e,c))}for(;t<l.length;t+=1)l[t].d(1);l.length=u.length}},i:S,o:S,d(a){a&&p(s),B(l,a),d=!1,b()}}}function J(n,s,e){let c;U(n,k,l=>e(1,c=l));let{pages:_}=s,o;q(async()=>{});const r=[{name:"maliview",label:"Maliview"},{name:"aviator",label:"Aviator"}],d=[[]];function b(){o=this.__value,e(0,o)}const u=async()=>{const a=await(await fetch("/api/collection",{method:"POST",body:JSON.stringify({collection:o})})).json();C(k,c.collection=a.collection,c)};return n.$$set=l=>{"pages"in l&&e(3,_=l.pages)},[o,c,r,_,b,d,u]}class G extends A{constructor(s){super();L(this,s,J,F,P,{pages:3})}}export{G as default};
