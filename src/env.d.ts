/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly INSTAGRAM_ACCESS_TOKEN: string
	readonly SENDGRID_API_KEY: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare global {
	interface Window {
		toast: function
	}
}
