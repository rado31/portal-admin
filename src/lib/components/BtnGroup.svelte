<script lang="ts">
	import type { BtnGroupType } from '$lib/types/btnGroup'
	import Icon from '@iconify/svelte'
	export let btn: BtnGroupType
</script>

<div class="grid grid-cols-2 gap-5 mt-5">
	<button type={btn.type1} on:click={btn.fn1} class={btn.class1}>
		<Icon icon={btn.icon1} width="24px" height="24px" />
	</button>
	<button type={btn.type2} on:click={btn.fn2} class={btn.class2}>
		<Icon icon={btn.icon2} width="24px" height="24px" />
	</button>
</div>
