import React from "react";
import { Route, Switch } from "react-router-dom";
import BlogPage from "./blogpage/BlogPage";
import ContactUs from "./contactusPage/ContactUs";

import HomePage from "./homepage/HomePage";
import ProductPage from "./productpage/ProductPage";

function Container() {
  return (
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
    </Switch>
  );
}

export default Container;
