/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-custom':
					'linear-gradient(270deg, #8627D0 14.53%, #4F0ED9 49.38%, #D90EC5 72.22%)',
			},
			colors: {
				gris: '#B0AFAF',
				primary: '#CC0EC6',
				secondary: '#00990F',
			},
			borderImage: {
				'gradient-custom':
					'linear-gradient(270deg, #8627D0 14.53%, #4F0ED9 49.38%, #D90EC5 72.22%) 1',
			},
		},
	},
	plugins: [],
};
