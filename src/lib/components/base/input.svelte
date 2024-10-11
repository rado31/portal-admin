<script lang="ts">
	export let label = ''
	export let name = ''
	export let type = 'text'
	export let className = 'input'
	export let value = ''
</script>

<label class="label">
	<span>{label}</span>
	<input {value} {name} {type} class={className} />
</label>
