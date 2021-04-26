import React from "react";
import Brand from "../../otherComps/Brand";
import Breadcrumb from "../../otherComps/Breadcrumb";
import Banner1 from "../../leftComps/Banner1";
import Category from "../../leftComps/Category";
import TopProducts from "../../leftComps/TopProducts";
import ProductDetail from "../../rightComps/ProductDetail";
import RelatedProducts from "../../rightComps/RelatedProducts";
import Reviews from "../../rightComps/Reviews";

function ProductDetailPage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <Category />
          <Banner1 />
          <TopProducts />
        </div>
        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          <Breadcrumb title="Products / Product" />
          <ProductDetail />
          <Reviews />
          <RelatedProducts />
        </div>
        <Brand />
      </div>
    </div>
  );
}

export default ProductDetailPage;
