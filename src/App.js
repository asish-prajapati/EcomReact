import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import MainFooter from "./components/footer/MainFooter";
import HomePage from "./components/content/homepage/HomePage";
import ProductPage from "./components/content/productpage/ProductPage";
import BlogPage from "./components/content/blogpage/BlogPage";
import ContactUs from "./components/content/contactusPage/ContactUs";
import CartPage from "./components/content/cartpage/CartPage";
import CheckoutPage from "./components/content/checkoutpage/CheckoutPage";
import ProductDetailPage from "./components/content/productdetailPage/ProductDetailPage";
import SingleBlogPage from "./components/content/singleblogPage/SingleBlogPage";
import AboutPage from "./components/content/aboutpage/AboutPage";
import LoginPage from "./components/content/loginpage/LoginPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [glogin, setGlogin] = useState(false);

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

  function statusChangeCallback(response) {
    if (response.status === "connected") {
      setLoggedIn(true);
      setGlogin(false);
      window.FB.api("/me", function (response) {
        setUsername(response.name);
      });
    } else {
      setLoggedIn(false);
    }
  }

  function loginHandler() {
    window.FB.login(
      function (response) {
        statusChangeCallback(response);
      },
      { scope: "public_profile,email" }
    );
  }
  function logoutHandler() {
    window.FB.logout((response) => {
      statusChangeCallback(response);
    });
  }
  const googleLoginHandler = (response) => {
    if (response.accessToken) {
      setLoggedIn(true);
      setGlogin(true);
      setUsername(response.profileObj.name);
    }
  };
  const googleLogoutHandler = (response) => {
    setLoggedIn(false);
  };

  return (
    <>
      {/* <!-- =====  LODER  ===== --> */}
      {/* <div class="loder"></div> */}
      <div className="wrapper">
        <Router>
          <Header
            loggedIn={loggedIn}
            glogin={glogin}
            username={username}
            logoutHandler={logoutHandler}
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
              <ContactUs />
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
                username={username}
                loginHandler={loginHandler}
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
