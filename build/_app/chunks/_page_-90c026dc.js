var Ce=Object.defineProperty,Re=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable;var pe=(o,e,t)=>e in o?Ce(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,$=(o,e)=>{for(var t in e||(e={}))je.call(e,t)&&pe(o,t,e[t]);if(me)for(var t of me(e))Fe.call(e,t)&&pe(o,t,e[t]);return o},he=(o,e)=>Re(o,Ue(e));import{_ as R}from"./preload-helper-e4860ae8.js";import{D as Ae,S as te,i as le,s as ne,k as V,l as z,m as N,g as O,e as E,c as k,a as w,d as h,b as m,T as ge,t as M,h as A,N as p,O as j,I as q,P as Oe,U as fe,H as F,v as _e,G as Z,R as Ve,V as X,W as ve,j as Y,X as x,Y as ue,Z as de,_ as qe,w as J,x as oe,y as K,$ as He,q as C,o as U,B as Q,a0 as ze,p as se,n as ae,E as Ye}from"./vendor-4a9258b4.js";import{c as ce,a as H,h as ie}from"./category-store-9f0f87f3.js";const Ge={},We=()=>{const o={visible:!1,content:null,inputs:{},files:{},isInserting:!1,action:null,selected:null,endpoint:{}},{subscribe:e,set:t,update:l}=Ae(o);return $({subscribe:e,set:t,update:l},{handleVisible(s,a){l(r=>(r.content=s,r.visible=!0,r.action=Ge[a],r))}})},W=We();function be(o,e,t){const l=o.slice();return l[11]=e[t],l[12]=e,l[13]=t,l}function Xe(o){let e,t,l=o[11].client_label+"",n,s,a,r,i,c,d;function u(){o[5].call(r,o[11])}return{c(){e=E("div"),t=E("label"),n=M(l),a=V(),r=E("input"),this.h()},l(f){e=k(f,"DIV",{class:!0});var g=w(e);t=k(g,"LABEL",{for:!0,class:!0});var _=w(t);n=A(_,l),_.forEach(h),a=N(g),r=k(g,"INPUT",{name:!0,class:!0,placeholder:!0}),g.forEach(h),this.h()},h(){m(t,"for",s=o[11].name),m(t,"class","form-label"),m(r,"name",i=o[11].name),m(r,"class","form-control"),m(r,"placeholder",""),m(e,"class","form-field svelte-1o0p388")},m(f,g){O(f,e,g),p(e,t),p(t,n),p(e,a),p(e,r),ve(r,o[1][o[11].name]),c||(d=j(r,"input",u),c=!0)},p(f,g){o=f,g&1&&l!==(l=o[11].client_label+"")&&Y(n,l),g&1&&s!==(s=o[11].name)&&m(t,"for",s),g&1&&i!==(i=o[11].name)&&m(r,"name",i),g&3&&r.value!==o[1][o[11].name]&&ve(r,o[1][o[11].name])},d(f){f&&h(e),c=!1,d()}}}function Ze(o){let e,t,l=o[11].client_label+"",n,s,a,r,i;return{c(){e=E("div"),t=E("label"),n=M(l),a=V(),r=E("input"),this.h()},l(c){e=k(c,"DIV",{class:!0});var d=w(e);t=k(d,"LABEL",{for:!0,class:!0});var u=w(t);n=A(u,l),u.forEach(h),a=N(d),r=k(d,"INPUT",{name:!0,class:!0,type:!0,id:!0}),d.forEach(h),this.h()},h(){m(t,"for",s=o[11].name),m(t,"class","form-label"),m(r,"name",i=o[11].name),m(r,"class","form-control"),m(r,"type","file"),m(r,"id","formFile"),m(e,"class","form-field svelte-1o0p388")},m(c,d){O(c,e,d),p(e,t),p(t,n),p(e,a),p(e,r)},p(c,d){d&1&&l!==(l=c[11].client_label+"")&&Y(n,l),d&1&&s!==(s=c[11].name)&&m(t,"for",s),d&1&&i!==(i=c[11].name)&&m(r,"name",i)},d(c){c&&h(e)}}}function Je(o){let e,t,l=o[11].client_label+"",n,s,a,r,i,c;return{c(){e=E("div"),t=E("label"),n=M(l),a=V(),r=E("input"),this.h()},l(d){e=k(d,"DIV",{class:!0});var u=w(e);t=k(u,"LABEL",{for:!0,class:!0});var f=w(t);n=A(f,l),f.forEach(h),a=N(u),r=k(u,"INPUT",{class:!0,type:!0,name:!0,id:!0}),u.forEach(h),this.h()},h(){m(t,"for",s=o[11].name),m(t,"class","form-label"),m(r,"class","form-control"),m(r,"type","file"),m(r,"name",i=o[11].name),m(r,"id",c=o[11].name),r.multiple=!0,m(e,"class","form-field svelte-1o0p388")},m(d,u){O(d,e,u),p(e,t),p(t,n),p(e,a),p(e,r)},p(d,u){u&1&&l!==(l=d[11].client_label+"")&&Y(n,l),u&1&&s!==(s=d[11].name)&&m(t,"for",s),u&1&&i!==(i=d[11].name)&&m(r,"name",i),u&1&&c!==(c=d[11].name)&&m(r,"id",c)},d(d){d&&h(e)}}}function ye(o){let e,t;return{c(){e=E("iframe"),this.h()},l(l){e=k(l,"IFRAME",{width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0});var n=w(e);n.forEach(h),this.h()},h(){m(e,"width","1264"),m(e,"height","480"),ge(e.src,t=o[6]())||m(e,"src",t),m(e,"title","YouTube video player"),m(e,"frameborder","0"),m(e,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),e.allowFullscreen=!0},m(l,n){O(l,e,n)},p(l,n){n&8&&!ge(e.src,t=l[6]())&&m(e,"src",t)},d(l){l&&h(e)}}}function Ee(o){let e,t;function l(r,i){return r[11].type==="media"&&r[11].multi?Je:r[11].type==="media"&&!r[11].multi?Ze:Xe}let n=l(o),s=n(o),a=o[11].name==="video_url"&&o[3].selected.video_url&&ye(o);return{c(){s.c(),e=V(),a&&a.c(),t=z()},l(r){s.l(r),e=N(r),a&&a.l(r),t=z()},m(r,i){s.m(r,i),O(r,e,i),a&&a.m(r,i),O(r,t,i)},p(r,i){n===(n=l(r))&&s?s.p(r,i):(s.d(1),s=n(r),s&&(s.c(),s.m(e.parentNode,e))),r[11].name==="video_url"&&r[3].selected.video_url?a?a.p(r,i):(a=ye(r),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(r){s.d(r),r&&h(e),a&&a.d(r),r&&h(t)}}}function Ke(o){let e,t,l,n,s,a,r,i,c,d=o[0],u=[];for(let f=0;f<d.length;f+=1)u[f]=Ee(be(o,d,f));return{c(){e=E("div"),t=E("div"),l=E("form");for(let f=0;f<u.length;f+=1)u[f].c();n=V(),s=E("div"),a=E("button"),r=M("Submit"),this.h()},l(f){e=k(f,"DIV",{class:!0});var g=w(e);t=k(g,"DIV",{class:!0});var _=w(t);l=k(_,"FORM",{class:!0,id:!0,action:!0});var y=w(l);for(let I=0;I<u.length;I+=1)u[I].l(y);n=N(y),s=k(y,"DIV",{class:!0});var v=w(s);a=k(v,"BUTTON",{type:!0,class:!0});var D=w(a);r=A(D,"Submit"),D.forEach(h),v.forEach(h),y.forEach(h),_.forEach(h),g.forEach(h),this.h()},h(){m(a,"type","button"),m(a,"class","btn btn-primary mb-3"),m(s,"class","col-auto"),m(l,"class","row g-3"),m(l,"id","entry-form"),m(l,"action",""),m(t,"class","form-container svelte-1o0p388"),m(e,"class","wrapper svelte-1o0p388")},m(f,g){O(f,e,g),p(e,t),p(t,l);for(let _=0;_<u.length;_+=1)u[_].m(l,null);p(l,n),p(l,s),p(s,a),p(a,r),o[7](l),i||(c=[j(a,"click",o[4]),j(t,"click",Qe),j(e,"click",o[8])],i=!0)},p(f,[g]){if(g&11){d=f[0];let _;for(_=0;_<d.length;_+=1){const y=be(f,d,_);u[_]?u[_].p(y,g):(u[_]=Ee(y),u[_].c(),u[_].m(l,n))}for(;_<u.length;_+=1)u[_].d(1);u.length=d.length}},i:q,o:q,d(f){f&&h(e),Oe(u,f),o[7](null),i=!1,fe(c)}}}const Qe=o=>{o.stopPropagation()};function $e(o,e,t){let l,n,s;F(o,W,_=>t(3,l=_)),F(o,ce,_=>t(9,n=_)),F(o,H,_=>t(10,s=_));let a=[];const r={};let i;_e(async()=>{const _=s.category;_.category==="mobile"?l.endpoint.method==="POST"?t(0,a=n.categories[l.selected.category].insertable.editableFields):t(0,a=n.categories[l.selected.category].editableFields_mobile):l.endpoint.method==="POST"?t(0,a=_.insertable.editableFields):t(0,a=n.categories[l.selected.category].editableFields)});const c=async()=>{const _=new FormData(i);_.append("category",l.selected.category),_.append("_id",l.selected._id),l.selected.page==="behind-the-scenes"&&_.append("phase",l.selected.phase);const y=l.endpoint;await Z(`/api2${y.route}`,{method:y.method,data:_,withCredentials:!0})};function d(_){r[_.name]=this.value,t(1,r)}const u=function(){var _=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,y=l.selected.video_url.match(_);return y&&y[2].length==11?"https://www.youtube.com/embed/"+y[2]:"error"};function f(_){Ve[_?"unshift":"push"](()=>{i=_,t(2,i)})}return[a,r,i,l,c,d,u,f,()=>{X(W,l.visible=!1,l)}]}class Ne extends te{constructor(e){super();le(this,e,$e,Ke,ne,{})}}var xe=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"}));const et=()=>{const o={deleted:[]},e=$({},o),{subscribe:t,set:l,update:n}=Ae(o);return $({subscribe:t,set:l,update:n},{init(){n(()=>e)},async handleDelete(){const a=[];n(r=>{const i=x(H).category;console.log(i),x(H);const c=i.endpoints.find(u=>u.method==="DELETE"&&u.type==="media"),d=r.deleted.reduce((u,f)=>(u[f.page_id]?u[f.page_id].items.push({_id:f.image_id,column:f.column}):(u[f.page_id]={},u[f.page_id].items=[{_id:f.image_id,column:f.column}]),u),{});return a.push(Z(ie+c.route,{method:"DELETE",data:{deleted:d,category:i.category},withCredentials:!0})),r}),await Promise.all(a)},async handleDeleteMobile(){const a=[];n(r=>{const i=x(ce).categories,c=x(H).category,d=r.deleted.reduce((u,f)=>{if(u[f.page_id])u[f.page_id].items.push(f.image_id);else{const _=i[f.page_category].endpoints_mobile.find(y=>y.method==="DELETE"&&y.type==="media");u[f.page_id]={items:[f.image_id],route:_.route}}return u},{});for(const u in d)if(Object.hasOwnProperty.call(d,u)){const f=d[u];a.push(Z(ie+f.route,{method:"DELETE",withCredentials:!0,data:{deleted:{[u]:f.items},category:c.category}}))}return r}),await Promise.all(a)},addItem(a){n(r=>{const i=r.deleted.findIndex(c=>a.image_id===c.image_id);return r.deleted.length===0||i<0?(r.deleted=[...r.deleted,a],r):(r.deleted=r.deleted.filter(c=>c.image_id!==a.image_id),r)})}})},ee=et();function tt(o){let e,t,l,n,s,a;return{c(){e=E("div"),t=ue("svg"),l=ue("path"),n=ue("path"),this.h()},l(r){e=k(r,"DIV",{class:!0});var i=w(e);t=de(i,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0,fill:!0});var c=w(t);l=de(c,"path",{d:!0,fill:!0});var d=w(l);d.forEach(h),n=de(c,"path",{d:!0});var u=w(n);u.forEach(h),c.forEach(h),i.forEach(h),this.h()},h(){m(l,"d","M0 0h24v24H0z"),m(l,"fill","none"),m(n,"d","M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"),m(t,"xmlns","http://www.w3.org/2000/svg"),m(t,"height","24px"),m(t,"viewBox","0 0 24 24"),m(t,"width","24px"),m(t,"fill","#000000"),m(e,"class","icon svelte-10yed2m")},m(r,i){O(r,e,i),p(e,t),p(t,l),p(t,n),s||(a=j(e,"click",o[1]),s=!0)},p:q,i:q,o:q,d(r){r&&h(e),s=!1,a()}}}function lt(o,e,t){let{toggled:l}=e;const n=()=>{t(0,l=!0)};return o.$$set=s=>{"toggled"in s&&t(0,l=s.toggled)},[l,n]}class nt extends te{constructor(e){super();le(this,e,lt,tt,ne,{toggled:0})}}function ke(o){let e,t,l,n,s,a,r,i,c,d;return{c(){e=E("div"),t=E("span"),l=M(`Confirm Deletion
					`),n=E("span"),s=M("Yes"),a=M(`/
					`),r=E("span"),i=M("No"),this.h()},l(u){e=k(u,"DIV",{class:!0});var f=w(e);t=k(f,"SPAN",{});var g=w(t);l=A(g,`Confirm Deletion
					`),n=k(g,"SPAN",{class:!0});var _=w(n);s=A(_,"Yes"),_.forEach(h),a=A(g,`/
					`),r=k(g,"SPAN",{class:!0});var y=w(r);i=A(y,"No"),y.forEach(h),g.forEach(h),f.forEach(h),this.h()},h(){m(n,"class","confirm-button confirm svelte-aycg9t"),m(r,"class","confirm-button cancel svelte-aycg9t"),m(e,"class","confirm-container svelte-aycg9t")},m(u,f){O(u,e,f),p(e,t),p(t,l),p(t,n),p(n,s),p(t,a),p(t,r),p(r,i),c||(d=[j(n,"click",o[4]),j(r,"click",o[5])],c=!0)},p:q,d(u){u&&h(e),c=!1,fe(d)}}}function ot(o){let e,t,l,n,s,a,r,i,c,d,u,f=o[2].deleted.length+"",g,_,y,v=o[0]&&ke(o);function D(T){o[6](T)}let I={};return o[0]!==void 0&&(I.toggled=o[0]),i=new nt({props:I}),Ve.push(()=>qe(i,"toggled",D)),{c(){e=E("div"),t=E("span"),l=M("Selected"),n=V(),s=E("div"),v&&v.c(),a=V(),r=E("div"),J(i.$$.fragment),d=V(),u=E("span"),g=M(f),_=M(" items"),this.h()},l(T){e=k(T,"DIV",{class:!0});var L=w(e);t=k(L,"SPAN",{});var S=w(t);l=A(S,"Selected"),S.forEach(h),n=N(L),s=k(L,"DIV",{class:!0});var P=w(s);v&&v.l(P),a=N(P),r=k(P,"DIV",{class:!0});var b=w(r);oe(i.$$.fragment,b),b.forEach(h),d=N(P),u=k(P,"SPAN",{});var B=w(u);g=A(B,f),_=A(B," items"),B.forEach(h),P.forEach(h),L.forEach(h),this.h()},h(){m(r,"class","icon-container svelte-aycg9t"),m(s,"class","right-container svelte-aycg9t"),m(e,"class","selected-container p-2 shadow-sm svelte-aycg9t")},m(T,L){O(T,e,L),p(e,t),p(t,l),p(e,n),p(e,s),v&&v.m(s,null),p(s,a),p(s,r),K(i,r,null),p(s,d),p(s,u),p(u,g),p(u,_),y=!0},p(T,[L]){T[0]?v?v.p(T,L):(v=ke(T),v.c(),v.m(s,a)):v&&(v.d(1),v=null);const S={};!c&&L&1&&(c=!0,S.toggled=T[0],He(()=>c=!1)),i.$set(S),(!y||L&4)&&f!==(f=T[2].deleted.length+"")&&Y(g,f)},i(T){y||(C(i.$$.fragment,T),y=!0)},o(T){U(i.$$.fragment,T),y=!1},d(T){T&&h(e),v&&v.d(),Q(i)}}}function rt(o,e,t){let l,n;F(o,H,d=>t(1,l=d)),F(o,ee,d=>t(2,n=d));let{pages:s}=e;_e(async()=>{});let a=!1;const r=async()=>{l.category.category==="mobile"?await ee.handleDeleteMobile():await ee.handleDelete(),t(0,a=!1),X(ee,n.deleted=[],n)},i=()=>{t(0,a=!1)};function c(d){a=d,t(0,a)}return o.$$set=d=>{"pages"in d&&t(3,s=d.pages)},[a,l,n,s,r,i,c]}class Le extends te{constructor(e){super();le(this,e,rt,ot,ne,{pages:3})}}var st=Object.freeze(Object.defineProperty({__proto__:null,default:Le},Symbol.toStringTag,{value:"Module"}));function we(o,e,t){const l=o.slice();return l[18]=e[t],l}function Se(o){let e,t=o[0],l=[];for(let n=0;n<t.length;n+=1)l[n]=De(we(o,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=z()},l(n){for(let s=0;s<l.length;s+=1)l[s].l(n);e=z()},m(n,s){for(let a=0;a<l.length;a+=1)l[a].m(n,s);O(n,e,s)},p(n,s){if(s&2043){t=n[0];let a;for(a=0;a<t.length;a+=1){const r=we(n,t,a);l[a]?l[a].p(r,s):(l[a]=De(r),l[a].c(),l[a].m(e.parentNode,e))}for(;a<l.length;a+=1)l[a].d(1);l.length=t.length}},d(n){Oe(l,n),n&&h(e)}}}function at(o){let e,t=o[18].name+"",l,n,s,a;function r(){return o[17](o[18])}return{c(){e=E("button"),l=M(t),n=V(),this.h()},l(i){e=k(i,"BUTTON",{class:!0});var c=w(e);l=A(c,t),n=N(c),c.forEach(h),this.h()},h(){m(e,"class","btn btn-outline-primary")},m(i,c){O(i,e,c),p(e,l),p(e,n),s||(a=j(e,"click",r),s=!0)},p(i,c){o=i,c&1&&t!==(t=o[18].name+"")&&Y(l,t)},d(i){i&&h(e),s=!1,a()}}}function it(o){let e,t=o[18].name+"",l,n,s,a;function r(){return o[16](o[18])}return{c(){e=E("button"),l=M(t),n=V(),this.h()},l(i){e=k(i,"BUTTON",{class:!0});var c=w(e);l=A(c,t),n=N(c),c.forEach(h),this.h()},h(){m(e,"class","btn btn-primary")},m(i,c){O(i,e,c),p(e,l),p(e,n),s||(a=j(e,"click",r),s=!0)},p(i,c){o=i,c&1&&t!==(t=o[18].name+"")&&Y(l,t)},d(i){i&&h(e),s=!1,a()}}}function ct(o){let e,t=o[18].name+"",l,n,s,a,r,i=o[6]===o[1]._id&&Pe(o);return{c(){e=E("button"),l=M(t),n=V(),i&&i.c(),s=z(),this.h()},l(c){e=k(c,"BUTTON",{class:!0});var d=w(e);l=A(d,t),d.forEach(h),n=N(c),i&&i.l(c),s=z(),this.h()},h(){m(e,"class","btn btn-danger")},m(c,d){O(c,e,d),p(e,l),O(c,n,d),i&&i.m(c,d),O(c,s,d),a||(r=j(e,"click",o[13]),a=!0)},p(c,d){d&1&&t!==(t=c[18].name+"")&&Y(l,t),c[6]===c[1]._id?i?i.p(c,d):(i=Pe(c),i.c(),i.m(s.parentNode,s)):i&&(i.d(1),i=null)},d(c){c&&h(e),c&&h(n),i&&i.d(c),c&&h(s),a=!1,r()}}}function Pe(o){let e,t,l,n,s,a,r,i,c,d;return{c(){e=E("span"),t=M(`Confirm Deletion
						`),l=E("span"),n=M("Yes"),s=M(`/
						`),a=E("span"),r=M("No"),i=V(),this.h()},l(u){e=k(u,"SPAN",{});var f=w(e);t=A(f,`Confirm Deletion
						`),l=k(f,"SPAN",{class:!0});var g=w(l);n=A(g,"Yes"),g.forEach(h),s=A(f,`/
						`),a=k(f,"SPAN",{class:!0});var _=w(a);r=A(_,"No"),_.forEach(h),i=N(f),f.forEach(h),this.h()},h(){m(l,"class","confirm-button confirm svelte-138rsv4"),m(a,"class","confirm-button cancel svelte-138rsv4")},m(u,f){O(u,e,f),p(e,t),p(e,l),p(l,n),p(e,s),p(e,a),p(a,r),p(e,i),c||(d=[j(l,"click",o[14]),j(a,"click",o[15])],c=!0)},p:q,d(u){u&&h(e),c=!1,fe(d)}}}function De(o){let e;function t(s,a){if(s[18].method==="DELETE"&&s[18].type!=="media")return ct;if(s[18].method!=="DELETE"&s[18].name!=="Save")return it;if(s[4]==="document"&&s[18].name==="Save"&&s[10].is_editing)return at}let l=t(o),n=l&&l(o);return{c(){n&&n.c(),e=z()},l(s){n&&n.l(s),e=z()},m(s,a){n&&n.m(s,a),O(s,e,a)},p(s,a){l===(l=t(s))&&n?n.p(s,a):(n&&n.d(1),n=l&&l(s),n&&(n.c(),n.m(e.parentNode,e)))},d(s){n&&n.d(s),s&&h(e)}}}function ut(o){let e,t=o[0]&&Se(o);return{c(){e=E("div"),t&&t.c(),this.h()},l(l){e=k(l,"DIV",{class:!0});var n=w(e);t&&t.l(n),n.forEach(h),this.h()},h(){m(e,"class","wrapper")},m(l,n){O(l,e,n),t&&t.m(e,null)},p(l,[n]){l[0]?t?t.p(l,n):(t=Se(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},i:q,o:q,d(l){l&&h(e),t&&t.d()}}}function dt(o,e,t){let l,n,s,a,r=q,i=()=>(r(),r=ze(f,b=>t(10,a=b)),f);F(o,H,b=>t(7,l=b)),F(o,ce,b=>t(8,n=b)),F(o,W,b=>t(9,s=b)),o.$$.on_destroy.push(()=>r());let{options:c}=e,{data:d}=e,{set_id:u}=e,{dragStore:f}=e;i();let{column:g}=e,{is_editing:_}=e,{belongs_to:y}=e,{images:v}=e,D;const I=()=>{t(6,D=d._id)},T=async()=>{const B=(l.category.category==="mobile"?n.categories[d.category].endpoints_mobile:l.category.endpoints).find(re=>re.method==="DELETE"&&re.type!=="media"),G={_id:d._id};G.phase=d.phase,await Z(ie+B.route,{method:B.method,data:G}),t(6,D=null)},L=()=>{t(6,D=null)},S=async b=>{b.name!=="Save"&&(X(W,s.visible=!0,s),X(W,s.selected=d,s),X(W,s.endpoint=b,s))},P=async b=>{const B={set_id:d._id,column:g,images:v.map((G,re)=>he($({},G),{order:re}))};d.page==="behind-the-scenes"&&(B.phase=d.phase),await Z(ie+b.route,{method:b.method,data:B}),X(f,a.is_editing=!1,a)};return o.$$set=b=>{"options"in b&&t(0,c=b.options),"data"in b&&t(1,d=b.data),"set_id"in b&&t(11,u=b.set_id),"dragStore"in b&&i(t(2,f=b.dragStore)),"column"in b&&t(3,g=b.column),"is_editing"in b&&t(12,_=b.is_editing),"belongs_to"in b&&t(4,y=b.belongs_to),"images"in b&&t(5,v=b.images)},[c,d,f,g,y,v,D,l,n,s,a,u,_,I,T,L,S,P]}class Be extends te{constructor(e){super();le(this,e,dt,ut,ne,{options:0,data:1,set_id:11,dragStore:2,column:3,is_editing:12,belongs_to:4,images:5})}}var ft=Object.freeze(Object.defineProperty({__proto__:null,default:Be},Symbol.toStringTag,{value:"Module"}));function _t(o){switch(o){case"../../lib/components/AuthModal/AuthModal.svelte":return R(()=>import("./AuthModal-d8058b78.js"),["chunks/AuthModal-d8058b78.js","assets/AuthModal-c52489ce.css","chunks/vendor-4a9258b4.js","chunks/category-store-9f0f87f3.js"]);case"../../lib/components/Bts/Bts.svelte":return R(()=>import("./Bts-03912986.js"),["chunks/Bts-03912986.js","assets/Bts-8a00e211.css","chunks/vendor-4a9258b4.js","chunks/category-store-9f0f87f3.js","chunks/CategoryImage-4643bc5a.js","assets/CategoryImage-c3bad9af.css","chunks/preload-helper-e4860ae8.js","chunks/ImagesContainer-a623449d.js","assets/ImagesContainer-6057c55b.css","chunks/v4-bf0bf616.js"]);case"../../lib/components/CarouselRenders/CarouselRenders.svelte":return R(()=>import("./CarouselRenders-f83d1293.js"),["chunks/CarouselRenders-f83d1293.js","assets/CarouselRenders-b4da9c25.css","chunks/vendor-4a9258b4.js","chunks/category-store-9f0f87f3.js","chunks/CategoryImage-4643bc5a.js","assets/CategoryImage-c3bad9af.css","chunks/preload-helper-e4860ae8.js","chunks/ImagesContainer-a623449d.js","assets/ImagesContainer-6057c55b.css","chunks/v4-bf0bf616.js"]);case"../../lib/components/CategoryImage/CategoryImage.svelte":return R(()=>import("./CategoryImage-4643bc5a.js"),["chunks/CategoryImage-4643bc5a.js","assets/CategoryImage-c3bad9af.css","chunks/vendor-4a9258b4.js","chunks/category-store-9f0f87f3.js","chunks/preload-helper-e4860ae8.js"]);case"../../lib/components/EditBar/EditBar.svelte":return R(()=>Promise.resolve().then(function(){return ft}),void 0);case"../../lib/components/EntryModal/EntryModal.svelte":return R(()=>Promise.resolve().then(function(){return xe}),void 0);case"../../lib/components/ImagePage/ImagePage.svelte":return R(()=>import("./ImagePage-5d520c17.js"),["chunks/ImagePage-5d520c17.js","chunks/vendor-4a9258b4.js","chunks/category-store-9f0f87f3.js","chunks/CategoryImage-4643bc5a.js","assets/CategoryImage-c3bad9af.css","chunks/preload-helper-e4860ae8.js"]);case"../../lib/components/ImagesContainer/ImagesContainer.svelte":return R(()=>import("./ImagesContainer-a623449d.js"),["chunks/ImagesContainer-a623449d.js","assets/ImagesContainer-6057c55b.css","chunks/vendor-4a9258b4.js","chunks/CategoryImage-4643bc5a.js","assets/CategoryImage-c3bad9af.css","chunks/category-store-9f0f87f3.js","chunks/preload-helper-e4860ae8.js"]);case"../../lib/components/MobilePages/MobilePages.svelte":return R(()=>import("./MobilePages-0b6d9048.js"),["chunks/MobilePages-0b6d9048.js","assets/MobilePages-b7d6ec09.css","chunks/vendor-4a9258b4.js","chunks/category-store-9f0f87f3.js","chunks/ImagesContainer-a623449d.js","assets/ImagesContainer-6057c55b.css","chunks/CategoryImage-4643bc5a.js","assets/CategoryImage-c3bad9af.css","chunks/preload-helper-e4860ae8.js","chunks/v4-bf0bf616.js"]);case"../../lib/components/Navbar/Navbar.svelte":return R(()=>import("./Navbar-bc0c341c.js"),["chunks/Navbar-bc0c341c.js","assets/Navbar-338c746a.css","chunks/vendor-4a9258b4.js","chunks/navigation-0e6511d1.js","chunks/singletons-d1fb5791.js","chunks/category-store-9f0f87f3.js"]);case"../../lib/components/PageCarousels/PageCarousels.svelte":return R(()=>import("./PageCarousels-1cf2e8af.js"),["chunks/PageCarousels-1cf2e8af.js","chunks/vendor-4a9258b4.js","chunks/category-store-9f0f87f3.js","chunks/ImagesContainer-a623449d.js","assets/ImagesContainer-6057c55b.css","chunks/CategoryImage-4643bc5a.js","assets/CategoryImage-c3bad9af.css","chunks/preload-helper-e4860ae8.js","chunks/v4-bf0bf616.js"]);case"../../lib/components/SelectedBar/SelectedBar.svelte":return R(()=>Promise.resolve().then(function(){return st}),void 0);case"../../lib/components/StartModal/StartModal.svelte":return R(()=>import("./StartModal-56703465.js"),["chunks/StartModal-56703465.js","assets/StartModal-917836e1.css","chunks/vendor-4a9258b4.js","chunks/category-store-9f0f87f3.js","chunks/navigation-0e6511d1.js","chunks/singletons-d1fb5791.js"]);default:return new Promise(function(e,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+o)))})}}function Ie(o){let e,t;return e=new Ne({}),{c(){J(e.$$.fragment)},l(l){oe(e.$$.fragment,l)},m(l,n){K(e,l,n),t=!0},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){U(e.$$.fragment,l),t=!1},d(l){Q(e,l)}}}function Te(o){let e,t;return e=new Le({}),{c(){J(e.$$.fragment)},l(l){oe(e.$$.fragment,l)},m(l,n){K(e,l,n),t=!0},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){U(e.$$.fragment,l),t=!1},d(l){Q(e,l)}}}function Me(o){let e,t;return e=new Be({props:{data:o[4].category,options:o[4].category.insertable.endpoints}}),{c(){J(e.$$.fragment)},l(l){oe(e.$$.fragment,l)},m(l,n){K(e,l,n),t=!0},p(l,n){const s={};n&16&&(s.data=l[4].category),n&16&&(s.options=l[4].category.insertable.endpoints),e.$set(s)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){U(e.$$.fragment,l),t=!1},d(l){Q(e,l)}}}function mt(o){let e,t,l,n,s,a=o[4].category.description+"",r,i,c,d,u,f,g,_,y,v=o[2].visible&&Ie(),D=o[3].deleted.length>0&&Te(),I=o[4].category.insertable&&Me(o);var T=o[1];function L(S){return{props:{items:S[0]}}}return T&&(_=new T(L(o))),{c(){v&&v.c(),e=V(),t=E("div"),D&&D.c(),l=V(),n=E("p"),s=M("*"),r=M(a),i=V(),c=E("p"),d=M("*Click on items to select for deletion."),u=V(),I&&I.c(),f=V(),g=E("div"),_&&J(_.$$.fragment),this.h()},l(S){v&&v.l(S),e=N(S),t=k(S,"DIV",{class:!0});var P=w(t);D&&D.l(P),l=N(P),n=k(P,"P",{class:!0});var b=w(n);s=A(b,"*"),r=A(b,a),b.forEach(h),i=N(P),c=k(P,"P",{class:!0});var B=w(c);d=A(B,"*Click on items to select for deletion."),B.forEach(h),u=N(P),I&&I.l(P),f=N(P),g=k(P,"DIV",{class:!0});var G=w(g);_&&oe(_.$$.fragment,G),G.forEach(h),P.forEach(h),this.h()},h(){m(n,"class","custom-tooltip svelte-1bacr39"),m(c,"class","custom-tooltip delete svelte-1bacr39"),m(g,"class","content-container svelte-1bacr39"),m(t,"class","page-wrapper svelte-1bacr39")},m(S,P){v&&v.m(S,P),O(S,e,P),O(S,t,P),D&&D.m(t,null),p(t,l),p(t,n),p(n,s),p(n,r),p(t,i),p(t,c),p(c,d),p(t,u),I&&I.m(t,null),p(t,f),p(t,g),_&&K(_,g,null),y=!0},p(S,[P]){S[2].visible?v?P&4&&C(v,1):(v=Ie(),v.c(),C(v,1),v.m(e.parentNode,e)):v&&(ae(),U(v,1,1,()=>{v=null}),se()),S[3].deleted.length>0?D?P&8&&C(D,1):(D=Te(),D.c(),C(D,1),D.m(t,l)):D&&(ae(),U(D,1,1,()=>{D=null}),se()),(!y||P&16)&&a!==(a=S[4].category.description+"")&&Y(r,a),S[4].category.insertable?I?(I.p(S,P),P&16&&C(I,1)):(I=Me(S),I.c(),C(I,1),I.m(t,f)):I&&(ae(),U(I,1,1,()=>{I=null}),se());const b={};if(P&1&&(b.items=S[0]),T!==(T=S[1])){if(_){ae();const B=_;U(B.$$.fragment,1,0,()=>{Q(B,1)}),se()}T?(_=new T(L(S)),J(_.$$.fragment),C(_.$$.fragment,1),K(_,g,null)):_=null}else T&&_.$set(b)},i(S){y||(C(v),C(D),C(I),_&&C(_.$$.fragment,S),y=!0)},o(S){U(v),U(D),U(I),_&&U(_.$$.fragment,S),y=!1},d(S){v&&v.d(S),S&&h(e),S&&h(t),D&&D.d(),I&&I.d(),_&&Q(_)}}}async function yt({params:o,fetch:e,session:t,stuff:l}){const n=o.page,a=x(ce).categories[n];return H.update(i=>(i.category=a,i)),{props:{data:(await Z(`/api2/api/${a.category}`,{withCredentials:!0})).data,category:a.category}}}function pt(o,e,t){let l,n,s;F(o,W,u=>t(2,l=u)),F(o,ee,u=>t(3,n=u)),F(o,H,u=>t(4,s=u));let{data:a}=e,{category:r}=e,i;const c={"bg-pages":{component:"ImagePage",options:[]},"behind-the-scenes":{component:"Bts",options:["Add Phase"]},"carousel-renders":{component:"CarouselRenders",options:["Add photos"]},"page-carousels":{component:"PageCarousels",options:["Add photos"]},mobile:{component:"MobilePages",options:["Add photos"]}};async function d(){t(1,i=null);const u=c[r].component,f=await _t(`../../lib/components/${u}/${u}.svelte`);return t(1,i=f.default),await Ye(),f}return _e(()=>{}),o.$$set=u=>{"data"in u&&t(0,a=u.data),"category"in u&&t(5,r=u.category)},o.$$.update=()=>{o.$$.dirty&32&&d()},[a,i,l,n,s,r]}class Et extends te{constructor(e){super();le(this,e,pt,mt,ne,{data:0,category:5})}}export{Be as E,Et as U,ee as d,yt as l};