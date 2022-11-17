import CompanyList from "./CompanyList";
import { useDispatch, useSelector } from "react-redux";
import { emptyIcon, fillIcon } from "../../../../modules/BookMark";

const CompanyContainer = () => {
	const dispatch = useDispatch();

	const fill = useSelector((state) => state.fill);

	const onEmptyIcon = () => dispatch(emptyIcon());
	const onFillIcon = () => dispatch(fillIcon());

	console.log(fill);

	return (
		<CompanyList
			fill={fill}
			onEmptyIcon={onEmptyIcon}
			onFillIcon={onFillIcon}
		/>
	);
};

export default CompanyContainer;
