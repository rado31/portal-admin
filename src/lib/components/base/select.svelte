<script lang="ts">
	import type { Selecter } from '$lib/types/select'

	export let name = ''
	export let className = ''
	export let options: Selecter[] = []
	export let label = ''
</script>

<label class="mt-5">
	<span>{label}</span>
	<select {name} class={'select mt-1 ' + className}>
		{#each options as opt (opt.id)}
			<option value={opt.value}>{opt.title}</option>
		{/each}
	</select>
</label>
