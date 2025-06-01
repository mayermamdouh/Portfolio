import { useEffect, useState } from "react";
import "./navbar.css";

function Appbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark-theme", isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark-theme", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <section className="navbar-container">
      <nav className="navbar">
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#certifications">Certifications</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button onClick={toggleTheme} className="toggleButton">
          {darkMode ? "Light" : "Dark"}
        </button>
      </nav>
    </section>
  );
}

export default Appbar;
