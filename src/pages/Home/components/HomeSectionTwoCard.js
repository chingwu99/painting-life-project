import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSectionTwoCard = ({ image, word, p }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="home-section-two-card-img-div"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000"
    >
      <img src={image} alt="" className="home-section-two-card-img" />
      <div>
        <p>{word}</p>
        <p>{p}</p>
      </div>
    </div>
  );
};

export default HomeSectionTwoCard;
