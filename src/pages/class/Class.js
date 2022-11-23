import React from "react";

const Class = () => {
  return (
    <div className="class-div">
      <section className="class-section-one">
        <div className="class-section-one-title-div">
          <h2>課程介紹</h2>
        </div>

        <div className="class-section-one-limited-div">
          <div>picture</div>
          <div>
            <div>
              <h3>本月限定課程 - 空中瑜珈</h3>
            </div>
            <div className="class-section-one-limited-teacher">
              <p>授課老師 Carol Tang</p>
              <button>60min</button>
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
            <div>立即預約</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Class;
