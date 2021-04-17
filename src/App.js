import React from "react";
import Container from "./components/content/Container";
import Header from "./components/header/Header";
import MainFooter from "./components/footer/MainFooter";

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <Container/>
        <MainFooter/>
    </div>
  );
}

export default App;
