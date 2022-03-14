<script context="module">
</script>

<script>
	import { drag_store } from '$lib/stores/dragStore';
	import _ from 'lodash';
	import CategoryImage from '../CategoryImage/CategoryImage.svelte';
	import EditBar from '../EditBar/EditBar.svelte';
	export let images;
	export let page;
	export let set_id;
	export let column;
	export let set_name;
	export let options;
	const dragStore = drag_store();
	$: {
		if ($dragStore.draggingItemIndex !== null && $dragStore.hoveredItemIndex !== null) {
			[images[$dragStore.draggingItemIndex], images[$dragStore.hoveredItemIndex]] = [
				images[$dragStore.hoveredItemIndex],
				images[$dragStore.draggingItemIndex]
			];

			$dragStore.draggingItemIndex = $dragStore.hoveredItemIndex;
		}
	}
	images = images.sort((a, b) => {
		return a.order - b.order;
	});
</script>

<div class="wrapper">
	<div class="top-bar">
		<span class="category-name">{_.startCase(set_name)}</span>
		<div class="list-group"></div>
		<div class="edit-bar">
			<EditBar
				images="{images}"
				belongs_to="document"
				dragStore="{dragStore}"
				data="{page}"
				column="{column}"
				set_id="{set_id}"
				options="{options}"
			/>
		</div>
	</div>

	<div class="item-container">
		{#each images as img, i}
			<CategoryImage
				dragStore="{dragStore}"
				set_id="{set_id}"
				index="{i}"
				img="{img}"
				page="{page}"
				column="{column}"
			/>
		{/each}
	</div>
</div>

<style lang="scss">
	.item-container {
		flex-wrap: wrap;
		display: flex;
	}
	.top-bar {
		.category-name {
			font-size: 1.2em;
			margin-bottom: 0.3em;
		}
		.edit-bar {
			margin-bottom: 1.2em;
		}
		display: flex;
		align-items: flex-start;
		flex-direction: column;
	}
</style>
