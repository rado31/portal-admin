<script>
	import Icon from '@iconify/svelte'
	export let deleteFn
	export let confirmFn
</script>

<div class="grid grid-cols-2 gap-5 mt-5">
	<button on:click={confirmFn} class="btn btn-md variant-filled-primary">
		<Icon icon="mdi:edit-outline" width="24px" height="24px" />
	</button>
	<button on:click={deleteFn} class="btn btn-md variant-filled-error">
		<Icon icon="mdi:delete-outline" width="24px" height="24px" />
	</button>
</div>
