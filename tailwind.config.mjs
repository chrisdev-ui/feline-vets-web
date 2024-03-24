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
				nav: "0 2px 8px rgba(21, 11, 51, .08)",
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
