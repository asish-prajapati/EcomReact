import React, { useState } from "react";

function useSocialAuth() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState({
    username: "",
    profileimg: "",
    email: "",
  });
  const [glogin, setGlogin] = useState(false);

  function statusChangeCallback(response) {
    if (response.status === "connected") {
      setLoggedIn(true);
      setGlogin(false);
      window.FB.api(
        "/me",
        // { fields: "name,email,profile_pic" },
        // { access_token: response.accessToken },
        function (response) {
          setData({ ...data, username: response.name, email: response.email });
          console.log(response);
        }
      );
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
      setData({
        username: response.profileObj.name,
        profileimg: response.profileObj.imageUrl,
        email: response.profileObj.email,
      });
      console.log(response.profileObj);
    }
  };
  const googleLogoutHandler = (response) => {
    setLoggedIn(false);
  };

  return {
    loggedIn,
    data,
    glogin,
    loginHandler,
    logoutHandler,
    googleLoginHandler,
    googleLogoutHandler,
    statusChangeCallback,
  };
}

export default useSocialAuth;
