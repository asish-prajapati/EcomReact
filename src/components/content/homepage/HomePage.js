import React from "react";
import RightColBanner from "../RightColBanner";
import RightColSlider1 from "../RightColSlider1";
import RightColSlider2 from "../RightColSlider2";
import RightColSlider3 from "../RightColSlider3";
import RightColSlider4 from "../RightColSlider4";
import RightColSubBanner1 from "../RightColSubBanner1";
import RightColSubBanner2 from "../RightColSubBanner2";
import RightColSubBanner3 from "../RightColSubBanner3";
import LeftColCategory from "../LeftColCategory";
import LeftColTopProducts from "../LeftColTopProducts";
import LeftColWidget from "../LeftColWidget";
import LeftColBanner1 from "../LeftColBanner1";
import LeftColBanner2 from "../LeftColBanner2";
import LeftColTestimonial from "../LeftColTestimonial";
import LeftColTag from "../LeftColTag";

function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <LeftColCategory />
          <LeftColBanner1 />
          <LeftColWidget />
          <LeftColTopProducts />
          <LeftColBanner2 />
          <LeftColTestimonial />
          <LeftColTag />
        </div>
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
      </div>
    </div>
  );
}

export default HomePage;
