import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		origin: 'http://admin.geroutsis.test:8081'
	}
};

export default config;
