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
  E: () => EditBar,
  U: () => U5Bpageu5D,
  c: () => categoryStore,
  d: () => deleteHook,
  l: () => load
});
var import_index_92880a40 = require("./index-92880a40.js");
var import_collectionStore_store_96f51f08 = require("./collectionStore-store-96f51f08.js");
var import_axios = __toESM(require("axios"));
var import_cookie = require("cookie");
var import_uuid = require("@lukeed/uuid");
var import_host_b5b4a144 = require("./host-b5b4a144.js");
var import_lodash = require("lodash");
const actions = {};
const store$2 = () => {
  const state = {
    visible: false,
    content: null,
    inputs: {},
    files: {},
    isInserting: false,
    action: null,
    selected: null,
    endpoint: {}
  };
  const { subscribe: subscribe2, set, update } = (0, import_collectionStore_store_96f51f08.w)(state);
  const methods = {
    handleVisible(item, action) {
      update((s) => {
        s.content = item;
        s.visible = true;
        s.action = actions[action];
        return s;
      });
    }
  };
  return __spreadValues({
    subscribe: subscribe2,
    set,
    update
  }, methods);
};
const entryModalStore = store$2();
const store$1 = () => {
  const state = {
    category: null,
    data: {}
  };
  const { subscribe: subscribe2, set, update } = (0, import_collectionStore_store_96f51f08.w)(state);
  const methods = {
    isMobile() {
      return state.category.category === "mobile";
    }
  };
  return __spreadValues({
    subscribe: subscribe2,
    set,
    update
  }, methods);
};
const categoryStore = store$1();
var EntryModal_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".form-field.svelte-1o0p388:last-child{margin-bottom:auto}.form-container.svelte-1o0p388{z-index:5;position:relative;background-color:white;max-width:800px;width:100%;padding:2rem;margin:1.5rem auto 0 auto}.wrapper.svelte-1o0p388{position:fixed;top:0;right:0;z-index:10;left:0;bottom:0;background-color:rgba(0, 0, 0, 0.363);width:100%}",
  map: null
};
const EntryModal = (0, import_index_92880a40.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_entryModalStore;
  let $$unsubscribe_collectionStore;
  let $$unsubscribe_categoryStore;
  $$unsubscribe_entryModalStore = (0, import_index_92880a40.a)(entryModalStore, (value) => value);
  $$unsubscribe_collectionStore = (0, import_index_92880a40.a)(import_collectionStore_store_96f51f08.c, (value) => value);
  $$unsubscribe_categoryStore = (0, import_index_92880a40.a)(categoryStore, (value) => value);
  let fields = [];
  let form;
  $$result.css.add(css$4);
  $$unsubscribe_entryModalStore();
  $$unsubscribe_collectionStore();
  $$unsubscribe_categoryStore();
  return `<div class="${"wrapper svelte-1o0p388"}"><div class="${"form-container svelte-1o0p388"}"><form class="${"row g-3"}" id="${"entry-form"}" action="${""}"${(0, import_index_92880a40.d)("this", form, 0)}>${(0, import_index_92880a40.e)(fields, (field) => {
    return `${field.type === "media" && field.multi ? `<div class="${"form-field svelte-1o0p388"}"><label${(0, import_index_92880a40.d)("for", field.name, 0)} class="${"form-label"}">${(0, import_index_92880a40.f)(field.client_label)}</label>
						<input class="${"form-control"}" type="${"file"}"${(0, import_index_92880a40.d)("name", field.name, 0)}${(0, import_index_92880a40.d)("id", field.name, 0)} multiple>
					</div>` : `${field.type === "media" && !field.multi ? `<div class="${"form-field svelte-1o0p388"}"><label${(0, import_index_92880a40.d)("for", field.name, 0)} class="${"form-label"}">${(0, import_index_92880a40.f)(field.client_label)}</label>
						<input${(0, import_index_92880a40.d)("name", field.name, 0)} class="${"form-control"}" type="${"file"}" id="${"formFile"}">
					</div>` : `<div class="${"form-field svelte-1o0p388"}"><label${(0, import_index_92880a40.d)("for", field.name, 0)} class="${"form-label"}">${(0, import_index_92880a40.f)(field.client_label)}</label>
						<input${(0, import_index_92880a40.d)("name", field.name, 0)} class="${"form-control"}" placeholder="${""}">
					</div>`}`}`;
  })}
			<div class="${"col-auto"}"><button type="${"button"}" class="${"btn btn-primary mb-3"}">Submit</button></div></form></div>
</div>`;
});
var EntryModal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": EntryModal
}, Symbol.toStringTag, { value: "Module" }));
const store = () => {
  const state = {
    deleted: []
  };
  const storeCopy = __spreadValues({}, state);
  const { subscribe: subscribe2, set, update } = (0, import_collectionStore_store_96f51f08.w)(state);
  const methods = {
    init() {
      update(() => {
        return storeCopy;
      });
    },
    async handleDelete() {
      const promises = [];
      update((s) => {
        const category = (0, import_index_92880a40.g)(categoryStore).category;
        (0, import_index_92880a40.g)(categoryStore);
        const del_route = category.endpoints.find((item) => {
          return item.method === "DELETE" && item.type === "media";
        });
        const deleted_items_toObj = s.deleted.reduce((acc, b) => {
          if (!acc[b.page_id]) {
            acc[b.page_id] = {};
            acc[b.page_id]["items"] = [
              {
                _id: b.image_id,
                column: b.column
              }
            ];
          } else {
            acc[b.page_id]["items"].push({
              _id: b.image_id,
              column: b.column
            });
          }
          return acc;
        }, {});
        promises.push((0, import_axios.default)("/api2" + del_route.route, {
          method: "DELETE",
          data: {
            deleted: deleted_items_toObj,
            category: category.category
          }
        }));
        return s;
      });
      await Promise.all(promises);
    },
    async handleDeleteMobile() {
      const promises = [];
      update((s) => {
        const categories = (0, import_index_92880a40.g)(import_collectionStore_store_96f51f08.c).categories;
        const category = (0, import_index_92880a40.g)(categoryStore).category;
        const deleted_items_toObj = s.deleted.reduce((acc, b) => {
          if (!acc[b.page_id]) {
            const routes = categories[b.page_category].endpoints_mobile;
            const delete_route = routes.find((item) => {
              return item.method === "DELETE" && item.type === "media";
            });
            acc[b.page_id] = { items: [b.image_id], route: delete_route.route };
          } else {
            acc[b.page_id].items.push(b.image_id);
          }
          return acc;
        }, {});
        for (const page_id in deleted_items_toObj) {
          if (Object.hasOwnProperty.call(deleted_items_toObj, page_id)) {
            const element = deleted_items_toObj[page_id];
            promises.push((0, import_axios.default)("/api2" + element.route, {
              method: "DELETE",
              data: {
                deleted: {
                  [page_id]: element.items
                },
                category: category.category
              }
            }));
          }
        }
        return s;
      });
      await Promise.all(promises);
    },
    addItem(selected) {
      update((s) => {
        const itemIndex = s.deleted.findIndex((item) => {
          return selected.image_id === item.image_id;
        });
        if (s.deleted.length === 0 || itemIndex < 0) {
          s.deleted = [...s.deleted, selected];
          return s;
        }
        s.deleted = s.deleted.filter((item) => {
          return item.image_id !== selected.image_id;
        });
        console.log(s.deleted);
        return s;
      });
    }
  };
  return __spreadValues({
    subscribe: subscribe2,
    set,
    update
  }, methods);
};
const deleteHook = store();
var DeleteIcon_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".icon.svelte-10yed2m{cursor:pointer}",
  map: null
};
const DeleteIcon = (0, import_index_92880a40.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_categoryStore;
  $$unsubscribe_categoryStore = (0, import_index_92880a40.a)(categoryStore, (value) => value);
  $$result.css.add(css$3);
  $$unsubscribe_categoryStore();
  return `<div class="${"icon svelte-10yed2m"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" height="${"24px"}" viewBox="${"0 0 24 24"}" width="${"24px"}" fill="${"#000000"}"><path d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}"></path></svg>
</div>`;
});
var SelectedBar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".right-container.svelte-18maog0.svelte-18maog0{display:flex;align-items:center}.right-container.svelte-18maog0 .icon-container.svelte-18maog0{margin-right:20px}.selected-container.svelte-18maog0.svelte-18maog0{display:flex;width:100%;justify-content:space-between}",
  map: null
};
const SelectedBar = (0, import_index_92880a40.c)(($$result, $$props, $$bindings, slots) => {
  let $deleteHook, $$unsubscribe_deleteHook;
  $$unsubscribe_deleteHook = (0, import_index_92880a40.a)(deleteHook, (value) => $deleteHook = value);
  let { pages } = $$props;
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  $$result.css.add(css$2);
  $$unsubscribe_deleteHook();
  return `<div class="${"selected-container p-2 shadow-sm svelte-18maog0"}"><span>Selected</span>
	<div class="${"right-container svelte-18maog0"}"><div class="${"icon-container svelte-18maog0"}">${(0, import_index_92880a40.v)(DeleteIcon, "DeleteIcon").$$render($$result, {}, {}, {})}</div>
		<span>${(0, import_index_92880a40.f)($deleteHook.deleted.length)} items</span></div>
</div>`;
});
var SelectedBar$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": SelectedBar
}, Symbol.toStringTag, { value: "Module" }));
var EditBar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".confirm-button.svelte-etcd{cursor:pointer}.confirm-button.confirm.svelte-etcd{color:red}",
  map: null
};
const EditBar = (0, import_index_92880a40.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_categoryStore;
  let $$unsubscribe_entryModalStore;
  $$unsubscribe_categoryStore = (0, import_index_92880a40.a)(categoryStore, (value) => value);
  $$unsubscribe_entryModalStore = (0, import_index_92880a40.a)(entryModalStore, (value) => value);
  let { options } = $$props;
  let { data } = $$props;
  let selected;
  console.log(options);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css$1);
  $$unsubscribe_categoryStore();
  $$unsubscribe_entryModalStore();
  return `<div class="${"wrapper"}">${options ? `${(0, import_index_92880a40.e)(options, (option) => {
    return `${option.method === "DELETE" && option.type !== "media" ? `<button class="${"btn btn-danger"}">${(0, import_index_92880a40.f)(option.name)}</button>
				${selected === data._id ? `<span>Confirm Deletion
						<span class="${"confirm-button confirm svelte-etcd"}">Yes</span>/
						<span class="${"confirm-button cancel svelte-etcd"}">No</span>
					</span>` : ``}` : `${option.method !== "DELETE" ? `<button class="${"btn btn-primary"}">${(0, import_index_92880a40.f)(option.name)}
				</button>` : ``}`}`;
  })}` : ``}
</div>`;
});
var EditBar$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": EditBar
}, Symbol.toStringTag, { value: "Module" }));
var _page__svelte_svelte_type_style_lang = "";
function __variableDynamicImportRuntime0__(path) {
  switch (path) {
    case "../../lib/components/Bts/Bts.svelte":
      return Promise.resolve().then(() => __toESM(require("./Bts-694eafcd.js")));
    case "../../lib/components/CarouselRenders/CarouselRenders.svelte":
      return Promise.resolve().then(() => __toESM(require("./CarouselRenders-3d2a8a31.js")));
    case "../../lib/components/CategoryImage/CategoryImage.svelte":
      return Promise.resolve().then(() => __toESM(require("./CategoryImage-239f1e64.js")));
    case "../../lib/components/ConfirmDelete/ConfirmDelete.svelte":
      return Promise.resolve().then(() => __toESM(require("./ConfirmDelete-a9bb2feb.js")));
    case "../../lib/components/EditBar/EditBar.svelte":
      return Promise.resolve().then(function() {
        return EditBar$1;
      });
    case "../../lib/components/EntryModal/EntryModal.svelte":
      return Promise.resolve().then(function() {
        return EntryModal$1;
      });
    case "../../lib/components/ImagePage/ImagePage.svelte":
      return Promise.resolve().then(() => __toESM(require("./ImagePage-8770de2c.js")));
    case "../../lib/components/MobilePages/MobilePages.svelte":
      return Promise.resolve().then(() => __toESM(require("./MobilePages-e23fa148.js")));
    case "../../lib/components/Navbar/Navbar.svelte":
      return Promise.resolve().then(() => __toESM(require("./Navbar-33fc9826.js")));
    case "../../lib/components/PageCarousels/PageCarousels.svelte":
      return Promise.resolve().then(() => __toESM(require("./PageCarousels-b39f8cec.js")));
    case "../../lib/components/SelectedBar/SelectedBar.svelte":
      return Promise.resolve().then(function() {
        return SelectedBar$1;
      });
    case "../../lib/components/StartModal/StartModal.svelte":
      return Promise.resolve().then(() => __toESM(require("./StartModal-9f835d07.js")));
    default:
      return new Promise(function(resolve, reject) {
        (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
      });
  }
}
const css = {
  code: ".content-container.svelte-1bh05a3{margin-top:30px;overflow-y:auto}.page-wrapper.svelte-1bh05a3{width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden}",
  map: null
};
async function load({ params, fetch, session, stuff }) {
  const page_id = params.page;
  const categories = (0, import_index_92880a40.g)(import_collectionStore_store_96f51f08.c).categories;
  const category = categories[page_id];
  categoryStore.update((s) => {
    s.category = category;
    return s;
  });
  const res = await fetch(`/api/category?category=${category.category}`);
  const data = await res.json();
  return {
    props: { data, category: category.category }
  };
}
const U5Bpageu5D = (0, import_index_92880a40.c)(($$result, $$props, $$bindings, slots) => {
  let $entryModalStore, $$unsubscribe_entryModalStore;
  let $deleteHook, $$unsubscribe_deleteHook;
  let $categoryStore, $$unsubscribe_categoryStore;
  $$unsubscribe_entryModalStore = (0, import_index_92880a40.a)(entryModalStore, (value) => $entryModalStore = value);
  $$unsubscribe_deleteHook = (0, import_index_92880a40.a)(deleteHook, (value) => $deleteHook = value);
  $$unsubscribe_categoryStore = (0, import_index_92880a40.a)(categoryStore, (value) => $categoryStore = value);
  let { data } = $$props;
  let { category } = $$props;
  let component;
  const componentMap = {
    "bg-pages": { component: "ImagePage", options: [] },
    "behind-the-scenes": { component: "Bts", options: ["Add Phase"] },
    "carousel-renders": {
      component: "CarouselRenders",
      options: ["Add photos"]
    },
    "page-carousels": {
      component: "PageCarousels",
      options: ["Add photos"]
    },
    mobile: {
      component: "MobilePages",
      options: ["Add photos"]
    }
  };
  async function getComponent() {
    component = null;
    const componentName = componentMap[category].component;
    const import_component = await __variableDynamicImportRuntime0__(`../../lib/components/${componentName}/${componentName}.svelte`);
    component = import_component.default;
    return import_component;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  $$result.css.add(css);
  {
    getComponent();
  }
  $$unsubscribe_entryModalStore();
  $$unsubscribe_deleteHook();
  $$unsubscribe_categoryStore();
  return `${$entryModalStore.visible ? `${(0, import_index_92880a40.v)(EntryModal, "EntryModal").$$render($$result, {}, {}, {})}` : ``}

<div class="${"page-wrapper svelte-1bh05a3"}">${$deleteHook.deleted.length > 0 ? `${(0, import_index_92880a40.v)(SelectedBar, "SelectedBar").$$render($$result, {}, {}, {})}` : ``}
	${$categoryStore.category.insertable ? `${(0, import_index_92880a40.v)(EditBar, "EditBar").$$render($$result, {
    data: $categoryStore.category,
    options: $categoryStore.category.insertable.endpoints
  }, {}, {})}` : ``}
	<div class="${"content-container svelte-1bh05a3"}">${(0, import_index_92880a40.v)(component || import_index_92880a40.m, "svelte:component").$$render($$result, { items: data }, {}, {})}</div>
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
