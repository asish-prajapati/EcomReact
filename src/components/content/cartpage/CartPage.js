import React from "react";
import LeftColCategory from "../LeftColCategory";
import LeftColTopProducts from "../LeftColTopProducts";
import RightColCart from "../RightColCart";
import LeftColBanner1 from "../LeftColBanner1";
import Breadcrumb from "../Breadcrumb";

function CartPage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <LeftColCategory />
          <LeftColBanner1 />
          <LeftColTopProducts />
        </div>
        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          <Breadcrumb title="Shopping Cart" />
          <RightColCart />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
