<script lang="ts">
	import Button from '$lib/components/base/button.svelte'
	import { getFilms } from '$lib/states/films'
	import type { Film } from '$lib/types/films'
	import type { ModalSettings, ModalStore } from '@skeletonlabs/skeleton'
	import { getContext } from 'svelte'

	export let film: Film

	const films = getFilms()
	const modalStore = getContext<ModalStore>('modalStore')

	const editFn = () => {
		const modal: ModalSettings = {
			type: 'component',
			component: 'fileUpdate',
			meta: film,
		}

		modalStore.trigger(modal)
	}

	const deleteFn = () => {
		const modal: ModalSettings = {
			type: 'confirm',
			title: 'Please Confirm',
			body: 'Are you sure you wish to delete?',
			response: (r: boolean) => {
				if (r) {
					films.update(val => val.filter(f => f.id !== film.id))
				}
			},
		}

		modalStore.trigger(modal)
	}
</script>

<div class="grid grid-cols-2 gap-5 mt-5">
	<Button onClick={editFn} icon="mdi:edit-outline" className="primary" />
	<Button onClick={deleteFn} icon="mdi:delete-outline" className="error" />
</div>
