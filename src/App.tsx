import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import About from "./components/About";
import Works from "./components/Works";
import Footer from "./components/Footer";
import WorkModalContext from "./context/WorkModalContext";

function App() {
  return (
    <WorkModalContext>
      <div className="App">
        <Header />
        <About />
        <Works />
        <Footer />
      </div>
    </WorkModalContext>
  );
}

export default App;
