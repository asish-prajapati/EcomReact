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
import left1 from "../../../images/left1.jpg";
import left2 from "../../../images/left2.jpg";
import LeftColTestimonial from "../LeftColTestimonial";
import LeftColTag from "../LeftColTag";

function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <LeftColCategory />
          <div className="left_banner left-sidebar-widget mt_30 mb_50">
            <a href="#">
              <img src={left1} alt="Left Banner" className="img-responsive" />
            </a>
          </div>
          <LeftColWidget />
          <LeftColTopProducts />
          <div className="left_banner left-sidebar-widget mb_50">
            <a href="#">
              <img src={left2} alt="Left Banner" className="img-responsive" />
            </a>
          </div>
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
