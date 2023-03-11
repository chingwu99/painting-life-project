import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ClassroomSectionTwoImgCard = ({ image, classRoom, teacher }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="classroom-sectionTwo-imgCard"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <p>{classRoom}</p>
        <p>授課老師：{teacher}</p>
      </div>
    </div>
  );
};

export default ClassroomSectionTwoImgCard;
