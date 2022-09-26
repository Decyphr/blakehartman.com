/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
		extend: {
			colors: {
				brutal: {
					opal: "#A9C8C0",
					brandy: "#DBBC8E"
				}
			},
			boxShadow: {
				brutal: "8px 8px 0 #000000",
			}
		},
	},
	plugins: [],
}
