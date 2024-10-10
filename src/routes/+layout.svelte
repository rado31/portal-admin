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

	initializeStores()

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
