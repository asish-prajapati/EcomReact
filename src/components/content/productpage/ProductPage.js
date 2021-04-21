import React from "react";
import Brand from "../Brand";
import LeftColBanner1 from "../LeftColBanner1";
import LeftColTopProducts from "../LeftColTopProducts";
import LeftColCategory from "../LeftColCategory";
import ProductGrid from "./ProductGrid";
import LeftColFilter from "../LeftColFilter";
import Breadcrumb from "../Breadcrumb";

function ProductPage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <LeftColCategory />
          <LeftColFilter />
          <LeftColBanner1 />

          <LeftColTopProducts />
        </div>
        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          <Breadcrumb title="Products" />
          <ProductGrid />
        </div>
        <Brand />
      </div>
    </div>
  );
}

export default ProductPage;
