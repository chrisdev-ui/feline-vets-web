import animations from "@midudev/tailwind-animations"
import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				title: ["'Alegreya Sans'", ...defaultTheme.fontFamily.mono],
				subtitle: ["'Life Savers'", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				primary: "hsl(var(--color-primary) / <alpha-value>)",
				secondary: "hsl(var(--color-secondary) / <alpha-value>)",
				tertiary: {
					DEFAULT: "hsl(var(--color-tertiary) / <alpha-value>)",
					light: "hsl(var(--color-tertiary-light) / <alpha-value>)",
				},
				quaternary: "hsl(var(--color-quaternary) / <alpha-value>)",
				bg: {
					primary: "hsl(var(--color-bg-primary) / <alpha-value>)",
				},
			},
			height: {
				"initial-navbar": "var(--height-initial-navbar)",
				"final-navbar": "var(--height-final-navbar)",
			},
			maxWidth: {
				navbar: "var(--max-width-navbar)",
				content: "var(--max-width-content)",
			},
			spacing: {
				7.5: "1.875rem", // 30px
			},
			zIndex: {
				"-1": "-1",
				"1": "1",
			},
			boxShadow: {
				"nav": "0 2px 8px rgba(21, 11, 51, .08)",
				"about": "8px 9px theme('colors.tertiary.DEFAULT')",
				"card-1": "8px 9px rgba(176, 158, 153, .5)",
				"card-2": "8px 9px rgba(100, 182, 172, .5)",
				"card-3": "8px 9px rgba(160, 106, 255, .5)",
				"card-4": "8px 9px rgba(124, 161, 255, .8)",
				"card-5": "8px 9px rgba(151, 245, 151, .5)",
				"card-6": "8px 9px rgba(255, 118, 208, .6)",
				"feature-1": "8px 9px #97f597",
				"feature-2": "8px 9px #ffd15c",
				"feature-3": "8px 9px #67e4ff",
				"feature-4": "8px 9px #7ca1ff",
				"testimonials": "14px 14px rgba(255, 255, 255, .4)",
				"team-1": "0px 16px #4921b9",
				"team-2": "0px 16px #fc8864",
				"team-3": "0px 16px #ffd15c",
			},
			screens: {
				"xs": "360px",
				...defaultTheme.screens,
				"3xl": "1650px",
			},
		},
	},
	plugins: [
		animations,
		function ({ addVariant }) {
			addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
			addVariant("mobile", "@media (any-hover: none) { & }")
		},
	],
}
