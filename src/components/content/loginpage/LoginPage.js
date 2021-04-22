import React from "react";
import LeftColCategory from "../LeftColCategory";
import LeftColBanner1 from "../LeftColBanner1";
import RightColLogin from "../RightColLogin";

function LoginPage(props) {
  const { username, loggedIn, loginHandler, googleLoginHandler } = props;
  return (
    <div className="container">
      <div className="row">
        <div id="column-left" className="col-sm-4 col-md-4 col-lg-3 ">
          <LeftColCategory />
          <LeftColBanner1 />
        </div>
        <div id="column-right" className="col-sm-8 col-md-8 col-lg-9 mtb_30">
          {loggedIn ? (
            <h1> Hi {username} , You are Logged In </h1>
          ) : (
            <RightColLogin
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
