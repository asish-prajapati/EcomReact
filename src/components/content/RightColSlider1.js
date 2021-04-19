import React, { useState } from "react";
import NewArrivals from "./NewArrivals";

function RightColSlider1() {
  const [activeState, setActiveState] = useState("nArrivals");

  const setActiveTab = (action, e) => {
    setActiveState(action);
  };
  return (
    <div id="product-tab" className="mt_40">
      <div className="heading-part mb_20 ">
        <h2 className="main_title">Home Electronics</h2>
      </div>
      <ul className="nav text-right">
        <li className="active">
          <a onClick={setActiveTab.bind(this, "nArrivals")}>New Arrivals</a>
        </li>
        <li>
          <a onClick={setActiveTab.bind(this, "bestSeller")}>Bestsellers</a>
        </li>
        <li>
          <a onClick={setActiveTab.bind(this, "featured")}>Featured</a>
        </li>
      </ul>
      <div className="tab-content clearfix box">
        {activeState === "nArrivals" ? <NewArrivals /> : null}
        {activeState === "bestSeller" ? <NewArrivals /> : null}
        {activeState === "featured" ? <NewArrivals /> : null}
      </div>
    </div>
  );
}

export default RightColSlider1;
