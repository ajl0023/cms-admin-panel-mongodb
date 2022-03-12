import { c as create_ssr_component, a as subscribe, e as each, f as escape, v as validate_component } from "./index-92880a40.js";
import { c as collectionStore } from "./collectionStore-store-96f51f08.js";
import _ from "lodash";
import CategoryImage from "./CategoryImage-239f1e64.js";
import { E as EditBar } from "./_page_-af03ff04.js";
import "./host-b5b4a144.js";
import "axios";
import "cookie";
import "@lukeed/uuid";
const ImagePage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $collectionStore, $$unsubscribe_collectionStore;
  $$unsubscribe_collectionStore = subscribe(collectionStore, (value) => $collectionStore = value);
  let { items } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$unsubscribe_collectionStore();
  return `${each(items, (item) => {
    return `<div class="${"item-container"}"><div class="${"page-title"}">${escape(_.startCase(item.page))}</div>

		${validate_component(EditBar, "EditBar").$$render($$result, {
      method: "put",
      data: item,
      options: $collectionStore.categories[item.category].endpoints
    }, {}, {})}

		${validate_component(CategoryImage, "CategoryImage").$$render($$result, {
      img: item.image,
      col: "image",
      page: item
    }, {}, {})}
	</div>`;
  })}`;
});
export { ImagePage as default };
