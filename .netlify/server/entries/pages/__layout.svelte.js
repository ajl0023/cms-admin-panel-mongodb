var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout,
  load: () => load,
  prerender: () => prerender
});
var import_index_8edc2136 = require("../../chunks/index-8edc2136.js");
var import_category_store_f1dd20e6 = require("../../chunks/category-store-f1dd20e6.js");
var import_StartModal_33665079 = __toESM(require("../../chunks/StartModal-33665079.js"));
var import_Navbar_7d75c8fa = __toESM(require("../../chunks/Navbar-7d75c8fa.js"));
var import_AuthModal_9e0286b4 = require("../../chunks/AuthModal-9e0286b4.js");
var import_host_ef40cb6e = require("../../chunks/host-ef40cb6e.js");
var import_axios = require("axios");
var import_lodash = require("lodash");
var global = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-hkifws{overflow-y:auto;height:100%;display:flex}",
  map: null
};
const prerender = false;
async function load({ fetch, stuff, session: session2 }) {
  return {};
}
const _layout = (0, import_index_8edc2136.c)(($$result, $$props, $$bindings, slots) => {
  let $session, $$unsubscribe_session;
  let $collectionStore, $$unsubscribe_collectionStore;
  $$unsubscribe_session = (0, import_index_8edc2136.a)(import_AuthModal_9e0286b4.s, (value) => $session = value);
  $$unsubscribe_collectionStore = (0, import_index_8edc2136.a)(import_category_store_f1dd20e6.c, (value) => $collectionStore = value);
  $$result.css.add(css);
  $$unsubscribe_session();
  $$unsubscribe_collectionStore();
  return `${$session.user.status !== "logged_in" ? `${(0, import_index_8edc2136.v)(import_AuthModal_9e0286b4.A, "AuthModal").$$render($$result, {}, {}, {})}` : `<div class="${"wrapper svelte-hkifws"}">${!$collectionStore.collection ? `${(0, import_index_8edc2136.v)(import_StartModal_33665079.default, "StartModal").$$render($$result, {}, {}, {})}` : `${(0, import_index_8edc2136.v)(import_Navbar_7d75c8fa.default, "Navbar").$$render($$result, {}, {}, {})}
			${slots.default ? slots.default({}) : ``}`}</div>`}`;
});
module.exports = __toCommonJS(stdin_exports);
