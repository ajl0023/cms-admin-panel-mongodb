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
</script>

<div class="wrapper">
	{#if options}
		{#each options as option}
			<button
				on:click="{() => {
					$entryModalStore.visible = true;
					$entryModalStore.content = data;
				}}"
				class="btn btn-primary"
				>{option}
			</button>
		{/each}
	{/if}
</div>

<style lang="scss">
</style>
