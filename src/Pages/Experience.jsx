import React from "react";
import { experience } from "../Content/ExperienceInfo";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="main-experience-container">
      <h1 style={{ textAlign: "center" }}>
        Experience<span className="red-item">.</span>
      </h1>
      <div className="experience-card">
        {experience.map((experience) => {
          return (
            <div className="experience-card-inner">
              <div className="experience-duration">{experience.duration}</div>
              <div className="experience-position">{experience.position}</div>
              <div className="experience-company">{experience.company}</div>
              <div className="experience-location">{experience.location}</div>

              {experience.keypoints.map((keypoint) => {
                return (
                  <div className="experience-keypoints">
                    <li className="experience-keypoint">{keypoint}</li>
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

export default Experience;
