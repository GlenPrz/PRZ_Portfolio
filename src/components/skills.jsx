import React, { useEffect, useRef } from "react";
import "../styles/skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Skills() {
  const skillsLeftRef = useRef(null);

  useEffect(() => {
    AOS.init({});
  }, []);

  //   TESTING

  return (
    <div>
      <div className="skills-cont">
        <div
          className="skills-left"
          ref={skillsLeftRef}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <h1>SKILLS</h1>
        </div>
        <div className="skills-right">
          {/* Frontend */}
          <div
            className="skills-item html"
            ref={skillsLeftRef}
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="100"
            data-aos-duration="1200"
          >
            <img src="src\assets\images\skills\HTML.png" alt="Skills" />
            <h1>HTML</h1>
          </div>
          <div
            className="skills-item css"
            ref={skillsLeftRef}
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
            data-aos-duration="1200"
          >
            <img src="src\assets\images\skills\CSS.png" alt="Skills" />
            <h1>CSS</h1>
          </div>
          <div
            className="skills-item js"
            ref={skillsLeftRef}
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <img src="src\assets\images\skills\JS.png" alt="Skills" />
            <h1>JS</h1>
          </div>
          <div
            className="skills-item react"
            ref={skillsLeftRef}
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="800"
            data-aos-duration="800"
          >
            <img src="src\assets\images\skills\react_js.png" alt="Skills" />
            <h1>React</h1>
          </div>
          <div
            className="skills-item elementor"
            ref={skillsLeftRef}
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1000"
            data-aos-duration="600"
          >
            <img src="src\assets\images\skills\elementor.png" alt="Skills" />
            <h1>Elementor</h1>
          </div>

          {/* Backend */}
          <div
            className="skills-item php"
            ref={skillsLeftRef}
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1200"
            data-aos-duration="300"
          >
            <img src="src\assets\images\skills\PHP.png" alt="Skills" />
            <h1>PHP</h1>
          </div>
          <div
            className="skills-item mysql"
            ref={skillsLeftRef}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1200"
          >
            <img src="src\assets\images\skills\mysql.png" alt="Skills" />
            <h1>MySQL</h1>
          </div>
          <div
            className="skills-item java"
            ref={skillsLeftRef}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <img src="src\assets\images\skills\java.png" alt="Skills" />
            <h1>Java</h1>
          </div>
          <div
            className="skills-item vb"
            ref={skillsLeftRef}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-delay="600"
            data-aos-duration="800"
          >
            <img src="src\assets\images\skills\vbnet.png" alt="Skills" />
            <h1>VB.NET</h1>
          </div>

          {/* CMS / Platforms */}
          <div
            className="skills-item wp"
            ref={skillsLeftRef}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-delay="800"
            data-aos-duration="600"
          >
            <img src="src\assets\images\skills\wordpress.png" alt="Skills" />
            <h1>WordPress</h1>
          </div>
          <div
            className="skills-item woo"
            ref={skillsLeftRef}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1000"
            data-aos-duration="300"
          >
            <img src="src\assets\images\skills\woocommerce.png" alt="Skills" />
            <h1>WooCommerce</h1>
          </div>

          {/* Tools */}
          <div
            className="skills-item npm"
            ref={skillsLeftRef}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-delay="1200"
          >
            <img src="src\assets\images\skills\npm.png" alt="Skills" />
            <h1>npm</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
