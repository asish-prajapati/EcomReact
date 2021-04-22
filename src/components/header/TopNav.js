import React from "react";
import { Link } from "react-router-dom";

function TopNav(props) {
  const {
    loggedIn,
    glogin,
    username,
    logoutHandler,
    googleLogoutHandler,
  } = props.props;

  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <ul className="header-top-left">
                <li className="language dropdown">
                  <span
                    className="dropdown-toggle"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    role="button"
                  >
                    <img src="images/English-icon.gif" alt="img" /> English
                    <span className="caret"></span>
                  </span>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                      <a href="#">
                        <img src="images/English-icon.gif" alt="img" /> English
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/French-icon.gif" alt="img" /> French
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/German-icon.gif" alt="img" /> German
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="currency dropdown">
                  <span
                    className="dropdown-toggle"
                    id="dropdownMenu12"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    role="button"
                  >
                    USD <span className="caret"></span>
                  </span>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenu12"
                  >
                    <li>
                      <a href="#">USD</a>
                    </li>
                    <li>
                      <a href="#">EUR</a>
                    </li>
                    <li>
                      <a href="#">AUD</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="header-top-right text-right">
                {loggedIn ? (
                  <>
                    <li className="account">WelCome , {username}</li>
                    <li>
                      {glogin ? (
                        <a onClick={googleLogoutHandler}>Logout</a>
                      ) : (
                        <a onClick={logoutHandler}>Logout</a>
                      )}
                    </li>
                  </>
                ) : (
                  <li className="account">
                    <Link to="/login">My Account</Link>
                  </li>
                )}

                <li className="sitemap">
                  <a href="#">Sitemap</a>
                </li>
                <li className="cart">
                  <Link to="/cart">My Cart</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNav;
