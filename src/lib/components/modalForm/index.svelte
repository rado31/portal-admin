<script lang="ts">
	import Buttons from '$lib/components/modalForm/buttons.svelte'
	import Form from '$lib/components/form/index.svelte'
	import Title from '$lib/components/form/title.svelte'
	import Input from '$lib/components/base/input.svelte'
	import DataForm from '$lib/components/modalForm/dataForm.svelte'
	// TO-DO file filter
</script>

<div class="bg-[#2c3656] p-5 rounded-lg">
	<Form action="?/updateFile">
		<Title name="File's data" />
		<DataForm />
		<Buttons />
	</Form>
	<Form className="mt-5" action="?/uploadImage" enctype="multipart/form-data">
		<Title name="Image" />
		<Input name="image" type="file" />
		<Buttons />
	</Form>
	<Form className="mt-5" action="?/uploadFile" enctype="multipart/form-data">
		<Title name="File" />
		<Input name="file" type="file" />
		<Buttons />
	</Form>
</div>
