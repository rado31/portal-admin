import axios from 'axios'
import type { RequestEvent } from './$types'
import { PUBLIC_API } from '$env/static/public'
import type { Film } from '$lib/types/films'

export async function load() {
	const { data: films } = await axios.get<Film[]>(
		`${PUBLIC_API}/client/films`,
	)

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
