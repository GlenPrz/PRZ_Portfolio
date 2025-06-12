import React, { useEffect, useRef } from "react";
import "../styles/skills.css";
import skills from "../data/skills.json"; // Update if path is different
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
    <div id="Skills">
      <div className="skills-cont">
        <div
          className="skills-left"
          ref={skillsLeftRef}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <h1>SKILLS</h1>
        </div>
        <div className="skills-right">
          {skills.map((skill, index) => (
            <div className="item-container">
              <div
                key={index}
                className={`skills-item ${skill.className}`}
                ref={skillsLeftRef}
                data-aos="fade-up"
                data-aos-offset={skill.offset}
                data-aos-easing="ease-in-sine"
                data-aos-delay={skill.delay}
                data-aos-duration={skill.duration}
              >
                <img src={skill.img} alt="Skills" />
                <h1>{skill.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
