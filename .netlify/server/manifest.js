export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	_: {
		mime: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
		entry: {"file":"start-ffac5f8f.js","js":["start-ffac5f8f.js","chunks/vendor-bf419eb7.js","chunks/preload-helper-e4860ae8.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "page/[page]",
				pattern: /^\/page\/([^/]+?)\/?$/,
				params: (m) => ({ page: m[1]}),
				path: null,
				shadow: null,
				a: [0,3,4],
				b: [1]
			},
			{
				type: 'page',
				key: "test",
				pattern: /^\/test\/?$/,
				params: null,
				path: "/test",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/categories\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/categories.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/collection\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/collection.js')
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/category\/?$/,
				params: null,
				load: () => import('./entries/endpoints/api/category.js')
			}
		]
	}
};
