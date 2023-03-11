import { AiFillStar } from "react-icons/ai";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSectionSevenCard = ({ image, infor, comment }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="home-section-seven-card"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="3000"
    >
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
