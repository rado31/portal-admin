<script lang="ts">
	import type { ButtonType } from '$lib/types/button'
	import Icon from '@iconify/svelte'

	export let type: ButtonType = 'button'
	export let className = ''
	export let onClick = () => {}
	export let title = ''
	export let icon = ''
</script>

<button {type} class={'btn variant-filled-' + className} on:click={onClick}>
	<Icon {icon} width="24px" height="24px" />
	{title}
</button>
