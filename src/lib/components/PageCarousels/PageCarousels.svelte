<script context="module">
</script>

<script>
	import { categoryStore } from '$lib/stores/category-store';
	import { v4 as uuidv4 } from 'uuid';
	import EditBar from '../EditBar/EditBar.svelte';
	import ImagesContainer from '../ImagesContainer/ImagesContainer.svelte';

	export let items;
</script>

<div class="wrapper">
	<div class="wrapper">
		{#if items.length > 0}
			{#each items as page}
				<div class="images-container">
					<ImagesContainer
						options="{$categoryStore.category.endpoints}"
						set_name="{page.page}"
						images="{page.images}"
						page="{page}"
					/>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style lang="scss">
</style>
