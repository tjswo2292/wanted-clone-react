import { useState } from "react";

import MainImgSlide from "../molecules/mainImg/MainImgSlide";
import MainImgBtn from "../molecules/mainImg/MainImgBtn";

import { imgContent } from "../../../Data/SlideImgData";

import "./mainImgSection.css";

const MainImgSection = () => {
  return (
    <section className="main-img-section">
      <MainImgBtn />
      <MainImgSlide imgContent={imgContent} />
    </section>
  );
};

export default MainImgSection;
