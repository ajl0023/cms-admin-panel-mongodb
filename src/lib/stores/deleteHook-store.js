import { entryModalStore } from '$lib/EntryModal/entryModalStore';
import { tableStore } from '$lib/tableStore';
import axios from 'axios';
import { get, writable } from 'svelte/store';
import { hostName } from '../../host';
//from https://github.com/codrops/MarqueeMenu/blob/main/src/js/menuItem.js#L29

const store = () => {
	const state = {
		deleted: []
	};
	const storeCopy = { ...state };
	const { subscribe, set, update } = writable(state);

	const methods = {
		init() {
			update(() => {
				return storeCopy;
			});
		},
		async handleDelete(category) {
			let formatted;
			update((s) => {
				formatted = s.deleted.reduce((acc, item) => {
					if (category === 'mobile') {
						if (!acc[item.page._id]) {
							acc[item.page._id] = [
								{
									_id: item.image_id,
									category: item.page.category
								}
							];
						} else {
							acc[item.page._id].push({
								_id: item.image_id,
								category: item.page.category
							});
						}
					} else if (category !== 'carousel-renders') {
						if (!acc[item.page._id]) {
							acc[item.page._id] = [item.image_id];
						} else {
							acc[item.page._id].push(item.image_id);
						}
					} else {
						if (!acc[item.page._id]) {
							acc[item.page._id] = [
								{
									_id: item.image_id,
									col: item.col
								}
							];
						} else {
							acc[item.page._id].push({
								_id: item.image_id,
								col: item.col
							});
						}
					}
					return acc;
				}, {});

				s.deleted = [];
				return s;
			});

			const categories = get(tableStore);
			const isMobile = categories.currentTable.category === 'mobile';

			if (isMobile) {
				const mobile_formatted = {};
				for (const page in formatted) {
					const element = formatted[page];
					mobile_formatted[page] = element;
					if (categories.categories[element[0].category].category === 'behind-the-scenes') {
						await axios(`${hostName}/api/${category}/behind-the-scenes`, {
							method: 'DELETE',
							data: {
								deleted: mobile_formatted,
								category: category
							}
						});
					} else {
						await axios(`${hostName}/api/${category}`, {
							method: 'DELETE',
							data: {
								deleted: mobile_formatted,
								category: category
							}
						});
					}
				}

				return;
			}

			await axios(`${hostName}/api/${category}`, {
				method: 'DELETE',
				data: {
					deleted: formatted,
					category: category
				}
			});
		},
		addItem(selected) {
			update((s) => {
				const itemIndex = s.deleted.findIndex((item) => {
					return selected.image_id === item.image_id;
				});

				if (s.deleted.length === 0 || itemIndex < 0) {
					s.deleted = [...s.deleted, selected];
					console.log(s.deleted);
					return s;
				}

				s.deleted = s.deleted.filter((item) => {
					return item.image_id !== selected.image_id;
				});
				console.log(s.deleted);
				return s;
			});
		}
	};
	return {
		subscribe,
		set,
		update,
		...methods
	};
};

export const deleteHook = store();
