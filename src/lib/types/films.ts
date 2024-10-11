import type { Category } from '$lib/types/category'

export type Film = {
	id: number
	title: string
	description: string
	language: string
	sub_category_id: Category
	image_path: string
	path: string
}
