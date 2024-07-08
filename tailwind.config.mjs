/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			color: {
				'green-new': '#92AD97' 
			},
			brightness: {
				35: '.35',
			},
			spacing:{
				'38': '9.50rem',
			}
			
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ["light"], 
	  },
}
