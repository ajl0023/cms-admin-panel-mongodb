import { get, writable } from 'svelte/store';

//from https://github.com/codrops/MarqueeMenu/blob/main/src/js/menuItem.js#L29

const store = () => {
	const state = {
		mouseYCoordinate: null,
		distanceTopGrabbedVsPointer: null,
		hoveredItemIndex: null,
		draggingItem: null,
		draggingItemId: null,
		draggingItemIndex: null
	};
	const { subscribe, set, update } = writable(state);

	const methods = {
		dragend(e) {
			update((s) => {
				s.draggingItemId = null; // makes item visible
				s.hoveredItemIndex = null;
				return s;
			}); // prevents instant swap
		},
		dragover(i) {
			update((s) => {
				s.hoveredItemIndex = i;
				return s;
			});
		},
		dragStart(e, item, i) {
			update((s) => {
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

export const tableStoreDrag = store();
