import React from "react";
import product1 from "../../../images/product/product1.jpg";
import product11 from "../../../images/product/product1-1.jpg";
var arr16 = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);

function ProductGrid() {
  return (
    <>
      {/* <!-- =====  BANNER STRAT  ===== --> */}
      <div className="breadcrumb ptb_20">
        <h1>Products</h1>
        <ul>
          <li>
            <a href="index-2.html">Home</a>
          </li>
          <li className="active">Products</li>
        </ul>
      </div>
      {/* <!-- =====  BREADCRUMB END===== --> */}
      <div className="category-page-wrapper mb_30">
        <div className="col-xs-6 sort-wrapper">
          <label className="control-label" for="input-sort">
            Sort By :
          </label>
          <div className="sort-inner">
            <select id="input-sort" className="form-control">
              <option value="ASC" selected="selected">
                Default
              </option>
              <option value="ASC">Name (A - Z)</option>
              <option value="DESC">Name (Z - A)</option>
              <option value="ASC">Price (Low &gt; High)</option>
              <option value="DESC">Price (High &gt; Low)</option>
              <option value="DESC">Rating (Highest)</option>
              <option value="ASC">Rating (Lowest)</option>
              <option value="ASC">Model (A - Z)</option>
              <option value="DESC">Model (Z - A)</option>
            </select>
          </div>
          <span>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </div>
        <div className="col-xs-4 page-wrapper">
          <label className="control-label" for="input-limit">
            Show :
          </label>
          <div className="limit">
            <select id="input-limit" className="form-control">
              <option value="8" selected="selected">
                08
              </option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
          </div>
          <span>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </div>
        <div className="col-xs-2 text-right list-grid-wrapper">
          <div className="btn-group btn-list-grid">
            <button
              type="button"
              id="list-view"
              className="btn btn-default list-view"
            ></button>
            <button
              type="button"
              id="grid-view"
              className="btn btn-default grid-view active"
            ></button>
          </div>
        </div>
      </div>
      <div className="row">
        {arr16.map((item, index) => (
          <div className="product-layout  product-grid  col-lg-3 col-md-4 col-sm-6 col-xs-12 ">
            <div className="item" key={index}>
              <div className="product-thumb clearfix mb_30">
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
                  <p className="product-desc mt_20 mb_60">
                    More room to move. With 80GB or 160GB of storage and up to
                    40 hours of battery life, the new iPod classNameic lets you
                    enjoy up to 40,000 songs or up to 200 hours of video or any
                    combination wherever you go.Cover Flow. Browse through your
                    music collection by flipping..
                  </p>
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
        ))}
      </div>
      <div className="pagination-nav text-center mt_50">
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-angle-left"></i>
            </a>
          </li>
          <li className="active">
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProductGrid;
