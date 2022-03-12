<script context="module">
</script>

<script>
	import { page } from '$app/stores';
	import { categoryStore } from '$lib/stores/category-store';
	import { collectionStore } from '$lib/stores/collectionStore-store';

	import axios from 'axios';
	import _ from 'lodash';
	import { onMount } from 'svelte';
	import CategoryImage from '../CategoryImage/CategoryImage.svelte';
	import EditBar from '../EditBar/EditBar.svelte';

	export let items;

	onMount(async () => {
		console.log(items);
	});
	let selected_phase;
</script>

<div class="wrapper">
	{#each items as page}
		<div class="flex-container">
			<div class="edit-bar"></div>
			<span class="category-name text-decoration-underline">{_.startCase(page.page)}</span>
		</div>
		<div class="document-edit-container">
			{#if $collectionStore.categories[page.category].insertable}
				<EditBar
					data="{page}"
					options="{$collectionStore.categories[page.category].insertable.endpoints_mobile}"
				/>
			{/if}
		</div>
		{#if !$collectionStore.categories[page.category].insertable}
			<EditBar
				data="{page}"
				options="{$collectionStore.categories[page.category].endpoints_mobile}"
			/>
		{/if}
		<div class="images-container">
			{#if page.page !== 'behind-the-scenes'}
				{#each page.images as img}
					<CategoryImage col="images" img="{img}" page="{page}" />
				{/each}
			{:else}
				<div class="bts-mobile-container">
					{#each page.phases as phase}
						<div class="phase-container">
							<div class="top-bar">
								<span>
									Phase {phase.phase}
								</span>
								<EditBar
									data="{{
										...page,
										...phase
									}}"
									options="{$collectionStore.categories[page.category].endpoints_mobile}"
								/>
							</div>
							<div class="images-container">
								{#each phase.images as img}
									<CategoryImage img="{img}" page="{page}" />
								{/each}
							</div>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	.edit-bar {
		display: flex;
		align-items: flex-end;
	}
	.confirm-button {
		cursor: pointer;
	}
	.confirm-button.confirm {
		color: red;
	}
	.confirm.cancel {
		color: black;
	}
	.flex-container {
		display: flex;
		.category-name {
			font-weight: 600;
		}
		align-items: flex-end;

		.edit-bar {
			margin-right: 30px;
		}
	}
	.wrapper {
		margin-top: 1rem;
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
