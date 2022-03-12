import { c as create_ssr_component, a as subscribe, d as add_attribute } from "./index-92880a40.js";
import { d as deleteHook } from "./_page_-af03ff04.js";
import "./collectionStore-store-96f51f08.js";
import "./host-b5b4a144.js";
import "axios";
import "cookie";
import "@lukeed/uuid";
import "lodash";
var CategoryImage_svelte_svelte_type_style_lang = "";
const css = {
  code: ".selected-container.svelte-awpa1w.svelte-awpa1w{width:100%;height:100%;pointer-events:none;z-index:4;position:absolute}.selected.svelte-awpa1w.svelte-awpa1w{border:1px white solid;background-color:rgba(0, 0, 0, 0.5)}.image-container.svelte-awpa1w.svelte-awpa1w{position:relative;cursor:pointer;pointer-events:all;width:100px;height:100px}.image-container.svelte-awpa1w img.svelte-awpa1w{width:100%;object-fit:cover;height:100%}",
  map: null
};
const CategoryImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $deleteHook, $$unsubscribe_deleteHook;
  $$unsubscribe_deleteHook = subscribe(deleteHook, (value) => $deleteHook = value);
  let { img } = $$props;
  let { page } = $$props;
  let { column } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.column === void 0 && $$bindings.column && column !== void 0)
    $$bindings.column(column);
  $$result.css.add(css);
  $$unsubscribe_deleteHook();
  return `${img.url ? `<div class="${"image-container svelte-awpa1w"}"><div class="${[
    "selected-container svelte-awpa1w",
    $deleteHook.deleted.find((item) => {
      return item.image_id === img._id;
    }) ? "selected" : ""
  ].join(" ").trim()}"></div>
		<img${add_attribute("src", img.url, 0)} alt="${""}" class="${"svelte-awpa1w"}"></div>` : ``}`;
});
export { CategoryImage as default };
