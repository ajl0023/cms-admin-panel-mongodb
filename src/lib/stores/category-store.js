import { get, writable } from 'svelte/store';

//from https://github.com/codrops/MarqueeMenu/blob/main/src/js/menuItem.js#L29

const store = () => {
	const state = {
		category: null,
		data: {}
	};
	const { subscribe, set, update } = writable(state);

	const methods = {
		isMobile() {
			return state.category.category === 'mobile';
		}
	};
	return {
		subscribe,
		set,
		update,
		...methods
	};
};

export const categoryStore = store();
