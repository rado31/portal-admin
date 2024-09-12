<script>
	export let label = ''
	export let name = ''
	export let className = ''
	export let rows = 4
</script>

<label class="label mt-5">
	<span>{label}</span>
	<textarea {name} class={'textarea resize-none ' + className} {rows} />
</label>
