import { Link } from "react-router-dom";

import InsightData from "../../../../Data/InsightData.json";

import "./companyList.css";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

const PUBLIC_IMG = process.env.PUBLIC_URL;

const CompanyList = ({ fill, onEmptyIcon, onFillIcon }) => {
	return (
		<ul className="insight-list-container">
			{InsightData.insightData.map((element) => (
				<div className="li-container" key={element.id}>
					{fill ? (
						<button
							onClick={() => onFillIcon(element.id)}
							className="bookmark-fill-icon"
						>
							<FaBookmark />
						</button>
					) : (
						<button
							onClick={() => onEmptyIcon(element.id)}
							className="bookmark-icon"
						>
							<FaRegBookmark />
						</button>
					)}
					<Link to="/recruit">
						<li className="insight-list-item-container">
							<div className="card-img-box">
								<img src={PUBLIC_IMG + element.src} />
							</div>
							<div className="card-title-box">
								<span>{element.title}</span>
							</div>
							<div className="card-desc-box">
								<span>{element.desc}</span>
							</div>
							<div className="card-profile-box">
								<div className="card-logo">
									<img src={PUBLIC_IMG + element.icon} />
								</div>
								<div className="card-logo-name">
									<span>{element.name}</span>
								</div>
							</div>
						</li>
					</Link>
				</div>
			))}
		</ul>
	);
};

export default CompanyList;
