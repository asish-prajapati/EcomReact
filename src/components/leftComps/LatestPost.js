import React from "react";

function LatestPost() {
  return (
    <div className="left-blog left-sidebar-widget mb_50">
      <div className="heading-part mb_20 ">
        <h2 className="main_title">Latest Post</h2>
      </div>
      <div id="left-blog">
        <div className="row ">
          <div className="blog-item mb_20">
            <div className="post-format col-xs-4">
              <div className="thumb post-img">
                <a href="single_blog.html">
                  <img src="images/blog/blog_img_01.jpg" alt="HealthCare" />
                </a>
              </div>
            </div>
            <div className="post-info col -xs-8 ">
              <h5>
                <a href="single_blog.html">
                  Unknown printer took a galley book.
                </a>
              </h5>
              <div className="date pull-left">
                <i className="fa fa-calendar" aria-hidden="true"></i>11 May 2017
              </div>
            </div>
          </div>
          <div className="blog-item mb_20">
            <div className="post-format col-xs-4">
              <div className="thumb post-img">
                <a href="single_blog.html">
                  <img src="images/blog/blog_img_02.jpg" alt="HealthCare" />
                </a>
              </div>
            </div>
            <div className="post-info col-xs-8 ">
              <h5>
                <a href="single_blog.html">
                  Unknown printer took a galley book.
                </a>
              </h5>
              <div className="date pull-left">
                <i className="fa fa-calendar" aria-hidden="true"></i>11 May 2017
              </div>
            </div>
          </div>
          <div className="blog-item mb_20">
            <div className="post-format col-xs-4">
              <div className="thumb post-img">
                <a href="single_blog.html">
                  <img src="images/blog/blog_img_03.jpg" alt="HealthCare" />
                </a>
              </div>
            </div>
            <div className="post-info col-xs-8 ">
              <h5>
                <a href="single_blog.html">
                  Unknown printer took a galley book.
                </a>
              </h5>
              <div className="date pull-left">
                <i className="fa fa-calendar" aria-hidden="true"></i>11 May 2017
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestPost;
