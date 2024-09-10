<script lang="ts">
	import '../app.postcss'
	import {
		initializeStores,
		TabGroup,
		TabAnchor,
		Toast,
		Modal,
		type ModalComponent,
	} from '@skeletonlabs/skeleton'
	import Icon from '@iconify/svelte'
	import { AppBar } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'
	import Editor from '$lib/components/Editor.svelte'

	initializeStores()

	const modalRegistry: Record<string, ModalComponent> = {
		editor: { ref: Editor },
	}
</script>

<Toast position="t" />
<Modal components={modalRegistry} />

<AppBar class="mb-10">
	<svelte:fragment slot="lead">Admin Portal</svelte:fragment>
	<svelte:fragment slot="trail">
		<TabGroup
			justify="justify-center"
			active="variant-filled-primary"
			hover="hover:variant-soft-primary"
			flex="flex-1 lg:flex-none"
			rounded="rounded-lg"
			border=""
			class="bg-surface-100-800-token w-full"
		>
			<TabAnchor href="/" selected={$page.url.pathname === '/'}>
				<Icon class="mx-auto" icon="mdi:music" width="24" height="24" />
				<span>Musics</span>
			</TabAnchor>
			<TabAnchor
				href="/cartoons"
				selected={$page.url.pathname === '/cartoons'}
			>
				<Icon
					class="mx-auto"
					icon="mdi:film-outline"
					width="24"
					height="24"
				/>
				<span>Cartoons</span>
			</TabAnchor>
			<TabAnchor href="/books" selected={$page.url.pathname === '/books'}>
				<Icon
					class="mx-auto"
					icon="mdi:book-open-variant-outline"
					width="24"
					height="24"
				/>
				<span>Books</span>
			</TabAnchor>
		</TabGroup>
	</svelte:fragment>
</AppBar>
<slot />
