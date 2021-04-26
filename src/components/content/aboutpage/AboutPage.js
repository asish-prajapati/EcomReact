import React from "react";
import Category from "../../leftComps/Category";
import About from "../../rightComps/About";
import AboutWidget from "../../rightComps/AboutWidget";
import TeamSection from "../../rightComps/TeamSection";
import Banner1 from "../../leftComps/Banner1";

function AboutPage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <Category />
          <Banner1 />
        </div>

        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          <About />
          <AboutWidget />
          <TeamSection />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
