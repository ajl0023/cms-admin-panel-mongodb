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
  default: () => import_page_af03ff04.U,
  load: () => import_page_af03ff04.l
});
var import_index_92880a40 = require("../../../chunks/index-92880a40.js");
var import_page_af03ff04 = require("../../../chunks/_page_-af03ff04.js");
var import_collectionStore_store_96f51f08 = require("../../../chunks/collectionStore-store-96f51f08.js");
var import_axios = require("axios");
var import_cookie = require("cookie");
var import_uuid = require("@lukeed/uuid");
var import_host_b5b4a144 = require("../../../chunks/host-b5b4a144.js");
var import_lodash = require("lodash");
module.exports = __toCommonJS(stdin_exports);
