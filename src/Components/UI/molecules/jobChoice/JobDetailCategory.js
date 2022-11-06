import jobCategoryData from "../../../../Data/jobCategoryData.json";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import "./jobDetailCategory.css";

const JobDetailCategory = () => {
  return (
    <div className="job-category-wrap">
      <div className="job-prev-btn">
        <button>
          <AiOutlineLeft className="left-btn" />
        </button>
      </div>
      <ul className="job-category-container">
        {jobCategoryData.jobCategory.map((element, index) => (
          <li key={element.id} className="job-category-item">
            <button>
              <span
                style={{
                  backgroundColor: `${element.color}`,
                  borderRadius: "1.563rem",
                }}
              >
                {element.title}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="job-more-container">
        <button>
          <AiOutlineRight className="right-btn" />
        </button>
      </div>
    </div>
  );
};

export default JobDetailCategory;
