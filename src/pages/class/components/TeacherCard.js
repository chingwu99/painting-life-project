import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TeacherCard = ({ name, image, p, experience }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="teacherCard" data-aos="fade-up" data-aos-duration="3000">
      <img src={image} alt="" className="teacher-card-img" />
      <div className="teacher-word">
        <div>
          <p>{name}</p>
          <p>{experience}</p>
        </div>
        <div>
          <p>{p}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
