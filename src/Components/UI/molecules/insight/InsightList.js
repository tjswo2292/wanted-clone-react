import { Link } from "react-router-dom";

import InsightData from "../../../../Data/InsightData.json";

import "./insightList.css";

const PUBLIC_IMG = process.env.PUBLIC_URL;

const InsightList = () => {
  return (
    <ul className="insight-list-container">
      {InsightData.insightData.map((element) => (
        <Link key={element.id} to="/">
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
      ))}
    </ul>
  );
};

export default InsightList;

// img 30 30
// aaa font 12 ml 10
