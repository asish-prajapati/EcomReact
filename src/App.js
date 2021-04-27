import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import MainFooter from "./components/footer/MainFooter";
import HomePage from "./components/content/homepage/HomePage";
import ProductPage from "./components/content/productpage/ProductPage";
import BlogPage from "./components/content/blogpage/BlogPage";
import ContactUsPage from "./components/content/contactusPage/ContactUsPage";
import CartPage from "./components/content/cartpage/CartPage";
import CheckoutPage from "./components/content/checkoutpage/CheckoutPage";
import ProductDetailPage from "./components/content/productdetailPage/ProductDetailPage";
import SingleBlogPage from "./components/content/singleblogPage/SingleBlogPage";
import AboutPage from "./components/content/aboutpage/AboutPage";
import LoginPage from "./components/content/loginpage/LoginPage";
import useSocialAuth from "./services/SocialAuth";

function App() {
  const {
    loggedIn,
    data,
    glogin,
    fbloginHandler,
    fblogoutHandler,
    googleLoginHandler,
    googleLogoutHandler,
    statusChangeCallback,
  } = useSocialAuth();

  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "1057236748096613",
        cookie: true,
        xfbml: true,
        version: "v10.0",
      });

      window.FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
      });
    };
  }, []);

  return (
    <>
      {/* <!-- =====  LODER  ===== --> */}
      {/* <div class="loder"></div> */}
      <div className="wrapper">
        <Router>
          <Header
            loggedIn={loggedIn}
            glogin={glogin}
            data={data}
            logoutHandler={fblogoutHandler}
            googleLogoutHandler={googleLogoutHandler}
          />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/products">
              <ProductPage />
            </Route>
            <Route exact path="/blog">
              <BlogPage />
            </Route>
            <Route exact path="/contactus">
              <ContactUsPage />
            </Route>
            <Route exact path="/cart">
              <CartPage />
            </Route>
            <Route exact path="/checkout">
              <CheckoutPage />
            </Route>
            <Route exact path="/productdetail">
              <ProductDetailPage />
            </Route>
            <Route exact path="/singlepost">
              <SingleBlogPage />
            </Route>
            <Route exact path="/aboutus">
              <AboutPage />
            </Route>
            <Route exact path="/login">
              <LoginPage
                data={data}
                loginHandler={fbloginHandler}
                googleLoginHandler={googleLoginHandler}
                loggedIn={loggedIn}
              />
            </Route>
          </Switch>
          <MainFooter />
        </Router>
      </div>
    </>
  );
}

export default App;
