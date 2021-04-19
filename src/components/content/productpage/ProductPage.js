import React from "react";
import Brand from "../Brand";
import left1 from "../../../images/left1.jpg";

import LeftColTopProducts from "../LeftColTopProducts";
import LeftColCategory from "../LeftColCategory";
import ProductGrid from "./ProductGrid";
import LeftColFilter from "../LeftColFilter";

function ProductPage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <LeftColCategory />
          <LeftColFilter />
          <div className="left_banner left-sidebar-widget mt_30 mb_50">
            <a href="#">
              <img src={left1} alt="Left Banner" className="img-responsive" />
            </a>
          </div>

          <LeftColTopProducts />
        </div>
        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          <ProductGrid />
        </div>
        <Brand />
      </div>
    </div>
  );
}

export default ProductPage;
