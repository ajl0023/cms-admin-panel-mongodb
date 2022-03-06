<script context="module">
</script>

<script>
	import _ from 'lodash';
	import { onMount, tick } from 'svelte';
	import axios from 'axios';
	import EditBar from '$lib/EditBar/EditBar.svelte';
	import { deleteHook } from '$lib/stores/deleteHook-store';
	import CategoryImage from '$lib/CategoryImage/CategoryImage.svelte';
	export let pages;
</script>

<div class="wrapper">
	<div class="wrapper">
		{#if pages.length > 0}
			{#each pages as page}
				<div class="phase-container">
					<div class="top-bar">
						<span>
							{page.page}
						</span>
						<div class="edit-bar">
							<EditBar data="{page}" options="{['Add Photos']}" />
						</div>
					</div>
					<div class="images-container">
						{#each page.images as img}
							<CategoryImage img="{img}" page="{page}" col="images" />
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
</div>

<style lang="scss">
</style>
