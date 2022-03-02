<script context="module">
</script>

<script>
	import _ from 'lodash';
	import { onMount, tick } from 'svelte';
	import axios from 'axios';
	import EditBar from '$lib/EditBar/EditBar.svelte';
	export let pages;

	onMount(async () => {});
</script>

<div class="wrapper">
	{#each pages as page}
		<div class="flex-container">
			<div class="edit-bar">
				<EditBar data="{page}" options="{['Add Photos']}" />
			</div>
			<span class="category-name text-decoration-underline"
				>{_.startCase(page.page)} ({page.type})</span
			>
		</div>

		<div class="images-container">
			{#if page.page !== 'behind-the-scenes'}
				{#each page.images as img}
					<div class="image-container">
						<img loading="lazy" src="{img.url}" alt="" />
					</div>
				{/each}
			{:else}
				{#each page.phases as phase}
					<div class="phase-container">
						<div class="top-bar">
							<span>
								Phase {phase.phase}
							</span>
							<div class="edit-bar">
								<EditBar
									data="{{
										...page,
										...phase
									}}"
									options="{['Add Photos']}"
								/>
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
	{/each}
</div>

<style lang="scss">
	.flex-container {
		.category-name {
			font-weight: 600;
		}
		align-items: flex-end;

		.edit-bar {
			margin-right: 30px;
		}
	}
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
