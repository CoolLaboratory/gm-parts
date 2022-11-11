import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	css: {preprocessorOptions: {css: 'external'}},
	plugins: [sveltekit()],
	server: {
		origin: 'http://dashboard.geroutsis.test:3001'
	}
};

export default config;
