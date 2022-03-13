<script context="module">
</script>

<script>
	import { collectionStore } from '$lib/stores/collectionStore-store';
	import _ from 'lodash';
	import { onMount } from 'svelte';
	import CategoryImage from '../CategoryImage/CategoryImage.svelte';
	import EditBar from '../EditBar/EditBar.svelte';
	export let items;

	onMount(async () => {});
</script>

{#each items as item}
	<div class="item-container">
		<div class="page-title">
			{_.startCase(item.page)}
		</div>

		<EditBar
			method="put"
			data="{item}"
			options="{$collectionStore.categories[item.category].endpoints}"
		/>

		<CategoryImage img="{item.image}" col="image" page="{item}" />
	</div>
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
