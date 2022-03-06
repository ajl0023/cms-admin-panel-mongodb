<script>
	import _ from 'lodash';
	import { onMount, tick } from 'svelte';
	import axios from 'axios';
	import { tableStore } from '$lib/tableStore';
	export let pages = [];
	import EditBar from '$lib/EditBar/EditBar.svelte';
	import CategoryImage from '$lib/CategoryImage/CategoryImage.svelte';
	import { page } from '$app/stores';
	import { hostName } from '../../host';
	let selected_phase;
</script>

<div class="wrapper">
	<EditBar isInserting="{true}" data="{$tableStore.currentTable}" options="{['Add Phase']}" />
	{#if pages.length > 0}
		{#each pages as phase}
			<div class="phase-container">
				<div class="top-bar">
					<span>
						Phase {phase.phase}
					</span>
					<div class="edit-bar">
						<EditBar data="{phase}" options="{['Add Photos']}" />
						<button
							on:click="{() => {
								selected_phase = phase._id;
							}}"
							class="btn btn-danger">Delete Phase</button
						>
						{#if selected_phase === phase._id}
							<span>
								Confirm Deletion
								<span
									on:click="{async () => {
										await axios.delete(
											`${hostName}/api/${$tableStore.currentTable.category}/phase`,
											{
												data: {
													_id: phase._id
												}
											}
										);
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
						<CategoryImage col="images" img="{img}" page="{phase}" />
					{/each}
				</div>
			</div>
		{/each}
	{/if}
</div>

<style lang="scss">
	.confirm-button {
		cursor: pointer;
	}
	.confirm-button.confirm {
		color: red;
	}
	.confirm.cancel {
		color: black;
	}
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
