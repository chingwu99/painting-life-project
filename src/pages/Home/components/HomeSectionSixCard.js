import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeSectionSixCard = ({ price, image, word, select }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="home-section-six-card"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="home-section-six-card-img-div">
        <img src={image} alt="" />
      </div>
      <div className="home-section-six-card-p-div">
        <h4>{select}</h4>
        <h5>{price}</h5>
        <p>{word}</p>
      </div>
      <div>
        <button>選擇</button>
      </div>
    </div>
  );
};

export default HomeSectionSixCard;
