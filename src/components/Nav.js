import { Link } from "react-router-dom";
import React from "react";
import { BiAlignRight } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <div className="nav-logo-div">
        <Link to="/">PaintingLife</Link>
      </div>

      <div className="nav-ul-div">
        <ul className="nav-ul">
          <li>
            <Link to="/">彩繪生活</Link>
          </li>
          <li>
            <Link to="/class">課程介紹</Link>
          </li>
          <li>
            <Link to="/classroom">繪畫空間</Link>
          </li>
        </ul>
      </div>

      <div className="nav-button-div">
        <button>立即預約</button>
        <button>聯絡我們</button>
      </div>

      <div className="BiAlignRight-div">
        <BiAlignRight />
      </div>
    </nav>
  );
};

export default Nav;
