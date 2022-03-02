<script context="module">
	import { tableStore } from '$lib/tableStore';

	export async function load({ params, fetch, session, stuff }) {
		const page_id = params.page;

		let categoryReq;
		tableStore.update((s) => {
			s.currentTable = s.categories[page_id];
			categoryReq = s.categories[page_id].category;
			return s;
		});

		const res = await fetch(`${hostName}/api/${categoryReq}`);

		const body = await res.json();

		if (res.ok) {
			return {
				status: 200,
				props: {
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
	import EntryModal from '$lib/EntryModal/EntryModal.svelte';
	import { entryModalStore } from '$lib/EntryModal/entryModalStore';
	import TableRow from '$lib/TableRow.svelte';
	import { tableStoreDrag } from '$lib/tableStoreDrag';
	import _ from 'lodash';
	import axios from 'axios';
	import { onMount, tick } from 'svelte';
	import EditBar from '$lib/EditBar/EditBar.svelte';
	import ImagePage from '$lib/ImagePage/ImagePage.svelte';
	import Bts from '$lib/Bts/Bts.svelte';
	import CarouselRenders from '$lib/CarouselRenders/CarouselRenders.svelte';
	import PageCarousels from '$lib/PageCarousels/PageCarousels.svelte';
	import MobilePages from '$lib/MobilePages/MobilePages.svelte';
	import { hostName } from '../../host';
	export let page;
	export let columns;
	export let data;
	export let cursor;
	export let currentPage;
	let scrollFetchEle;
	let formatted;
	let submitting = false;
	let container;
	let scrollFetch = false;

	function handleObserver() {
		let options = {
			root: container,
			rootMargin: '0px',
			threshold: 0.25
		};

		async function handleIntersect(entries, observer) {
			entries.forEach(async (entry) => {
				if (entry.isIntersecting && $tableStore.cursor.hasNext) {
					scrollFetch = true;
					const category = $tableStore.currentTable.orig;

					const data = await tableStore.fetchData($tableStore.cursor.next, false);
					rows = [...rows, ...data.rows];
				}
			});
		}

		let observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(scrollFetchEle);
	}
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
	// onMount(() => {
	// 	const filtered = columns.filter((item) => {
	// 		return !item.is_generated;
	// 	});

	// 	handleObserver();
	// });

	$: {
		if (
			$tableStoreDrag.draggingItemIndex != null &&
			$tableStoreDrag.hoveredItemIndex != null &&
			$tableStoreDrag.draggingItemIndex != $tableStoreDrag.hoveredItemIndex
		) {
			// swap items
			[rows[$tableStoreDrag.draggingItemIndex], rows[$tableStoreDrag.hoveredItemIndex]] = [
				rows[$tableStoreDrag.hoveredItemIndex],
				rows[$tableStoreDrag.draggingItemIndex]
			];

			// balance
			$tableStoreDrag.draggingItemIndex = $tableStoreDrag.hoveredItemIndex;
		}
	}
	// $: {
	// 	console.log(rows);
	// }

	const handleSave = async () => {
		// submitting = true;
		// await tick();
		// const order_updated = rows
		// 	.filter((item) => {
		// 		return item.data.new_index;
		// 	})
		// 	.map((item) => {
		// 		return item.data;
		// 	});
		// const category = $tableStore.currentTable.orig;
		// const res = await axios.put(`http://localhost:3000/api/category?category=${category}`, {
		// 	reordered: order_updated
		// });
	};
</script>

{#if $entryModalStore.visible}
	<EntryModal />
{/if}
<div class="page-wrapper">
	<EditBar options="{componentMap[currentPage].options}" />
	<svelte:component this="{componentMap[currentPage].component}" pages="{page}" />
</div>

<style lang="scss">
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
