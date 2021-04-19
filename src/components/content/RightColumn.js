import React from "react";
import { Route, Switch } from "react-router-dom";

import ProductPage from "./ProductPage";

function RightColumn() {
  return (
    <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
      {/* <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/products">
          <ProductPage />
        </Route>
      </Switch> */}
    </div>
  );
}

export default RightColumn;
