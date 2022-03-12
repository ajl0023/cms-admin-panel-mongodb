import { c as create_ssr_component, a as subscribe, e as each, f as escape } from "./index-92880a40.js";
import "lodash";
import { c as collectionStore } from "./collectionStore-store-96f51f08.js";
import "./host-b5b4a144.js";
import "axios";
var Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".nav-container.svelte-9zh9lc.svelte-9zh9lc{overflow:hidden;max-width:200px;width:100%;height:100%}.nav-container.svelte-9zh9lc .nav-link.svelte-9zh9lc{display:block;color:black}.nav-container.svelte-9zh9lc .nav-link.svelte-9zh9lc::first-letter{text-transform:uppercase}.nav-container.svelte-9zh9lc .nav-link.svelte-9zh9lc:last-child{border-bottom:none}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $collectionStore, $$unsubscribe_collectionStore;
  $$unsubscribe_collectionStore = subscribe(collectionStore, (value) => $collectionStore = value);
  const categories = Object.keys($collectionStore.categories).map((cat) => {
    return $collectionStore.categories[cat];
  });
  $$result.css.add(css);
  $$unsubscribe_collectionStore();
  return `<div class="${"nav-container border-1 border-end svelte-9zh9lc"}"><span>Pages</span>
	<nav class="${"nav flex-column"}">${each(categories, (category) => {
    return `${category.visible ? `<a href="${"/page/" + escape(category._id)}" class="${"nav-link border-0 border-bottom svelte-9zh9lc"}">${escape(category.title)}
				</a>` : ``}`;
  })}
		<button class="${"btn btn-primary"}">Add New Table</button></nav>
</div>`;
});
export { Navbar as default };
