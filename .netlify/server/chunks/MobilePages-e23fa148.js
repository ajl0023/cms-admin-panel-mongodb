import { c as create_ssr_component, a as subscribe, e as each, f as escape, v as validate_component } from "./index-92880a40.js";
import { c as collectionStore } from "./collectionStore-store-96f51f08.js";
import "axios";
import _ from "lodash";
import CategoryImage from "./CategoryImage-239f1e64.js";
import { E as EditBar } from "./_page_-af03ff04.js";
import "./host-b5b4a144.js";
import "cookie";
import "@lukeed/uuid";
var MobilePages_svelte_svelte_type_style_lang = "";
const css = {
  code: ".edit-bar.svelte-65qigw.svelte-65qigw{display:flex;align-items:flex-end}.flex-container.svelte-65qigw.svelte-65qigw{display:flex;align-items:flex-end}.flex-container.svelte-65qigw .category-name.svelte-65qigw{font-weight:600}.flex-container.svelte-65qigw .edit-bar.svelte-65qigw{margin-right:30px}.wrapper.svelte-65qigw.svelte-65qigw{margin-top:1rem}.images-container.svelte-65qigw.svelte-65qigw{display:flex;flex-wrap:wrap}",
  map: null
};
const MobilePages = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $collectionStore, $$unsubscribe_collectionStore;
  $$unsubscribe_collectionStore = subscribe(collectionStore, (value) => $collectionStore = value);
  let { items } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css);
  $$unsubscribe_collectionStore();
  return `<div class="${"wrapper svelte-65qigw"}">${each(items, (page) => {
    return `<div class="${"flex-container svelte-65qigw"}"><div class="${"edit-bar svelte-65qigw"}"></div>
			<span class="${"category-name text-decoration-underline svelte-65qigw"}">${escape(_.startCase(page.page))}</span></div>
		<div class="${"document-edit-container"}">${$collectionStore.categories[page.category].insertable ? `${validate_component(EditBar, "EditBar").$$render($$result, {
      data: page,
      options: $collectionStore.categories[page.category].insertable.endpoints_mobile
    }, {}, {})}` : ``}</div>
		${!$collectionStore.categories[page.category].insertable ? `${validate_component(EditBar, "EditBar").$$render($$result, {
      data: page,
      options: $collectionStore.categories[page.category].endpoints_mobile
    }, {}, {})}` : ``}
		<div class="${"images-container svelte-65qigw"}">${page.page !== "behind-the-scenes" ? `${each(page.images, (img) => {
      return `${validate_component(CategoryImage, "CategoryImage").$$render($$result, { col: "images", img, page }, {}, {})}`;
    })}` : `<div class="${"bts-mobile-container"}">${each(page.phases, (phase) => {
      return `<div class="${"phase-container"}"><div class="${"top-bar"}"><span>Phase ${escape(phase.phase)}</span>
								${validate_component(EditBar, "EditBar").$$render($$result, {
        data: { ...page, ...phase },
        options: $collectionStore.categories[page.category].endpoints_mobile
      }, {}, {})}</div>
							<div class="${"images-container svelte-65qigw"}">${each(phase.images, (img) => {
        return `${validate_component(CategoryImage, "CategoryImage").$$render($$result, { img, page }, {}, {})}`;
      })}</div>
						</div>`;
    })}
				</div>`}
		</div>`;
  })}
</div>`;
});
export { MobilePages as default };
