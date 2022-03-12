import cookie from "cookie";
async function get({ request }) {
  const getCookie = request.headers.get("cookie");
  if (getCookie) {
    const currentCollection = cookie.parse(getCookie).collection;
    if (currentCollection) {
      return {
        body: { collection: currentCollection }
      };
    }
  }
  return {
    status: 403
  };
}
async function post({ request }) {
  const data = await request.json();
  const collection = data.collection;
  if (!collection) {
    return {
      status: 500
    };
  }
  const new_cookie = cookie.serialize("collection", collection);
  return {
    headers: {
      "set-cookie": [new_cookie]
    },
    body: JSON.stringify({
      collection: data.collection
    })
  };
}
export { get, post };
