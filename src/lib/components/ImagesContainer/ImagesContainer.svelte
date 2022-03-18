<script context="module">
</script>

<script>
	import DragDropList from 'svelte-dragdroplist';
	import { drag_store } from '$lib/stores/dragStore';
	import _ from 'lodash';
	import CategoryImage from '../CategoryImage/CategoryImage.svelte';
	import EditBar from '../EditBar/EditBar.svelte';
	import { dndzone, overrideItemIdKeyNameBeforeInitialisingDndZones } from 'svelte-dnd-action';
	overrideItemIdKeyNameBeforeInitialisingDndZones('_id');

	export let images;
	export let page;
	export let set_id;
	export let column;
	export let set_name;
	export let options;
	const dragStore = drag_store();
	images = images.sort((a, b) => {
		return a.order - b.order;
	});

	function handleDndConsider(e) {
		images = e.detail.items;
		$dragStore.is_editing = true;
	}
	function handleDndFinalize(e) {
		images = e.detail.items;
	}
</script>

<div class="wrapper">
	<div class="top-bar">
		<span class="category-name">{_.startCase(set_name)}</span>
		<div class="list-group"></div>
		<div class="edit-bar">
			<EditBar
				dragStore="{dragStore}"
				images="{images}"
				belongs_to="document"
				data="{page}"
				column="{column}"
				set_id="{set_id}"
				options="{options}"
			/>
		</div>
	</div>

	<div
		on:consider="{handleDndConsider}"
		on:finalize="{handleDndFinalize}"
		use:dndzone="{{ items: images, flipDurationMs: 20, dropFromOthersDisabled: true }}"
		class="item-container"
	>
		{#each images as img, i (img._id)}
			<div class="drag-container">
				<CategoryImage set_id="{set_id}" index="{i}" img="{img}" page="{page}" column="{column}" />
			</div>
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
