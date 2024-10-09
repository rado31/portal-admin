<script lang="ts">
	import { TabGroup } from '@skeletonlabs/skeleton'
	import Item from '$lib/components/menu/item.svelte'

	const menu = [
		{
			id: 1,
			href: '/',
			icon: 'mdi:film-outline',
			title: 'Films',
		},
		{
			id: 2,
			href: '/musics',
			icon: 'mdi:music',
			title: 'Musics',
		},
		{
			id: 3,
			href: '/books',
			icon: 'mdi:book-outline',
			title: 'Books',
		},
	]
</script>

<TabGroup
	justify="justify-center"
	active="variant-filled-primary"
	hover="hover:variant-soft-primary"
	flex="flex-1 lg:flex-none"
	rounded="rounded-lg"
	border=""
	class="bg-surface-100-800-token w-full"
>
	{#each menu as { id, href, icon, title } (id)}
		<Item {href} {icon} {title} />
	{/each}
</TabGroup>
