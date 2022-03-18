import axios from 'axios';
import { hostName } from 'src/host';
import { get, writable } from 'svelte/store';
import { categoryStore } from './category-store';
import { collectionStore } from './collectionStore-store';

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
		async handleDelete() {
			const promises = [];
			update((s) => {
				const category = get(categoryStore).category;
				console.log(category);
				const isBts = get(categoryStore);
				const del_route = category.endpoints.find((item) => {
					return item.method === 'DELETE' && item.type === 'media';
				});
				const deleted_items_toObj = s.deleted.reduce((acc, b) => {
					if (!acc[b.page_id]) {
						acc[b.page_id] = {};
						acc[b.page_id]['items'] = [
							{
								_id: b.image_id,
								column: b.column
							}
						];
					} else {
						acc[b.page_id]['items'].push({
							_id: b.image_id,
							column: b.column
						});
					}
					return acc;
				}, {});

				promises.push(
					axios('/api2' + del_route.route, {
						method: 'DELETE',
						data: {
							deleted: deleted_items_toObj,
							category: category.category
						},
						withCredentials: true
					})
				);
				return s;
			});
			await Promise.all(promises);
		},
		async handleDeleteMobile() {
			const promises = [];
			update((s) => {
				const categories = get(collectionStore).categories;
				const category = get(categoryStore).category;
				const deleted_items_toObj = s.deleted.reduce((acc, b) => {
					if (!acc[b.page_id]) {
						const routes = categories[b.page_category].endpoints_mobile;
						const delete_route = routes.find((item) => {
							return item.method === 'DELETE' && item.type === 'media';
						});
						acc[b.page_id] = { items: [b.image_id], route: delete_route.route };
					} else {
						acc[b.page_id].items.push(b.image_id);
					}
					return acc;
				}, {});

				for (const page_id in deleted_items_toObj) {
					if (Object.hasOwnProperty.call(deleted_items_toObj, page_id)) {
						const element = deleted_items_toObj[page_id];

						promises.push(
							axios('/api2' + element.route, {
								method: 'DELETE',
								withCredentials: true,
								data: {
									deleted: {
										[page_id]: element.items
									},
									category: category.category
								}
							})
						);
					}
				}
				return s;
			});

			await Promise.all(promises);
		},
		addItem(selected) {
			update((s) => {
				const itemIndex = s.deleted.findIndex((item) => {
					return selected.image_id === item.image_id;
				});
				if (s.deleted.length === 0 || itemIndex < 0) {
					s.deleted = [...s.deleted, selected];
					return s;
				}
				s.deleted = s.deleted.filter((item) => {
					return item.image_id !== selected.image_id;
				});

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
