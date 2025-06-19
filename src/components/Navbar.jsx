import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";
import logo2 from "../assets/images/logo2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      // Optional: navbar.classList toggle logic
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeNav = () => setIsOpen(false);

  // ✅ Smooth scroll with delayed close
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (targetId === "#Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // Delay sidebar close for mobile
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="navbar"
      >
        <div className="container-fluid">
          <img className="logo-hero" id="logo2" src={logo2} alt="Logo" />

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Unified nav menu */}
          <ul className={`navbar-nav nav-menu ${isOpen ? "open" : ""}`}>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#Home"
                onClick={(e) => handleNavClick(e, "#Home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={(e) => handleNavClick(e, "#About")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#Skills"
                onClick={(e) => handleNavClick(e, "#Skills")}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#Services"
                onClick={(e) => handleNavClick(e, "#Services")}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#Projects"
                onClick={(e) => handleNavClick(e, "#Projects")}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#Contact"
                onClick={(e) => handleNavClick(e, "#Contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Backdrop for sidebar */}
      {isOpen && <div className="nav-backdrop" onClick={closeNav}></div>}
    </>
  );
};

export default Navbar;
