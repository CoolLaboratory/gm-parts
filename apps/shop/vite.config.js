import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	css: {preprocessorOptions: {css: 'external'}},
	plugins: [sveltekit()]
};

export default config;
