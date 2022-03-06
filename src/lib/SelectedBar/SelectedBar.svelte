<script context="module">
</script>

<script>
	import _ from 'lodash';
	import { onMount, tick } from 'svelte';
	import axios from 'axios';
	import { deleteHook } from '$lib/stores/deleteHook-store';
	import DeleteIcon from '$lib/svgs/DeleteIcon.svelte';
	export let pages;

	onMount(async () => {});
</script>

<div class="selected-container p-2 shadow-sm">
	<span>Selected</span>
	<div class="right-container">
		<div class="icon-container">
			<DeleteIcon />
		</div>
		<span>{$deleteHook.deleted.length} items</span>
	</div>
</div>

<style lang="scss">
	.right-container {
		display: flex;
		align-items: center;
		.icon-container {
			margin-right: 20px;
		}
	}
	.selected-container {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
</style>
