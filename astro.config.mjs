import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
	site: "https://felinevets.com.co/",
	compressHTML: true,
	prefetch: true,
	output: "server",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
	devToolbar: {
		enabled: false,
	},
	integrations: [
		tailwind(),
		sitemap({
			i18n: {
				defaultLocale: "es",
				locales: {
					es: "es-ES",
					en: "en-US",
				},
			},
		}),
	],
	i18n: {
		defaultLocale: "es",
		locales: ["es", "en"],
		routing: {
			prefixDefaultLocale: false,
		},
		fallback: {
			en: "es",
		},
	},
	build: {
		inlineStylesheets: "always",
	},
	vite: {
		build: {
			cssMinify: "lightningcss",
		},
		ssr: {
			noExternal: ["path-to-regexp"],
		},
	},
})
