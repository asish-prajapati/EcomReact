import React from "react";
import OwlCarousel from "react-owl-carousel";
import blog_img_01 from "../../images/blog/blog_img_01.jpg";
import blog_img_02 from "../../images/blog/blog_img_02.jpg";
import blog_img_03 from "../../images/blog/blog_img_03.jpg";
import blog_img_04 from "../../images/blog/blog_img_04.jpg";
import blog_img_05 from "../../images/blog/blog_img_05.jpg";
import blog_img_06 from "../../images/blog/blog_img_06.jpg";

function RightColSlider4() {
  return (
    <div id="Blog" className="mt_40">
      <div className="heading-part mb_20 ">
        <h2 className="main_title">Latest from the Blog</h2>
      </div>
      <div className="blog-contain box">
        {/* <div className="blog owl-carousel "> */}
        <OwlCarousel className="blog" items={2} margin={10} nav>
          <div className="item">
            <div className="box-holder">
              <div className="thumb post-img">
                <a href="#">
                  {" "}
                  <img src={blog_img_01} alt="HealthCare" />{" "}
                </a>{" "}
              </div>
              <div className="post-info mtb_20 ">
                <h6 className="mb_10 text-uppercase">
                  {" "}
                  <a href="single_blog.html">
                    Unknown printer took a galley book.
                  </a>{" "}
                </h6>
                <p>
                  Aliquam egestas pellentesque est. Etiam a orci Nulla id enim
                  feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.
                </p>
                <div className="date-time">
                  <div className="day"> 11</div>
                  <div className="month">Aug</div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box-holder">
              <div className="thumb post-img">
                <a href="#">
                  {" "}
                  <img src={blog_img_02} alt="HealthCare" />{" "}
                </a>
              </div>
              <div className="post-info mtb_20 ">
                <h6 className="mb_10 text-uppercase">
                  {" "}
                  <a href="single_blog.html">
                    Unknown printer took a galley book.
                  </a>{" "}
                </h6>
                <p>
                  Aliquam egestas pellentesque est. Etiam a orci Nulla id enim
                  feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.
                </p>
                <div className="date-time">
                  <div className="day"> 11</div>
                  <div className="month">Aug</div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box-holder">
              <div className="thumb post-img">
                <a href="#">
                  {" "}
                  <img src={blog_img_03} alt="HealthCare" />{" "}
                </a>
              </div>
              <div className="post-info mtb_20 ">
                <h6 className="mb_10 text-uppercase">
                  {" "}
                  <a href="single_blog.html">
                    Unknown printer took a galley book.
                  </a>{" "}
                </h6>
                <p>
                  Aliquam egestas pellentesque est. Etiam a orci Nulla id enim
                  feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.
                </p>
                <div className="date-time">
                  <div className="day"> 11</div>
                  <div className="month">Aug</div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box-holder">
              <div className="thumb post-img">
                <a href="#">
                  {" "}
                  <img src={blog_img_04} alt="HealthCare" />{" "}
                </a>
              </div>
              <div className="post-info mtb_20 ">
                <h6 className="mb_10 text-uppercase">
                  {" "}
                  <a href="single_blog.html">
                    Unknown printer took a galley book.
                  </a>{" "}
                </h6>
                <p>
                  Aliquam egestas pellentesque est. Etiam a orci Nulla id enim
                  feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.
                </p>
                <div className="date-time">
                  <div className="day"> 11</div>
                  <div className="month">Aug</div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box-holder">
              <div className="thumb post-img">
                <a href="#">
                  {" "}
                  <img src={blog_img_05} alt="HealthCare" />{" "}
                </a>
              </div>
              <div className="post-info mtb_20 ">
                <h6 className="mb_10 text-uppercase">
                  {" "}
                  <a href="single_blog.html">
                    Unknown printer took a galley book.
                  </a>{" "}
                </h6>
                <p>
                  Aliquam egestas pellentesque est. Etiam a orci Nulla id enim
                  feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.
                </p>
                <div className="date-time">
                  <div className="day"> 11</div>
                  <div className="month">Aug</div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box-holder">
              <div className="thumb post-img">
                <a href="#">
                  {" "}
                  <img src={blog_img_06} alt="HealthCare" />{" "}
                </a>
              </div>
              <div className="post-info mtb_20 ">
                <h6 className="mb_10 text-uppercase">
                  {" "}
                  <a href="single_blog.html">
                    Unknown printer took a galley book.
                  </a>{" "}
                </h6>
                <p>
                  Aliquam egestas pellentesque est. Etiam a orci Nulla id enim
                  feugiat ligula ullamcorper scelerisque. Morbi eu luctus nisl.
                </p>
                <div className="date-time">
                  <div className="day"> 11</div>
                  <div className="month">Aug</div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
        {/* </div> */}
      </div>
      {/* <!-- =====  Blog end ===== --> */}
    </div>
  );
}

export default RightColSlider4;
