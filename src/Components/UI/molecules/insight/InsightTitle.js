import { BsQuestionCircle } from "react-icons/bs";

import "./insightTitle.css";

const InsightTitle = () => {
  return (
    <div className="insight-title-container">
      <div className="insight-title-box">
        <span>나에게 필요한 커리어 인사이트</span>
      </div>
      <div className="insight-icon-box">
        <BsQuestionCircle className="que-icon" />
      </div>
    </div>
  );
};

export default InsightTitle;
