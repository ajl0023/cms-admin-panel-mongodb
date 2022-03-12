import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../chunks/index-92880a40.js";
import { c as collectionStore } from "../../chunks/collectionStore-store-96f51f08.js";
import StartModal from "../../chunks/StartModal-9f835d07.js";
import Navbar from "../../chunks/Navbar-33fc9826.js";
import "../../chunks/host-b5b4a144.js";
import "axios";
import "lodash";
var global = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-hkifws{overflow-y:auto;height:100%;display:flex}",
  map: null
};
const prerender = true;
async function load({ fetch, stuff, session }) {
  return {};
}
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $collectionStore, $$unsubscribe_collectionStore;
  $$unsubscribe_collectionStore = subscribe(collectionStore, (value) => $collectionStore = value);
  $$result.css.add(css);
  $$unsubscribe_collectionStore();
  return `<div class="${"wrapper svelte-hkifws"}">${!$collectionStore.collection ? `${validate_component(StartModal, "StartModal").$$render($$result, {}, {}, {})}` : `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
		${slots.default ? slots.default({}) : ``}`}
</div>`;
});
export { _layout as default, load, prerender };
