import React, { useState } from "react";

import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";

import "./headerBar.css";

const HeaderBar = ({ setShowModal }) => {
	function onMouse() {
		setShowModal(true);
	}
	return (
		<div className="header-bar-container">
			<button onMouseOver={onMouse} type="click" className="hbg-icon-box">
				<AiOutlineMenu />
			</button>
			<Link to="/">
				<div className="logo-img-box">
					<img src={process.env.PUBLIC_URL + "/assets/wantedLogo.png"} />
				</div>
			</Link>
		</div>
	);
};

export default HeaderBar;
