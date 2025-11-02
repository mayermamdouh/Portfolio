import HomePage from "./Pages/home/home";
import Appbar from "./Pages/navbar/navbar";
import About from "./Pages/About/about";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/project";
import Education from "./Pages/Education/education";
import Certifications from "./Pages/certifications/certification";
import Contect from "./Pages/Contact/contact";
import Footer from "./Pages/Footer/footer";

function App() {
  return (
    <>
      <Appbar />
      <HomePage />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contect />
      <Footer />
    </>
  );
}

export default App;
