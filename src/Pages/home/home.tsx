import { useEffect } from "react";
import "./home.css";
import Shapes from "./Shapes";
import personalImage from "/assets/smallPhoto.jpg";
import HeaderSocials from "./Socials";

function HomePage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const nameElement = document.querySelector(".home-username");
      if (nameElement) nameElement.classList.add("done");
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container " id="home">
      <div className="home-content">
        <img
          className="img-container"
          src={personalImage}
          alt="personal image"
        />
        <div className="home-username">Mayer Mamdouh</div>
        <p className="home-description">Front-End Developer</p>
        <HeaderSocials footer={false} />
        <a
          href="https://drive.google.com/file/d/1IImpsG2TksgVxf4SANKHsnk0ciLeLL4Z/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Resume
        </a>
      </div>
      <Shapes />
    </div>
  );
}

export default HomePage;
