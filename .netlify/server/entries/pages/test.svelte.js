import { c as create_ssr_component } from "../../chunks/index-92880a40.js";
async function load({ fetch, stuff, session }) {
  await fetch("/api/categories");
  return {};
}
const Test = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>sdfsdfsdfsdfsdfsd</div>`;
});
export { Test as default, load };
