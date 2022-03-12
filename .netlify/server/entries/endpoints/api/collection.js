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
  get: () => get,
  post: () => post
});
var import_cookie = __toESM(require("cookie"));
async function get({ request }) {
  const getCookie = request.headers.get("cookie");
  if (getCookie) {
    const currentCollection = import_cookie.default.parse(getCookie).collection;
    if (currentCollection) {
      return {
        body: { collection: currentCollection }
      };
    }
  }
  return {
    status: 403
  };
}
async function post({ request }) {
  const data = await request.json();
  const collection = data.collection;
  if (!collection) {
    return {
      status: 500
    };
  }
  const new_cookie = import_cookie.default.serialize("collection", collection);
  return {
    headers: {
      "set-cookie": [new_cookie]
    },
    body: JSON.stringify({
      collection: data.collection
    })
  };
}
module.exports = __toCommonJS(stdin_exports);
