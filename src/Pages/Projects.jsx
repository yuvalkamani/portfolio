import React from "react";
import { projects } from "../Content/ProjectsInfo";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="main-project-container">
      <h1 style={{ textAlign: "center" }}>
        Projects<span className="red-item">.</span>
      </h1>
      <div className="project-card">
        {projects.map((project) => {
          return (
            <div className="project-card-inner">
              <div className="project-name">{project.name}</div>
              <div className="project-skills">{project.skills}</div>
              {project.keypoints.map((keypoint) => {
                return (
                  <div className="project-keypoints">
                    <li className="project-keypoint">{keypoint}</li>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
