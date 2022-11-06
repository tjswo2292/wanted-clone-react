import { Link } from "react-router-dom";

import { AiOutlineSearch } from "react-icons/ai";
import "./showPosition.css";

const ShowPosition = () => {
  return (
    <Link to="/">
      <div className="show-position-btn">
        <div className="search-icon-box">
          <AiOutlineSearch className="search-icon" />
        </div>
        <span>채용 중인 포지션 보러가기</span>
      </div>
    </Link>
  );
};

export default ShowPosition;
