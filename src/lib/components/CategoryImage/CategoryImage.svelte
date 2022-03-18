<script context="module">
</script>

<script>
	import { dev } from '$app/env';

	import { deleteHook } from '$lib/stores/deleteHook-store';
	import { hostName } from 'src/host';

	export let img;
	export let page;
	export let column;
	export let index;
	export let set_id;
	export let dragStore;
	$: {
		if (img && img.url) {
			img.url = img.url + '?size=true';
		}
	}
</script>

{#if img.url}
	<div
		class:thumbs="{column === 'thumbs'}"
		class="image-container"
		on:dragstart="{(e) => {
			if (dragStore) {
				dragStore.dragStart(e, img, index, set_id);
			}
		}}"
		on:dragover="{(e) => {
			if (dragStore) {
				dragStore.dragover(index);
			}
		}}"
		on:dragend="{(e) => {
			if (dragStore) {
				dragStore.dragend(e);
			}
		}}"
		on:click="{() => {
			deleteHook.addItem({
				image_id: img._id,
				page_id: page._id,
				page_category: page.category,
				column: column
			});
		}}"
	>
		<div
			class:selected="{$deleteHook.deleted.find((item) => {
				return item.image_id === img._id;
			})}"
			class="selected-container"
		></div>
		<img src="{img.url}" alt="" />
	</div>
{/if}

<style lang="scss">
	.selected-container {
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 4;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		position: absolute;
	}
	.selected {
		border: 1px white solid;

		background-color: rgba(0, 0, 0, 0.5);
	}
	.hidden {
		display: none;
	}
	.image-input {
		display: none;
	}
	.image-container {
		position: relative;
		cursor: pointer;
		pointer-events: all;
		width: 100px;
		height: 100px;
		img {
			width: 100%;
			object-fit: cover;
			height: 100%;
		}
	}
	.image-container.thumbs {
		width: 50px;
		object-fit: cover;
		border-radius: 50%;
		overflow: hidden;
		img {
			width: 100%;
			height: 100%;
			object-position: center center;
		}
		height: 50px;
	}
	.replace-container {
		label {
			cursor: pointer;
		}
		display: flex;

		border: 1px solid gray;
		width: 100%;
		height: 100%;
		align-items: center;
		text-align: center;
		justify-content: center;
	}
</style>
