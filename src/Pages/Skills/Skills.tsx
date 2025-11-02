import "./Skills.css";
import { useEffect, useRef } from "react";
import javascript from "/assets/javascript.svg";
import typescript from "/assets/typescript.svg";
import react from "/assets/react.svg";
import next from "/assets/next-js.svg";
import redux from "/assets/redux.svg";
import html from "/assets/html.svg";
import css from "/assets/css.svg";
import tailwind from "/assets/tailwind-css.svg";
import sass from "/assets/sass.svg";
import node from "/assets/nodejs.svg";
import express from "/assets/express.svg";
import mongo from "/assets/mongodb.svg";
import mysql from "/assets/mysql.svg";
import api from "/assets/rest-api.svg";
import Jest from "/assets/Jest.svg";
import docker from "/assets/docker.svg";
import git from "/assets/git.svg";
import github from "/assets/github-mark.svg";
import postman from "/assets/postman.svg";
import agile from "/assets/agile.svg";
import ps from "/assets/problem-solving.png";
import ct from "/assets/critical-thinking.png";
import tm from "/assets/time-management.png";
import communcation from "/assets/communcation.png";

const skills = [
  { src: javascript, name: "JavaScript" },
  { src: typescript, name: "TypeScript" },
  { src: react, name: "React" },
  { src: next, name: "Next.js" },
  { src: redux, name: "Redux Toolkit" },
  { src: html, name: "HTML5" },
  { src: css, name: "CSS3" },
  { src: tailwind, name: "Tailwind CSS" },
  { src: sass, name: "SASS" },
  { src: node, name: "Node.js" },
  { src: express, name: "Express.js" },
  { src: mongo, name: "MongoDB" },
  { src: mysql, name: "MySQL" },
  { src: api, name: "RESTful APIs" },
  { src: Jest, name: "Jest" },
  { src: docker, name: "Docker" },
  { src: git, name: "Git" },
  { src: github, name: "GitHub" },
  { src: postman, name: "Postman" },
  { src: agile, name: "Agile/Scrum" },
  { src: ps, name: "Problem Solving" },
  { src: ct, name: "Critical Thinking" },
  { src: tm, name: "Time Management" },
  { src: communcation, name: "Communication" },
];

function Skills() {
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = skillsRef.current.indexOf(
              entry.target as HTMLDivElement
            );
            entry.target.classList.add("active");
            entry.target.setAttribute(
              "style",
              `transition-delay: ${index * 100}ms`
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    skillsRef.current.forEach((skill) => {
      if (skill) observer.observe(skill);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="Skills-page" id="skills">
      <h1>Skills</h1>
      <section className="skills-container">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skills-section"
            ref={(el) => {
              skillsRef.current[index] = el;
            }}
          >
            <img src={skill.src} alt={skill.name} className="skill-img" />
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Skills;
