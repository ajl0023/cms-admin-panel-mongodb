<script context="module">
</script>

<script>
	import { dragStore } from '$lib/stores/dragStore';

	import { onMount } from 'svelte';
	import CategoryImage from '../CategoryImage/CategoryImage.svelte';

	export let images;
	export let page;
	export let set_id;
	export let column;

	$: {
		if ($dragStore.current_set === set_id) {
			if ($dragStore.draggingItemIndex !== null && $dragStore.hoveredItemIndex !== null) {
				[images[$dragStore.draggingItemIndex], images[$dragStore.hoveredItemIndex]] = [
					images[$dragStore.hoveredItemIndex],
					images[$dragStore.draggingItemIndex]
				];

				$dragStore.draggingItemIndex = $dragStore.hoveredItemIndex;
			}
		}
	}
	images = images.sort((a, b) => {
		return a.order - b.order;
	});
</script>

{#each images as img, i}
	<CategoryImage set_id="{set_id}" index="{i}" img="{img}" page="{page}" column="{column}" />
{/each}

<style lang="scss">
</style>
