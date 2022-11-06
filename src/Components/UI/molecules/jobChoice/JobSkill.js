import { AiOutlineCaretDown } from "react-icons/ai";

import "./jobSkill.css";

const JobSkill = () => {
  return (
    <div className="job-skill-wrap">
      <div className="skill-choice-container">
        <div className="skill-btn">
          <div className="location-btn-box">
            <button>
              <span>지역</span>
              <span>한국</span>
            </button>
          </div>
          <div className="career-btn-box">
            <button>
              <span>경력</span>
              <div className="career-choice">
                <span>신입</span>
                <div className="down-icon-box">
                  <AiOutlineCaretDown className="down-icon" />
                </div>
              </div>
            </button>
          </div>
          <div className="skill-stack-btn-box">
            <button className="skill-stack-box">
              <span>기술스택</span>
              <div className="down-icon-box">
                <AiOutlineCaretDown className="down-icon" />
              </div>
            </button>
          </div>
        </div>
        <div className="answer-btn-box">
          <span>응답률순</span>
          <div className="down-icon-box">
            <AiOutlineCaretDown className="down-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSkill;
