import "./AboutSection.css";

const highlights = [
  "7+ Years Experience",
  "React & Angular",
  "Enterprise Platforms",
  "MedTech Background",
  "UI Architecture",
  "Agile Delivery",
];

function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <p className="about__eyebrow">About Me</p>
        <h2>Frontend development with structure, product thinking, and clarity</h2>

        <p className="about__lead">
          I’m a Senior Frontend Developer focused on building modern, scalable,
          and user-friendly web applications.
        </p>

        <p className="about__text">
          I enjoy turning complex business workflows into intuitive digital
          experiences, building reusable UI patterns, and creating frontend
          architecture that remains maintainable as products grow.
        </p>

        <p className="about__text">
          My background includes enterprise platforms, healthcare-related
          systems, and product-focused development environments where
          performance, usability, and clarity are essential.
        </p>
      </div>

      <div className="about__cards">
        {highlights.map((item) => (
          <div className="about-card" key={item}>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;