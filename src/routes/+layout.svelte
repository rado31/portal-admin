<script lang="ts">
	import '../app.postcss'
	import {
		initializeStores,
		Toast,
		Modal,
		type ModalComponent,
	} from '@skeletonlabs/skeleton'
	import ModalForm from '$lib/components/modalForm/index.svelte'
	import Menu from '$lib/components/menu/index.svelte'
	import { page } from '$app/stores'
	import { getModalStore } from '@skeletonlabs/skeleton'
	import { setContext } from 'svelte'

	initializeStores()
	setContext('modalStore', getModalStore())

	const modalRegistry: Record<string, ModalComponent> = {
		fileUpdate: { ref: ModalForm },
	}
</script>

<Toast position="t" />
<Modal components={modalRegistry} />

{#if $page.route.id !== '/sign_in'}
	<Menu />
{/if}

<slot />
