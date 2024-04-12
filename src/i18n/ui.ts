/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import SpainFlag from "@/components/flags/Spain.astro"
import UnitedStatesFlag from "@/components/flags/UnitedStates.astro"

// Add missing imports
export const LANGUAGES: Record<string, { code: string; name: string; flag: typeof SpainFlag }> = {
	en: {
		code: "en",
		name: "English",
		flag: UnitedStatesFlag,
	},
	es: {
		code: "es",
		name: "Español",
		flag: SpainFlag,
	},
}

export const defaultLang = "es"
export const showDefaultLang = false

export const ui = {
	es: {
		"nav.home": "Inicio",
		"nav.services": "Servicios",
		"nav.features": "Beneficios",
		"nav.testimonials": "Testimonios",
		"nav.team": "Equipo",
		"nav.pricing": "Precios",
		"nav.contact": "Agenda una cita",
		"nav.about": "Nosotros",
		"footer.contact": "Contáctanos",
		"team.viewprofile": "Ver perfil",
	},
	en: {
		"nav.home": "Home",
		"nav.services": "Service",
		"nav.features": "Features",
		"nav.testimonials": "Testimonial",
		"nav.team": "Our Team",
		"nav.pricing": "Pricing",
		"nav.contact": "Make an appointment",
		"nav.about": "About us",
		"footer.contact": "Contact us",
		"team.viewprofile": "View profile",
	},
} as const

export const routes = {
	es: {
		equipo: "equipo",
	},
	en: {
		equipo: "team",
	},
}
