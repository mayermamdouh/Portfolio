// import smallPhoto from "../assets/smallPhoto.jpg";
import "./home.css";
import Shapes from "./Shapes";
import personalImage from "../../assets/smallPhoto.jpg";
import HeaderSocials from "./Socials";

function HomePage() {
  return (
    <div className="home-container centered-section" id="home">
      <div className="home-content">
        <img
          className="img-container"
          src={personalImage}
          alt="personal image"
        ></img>
        <div className="home-username">Mayer Mamdouh</div>
        <p className="home-description">Front-End Developer</p>
        <HeaderSocials footer={false} />
        <a
          href="https://drive.google.com/file/d/1A14_ZFPgyiWivejruMX0kMXaGaqJO46f/view?usp=sharing"
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
