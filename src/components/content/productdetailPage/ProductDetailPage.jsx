import React from "react";
import Brand from "../Brand";
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
          <div className="left_banner left-sidebar-widget mt_30 mb_50">
            <a href="#">
              <img
                src="/images/left1.jpg"
                alt="Left Banner"
                className="img-responsive"
              />
            </a>
          </div>
          <LeftColTopProducts />
        </div>
        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
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
