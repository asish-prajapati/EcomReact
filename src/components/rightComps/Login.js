import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const history = useHistory();
  const [regState, setRegState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [loginState, setLoginState] = useState({ username: "", password: "" });
  function onChangeReg(e) {
    setRegState({ ...regState, [e.target.name]: e.target.value });
  }
  function onChangeLogin(e) {
    setLoginState({ ...loginState, [e.target.name]: e.target.value });
  }
  function regSubmitHandler(e) {
    e.preventDefault();
    console.log(JSON.stringify(regState));
    localStorage.setItem("regformData", JSON.stringify(regState));
    alert("Registered Successfully");

    history.push("/");

    // axios
    //   .post("http://imginfotech.in/sixvalley/api/v1/auth/register", {
    //     f_name: regState.firstname,
    //     l_name: regState.lastname,
    //     email: regState.email,
    //     password: regState.password,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });
  }

  function loginSubmitHandler(e) {
    e.preventDefault();

    // axios
    //   .post("http://imginfotech.in/sixvalley/api/v1/auth/login", {
    //     email: loginState.email,
    //     password: loginState.password,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });
  }

  return (
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <div className="panel-login">
          <div className="panel-heading">
            <div className="row mb_20">
              <div className="col-xs-6">
                <a className="active" id="login-form-link">
                  Login
                </a>
              </div>
              <div className="col-xs-6">
                <a id="register-form-link">Register</a>
              </div>
            </div>
            <hr />
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-lg-12">
                {/* formtag */}
                <form id="login-form" onSubmit={loginSubmitHandler}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="username"
                      id="username1"
                      tabindex="1"
                      className="form-control"
                      placeholder="Username"
                      value={loginState.username}
                      onChange={onChangeLogin}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      tabindex="2"
                      className="form-control"
                      placeholder="Password"
                      value={loginState.password}
                      onChange={onChangeLogin}
                    />
                  </div>
                  {/* <div className="form-group text-center">
                    <input
                      type="checkbox"
                      tabindex="3"
                      className=""
                      name="remember"
                      id="remember"
                    />
                    <label for="remember"> Remember Me</label>
                  </div> */}
                  <div className="form-group">
                    <div className="row">
                      <div className="col-sm-6 col-sm-offset-3">
                        <input
                          type="submit"
                          name="login-submit"
                          id="login-submit"
                          tabindex="4"
                          className="form-control btn btn-login"
                          value="Log In"
                        />{" "}
                        <br /> <br />
                        <button
                          tabindex="4"
                          className="form-control btn"
                          style={{ backgroundColor: "blue" }}
                          onClick={props.loginHandler}
                        >
                          Login with Facebook
                        </button>
                        <br />
                        <br />
                        <GoogleLogin
                          clientId="789665118583-idmd3srqpri5r5qf0u0thgllffj7u77e.apps.googleusercontent.com"
                          buttonText="Login"
                          onSuccess={props.googleLoginHandler}
                          cookiePolicy={"single_host_origin"}
                          buttonText="Login with Google"
                          className="form-control btn"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="text-center">
                          <a href="#" tabindex="5" className="forgot-password">
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <form id="register-form" onSubmit={regSubmitHandler}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      tabindex="1"
                      className="form-control"
                      placeholder="First Name"
                      value={regState.firstname}
                      onChange={onChangeReg}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      tabindex="1"
                      className="form-control"
                      placeholder="Last Name"
                      value={regState.lastname}
                      onChange={onChangeReg}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      tabindex="1"
                      className="form-control"
                      placeholder="Email Address"
                      value={regState.email}
                      onChange={onChangeReg}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      id="password2"
                      tabindex="2"
                      className="form-control"
                      placeholder="Password"
                      value={regState.password}
                      onChange={onChangeReg}
                    />
                  </div>

                  <div className="form-group">
                    <div className="row">
                      <div className="col-sm-6 col-sm-offset-3">
                        <input
                          type="submit"
                          name="register-submit"
                          id="register-submit"
                          tabindex="4"
                          className="form-control btn btn-register"
                          value="Register Now"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
