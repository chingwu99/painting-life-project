import React from "react";
import Classimg1 from "../../image/classimage/classimg1.png";
import ClassSectionTwoImgCard from "./components/ClassSectionTwoImgCard";
import Classimg2 from "../../image/classimage/sectiontwo/classimg2.png";
import Classimg3 from "../../image/classimage/sectiontwo/classimg3.png";
import Classimg4 from "../../image/classimage/sectiontwo/classimg4.png";
import Classimg5 from "../../image/classimage/sectiontwo/classimg5.png";
import Classimg6 from "../../image/classimage/sectiontwo/classimg6.png";
import Classimg7 from "../../image/classimage/sectiontwo/classimg7.png";
import Classimg8 from "../../image/classimage/sectiontwo/classimg8.png";
import Classimg9 from "../../image/classimage/sectiontwo/classimg9.png";

const Class = () => {
  return (
    <div className="class-div">
      <section className="class-section-one">
        <div className="class-section-one-title-div">
          <h2>課程介紹</h2>
        </div>

        <div className="class-section-one-limited-div">
          <div>
            <img src={Classimg1} alt="" />
          </div>
          <div className="class-section-one-limited-word-div">
            <div>
              <h3>本月限定課程 - 空中瑜珈</h3>
            </div>
            <div className="class-section-one-limited-teacher">
              <h4>授課老師 Carol Tang</h4>
              <div>60min</div>
            </div>
            <div>
              <p>
                使用掛布懸掛在半空，進行哈達瑜珈體位法練習
                藉由地心引力的重力原理 鍛鍊核心肌群，舒緩脊椎壓力
                訓練身體協調性，深層放鬆身體
                課堂裡老師會視同學狀況安排教導倒立動作
                對於不敢嘗試倒立的同學來說 藉由掛布的支持與保護
                加上老師細心指導，讓同學能更快掌握
              </p>
            </div>
            <button>立即預約</button>
          </div>
        </div>
      </section>

      <section className="class-section-two">
        <div className="class-section-two-select-div">
          <div>
            <input type="text" placeholder="請輸入要搜尋的課程" />
            <button>搜尋</button>

            <label for="class-select"></label>

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
            <div>
              <ClassSectionTwoImgCard image1={Classimg2} image2={Classimg3} />
              <ClassSectionTwoImgCard
                image1={Classimg4}
                image2={Classimg5}
                className="ClassSectionTwoImgCard-reverse"
              />
              <ClassSectionTwoImgCard image1={Classimg6} image2={Classimg7} />
              <ClassSectionTwoImgCard
                image1={Classimg8}
                image2={Classimg9}
                className="ClassSectionTwoImgCard-reverse"
              />
            </div>
            <div>
              <p>
                DOYOGA 上課須知： <br />
                請攜帶適當的瑜珈墊和一條長毛巾配合課程使用。
                運動中請穿著有彈性、吸汗、透氣為原則的衣物，盡量穿著較貼身的運動衣，以便教練指導與自我矯正。
                運動中切記補充適當的水分、保持腹式呼吸，以鼻吸氣，以口呼氣為原則。
                運動中請保持微收小腹的原則，肩膀放鬆、頭頂向上延伸，請跟隨教練指示，配合呼吸一步步的確實練習。
                運動過程中若感到任何不適，請馬上停止且與老師商量討論。
                若懷孕或特殊疾病請先告知。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Class;
