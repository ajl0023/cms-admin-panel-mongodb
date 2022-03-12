import { get, writable } from 'svelte/store';

//from https://github.com/codrops/MarqueeMenu/blob/main/src/js/menuItem.js#L29

const store = () => {
	const state = {
		currentTable: null,
		tables: {},
		columns: [],
		categories: [],
		cursor: null,
		modalVisible: true
	};
	const { subscribe, set, update } = writable(state);

	const methods = {
		handleModal() {
			update((s) => {
				s.modalVisible = true;
				return s;
			});
		},
		setCurrentTable(table) {
			update((s) => {
				s.currentTable = table;
				return s;
			}); // prevents instant swap
		},
		async fetchData(next, load) {
			const currentTable = state.currentTable;
			const res = await fetch(
				`http://localhost:3000/api/category?category=${currentTable.orig}${
					next ? `&next=${next}` : ''
				}`
			);

			const columnsRes =
				state.columns.length > 0
					? state.columns
					: await fetch(`http://localhost:3000/api/columns?category=${currentTable.orig}`);
			const columns = state.columns.length > 0 ? state.columns : await columnsRes.json();
			if (state.columns.length > 0) {
				update((s) => {
					s.columns = columns;
					return s;
				});
			}
			let rows = await res.json();
			const cursor = rows.page;

			update((s) => {
				s.cursor = cursor;
				return s;
			});

			const final_arr = [];

			rows = rows.results.map((row) => {
				const obj = {};
				const arr = [];

				for (const column of columns) {
					arr.push({
						column,
						value: row[column.db_name]
					});
				}

				obj['table_cols'] = arr;
				obj['data'] = {
					uid: row.uid
				};
				final_arr.push(obj);
				return arr;
			});

			return {
				rows: final_arr,
				columns,
				cursor
			};
		}
	};
	return {
		subscribe,
		set,
		update,
		...methods
	};
};

export const tableStore = store();
