<script context="module">
</script>

<script>
	import _ from 'lodash';
	import { onMount, tick } from 'svelte';
	import axios from 'axios';
	import { collectionStore } from '$lib/stores/collectionStore-store';
	import { goto } from '$app/navigation';
	export let pages;
	let selected;
	onMount(async () => {});
	const collections = [
		{
			name: 'maliview',
			label: 'Maliview'
		},
		{
			name: 'aviator',
			label: 'Aviator'
		}
	];
</script>

<div class="wrapper">
	<div class="modal-container">
		{#each collections as collection}
			<div class="inputs-container">
				<input
					bind:group="{selected}"
					value="{collection.name}"
					type="radio"
					name="collection-input"
					id="{collection.name}"
				/>
				<label for="{collection}"><span>{collection.label}</span> </label>
			</div>
		{/each}
		<div class="button-container">
			<button
				class="btn btn-primary"
				on:click="{async () => {
					const res = await axios('/api/collection', {
						method: 'POST',
						data: {
							collection: selected
						}
					});

					await goto('/');
					window.location.reload();
				}}">Enter</button
			>
		</div>
	</div>
</div>

<style lang="scss">
	.button-container {
		margin-top: 1rem;
	}
	.wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		background-color: rgba(0, 0, 0, 0.4);
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		.modal-container {
			padding: 30px;
			max-width: 700px;
			width: 100%;
			background-color: white;
			height: auto;
		}
		.inputs-container {
			display: flex;
			align-items: center;
			input[type='radio'] {
				margin-right: 5px;
			}
		}
	}
</style>
