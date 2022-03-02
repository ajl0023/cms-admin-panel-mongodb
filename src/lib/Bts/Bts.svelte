<script>
	import _ from 'lodash';
	import { onMount, tick } from 'svelte';
	import axios from 'axios';
	import { tableStore } from '$lib/tableStore';
	export let pages = [];
	import EditBar from '$lib/EditBar/EditBar.svelte';

	onMount(async () => {
		console.log(pages, 344334);
	});
</script>

<div class="wrapper">
	{#if pages.length > 0}
		{#each pages as phase}
			<div class="phase-container">
				<div class="top-bar">
					<span>
						Phase {phase.phase}
					</span>
					<div class="edit-bar">
						<EditBar data="{phase}" options="{['Add Photos']}" />
					</div>
				</div>
				<div class="images-container">
					{#each phase.images as img}
						<div class="image-container">
							<img src="{img.url}" alt="" />
						</div>
					{/each}
				</div>
			</div>
		{/each}
	{/if}
</div>

<style lang="scss">
	.wrapper {
		overflow-y: auto;
	}
	.phase-container {
		margin-top: 30px;
	}
	.top-bar {
		display: flex;
		align-items: flex-end;
		margin-bottom: 10px;
		.edit-bar {
			margin-left: 30px;
		}
	}
	.images-container {
		display: flex;
		flex-wrap: wrap;

		.image-container {
			width: 100px;
			padding: 2px;
			height: 100px;
			img {
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
