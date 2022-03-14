<script>
	import { categoryStore } from '$lib/stores/category-store';
	import { v4 as uuidv4 } from 'uuid';

	import CategoryImage from '../CategoryImage/CategoryImage.svelte';
	import EditBar from '../EditBar/EditBar.svelte';
	import ImagesContainer from '../ImagesContainer/ImagesContainer.svelte';

	let selected_phase;
	export let items;
</script>

<div class="wrapper">
	{#if items.length > 0}
		{#each items as phase}
			<div class="phase-container">
				<ImagesContainer
					options="{$categoryStore.category.endpoints}"
					set_name="Phase {phase.phase}"
					set_id="{uuidv4()}"
					images="{phase.images}"
					page="{phase}"
				/>
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

	.top-bar {
		display: flex;
		align-items: flex-end;
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
