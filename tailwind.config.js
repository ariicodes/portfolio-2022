/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{html,js}', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'rich-black': 'rgb(11, 11, 12)',
				'blush': 'rgb(226, 100, 132)',
				'pale-cerulean': 'rgb(174, 207, 234)',
				'white': 'rgb(255, 255, 255)',
				'white-50': 'rgba(255, 255, 255, 0.5)',
				'black': 'rgb(0, 0, 0)',
				'cerise': 'rgb(216, 49,91)',
				'tufts-blue': 'rgb(59, 140, 206)',
				'platinum': 'rgb(224, 224, 225)',
			},
			fontFamily: {
				PFSC: ['Playfair Display SC', 'serif'],
				PF: ['Playfair Display', 'serif'],
			},
		},
	},
	plugins: [],
}
