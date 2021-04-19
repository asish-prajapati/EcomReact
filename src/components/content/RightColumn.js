import React from "react";
import RightColBanner from "./RightColBanner";
import RightColSlider1 from "./RightColSlider1";
import RightColSlider2 from "./RightColSlider2";
import RightColSlider3 from "./RightColSlider3";
import RightColSlider4 from "./RightColSlider4";
import RightColSubBanner1 from "./RightColSubBanner1";
import RightColSubBanner2 from "./RightColSubBanner2";
import RightColSubBanner3 from "./RightColSubBanner3";

function RightColumn() {
  return (
    <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
      <RightColBanner />
      <RightColSubBanner1 />
      <RightColSlider1 />
      <RightColSubBanner2 />
      <RightColSlider2 />
      <RightColSubBanner3 />
      <RightColSlider3 />
      <RightColSlider4 />
    </div>
  );
}

export default RightColumn;
