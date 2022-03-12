import { hostName } from '../../host';
import { get, writable } from 'svelte/store';
import axios from 'axios';

//from https://github.com/codrops/MarqueeMenu/blob/main/src/js/menuItem.js#L29

const store = () => {
	const state = {
		collection: null,
		categories: []
	};
	const { subscribe, set, update } = writable(state);

	const methods = {
		async setCollection(coll) {
			update((s) => {
				s.collection = coll;
				return s;
			});
			localStorage.setItem('collection', coll);
		}
	};
	return {
		subscribe,
		set,
		update,
		...methods
	};
};

export const collectionStore = store();
