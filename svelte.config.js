import adapter from '@sveltejs/adapter-netlify';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({}),

	kit: {
		adapter: adapter({ split: false }),

		vite: {
			optimizeDeps: {},
			resolve: {
				alias: {
					src: path.resolve('./src')
				}
			}
		},

		// hydrate the <div id="svelte"> element in src/app.html

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
