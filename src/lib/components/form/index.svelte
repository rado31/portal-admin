<script>
	import { enhance } from '$app/forms'
	export let action = '#'
	export let enctype = 'application/x-www-form-urlencoded'
	export let className = ''
</script>

<form
	method="post"
	{action}
	use:enhance
	class={'border border-[#495a8f] rounded-lg p-5 ' + className}
	{enctype}
>
	<slot />
</form>
