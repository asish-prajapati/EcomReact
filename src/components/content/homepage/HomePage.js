import React from "react";
import Banner from "../../rightComps/Banner";
import Slider1 from "../../rightComps/Slider1";
import Slider2 from "../../rightComps/Slider2";
import Slider3 from "../../rightComps/Slider3";
import Slider4 from "../../rightComps/Slider4";
import SubBanner1 from "../../rightComps/SubBanner1";
import SubBanner2 from "../../rightComps/SubBanner2";
import SubBanner3 from "../../rightComps/SubBanner3";
import Category from "../../leftComps/Category";
import TopProducts from "../../leftComps/TopProducts";
import Widget from "../../leftComps/Widget";
import Banner1 from "../../leftComps/Banner1";
import Banner2 from "../../leftComps/Banner2";
import Testimonial from "../../leftComps/Testimonial";
import Tag from "../../leftComps/Tag";

function HomePage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <Category />
          <Banner1 />
          <Widget />
          <TopProducts />
          <Banner2 />
          <Testimonial />
          <Tag />
        </div>
        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          <Banner />
          <SubBanner1 />
          <Slider1 />
          <SubBanner2 />
          <Slider2 />
          <SubBanner3 />
          <Slider3 />
          <Slider4 />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
