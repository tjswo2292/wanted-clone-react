const BOOK_MARK = "BOOK_MARK";

// action creator
export const bookMark = () => ({
	type: BOOK_MARK,
});

const initialState = [
	{
		value: "",
	},
];

export default function markBook(state = initialState, action) {
	if (action.type === BOOK_MARK) {
		return {};
	}
}
