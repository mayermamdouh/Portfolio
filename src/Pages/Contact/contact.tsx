import "./contact.css";
function Contect() {
  return (
    <section className="contact-page centered-section" id="contact">
      <h1>Contact</h1>
      <p className="contact-description">
        I'm open to freelance, full-time, or collaborative opportunities.
      </p>
      <div className="contact-container">
        <div className="email">
          <div className="word">Email</div>
          <div className="details-contect">mairmamdoh@gmail.com</div>
        </div>
        <div className="number">
          <div className="word">Phone Number</div>
          <div className="details-contect">+201210567733</div>
        </div>
        <div className="location">
          <div className="word">Location</div>
          <div className="details-contect">Ahmed Kamal, Giza</div>
        </div>
      </div>
    </section>
  );
}

export default Contect;
