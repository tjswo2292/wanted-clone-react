import { useDispatch, useSelector } from "react-redux";
import { delBookMark } from "../../modules/BookMark";

import InsightData from "../../Data/InsightData.json";

import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import "./saveBookMark.css";
import { useEffect } from "react";

// json 파일에 맞는 id 값을 뿌려준다.
const SaveBookMark = () => {
	const dispatch = useDispatch();
	const markArr = useSelector((state) => state.markArr);

	const onDelBookMark = (id) => dispatch(delBookMark(id));

	let renderUi = InsightData.insightData.filter((element) =>
		markArr.includes(element.id)
	);

	return (
		<ul className="save-list">
			{renderUi.map((element) => (
				<div key={element.id} className="savebook-container">
					<button
						onClick={() => onDelBookMark(element.id)}
						className="savebookmark-fill-icon"
					>
						<FaBookmark />
					</button>
					<li className="insight-list-item-container">
						<div className="card-img-box">
							<img src={process.env.PUBLIC_URL + element.src} />
						</div>
						<div className="card-title-box">
							<span>{element.title}</span>
						</div>
						<div className="card-desc-box">
							<span>{element.desc}</span>
						</div>
						<div className="card-profile-box">
							<div className="card-logo">
								<img src={process.env.PUBLIC_URL + element.icon} />
							</div>
							<div className="card-logo-name">
								<span>{element.name}</span>
							</div>
						</div>
					</li>
				</div>
			))}
		</ul>
	);
};

export default SaveBookMark;
