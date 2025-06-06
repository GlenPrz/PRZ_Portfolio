import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/header.jsx";
import About from "./components/about.jsx";
import Cards from "./components/cards.jsx";
import Multirow from "./components/multirow.jsx";
import Rockets from "./components/Rockets.jsx";
import Skills from "./components/skills.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      {/* <Cards /> */}
      <Multirow />
      {/* <Rockets /> */}
    </>
  );
}

export default App;
