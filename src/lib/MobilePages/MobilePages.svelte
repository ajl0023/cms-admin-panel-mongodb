<script context="module">
</script>

<script>
	import _ from 'lodash';
	import { onMount, tick } from 'svelte';
	import axios from 'axios';
	import EditBar from '$lib/EditBar/EditBar.svelte';
	import { deleteHook } from '$lib/stores/deleteHook-store';
	import CategoryImage from '$lib/CategoryImage/CategoryImage.svelte';
	import { tableStore } from '$lib/tableStore';
	import { hostName } from '../../host';
	import { page } from '$app/stores';
	export let pages;

	onMount(async () => {
		console.log(pages);
	});
	let selected_phase;
</script>

<div class="wrapper">
	{#each pages as page}
		<div class="flex-container">
			<div class="edit-bar">
				{#if page.page !== 'behind-the-scenes'}
					<EditBar data="{page}" options="{['Add Photos']}" />
				{/if}
			</div>
			<span class="category-name text-decoration-underline"
				>{_.startCase(page.page)} ({page.type})</span
			>
		</div>

		<div class="images-container">
			{#if page.page !== 'behind-the-scenes'}
				{#each page.images as img}
					<CategoryImage col="images" img="{img}" page="{page}" />
				{/each}
			{:else}
				<div class="bts-mobile-container">
					<EditBar isInserting="{true}" data="{page}" options="{['Add Phase']}" />

					{#each page.phases as phase}
						<div class="phase-container">
							<div class="top-bar">
								<span>
									Phase {phase.phase}
								</span>
								<div class="edit-bar">
									<EditBar
										data="{{
											...page,
											...phase
										}}"
										options="{['Add Photos']}"
									/><button
										on:click="{() => {
											selected_phase = phase.phase;
										}}"
										class="btn btn-danger">Delete Phase</button
									>{#if selected_phase === phase.phase}
										<span>
											Confirm Deletion
											<span
												on:click="{async () => {
													await axios.delete(`${hostName}/api/mobile/behind-the-scenes/phase`, {
														data: {
															page: page._id,
															phase: phase.phase
														}
													});
												}}"
												class="confirm-button confirm">Yes</span
											>/
											<span class="confirm-button cancel">No</span>
										</span>
									{/if}
								</div>
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
