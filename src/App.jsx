import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/header.jsx";
import About from "./components/about.jsx";
import Cards from "./components/cards.jsx";
import Multirow from "./components/multirow.jsx";
import Rockets from "./components/Rockets.jsx";
import Skills from "./components/skills.jsx";
import Footer from "./components/footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Projects from "./components/projects.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      {/* <Cards /> */}
      <Multirow />
      <Projects />
      {/* <Rockets /> */}
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
