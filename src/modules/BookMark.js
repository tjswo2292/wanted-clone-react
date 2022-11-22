const FILL_ICON = "FILL_ICON";
const EMPTY_ICON = "EMPTY_ICON";
const DELETE_BOOKMARK = "DELETE_BOOKMARK";

export const emptyIcon = (id) => ({
	type: EMPTY_ICON,
	id,
});
export const fillIcon = (id) => ({
	type: FILL_ICON,
	id,
});
export const delBookMark = (id) => ({
	type: DELETE_BOOKMARK,
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
		case DELETE_BOOKMARK:
			return {
				markArr: state.markArr.filter((element) => element !== action.id),
			};
		default:
			return state;
	}
}

// json 파일에 있는 id 값만 렌더링?
//
