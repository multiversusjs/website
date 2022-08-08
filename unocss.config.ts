import presetWebFonts from '@unocss/preset-web-fonts';
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
	theme: {
		colors: {
			multiversusGray: '#141629',
		},
	},
	presets: [
		presetUno({ dark: 'class' }),
		presetWebFonts({
			provider: 'google',
			fonts: {
				barlow: [{
          name: 'Barlow Semi Condensed',
          weights: ['800'],
          italic: true,
				}],
			},
		}),
	],
});