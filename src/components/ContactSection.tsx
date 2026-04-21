import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact__content">
        <p className="contact__eyebrow">Contact</p>
        <h2>Let’s connect</h2>

        <p className="contact__lead">
          I’m open to new frontend opportunities, especially roles involving
          React, Angular, TypeScript, enterprise platforms, and product-focused
          development.
        </p>

        <p className="contact__text">
          Feel free to reach out if you’d like to discuss a role, collaboration,
          or simply connect professionally.
        </p>
      </div>

      <div className="contact__cards">
        <a className="contact-card" href="mailto:tothedina88@gmail.com">
          <span className="contact-card__label">Email</span>
          <span className="contact-card__value">tothedina88@gmail.com</span>
        </a>

        <a
          className="contact-card"
          href="https://www.linkedin.com/in/edina-t%C3%B3th-1679496b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-card__label">LinkedIn</span>
          <span className="contact-card__value">View Profile</span>
        </a>

        <a className="contact-card" href="tel:+36304013944">
          <span className="contact-card__label">Phone</span>
          <span className="contact-card__value">+36 30 401 3944</span>
        </a>

        <div className="contact-card">
          <span className="contact-card__label">Location</span>
          <span className="contact-card__value">Budapest, Hungary</span>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;