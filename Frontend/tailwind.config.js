/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "class",
	theme: {
		screens: {
			'2xl': { 'max': '1535px' },
			// => @media (max-width: 1535px) { ... }

			'xl': { 'max': '1279px' },
			// => @media (max-width: 1279px) { ... }

			'lg': { 'max': '1023px' },
			// => @media (max-width: 1023px) { ... }

			'md': { 'max': '767px' },
			// => @media (max-width: 767px) { ... }

			'sm': { 'max': '639px' },
			// => @media (max-width: 639px) { ... }

			'xs': { 'max': '424px' },
			// => @media (max-width: 424px) { ... }
		},
		extend: {
			colors: {
				"dark": {
					"main": "#242529",
					"faded": "#37373f"
				},
				"white": {
					"main": "#ffffff",
					"faded": "#dbdbdb",
					"smoke": "#f4f3f3"
				},
				"black": "#050406",
				"dimgray": "#676a71",
				"orange": {
					"main": "#f56400"
				},
				"purple": {
					"main": "#a6abff"
				}
			}
		},
	},
	plugins: [],
}

