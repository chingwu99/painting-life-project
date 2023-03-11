import { Outlet } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <Nav />
      <Outlet />
      <Footer />
      <div className="social-logo-div">
        <FaFacebook className="social-logo" />
        <FaInstagram className="social-logo" />
        <FaLine className="social-logo" />
      </div>
    </div>
  );
};

export default Layout;
