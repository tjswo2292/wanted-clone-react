import { Link } from "react-router-dom";

import { FaRegBookmark, FaBookmark } from "react-icons/fa";

import "./bookMarkTitle.css";

const BookMarkTitle = () => {
	return (
		<Link to="/savebookmark">
			<div className="all-book-mark">
				<button>
					<FaBookmark />
					<p>북마크 모아보기</p>
				</button>
			</div>
		</Link>
	);
};

export default BookMarkTitle;
