import { useEffect, useRef, useState } from "react";
import "./about.css";

function About() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`about-container ${isVisible ? "visible" : ""}`}
      id="about"
    >
      <h1>About Me</h1>
      <div className="information-section">
        <p>
          {`Hi! I'm Mayer Mamdouh Noshy, a passionate Frontend Developer based in Giza, Egypt. I specialize in building high-performance, scalable, and user-friendly web applications using modern technologies like React.js, Next.js, and TypeScript.`}
          <br />
          <br />
          {`I focus on writing clean, maintainable code and delivering seamless user experiences through responsive design, accessibility best practices, and efficient state management. I'm also confident working across the full stack with tools like Node.js, Express.js, and MongoDB, giving me a strong understanding of backend integration.`}
          <br />
          <br />
          {`I love turning real-world problems into intuitive digital solutions. Whether it’s developing from scratch or improving existing systems, I thrive in collaborative, fast-paced environments where I can contribute to building visually engaging and functional products.`}
        </p>
      </div>
    </div>
  );
}

export default About;
