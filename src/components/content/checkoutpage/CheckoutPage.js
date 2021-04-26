import React from "react";
import Brand from "../../otherComps/Brand";
import Banner1 from "../../leftComps/Banner1";
import Category from "../../leftComps/Category";
import TopProducts from "../../leftComps/TopProducts";
import Checkout from "../../rightComps/Checkout";
import Breadcrumb from "../../otherComps/Breadcrumb";

function CheckoutPage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <Category />
          <Banner1 />
          <TopProducts />
        </div>
        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          <Breadcrumb title="Checkout" />
          <Checkout />
        </div>
        <Brand />
      </div>
    </div>
  );
}

export default CheckoutPage;
