import React from "react";

const HomeSectionTwoCard = ({ image, word, p }) => {
  return (
    <div className="home-section-two-card-img-div">
      <img src={image} alt="" className="home-section-two-card-img" />
      <div>
        <p>{word}</p>
        <p>{p}</p>
      </div>
    </div>
  );
};

export default HomeSectionTwoCard;
