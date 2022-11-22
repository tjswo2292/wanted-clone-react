import CompanyList from "./CompanyList";
import { useDispatch, useSelector } from "react-redux";
import { emptyIcon, fillIcon } from "../../../../modules/BookMark";

const CompanyContainer = () => {
	const dispatch = useDispatch();

	const markArr = useSelector((state) => state.markArr);

	const onEmptyIcon = (id) => dispatch(emptyIcon(id));
	const onFillIcon = (id) => dispatch(fillIcon(id));

	return (
		<CompanyList
			markArr={markArr}
			onEmptyIcon={onEmptyIcon}
			onFillIcon={onFillIcon}
		/>
	);
};

export default CompanyContainer;
