import BookMarkTitle from "../molecules/bookmark/BookMarkTitle";
import CompanyContainer from "../molecules/bookMarkCompany/CompanyContainer";
import "./bookCompanySection.css";
const BookCompanySection = () => {
	return (
		<div className="bookCompany-section">
			<BookMarkTitle />
			<CompanyContainer />
		</div>
	);
};

export default BookCompanySection;
