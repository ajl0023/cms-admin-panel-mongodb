<script context="module">
</script>

<script>
	import { categoryStore } from '$lib/stores/category-store';
	import { collectionStore } from '$lib/stores/collectionStore-store';

	import { entryModalStore } from '$lib/stores/entryModalStore';
	import axios from 'axios';
	import { externalFetch } from 'src/hooks';
	import { hostName } from 'src/host';

	import { onMount } from 'svelte';

	let fields = [];

	const inputs = {};
	let form;
	//IF INSERTABLE USE INSERTABLE ENDPOINTS ///  /SEF /DFSDKOLF SDJFNKL;DNJFKL; NKSADKFN ASL;DFKLASDNF KASNF;KL N
	onMount(async () => {
		const currentTable = $categoryStore.category;

		const isMobile = currentTable.category === 'mobile';

		if (isMobile) {
			if ($entryModalStore.endpoint.method === 'POST') {
				fields =
					$collectionStore.categories[$entryModalStore.selected.category].insertable.editableFields;
			} else {
				fields =
					$collectionStore.categories[$entryModalStore.selected.category].editableFields_mobile;
			}
		} else {
			if ($entryModalStore.endpoint.method === 'POST') {
				fields = currentTable.insertable.editableFields;
			} else {
				fields = $collectionStore.categories[$entryModalStore.selected.category].editableFields;
			}
		}
	});

	const handleSubmit = async () => {
		const data = new FormData(form);
		data.append('category', $entryModalStore.selected.category);
		data.append('_id', $entryModalStore.selected._id);
		if ($entryModalStore.selected.page === 'behind-the-scenes') {
			data.append('phase', $entryModalStore.selected.phase);
		}
		const value = Object.fromEntries(data.entries());

		const endpoint_data = $entryModalStore.endpoint;

		const request = axios('/api2' + endpoint_data.route, {
			method: endpoint_data.method,
			data: data
		});

		fetch(request);
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
