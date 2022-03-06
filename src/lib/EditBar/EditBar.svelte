<script context="module">
</script>

<script>
	import { page } from '$app/stores';
	import _ from 'lodash';
	import { onMount, tick } from 'svelte';
	import axios from 'axios';
	import { tableModalStore } from '$lib/TableModal/tableModalStore';
	import { entryModalStore } from '$lib/EntryModal/entryModalStore';

	export let options;
	export let data;
	export let isInserting;
</script>

<div class="wrapper">
	{#if options}
		{#each options as option}
			<button
				on:click="{() => {
					$entryModalStore.visible = true;
					$entryModalStore.isInserting = isInserting;
					$entryModalStore.content = data;
					$entryModalStore.action = option.action;
				}}"
				class="btn btn-primary"
				>{option}
			</button>
		{/each}
	{/if}
</div>

<style lang="scss">
</style>
