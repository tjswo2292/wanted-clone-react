import React from "react";

import "./headerMenu.css";

const HeaderMenu = () => {
  return (
    <ul className="header-menu-container">
      <li className="menu-item">
        <a href="#!" className="item-link">
          <span className="menu-name">채용</span>
        </a>
      </li>
      <li className="menu-item">
        <a href="#!" className="item-link">
          <span className="menu-name">이벤트</span>
        </a>
      </li>
      <li className="menu-item">
        <a href="#!" className="item-link">
          <span className="menu-name">직군별 연봉</span>
        </a>
      </li>
      <li className="menu-item">
        <a href="#!" className="item-link">
          <span className="menu-name">이력서</span>
        </a>
      </li>
      <li className="menu-item">
        <a href="#!" className="item-link">
          <span className="menu-name">커뮤니티</span>
        </a>
      </li>
      <li className="menu-item">
        <a href="#!" className="item-link">
          <span className="menu-name">프리랜서</span>
        </a>
      </li>
      <li className="menu-item">
        <a href="#!" className="item-link">
          <span className="menu-name">AI합격예측</span>
        </a>
      </li>
    </ul>
  );
};

export default HeaderMenu;
