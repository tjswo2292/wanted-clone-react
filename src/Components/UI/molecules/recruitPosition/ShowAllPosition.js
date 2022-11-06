import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";

import "./showAllPosition.css";

const ShowAllPosition = () => {
  return (
    <div className="show-all-position">
      <div className="left-btn-box">
        <button type="click">
          <AiOutlineLeft />
        </button>
      </div>
      <div className="all-position-title">
        <div className="title-box">
          <span>wanted ai가 제안하는 합격률 높은 포지션</span>
          <BsQuestionCircle className="que-icon" />
        </div>
        <span>포지션 전체보기 ></span>
      </div>
      <div className="right-btn-box">
        <button type="click">
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default ShowAllPosition;
