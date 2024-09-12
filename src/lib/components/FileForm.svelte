<script lang="ts">
	import { enhance } from '$app/forms'
	import type { BtnGroupType } from '$lib/types/btnGroup'
	import BtnGroup from './BtnGroup.svelte'

	const btn: BtnGroupType = {
		fn1: null,
		fn2: null,
		type1: 'reset',
		type2: 'submit',
		icon1: 'mdi:clear-octagon',
		icon2: 'mdi:send-variant-outline',
		class1: 'btn variant-filled-error',
		class2: 'btn variant-filled-primary',
	}
</script>

<div class="bg-[#2c3656] p-5 rounded-lg">
	<form
		method="post"
		action="?/updateFile"
		use:enhance
		class="border border-[#495a8f] rounded-lg p-5"
	>
		<div class="mx-auto -mt-8 mb-5 w-fit bg-[#2c3656] px-5">
			File's data
		</div>
		<label class="label">
			<span>Title</span>
			<input name="title" type="text" class="input" />
		</label>
		<label class="label mt-5">
			<span>Description</span>
			<textarea
				name="description"
				class="textarea mt-5 resize-none"
				rows="4"
			/>
		</label>
		<BtnGroup {btn} />
	</form>
	<form
		method="post"
		action="?/uploadImage"
		use:enhance
		enctype="multipart/form-data"
		class="border border-[#495a8f] rounded-lg p-5 mt-7"
	>
		<div class="mx-auto -mt-8 mb-5 w-fit bg-[#2c3656] px-5">
			File's image
		</div>
		<input name="image" type="file" class="input" />
		<BtnGroup {btn} />
	</form>
</div>
