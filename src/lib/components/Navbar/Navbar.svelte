<script>
	import _ from 'lodash';

	import { tableModalStore } from '$lib/stores/tableModalStore';
	import { collectionStore } from '$lib/stores/collectionStore-store';
	const categories = Object.keys($collectionStore.categories).map((cat) => {
		return $collectionStore.categories[cat];
	});
</script>

<div class="nav-container border-1 border-end">
	<span>Pages</span>
	<nav class="nav flex-column">
		{#each categories as category}
			{#if category.visible}
				<a href="/page/{category._id}" class="nav-link border-0 border-bottom">
					{category.title}
				</a>
			{/if}
		{/each}
		<button on:click="{tableModalStore.handleModal}" class="btn btn-primary"> Add New Table</button>
	</nav>
</div>

<style lang="scss">
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
</style>
