import { Link } from "react-router-dom";

import hbgMenuData from "../../../../Data/hbgMenuData.json";

import "./hbgMenuList.css";

const HbgMenuList = ({ setShowModal }) => {
  function leaveMouse() {
    setShowModal(false);
  }
  return (
    <div onMouseLeave={leaveMouse} className="hbg-menu-container">
      <ul className="hbg-menu-item-box">
        {hbgMenuData.hbgMenuList.map((element) => (
          <Link key={element.id} to="/jobPosting">
            <li className="hbg-menu-item">
              <span>{element.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HbgMenuList;
