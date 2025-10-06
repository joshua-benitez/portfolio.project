const Contact = () => {
  return (
    <section>
      <h1 className="page-heading">Contact Information</h1>
      <div className="content-card intro-container">
        <p>Charlotte, NC</p>
        <p>Available for freelance and internship opportunities.</p>
      </div>

      <div className="content-card">
        <h2 className="section-subtitle">Reach out</h2>
        <div className="contact-links">
          <a href="mailto:joshuaabenitez01@gmail.com">
            <span className="contact-icon">
              <i className="fas fa-envelope" aria-hidden="true" />
            </span>
            joshuaabenitez01@gmail.com
          </a>
          <a href="tel:+19802547623">
            <span className="contact-icon">
              <i className="fas fa-phone" aria-hidden="true" />
            </span>
            980-254-7623
          </a>
          <a href="https://linkedin.com/in/joshua-benitez" target="_blank" rel="noreferrer">
            <span className="contact-icon">
              <i className="fab fa-linkedin" aria-hidden="true" />
            </span>
            linkedin.com/in/joshua-benitez
          </a>
          <a href="https://github.com/joshua-benitez" target="_blank" rel="noreferrer">
            <span className="contact-icon">
              <i className="fab fa-github" aria-hidden="true" />
            </span>
            github.com/joshua-benitez
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
