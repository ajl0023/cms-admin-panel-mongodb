<script context="module">
</script>

<script>
	import { collectionStore } from '$lib/stores/collectionStore-store';

	import { onMount } from 'svelte';
	import { v4 as uuidv4 } from 'uuid';

	import CategoryImage from '../CategoryImage/CategoryImage.svelte';
	import EditBar from '../EditBar/EditBar.svelte';
	import ImagesContainer from '../ImagesContainer/ImagesContainer.svelte';
	export let items;

	const fields = ['left', 'right', 'thumbs'];
	onMount(async () => {});
</script>

<div class="wrapper">
	{#each items as page}
		{#each fields as col}
			<div class="images-container">
				<ImagesContainer
					set_name="{col}"
					options="{$collectionStore.categories[page.category].endpoints}"
					images="{page[col]}"
					column="{col}"
					page="{page}"
					set_id="{uuidv4()}"
				/>
			</div>
		{/each}
	{/each}
</div>

<style lang="scss">
	.order-container {
		position: relative;

		.inner-order-container {
			border-radius: 50%;
			position: absolute;
			width: 20px;

			z-index: 5;
			display: flex;
			align-items: center;
			justify-content: center;
			height: 20px;
			background-color: black;
		}
		.order {
			color: white;
			font-weight: 700;
		}
	}
	.wrapper {
		margin-top: 1rem;
		overflow: auto;
	}
	.image-container {
		height: 100px;
		width: 100px;
		padding: 2px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.image-container.thumbs {
		width: 50px;
		padding: 0px;
		height: 50px;
		overflow: hidden;
		border-radius: 50%;
	}
	.images-container {
		display: flex;
		flex-wrap: wrap;
	}
</style>
