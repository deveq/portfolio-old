import React, { useState, useEffect, useRef, MutableRefObject } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/Header";
import About from "./components/About";
import Works from "./components/Works";
import Footer from "./components/Footer";
import WorkModalContext from "./context/WorkModalContext";
import ScrollSpyTest from "./components/ScrollSpyTest";

let index = 0;
function App() {
  const ref = useRef<HTMLDivElement[]>([]);
  const options: IntersectionObserverInit = {
    root: null,
    threshold: 0.5,
  };

  const callback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry, index) => {
      const { isIntersecting, boundingClientRect } = entry;

      if (isIntersecting) {
        // ref.current.forEach((el) => {
        //   el.classList.remove("animate");
        // });
        entry.target.classList.add("animate");
      }
    });
  };

  const appendRef = (r: HTMLDivElement) => {
    if (r && ref.current) {
      return (ref.current[index++] = r);
    }
    console.log(index);
  };

  const io = new IntersectionObserver(callback, options);

  useEffect(() => {
    console.log(ref.current);
    ref.current.forEach((item) => io.observe(item));

    return () => {
      ref.current.forEach((item) => io.unobserve(item));
    };
  }, []);

  return (
    <WorkModalContext>
      <div className="App">
        <Header ref={appendRef} />
        <About ref={appendRef} />
        <Works ref={appendRef} />
        <Footer ref={appendRef} />
      </div>
    </WorkModalContext>
    // <ScrollSpyTest />
  );
}

export default App;
