import animations from "@midudev/tailwind-animations"
import defaultTheme from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				title: ["Alegreya\\ Sans", ...defaultTheme.fontFamily.mono],
				subtitle: ["Life\\ Savers", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				primary: "hsl(var(--color-primary) / <alpha-value>)",
				secondary: "hsl(var(--color-secondary) / <alpha-value>)",
				tertiary: "hsl(var(--color-tertiary) / <alpha-value>)",
				quaternary: "hsl(var(--color-quaternary) / <alpha-value>)",
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
