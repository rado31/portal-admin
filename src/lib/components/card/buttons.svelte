<script lang="ts">
	import Button from '$lib/components/base/button.svelte'
	import type { ModalSettings } from '@skeletonlabs/skeleton'
	import { getModalStore } from '@skeletonlabs/skeleton'

	const modalStore = getModalStore()

	const editFn = () => {
		const modal: ModalSettings = {
			type: 'component',
			component: 'fileUpdate',
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

<div class="grid grid-cols-2 gap-5 mt-5">
	<Button onClick={editFn} icon="mdi:edit-outline" className="primary" />
	<Button onClick={deleteFn} icon="mdi:delete-outline" className="error" />
</div>
