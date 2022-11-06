import Header from "../UI/organisms/Header";
import JobChoiceSection from "../UI/organisms/JobChoiceSection";

import "./jobTemp.css";

const JobTemp = () => {
  return (
    <section className="job-choice">
      <div className="job-box">
        <JobChoiceSection />
      </div>
    </section>
  );
};

export default JobTemp;
