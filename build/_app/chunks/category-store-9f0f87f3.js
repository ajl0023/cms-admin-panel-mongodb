var h=Object.defineProperty;var a=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var l=(o,t,e)=>t in o?h(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,c=(o,t)=>{for(var e in t||(t={}))b.call(t,e)&&l(o,e,t[e]);if(a)for(var e of a(t))d.call(t,e)&&l(o,e,t[e]);return o};import{D as i}from"./vendor-4a9258b4.js";let u;u="https://test12312312356415616.store";const f=u,g=()=>{const o={collection:null,categories:[]},{subscribe:t,set:e,update:s}=i(o);return c({subscribe:t,set:e,update:s},{async setCollection(r){s(n=>(n.collection=r,n)),localStorage.setItem("collection",r)}})},w=g(),p=()=>{const o={category:null,data:{}},{subscribe:t,set:e,update:s}=i(o);return c({subscribe:t,set:e,update:s},{isMobile(){return o.category.category==="mobile"}})},x=p();export{x as a,w as c,f as h};