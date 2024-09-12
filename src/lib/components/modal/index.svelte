<script>
	import Buttons from '$lib/components/modal/buttons.svelte'
	import Form from '$lib/components/form/index.svelte'
	import Title from '$lib/components/form/title.svelte'
	import Input from '$lib/components/base/input.svelte'
	import TextArea from '$lib/components/base/textArea.svelte'
</script>

<div class="bg-[#2c3656] p-5 rounded-lg">
	<Form action="?/updateFile">
		<Title name="File's data" />
		<Input label="Title" name="title" />
		<TextArea label="Description" name="description" />
		<Buttons />
	</Form>
	<Form className="mt-5" action="?/uploadImage" enctype="multipart/form-data">
		<Title name="File's image" />
		<Input label="Image" name="image" type="file" />
		<Buttons />
	</Form>
</div>
