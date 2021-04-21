import React from "react";
import LeftColCategory from "../LeftColCategory";
import LeftColBlogCategory from "../LeftColBlogCategory";
import LeftColLatestPost from "../LeftColLatestPost";
import RightColSingleBlog from "../RightColSingleBlog";
import LeftColBanner1 from "../LeftColBanner1";
import Breadcrumb from "../Breadcrumb";

function SingleBlogPage() {
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <LeftColCategory />
          <LeftColBanner1 />
          <LeftColBlogCategory />
          <LeftColLatestPost />
        </div>

        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          <Breadcrumb title="Blog / Post" />
          <RightColSingleBlog />
        </div>
      </div>
    </div>
  );
}

export default SingleBlogPage;
