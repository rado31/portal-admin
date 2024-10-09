import { redirect } from '@sveltejs/kit'
import type { RequestEvent } from './$types'

export function load({ url, cookies }: RequestEvent) {
	// TO-DO expired token

	const token = cookies.get('access_token')
	const protected_routes = ['/', '/films', '/books']

	if (protected_routes.includes(url.pathname) && !token) {
		throw redirect(302, '/sign_in')
	}
}
