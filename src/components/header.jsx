import React, { useRef, useEffect } from "react";
import TypewriterEffect from "./TypewriterEffect"; // Import the TypewriterEffect component
import "../styles/header.css"; // Assuming you have a CSS file for styles
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../assets/images/Hero_img.jpg";
import Resume from "../assets/docs/Resume.pdf"; // Importing the resume file

const HeroSection = () => {
  const skillsLeftRef = useRef(null);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="hero-section" id="Home">
      <div
        className="hero-content-left"
        ref={skillsLeftRef}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1300"
        data-aos-delay="200"
      >
        {/* Integrating the TypewriterEffect component here */}
        <h1 className="hero-title">Hi, I'm Glen</h1>
        <TypewriterEffect
          textArray={[
            "I'm a Developer",
            "I'm a Freelancer",
            "Let's bring ideas to life together!",
            "Contact me and let's connect!",
          ]}
        />
        <a
          href={Resume}
          className="btn btn-prim"
          download="GLEN PEREZ - Resume.pdf"
        >
          Download Resume
        </a>
        <div
          className="icon-container"
          style={{ display: "flex", gap: "16px", marginTop: "20px" }}
        >
          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1AucbBFk8C/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-container ic1"
          >
            <FaFacebook className="icons" size={25} color="#1877F2" />
          </a>
          {/* Linkedin */}
          <a
            href="http://www.linkedin.com/in/glen-william-perez-098801307"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-container ic2"
          >
            <FaLinkedin className="icons" size={25} color="#0A66C2" />
          </a>

          {/* Github */}
          <a
            href="https://github.com/GlenPrz"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-container ic3"
          >
            <FaGithub className="icons" size={25} color="#333" />
          </a>
        </div>
      </div>
      <div className="hero-content-right">
        <div
          className="hero-image-card"
          ref={skillsLeftRef}
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          <img src={heroImage} alt="Hero" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return <HeroSection />;
};

export default Header;
