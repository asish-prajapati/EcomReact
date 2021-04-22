import React from "react";
import TopNav from "./TopNav";
import MainNav from "./MainNav";
import BottomNav from "./BottomNav";

function Header(props) {
  return (
    <header id="header">
      <TopNav props={props} />
      <MainNav />
      <BottomNav />
    </header>
  );
}

export default Header;
