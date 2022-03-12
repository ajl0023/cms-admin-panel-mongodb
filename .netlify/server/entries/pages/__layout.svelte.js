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
var import_index_92880a40 = require("../../chunks/index-92880a40.js");
var import_collectionStore_store_96f51f08 = require("../../chunks/collectionStore-store-96f51f08.js");
var import_StartModal_9f835d07 = __toESM(require("../../chunks/StartModal-9f835d07.js"));
var import_Navbar_33fc9826 = __toESM(require("../../chunks/Navbar-33fc9826.js"));
var import_host_b5b4a144 = require("../../chunks/host-b5b4a144.js");
var import_axios = require("axios");
var import_lodash = require("lodash");
var global = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-hkifws{overflow-y:auto;height:100%;display:flex}",
  map: null
};
const prerender = true;
async function load({ fetch, stuff, session }) {
  return {};
}
const _layout = (0, import_index_92880a40.c)(($$result, $$props, $$bindings, slots) => {
  let $collectionStore, $$unsubscribe_collectionStore;
  $$unsubscribe_collectionStore = (0, import_index_92880a40.a)(import_collectionStore_store_96f51f08.c, (value) => $collectionStore = value);
  $$result.css.add(css);
  $$unsubscribe_collectionStore();
  return `<div class="${"wrapper svelte-hkifws"}">${!$collectionStore.collection ? `${(0, import_index_92880a40.v)(import_StartModal_9f835d07.default, "StartModal").$$render($$result, {}, {}, {})}` : `${(0, import_index_92880a40.v)(import_Navbar_33fc9826.default, "Navbar").$$render($$result, {}, {}, {})}
		${slots.default ? slots.default({}) : ``}`}
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
