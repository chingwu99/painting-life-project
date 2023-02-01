import { Link } from "react-router-dom";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <section className="footer-section-one">
        <div className="footer-section-div footer-section-div-one">
          <div>
            <p>現在訂閱，獲得課程優惠碼！</p>
          </div>
          <div>
            <div>
              <input type="text" placeholder="輸入您的電子信箱" />
              <button>訂閱</button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="footer-section-div footer-section-div-two">
          <div className="footer-nav">
            <ul>
              <li>
                <Link to="/">
                  <p>PaintingLife</p>
                </Link>
              </li>
              <li>
                <Link to="/">首頁</Link>
              </li>
              <li>
                <Link to="/class">課程介紹</Link>
              </li>
              <li>
                <Link to="/classroom">繪畫空間</Link>
              </li>
              <li className="footer-section-div-two-coperight">
                <p>© 2022. All Rights Reserved.</p>
              </li>
            </ul>
          </div>

          <div className="footer-coperight">
            <div>
              <p>© 2022. All Rights Reserved.</p>
            </div>
          </div>

          <div className="footer-social">
            <div>
              <FaFacebook className="footer-social-icon" />
              <FaInstagram className="footer-social-icon" />
              <FaLine className="footer-social-icon" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
