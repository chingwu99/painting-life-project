import React from "react";

const HomeSectionThreeCard = ({ image, word, teacher, experience }) => {
  return (
    <div className="home-section-three-card">
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
