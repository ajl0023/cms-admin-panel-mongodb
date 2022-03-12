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
  default: () => StartModal
});
var import_index_92880a40 = require("./index-92880a40.js");
var import_lodash = require("lodash");
var import_axios = require("axios");
var import_collectionStore_store_96f51f08 = require("./collectionStore-store-96f51f08.js");
var import_host_b5b4a144 = require("./host-b5b4a144.js");
var StartModal_svelte_svelte_type_style_lang = "";
const css = {
  code: ".button-container.svelte-wutjgc.svelte-wutjgc{margin-top:1rem}.wrapper.svelte-wutjgc.svelte-wutjgc{display:flex;align-items:center;justify-content:center;position:fixed;background-color:rgba(0, 0, 0, 0.4);top:0;left:0;bottom:0;right:0}.wrapper.svelte-wutjgc .modal-container.svelte-wutjgc{padding:30px;max-width:700px;width:100%;background-color:white;height:auto}.wrapper.svelte-wutjgc .inputs-container.svelte-wutjgc{display:flex;align-items:center}.wrapper.svelte-wutjgc .inputs-container input[type=radio].svelte-wutjgc{margin-right:5px}",
  map: null
};
const StartModal = (0, import_index_92880a40.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_collectionStore;
  $$unsubscribe_collectionStore = (0, import_index_92880a40.a)(import_collectionStore_store_96f51f08.c, (value) => value);
  let { pages } = $$props;
  let selected;
  const collections = [{ name: "maliview", label: "Maliview" }, { name: "aviator", label: "Aviator" }];
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  $$result.css.add(css);
  $$unsubscribe_collectionStore();
  return `<div class="${"wrapper svelte-wutjgc"}"><div class="${"modal-container svelte-wutjgc"}">${(0, import_index_92880a40.e)(collections, (collection) => {
    return `<div class="${"inputs-container svelte-wutjgc"}"><input${(0, import_index_92880a40.d)("value", collection.name, 0)} type="${"radio"}" name="${"collection-input"}"${(0, import_index_92880a40.d)("id", collection.name, 0)} class="${"svelte-wutjgc"}"${collection.name === selected ? (0, import_index_92880a40.d)("checked", true, 1) : ""}>
				<label${(0, import_index_92880a40.d)("for", collection, 0)}><span>${(0, import_index_92880a40.f)(collection.label)}</span></label>
			</div>`;
  })}
		<div class="${"button-container svelte-wutjgc"}"><button class="${"btn btn-primary"}">Enter</button></div></div>
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
