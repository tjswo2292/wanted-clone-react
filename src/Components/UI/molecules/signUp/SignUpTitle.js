import "./signUpTitle.css";

const SignUpTitle = () => {
  return (
    <div className="sign-up-title-box">
      <div className="sign-up-title-img-box">
        <img src={process.env.PUBLIC_URL + "/assets/loginLogo.png"} />
      </div>
    </div>
  );
};

export default SignUpTitle;
