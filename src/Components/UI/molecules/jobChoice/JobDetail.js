import { FiChevronDown } from "react-icons/fi";

import "./jobDetail.css";

const JobDetail = () => {
  return (
    <div className="job-detail-wrap">
      <div className="job-detail-box">
        <span>개발</span>
        <div className="more-icon-box">
          <button>
            <FiChevronDown className="down-btn" />
          </button>
        </div>
      </div>
      <div className="job-detail-box">
        <span>개발 전체</span>
        <div className="more-icon-box">
          <button>
            <FiChevronDown className="down-btn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
