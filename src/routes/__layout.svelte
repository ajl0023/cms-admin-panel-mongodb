<script context="module">
	import _ from 'lodash';
	import { tableStore } from '$lib/tableStore';
	export async function load({ params, fetch, session, stuff }) {
		const res = await fetch(`${hostName}/api/categories`);

		const body = await res.json();
		const toObj = body.reduce((acc, b) => {
			acc[b._id] = b;
			return acc;
		}, {});
		tableStore.update((s) => {
			s.categories = toObj;

			return s;
		});
		if (res.ok) {
			return {
				props: {
					pages: body
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import Navbar from '$lib/Navbar.svelte';
	import '../global.scss';
	import TableModal from '$lib/TableModal/TableModal.svelte';
	import { tableModalStore } from '$lib/TableModal/tableModalStore';
	import { onMount } from 'svelte';
	import { hostName } from '../host';

	// const test = axios.get('/api/tables');

	export let pages;
</script>

<div class="wrapper">
	{#if $tableModalStore.visible}
		<TableModal />
	{/if}
	<Navbar pages="{pages}" />

	<slot />
</div>

<style lang="scss">
	.wrapper {
		overflow-y: auto;
		height: 100%;
		display: flex;
	}
</style>
