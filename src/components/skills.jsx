import React, { useEffect, useRef } from "react";
import "../styles/skills.css";

function Skills() {
  const skillsLeftRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsLeftRef.current) {
      observer.observe(skillsLeftRef.current);
    }

    return () => {
      if (skillsLeftRef.current) {
        observer.unobserve(skillsLeftRef.current);
      }
    };
  }, []);

  //   TESTING

  return (
    <div>
      <div className="skills-cont">
        <div className="skills-left" ref={skillsLeftRef}>
          <h1>SKILLS</h1>
        </div>
        <div className="skills-right">
          {/* Frontend */}
          <div className="skills-item html">
            <img src="src\assets\images\skills\HTML.png" alt="Skills" />
            <h1>HTML</h1>
          </div>
          <div className="skills-item css">
            <img src="src\assets\images\skills\CSS.png" alt="Skills" />
            <h1>CSS</h1>
          </div>
          <div className="skills-item js">
            <img src="src\assets\images\skills\JS.png" alt="Skills" />
            <h1>JS</h1>
          </div>
          <div className="skills-item react">
            <img src="src\assets\images\skills\react_js.png" alt="Skills" />
            <h1>React</h1>
          </div>
          <div className="skills-item elementor">
            <img src="src\assets\images\skills\elementor.png" alt="Skills" />
            <h1>Elementor</h1>
          </div>

          {/* Backend */}
          <div className="skills-item php">
            <img src="src\assets\images\skills\PHP.png" alt="Skills" />
            <h1>PHP</h1>
          </div>
          <div className="skills-item mysql">
            <img src="src\assets\images\skills\mysql.png" alt="Skills" />
            <h1>MySQL</h1>
          </div>
          <div className="skills-item java">
            <img src="src\assets\images\skills\java.png" alt="Skills" />
            <h1>Java</h1>
          </div>
          <div className="skills-item vb">
            <img src="src\assets\images\skills\vbnet.png" alt="Skills" />
            <h1>VB.NET</h1>
          </div>

          {/* CMS / Platforms */}
          <div className="skills-item wp">
            <img src="src\assets\images\skills\wordpress.png" alt="Skills" />
            <h1>WordPress</h1>
          </div>
          <div className="skills-item woo">
            <img src="src\assets\images\skills\woocommerce.png" alt="Skills" />
            <h1>WooCommerce</h1>
          </div>

          {/* Tools */}
          <div className="skills-item npm">
            <img src="src\assets\images\skills\npm.png" alt="Skills" />
            <h1>npm</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
