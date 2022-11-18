const FILL_ICON = "FILL_ICON";
const EMPTY_ICON = "EMPTY_ICON";

export const emptyIcon = (id) => ({
	type: EMPTY_ICON,
	id,
});
export const fillIcon = (id) => ({
	type: FILL_ICON,
	id,
});

const initialState = {
	fill: [],
};

export default function markReducer(state = initialState, action) {
	switch (action.type) {
		case FILL_ICON:
			return {
				fill: [...state.fill, action.id],
			};
		case EMPTY_ICON:
			return {
				fill: ,
			};
		default:
			return state;
	}
}

// 배열에 id 값이 없으면 북마크 icon을 비워라
// reducer에서 할거는 id 값알 뺴거나 추가해주기
// 배열의 id 값에 따라 true false는 companyCounter에서 