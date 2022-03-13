<script context="module">
	// export const ssr = false;
	import { browser } from '$app/env';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import StartModal from '$lib/components/StartModal/StartModal.svelte';
	import { collectionStore } from '$lib/stores/collectionStore-store';
	import { onMount } from 'svelte';
	import '../global.scss';
	export const prerender = true;

	export async function load({ fetch, stuff, session }) {
		if (browser) {
			const collection = await fetch('/api/collection');

			try {
				if (collection.status === 403) {
					return {
						props: {
							collection: null
						}
					};
				}
				const categories = await (await fetch('/api/categories')).json();
				const categories_toObj = categories.categories.reduce((acc, b) => {
					acc[b._id] = b;
					return acc;
				}, {});
				const body = await collection.json();

				collectionStore.update((s) => {
					s.collection = body.collection;

					s.categories = categories_toObj;

					return s;
				});
				return {};
			} catch (error) {}
		}

		return {};
	}
</script>

<script>
	
</script>

<div class="wrapper">
	{#if !$collectionStore.collection}
		<StartModal />
	{:else}
		<Navbar />
		<slot />
	{/if}
</div>

<style lang="scss">
	.wrapper {
		overflow-y: auto;
		height: 100%;
		display: flex;
	}
</style>
