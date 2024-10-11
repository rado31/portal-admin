<script lang="ts">
	import Card from '$lib/components/card/index.svelte'
	import { flip } from 'svelte/animate'
	import { send, receive } from '$lib/utils/transition'
	import { setFilms, getFilms } from '$lib/states/films'
	import { PUBLIC_API } from '$env/static/public'

	export let data
	setFilms(data.films)
	const films = getFilms()
</script>

<div class="container mx-auto grid grid-cols-4 gap-4">
	{#each $films as film (film.id)}
		<div
			in:receive={{ key: film.id }}
			out:send={{ key: film.id }}
			animate:flip={{ duration: 200 }}
		>
			<Card
				{film}
				src={`${PUBLIC_API}${film.image_path}`}
				title={film.title}
			/>
		</div>
	{/each}
</div>
