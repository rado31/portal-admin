import type { Film } from '$lib/types/films'
import type { Writable } from 'svelte/store'
import { getContext, setContext } from 'svelte'
import { writable } from 'svelte/store'

export function setFilms(films: Film[]) {
	const films_ = writable<Film[]>(films)
	setContext('films', films_)
}

export function getFilms() {
	return getContext<Writable<Film[]>>('films')
}
