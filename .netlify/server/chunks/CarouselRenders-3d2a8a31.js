import { c as create_ssr_component, a as subscribe, e as each, v as validate_component, f as escape } from "./index-92880a40.js";
import { c as collectionStore } from "./collectionStore-store-96f51f08.js";
import CategoryImage from "./CategoryImage-239f1e64.js";
import { E as EditBar } from "./_page_-af03ff04.js";
import "./host-b5b4a144.js";
import "axios";
import "cookie";
import "@lukeed/uuid";
import "lodash";
var CarouselRenders_svelte_svelte_type_style_lang = "";
const css = {
  code: ".order-container.svelte-1o8yovy.svelte-1o8yovy{position:relative}.order-container.svelte-1o8yovy .inner-order-container.svelte-1o8yovy{border-radius:50%;position:absolute;width:20px;z-index:5;display:flex;align-items:center;justify-content:center;height:20px;background-color:black}.order-container.svelte-1o8yovy .order.svelte-1o8yovy{color:white;font-weight:700}.wrapper.svelte-1o8yovy.svelte-1o8yovy{margin-top:1rem;overflow:auto}.images-container.svelte-1o8yovy.svelte-1o8yovy{display:flex;flex-wrap:wrap}",
  map: null
};
const CarouselRenders = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $collectionStore, $$unsubscribe_collectionStore;
  $$unsubscribe_collectionStore = subscribe(collectionStore, (value) => $collectionStore = value);
  let { items } = $$props;
  const fields = ["left", "right", "thumbs"];
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css);
  $$unsubscribe_collectionStore();
  return `<div class="${"wrapper svelte-1o8yovy"}">${each(items, (page) => {
    return `<div class="${"edit-bar"}">${validate_component(EditBar, "EditBar").$$render($$result, {
      data: page,
      options: $collectionStore.categories[page.category].endpoints
    }, {}, {})}</div>
		${each(fields, (col) => {
      return `<span>${escape(col)}</span>
			<div class="${"images-container svelte-1o8yovy"}">${each(page[col], (img, i) => {
        return `<div class="${"order-container svelte-1o8yovy"}"><div class="${"inner-order-container svelte-1o8yovy"}"><span class="${"order svelte-1o8yovy"}">${escape(i)}</span></div>
						${validate_component(CategoryImage, "CategoryImage").$$render($$result, { column: col, img, page }, {}, {})}
					</div>`;
      })}
			</div>`;
    })}`;
  })}
</div>`;
});
export { CarouselRenders as default };
