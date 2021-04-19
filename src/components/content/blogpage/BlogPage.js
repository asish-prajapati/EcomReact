import React from "react";
import LeftColBlogCategory from "../LeftColBlogCategory";
import LeftColCategory from "../LeftColCategory";
import LeftColLatestPost from "../LeftColLatestPost";
import BlogGrid from "./BlogGrid";

function BlogPage() {
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
          <LeftColBlogCategory />
          <LeftColLatestPost />
        </div>
        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          <BlogGrid />
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
