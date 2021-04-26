import React from "react";
import Banner1 from "../../leftComps/Banner1";
import Category from "../../leftComps/Category";
import ContactUs from "../../rightComps/ContactUs";

function ContactUsPage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <Category />
          <Banner1 />
        </div>
        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
