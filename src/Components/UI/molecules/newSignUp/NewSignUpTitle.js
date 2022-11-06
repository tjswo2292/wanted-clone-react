import "./newSignUpTitle.css";

const NewSignUpTitle = () => {
  return (
    <div className="new-sign-up-title-container">
      <button id="close-sign-up-btn">
        <span>취소</span>
      </button>
      <span>회원가입</span>
      <span></span>
    </div>
  );
};

export default NewSignUpTitle;
