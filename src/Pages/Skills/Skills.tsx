import "./Skills.css";
import javascript from "../../assets/javascript.svg";
import typescript from "../../assets/typescript.svg";
import react from "../../assets/react.svg";
import next from "../../assets/next-js.svg";
import redux from "../../assets/redux.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import tailwind from "../../assets/tailwind-css.svg";
import sass from "../../assets/sass.svg";
import node from "../../assets/nodejs.svg";
import express from "../../assets/express.svg";
import mongo from "../../assets/mongodb.svg";
import mysql from "../../assets/mysql.svg";
import api from "../../assets/rest-api.svg";
import Jest from "../../assets/Jest.svg";
import docker from "../../assets/docker.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github-mark.svg";
import postman from "../../assets/postman.svg";
import agile from "../../assets/agile.svg";
import ps from "../../assets/problem-solving.png";
import ct from "../../assets/critical-thinking.png";
import tm from "../../assets/time-management.png";
import communcation from "../../assets/communcation.png";
function Skills() {
  return (
    <section className="Skills-page centered-section" id="skills">
      <h1>Skills</h1>
      <section className="skills-container">
        <div className="skills-section">
          <img src={javascript} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">JavaScript</div>
        </div>
        <div className="skills-section">
          <img src={typescript} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">TypeScript</div>
        </div>
        <div className="skills-section">
          <img src={react} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">React</div>
        </div>
        <div className="skills-section">
          <img src={next} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">TypeScript</div>
        </div>
        <div className="skills-section">
          <img src={redux} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">Redux Toolkit</div>
        </div>
        <div className="skills-section">
          <img src={html} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">HTML5</div>
        </div>
        <div className="skills-section">
          <img src={css} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">CSS3</div>
        </div>
        <div className="skills-section">
          <img src={tailwind} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">Tailwind CSS</div>
        </div>
        <div className="skills-section">
          <img src={sass} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">SASS</div>
        </div>
        <div className="skills-section">
          <img src={node} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">Node.js</div>
        </div>
        <div className="skills-section">
          <img src={express} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">Express.js</div>
        </div>
        <div className="skills-section">
          <img src={mongo} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">MongoDB</div>
        </div>
        <div className="skills-section">
          <img src={mysql} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">MySQL</div>
        </div>
        <div className="skills-section">
          <img src={api} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">RESTful APIs</div>
        </div>
        <div className="skills-section">
          <img src={Jest} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">Jest</div>
        </div>
        <div className="skills-section">
          <img src={docker} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">Docker</div>
        </div>
        <div className="skills-section">
          <img src={git} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">Git</div>
        </div>
        <div className="skills-section">
          <img src={github} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">GitHub</div>
        </div>
        <div className="skills-section">
          <img src={postman} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">Postman</div>
        </div>
        <div className="skills-section">
          <img src={agile} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">Agile/Scrum</div>
        </div>
        <div className="skills-section">
          <img src={ps} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">Problem Solving</div>
        </div>
        <div className="skills-section">
          <img src={ct} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">Critical Thinking</div>
        </div>
        <div className="skills-section">
          <img src={tm} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">Time Management</div>
        </div>
        <div className="skills-section">
          <img src={communcation} alt="skill-img" className="skill-img"></img>
          <div className="skill-name">Communcation</div>
        </div>
      </section>
    </section>
  );
}
export default Skills;
