import React from "react";
import { AiFillStar } from "react-icons/ai";

const HomeSectionSevenCard = ({ image, infor, comment }) => {
  return (
    <div className="home-section-seven-card">
      <div className="home-section-seven-card-img-div">
        <img src={image} alt="" />
      </div>
      <div className="home-section-seven-card-p-div">
        <p>{infor}</p>
        <p className="star-icon">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default HomeSectionSevenCard;
