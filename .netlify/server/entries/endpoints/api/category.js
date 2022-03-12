import { h as hostName } from "../../../chunks/host-b5b4a144.js";
async function get({ request, url }) {
  const category = url.searchParams.get("category");
  const get_category = await fetch(new Request(`${hostName}/api/${category}`, request));
  const data = await get_category.json();
  {
    return {
      body: data
    };
  }
}
export { get };
