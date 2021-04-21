import React from "react";
import LeftColCategory from "../LeftColCategory";
import RightColAbout from "../RightColAbout";
import RightColAboutWidget from "../RightColAboutWidget";
import RightColTeamSection from "../RightColTeamSection";
import LeftColBanner1 from "../LeftColBanner1";

function AboutPage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <LeftColCategory />
          <LeftColBanner1 />
        </div>

        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          <RightColAbout />
          <RightColAboutWidget />
          <RightColTeamSection />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
