<script>
	export let label = ''
	export let name = ''
	export let type = 'text'
	export let className = 'input'
</script>

<label class="label mt-5">
	<span>{label}</span>
	<input {name} {type} class={className} />
</label>
