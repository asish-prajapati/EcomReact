import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./components/content/Container";
import Header from "./components/header/Header";
import MainFooter from "./components/footer/MainFooter";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        <Container />
        <MainFooter />
      </Router>
    </div>
  );
}

export default App;
