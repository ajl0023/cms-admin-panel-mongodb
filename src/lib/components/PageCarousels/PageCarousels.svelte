<script context="module">
</script>

<script>
	import { categoryStore } from '$lib/stores/category-store';

	import CategoryImage from '../CategoryImage/CategoryImage.svelte';
	import EditBar from '../EditBar/EditBar.svelte';

	export let items;
</script>

<div class="wrapper">
	<div class="wrapper">
		{#if items.length > 0}
			{#each items as page}
				<div class="phase-container">
					<div class="top-bar">
						<span>
							{page.page}
						</span>
						<div class="edit-bar">
							<EditBar data="{page}" options="{$categoryStore.category.endpoints}" />
						</div>
					</div>
					<div class="images-container">
						{#each page.images as img}
							<CategoryImage img="{img}" page="{page}" col="images" />
						{/each}
					</div>
				</div>
			{/each}
		{/if}
	</div>

	<style lang="scss">
		.wrapper {
			overflow-y: auto;
		}
		.phase-container {
			margin-top: 30px;
		}
		.top-bar {
			display: flex;
			align-items: flex-end;
			margin-bottom: 10px;
			.edit-bar {
				margin-left: 30px;
			}
		}
		.images-container {
			display: flex;
			flex-wrap: wrap;

			.image-container {
				width: 100px;
				padding: 2px;
				height: 100px;
				img {
					object-fit: cover;
					width: 100%;
					height: 100%;
				}
			}
		}
	</style>
</div>

<style lang="scss">
</style>
