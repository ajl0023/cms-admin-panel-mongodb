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
  default: () => PageCarousels
});
var import_index_92880a40 = require("./index-92880a40.js");
var import_page_af03ff04 = require("./_page_-af03ff04.js");
var import_CategoryImage_239f1e64 = __toESM(require("./CategoryImage-239f1e64.js"));
var import_collectionStore_store_96f51f08 = require("./collectionStore-store-96f51f08.js");
var import_host_b5b4a144 = require("./host-b5b4a144.js");
var import_axios = require("axios");
var import_cookie = require("cookie");
var import_uuid = require("@lukeed/uuid");
var import_lodash = require("lodash");
const PageCarousels = (0, import_index_92880a40.c)(($$result, $$props, $$bindings, slots) => {
  let $categoryStore, $$unsubscribe_categoryStore;
  $$unsubscribe_categoryStore = (0, import_index_92880a40.a)(import_page_af03ff04.c, (value) => $categoryStore = value);
  let { items } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$unsubscribe_categoryStore();
  return `<div class="${"wrapper"}"><div class="${"wrapper"}">${items.length > 0 ? `${(0, import_index_92880a40.e)(items, (page) => {
    return `<div class="${"phase-container"}"><div class="${"top-bar"}"><span>${(0, import_index_92880a40.f)(page.page)}</span>
						<div class="${"edit-bar"}">${(0, import_index_92880a40.v)(import_page_af03ff04.E, "EditBar").$$render($$result, {
      data: page,
      options: $categoryStore.category.endpoints
    }, {}, {})}
						</div></div>
					<div class="${"images-container"}">${(0, import_index_92880a40.e)(page.images, (img) => {
      return `${(0, import_index_92880a40.v)(import_CategoryImage_239f1e64.default, "CategoryImage").$$render($$result, { img, page, col: "images" }, {}, {})}`;
    })}</div>
				</div>`;
  })}` : ``}</div>

	<style lang="${"scss"}">.wrapper {
  overflow-y: auto;
}

.phase-container {
  margin-top: 30px;
}

.top-bar {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}
.top-bar .edit-bar {
  margin-left: 30px;
}

.images-container {
  display: flex;
  flex-wrap: wrap;
}
.images-container .image-container {
  width: 100px;
  padding: 2px;
  height: 100px;
}
.images-container .image-container img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}</style>
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
