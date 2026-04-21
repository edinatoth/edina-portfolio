import "./App.css";
import heroImage from "./assets/hero.png";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="app">
      <Navbar />

      <header className="hero" id="home">
        <div className="hero__content">
          <p className="hero__eyebrow">Senior Frontend Developer</p>

          <h1>
            Hi, I’m <span>Edina</span>
          </h1>

          <p className="hero__lead">
            I build modern, scalable web applications with React, Angular, and
            TypeScript.
          </p>

          <p className="hero__text">
            I have 7+ years of experience delivering enterprise-grade frontend
            solutions across complex business platforms, MedTech environments,
            and product-focused digital experiences.
          </p>

          <div className="hero__tags">
            <span>React</span>
            <span>Angular</span>
            <span>TypeScript</span>
            <span>RxJS</span>
            <span>Redux / NgRx</span>
            <span>MedTech</span>
          </div>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>

            <a
              href="/Edina_Toth_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              View CV Online
            </a>

            <a
              href="/Edina_Toth_CV.pdf"
              download
              className="btn btn--secondary"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="hero__imageWrapper">
          <div className="hero__imageBg"></div>
          <img src={heroImage} alt="Edina Tóth" className="hero__image" />
        </div>
      </header>

      <main>
        <ProjectsSection />

        <section id="about" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 0 40px" }}>
          <h2>About</h2>
          <p>
            Senior Frontend Developer with 7+ years of experience building enterprise web applications using React, 
            Angular, TypeScript and modern frontend architecture. Strong background in complex business platforms, 
            enterprise systems, and MedTech / healthcare software environments. Experienced in translating Figma 
            designs, analyst requirements, and business workflows into scalable, high-performance user interfaces. 
            Proven expertise in state management, performance optimization, reusable component architecture, and Agile 
            delivery across both healthcare and non-healthcare industries.
          </p>
        </section>

        <section id="contact" style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 0 80px" }}>
          <h2>Contact</h2>
          <p>Email: tothedina88@gmail.com</p>
          <p>
            LinkedIn:{" "}
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/edina-t%C3%B3th-1679496b"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/edina-tóth
            </a>
          </p>
          <p>Phone number: +36304013944</p>
        </section>
      </main>
    </div>
  );
}

export default App;