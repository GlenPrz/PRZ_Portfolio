import React from "react";
import "../styles/projects.css";
import projectData from "../data/project_cards.json";

function projects() {
  return (
    <div>
      <div className="projects-container" id="Projects">
        <div className="proj-header">
          <h1 className="main-header">Projects</h1>
          <h1 className="child-header">Projects</h1>
        </div>
        <div className="proj-content">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="card-header">
                <img src={project.image} alt={project.title} />
                <div className="card-overlay-title">
                  <h1>{project.tag}</h1>
                </div>
              </div>
              <div className="proj-card-details">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default projects;
