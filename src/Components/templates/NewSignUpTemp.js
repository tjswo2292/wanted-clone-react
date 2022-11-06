import NewSignUpSection from "../UI/organisms/NewSignUpSection";
import NewSignUpHeaderSection from "../UI/organisms/NewSignUpHeaderSection";
import NewSignUpBtnSection from "../UI/organisms/NewSignUpBtnSection";

import "./newSignUpTemp.css";

const NewSignUpTemp = () => {
  return (
    <div className="new-sign-up-temp">
      <NewSignUpHeaderSection />
      <NewSignUpSection />
      <NewSignUpBtnSection />
    </div>
  );
};

export default NewSignUpTemp;
