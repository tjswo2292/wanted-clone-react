import React, { useState } from "react";

import HeadeBar from "../molecules/header/HeaderBar";
import HeaderMenu from "../molecules/header/HeaderMenu";
import HeaderAside from "../molecules/header/HeaderAside";
import HbgMenuList from "../molecules/header/HbgMenuList";

import "./header.css";
import { Outlet } from "react-router-dom";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="header">
      <div className="header-container">
        <HeadeBar setShowModal={setShowModal} />
        <HeaderMenu />
        <HeaderAside />
      </div>
      {showModal === true ? <HbgMenuList setShowModal={setShowModal} /> : ""}

      <Outlet></Outlet>
    </div>
  );
};

export default Header;
