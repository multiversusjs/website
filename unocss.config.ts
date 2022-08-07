import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
	theme: {
		colors: {
			'multiversusGray': '#141629',
		},
	},
	presets: [
		presetUno({ dark: 'class' }),
	],
});
