import React from "react";
import "../styles/footer.css";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function footer() {
  return (
    <div className="footer">
      <div className="footer-content-row1">
        <div className="foot-row1-left">
          <p className="row1-text">
            Connect with me on social media or send me an email!
          </p>
        </div>
        <div className="foot-row1-right">
          <a className="foot-gmail-text">Glenwilliam.perez36@gmail.com</a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1AucbBFk8C/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="foot-icons ic1"
          >
            <FaFacebook className="icons" size={25} color="#1877F2" />
          </a>
          {/* Linkedin */}
          <a
            href="http://www.linkedin.com/in/glen-william-perez-098801307"
            target="_blank"
            rel="noopener noreferrer"
            className="foot-icons ic2"
          >
            <FaLinkedin className="icons" size={25} color="#0A66C2" />
          </a>
          {/* Github */}
          <a
            href="https://github.com/GlenPrz"
            target="_blank"
            rel="noopener noreferrer"
            className="foot-icons ic3"
          >
            <FaGithub className="icons" size={25} color="#333" />
          </a>
        </div>
      </div>
      <div className="footer-content-row2"></div>
      <div className="footer-content-row3"></div>
    </div>
  );
}

export default footer;
