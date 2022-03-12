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
  default: () => CategoryImage
});
var import_index_92880a40 = require("./index-92880a40.js");
var import_page_af03ff04 = require("./_page_-af03ff04.js");
var import_collectionStore_store_96f51f08 = require("./collectionStore-store-96f51f08.js");
var import_host_b5b4a144 = require("./host-b5b4a144.js");
var import_axios = require("axios");
var import_cookie = require("cookie");
var import_uuid = require("@lukeed/uuid");
var import_lodash = require("lodash");
var CategoryImage_svelte_svelte_type_style_lang = "";
const css = {
  code: ".selected-container.svelte-awpa1w.svelte-awpa1w{width:100%;height:100%;pointer-events:none;z-index:4;position:absolute}.selected.svelte-awpa1w.svelte-awpa1w{border:1px white solid;background-color:rgba(0, 0, 0, 0.5)}.image-container.svelte-awpa1w.svelte-awpa1w{position:relative;cursor:pointer;pointer-events:all;width:100px;height:100px}.image-container.svelte-awpa1w img.svelte-awpa1w{width:100%;object-fit:cover;height:100%}",
  map: null
};
const CategoryImage = (0, import_index_92880a40.c)(($$result, $$props, $$bindings, slots) => {
  let $deleteHook, $$unsubscribe_deleteHook;
  $$unsubscribe_deleteHook = (0, import_index_92880a40.a)(import_page_af03ff04.d, (value) => $deleteHook = value);
  let { img } = $$props;
  let { page } = $$props;
  let { column } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.column === void 0 && $$bindings.column && column !== void 0)
    $$bindings.column(column);
  $$result.css.add(css);
  $$unsubscribe_deleteHook();
  return `${img.url ? `<div class="${"image-container svelte-awpa1w"}"><div class="${[
    "selected-container svelte-awpa1w",
    $deleteHook.deleted.find((item) => {
      return item.image_id === img._id;
    }) ? "selected" : ""
  ].join(" ").trim()}"></div>
		<img${(0, import_index_92880a40.d)("src", img.url, 0)} alt="${""}" class="${"svelte-awpa1w"}"></div>` : ``}`;
});
module.exports = __toCommonJS(stdin_exports);
