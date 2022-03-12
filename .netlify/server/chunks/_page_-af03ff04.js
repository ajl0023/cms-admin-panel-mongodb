import { c as create_ssr_component, a as subscribe, d as add_attribute, e as each, f as escape, g as get_store_value, v as validate_component, m as missing_component } from "./index-92880a40.js";
import { w as writable, c as collectionStore } from "./collectionStore-store-96f51f08.js";
import axios from "axios";
import "cookie";
import "@lukeed/uuid";
import "./host-b5b4a144.js";
import "lodash";
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
  const { subscribe: subscribe2, set, update } = writable(state);
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
  return {
    subscribe: subscribe2,
    set,
    update,
    ...methods
  };
};
const entryModalStore = store$2();
const store$1 = () => {
  const state = {
    category: null,
    data: {}
  };
  const { subscribe: subscribe2, set, update } = writable(state);
  const methods = {
    isMobile() {
      return state.category.category === "mobile";
    }
  };
  return {
    subscribe: subscribe2,
    set,
    update,
    ...methods
  };
};
const categoryStore = store$1();
var EntryModal_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".form-field.svelte-1o0p388:last-child{margin-bottom:auto}.form-container.svelte-1o0p388{z-index:5;position:relative;background-color:white;max-width:800px;width:100%;padding:2rem;margin:1.5rem auto 0 auto}.wrapper.svelte-1o0p388{position:fixed;top:0;right:0;z-index:10;left:0;bottom:0;background-color:rgba(0, 0, 0, 0.363);width:100%}",
  map: null
};
const EntryModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_entryModalStore;
  let $$unsubscribe_collectionStore;
  let $$unsubscribe_categoryStore;
  $$unsubscribe_entryModalStore = subscribe(entryModalStore, (value) => value);
  $$unsubscribe_collectionStore = subscribe(collectionStore, (value) => value);
  $$unsubscribe_categoryStore = subscribe(categoryStore, (value) => value);
  let fields = [];
  let form;
  $$result.css.add(css$4);
  $$unsubscribe_entryModalStore();
  $$unsubscribe_collectionStore();
  $$unsubscribe_categoryStore();
  return `<div class="${"wrapper svelte-1o0p388"}"><div class="${"form-container svelte-1o0p388"}"><form class="${"row g-3"}" id="${"entry-form"}" action="${""}"${add_attribute("this", form, 0)}>${each(fields, (field) => {
    return `${field.type === "media" && field.multi ? `<div class="${"form-field svelte-1o0p388"}"><label${add_attribute("for", field.name, 0)} class="${"form-label"}">${escape(field.client_label)}</label>
						<input class="${"form-control"}" type="${"file"}"${add_attribute("name", field.name, 0)}${add_attribute("id", field.name, 0)} multiple>
					</div>` : `${field.type === "media" && !field.multi ? `<div class="${"form-field svelte-1o0p388"}"><label${add_attribute("for", field.name, 0)} class="${"form-label"}">${escape(field.client_label)}</label>
						<input${add_attribute("name", field.name, 0)} class="${"form-control"}" type="${"file"}" id="${"formFile"}">
					</div>` : `<div class="${"form-field svelte-1o0p388"}"><label${add_attribute("for", field.name, 0)} class="${"form-label"}">${escape(field.client_label)}</label>
						<input${add_attribute("name", field.name, 0)} class="${"form-control"}" placeholder="${""}">
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
  const storeCopy = { ...state };
  const { subscribe: subscribe2, set, update } = writable(state);
  const methods = {
    init() {
      update(() => {
        return storeCopy;
      });
    },
    async handleDelete() {
      const promises = [];
      update((s) => {
        const category = get_store_value(categoryStore).category;
        get_store_value(categoryStore);
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
        promises.push(axios("/api2" + del_route.route, {
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
        const categories = get_store_value(collectionStore).categories;
        const category = get_store_value(categoryStore).category;
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
            promises.push(axios("/api2" + element.route, {
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
  return {
    subscribe: subscribe2,
    set,
    update,
    ...methods
  };
};
const deleteHook = store();
var DeleteIcon_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".icon.svelte-10yed2m{cursor:pointer}",
  map: null
};
const DeleteIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_categoryStore;
  $$unsubscribe_categoryStore = subscribe(categoryStore, (value) => value);
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
const SelectedBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $deleteHook, $$unsubscribe_deleteHook;
  $$unsubscribe_deleteHook = subscribe(deleteHook, (value) => $deleteHook = value);
  let { pages } = $$props;
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  $$result.css.add(css$2);
  $$unsubscribe_deleteHook();
  return `<div class="${"selected-container p-2 shadow-sm svelte-18maog0"}"><span>Selected</span>
	<div class="${"right-container svelte-18maog0"}"><div class="${"icon-container svelte-18maog0"}">${validate_component(DeleteIcon, "DeleteIcon").$$render($$result, {}, {}, {})}</div>
		<span>${escape($deleteHook.deleted.length)} items</span></div>
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
const EditBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_categoryStore;
  let $$unsubscribe_entryModalStore;
  $$unsubscribe_categoryStore = subscribe(categoryStore, (value) => value);
  $$unsubscribe_entryModalStore = subscribe(entryModalStore, (value) => value);
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
  return `<div class="${"wrapper"}">${options ? `${each(options, (option) => {
    return `${option.method === "DELETE" && option.type !== "media" ? `<button class="${"btn btn-danger"}">${escape(option.name)}</button>
				${selected === data._id ? `<span>Confirm Deletion
						<span class="${"confirm-button confirm svelte-etcd"}">Yes</span>/
						<span class="${"confirm-button cancel svelte-etcd"}">No</span>
					</span>` : ``}` : `${option.method !== "DELETE" ? `<button class="${"btn btn-primary"}">${escape(option.name)}
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
      return import("./Bts-694eafcd.js");
    case "../../lib/components/CarouselRenders/CarouselRenders.svelte":
      return import("./CarouselRenders-3d2a8a31.js");
    case "../../lib/components/CategoryImage/CategoryImage.svelte":
      return import("./CategoryImage-239f1e64.js");
    case "../../lib/components/ConfirmDelete/ConfirmDelete.svelte":
      return import("./ConfirmDelete-a9bb2feb.js");
    case "../../lib/components/EditBar/EditBar.svelte":
      return Promise.resolve().then(function() {
        return EditBar$1;
      });
    case "../../lib/components/EntryModal/EntryModal.svelte":
      return Promise.resolve().then(function() {
        return EntryModal$1;
      });
    case "../../lib/components/ImagePage/ImagePage.svelte":
      return import("./ImagePage-8770de2c.js");
    case "../../lib/components/MobilePages/MobilePages.svelte":
      return import("./MobilePages-e23fa148.js");
    case "../../lib/components/Navbar/Navbar.svelte":
      return import("./Navbar-33fc9826.js");
    case "../../lib/components/PageCarousels/PageCarousels.svelte":
      return import("./PageCarousels-b39f8cec.js");
    case "../../lib/components/SelectedBar/SelectedBar.svelte":
      return Promise.resolve().then(function() {
        return SelectedBar$1;
      });
    case "../../lib/components/StartModal/StartModal.svelte":
      return import("./StartModal-9f835d07.js");
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
  const categories = get_store_value(collectionStore).categories;
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
const U5Bpageu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $entryModalStore, $$unsubscribe_entryModalStore;
  let $deleteHook, $$unsubscribe_deleteHook;
  let $categoryStore, $$unsubscribe_categoryStore;
  $$unsubscribe_entryModalStore = subscribe(entryModalStore, (value) => $entryModalStore = value);
  $$unsubscribe_deleteHook = subscribe(deleteHook, (value) => $deleteHook = value);
  $$unsubscribe_categoryStore = subscribe(categoryStore, (value) => $categoryStore = value);
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
  return `${$entryModalStore.visible ? `${validate_component(EntryModal, "EntryModal").$$render($$result, {}, {}, {})}` : ``}

<div class="${"page-wrapper svelte-1bh05a3"}">${$deleteHook.deleted.length > 0 ? `${validate_component(SelectedBar, "SelectedBar").$$render($$result, {}, {}, {})}` : ``}
	${$categoryStore.category.insertable ? `${validate_component(EditBar, "EditBar").$$render($$result, {
    data: $categoryStore.category,
    options: $categoryStore.category.insertable.endpoints
  }, {}, {})}` : ``}
	<div class="${"content-container svelte-1bh05a3"}">${validate_component(component || missing_component, "svelte:component").$$render($$result, { items: data }, {}, {})}</div>
</div>`;
});
export { EditBar as E, U5Bpageu5D as U, categoryStore as c, deleteHook as d, load as l };
