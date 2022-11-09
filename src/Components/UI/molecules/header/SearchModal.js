import "./searchModal.css";

const BackDrop = () => {
	return <div className="back-drop" />;
};

const SearchModal = () => {
	return (
		<div className="search-wrap">
			<div className="search-container">
				<div className="search-input-box">
					<input type="text" />
				</div>
				<div>
					<span>추천태그로 검색해보세요</span>
					<span>기업태그 홈 이동하기</span>
				</div>
				<ul className="hash-tag-list-container">
					<li>#생일선물</li>
					<li>#의료비</li>
					<li>#생일선물</li>
					<li>#생일선물</li>
				</ul>
			</div>
		</div>
	);
};

export default SearchModal;
