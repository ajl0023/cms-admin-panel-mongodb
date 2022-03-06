var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout,
  load: () => load
});
var import_index_c56b6a2a = require("../../chunks/index-c56b6a2a.js");
var import_host_d24b8c17 = require("../../chunks/host-d24b8c17.js");
var import_lodash = require("lodash");
const store = () => {
  const state = {
    visible: false,
    seleted: null
  };
  const { subscribe: subscribe2, set, update } = (0, import_host_d24b8c17.w)(state);
  const methods = {
    handleVisible() {
      update((s) => {
        s.visible = true;
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
const tableModalStore = store();
var Navbar_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".nav-container.svelte-9zh9lc.svelte-9zh9lc{overflow:hidden;max-width:200px;width:100%;height:100%}.nav-container.svelte-9zh9lc .nav-link.svelte-9zh9lc{display:block;color:black}.nav-container.svelte-9zh9lc .nav-link.svelte-9zh9lc::first-letter{text-transform:uppercase}.nav-container.svelte-9zh9lc .nav-link.svelte-9zh9lc:last-child{border-bottom:none}",
  map: null
};
const Navbar = (0, import_index_c56b6a2a.c)(($$result, $$props, $$bindings, slots) => {
  let { pages } = $$props;
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  $$result.css.add(css$2);
  return `<div class="${"nav-container border-1 border-end svelte-9zh9lc"}"><span>Pages</span>
	<nav class="${"nav flex-column"}">${(0, import_index_c56b6a2a.e)(pages, (page) => {
    return `${page.visible ? `<a href="${"/page/" + (0, import_index_c56b6a2a.a)(page._id)}" class="${"nav-link border-0 border-bottom svelte-9zh9lc"}">${(0, import_index_c56b6a2a.a)(page.title)}
				</a>` : ``}`;
  })}
		<button class="${"btn btn-primary"}">Add New Table</button></nav>
</div>`;
});
var global = "";
const BooleanIcon = (0, import_index_c56b6a2a.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" height="${"24px"}" viewBox="${"0 0 24 24"}" width="${"24px"}" fill="${"#000000"}"><path d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M17 7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h10c2.76 0 5-2.24 5-5s-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"}"></path></svg>`;
});
const MediaIcon = (0, import_index_c56b6a2a.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" height="${"24px"}" viewBox="${"0 0 24 24"}" width="${"24px"}" fill="${"#000000"}"><path d="${"M0 0h24v24H0z"}" fill="${"none"}"></path><path d="${"M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"}"></path></svg>`;
});
const NumberIcon = (0, import_index_c56b6a2a.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" enable-background="${"new 0 0 24 24"}" height="${"24px"}" viewBox="${"0 0 24 24"}" width="${"24px"}" fill="${"#000000"}"><g><rect fill="${"none"}" height="${"24"}" width="${"24"}"></rect></g><g><path d="${"M20.5,10L21,8h-4l1-4h-2l-1,4h-4l1-4h-2L9,8H5l-0.5,2h4l-1,4h-4L3,16h4l-1,4h2l1-4h4l-1,4h2l1-4h4l0.5-2h-4l1-4H20.5z M13.5,14h-4l1-4h4L13.5,14z"}"></path></g></svg>`;
});
const TextIcon = (0, import_index_c56b6a2a.c)(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="${"http://www.w3.org/2000/svg"}" enable-background="${"new 0 0 24 24"}" height="${"24px"}" viewBox="${"0 0 24 24"}" width="${"24px"}" fill="${"#000000"}"><g><rect fill="${"none"}" height="${"24"}" width="${"24"}"></rect></g><g><g><g><path d="${"M2.5,4v3h5v12h3V7h5V4H2.5z M21.5,9h-9v3h3v7h3v-7h3V9z"}"></path></g></g></g></svg>`;
});
var TableModal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".type-wrapper.svelte-1gowmhp.svelte-1gowmhp{display:grid;gap:10px;grid-template-columns:1fr 1fr}.type-wrapper.svelte-1gowmhp .type-container.svelte-1gowmhp{flex:50%;cursor:pointer}.type-wrapper.svelte-1gowmhp .type-container.svelte-1gowmhp:hover{background-color:rgba(170, 170, 170, 0.2)}.main-container.svelte-1gowmhp.svelte-1gowmhp{margin:auto;border-radius:4px;max-width:500px;width:100%;background-color:white}.wrapper.svelte-1gowmhp.svelte-1gowmhp{position:fixed;top:0;display:flex;align-items:center;right:0;z-index:10;left:0;bottom:0;background-color:rgba(0, 0, 0, 0.363);width:100%}",
  map: null
};
const TableModal = (0, import_index_c56b6a2a.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_tableModalStore;
  $$unsubscribe_tableModalStore = (0, import_index_c56b6a2a.b)(tableModalStore, (value) => value);
  const types = {
    boolean: {
      img: BooleanIcon,
      label: "Boolean",
      options: [{ type: "input", label: "Name" }],
      type: "boolean"
    },
    media: {
      img: MediaIcon,
      label: "Media",
      options: [
        { type: "input", label: "Name" },
        {
          type: "check-box",
          label: "Will this column contain many images?"
        }
      ],
      type: "media"
    },
    number: {
      img: NumberIcon,
      type: "Integer",
      label: "Number",
      options: [{ type: "input", label: "Name" }]
    },
    text: {
      img: TextIcon,
      type: "string",
      label: "Text",
      options: [{ type: "input", label: "Name" }]
    }
  };
  const typesArr = Object.keys(types).map((item) => {
    return types[item];
  });
  $$result.css.add(css$1);
  $$unsubscribe_tableModalStore();
  return `<div class="${"wrapper svelte-1gowmhp"}"><div class="${"main-container p-3 svelte-1gowmhp"}"><h5 class="${"main-header mb-3"}">Select Columns</h5>
		<div class="${"type-wrapper svelte-1gowmhp"}">${(0, import_index_c56b6a2a.e)(typesArr, (col) => {
    return `<div class="${"type-container border p-2 svelte-1gowmhp"}"><span class="${"type-label"}">${(0, import_index_c56b6a2a.a)(col.label)}</span>
					<div class="${"image-container mt-1"}">${(0, import_index_c56b6a2a.v)(col.img || import_index_c56b6a2a.m, "svelte:component").$$render($$result, {}, {}, {})}</div>
				</div>`;
  })}</div></div>
</div>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-hkifws{overflow-y:auto;height:100%;display:flex}",
  map: null
};
async function load({ params, fetch, session, stuff }) {
  const res = await fetch(`${import_host_d24b8c17.h}/api/categories`);
  const body = await res.json();
  const toObj = body.reduce((acc, b) => {
    acc[b._id] = b;
    return acc;
  }, {});
  import_host_d24b8c17.t.update((s) => {
    s.categories = toObj;
    return s;
  });
  if (res.ok) {
    return { props: { pages: body } };
  }
  return {
    status: res.status,
    error: new Error(`Could not load ${url}`)
  };
}
const _layout = (0, import_index_c56b6a2a.c)(($$result, $$props, $$bindings, slots) => {
  let $tableModalStore, $$unsubscribe_tableModalStore;
  $$unsubscribe_tableModalStore = (0, import_index_c56b6a2a.b)(tableModalStore, (value) => $tableModalStore = value);
  let { pages } = $$props;
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  $$result.css.add(css);
  $$unsubscribe_tableModalStore();
  return `<div class="${"wrapper svelte-hkifws"}">${$tableModalStore.visible ? `${(0, import_index_c56b6a2a.v)(TableModal, "TableModal").$$render($$result, {}, {}, {})}` : ``}
	${(0, import_index_c56b6a2a.v)(Navbar, "Navbar").$$render($$result, { pages }, {}, {})}

	${slots.default ? slots.default({}) : ``}
</div>`;
});
module.exports = __toCommonJS(stdin_exports);
