import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	css: {preprocessorOptions: {css: 'external'}},
	plugins: [sveltekit()],
	server: {
		origin: 'http://geroutsis.test:3000'
	}
};

export default config;
