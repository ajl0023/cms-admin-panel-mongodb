<script context="module">
</script>

<script>
	import { categoryStore } from '$lib/stores/category-store';
	import { collectionStore } from '$lib/stores/collectionStore-store';

	import { entryModalStore } from '$lib/stores/entryModalStore';
	import axios from 'axios';
	import { hostName } from 'src/host';
	import { tick } from 'svelte';

	export let options;
	export let data;
	export let set_id;
	export let dragStore;
	export let column;
	export let is_editing;
	export let belongs_to;
	export let images;
	let selected;

	let current_dragset = null;
	let is_requesting = false;
	// $: {
	// 	if (set_id === $dragStore.current_set && !is_requesting) {
	// 		if (!current_dragset && $dragStore.current_set) {
	// 			current_dragset = $dragStore.current_set;
	// 		}
	// 	}
	// }
</script>

<div class="wrapper">
	{#if options}
		{#each options as option}
			{#if option.method === 'DELETE' && option.type !== 'media'}
				<button
					class="btn btn-danger"
					on:click="{() => {
						selected = data._id;
					}}"
					>{option.name}
				</button>
				{#if selected === data._id}
					<span>
						Confirm Deletion
						<span
							on:click="{async () => {
								const endpoints =
									$categoryStore.category.category === 'mobile'
										? $collectionStore.categories[data.category].endpoints_mobile
										: $categoryStore.category.endpoints;

								const del_route = endpoints.find((item) => {
									return item.method === 'DELETE' && item.type !== 'media';
								});
								const request_body = {
									_id: data._id
								};
								request_body['phase'] = data.phase;
								await axios(hostName + del_route.route, {
									method: del_route.method,
									data: request_body
								});
								selected = null;
							}}"
							class="confirm-button confirm">Yes</span
						>/
						<span
							on:click="{() => {
								selected = null;
							}}"
							class="confirm-button cancel">No</span
						>
					</span>
				{/if}
			{:else if (option.method !== 'DELETE') & (option.name !== 'Save')}
				<button
					on:click="{async () => {
						if (option.name !== 'Save') {
							$entryModalStore.visible = true;

							$entryModalStore.selected = data;
							$entryModalStore.endpoint = option;
						}
					}}"
					class="btn btn-primary"
				>
					{option.name}
				</button>
			{:else if belongs_to === 'document' && option.name === 'Save' && $dragStore.is_editing}
				<button
					class="btn btn-outline-primary"
					on:click="{async () => {
						const request_data = {
							set_id: data._id,
							column: column,
							images: images.map((item, i) => {
								return {
									...item,
									order: i
								};
							})
						};

						if (data.page === 'behind-the-scenes') {
							request_data['phase'] = data.phase;
						}
						await axios(hostName + option.route, {
							method: option.method,
							data: request_data
						});
						$dragStore.is_editing = false;
					}}"
				>
					{option.name}
				</button>
			{/if}
		{/each}
	{/if}
</div>

<style lang="scss">
	.save-button {
		color: #0d6efd;
		background-color: transparent;
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
</style>
