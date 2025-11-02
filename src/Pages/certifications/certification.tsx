import "./certification.css";
import { useEffect, useRef } from "react";

function Certifications() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const fadeElements: NodeListOf<HTMLElement> =
      section.querySelectorAll(".fade-up");
    fadeElements.forEach((el: HTMLElement) => observer.observe(el));

    return () => {
      fadeElements.forEach((el: HTMLElement) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      className="certification-page "
      id="certifications"
      ref={sectionRef}
    >
      <h1>Certification</h1>
      <div className="certification-section">
        <div className="certification-container fade-up">
          <div className="fas fa-graduation-cap certification-icon"></div>
          <div className="certification-details">
            <div>2024</div>
            <div className="certification-description">
              Certificate of Achievement for 7th Place in the DT Envision the
              Future Competition
            </div>
            <div>Dell Technologies</div>
          </div>
        </div>

        <div className="certification-container fade-up">
          <div className="fas fa-graduation-cap certification-icon"></div>
          <div className="certification-details">
            <div>2023</div>
            <div className="certification-description">
              Developing Mobile Applications Using Flutter
            </div>
            <div>Information Technology Institute (ITI), Egypt</div>
          </div>
        </div>

        <div className="certification-container fade-up">
          <div className="fas fa-graduation-cap certification-icon"></div>
          <div className="certification-details">
            <div>2021</div>
            <div className="certification-description">
              Web Development Certificate
            </div>
            <div>
              Ministry of Communications and Information Technology (MCIT),
              Egypt
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
