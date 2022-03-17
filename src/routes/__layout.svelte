<script context="module">
	// export const ssr = false;
	import { browser } from '$app/env';
	import { page, session } from '$app/stores';
	import AuthModal from '$lib/components/AuthModal/AuthModal.svelte';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import StartModal from '$lib/components/StartModal/StartModal.svelte';
	import { collectionStore } from '$lib/stores/collectionStore-store';
	import axios from 'axios';
	import { hostName } from 'src/host';
	import { onMount } from 'svelte';
	import '../global.scss';

	export async function load({ fetch, stuff, session }) {
		if (browser) {
			try {
				const check_status = await axios('/api2' + '/api/logged-in', {
					withCredentials: true,
					method: 'GET'
				});

				if (check_status.status === 200) {
					session.user = {
						status: 'logged_in'
					};
				}
			} catch (error) {
				session.user = {
					status: 'logged_out'
				};
			}
		}
		if (browser && session.user.status === 'logged_in') {
			try {
				const collection = await axios('/api2/api/collection', {
					withCredentials: true
				});
				try {
					const category_fetch = await axios('/api2/api/categories', {
						withCredentials: true
					});

					const categories = category_fetch.data;

					// const categories = await (

					// ).json();

					const categories_toObj = categories.reduce((acc, b) => {
						acc[b._id] = b;
						return acc;
					}, {});

					collectionStore.update((s) => {
						s.collection = collection.data;

						s.categories = categories_toObj;

						return s;
					});
					return {};
				} catch (error) {
					if (error.response && error.response.status === 403) {
						return {
							props: {
								collection: null
							}
						};
					}
				}
			} catch (error) {
				if (error.response.status === 403) {
					collectionStore.update((s) => {
						s.collection = null;

						return s;
					});
				}
				return error;
			}
		}

		return {};
	}
</script>

{#if $session.user.status !== 'logged_in'}
	<AuthModal />
{:else}
	<div class="wrapper">
		{#if !$collectionStore.collection}
			<StartModal />
		{:else}
			<Navbar />
			<slot />
		{/if}
	</div>
{/if}

<style lang="scss">
	.wrapper {
		overflow-y: auto;
		height: 100%;
		display: flex;
	}
</style>
