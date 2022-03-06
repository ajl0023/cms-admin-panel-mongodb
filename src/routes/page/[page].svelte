<script context="module">
	import Bts from '$lib/Bts/Bts.svelte';
	import CarouselRenders from '$lib/CarouselRenders/CarouselRenders.svelte';
	import EditBar from '$lib/EditBar/EditBar.svelte';
	import EntryModal from '$lib/EntryModal/EntryModal.svelte';
	import { entryModalStore } from '$lib/EntryModal/entryModalStore';
	import ImagePage from '$lib/ImagePage/ImagePage.svelte';
	import MobilePages from '$lib/MobilePages/MobilePages.svelte';
	import PageCarousels from '$lib/PageCarousels/PageCarousels.svelte';
	import { deleteHook } from '$lib/stores/deleteHook-store';
	import { tableStore } from '$lib/tableStore';
	import { onMount } from 'svelte';
	import { hostName } from '../../host';

	export async function load({ params, fetch, session, stuff }) {
		deleteHook.init();
		const page_id = params.page;

		let categoryReq;
		tableStore.update((s) => {
			s.currentTable = s.categories[page_id];
			categoryReq = s.categories[page_id].category;

			return s;
		});

		const res = await fetch(`${hostName}/api/${categoryReq}`);

		const body = await res.json();
		console.log(body, 55);
		if (res.ok) {
			return {
				status: 200,
				props: {
					deleted: [],
					currentPage: categoryReq,
					page: body
				}
			};
		}
		return {
			status: 404,
			error: new Error(`Could not load`)
		};
	}
</script>

<script>
	import SelectedBar from '$lib/SelectedBar/SelectedBar.svelte';

	export let page;
	export let columns;
	export let data;
	export let cursor;
	export let currentPage;
	export let deleted;

	const componentMap = {
		'bg-pages': {
			component: ImagePage,
			options: []
		},

		'behind-the-scenes': {
			component: Bts,
			options: ['Add Phase']
		},
		'carousel-renders': {
			component: CarouselRenders,
			options: ['Add photos']
		},
		'page-carousels': {
			component: PageCarousels,
			options: ['Add photos']
		},
		mobile: {
			component: MobilePages,
			options: ['Add photos']
		}
	};

	onMount(() => {});
</script>

{#if $entryModalStore.visible}
	<EntryModal />
{/if}

<div class="page-wrapper">
	{#if $deleteHook.deleted.length > 0}
		<SelectedBar />
	{/if}

	<div class="content-container">
		<svelte:component this="{componentMap[currentPage].component}" pages="{page}" />
	</div>
</div>

<style lang="scss">
	.content-container {
		margin-top: 30px;
		overflow-y: auto;
	}
	.image-container {
		width: 100px;
		height: 100px;

		img {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.scroll-container {
		overflow-y: auto;
		height: 100%;
	}
	.btn-outline-primary.save {
		text-transform: uppercase;
		margin-left: 20px;
	}
	.grid-row {
		display: grid;
		width: 100%;
		gap: 20px;
		padding: 10px;
		grid-template-columns: 20px 30px repeat(auto-fill, minmax(100px, 150px));
		grid-auto-flow: column;
		grid-template-rows: 20px;
		border-bottom: 1px solid black;
	}
	.grid-table-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.entry-edit-container {
		width: 100%;
		display: flex;
		padding: 20px;
		margin-bottom: 20px;
	}
	.page-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.table-container {
		width: 100%;
		height: 100%;
		overflow-y: hidden;
	}
	.drag-container {
		position: relative;
	}
	.ghost {
		margin-bottom: 10px;
		pointer-events: none;
		z-index: 2;
		position: absolute;
		top: 0px;
		width: 100%;
		left: 10px;
	}
</style>
