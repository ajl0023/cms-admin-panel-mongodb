<script context="module">
</script>

<script>
	import _ from 'lodash';
	import { onMount, tick } from 'svelte';
	import axios from 'axios';
	import EditBar from '$lib/EditBar/EditBar.svelte';
	export let pages;

	const fields = ['left', 'right', 'thumbs'];
	onMount(async () => {});
</script>

<div class="wrapper">
	{#each pages as page}
		<div class="edit-bar">
			<EditBar data="{page}" options="{['Add Photos']}" />
		</div>
		{#each fields as col}
			<span>{col}</span>
			<div class="images-container">
				{#each page[col] as img}
					<div class="image-container {col}">
						<img src="{img.url}" alt="" />
					</div>
				{/each}
			</div>
		{/each}
	{/each}
</div>

<style lang="scss">
	.wrapper {
		margin-top: 1rem;
		overflow: auto;
	}
	.image-container {
		height: 100px;
		width: 100px;
		padding: 2px;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.image-container.thumbs {
		width: 50px;
		padding: 0px;
		height: 50px;
		overflow: hidden;
		border-radius: 50%;
	}
	.images-container {
		display: flex;
		flex-wrap: wrap;
	}
</style>
