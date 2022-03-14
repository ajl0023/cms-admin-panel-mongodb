<script context="module">
</script>

<script>
	import { collectionStore } from '$lib/stores/collectionStore-store';
	import _ from 'lodash';
	import { v4 as uuidv4 } from 'uuid';
	import EditBar from '../EditBar/EditBar.svelte';
	import ImagesContainer from '../ImagesContainer/ImagesContainer.svelte';

	export let items;
</script>

<div class="wrapper">
	{#each items as page}
		{#if page.page !== 'behind-the-scenes'}
			<ImagesContainer
				set_name="{page.page}"
				set_id="{uuidv4()}"
				options="{$collectionStore.categories[page.category].endpoints_mobile}"
				col="images"
				images="{page.images}"
				page="{page}"
			/>
		{:else}
			<div class="bts-mobile-container">
				<span>Behind The Scenes</span>
				<EditBar
					options="{$collectionStore.categories[page.category].insertable.endpoints_mobile}"
					belongs_to="collection"
					data="{{
						...page
					}}"
				/>
				{#each page.phases as phase}
					<div class="phase-container">
						<div class="images-container">
							<ImagesContainer
								options="{$collectionStore.categories[page.category].endpoints_mobile}"
								set_name="Phase {phase.phase}"
								images="{phase.images}"
								page="{{
									...page,
									...phase
								}}"
								set_id="{uuidv4()}"
							/>
						</div>
					</div>
				{/each}
			</div>
		{/if}
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
	.category-name {
		font-weight: 600;
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
