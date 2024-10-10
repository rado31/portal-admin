import type { Category } from '$lib/types/category'

export type Film = {
	id: number
	title: string
	description: string
	language: string
	category: Category
	image: string
	file: string
}
