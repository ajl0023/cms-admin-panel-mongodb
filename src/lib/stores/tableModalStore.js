import { get, writable } from 'svelte/store';

//from https://github.com/codrops/MarqueeMenu/blob/main/src/js/menuItem.js#L29

const store = () => {
	const state = {
		visible: false,
		seleted: null
	};
	const { subscribe, set, update } = writable(state);

	const methods = {
		handleVisible() {
			update((s) => {
				s.visible = true;
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

export const tableModalStore = store();
