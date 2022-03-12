import { c as create_ssr_component, a as subscribe, e as each, d as add_attribute, f as escape } from "./index-92880a40.js";
import "lodash";
import "axios";
import { c as collectionStore } from "./collectionStore-store-96f51f08.js";
import "./host-b5b4a144.js";
var StartModal_svelte_svelte_type_style_lang = "";
const css = {
  code: ".button-container.svelte-wutjgc.svelte-wutjgc{margin-top:1rem}.wrapper.svelte-wutjgc.svelte-wutjgc{display:flex;align-items:center;justify-content:center;position:fixed;background-color:rgba(0, 0, 0, 0.4);top:0;left:0;bottom:0;right:0}.wrapper.svelte-wutjgc .modal-container.svelte-wutjgc{padding:30px;max-width:700px;width:100%;background-color:white;height:auto}.wrapper.svelte-wutjgc .inputs-container.svelte-wutjgc{display:flex;align-items:center}.wrapper.svelte-wutjgc .inputs-container input[type=radio].svelte-wutjgc{margin-right:5px}",
  map: null
};
const StartModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_collectionStore;
  $$unsubscribe_collectionStore = subscribe(collectionStore, (value) => value);
  let { pages } = $$props;
  let selected;
  const collections = [{ name: "maliview", label: "Maliview" }, { name: "aviator", label: "Aviator" }];
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  $$result.css.add(css);
  $$unsubscribe_collectionStore();
  return `<div class="${"wrapper svelte-wutjgc"}"><div class="${"modal-container svelte-wutjgc"}">${each(collections, (collection) => {
    return `<div class="${"inputs-container svelte-wutjgc"}"><input${add_attribute("value", collection.name, 0)} type="${"radio"}" name="${"collection-input"}"${add_attribute("id", collection.name, 0)} class="${"svelte-wutjgc"}"${collection.name === selected ? add_attribute("checked", true, 1) : ""}>
				<label${add_attribute("for", collection, 0)}><span>${escape(collection.label)}</span></label>
			</div>`;
  })}
		<div class="${"button-container svelte-wutjgc"}"><button class="${"btn btn-primary"}">Enter</button></div></div>
</div>`;
});
export { StartModal as default };
