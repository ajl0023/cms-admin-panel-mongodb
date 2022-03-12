import cookie from "cookie";
import "@lukeed/uuid";
import "axios";
import { h as hostName } from "../../../chunks/host-b5b4a144.js";
async function get({ request }) {
  const categories = await fetch(new Request(`${hostName}/api/categories`, request));
  const data = await categories.json();
  const getCookie = request.headers.get("cookie");
  if (getCookie) {
    cookie.parse(getCookie);
    {
      return {
        body: { categories: data }
      };
    }
  }
  return {
    status: 403
  };
}
export { get };
