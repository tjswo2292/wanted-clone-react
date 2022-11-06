import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineEllipsis,
} from "react-icons/ai";

import "./insightCategory.css";

const InsightCategory = () => {
  return (
    <div className="insight-category-wrap">
      <div className="insight-prev-btn">
        <button>
          <AiOutlineLeft className="left-btn" />
        </button>
      </div>
      <ul className="insight-category-container">
        <li className="insight-category-item">
          <button>
            <span>리더십</span>
          </button>
        </li>
        <li className="insight-category-item">
          <button>
            <span>회사생활</span>
          </button>
        </li>
        <li className="insight-category-item">
          <button>
            <span>커리어고민</span>
          </button>
        </li>
        <li className="insight-category-item">
          <button>
            <span>조직문화</span>
          </button>
        </li>
        <li className="insight-category-item">
          <button>
            <span>라이프스타일</span>
          </button>
        </li>
        <li className="insight-category-item">
          <button>
            <span>인간관계</span>
          </button>
        </li>
        <li className="insight-category-item">
          <button>
            <span>IT/기술</span>
          </button>
        </li>
        <li className="insight-category-item">
          <button>
            <span>취업/이직</span>
          </button>
        </li>
        <li className="insight-category-item">
          <button>
            <span>UX/UI</span>
          </button>
        </li>
      </ul>
      <div className="insight-more-container">
        <div className="insight-next-btn">
          <button>
            <AiOutlineRight className="right-btn" />
          </button>
        </div>
        <div className="insight-more-btn">
          <button>
            <AiOutlineEllipsis className="more-btn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightCategory;
