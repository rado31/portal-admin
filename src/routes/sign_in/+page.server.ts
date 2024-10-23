import axios from 'axios'
import type { RequestEvent } from './$types'
import { PUBLIC_API } from '$env/static/public'
import { fail, redirect } from '@sveltejs/kit'

async function signIn({ request, cookies }: RequestEvent) {
	const data = await request.formData()

	const requestBody = {
		username: data.get('username'),
		password: data.get('password'),
	}

	let isSuccess = false

	try {
		const res = await axios.post(`${PUBLIC_API}/admin/login`, requestBody, {
			timeout: 5000,
		})

		cookies.set('access_token', res.data.access_token, { path: '/' })
		isSuccess = true
	} catch (error: any) {
		return fail(500, { error: error.message })
	}

	if (isSuccess) throw redirect(302, '/')
}

export const actions = { signIn }
