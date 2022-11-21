const FILL_ICON = "FILL_ICON";
const EMPTY_ICON = "EMPTY_ICON";

// action creator, 이 action이 실행 될 때, 어떤 값을 넘길 것인지
export const emptyIcon = (id) => ({
	type: EMPTY_ICON,
	id,
});
export const fillIcon = (id) => ({
	type: FILL_ICON,
	id,
});

// 초기값
const initialState = {
	markArr: [],
};

// reducer 함수
export default function markReducer(state = initialState, action) {
	switch (action.type) {
		case FILL_ICON:
			return {
				markArr: [...state.markArr, action.id],
			};
		case EMPTY_ICON:
			return {
				markArr: state.markArr.filter((element) => element !== action.id),
			};
		default:
			return state;
	}
}

// fill: boolean
