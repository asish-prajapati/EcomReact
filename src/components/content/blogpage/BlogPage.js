import React from "react";
import Category from "../../leftComps/Category";

import LatestPost from "../../leftComps/LatestPost";
import BlogGrid from "../../otherComps/BlogGrid";
import Banner1 from "../../leftComps/Banner1";
import Breadcrumb from "../../otherComps/Breadcrumb";

function BlogPage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <Category />
          <Banner1 />
          <Category />
          <LatestPost />
        </div>
        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          <Breadcrumb title="Blog" />
          <BlogGrid />
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
