import { get, writable } from 'svelte/store';

//from https://github.com/codrops/MarqueeMenu/blob/main/src/js/menuItem.js#L29

const store = () => {
	const state = {
		current_set: null,
		mouseYCoordinate: null,
		distanceTopGrabbedVsPointer: null,
		hoveredItemIndex: null,
		draggingItem: null,
		draggingItemId: null,
		draggingItemIndex: null
	};
	const copy = {
		...state
	};
	const { subscribe, set, update } = writable(state);

	const methods = {
		dragend(e) {
			update((s) => {
				return { ...copy };
			}); // prevents instant swap
		},
		reset(e) {
			update((s) => {
				return copy;
			}); // prevents instant swap
		},
		dragover(i) {
			update((s) => {
				s.hoveredItemIndex = i;
				return s;
			});
		},
		dragStart(e, item, i, set_id) {
			update((s) => {
				s.current_set = set_id;
				s.mouseYCoordinate = e.clientY;

				s.draggingItem = item;
				s.draggingItemIndex = i;
				s.draggingItemId = item;

				s.distanceTopGrabbedVsPointer = e.target.getBoundingClientRect().y - e.clientY;
				return s;
			});
		},
		drag(e) {
			update((s) => {
				s.mouseYCoordinate = e.clientY;
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

export const dragStore = store();
