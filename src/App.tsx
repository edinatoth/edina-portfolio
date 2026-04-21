import "./App.css";
import heroImage from "./assets/edina_kep.png";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <div className="app">
      <header className="hero">
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
              href="/Edina_Toth_Levaine_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              View CV Online
            </a>

            <a
              href="/Edina_Toth_Levaine_CV.pdf"
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
      </main>
    </div>
  );
}

export default App;