import adapter from '@sveltejs/adapter-static';

import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({}),

	kit: {
		adapter: adapter({
			// default options are shown

			fallback: 'test.html'
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},
	vite: {
		server: {
			proxy: {
				'/api': {
					target: 'http://localhost:3000',
					changeOrigin: true
				}
			}
		}
	}
};

export default config;
