import React from "react";
import "../styles/skills.css";
function skills() {
  return (
    <div>
      <div className="skills-cont">
        <div className="skills-left">
          <h1>SKILLS</h1>
        </div>
        <div className="skills-right">
          {/* Frontend */}
          <div className="skills-item">
            <h1>HTML</h1>
          </div>
          <div className="skills-item">
            <h1>CSS</h1>
          </div>
          <div className="skills-item">
            <h1>JS</h1>
          </div>
          <div className="skills-item">
            <h1>React</h1>
          </div>
          <div className="skills-item">
            <h1>Elementor</h1>
          </div>

          {/* Backend */}
          <div className="skills-item">
            <h1>PHP</h1>
          </div>
          <div className="skills-item">
            <h1>MySQL</h1>
          </div>
          <div className="skills-item">
            <h1>Java</h1>
          </div>
          <div className="skills-item">
            <h1>VB.NET</h1>
          </div>

          {/* CMS / Platforms */}
          <div className="skills-item">
            <h1>WordPress</h1>
          </div>
          <div className="skills-item">
            <h1>WooCommerce</h1>
          </div>

          {/* Tools */}
          <div className="skills-item">
            <h1>npm</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default skills;
