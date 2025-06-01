import "./education.css";
import imageGraduated from "/assets/graduated.png";

function Education() {
  return (
    <section className="education-page centered-section" id="education">
      <h1>Education</h1>
      <div className="education-section">
        <img
          className="imageGraduated"
          src={imageGraduated}
          alt="image graduated"
        ></img>
        <div className="line"></div>
        <div className="education-container">
          <div className="education-description">
            Bachelor of Computer Science – Nile University (2020–2024)
          </div>
          <ul className="details">
            <li>GPA: 3.75 / 4.0</li>
            <li>President’s Honor Lists</li>
            <li>Academic Excellence Scholarship</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Education;
