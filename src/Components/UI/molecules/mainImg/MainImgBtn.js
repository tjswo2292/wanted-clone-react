import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import "./mainImgBtn.css";

const MainImgBtn = () => {

  return (
    <>
      <button type="click" className="img-btn-left" >
        <AiOutlineLeft />
      </button>
      <button type="click" className="img-btn-rigth" >
        <AiOutlineRight />
      </button>
    </>
  );
};

export default MainImgBtn;
