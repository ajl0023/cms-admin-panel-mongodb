var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Navbar
});
var import_index_92880a40 = require("./index-92880a40.js");
var import_lodash = require("lodash");
var import_collectionStore_store_96f51f08 = require("./collectionStore-store-96f51f08.js");
var import_host_b5b4a144 = require("./host-b5b4a144.js");
var import_axios = require("axios");
var Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".nav-container.svelte-9zh9lc.svelte-9zh9lc{overflow:hidden;max-width:200px;width:100%;height:100%}.nav-container.svelte-9zh9lc .nav-link.svelte-9zh9lc{display:block;color:black}.nav-container.svelte-9zh9lc .nav-link.svelte-9zh9lc::first-letter{text-transform:uppercase}.nav-container.svelte-9zh9lc .nav-link.svelte-9zh9lc:last-child{border-bottom:none}",
  map: null
};
const Navbar = (0, import_index_92880a40.c)(($$result, $$props, $$bindings, slots) => {
  let $collectionStore, $$unsubscribe_collectionStore;
  $$unsubscribe_collectionStore = (0, import_index_92880a40.a)(import_collectionStore_store_96f51f08.c, (value) => $collectionStore = value);
  const categories = Object.keys($collectionStore.categories).map((cat) => {
    return $collectionStore.categories[cat];
  });
  $$result.css.add(css);
  $$unsubscribe_collectionStore();
  return `<div class="${"nav-container border-1 border-end svelte-9zh9lc"}"><span>Pages</span>
	<nav class="${"nav flex-column"}">${(0, import_index_92880a40.e)(categories, (category) => {
    return `${category.visible ? `<a href="${"/page/" + (0, import_index_92880a40.f)(category._id)}" class="${"nav-link border-0 border-bottom svelte-9zh9lc"}">${(0, import_index_92880a40.f)(category.title)}
				</a>` : ``}`;
  })}
		<button class="${"btn btn-primary"}">Add New Table</button></nav>
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
