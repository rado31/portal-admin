<script lang="ts">
	export let label = ''
	export let name = ''
	export let className = ''
	export let rows = 4
	export let value = ''
</script>

<label class="label">
	<span>{label}</span>
	<textarea
		{value}
		{name}
		class={'textarea resize-none h-[90%] ' + className}
		{rows}
	/>
</label>
