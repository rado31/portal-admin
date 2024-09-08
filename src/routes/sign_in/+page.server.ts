import axios from 'axios'
import type { RequestEvent } from './$types'
import { API } from '$env/static/private'
import { fail } from '@sveltejs/kit'

async function signIn({ request, cookies }: RequestEvent) {
	const data = await request.formData()

	const requestBody = {
		phone: data.get('phone'),
		password: data.get('password'),
	}

	try {
		const res = await axios.post(API, requestBody, { timeout: 5000 })

		cookies.set('access_token', res.data.access_token, { path: '/' })
	} catch (error: any) {
		return fail(500, { error: error.message })
	}
}

export const actions = { signIn }
