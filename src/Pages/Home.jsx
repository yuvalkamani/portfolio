import React from "react";
import "./Home.css";
import {
  FaReact,
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaRProject,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaFilePdf,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiJunit5,
  SiTailwindcss,
  SiLinux,
  SiJirasoftware,
  SiAndroidstudio,
  SiNeo4J,
  SiPostgresql,
  SiC,
  SiLinkedin,
  SiGithub,
  SiMinutemailer,
} from "react-icons/si";

const Home = () => {
  return (
    <div className="main-container">
      <div className="title">
        Yuval Kamani
        <span className="red-item">.</span>
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
        <div className="skill-logos">
          <div className="skill-languages">
            <div className="skill-title">languages</div>
            <FaJava className="contact-item" size={30} />
            <FaPython className="contact-item" size={30} />
            <SiC className="contact-item" size={30} />
            <FaJs className="contact-item" size={30} />
            <FaHtml5 className="contact-item" size={30} />
            <FaCss3Alt className="contact-item" size={30} />
            <FaRProject className="contact-item" size={30} />
          </div>

          <div className="sill-framworks">
            <div className="skill-title">frameworks</div>
            <FaReact className="contact-item" size={30} />
            <FaNodeJs className="contact-item" size={30} />
            <SiExpress className="contact-item" size={30} />
            <SiMongodb className="contact-item" size={30} />
            <FaBootstrap className="contact-item" size={30} />
            <SiTailwindcss className="contact-item" size={30} />
            <SiJunit5 className="contact-item" size={30} />
          </div>
          <div className="skill-devtools">
            <div className="skill-title">dev tools</div>
            <FaGitAlt className="contact-item" size={30} />
            <SiLinux className="contact-item" size={30} />
            <SiAndroidstudio className="contact-item" size={30} />
            <FaDocker className="contact-item" size={30} />
            <SiNeo4J className="contact-item" size={30} />
            <SiPostgresql className="contact-item" size={30} />
            <FaFigma className="contact-item" size={30} />
            <SiJirasoftware className="contact-item" size={30} />
          </div>
        </div>
        <hr style={{ margin: "2%", opacity: "50%" }} />
        <div className="contact">
          <a
            href="https://www.linkedin.com/in/ykamani/"
            target="_blank"
            rel="noreferrer"
          >
            <SiLinkedin size={30} className="contact-item" />
          </a>
          <a
            href="https://github.com/yuvalkamani"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub size={30} className="contact-item" />
          </a>
          <a
            href="mailto:yuvalkamani@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiMinutemailer size={30} className="contact-item" />
          </a>
          <a
            href="https://homefromcollege.com/r/YK-546"
            target="_blank"
            rel="noreferrer"
          >
            <FaFilePdf size={30} className="contact-item" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
