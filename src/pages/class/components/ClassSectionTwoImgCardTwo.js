import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ClassSectionTwoImgCardTwo = ({ image1, image2 }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="class-section-two-img-card ">
      <div
        className="class-section-two-img-div-two"
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        <div>
          <img src={image2} alt="" className="class-section-two-img2" />
        </div>
        <div className="class-section-two-time-two">60min</div>
        <div className="class-section-two-p-div-two">
          <h5>基礎</h5>
          <p>ALEX</p>
        </div>
      </div>

      <div
        className="class-section-two-img-div-one"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        <div>
          <img src={image1} alt="" className="class-section-two-img1" />
        </div>
        <div className="class-section-two-time-one">60min</div>
        <div className="class-section-two-p-div-one">
          <h5>進階</h5>
          <p>LOVE</p>
        </div>
      </div>
    </div>
  );
};

export default ClassSectionTwoImgCardTwo;
