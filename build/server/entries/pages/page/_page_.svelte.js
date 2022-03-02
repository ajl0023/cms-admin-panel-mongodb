import { c as create_ssr_component, b as subscribe, f as add_attribute, e as each, a as escape, v as validate_component, m as missing_component, g as set_store_value } from "../../../chunks/index-c56b6a2a.js";
import { w as writable, t as tableStore, h as hostName } from "../../../chunks/host-d24b8c17.js";
import _ from "lodash";
import "axios";
import "@use-gesture/vanilla";
const store$1 = () => {
  const state = {
    visible: false,
    content: null,
    inputs: {},
    files: {}
  };
  const { subscribe: subscribe2, set, update } = writable(state);
  const methods = {
    handleVisible(item) {
      update((s) => {
        s.content = item;
        s.visible = true;
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
const entryModalStore = store$1();
var EntryModal_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".form-field.svelte-1o0p388:last-child{margin-bottom:auto}.form-container.svelte-1o0p388{z-index:5;position:relative;background-color:white;max-width:800px;width:100%;padding:2rem;margin:1.5rem auto 0 auto}.wrapper.svelte-1o0p388{position:fixed;top:0;right:0;z-index:10;left:0;bottom:0;background-color:rgba(0, 0, 0, 0.363);width:100%}",
  map: null
};
const EntryModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_tableStore;
  let $entryModalStore, $$unsubscribe_entryModalStore;
  $$unsubscribe_tableStore = subscribe(tableStore, (value) => value);
  $$unsubscribe_entryModalStore = subscribe(entryModalStore, (value) => $entryModalStore = value);
  let fields = [];
  let form;
  $$result.css.add(css$5);
  $$unsubscribe_tableStore();
  $$unsubscribe_entryModalStore();
  return `<div class="${"wrapper svelte-1o0p388"}"><div class="${"form-container svelte-1o0p388"}"><form class="${"row g-3"}" id="${"entry-form"}" action="${""}"${add_attribute("this", form, 0)}>${each(fields, (field) => {
    return `${field.type === "media" && field.multi ? `<div class="${"form-field svelte-1o0p388"}"><label${add_attribute("for", field.name, 0)} class="${"form-label"}">${escape(field.client_label)}</label>
						<input class="${"form-control"}" type="${"file"}"${add_attribute("name", field.name, 0)} id="${"formFileMultiple"}" multiple>
					</div>` : `${field.type === "media" && !field.multi ? `<div class="${"form-field svelte-1o0p388"}"><label${add_attribute("for", field.name, 0)} class="${"form-label"}">${escape(field.client_label)}</label>
						<input${add_attribute("name", field.name, 0)} class="${"form-control"}" type="${"file"}" id="${"formFile"}">
					</div>` : `<div class="${"form-field svelte-1o0p388"}"><label${add_attribute("for", field.name, 0)} class="${"form-label"}">${escape(field.client_label)}</label>
						<input class="${"form-control"}" placeholder="${""}"${add_attribute("value", $entryModalStore.inputs[field.lowerCase], 0)}>
					</div>`}`}`;
  })}
			<div class="${"col-auto"}"><button type="${"button"}" class="${"btn btn-primary mb-3"}">Submit</button></div></form></div>
</div>`;
});
const store = () => {
  const state = {
    mouseYCoordinate: null,
    distanceTopGrabbedVsPointer: null,
    hoveredItemIndex: null,
    draggingItem: null,
    draggingItemId: null,
    draggingItemIndex: null
  };
  const { subscribe: subscribe2, set, update } = writable(state);
  const methods = {
    dragend(e) {
      update((s) => {
        s.draggingItemId = null;
        s.hoveredItemIndex = null;
        return s;
      });
    },
    dragover(i) {
      update((s) => {
        s.hoveredItemIndex = i;
        return s;
      });
    },
    dragStart(e, item, i) {
      update((s) => {
        s.mouseYCoordinate = e.clientY;
        s.draggingItem = item;
        s.draggingItemIndex = i;
        s.draggingItemId = item;
        s.distanceTopGrabbedVsPointer = e.target.getBoundingClientRect().y - e.clientY;
        return s;
      });
    },
    drag(e) {
      update((s) => {
        s.mouseYCoordinate = e.clientY;
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
const tableStoreDrag = store();
var DragHandle_svelte_svelte_type_style_lang = "";
var TableRow_svelte_svelte_type_style_lang = "";
const EditBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_entryModalStore;
  $$unsubscribe_entryModalStore = subscribe(entryModalStore, (value) => value);
  let { options } = $$props;
  let { data } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_entryModalStore();
  return `<div class="${"wrapper"}">${options ? `${each(options, (option) => {
    return `<button class="${"btn btn-primary"}">${escape(option)}
			</button>`;
  })}` : ``}
</div>`;
});
var ImagePage_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".image-container.svelte-177pmu9.svelte-177pmu9{width:100px;height:100px;cursor:pointer}.image-container.svelte-177pmu9 img.svelte-177pmu9{display:block;width:100%;height:100%;object-fit:cover}",
  map: null
};
const ImagePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tableStore, $$unsubscribe_tableStore;
  $$unsubscribe_tableStore = subscribe(tableStore, (value) => $tableStore = value);
  let { pages } = $$props;
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  $$result.css.add(css$4);
  $$unsubscribe_tableStore();
  return `${each(pages, (item) => {
    return `${$tableStore.currentTable.type === "bg-image" ? `<div class="${"item-container"}"><div class="${"page-title"}">${escape(_.startCase(item.page))}</div>
			<div class="${"image-container svelte-177pmu9"}"><img${add_attribute("src", item.url, 0)} alt="${""}" class="${"svelte-177pmu9"}"></div>
		</div>` : ``}`;
  })}`;
});
var Bts_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".wrapper.svelte-mcph04.svelte-mcph04{overflow-y:auto}.phase-container.svelte-mcph04.svelte-mcph04{margin-top:30px}.top-bar.svelte-mcph04.svelte-mcph04{display:flex;align-items:flex-end;margin-bottom:10px}.top-bar.svelte-mcph04 .edit-bar.svelte-mcph04{margin-left:30px}.images-container.svelte-mcph04.svelte-mcph04{display:flex;flex-wrap:wrap}.images-container.svelte-mcph04 .image-container.svelte-mcph04{width:100px;padding:2px;height:100px}.images-container.svelte-mcph04 .image-container img.svelte-mcph04{object-fit:cover;width:100%;height:100%}",
  map: null
};
const Bts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pages = [] } = $$props;
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  $$result.css.add(css$3);
  return `<div class="${"wrapper svelte-mcph04"}">${pages.length > 0 ? `${each(pages, (phase) => {
    return `<div class="${"phase-container svelte-mcph04"}"><div class="${"top-bar svelte-mcph04"}"><span>Phase ${escape(phase.phase)}</span>
					<div class="${"edit-bar svelte-mcph04"}">${validate_component(EditBar, "EditBar").$$render($$result, { data: phase, options: ["Add Photos"] }, {}, {})}
					</div></div>
				<div class="${"images-container svelte-mcph04"}">${each(phase.images, (img) => {
      return `<div class="${"image-container svelte-mcph04"}"><img${add_attribute("src", img.url, 0)} alt="${""}" class="${"svelte-mcph04"}">
						</div>`;
    })}</div>
			</div>`;
  })}` : ``}
</div>`;
});
var CarouselRenders_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".wrapper.svelte-132ii1v.svelte-132ii1v{margin-top:1rem;overflow:auto}.image-container.svelte-132ii1v.svelte-132ii1v{height:100px;width:100px;padding:2px}.image-container.svelte-132ii1v img.svelte-132ii1v{width:100%;height:100%;object-fit:cover}.image-container.thumbs.svelte-132ii1v.svelte-132ii1v{width:50px;padding:0px;height:50px;overflow:hidden;border-radius:50%}.images-container.svelte-132ii1v.svelte-132ii1v{display:flex;flex-wrap:wrap}",
  map: null
};
const CarouselRenders = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pages } = $$props;
  const fields = ["left", "right", "thumbs"];
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  $$result.css.add(css$2);
  return `<div class="${"wrapper svelte-132ii1v"}">${each(pages, (page) => {
    return `<div class="${"edit-bar"}">${validate_component(EditBar, "EditBar").$$render($$result, { data: page, options: ["Add Photos"] }, {}, {})}</div>
		${each(fields, (col) => {
      return `<span>${escape(col)}</span>
			<div class="${"images-container svelte-132ii1v"}">${each(page[col], (img) => {
        return `<div class="${"image-container " + escape(col) + " svelte-132ii1v"}"><img${add_attribute("src", img.url, 0)} alt="${""}" class="${"svelte-132ii1v"}">
					</div>`;
      })}
			</div>`;
    })}`;
  })}
</div>`;
});
const PageCarousels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pages } = $$props;
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  return `<div class="${"wrapper"}"><div class="${"wrapper"}">${pages.length > 0 ? `${each(pages, (page) => {
    return `<div class="${"phase-container"}"><div class="${"top-bar"}"><span>${escape(page.page)}</span>
						<div class="${"edit-bar"}">${validate_component(EditBar, "EditBar").$$render($$result, { data: page, options: ["Add Photos"] }, {}, {})}
						</div></div>
					<div class="${"images-container"}">${each(page.images, (img) => {
      return `<div class="${"image-container"}"><img${add_attribute("src", img.url, 0)} alt="${""}">
							</div>`;
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
var MobilePages_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".flex-container.svelte-14uya9k.svelte-14uya9k{align-items:flex-end}.flex-container.svelte-14uya9k .category-name.svelte-14uya9k{font-weight:600}.flex-container.svelte-14uya9k .edit-bar.svelte-14uya9k{margin-right:30px}.wrapper.svelte-14uya9k.svelte-14uya9k{margin-top:1rem;overflow:auto}.image-container.svelte-14uya9k.svelte-14uya9k{height:100px;width:100px;padding:2px}.image-container.svelte-14uya9k img.svelte-14uya9k{width:100%;height:100%;object-fit:cover}.images-container.svelte-14uya9k.svelte-14uya9k{display:flex;flex-wrap:wrap}",
  map: null
};
const MobilePages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pages } = $$props;
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  $$result.css.add(css$1);
  return `<div class="${"wrapper svelte-14uya9k"}">${each(pages, (page) => {
    return `<div class="${"flex-container svelte-14uya9k"}"><div class="${"edit-bar svelte-14uya9k"}">${validate_component(EditBar, "EditBar").$$render($$result, { data: page, options: ["Add Photos"] }, {}, {})}</div>
			<span class="${"category-name text-decoration-underline svelte-14uya9k"}">${escape(_.startCase(page.page))} (${escape(page.type)})</span></div>

		<div class="${"images-container svelte-14uya9k"}">${page.page !== "behind-the-scenes" ? `${each(page.images, (img) => {
      return `<div class="${"image-container svelte-14uya9k"}"><img loading="${"lazy"}"${add_attribute("src", img.url, 0)} alt="${""}" class="${"svelte-14uya9k"}">
					</div>`;
    })}` : `${each(page.phases, (phase) => {
      return `<div class="${"phase-container"}"><div class="${"top-bar"}"><span>Phase ${escape(phase.phase)}</span>
							<div class="${"edit-bar"}">${validate_component(EditBar, "EditBar").$$render($$result, {
        data: { ...page, ...phase },
        options: ["Add Photos"]
      }, {}, {})}
							</div></div>
						<div class="${"images-container svelte-14uya9k"}">${each(phase.images, (img) => {
        return `<div class="${"image-container svelte-14uya9k"}"><img${add_attribute("src", img.url, 0)} alt="${""}" class="${"svelte-14uya9k"}">
								</div>`;
      })}</div>
					</div>`;
    })}`}
		</div>`;
  })}
</div>`;
});
var _page__svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-wrapper.svelte-uaefda{width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden}",
  map: null
};
async function load({ params, fetch, session, stuff }) {
  const page_id = params.page;
  let categoryReq;
  tableStore.update((s) => {
    s.currentTable = s.categories[page_id];
    categoryReq = s.categories[page_id].category;
    return s;
  });
  const res = await fetch(`${hostName}/api/${categoryReq}`);
  const body = await res.json();
  if (res.ok) {
    return {
      status: 200,
      props: { currentPage: categoryReq, page: body }
    };
  }
  return {
    status: 404,
    error: new Error(`Could not load`)
  };
}
const U5Bpageu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tableStoreDrag, $$unsubscribe_tableStoreDrag;
  let $$unsubscribe_tableStore;
  let $entryModalStore, $$unsubscribe_entryModalStore;
  $$unsubscribe_tableStoreDrag = subscribe(tableStoreDrag, (value) => $tableStoreDrag = value);
  $$unsubscribe_tableStore = subscribe(tableStore, (value) => value);
  $$unsubscribe_entryModalStore = subscribe(entryModalStore, (value) => $entryModalStore = value);
  let { page } = $$props;
  let { columns } = $$props;
  let { data } = $$props;
  let { cursor } = $$props;
  let { currentPage } = $$props;
  const componentMap = {
    "bg-pages": { component: ImagePage, options: [] },
    "behind-the-scenes": { component: Bts, options: ["Add Phase"] },
    "carousel-renders": {
      component: CarouselRenders,
      options: ["Add photos"]
    },
    "page-carousels": {
      component: PageCarousels,
      options: ["Add photos"]
    },
    mobile: {
      component: MobilePages,
      options: ["Add photos"]
    }
  };
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  $$result.css.add(css);
  {
    {
      if ($tableStoreDrag.draggingItemIndex != null && $tableStoreDrag.hoveredItemIndex != null && $tableStoreDrag.draggingItemIndex != $tableStoreDrag.hoveredItemIndex) {
        [
          rows[$tableStoreDrag.draggingItemIndex],
          rows[$tableStoreDrag.hoveredItemIndex]
        ] = [
          rows[$tableStoreDrag.hoveredItemIndex],
          rows[$tableStoreDrag.draggingItemIndex]
        ];
        set_store_value(tableStoreDrag, $tableStoreDrag.draggingItemIndex = $tableStoreDrag.hoveredItemIndex, $tableStoreDrag);
      }
    }
  }
  $$unsubscribe_tableStoreDrag();
  $$unsubscribe_tableStore();
  $$unsubscribe_entryModalStore();
  return `${$entryModalStore.visible ? `${validate_component(EntryModal, "EntryModal").$$render($$result, {}, {}, {})}` : ``}
<div class="${"page-wrapper svelte-uaefda"}">${validate_component(EditBar, "EditBar").$$render($$result, {
    options: componentMap[currentPage].options
  }, {}, {})}
	${validate_component(componentMap[currentPage].component || missing_component, "svelte:component").$$render($$result, { pages: page }, {}, {})}
</div>`;
});
export { U5Bpageu5D as default, load };
