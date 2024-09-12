<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton'
	import Buttons from '$lib/components/card/buttons.svelte'

	export let src = ''
	export let title = ''
</script>

<div class="card card-hover p-4">
	<Avatar {src} width="w-full" rounded="rounded-lg" />
	<p class="mt-5 text-center">{title}</p>
	<Buttons />
</div>
