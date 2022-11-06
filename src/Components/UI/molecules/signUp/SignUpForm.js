import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./signUpForm.css";

const SignUpForm = () => {
	const [emailInputValue, setEmailInptValue] = useState("");
	const [validate, setValidate] = useState(true);
	const [activeBtn, setActiveBtn] = useState(false);

	const regExp =
		/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{1,3}$/i;

	useEffect(() => {
		if (regExp.test(emailInputValue) === false) {
			setValidate(false);
			setActiveBtn(false);
		} else {
			setValidate(true);
			setActiveBtn(true);
		}
	}, [emailInputValue]);

	function emailValueUpdate(e) {
		setEmailInptValue(e.target.value);
	}

	return (
		<div className="sign-up-form">
			<div className="sign-up-title">
				<h1>나다운 일의 시작,원티드</h1>
			</div>
			<div className="sign-up-desc">
				<h4>
					취업,이직,커리어 콘텐츠까지 <br />
					커리어 성장의 모든 것
				</h4>
			</div>
			<form>
				<label htmlFor="emailInput">이메일</label>
				<input
					className={validate ? "" : "red-outline"}
					onChange={emailValueUpdate}
					id="emailInput"
					type="email"
					placeholder="이메일을 입력해주세요."
				/>
				{validate ? (
					""
				) : (
					<span className="show-warning">올바른 이메일을 입력해주세요</span>
				)}
				<Link to="/newsignup">
					<div className="sign-up-btn-box">
						<button
							id={activeBtn ? "loginPosible" : "emailSubmitBtn"}
							type="submit"
							disabled={!activeBtn}
						>
							<span>이메일로 계속하기</span>
						</button>
					</div>
				</Link>
			</form>
			<ul className="social-list">
				<li>
					<div className="social-kakao-img-box">
						<img src={process.env.PUBLIC_URL + "/assets/kakaoLogo.png"} />
					</div>
					<span>Kakao</span>
				</li>
				<li>
					<div className="social-face-img-box">
						<img src={process.env.PUBLIC_URL + "/assets/faceBookLogo.png"} />
					</div>
					<span>FaceBook</span>
				</li>
				<li>
					<div className="social-google-img-box">
						<img src={process.env.PUBLIC_URL + "/assets/googleLogo.png"} />
					</div>
					<span>Google</span>
				</li>
				<li>
					<div className="social-apple-img-box">
						<img src={process.env.PUBLIC_URL + "/assets/appleLogo.png"} />
					</div>
					<span>Apple</span>
				</li>
			</ul>
			<hr />
		</div>
	);
};

export default SignUpForm;

// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g
