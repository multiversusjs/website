import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
	theme: {
		colors: {
			'multiversus-gray': '#141629',
		},
	},
	presets: [
		presetUno({ dark: 'class' }),
	],
});
