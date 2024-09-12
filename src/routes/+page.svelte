<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton'
	import BtnGroup from '$lib/components/BtnGroup.svelte'
	import type { ModalSettings } from '@skeletonlabs/skeleton'
	import { getModalStore } from '@skeletonlabs/skeleton'
	import type { BtnGroupType } from '$lib/types/btnGroup'

	const modalStore = getModalStore()

	const editFn = () => {
		const modal: ModalSettings = {
			type: 'component',
			component: 'editor',
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

	const btn: BtnGroupType = {
		fn1: editFn,
		fn2: deleteFn,
		type1: 'button',
		type2: 'button',
		icon1: 'mdi:edit-outline',
		icon2: 'mdi:delete-outline',
		class1: 'btn variant-filled-primary',
		class2: 'btn variant-filled-error',
	}
</script>

<div
	class="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-5"
>
	<div class="card card-hover p-4 hover:cursor-pointer">
		<Avatar src="phonk.png" width="w-full" rounded="rounded-lg" />
		<p class="mt-5 text-center">Phonk</p>
		<BtnGroup {btn} />
	</div>
</div>
