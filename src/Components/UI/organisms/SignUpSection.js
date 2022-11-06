import SignUpFooter from "../molecules/signUp/SignUpFooter";
import SignUpTitle from "../molecules/signUp/SignUpTitle";
import SignUpSocialLogin from "../molecules/signUp/SignUpSocialLogin";
import SignUpForm from "../molecules/signUp/SignUpForm";

import "./signUpSection.css";

const SignUpSection = () => {
  return (
    <section className="sign-up-section">
      <SignUpTitle />
      <div className="sign-up-main">
        <SignUpForm />
        <SignUpSocialLogin />
        <SignUpFooter />
      </div>
    </section>
  );
};

export default SignUpSection;
