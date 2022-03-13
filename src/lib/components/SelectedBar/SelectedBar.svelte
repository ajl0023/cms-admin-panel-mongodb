<script context="module">
</script>

<script>
	import _ from 'lodash';
	import { onMount, tick } from 'svelte';
	import axios from 'axios';
	import { deleteHook } from '$lib/stores/deleteHook-store';
	import DeleteIcon from '$lib/svgs/DeleteIcon.svelte';
	import { categoryStore } from '$lib/stores/category-store';
	export let pages;

	onMount(async () => {});
	let toggled = false;
</script>

<div class="selected-container p-2 shadow-sm">
	<span>Selected</span>
	<div class="right-container">
		{#if toggled}
			<div class="confirm-container">
				<span>
					Confirm Deletion
					<span
						on:click="{async () => {
							$categoryStore.category.category === 'mobile'
								? await deleteHook.handleDeleteMobile()
								: await deleteHook.handleDelete();
							toggled = false;
							$deleteHook.deleted = [];
						}}"
						class="confirm-button confirm">Yes</span
					>/
					<span
						on:click="{() => {
							toggled = false;
						}}"
						class="confirm-button cancel">No</span
					>
				</span>
			</div>
		{/if}
		<div class="icon-container">
			<DeleteIcon bind:toggled />
		</div>

		<span>{$deleteHook.deleted.length} items</span>
	</div>
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
	.confirm-container {
		margin-right: 10px;
	}
	.right-container {
		display: flex;
		align-items: center;
		.icon-container {
			margin-right: 20px;
		}
	}
	.selected-container {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
</style>
