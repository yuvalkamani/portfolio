import React from "react";
import "./Home.css";

import IconJava from "react-devicon/java/original";

const Home = () => {
  return (
    <div className="main-container">
      <div className="title">
        Yuval Kaman
        <span className="red-item">i</span>
      </div>
      <div className="personal-info-container">
        <div className="personal-info">
          Computer Science and Mathematics at UofT
          <span className="red-item">.</span>
        </div>
        <div className="personal-info">
          Aspiring Software Engineer (with a little bit of Mathematics)
          <span className="red-item">.</span>
        </div>
        <div className="about-me">
          <div>
            Hey there! I'm third year candidate at UofT and let me tell you, I'm
            a guy who loves his code. In fact, you might say that programming is
            my second language! I'll stick to coding and leave the comedy to the
            professionals. But seriously, if you need someone who's passionate
            about computer science and not afraid to add a little humor to the
            mix, then I'm your man!
            <br /> <br />
          </div>
          <div>
            I'm currently a Programming Engineer at Siemens for my co-op. It's
            like being a coding ninja, developing software solutions that power
            some seriously cool tech. From automation to designing, I'm learning
            a ton and having a blast. Life is good!
          </div>
        </div>
        <div className="skill-icons">
          <IconJava />
        </div>
      </div>
    </div>
  );
};

export default Home;
