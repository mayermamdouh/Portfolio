import { useParams } from "react-router-dom";

type Project = {
  title: string;
  description?: string;
  technologies: string;
  role: string;
  date: string;
  link: string;
  photos?: string[];
  extraLink?: {
    href: string;
    text: string;
  };
};

const projectData: Record<string, Project> = {
  "engine-parts": {
    title: "Engine Parts Sales Platform",
    description: `Developed a full-stack event booking platform with user and admin roles, allowing event browsing, ticket booking, and admin event management, Implemented authentication, role-based access, dynamic UI states ("Booked" label, success screens), and an admin dashboard, Built a responsive web interface using Tailwind CSS and plain CSS from scratch with no UI template.`,
    technologies:
      "React.js, Next.js, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB",
    role: "Full Stack Developer",
    date: "October 2024",
    link: "https://github.com/mayermamdouh/Engine-Parts-Sales-Platform",
    photos: [
      "/src/assets/engine-1.jpeg",
      "/src/assets/engine-2.jpeg",
      "/src/assets/engine-3.jpeg",
      "/src/assets/engine-4.jpeg",
      "/src/assets/engine-5.jpeg",
    ],
  },
  "ai-exam": {
    title: "AI-Powered Examination System",
    description: `Led a team of 6 developers to create an AI-powered exam system using React.js for the front end and Django for backend services, Integrated MC Gaze AI for gaze detection, reducing cheating incidents by 30%, Sponsored by Dell Technologies and awarded 7th place in the DT Envision the Future competition.`,
    technologies: "React.js, Django, TensorFlow, OpenAI API",
    role: "Team Leader & Frontend Developer | Graduation Project (Dell Sponsored)",
    date: "June 2023 – May 2024",
    link: "https://github.com/mayermamdouh/Graduation_Project_Examination_Platform",
    photos: [
      "/src/assets/grad-1.jpeg",
      "/src/assets/grad-2.jpeg",
      "/src/assets/grad-3.jpeg",
      "/src/assets/grad-4.jpeg",
      "/src/assets/grad-5.jpeg",
      "/src/assets/grad-6.jpeg",
      "/src/assets/grad-7.jpeg",
      "/src/assets/grad-8.jpeg",
      "/src/assets/grad-9.jpeg",
      "/src/assets/grad-10.jpeg",
      "/src/assets/grad-11.jpeg",
    ],
  },
  "sentiment-analysis": {
    title: "Arabic Sentiment Analysis",
    description: `Conducted research on Arabic sentiment analysis using Apache Spark, optimizing large dataset processing, Published and presented findings, earning 3rd place at the ICCI24 Conference.`,
    technologies: "PySpark, Python, Scikit-learn, Google Colab, NLP",
    role: "Team Leader & Developer & Researcher",
    date: "June 2023",
    link: "https://github.com/mayermamdouh/Sentiment_Analysis-On-Arabic-Companies-Reviews-By-Spark",
    extraLink: {
      href: "https://ieeexplore.ieee.org/document/10485056",
      text: "IEEE",
    },
    photos: ["/src/assets/IEEE.png"],
  },
  portfolio: {
    title: "Personal Portfolio Website",
    technologies: "React.js, TypeScript, CSS, HTML",
    role: "Frontend Developer",
    date: "April 2025",
    link: "https://github.com/mayermamdouh/Portfolio",
  },
  "event-booking": {
    title: "Event Booking System",
    description: `
    Developed a full-stack event booking platform with user and admin roles, allowing event browsing, ticket booking, and admin event management, Implemented authentication, role-based access, dynamic UI states ("Booked" label, success screens), and an admin dashboard, Built a responsive web interface using Tailwind CSS and plain CSS from scratch with no UI template.`,
    technologies:
      "React.js, Tailwind CSS, CSS3, Express.js, Node.js, MongoDB, REST APIs",
    role: "Full Stack Developer",
    date: "May 2025",
    link: "https://github.com/mayermamdouh/ATC_01210567733",

    photos: ["/src/assets/event-1.png", "/src/assets/event-2.png"],
  },
};

function ProjectDetail() {
  const { id } = useParams<{ id?: string }>();

  if (!id || !projectData[id]) {
    return <div>Project not found</div>;
  }

  const project = projectData[id];

  return (
    <section className="project-detail">
      <div className="photos">
        {project.photos?.map((photo, i) => (
          <img
            key={i}
            src={photo}
            alt={`Project screenshot ${i + 1}`}
            className="photo"
          />
        ))}
      </div>
      <h1>{project.title}</h1>
      {project.description && (
        <p className="descriptionP">
          <strong className="newLine">Description</strong> {project.description}
        </p>
      )}
      <p>
        <strong>Technologies:</strong> {project.technologies}
      </p>
      <p>
        <strong>Role:</strong> {project.role}
      </p>
      <p>
        <strong>Date:</strong> {project.date}
      </p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
      {project.extraLink && (
        <a
          href={project.extraLink.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.extraLink.text}
        </a>
      )}
    </section>
  );
}

export default ProjectDetail;
