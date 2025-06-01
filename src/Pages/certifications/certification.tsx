import './certification.css';

function Certifications() {
    return (
      <section
        className="certification-page centered-section"
        id="certifications"
      >
        <h1>Certification</h1>
        <div className="certification-section">
          <div className="certification-container">
            <div className="fas fa-graduation-cap certification-icon"></div>

            <div className="certification-details">
              <div>2024</div>
              <div className="certification-description">
                Certificate of Achievement for 7th Place in the DT Envision the
                Future Competition
              </div>
              <div>Dell Technologies </div>
            </div>
          </div>
          <div className="certification-container">
            <div className="fas fa-graduation-cap certification-icon"></div>
            <div className="certification-details">
              <div>2023</div>
              <div className="certification-description">
                Developing Mobile Applications Using Flutter
              </div>
              <div>Information Technology Institute (ITI), Egypt </div>
            </div>
          </div>
          <div className="certification-container">
            <div className="fas fa-graduation-cap certification-icon"></div>
            <div className="certification-details">
              <div className="certification-date">2021</div>
              <div className="certification-description">
                Web Development Certificate
              </div>
              <div>
                Ministry of Communications and Information Technology (MCIT),
                Egypt{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Certifications;