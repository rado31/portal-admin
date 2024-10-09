<script lang="ts">
	import { getToastStore } from '@skeletonlabs/skeleton'
	import { enhance } from '$app/forms'
	export let form

	const toastStore = getToastStore()

	$: if (form?.error) toastStore.trigger({ message: form?.error })

	let inputType = 'password'

	const changeVisible = () => {
		inputType = inputType === 'password' ? 'text' : 'password'
	}
</script>

<form
	method="post"
	action="?/signIn"
	use:enhance
	class="min-h-screen flex flex-col justify-center items-center px-5"
>
	<div class="card p-5 flex flex-col justify-center items-center">
		<h3 class="h3 text-center">SIGN IN</h3>
		<input
			class="input mt-5"
			name="username"
			type="text"
			placeholder="Username"
			autocomplete="off"
		/>
		<div class="input-group input-group-divider grid-cols-[1fr_auto] mt-5">
			<input
				name="password"
				type={inputType}
				placeholder="Password"
				autocomplete="off"
			/>
			<button
				type="button"
				on:click={changeVisible}
				class="variant-filled-secondary">show</button
			>
		</div>
		<button class="btn variant-filled-primary mt-5">SUBMIT</button>
	</div>
</form>
