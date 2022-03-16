import { get, writable } from 'svelte/store';

//from https://github.com/codrops/MarqueeMenu/blob/main/src/js/menuItem.js#L29

const store = () => {
	const state = {
		
	};
	const { subscribe, set, update } = writable(state);

	const methods = {
		
	};
	return {
		subscribe,
		set,
		update,
		...methods
	};
};

export const auth_store = store();
