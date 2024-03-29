import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import HomeSectionTwoCard from "./components/HomeSectionTwoCard";
import HomeSectionThreeCard from "./components/HomeSectionThreeCard";
import HomeSectionSixCard from "./components/HomeSectionSixCard";
import HomeSectionSevenCard from "./components/HomeSectionSevenCard";
import homedata from "../../data/homedata";
import Homeimg1 from "../../image/homeimage/sectionone/homeimg1.png";
import Homeimg5 from "../../image/homeimage/sectionthree/homeimg5.png";
import Homeimg9 from "../../image/homeimage/sectionfour/homeimg9.png";
import Homeimg10 from "../../image/homeimage/sectionfour/homeimg10.png";
import Homeimg11 from "../../image/homeimage/sectionfour/homeimg11.png";
import Homeimg12 from "../../image/homeimage/sectionfive/homeimg12.png";
import Homeimg13 from "../../image/homeimage/sectionfive/homeimg13.png";

const Home = () => {
  const { homeSectionTwoCardList } = homedata;
  const { homeSectionThreeCardList } = homedata;
  const { homeSectionSixCardList } = homedata;
  const { homeSectionSevenCardList } = homedata;

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-div">
      <section className="home-section-one">
        <img src={Homeimg1} alt="Homeimg1" id="homeimg-one" />
        <div
          className="home-section-one-p-div"
          data-aos="fade-down"
          data-aos-duration="3000"
        >
          <p>繪畫新體驗</p>
          <h1>
            <span>PaintingLife </span>
            <br />
            彩繪你的生活
          </h1>
          <h2>留一點時間幫生活填色，享受人生更多色彩！</h2>
          <div>
            <button className="home-section-one-button">立即預約</button>
            <button className="home-section-one-buttontwo">立即預約</button>
          </div>
        </div>
      </section>

      <section className="home-section-two">
        <div className="home-section-two-font-div">
          <h3>彩繪畫布，感受身心</h3>
          <p>繪畫生活可以帶給你...</p>
        </div>
        <div className="home-section-two-card-div">
          {homeSectionTwoCardList.map((item) => (
            <HomeSectionTwoCard
              key={item.image}
              image={item.image}
              word={item.word}
              p={item.p}
            />
          ))}
        </div>
      </section>

      <section className="home-section-three">
        <div className="home-section-three-img-div">
          <img
            src={Homeimg5}
            alt="Homeimg5"
            data-aos="fade-right"
            data-aos-duration="3000"
          />
        </div>

        <div className="home-section-three-word-div">
          <div className="home-section-three-p-div">
            <h3>頂尖師資、專業教學</h3>
            <p>
              強力師資，經歷豐富，協會認證。運用引導式教學，針對不同需求的人制定專屬課程。
            </p>
          </div>
          <div className="home-section-three-card-div">
            {homeSectionThreeCardList.map((item) => (
              <HomeSectionThreeCard
                key={item.image}
                image={item.image}
                word={item.word}
                teacher={item.teacher}
                experience={item.experience}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="home-section-four">
        <div
          className="home-section-four-img-div"
          data-aos="zoom-out-right"
          data-aos-duration="3000"
        >
          <div className="home-section-four-img-one">
            <img src={Homeimg9} alt="Homeimg9" className="Homeimg9" />
          </div>
          <div className="home-section-four-img-two">
            <img src={Homeimg10} alt="Homeimg10" className="Homeimg10" />
            <img src={Homeimg11} alt="Homeimg11" className="Homeimg11" />
          </div>
        </div>

        <div className="home-section-four-word-div">
          <div
            className="home-section-four-p-div"
            data-aos="zoom-out-left"
            data-aos-duration="3000"
          >
            <h3>舒適空間、靜心放鬆</h3>
            <p>
              我們都渴望平靜安穩的生活，擁有一處能夠靜心的角落，安撫每天繁雜忙碌的心。
            </p>
            <Link to="/classroom">
              <p>
                <BsArrowLeft />
                環境介紹
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section-five">
        <div
          className="home-section-five-word-div"
          data-aos="zoom-in-right"
          data-aos-duration="3000"
        >
          <div className="home-section-five-p-div">
            <h3>精心設計、課程多元</h3>
            <p>教師帶領多元課程，釋放壓力，給您前所未有的繪畫全新體驗。</p>
            <Link to="/class">
              <p>
                課程介紹
                <BsArrowRight />
              </p>
            </Link>
          </div>
        </div>

        <div
          className="home-section-five-img-div"
          data-aos="zoom-in-left"
          data-aos-duration="3000"
        >
          <div className="home-section-five-img-one">
            <img src={Homeimg12} alt="Homeimg12" className="homeimg12" />
            <img src={Homeimg13} alt="Homeimg13" className="homeimg13" />
          </div>
        </div>
      </section>

      <section className="home-section-six">
        <div className="home-section-six-font-div">
          <h3>方案選擇</h3>
          <p>繪畫生活可以帶給你...</p>
        </div>
        <div className="home-section-six-card-div">
          {homeSectionSixCardList.map((item) => (
            <HomeSectionSixCard
              key={item.image}
              image={item.image}
              word={item.word}
              select={item.select}
              price={item.price}
            />
          ))}
        </div>
      </section>

      <section className="home-section-seven">
        <div className="home-section-seven-font-div">
          <h3>聽聽他們怎麼說</h3>
        </div>
        <div className="home-section-seven-card-div">
          {homeSectionSevenCardList.map((item) => (
            <HomeSectionSevenCard
              key={item.image}
              image={item.image}
              infor={item.infor}
              comment={item.comment}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
