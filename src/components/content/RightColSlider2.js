import React from "react";
// import OwlCarousel from "react-owl-carousel";

function RightColSlider2() {
  return (
    <div id="sale-product">
      <div className="heading-part mb_20 ">
        <h2 className="main_title">Home Electronics</h2>
      </div>
      <div className="Specials owl-carousel">
        {/* <OwlCarousel className="Specials" items={1} margin={10} nav> */}
        {[0, 1, 2].map((item, index) => (
          <div key={index} className="item product-layout product-list">
            <div className="product-thumb">
              <div className="image product-imageblock">
                {" "}
                <a href="product_detail_page.html">
                  {" "}
                  <img
                    data-name="product_image"
                    src="images/product/product8.jpg"
                    alt="iPod classNameic"
                    title="iPod classNameic"
                    className="img-responsive"
                  />{" "}
                  <img
                    src="images/product/product8-1.jpg"
                    alt="iPod classNameic"
                    title="iPod classNameic"
                    className="img-responsive"
                  />{" "}
                </a>{" "}
              </div>
              <div className="caption product-detail text-left">
                <h6 data-name="product_name" className="product-name">
                  <a href="#" title="Casual Shirt With Ruffle Hem">
                    Latin literature from 45 BC, making it over old.
                  </a>
                </h6>
                <div className="rating">
                  {" "}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x"></i>
                    <i className="fa fa-star fa-stack-1x"></i>
                  </span>{" "}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x"></i>
                    <i className="fa fa-star fa-stack-1x"></i>
                  </span>{" "}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x"></i>
                    <i className="fa fa-star fa-stack-1x"></i>
                  </span>{" "}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x"></i>
                    <i className="fa fa-star fa-stack-1x"></i>
                  </span>{" "}
                  <span className="fa fa-stack">
                    <i className="fa fa-star-o fa-stack-1x"></i>
                    <i className="fa fa-star fa-stack-x"></i>
                  </span>{" "}
                </div>
                <span className="price">
                  <span className="amount">
                    <span className="currencySymbol">$</span>70.00
                  </span>
                </span>
                <p className="product-desc mt_20">
                  {" "}
                  More room to move. With 80GB or 160GB of storage and up to 40
                  hours of battery life, the new iPod classNameic lets you enjoy
                  up to 40,000 songs or up to 200 hours of video or any
                  combination wherever you go.Cover Flow. Browse through your
                  music collection by flipping..
                </p>
                <div className="timer mt_80">
                  <div className="days"></div>
                  <div className="hours"></div>
                  <div className="minutes"></div>
                  <div className="seconds"></div>
                </div>
                <div className="button-group text-center">
                  <div className="wishlist">
                    <a href="#">
                      <span>wishlist</span>
                    </a>
                  </div>
                  <div className="quickview">
                    <a href="#">
                      <span>Quick View</span>
                    </a>
                  </div>
                  <div className="compare">
                    <a href="#">
                      <span>Compare</span>
                    </a>
                  </div>
                  <div className="add-to-cart">
                    <a href="#">
                      <span>Add to cart</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* </OwlCarousel> */}
      </div>
    </div>
  );
}

export default RightColSlider2;
