import React from "react";
// import OwlCarousel from "react-owl-carousel";

function Slider3() {
  return (
    <div className="row">
      {["Featured", "Bestseller", "New Item's"].map((title, index) => (
        <div key={index} className="col-md-4">
          <div className="heading-part mb_20 ">
            <h2 className="main_title">{title}</h2>
          </div>
          <div id="featu-pro" className="owl-carousel">
            {/* <OwlCarousel id="featu-pro" items={1} margin={10} nav> */}
            {[0, 1, 2, 3].map((item, index) => (
              <ul className="row " key={index}>
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock">
                        <a href="product_detail_page.html">
                          <img
                            className="img-responsive"
                            title="iPod classNameic"
                            alt="iPod classNameic"
                            src="images/product/product5.jpg"
                          />
                          <img
                            className="img-responsive"
                            title="iPod classNameic"
                            alt="iPod classNameic"
                            src="images/product/product5-1.jpg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name">
                        <a href="#">
                          Latin literature from 45 BC, making it over old.
                        </a>
                      </h6>
                      <div className="rating">
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                          <i className="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                          <i className="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                          <i className="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                          <i className="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                          <i className="fa fa-star fa-stack-x"></i>
                        </span>
                      </div>
                      <span className="price">
                        <span className="amount">
                          <span className="currencySymbol">$</span>70.00
                        </span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock">
                        <a href="product_detail_page.html">
                          <img
                            className="img-responsive"
                            title="iPod classNameic"
                            alt="iPod classNameic"
                            src="images/product/product1.jpg"
                          />
                          <img
                            className="img-responsive"
                            title="iPod classNameic"
                            alt="iPod classNameic"
                            src="images/product/product1-1.jpg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name">
                        <a href="#">
                          Latin literature from 45 BC, making it over old.
                        </a>
                      </h6>
                      <div className="rating">
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                          <i className="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                          <i className="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                          <i className="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                          <i className="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                          <i className="fa fa-star fa-stack-x"></i>
                        </span>
                      </div>
                      <span className="price">
                        <span className="amount">
                          <span className="currencySymbol">$</span>70.00
                        </span>
                      </span>
                    </div>
                  </div>
                </li>
                <li className="item product-layout-left mb_20">
                  <div className="product-list col-xs-4">
                    <div className="product-thumb">
                      <div className="image product-imageblock">
                        <a href="product_detail_page.html">
                          <img
                            className="img-responsive"
                            title="iPod classNameic"
                            alt="iPod classNameic"
                            src="images/product/product3.jpg"
                          />
                          <img
                            className="img-responsive"
                            title="iPod classNameic"
                            alt="iPod classNameic"
                            src="images/product/product3-1.jpg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-8">
                    <div className="caption product-detail">
                      <h6 className="product-name">
                        <a href="#">
                          Latin literature from 45 BC, making it over old.
                        </a>
                      </h6>
                      <div className="rating">
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                          <i className="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                          <i className="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                          <i className="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                          <i className="fa fa-star fa-stack-1x"></i>
                        </span>
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-1x"></i>
                          <i className="fa fa-star fa-stack-x"></i>
                        </span>
                      </div>
                      <span className="price">
                        <span className="amount">
                          <span className="currencySymbol">$</span>70.00
                        </span>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            ))}
            {/* </OwlCarousel> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Slider3;
