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
		image: "https://pub-e0766a16d9da4b039da6c1561ffd52b6.r2.dev/paula-morales.png",
		customStyle: "shadow-team-1",
		years: 5,
	},
	{
		id: "vanessa-bonilla",
		image: "https://pub-e0766a16d9da4b039da6c1561ffd52b6.r2.dev/vanessa-bonilla.png",
		customStyle: "shadow-team-2",
		years: 5,
	},
]
