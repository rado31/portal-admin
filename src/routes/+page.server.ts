import type { RequestEvent } from './$types'

export async function load() {
	const films = [
		{
			id: 1,
			title: 'Phonk',
			description: 'Some film',
			language: 'tk',
			category: {
				id: 1,
				title: 'Action',
			},
			image: 'phonk.png',
			file: 'phonk.png',
		},
		{
			id: 2,
			title: 'Phonk',
			description: 'Some film',
			language: 'tk',
			category: {
				id: 2,
				title: 'Horror',
			},
			image: 'phonk.png',
			file: 'phonk.png',
		},
		{
			id: 3,
			title: 'Phonk',
			description: 'Some film',
			language: 'tk',
			category: {
				id: 2,
				title: 'Horror',
			},
			image: 'phonk.png',
			file: 'phonk.png',
		},
		{
			id: 4,
			title: 'Phonk',
			description: 'Some film',
			language: 'tk',
			category: {
				id: 2,
				title: 'Horror',
			},
			image: 'phonk.png',
			file: 'phonk.png',
		},
	]

	return { films }
}

export async function uploadImage({ request }: RequestEvent) {
	const data = await request.formData()

	console.log(data.get('image'))
}

export async function uploadFile({ request }: RequestEvent) {
	const data = await request.formData()

	console.log(data.get('file'))
}

export async function updateFile({ request }: RequestEvent) {
	const data = await request.formData()
	console.log(data)
}

export const actions = { uploadImage, uploadFile, updateFile }
