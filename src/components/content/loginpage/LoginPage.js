import React from "react";
import Category from "../../leftComps/Category";
import Banner1 from "../../leftComps/Banner1";
import Login from "../../rightComps/Login";
import Profile from "../../otherComps/Profile";

function LoginPage(props) {
  const { data, loginHandler, googleLoginHandler, loggedIn } = props;
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <Category />
          <Banner1 />
        </div>
        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          {loggedIn ? (
            <Profile data={data} />
          ) : (
            <Login
              loginHandler={loginHandler}
              googleLoginHandler={googleLoginHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
