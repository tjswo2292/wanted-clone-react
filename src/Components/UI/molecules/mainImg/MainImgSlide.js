import "./mainImgSlide.css";

const MainImgSlide = ({ imgContent }) => {
  return (
    <div className="img-slide-wrap">
      <ul className="main-img-slide">
        {imgContent.map((element, index) => (
          <li key={index} className="img-slide-item">
            <img src={element.src} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainImgSlide;
