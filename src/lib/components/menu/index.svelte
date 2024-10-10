<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton'
	import Group from '$lib/components/menu/group.svelte'
</script>

<AppBar class="static w-full mb-8">
	<svelte:fragment slot="lead">Admin Portal</svelte:fragment>
	<svelte:fragment slot="trail"><Group /></svelte:fragment>
</AppBar>
