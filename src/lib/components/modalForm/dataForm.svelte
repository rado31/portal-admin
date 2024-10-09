<script lang="ts">
	import Input from '$lib/components/base/input.svelte'
	import TextArea from '$lib/components/base/textArea.svelte'
	import Select from '$lib/components/base/select.svelte'
	import type { Selecter } from '$lib/types/select'

	const languages: Selecter[] = [
		{
			id: 1,
			title: 'Turkmen',
			value: 'tk',
		},
		{
			id: 2,
			title: 'Russian',
			value: 'ru',
		},
	]

	// TO-DO get categories from the server
	const categories: Selecter[] = [
		{
			id: 1,
			title: 'Horror',
			value: 'horror',
		},
		{
			id: 2,
			title: 'Action',
			value: 'action',
		},
	]
</script>

<div class="grid grid-cols-2 gap-4">
	<div>
		<Input label="Title" name="title" />
		<Select label="Language" name="fileLang" options={languages} />
		<Select label="Category" name="fileCategory" options={categories} />
	</div>
	<TextArea label="Description" name="description" />
</div>
