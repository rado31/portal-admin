<script lang="ts">
	import Icon from '@iconify/svelte'
	import { TabAnchor } from '@skeletonlabs/skeleton'
	import { page } from '$app/stores'

	export let href = ''
	export let icon = ''
	export let title = ''
</script>

<TabAnchor {href} selected={$page.url.pathname === href}>
	<Icon class="mx-auto" {icon} width="24" height="24" />
	<span>{title}</span>
</TabAnchor>
