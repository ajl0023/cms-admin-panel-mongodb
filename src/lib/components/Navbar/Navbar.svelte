<script>
	import { goto } from '$app/navigation';
	import { categoryStore } from '$lib/stores/category-store';

	import { collectionStore } from '$lib/stores/collectionStore-store';
	const categories = Object.keys($collectionStore.categories).map((cat) => {
		return $collectionStore.categories[cat];
	});
	const collections = ['maliview', 'aviator'];
</script>

<div class="nav-container border-1 border-end">
	<div class="nav-top-container">
		<h5 class="nav-title">Pages</h5>
		<div class="update-site-container">
			<button
				on:click="{() => {
					fetch('/api/netlify', {
						method: 'POST'
					});
				}}"
				class="btn btn-primary">Update Site</button
			>
		</div>
	</div>
	<hr />
	<nav class="nav flex-column">
		{#each categories as category}
			{#if category.visible}
				<a
					class:selected="{$categoryStore.category &&
						category.category === $categoryStore.category.category}"
					href="/page/{category._id}"
					class="nav-link border-0 border-bottom"
				>
					{category.title}
				</a>
			{/if}
		{/each}
	</nav>
	<h5 class="nav-title">Sites</h5>
	<hr />
	{#each collections as collection}
		<div
			class="collection-button nav-link border-0 border-bottom"
			class:selected="{collection === $collectionStore.collection}"
			on:click="{async () => {
				await fetch('/api/logout', {
					method: 'POST'
				});
				await fetch('/api/collection', {
					method: 'POST',
					body: JSON.stringify({
						collection: collection
					})
				});
				await goto('/');
				window.location.reload();
			}}"
		>
			{collection}
		</div>
	{/each}
</div>

<style lang="scss">
	.collection-button {
		cursor: pointer;
	}
	.nav-top-container {
		padding: 10px;
	}
	.nav-container {
		overflow: hidden;
		max-width: 200px;
		width: 100%;
		height: 100%;
		.nav-link {
			display: block;
			color: black;

			&::first-letter {
				text-transform: uppercase;
			}

			&:last-child {
				border-bottom: none;
			}
		}
	}
	.selected {
		background-color: #0d6efd;

		.nav-link {
			color: white;
		}
	}
</style>
