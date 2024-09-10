<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton'
	import BtnEditors from '$lib/components/BtnEditors.svelte'
	import type { ModalSettings } from '@skeletonlabs/skeleton'
	import { getModalStore } from '@skeletonlabs/skeleton'

	const modalStore = getModalStore()

	const confirmFn = () => {
		const modal: ModalSettings = {
			type: 'component',
			component: 'editor',
			response: (r: boolean) => console.log('response:', r),
		}

		modalStore.trigger(modal)
	}

	const deleteFn = () => {
		const modal: ModalSettings = {
			type: 'confirm',
			title: 'Please Confirm',
			body: 'Are you sure you wish to delete?',
			response: (r: boolean) => console.log('response:', r),
		}

		modalStore.trigger(modal)
	}
</script>

<div
	class="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-5"
>
	<div class="card card-hover p-4 hover:cursor-pointer">
		<Avatar src="phonk.png" width="w-full" rounded="rounded-lg" />
		<p class="mt-5 text-center">Phonk</p>
		<BtnEditors {deleteFn} {confirmFn} />
	</div>
</div>
