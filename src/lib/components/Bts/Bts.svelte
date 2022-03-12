<script>
	import { categoryStore } from '$lib/stores/category-store';

	import CategoryImage from '../CategoryImage/CategoryImage.svelte';
	import EditBar from '../EditBar/EditBar.svelte';

	let selected_phase;
	export let items;
</script>

<div class="wrapper">
	{#if items.length > 0}
		{#each items as phase}
			<div class="phase-container">
				<div class="top-bar">
					<span>
						Phase {phase.phase}
					</span>
					<div class="edit-bar">
						<EditBar data="{phase}" options="{$categoryStore.category.endpoints}" />
					</div>
				</div>
				<div class="images-container">
					{#each phase.images as img}
						<CategoryImage col="images" img="{img}" page="{phase}" />
					{/each}
				</div>
			</div>
		{/each}
	{/if}
</div>

<style lang="scss">
	
	.edit-bar {
		align-items: flex-end;
		display: flex;
	}
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
