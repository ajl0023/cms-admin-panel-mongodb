import { get, writable } from 'svelte/store';

//from https://github.com/codrops/MarqueeMenu/blob/main/src/js/menuItem.js#L29

export const drag_store = () => {
	const state = {
		is_editing: false
	};
	const copy = {
		...state
	};
	const { subscribe, set, update } = writable(state);

	const methods = {};
	return {
		subscribe,
		set,
		update,
		...methods
	};
};
