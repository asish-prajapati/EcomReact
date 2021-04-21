import React from "react";
import Brand from "../Brand";
import Breadcrumb from "../Breadcrumb";
import LeftColBanner1 from "../LeftColBanner1";
import LeftColCategory from "../LeftColCategory";
import LeftColTopProducts from "../LeftColTopProducts";
import RightColProductDetail from "../RightColProductDetail";
import RightColRelatedProducts from "../RightColRelatedProducts";
import RightColReviews from "../RightColReviews";

function ProductDetailPage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <LeftColCategory />
          <LeftColBanner1 />
          <LeftColTopProducts />
        </div>
        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          <Breadcrumb title="Products / Product" />
          <RightColProductDetail />
          <RightColReviews />
          <RightColRelatedProducts />
        </div>
        <Brand />
      </div>
    </div>
  );
}

export default ProductDetailPage;
