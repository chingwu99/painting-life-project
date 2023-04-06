import Classroomimage1 from "../../image/classroomimage/classroomimage1.png";
import classroomdata from "../../data/classroomdata";
import ClassroomSectionOneImgCard from "./components/ClassroomSectionOneImgCard";
import ClassroomSectionTwoImgCard from "./components/ClassroomSectionTwoImgCard";
import { useEffect } from "react";
const Classroom = () => {
  const { imgList } = classroomdata;
  const { imgTwoList } = classroomdata;
  const { imgThreeList } = classroomdata;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className="classroom-section-one">
        <div className="classroom-section-one-div">
          <div className="classroom-section-one-img-div">
            <div>
              <img src={Classroomimage1} alt="" className="classroomimage1" />
            </div>
            <div className="classroom-section-one-img-div-inner-two">
              <div>
                {imgList.map((item) => (
                  <ClassroomSectionOneImgCard
                    key={item.teacher}
                    image={item.image}
                    name={item.name}
                    teacher={item.teacher}
                  />
                ))}
              </div>
              <div>
                {imgTwoList.map((item) => (
                  <ClassroomSectionOneImgCard
                    key={item.teacher}
                    image={item.image}
                    name={item.name}
                    teacher={item.teacher}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="classroom-section-one-word-div">
            <div className="classroom-section-one-word-div-card">
              <p>DOYOGA 提供： </p>
              <p>
                四間教室:A、B 團體課教室、C、D 個人訓練室。
                教學環境、輔具：每次課後會進行殺菌清潔，乾淨免擔心。
                男女置物櫃、展覽區：分別設置在館內 A、B 區。
                舒適交誼廳，咖啡茶水無限供應，假日提供午間蔬食餐點。 立即預約
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="classroom-section-two">
        <div className="classroom-section-two-div">
          <div className="classroom-section-two-div-titlediv">
            <p>推薦課程</p>
          </div>
          <div className="classroom-section-two-div-imgdiv">
            {imgThreeList.map((item) => (
              <ClassroomSectionTwoImgCard
                key={item.key}
                image={item.image}
                classRoom={item.classRoom}
                teacher={item.teacher}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Classroom;
