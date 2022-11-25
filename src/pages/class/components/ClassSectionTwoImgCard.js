import React from "react";

const ClassSectionTwoImgCard = ({ image1, image2 }) => {
  return (
    <div className="class-section-two-img-card">
      <div className="class-section-two-img-div-one">
        <div>
          <img src={image1} alt="" className="class-section-two-img1" />
        </div>
        <div className="class-section-two-time-one">60min</div>
        <div className="class-section-two-p-div-one">
          <p>基礎</p>
          <p>艾揚格</p>
        </div>
      </div>

      <div className="class-section-two-img-div-two">
        <div>
          <img src={image2} alt="" className="class-section-two-img2" />
        </div>
        <div className="class-section-two-time-two">60min</div>
        <div className="class-section-two-p-div-two">
          <p>基礎</p>
          <p>艾揚格</p>
        </div>
      </div>
    </div>
  );
};

export default ClassSectionTwoImgCard;
