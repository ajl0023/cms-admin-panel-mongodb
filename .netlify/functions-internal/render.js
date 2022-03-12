const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp"]),
	_: {
		mime: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
		entry: {"file":"start-c6a8cd88.js","js":["start-c6a8cd88.js","chunks/vendor-bf419eb7.js","chunks/preload-helper-e4860ae8.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				key: "page/[page]",
				pattern: /^\/page\/([^/]+?)\/?$/,
				params: (m) => ({ page: m[1]}),
				path: null,
				shadow: null,
				a: [0,2,3],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/categories\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/categories.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/collection\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/collection.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/api\/category\/?$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/api/category.js'))
			}
		]
	}
});
