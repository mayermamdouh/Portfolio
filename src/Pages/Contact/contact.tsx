import "./contact.css";

function Contact() {
  return (
    <section className="contact-page centered-section" id="contact">
      <h1>Contact</h1>
      <p className="contact-description">
        I'm open to freelance, full-time, or collaborative opportunities.
      </p>

      <div className="contact-container">
        <div className="content-item">
          <div className="word">Email</div>
          <div className="details-contact">
            <a href="mailto:mairmamdoh@gmail.com">mairmamdoh@gmail.com</a>
          </div>
        </div>

        <div className="content-item">
          <div className="word">Phone Number</div>
          <div className="details-contact">
            <a href="tel:+201210567733">+201210567733</a>
          </div>
        </div>

        <div className="content-item">
          <div className="word">Location</div>
          <div className="details-contact">Ahmed Kamal, Giza</div>
        </div>

        <div className="content-item">
          <div className="word">LinkedIn</div>
          <div className="details-contact">
            <a
              href="https://www.linkedin.com/in/mayer-mamdouh-20a697182/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/mayer-mamdouh-20a697182
            </a>
          </div>
        </div>

        <div className="content-item">
          <div className="word">GitHub</div>
          <div className="details-contact">
            <a
              href="https://github.com/mayermamdouh"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/mayermamdouh
            </a>
          </div>
        </div>

        <div className="content-item">
          <div className="word">Codewars</div>
          <div className="details-contact">
            <a
              href="https://www.codewars.com/users/mayer_mair/badges/large"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Badges
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
