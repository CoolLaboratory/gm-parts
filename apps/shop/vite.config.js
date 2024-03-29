import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	css: {preprocessorOptions: {css: 'external'}},
	plugins: [sveltekit()],
	server: {
		origin: 'http://shop.geroutsis.test:8080'
	}
};

export default config;
