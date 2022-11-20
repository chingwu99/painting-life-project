import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="nav-logo-div">
        <Link to="/">PaintingLife</Link>
      </div>

      <div className="nav-ul-div">
        <ul className="nav-ul">
          <li>
            <Link to="/class">課程介紹</Link>
          </li>
          <li>
            <Link to="/classroom">繪畫空間</Link>
          </li>
          <li>
            <Link to="/curriculum">當月課表</Link>
          </li>
        </ul>
      </div>

      <div className="nav-button-div">
        <button>立即預約</button>
        <button>聯絡我們</button>
      </div>
    </nav>
  );
};

export default Nav;
