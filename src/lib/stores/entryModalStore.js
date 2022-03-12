import { get, writable } from 'svelte/store';

//from https://github.com/codrops/MarqueeMenu/blob/main/src/js/menuItem.js#L29
const actions = {};
const store = () => {
	const state = {
		visible: false,
		content: null,
		inputs: {},
		files: {},
		isInserting: false,
		action: null,
		selected: null,
		endpoint: {}
	};
	const { subscribe, set, update } = writable(state);

	const methods = {
		handleVisible(item, action) {
			update((s) => {
				s.content = item;

				s.visible = true;
				s.action = actions[action];
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
