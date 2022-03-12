import { c as create_ssr_component, a as subscribe, e as each, f as escape, v as validate_component } from "./index-92880a40.js";
import { c as categoryStore, E as EditBar } from "./_page_-af03ff04.js";
import CategoryImage from "./CategoryImage-239f1e64.js";
import "./collectionStore-store-96f51f08.js";
import "./host-b5b4a144.js";
import "axios";
import "cookie";
import "@lukeed/uuid";
import "lodash";
const PageCarousels = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $categoryStore, $$unsubscribe_categoryStore;
  $$unsubscribe_categoryStore = subscribe(categoryStore, (value) => $categoryStore = value);
  let { items } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$unsubscribe_categoryStore();
  return `<div class="${"wrapper"}"><div class="${"wrapper"}">${items.length > 0 ? `${each(items, (page) => {
    return `<div class="${"phase-container"}"><div class="${"top-bar"}"><span>${escape(page.page)}</span>
						<div class="${"edit-bar"}">${validate_component(EditBar, "EditBar").$$render($$result, {
      data: page,
      options: $categoryStore.category.endpoints
    }, {}, {})}
						</div></div>
					<div class="${"images-container"}">${each(page.images, (img) => {
      return `${validate_component(CategoryImage, "CategoryImage").$$render($$result, { img, page, col: "images" }, {}, {})}`;
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
export { PageCarousels as default };
