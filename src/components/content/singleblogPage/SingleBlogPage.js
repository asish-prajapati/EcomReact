import React from "react";
import Category from "../../leftComps/Category";
import BlogCategory from "../../leftComps/BlogCategory";
import LatestPost from "../../leftComps/LatestPost";
import SingleBlog from "../../rightComps/SingleBlog";
import Banner1 from "../../leftComps/Banner1";
import Breadcrumb from "../../otherComps/Breadcrumb";

function SingleBlogPage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <Category />
          <Banner1 />
          <BlogCategory />
          <LatestPost />
        </div>

        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          <Breadcrumb title="Blog / Post" />
          <SingleBlog />
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPage;
