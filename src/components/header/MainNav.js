import React from "react";
import { Link } from "react-router-dom";
import healthcareImg from "../../images/logo.png";

function MainNav() {
  return (
    <div className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-header mtb_20">
            <a className="navbar-brand" href="index-2.html">
              <img alt="HealthCared" src={healthcareImg} />
            </a>
          </div>
          <div className="header-right pull-right mtb_50">
            <button
              className="navbar-toggle pull-left"
              type="button"
              data-toggle="collapse"
              data-target=".js-navbar-collapse"
            >
              <span className="i-bar">
                <i className="fa fa-bars" />
              </span>
            </button>
            <div className="shopping-icon">
              <div
                className="cart-item "
                data-target="#cart-dropdown"
                data-toggle="collapse"
                aria-expanded="true"
                role="button"
              >
                Item's : <span className="cart-qty">02</span>
              </div>
              <div id="cart-dropdown" className="cart-menu collapse">
                <ul>
                  <li>
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <td className="text-center">
                            <a href="#">
                              <img
                                src="images/product/70x84.jpg"
                                alt="iPo/d classNameic"
                                title="iPod classNameic"
                              />
                            </a>
                          </td>
                          <td className="text-left product-name">
                            <a href="#">MacBook Pro</a>
                            <span className="text-left price">$20.00</span>
                            <input
                              className="cart-qty"
                              name="product_quantity"
                              min="1"
                              value="1"
                              type="number"
                            />
                          </td>
                          <td className="text-center">
                            <a className="close-cart">
                              <i className="fa fa-times-circle" />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">
                            <a href="#">
                              <img
                                src="images/product/70x84.jpg"
                                alt="iPo/d classNameic"
                                title="iPod classNameic"
                              />
                            </a>
                          </td>
                          <td className="text-left product-name">
                            <a href="#">MacBook Pro</a>
                            <span className="text-left price">$20.00</span>
                            <input
                              className="cart-qty"
                              name="product_quantity"
                              min="1"
                              value="1"
                              type="number"
                            />
                          </td>
                          <td className="text-center">
                            <a className="close-cart">
                              <i className="fa fa-times-circle" />
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="text-right">
                            <strong>Sub-Total</strong>
                          </td>
                          <td className="text-right">$2,100.00</td>
                        </tr>
                        <tr>
                          <td className="text-right">
                            <strong>Eco Tax (-2.00)</strong>
                          </td>
                          <td className="text-right">$2.00</td>
                        </tr>
                        <tr>
                          <td className="text-right">
                            <strong>VAT (20%)</strong>
                          </td>
                          <td className="text-right">$20.00</td>
                        </tr>
                        <tr>
                          <td className="text-right">
                            <strong>Total</strong>
                          </td>
                          <td className="text-right">$2,122.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </li>
                  <li>
                    <form action="http://html.lionode.com/healthcare/hc001/cart_page.html">
                      <input
                        className="btn pull-left mt_10"
                        value="View cart"
                        type="submit"
                      />
                    </form>
                    <form action="http://html.lionode.com/healthcare/hc001/checkout_page.html">
                      <input
                        className="btn pull-right mt_10"
                        value="Checkout"
                        type="submit"
                      />
                    </form>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-search pull-right">
              <div className="search-overlay">
                {/* <!-- Close Icon --> */}
                <a href="javascript:void(0)" className="search-overlay-close" />
                {/* <!-- End Close Icon --> */}
                <div className="container">
                  {/* <!-- Search Form --> */}
                  <form
                    role="search"
                    id="searchform"
                    action="http://html.lionode.com/search"
                    method="get"
                  >
                    <label className="h5 normal search-input-label">
                      Enter keywords To Search Entire Store
                    </label>
                    <input
                      value=""
                      name="q"
                      placeholder="Search here..."
                      type="search"
                    />
                    <button type="submit"></button>
                  </form>
                  {/* <!-- End Search Form --> */}
                </div>
              </div>
              <div className="header-search">
                <a id="search-overlay-btn"></a>
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse js-navbar-collapse pull-right">
            <ul id="menu" className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Shop</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li className="dropdown mega-dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Collection
                </a>
                <ul className="dropdown-menu mega-dropdown-menu row">
                  <li className="col-md-3">
                    <ul>
                      <li className="dropdown-header">Women's</li>
                      <li>
                        <a href="#">Unique Features</a>
                      </li>
                      <li>
                        <a href="#">Image Responsive</a>
                      </li>
                      <li>
                        <a href="#">Auto Carousel</a>
                      </li>
                      <li>
                        <a href="#">Newsletter Form</a>
                      </li>
                      <li>
                        <a href="#">Four columns</a>
                      </li>
                      <li>
                        <a href="#">Four columns</a>
                      </li>
                      <li>
                        <a href="#">Good Typography</a>
                      </li>
                    </ul>
                  </li>
                  <li className="col-md-3">
                    <ul>
                      <li className="dropdown-header">Man's</li>
                      <li>
                        <a href="#">Unique Features</a>
                      </li>
                      <li>
                        <a href="#">Image Responsive</a>
                      </li>
                      <li>
                        <a href="#">Four columns</a>
                      </li>
                      <li>
                        <a href="#">Auto Carousel</a>
                      </li>
                      <li>
                        <a href="#">Newsletter Form</a>
                      </li>
                      <li>
                        <a href="#">Four columns</a>
                      </li>
                      <li>
                        <a href="#">Good Typography</a>
                      </li>
                    </ul>
                  </li>
                  <li className="col-md-3">
                    <ul>
                      <li className="dropdown-header">Children's</li>
                      <li>
                        <a href="#">Unique Features</a>
                      </li>
                      <li>
                        <a href="#">Four columns</a>
                      </li>
                      <li>
                        <a href="#">Image Responsive</a>
                      </li>
                      <li>
                        <a href="#">Auto Carousel</a>
                      </li>
                      <li>
                        <a href="#">Newsletter Form</a>
                      </li>
                      <li>
                        <a href="#">Four columns</a>
                      </li>
                      <li>
                        <a href="#">Good Typography</a>
                      </li>
                    </ul>
                  </li>
                  <li className="col-md-3">
                    <ul>
                      <li
                        id="myCarousel"
                        className="carousel slide"
                        data-ride="carousel"
                      >
                        <div className="carousel-inner">
                          <div className="item active">
                            <a href="#">
                              <img
                                src="images/menu-banner1.jpg"
                                className="img-responsive"
                                alt="Banner1"
                              />
                            </a>
                          </div>
                          {/* /                          <!-- End Item --> */}
                          <div className="item">
                            <a href="#">
                              <img
                                src="images/menu-banner2.jpg"
                                className="img-responsive"
                                alt="Banner1"
                              />
                            </a>
                          </div>
                          {/* /                          <!-- End Item --> */}
                          <div className="item">
                            <a href="#">
                              <img
                                src="images/menu-banner3.jpg"
                                className="img-responsive"
                                alt="Banner1"
                              />
                            </a>
                          </div>
                          {/* /                          <!-- End Item --> */}
                        </div>
                        {/* <!-- End Carousel Inner --> */}
                      </li>
                      {/* <!-- /.carousel --> */}
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/contactus">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link to="/checkout">Checkout</Link>
                  </li>
                  <li>
                    <Link to="/productdetail">Product Detail Page</Link>
                  </li>
                  <li>
                    <Link to="/singlepost">Single Post</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About us</a>
              </li>
            </ul>
          </div>
          {/* <!-- /.nav-collapse --> */}
        </nav>
      </div>
    </div>
  );
}

export default MainNav;
