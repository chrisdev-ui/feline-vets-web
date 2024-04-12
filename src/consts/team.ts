export interface Member {
	id: string
	image: string
	phone?: string
	email?: string
	instagram?: string
	customStyle?: string
	years?: number
}

export const allMembers: Member[] = [
	{
		id: "paula-morales",
		image: "/img/team/paula-morales.png",
		customStyle: "shadow-team-1",
		years: 5,
	},
	{
		id: "vanessa-bonilla",
		image: "/img/team/vanessa-bonilla.png",
		customStyle: "shadow-team-2",
		years: 5,
	},
]
