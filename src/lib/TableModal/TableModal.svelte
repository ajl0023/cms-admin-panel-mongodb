<script>
	import BooleanIcon from '$lib/svgs/columnTypes/BooleanIcon.svelte';
	import MediaIcon from '$lib/svgs/columnTypes/MediaIcon.svelte';
	import NumberIcon from '$lib/svgs/columnTypes/NumberIcon.svelte';
	import TextIcon from '$lib/svgs/columnTypes/TextIcon.svelte';

	import { onMount } from 'svelte';
	import { tableModalStore } from './tableModalStore';

	const types = {
		boolean: {
			img: BooleanIcon,
			label: 'Boolean',
			options: [
				{
					type: 'input',
					label: 'Name'
				}
			],
			type: 'boolean'
		},
		media: {
			img: MediaIcon,
			label: 'Media',
			options: [
				{
					type: 'input',
					label: 'Name'
				},
				{
					type: 'check-box',
					label: 'Will this column contain many images?'
				}
			],
			type: 'media'
		},
		number: {
			img: NumberIcon,
			type: 'Integer',
			label: 'Number',
			options: [
				{
					type: 'input',
					label: 'Name'
				}
			]
		},
		text: {
			img: TextIcon,
			type: 'string',
			label: 'Text',
			options: [
				{
					type: 'input',
					label: 'Name'
				}
			]
		}
	};
	const typesArr = Object.keys(types).map((item) => {
		return types[item];
	});
	onMount(async () => {
		const res = await fetch('http://localhost:3000/api/templates');
		const body = await res.json();
	});
</script>

<div class="wrapper">
	<div class="main-container p-3">
		<h5 class="main-header mb-3">Select Columns</h5>
		<div class="type-wrapper">
			{#each typesArr as col}
				<div
					on:click="{() => {
						$tableModalStore.seleted = col;
					}}"
					class="type-container border p-2"
				>
					<span class="type-label">
						{col.label}
					</span>
					<div class="image-container  mt-1">
						<svelte:component this="{col.img}" />
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	.type-wrapper {
		display: grid;
		gap: 10px;
		grid-template-columns: 1fr 1fr;
		.type-container {
			flex: 50%;
			cursor: pointer;
			&:hover {
				background-color: rgba(170, 170, 170, 0.2);
			}
		}
	}

	.main-container {
		margin: auto;
		border-radius: 4px;
		max-width: 500px;
		width: 100%;
		background-color: white;
	}
	.wrapper {
		position: fixed;
		top: 0;
		display: flex;
		align-items: center;
		right: 0;
		z-index: 10;
		left: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.363);
		width: 100%;
	}
</style>
