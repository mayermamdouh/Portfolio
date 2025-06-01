import "./project.css";
import { Link } from "react-router-dom";

const projects = [
  { id: "engine-parts", title: "Engine Parts Sales Platform" },
  { id: "ai-exam", title: "AI-Powered Examination System" },
  { id: "sentiment-analysis", title: "Arabic Sentiment Analysis" },
  { id: "portfolio", title: "Personal Portfolio Website" },
  { id: "event-booking", title: "Event Booking System" },
];

function Projects() {
  return (
    <section className="projects-container" id="projects">
      <h1>My Projects</h1>
      <div className="projects-section">
        {projects.map((project, index) => (
          <div key={index} className="project-container">
            <Link
              className={`project-card project-${index + 1}`}
              to={`/projects/${project.id}`}
            >
              <div className="github-word">More Details</div>
              <div className="background"></div>
              <div className="project-title">{project.title}</div>
              <div className="circle-yellow"></div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
