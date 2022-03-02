<script context="module">
</script>

<script>
	import { page } from '$app/stores';
	import _ from 'lodash';
	import { onMount, tick } from 'svelte';
	import axios from 'axios';
	import { writable } from 'svelte/store';
	import { entryModalStore } from './entryModalStore';
	import { tableStore } from '$lib/tableStore';
	import { tableModalStore } from '$lib/TableModal/tableModalStore';
	import { hostName } from '../../host';
	let fields = [];
	const inputs = {};
	let form;

	onMount(async () => {
		const currentTable = $entryModalStore.content;
		console.log($tableStore.currentTable.category);
		const editableFields =
			$tableStore.currentTable.category === 'mobile'
				? $tableStore.categories[currentTable.category].editableFields_mobile
				: $tableStore.categories[currentTable.category].editableFields;

		fields = editableFields;
		console.log($tableStore, 'fields');
		await tick();
	});

	const handleSubmit = async () => {
		const data = new FormData(form);
		const item_id = $entryModalStore.content._id;
		console.log($entryModalStore.content._id);
		data.append('_id', item_id);

		if ($entryModalStore.content.page === 'behind-the-scenes') {
			const phase = $entryModalStore.content.phase;

			data.append('phase', phase);

			await axios.put(
				`${hostName}/api/${$tableStore.currentTable.category}/behind-the-scenes`,
				data
			);
			return;
		}

		await axios.put(`${hostName}/api/${$tableStore.currentTable.category}`, data);
	};
</script>

<div
	on:click="{() => {
		$entryModalStore.visible = false;
	}}"
	class="wrapper"
>
	<div
		on:click="{(e) => {
			e.stopPropagation();
		}}"
		class="form-container"
	>
		<form bind:this="{form}" class="row g-3" id="entry-form" action="">
			{#each fields as field}
				{#if field.type === 'media' && field.multi}
					<div class="form-field">
						<label for="{field.name}" class="form-label">{field.client_label}</label>
						<input
							bind:files="{$entryModalStore.files[field.lowerCase]}"
							class="form-control"
							type="file"
							name="{field.name}"
							id="formFileMultiple"
							multiple
						/>
					</div>
				{:else if field.type === 'media' && !field.multi}
					<div class="form-field">
						<label for="{field.name}" class="form-label">{field.client_label}</label>
						<input
							name="{field.name}"
							bind:files="{$entryModalStore.files[field.lowerCase]}"
							class="form-control"
							type="file"
							id="formFile"
						/>
					</div>
				{:else}
					<div class="form-field">
						<label for="{field.name}" class="form-label">{field.client_label}</label>
						<input
							bind:value="{$entryModalStore.inputs[field.lowerCase]}"
							class="form-control"
							placeholder=""
						/>
					</div>
				{/if}
			{/each}
			<div class="col-auto">
				<button on:click="{handleSubmit}" type="button" class="btn btn-primary mb-3">Submit</button>
			</div>
		</form>
	</div>
</div>

<style lang="scss">
	.form-field {
		&:last-child {
			margin-bottom: auto;
		}
	}

	.form-container {
		z-index: 5;
		position: relative;
		background-color: white;
		max-width: 800px;
		width: 100%;
		padding: 2rem;
		margin: 1.5rem auto 0 auto;
	}
	.wrapper {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 10;
		left: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.363);
		width: 100%;
	}
</style>
