import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
	site: "https://feline-vets-web.vercel.app/",
	compressHTML: true,
	prefetch: true,
	output: "server",
	adapter: vercel(),
	devToolbar: {
		enabled: false,
	},
	integrations: [tailwind(), sitemap()],
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
