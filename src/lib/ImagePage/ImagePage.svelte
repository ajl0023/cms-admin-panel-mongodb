<script context="module">
</script>

<script>
	import _ from 'lodash';
	import { onMount, tick } from 'svelte';
	import axios from 'axios';
	import { tableStore } from '$lib/tableStore';
	import { entryModalStore } from '$lib/EntryModal/entryModalStore';
	export let pages;

	onMount(async () => {});
</script>

{#each pages as item}
	{#if $tableStore.currentTable.type === 'bg-image'}
		<div
			on:click="{() => {
				entryModalStore.handleVisible(item);
			}}"
			class="item-container"
		>
			<div class="page-title">
				{_.startCase(item.page)}
			</div>
			<div class="image-container">
				<img src="{item.url}" alt="" />
			</div>
		</div>
	{/if}
{/each}

<style lang="scss">
	.image-container {
		width: 100px;
		height: 100px;
		cursor: pointer;
		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
