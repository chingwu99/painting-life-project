import React from "react";

const HomeSectionThreeCard = ({ image, word, teacher }) => {
  return (
    <div className="home-section-three-card">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="home-section-three-card-p-div">
        <h4>{teacher}</h4>
        <p>{word}</p>
      </div>
    </div>
  );
};

export default HomeSectionThreeCard;
