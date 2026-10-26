import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		appDir: 'app',
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production'
				? '/elve-exe'
				: ''
		}
	}
};

export default config;