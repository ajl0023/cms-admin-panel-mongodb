import { c as create_ssr_component, a as subscribe, e as each, f as escape, v as validate_component } from "./index-92880a40.js";
import { c as categoryStore, E as EditBar } from "./_page_-af03ff04.js";
import CategoryImage from "./CategoryImage-239f1e64.js";
import "./collectionStore-store-96f51f08.js";
import "./host-b5b4a144.js";
import "axios";
import "cookie";
import "@lukeed/uuid";
import "lodash";
var Bts_svelte_svelte_type_style_lang = "";
const css = {
  code: ".edit-bar.svelte-1hi5je0.svelte-1hi5je0{align-items:flex-end;display:flex}.wrapper.svelte-1hi5je0.svelte-1hi5je0{overflow-y:auto}.phase-container.svelte-1hi5je0.svelte-1hi5je0{margin-top:30px}.top-bar.svelte-1hi5je0.svelte-1hi5je0{display:flex;align-items:flex-end;margin-bottom:10px}.top-bar.svelte-1hi5je0 .edit-bar.svelte-1hi5je0{margin-left:30px}.images-container.svelte-1hi5je0.svelte-1hi5je0{display:flex;flex-wrap:wrap}",
  map: null
};
const Bts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $categoryStore, $$unsubscribe_categoryStore;
  $$unsubscribe_categoryStore = subscribe(categoryStore, (value) => $categoryStore = value);
  let { items } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css);
  $$unsubscribe_categoryStore();
  return `<div class="${"wrapper svelte-1hi5je0"}">${items.length > 0 ? `${each(items, (phase) => {
    return `<div class="${"phase-container svelte-1hi5je0"}"><div class="${"top-bar svelte-1hi5je0"}"><span>Phase ${escape(phase.phase)}</span>
					<div class="${"edit-bar svelte-1hi5je0"}">${validate_component(EditBar, "EditBar").$$render($$result, {
      data: phase,
      options: $categoryStore.category.endpoints
    }, {}, {})}
					</div></div>
				<div class="${"images-container svelte-1hi5je0"}">${each(phase.images, (img) => {
      return `${validate_component(CategoryImage, "CategoryImage").$$render($$result, { col: "images", img, page: phase }, {}, {})}`;
    })}</div>
			</div>`;
  })}` : ``}
</div>`;
});
export { Bts as default };
