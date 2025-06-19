import React, { useEffect, useRef } from "react";
import "../styles/about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo2 from "../assets/images/logo2.png";
import backgroundImage from "../assets/images/pexels-kevin-ku-92347-577585.jpg";

AOS.init();

function about() {
  const skillsLeftRef = useRef(null);

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div id="About">
      <div
        className="about-cont"
        style={{
          position: "relative",
          backgroundImage: `url(${backgroundImage})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="blurred-bg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.82)",
            opacity: 20,
          }}
        ></div>
        <div
          className="about-content"
          style={{ position: "relative", zIndex: 1 }}
          ref={skillsLeftRef}
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <h1 className="main-header">About </h1>
          <h1 className="child-header">About Me</h1>
          <div className="divider">
            <div
              className="dvd-left"
              ref={skillsLeftRef}
              data-aos="fade-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              data-aos-delay="350"
            >
              <div className="square-container">
                <div className="square">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>

                  <div className="content">
                    <img
                      className="logo-hero-about"
                      id="logo2"
                      src={logo2}
                      alt="Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="dvd-right">
              <p>
                I’m <strong>Glen Perez</strong>, a detail-oriented web developer
                with a passion for building functional, visually appealing
                websites and applications. A{" "}
                <strong>
                  cum laude graduate in BS Information Technology (2024)
                </strong>
                , I combine technical expertise with creative problem-solving to
                deliver seamless digital experiences.
              </p>

              <p>
                My toolkit spans{" "}
                <strong>
                  front-end technologies (React JS, JavaScript, HTML/CSS,
                  Bootstrap)
                </strong>
                , <strong>back-end frameworks (PHP, C#, Java, VB.Net)</strong>,
                and <strong>databases (MySQL)</strong>. I also specialize in{" "}
                <strong>WordPress & WooCommerce</strong> development for
                scalable, user-friendly sites, and leverage{" "}
                <strong>Figma</strong> for intuitive UI/UX design.
              </p>

              <p>
                Whether crafting responsive web apps, optimizing performance, or
                troubleshooting complex issues, I prioritize{" "}
                <strong>
                  clean code, efficient workflows, and user-centric design
                </strong>
                . Let’s turn ideas into reality!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
