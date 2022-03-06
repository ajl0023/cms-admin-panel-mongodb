<script context="module">
</script>

<script>
	import _ from 'lodash';
	import { onMount, tick } from 'svelte';
	import axios from 'axios';
	import { deleteHook } from '$lib/stores/deleteHook-store';
	import { tableStore } from '$lib/tableStore';
	import { tableModalStore } from '$lib/TableModal/tableModalStore';
	import { entryModalStore } from '$lib/EntryModal/entryModalStore';
	export let pages;

	onMount(async () => {});
	export let img;
	export let page;
	export let col;
</script>

<div
	on:click="{() => {
		if (img.url) {
			deleteHook.addItem(
				$tableStore.currentTable.category === 'bg-pages'
					? {
							image_id: img._id,

							page: page
					  }
					: {
							image_id: img._id,

							page: page,
							col
					  }
			);
			return;
		}
	}}"
	class:hidden="{!img.url && $tableStore.currentTable.category !== 'carousel-renders'}"
	class="image-container {col ? col : ''}"
>
	<div
		class="selected-container"
		class:selected="{$deleteHook.deleted.find((item) => {
			return item.image_id === img._id;
		})}"
	></div>
	{#if img.url}
		<img src="{img.url}" alt="" />
	{:else if $tableStore.currentTable.category === 'carousel-renders'}
		<div
			on:click="{() => {
				entryModalStore.handleVisible(page, 'replace_media');
				$entryModalStore.selected = {
					col: col,
					...img
				};
			}}"
			class="replace-container"
		>
			<label for="image">Add Image Here</label>
		</div>
	{/if}
</div>

<style lang="scss">
	.selected-container {
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 4;
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
