import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";

window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  // const logo1 = document.getElementById("logo1");
  // const logo2 = document.getElementById("logo2");
  // if (window.scrollY > 600) { // Adjust scroll distance
  //   navbar.classList.add("scrolled");
  //   logo1.style.display = "none";
  //   logo2.style.display = "block";
  // } else {
  //   navbar.classList.remove("scrolled");
  //   logo1.style.display = "block";
  //   logo2.style.display = "none";
  // }
});

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
      <div className="container-fluid">
        {/* <img
          className="logo-hero"
          id="logo1"
          src="src\assets\images\logo.png"
          alt="Logo"
        /> */}
        <img
          className="logo-hero"
          id="logo2"
          src="src\assets\images\logo2.png"
          alt="Logo"
        />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
