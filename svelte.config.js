import adapter from '@sveltejs/adapter-static';
import path from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({}),

	kit: {
		adapter: adapter({
			// default options are shown
			fallback: 'index.html'
		}),
		vite: {
			resolve: {
				alias: {
					src: path.resolve('./src')
				}
			}
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	},
	server: {
		hmr: {
			// Internal port (in container same as sveltekit port).
			port: 3000,
			// External port (Docker host)
			clientPort: 3001
		}
	}
};

export default config;
