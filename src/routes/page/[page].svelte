<script context="module">
	import { collectionStore } from '$lib/stores/collectionStore-store';
	import { entryModalStore } from '$lib/stores/entryModalStore';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';
	categoryStore;
	export async function load({ params, fetch, session, stuff }) {
		const page_id = params.page;
		const categories = get(collectionStore).categories;
		const category = categories[page_id];
		categoryStore.update((s) => {
			s.category = category;
			return s;
		});
		const res = await fetch(`/api/category?category=${category.category}`);
		const data = await res.json();
		return {
			props: {
				data,
				category: category.category
			}
		};
	}
</script>

<script>
	import EntryModal from '$lib/components/EntryModal/EntryModal.svelte';
	import { categoryStore } from '$lib/stores/category-store';
	import { deleteHook } from '$lib/stores/deleteHook-store';
	import SelectedBar from '$lib/components/SelectedBar/SelectedBar.svelte';
	import EditBar from '$lib/components/EditBar/EditBar.svelte';

	export let data;
	export let category;
	let component;
	$: category, getComponent();
	const componentMap = {
		'bg-pages': {
			component: 'ImagePage',
			options: []
		},

		'behind-the-scenes': {
			component: 'Bts',
			options: ['Add Phase']
		},
		'carousel-renders': {
			component: 'CarouselRenders',
			options: ['Add photos']
		},
		'page-carousels': {
			component: 'PageCarousels',
			options: ['Add photos']
		},
		mobile: {
			component: 'MobilePages',
			options: ['Add photos']
		}
	};
	async function getComponent() {
		component = null;
		const componentName = componentMap[category].component;

		const import_component = await import(
			`../../lib/components/${componentName}/${componentName}.svelte`
		);

		component = import_component.default;

		return import_component;
	}
	onMount(() => {});
</script>

{#if $entryModalStore.visible}
	<EntryModal />
{/if}

<div class="page-wrapper">
	{#if $deleteHook.deleted.length > 0}
		<SelectedBar />
	{/if}
	{#if $categoryStore.category.insertable}
		<EditBar
			data="{$categoryStore.category}"
			options="{$categoryStore.category.insertable.endpoints}"
		/>
	{/if}
	<div class="content-container">
		<svelte:component this="{component}" items="{data}" />
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
