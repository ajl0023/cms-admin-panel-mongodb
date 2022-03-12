<script context="module">
</script>

<script>
	import { categoryStore } from '$lib/stores/category-store';

	import { entryModalStore } from '$lib/stores/entryModalStore';
	import axios from 'axios';
	import { tick } from 'svelte';

	export let options;
	export let data;
	let selected;
	console.log(options);
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
								await tick();
								const del_route = $categoryStore.category.endpoints.find((item) => {
									return item.method === 'DELETE';
								});
								await axios('/api2' + del_route.route, {
									method: del_route.method,
									data: {
										_id: data._id
									}
								});
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
			{:else if option.method !== 'DELETE'}
				<button
					on:click="{() => {
						$entryModalStore.visible = true;

						$entryModalStore.selected = data;
						$entryModalStore.endpoint = option;
					}}"
					class="btn btn-primary"
					>{option.name}
				</button>
			{/if}
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
</style>
