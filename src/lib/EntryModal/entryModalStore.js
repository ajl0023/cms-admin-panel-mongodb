import { get, writable } from 'svelte/store';

//from https://github.com/codrops/MarqueeMenu/blob/main/src/js/menuItem.js#L29

const store = () => {
	const state = {
		visible: false,
		content: null,
		inputs: {},
		files: {}
	};
	const { subscribe, set, update } = writable(state);

	const methods = {
		handleVisible(item) {
			update((s) => {
				s.content = item;
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

export const entryModalStore = store();
