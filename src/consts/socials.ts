type SocialName = "Facebook" | "Twitter" | "Instagram" | "Youtube" | "Tiktok"

interface Social {
	href: string
	name: SocialName
}

export const SOCIALS: Array<Social> = [
	{ href: "https://www.facebook.com/felinevets", name: "Facebook" },
	{ href: "https://www.instagram.com/felinevets", name: "Instagram" },
	{ href: "https://www.tiktok.com/@felinevets", name: "Tiktok" },
	{ href: "https://www.youtube.com/@felinevets", name: "Youtube" },
]
