<script>
	import { onMount, tick } from 'svelte';
	import { DragGesture } from '@use-gesture/vanilla';

	import { tableStoreDrag } from './tableStoreDrag';
	import DragHandle from './svgs/DragHandle.svelte';
	import _ from 'lodash';
	export let item;
	export let i;
	export let submitting;
	export let changed;
	export let data;
	let originalIndex = i;

	// $: {
	// 	data['data']['sort_index'] = i;
	// }
	// $: {
	// 	if (submitting && originalIndex !== i) {
	// 		data['data']['new_index'] = true;
	// 		originalIndex = i;
	// 		// console.log(i, 'has changed');
	// 	}
	// }

	let row;
	console.log(row);
	let top;
	let mouseYCoordinate;

	onMount(() => {});
</script>

<div
	on:dragover="{async (e) => {
		tableStoreDrag.dragover(i);
	}}"
	draggable="false"
	bind:this="{row}"
	class="grid-row"
>
	<div
		draggable="true"
		on:dragstart="{async (e) => {
			e.dataTransfer.setDragImage(row, 0, 0);

			// tableStoreDrag.dragStart(e, uid, i);
		}}"
		on:dragend="{async (e) => {
			tableStoreDrag.dragend(e);
		}}"
		class="drag-col"
	>
		<DragHandle />
	</div>
	<div class="index">{i + 1}</div>

	<div class="image-container">
		<img src="{data}" alt="" />
	</div>
</div>

<style lang="scss">
	.image-container {
		width: 40px;
		height: 40px;
		&:not(:last-child) {
			margin-right: -3px;
		}
		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.images-col-container {
		display: flex;
	}
	.drag-col {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.grid-row {
		display: grid;
		width: 100%;
		padding: 10px;
		gap: 20px;
		align-items: center;
		border-bottom: 1px solid rgb(222, 226, 230);
		grid-auto-flow: column;
		grid-template-rows: 20px;
		grid-template-columns: 20px 30px repeat(auto-fill, minmax(100px, 150px));
		.grid-col {
			width: 100%;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}
	.inactive {
		opacity: 0;
	}
	.table-thumb-container {
		width: 50px;
		height: 50px;
		img {
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	}
	.item {
		padding: 10px;
		margin-bottom: 10px;
	}
</style>
