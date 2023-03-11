import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ClassSectionTwoImgCard from "./components/ClassSectionTwoImgCard";
import ClassSectionTwoImgCardTwo from "./components/ClassSectionTwoImgCardTwo";
import TeacherCard from "./components/TeacherCard";
import teacherdata from "../../data/classdata";
import Classimg1 from "../../image/classimage/classimg1.png";
import Classimg2 from "../../image/classimage/sectiontwo/classimg2.png";
import Classimg3 from "../../image/classimage/sectiontwo/classimg3.png";
import Classimg4 from "../../image/classimage/sectiontwo/classimg4.png";
import Classimg5 from "../../image/classimage/sectiontwo/classimg5.png";
import Classimg6 from "../../image/classimage/sectiontwo/classimg6.png";
import Classimg7 from "../../image/classimage/sectiontwo/classimg7.png";
import Classimg8 from "../../image/classimage/sectiontwo/classimg8.png";
import Classimg9 from "../../image/classimage/sectiontwo/classimg9.png";

const Class = () => {
  const { teacherList } = teacherdata;

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="class-div">
      <section className="class-section-one">
        <div className="class-section-one-title-div">
          <h2>課程介紹</h2>
        </div>

        <div
          className="class-section-one-limited-div"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <div>
            <img src={Classimg1} alt="" />
          </div>
          <div className="class-section-one-limited-word-div">
            <div>
              <h3>本月限定課程 - 抽象繪畫</h3>
            </div>
            <div className="class-section-one-limited-teacher">
              <h4>授課老師 Amy Wu</h4>
              <div>60min</div>
            </div>
            <div>
              <p>
                由曾於美國、法國、德國攻讀藝術繪畫博士的Amy Wu老師客座駐點一個月
                開課授課。課程從頭開始，老師將手把手帶領你，
                從畫紙、顏料、畫筆一路等繪畫器材的介紹與挑選，到抽象畫的技巧與實作，
                以及畫作完成後的保存與收藏，最後則是繪畫展覽的籌備與展望。
                此外在課程中了師也將詳細分享各國不同的繪畫風格與實務應用的差異，
                藉由老師細心指導，讓同學能更快掌握。
              </p>
            </div>
            <button>立即預約</button>
          </div>
        </div>
      </section>

      <section className="class-section-two">
        <div className="class-section-two-select-div">
          <div>
            <input type="text" placeholder="搜尋課程" />
            <button>搜尋</button>

            <label htmlFor="class-select"></label>

            <select name="class" id="class-select">
              <option value="">選擇課程</option>
              <option value="watercolor">水彩</option>
              <option value="oil paints">油畫</option>
              <option value="colored pencil">色鉛筆</option>
              <option value="sketch">素描</option>
            </select>
          </div>
        </div>

        <div className="class-section-two-main-div">
          <div className="class-section-two-main-div-box">
            <div className="class-section-two-main-div-box-imgdiv">
              <ClassSectionTwoImgCard image1={Classimg2} image2={Classimg3} />
              <ClassSectionTwoImgCardTwo
                image1={Classimg4}
                image2={Classimg5}
              />
              <ClassSectionTwoImgCard image1={Classimg6} image2={Classimg7} />
              <ClassSectionTwoImgCardTwo
                image1={Classimg8}
                image2={Classimg9}
              />
            </div>
            <div className="class-section-two-main-div-box-word-div">
              <h3>PaintingLife 上課須知：</h3>
              <p>
                本課程為配合老師時間，無法提供錄影及補課服務，
                請準時參與課程已達到最佳學習效果，同時保障自身權益。
                課程將提供所有你需要的繪畫用具，包含畫紙、畫筆、顏料與畫架。
                若您需要客製化的繪畫用具或是升級任何繪畫用具，我們也都有販售，從入門到專業級的產品都可供您選擇。
                課程中請跟隨老師指示，配合教學一步步的確實練習。
                課程過程中若感到任何不適與問題，請馬上告知與老師商量討論。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="class-section-three">
        <div className="class-section-three-title">
          <h3>師資介紹</h3>
        </div>
        <div className="class-section-three-teacher-card-div">
          {teacherList.map((item) => (
            <TeacherCard
              key={item.name}
              image={item.image}
              experience={item.experience}
              p={item.p}
              name={item.name}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Class;
