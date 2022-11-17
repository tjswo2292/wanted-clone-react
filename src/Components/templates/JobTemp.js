import JobChoiceSection from "../UI/organisms/JobChoiceSection";
// import BookMarkSection from "../UI/organisms/BookMarkSection";

import "./jobTemp.css";
import BookCompanySection from "../UI/organisms/BookCompanySection";

const JobTemp = () => {
	return (
		<section className="job-choice">
			<div className="job-box">
				<JobChoiceSection />
				{/* <BookMarkSection /> */}
				<BookCompanySection />
			</div>
		</section>
	);
};

export default JobTemp;
