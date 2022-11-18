import CompanyList from "./CompanyList";
import { useDispatch, useSelector } from "react-redux";
import { emptyIcon, fillIcon } from "../../../../modules/BookMark";

const CompanyContainer = () => {
	const dispatch = useDispatch();

	const fill = useSelector((state) => state.fill);

	const onEmptyIcon = (id) => dispatch(emptyIcon(id));
	const onFillIcon = (id) => dispatch(fillIcon(id));

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
