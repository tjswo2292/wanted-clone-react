import React, { useState } from "react";
import { Link } from "react-router-dom";

import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai";

import "./headerAside.css";

const HeaderAside = () => {
  return (
    <ul className="header-aside-container">
      <li className="aside-item">
        <button type="click" className="aside-box">
          <AiOutlineSearch className="aside-icon" />
        </button>
      </li>
      <Link to="/signup">
        <li className="aside-sign-up-btn">
          <button type="click" className="signUp-btn">
            <span>회원가입/로그인</span>
          </button>
        </li>
      </Link>
      <li className="aside-item">
        <a href="#">
          <span className="company-service">기업 서비스</span>
        </a>
      </li>
    </ul>
  );
};

export default HeaderAside;
