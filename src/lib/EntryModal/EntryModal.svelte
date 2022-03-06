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
		let editableFields;
		console.log($entryModalStore.isInserting);
		if (!$entryModalStore.isInserting) {
			console.log($tableStore.categories[currentTable.category].editableFields_mobile);
			editableFields =
				$tableStore.currentTable.category === 'mobile'
					? $tableStore.categories[currentTable.category].editableFields_mobile
					: $tableStore.categories[currentTable.category].editableFields;
		} else {
			console.log($tableStore.currentTable);
			editableFields =
				$tableStore.currentTable.category === 'mobile'
					? $tableStore.categories[currentTable.category].insertable.fields
					: $tableStore.currentTable.insertable.fields;
		}

		fields = editableFields;
		console.log(fields);
		await tick();
	});

	const handleSubmit = async () => {
		if ($entryModalStore.action && $entryModalStore.action.name === 'replace_media') {
			const objData = {
				category: $tableStore.currentTable.category,
				item: $entryModalStore.selected,
				page: $entryModalStore.content._id,
				page_category: $entryModalStore.content.category
			};

			const data = new FormData(form);
			data.append('data', JSON.stringify(objData));

			await axios.put(
				`${hostName}/api/categories/media${
					$tableStore.currentTable.category === 'mobile' ? `?mobile=${true}` : ''
				}`,
				data
			);

			return;
		}

		const data = new FormData(form);
		const item_id = $entryModalStore.content._id;

		data.append('_id', item_id);
		data.append(
			'category',
			$tableStore.currentTable.category === 'mobile'
				? $entryModalStore.content.category
				: $tableStore.currentTable._id
		);
		console.log($tableStore.currentTable);
		if (
			$entryModalStore.content.category === 'behind-the-scenes' ||
			$entryModalStore.content.category === '62198a93ee6bf0f2610a1c31'
		) {
			if ($entryModalStore.isInserting) {
				const value = Object.fromEntries(data.entries());
				console.log(`${hostName}/api/${$tableStore.currentTable.category}`);
				if ($tableStore.currentTable.category !== 'mobile') {
					await axios.post(`${hostName}/api/${$tableStore.currentTable.category}`, data);
				} else {
					console.log('hello');
					await axios.post(`${hostName}/api/mobile/behind-the-scenes`, data);
				}
				return;
			}
			const phase = $entryModalStore.content.phase;

			data.append('phase', phase);
			if ($tableStore.currentTable.category === 'mobile') {
				await axios.put(
					`${hostName}/api/${$tableStore.currentTable.category}/behind-the-scenes`,
					data
				);
			} else {
				await axios.put(`${hostName}/api/behind-the-scenes`, data);
			}
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
	{#if $entryModalStore.action && $entryModalStore.action.name === 'replace_media'}
		<div
			on:click="{(e) => {
				e.stopPropagation();
			}}"
			class="form-container"
		>
			<form bind:this="{form}" class="row g-3" id="entry-form" action="">
				<div class="form-field">
					<label for="image" class="form-label">image</label>
					<input for="image" name="image" class="form-control" type="file" id="formFile" />
				</div>

				<div class="col-auto">
					<button on:click="{handleSubmit}" type="button" class="btn btn-primary mb-3"
						>Submit</button
					>
				</div>
			</form>
		</div>
	{:else}
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
								class="form-control"
								type="file"
								name="{field.name}"
								id="{field.name}"
								multiple
							/>
						</div>
					{:else if field.type === 'media' && !field.multi}
						<div class="form-field">
							<label for="{field.name}" class="form-label">{field.client_label}</label>
							<input name="{field.name}" class="form-control" type="file" id="formFile" />
						</div>
					{:else}
						<div class="form-field">
							<label for="{field.name}" class="form-label">{field.client_label}</label>
							<input name="{field.name}" class="form-control" placeholder="" />
						</div>
					{/if}
				{/each}
				<div class="col-auto">
					<button on:click="{handleSubmit}" type="button" class="btn btn-primary mb-3"
						>Submit</button
					>
				</div>
			</form>
		</div>
	{/if}
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
