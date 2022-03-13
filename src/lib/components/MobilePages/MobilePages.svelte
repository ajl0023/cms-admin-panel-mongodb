<script context="module">
</script>

<script>
	import { collectionStore } from '$lib/stores/collectionStore-store';
	import _ from 'lodash';
	import { v4 as uuidv4 } from 'uuid';
	import EditBar from '../EditBar/EditBar.svelte';
	import ImagesContainer from '../ImagesContainer/ImagesContainer.svelte';

	export let items;

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
				<ImagesContainer set_id="{uuidv4()}" col="images" images="{page.images}" page="{page}" />
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
								<ImagesContainer images="{phase.images}" page="{phase}" set_id="{uuidv4()}" />
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
	.category-name {
		font-weight: 600;
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
