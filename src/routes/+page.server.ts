import type { RequestEvent } from './$types'

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
