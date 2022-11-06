import "./signUpFooter.css";

const SignUpFooter = () => {
  return (
    <div className="sign-up-footer">
      <div className="service">
        <span>이용약관</span>
        <span>개인정보처리방침</span>
      </div>
      <p>© Wantedlab, Inc.</p>
      <select>
        <option>한국어</option>
        <option>english</option>
        <option>日本語</option>
      </select>
    </div>
  );
};
export default SignUpFooter;
