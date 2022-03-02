<script>
	import { tableModalStore } from './TableModal/tableModalStore';
	import _ from 'lodash';
	import { tableStore } from './tableStore';

	export let pages;
</script>

<div class="nav-container border-1 border-end">
	<span>Pages</span>
	<nav class="nav flex-column">
		{#each pages as page}
			{#if page.visible}
				<a href="/page/{page._id}" class="nav-link border-0 border-bottom">
					{page.title}
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
