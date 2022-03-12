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
  default: () => ImagePage
});
var import_index_92880a40 = require("./index-92880a40.js");
var import_collectionStore_store_96f51f08 = require("./collectionStore-store-96f51f08.js");
var import_lodash = __toESM(require("lodash"));
var import_CategoryImage_239f1e64 = __toESM(require("./CategoryImage-239f1e64.js"));
var import_page_af03ff04 = require("./_page_-af03ff04.js");
var import_host_b5b4a144 = require("./host-b5b4a144.js");
var import_axios = require("axios");
var import_cookie = require("cookie");
var import_uuid = require("@lukeed/uuid");
const ImagePage = (0, import_index_92880a40.c)(($$result, $$props, $$bindings, slots) => {
  let $collectionStore, $$unsubscribe_collectionStore;
  $$unsubscribe_collectionStore = (0, import_index_92880a40.a)(import_collectionStore_store_96f51f08.c, (value) => $collectionStore = value);
  let { items } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$unsubscribe_collectionStore();
  return `${(0, import_index_92880a40.e)(items, (item) => {
    return `<div class="${"item-container"}"><div class="${"page-title"}">${(0, import_index_92880a40.f)(import_lodash.default.startCase(item.page))}</div>

		${(0, import_index_92880a40.v)(import_page_af03ff04.E, "EditBar").$$render($$result, {
      method: "put",
      data: item,
      options: $collectionStore.categories[item.category].endpoints
    }, {}, {})}

		${(0, import_index_92880a40.v)(import_CategoryImage_239f1e64.default, "CategoryImage").$$render($$result, {
      img: item.image,
      col: "image",
      page: item
    }, {}, {})}
	</div>`;
  })}`;
});
module.exports = __toCommonJS(stdin_exports);
