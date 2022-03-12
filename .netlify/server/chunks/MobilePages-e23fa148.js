var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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
  default: () => MobilePages
});
var import_index_92880a40 = require("./index-92880a40.js");
var import_collectionStore_store_96f51f08 = require("./collectionStore-store-96f51f08.js");
var import_axios = require("axios");
var import_lodash = __toESM(require("lodash"));
var import_CategoryImage_239f1e64 = __toESM(require("./CategoryImage-239f1e64.js"));
var import_page_af03ff04 = require("./_page_-af03ff04.js");
var import_host_b5b4a144 = require("./host-b5b4a144.js");
var import_cookie = require("cookie");
var import_uuid = require("@lukeed/uuid");
var MobilePages_svelte_svelte_type_style_lang = "";
const css = {
  code: ".edit-bar.svelte-65qigw.svelte-65qigw{display:flex;align-items:flex-end}.flex-container.svelte-65qigw.svelte-65qigw{display:flex;align-items:flex-end}.flex-container.svelte-65qigw .category-name.svelte-65qigw{font-weight:600}.flex-container.svelte-65qigw .edit-bar.svelte-65qigw{margin-right:30px}.wrapper.svelte-65qigw.svelte-65qigw{margin-top:1rem}.images-container.svelte-65qigw.svelte-65qigw{display:flex;flex-wrap:wrap}",
  map: null
};
const MobilePages = (0, import_index_92880a40.c)(($$result, $$props, $$bindings, slots) => {
  let $collectionStore, $$unsubscribe_collectionStore;
  $$unsubscribe_collectionStore = (0, import_index_92880a40.a)(import_collectionStore_store_96f51f08.c, (value) => $collectionStore = value);
  let { items } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css);
  $$unsubscribe_collectionStore();
  return `<div class="${"wrapper svelte-65qigw"}">${(0, import_index_92880a40.e)(items, (page) => {
    return `<div class="${"flex-container svelte-65qigw"}"><div class="${"edit-bar svelte-65qigw"}"></div>
			<span class="${"category-name text-decoration-underline svelte-65qigw"}">${(0, import_index_92880a40.f)(import_lodash.default.startCase(page.page))}</span></div>
		<div class="${"document-edit-container"}">${$collectionStore.categories[page.category].insertable ? `${(0, import_index_92880a40.v)(import_page_af03ff04.E, "EditBar").$$render($$result, {
      data: page,
      options: $collectionStore.categories[page.category].insertable.endpoints_mobile
    }, {}, {})}` : ``}</div>
		${!$collectionStore.categories[page.category].insertable ? `${(0, import_index_92880a40.v)(import_page_af03ff04.E, "EditBar").$$render($$result, {
      data: page,
      options: $collectionStore.categories[page.category].endpoints_mobile
    }, {}, {})}` : ``}
		<div class="${"images-container svelte-65qigw"}">${page.page !== "behind-the-scenes" ? `${(0, import_index_92880a40.e)(page.images, (img) => {
      return `${(0, import_index_92880a40.v)(import_CategoryImage_239f1e64.default, "CategoryImage").$$render($$result, { col: "images", img, page }, {}, {})}`;
    })}` : `<div class="${"bts-mobile-container"}">${(0, import_index_92880a40.e)(page.phases, (phase) => {
      return `<div class="${"phase-container"}"><div class="${"top-bar"}"><span>Phase ${(0, import_index_92880a40.f)(phase.phase)}</span>
								${(0, import_index_92880a40.v)(import_page_af03ff04.E, "EditBar").$$render($$result, {
        data: __spreadValues(__spreadValues({}, page), phase),
        options: $collectionStore.categories[page.category].endpoints_mobile
      }, {}, {})}</div>
							<div class="${"images-container svelte-65qigw"}">${(0, import_index_92880a40.e)(phase.images, (img) => {
        return `${(0, import_index_92880a40.v)(import_CategoryImage_239f1e64.default, "CategoryImage").$$render($$result, { img, page }, {}, {})}`;
      })}</div>
						</div>`;
    })}
				</div>`}
		</div>`;
  })}
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
