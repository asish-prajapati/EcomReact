import React from "react";
import product1 from "../../images/product/product1.jpg";
import product11 from "../../images/product/product1-1.jpg";
import OwlCarousel from "react-owl-carousel";
//import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function NewArrivals() {
  return (
    <div className="tab-pane active" id="nArrivals">
      {/* <div className="nArrivals owl-carousel"> */}
      <OwlCarousel className="owl-carousel" items={4} margin={10} nav>
        {[0, 1, 2, 3, 4].map((item, index) => {
          console.log(index);
          return (
            <div className="product-grid" key={index}>
              <div className="item">
                <div className="product-thumb">
                  <div className="image product-imageblock">
                    <a href="product_detail_page.html">
                      <img
                        data-name="product_image"
                        src={product1}
                        alt="iPod classNameic"
                        title="iPod classNameic"
                        className="img-responsive"
                      />
                      <img
                        src={product11}
                        alt="iPod classNameic"
                        title="iPod classNameic"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="caption product-detail text-left">
                    <h6 data-name="product_name" className="product-name mt_20">
                      <a href="#" title="Casual Shirt With Ruffle Hem">
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
              <div className="item">
                <div className="product-thumb">
                  <div className="image product-imageblock">
                    <a href="product_detail_page.html">
                      <img
                        data-name="product_image"
                        src={product1}
                        alt="iPod classNameic"
                        title="iPod classNameic"
                        className="img-responsive"
                      />
                      <img
                        src={product11}
                        alt="iPod classNameic"
                        title="iPod classNameic"
                        className="img-responsive"
                      />
                    </a>
                  </div>
                  <div className="caption product-detail text-left">
                    <h6 data-name="product_name" className="product-name mt_20">
                      <a href="#" title="Casual Shirt With Ruffle Hem">
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
            </div>
          );
        })}
      </OwlCarousel>
      {/* </div> */}
    </div>
  );
}
