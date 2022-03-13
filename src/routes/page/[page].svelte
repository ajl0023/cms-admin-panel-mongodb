<script context="module">
	import { collectionStore } from '$lib/stores/collectionStore-store';
	import { entryModalStore } from '$lib/stores/entryModalStore';
	import { onMount, tick } from 'svelte';
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
		await tick();
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
	<p class="custom-tooltip">*{$categoryStore.category.description}</p>
	<p class="custom-tooltip delete">*Click on items to select for deletion.</p>
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
	.custom-tooltip {
		font-weight: 700;

		color: #0b5ed7;
	}
	.custom-tooltip.delete {
		color: red;
	}
	.content-container {
		overflow-y: auto;
	}

	.page-wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
</style>
