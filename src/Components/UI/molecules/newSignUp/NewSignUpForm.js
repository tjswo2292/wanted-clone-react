import { useState, useEffect, useReducer } from "react";

import "./newSignUpForm.css";

const checkReducer = (state, action) => {
	switch (action.type) {
		case "AGE_CHECKED":
			return { age: action.age, id: state.id, info: state.info };
		case "ID_CHECKED":
			return { age: state.age, id: action.id, info: state.info };
		case "INFO_CHECKED":
			return { age: state.age, id: state.id, info: action.info };
		case "ALL_CHECKED":
			return { age: action.age, id: action.val, info: action.val };
		default:
			return { age: action.age, id: action.id, info: action.info };
	}
};

const NewSignUpForm = () => {
	const [isChecked, dispatchIsChecked] = useReducer(checkReducer, {
		age: false,
		id: false,
		info: false,
	});
	const [isAllChecked, setIsAllChecked] = useState(false);

	const { age: ageCheck, id: idCheck, info: infoCheck } = isChecked;

	useEffect(() => {
		setIsAllChecked(ageCheck && idCheck && infoCheck);
	}, [ageCheck, idCheck, infoCheck]);

	function detectAgeCheck(e) {
		dispatchIsChecked({
			type: "AGE_CHECKED",
			age: e.target.checked,
		});
	}
	function detectIdCheck(e) {
		dispatchIsChecked({
			type: "ID_CHECKED",
			id: e.target.checked,
		});
	}
	function detectInfoCheck(e) {
		dispatchIsChecked({
			type: "INFO_CHECKED",
			info: e.target.checked,
		});
	}

	function a(e) {
		dispatchIsChecked({
			type: "ALL_CHECKED",
			val: e.target.checked,
		});
	}

	console.log(isAllChecked);
	return (
		<div className="new-sign-up-form">
			<form>
				<label htmlFor="new-email">이메일</label>
				<input id="new-email-input" type="text" />
				<label htmlFor="new-email">이름</label>
				<input
					id="new-name-input"
					type="text"
					placeholder="이름을 입력해주세요."
				/>
				<label htmlFor="new-email">휴대폰 번호</label>
				<select id="phoneNumberSelect" name="phoneNumber">
					<option>South Korea +82</option>
				</select>
				<div className="certification-number-box">
					<input id="new-number-input" type="number" />
					<button>
						<span>인증번호 받기</span>
					</button>
				</div>
				<input
					id="new-certification-input"
					type="text"
					placeholder="인증번호를 입력해주세요"
				/>
				<label htmlFor="new-email">이메일</label>
				<input
					id="new-pw-input"
					type="number"
					placeholder="비밀번호를 입력해주세요"
				/>
				<input
					id="new-check-pw-input"
					type="number"
					placeholder="비밃번호를 다시 한번 입력해주세요"
				/>
				<p className="pw-input-warning">
					영문 대소문자,숫자,특수문자를 3가지 이상으로 조합해 8자 이상 16자
					이하로 입력해주세요.
				</p>
				<div className="agree-wrap">
					<div className="agree-box">
						<input
							id="all-agree"
							type="checkbox"
							onChange={a}
							checked={isAllChecked}
						/>
						<label htmlFor="all-agree">전체 동의</label>
					</div>
					<hr />
					<div className="agree-box">
						<input id="age-agree" type="checkbox" onChange={detectAgeCheck} />
						<label htmlFor="age-agree">만 14세 이상힙니다. (필수)</label>
					</div>
					<div className="agree-box">
						<div className="id-agree-box">
							<input id="id-agree" type="checkbox" onChange={detectIdCheck} />
							<label htmlFor="id-agree">oneID 이용약관 동의 (필수)</label>
						</div>
						<span>자세히</span>
					</div>
					<div className="agree-box">
						<div className="info-agree-box">
							<input
								id="info-agree"
								type="checkbox"
								onChange={detectInfoCheck}
							/>
							<label htmlFor="info-agree">
								개인정보 및 수집 이용 동의 (필수)
							</label>
						</div>
						<span>자세히</span>
					</div>
				</div>
			</form>
		</div>
	);
};

export default NewSignUpForm;

// const [all, setAll] = useState(false);
// const [isCheck, setIsCheck] = useState({
//   first: "",
//   second: "",
//   third: "",
// });

// useEffect(() => {
//   if (
//     isCheck.first === true &&
//     isCheck.second === true &&
//     isCheck.third === true
//   ) {
//     setAll(true);
//   } else {
//     setAll(false);
//   }
//   return () => {
//     setAll("");
//   };
// }, [isCheck]);

// function firstCheckValidate(event) {
//   event
//     ? setIsCheck({
//         ...isCheck,
//         first: true,
//       })
//     : setIsCheck({
//         ...isCheck,
//         first: false,
//       });
// }
// function secondCheckValidate(event) {
//   event
//     ? setIsCheck({
//         ...isCheck,
//         second: true,
//       })
//     : setIsCheck({
//         ...isCheck,
//         second: false,
//       });
// }
// function thirdCheckValidate(event) {
//   event
//     ? setIsCheck({
//         ...isCheck,
//         third: true,
//       })
//     : setIsCheck({
//         ...isCheck,
//         third: false,
//       });
// }
