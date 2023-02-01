import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSectionThreeCard = ({ image, word, teacher, experience }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="home-section-three-card"
      data-aos="fade-left"
      data-aos-duration="3000"
    >
      <div>
        <img src={image} alt="" />
      </div>
      <div className="home-section-three-card-p-div">
        <h4>{teacher}</h4>
        <p>{word}</p>
        <p className="home-section-three-card-experience">{experience}</p>
      </div>
    </div>
  );
};

export default HomeSectionThreeCard;
