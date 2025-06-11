import React from "react";
import "../styles/footer.css";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function footer() {
  return (
    <div className="footer" id="Contact">
      <div className="footer-content-row1">
        <div className="row1-col col1">
          <h1>Contact</h1>
          <div className="row1-col1-content">
            <p className="row1-col1-text">
              If you have any questions or would like to work together, feel
              free to reach out!
            </p>
          </div>
        </div>
        <div className="row1-col col2">
          <div className="contact-info">
            <div className="contact-row">
              <span className="contact-icon">
                <svg width="30" height="30" fill="#ffffff" viewBox="0 0 24 24">
                  <path d="M12 3l10 9h-3v9h-6v-6h-2v6H5v-9H2z" />
                </svg>
              </span>
              <div className="contact-details">
                <div className="contact-title">Taguig, Philippines</div>
                <div className="contact-label">Location</div>
              </div>
            </div>

            <div className="contact-row">
              <span className="contact-icon">
                <svg width="30" height="30" fill="#ffffff" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
                </svg>
              </span>
              <div className="contact-details">
                <div className="contact-title">(+63) 991 609 324</div>
                <div className="contact-label">Phone</div>
              </div>
            </div>

            <div className="contact-row email-row">
              <span className="contact-icon">
                <FaEnvelope size={22} color="#ffffff" />
              </span>
              <div className="contact-details">
                <div className="contact-title">
                  Glenwilliam.perez36@gmail.com
                </div>
                <div className="contact-label">Email</div>
              </div>
            </div>
          </div>
          <div className="contact-socials">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1AucbBFk8C/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="foot-icons ic1"
            >
              <FaFacebook size={25} style={{ color: "#fff" }} />
            </a>

            {/* LinkedIn */}
            <a
              href="http://www.linkedin.com/in/glen-william-perez-098801307"
              target="_blank"
              rel="noopener noreferrer"
              className="foot-icons ic2"
            >
              <FaLinkedin size={25} style={{ color: "#fff" }} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/GlenPrz"
              target="_blank"
              rel="noopener noreferrer"
              className="foot-icons ic3"
            >
              <FaGithub size={25} style={{ color: "#fff" }} />
            </a>
          </div>
        </div>
        <div className="row1-col col3">
          <iframe
            title="Taguig City Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30876.504844218194!2d121.025997!3d14.517618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8e8e2e2b1e5%3A0x9e7e8e8e8e8e8e8e!2sTaguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1710000000000!5m2!1sen!2sph"
            width="95%"
            height="270"
            style={{ border: 0, borderRadius: "5px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="footer-content-row2">
        <p className="row2-text">
          © 2024 Glen William Perez. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default footer;
