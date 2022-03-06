<script context="module">
</script>

<script>
	import CategoryImage from '$lib/CategoryImage/CategoryImage.svelte';
	import EditBar from '$lib/EditBar/EditBar.svelte';
	import { entryModalStore } from '$lib/EntryModal/entryModalStore';
	import { deleteHook } from '$lib/stores/deleteHook-store';
	import { tableStore } from '$lib/tableStore';
	import _ from 'lodash';
	import { onMount } from 'svelte';
	export let pages;
	console.log(pages);
	onMount(async () => {});
</script>

{#each pages as item}
	{#if $tableStore.currentTable.type === 'bg-image'}
		<div class="item-container">
			<div class="page-title">
				{_.startCase(item.page)}
			</div>
			<EditBar data="{item}" options="{['Edit Photos']}" />
			<CategoryImage img="{item.image}" col="image" page="{item}" />
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
