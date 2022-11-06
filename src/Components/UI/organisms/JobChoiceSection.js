import JobDetail from "../molecules/jobChoice/JobDetail";
import JobDetailCategory from "../molecules/jobChoice/JobDetailCategory";
import JobSkill from "../molecules/jobChoice/JobSkill";

import "./jobChoiceSection.css";

const JobChoiceSection = () => {
  return (
    <section className="job-choice-section">
      <JobDetail />
      <JobSkill />
      <JobDetailCategory />
    </section>
  );
};

export default JobChoiceSection;
