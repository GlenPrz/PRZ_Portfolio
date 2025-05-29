import { MDBBtn } from "mdb-react-ui-kit";
import TypewriterEffect from "./TypewriterEffect"; // Import the TypewriterEffect component
import "../styles/header.css"; // Assuming you have a CSS file for styles
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content-left">
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
        <button type="button" className="btn btn-primary">
          Contact Me!
        </button>
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
        {/* <img src="https://via.placeholder.com/400" alt="Hero" className="hero-image" /> */}
      </div>
    </div>
  );
};

const Header = () => {
  return <HeroSection />;
};

export default Header;
