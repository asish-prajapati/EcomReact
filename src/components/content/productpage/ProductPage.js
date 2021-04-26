import React from "react";
import Brand from "../../otherComps/Brand";
import Banner1 from "../../leftComps/Banner1";
import TopProducts from "../../leftComps/TopProducts";
import Category from "../../leftComps/Category";
import ProductGrid from "../../otherComps/ProductGrid";
import Filter from "../../leftComps/Filter";
import Breadcrumb from "../../otherComps/Breadcrumb";

function ProductPage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <Category />
          <Filter />
          <Banner1 />

          <TopProducts />
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
