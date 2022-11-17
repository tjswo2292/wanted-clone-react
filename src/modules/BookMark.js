const FILL_ICON = "FILL_ICON";
const EMPTY_ICON = "EMPTY_ICON";

export const emptyIcon = () => ({
	type: EMPTY_ICON,
	fill: false,
});
export const fillIcon = () => ({
	type: FILL_ICON,
	fill: true,
});

const initialState = {
	fill: false,
};

export default function markReducer(state = initialState, action) {
	switch (action.type) {
		case FILL_ICON:
			return {
				...state,
				fill: action.fill,
			};
		case EMPTY_ICON:
			return {
				...state,
				fill: action.fill,
			};
		default:
			return state;
	}
}
