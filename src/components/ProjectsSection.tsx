import "./ProjectsSection.css";

const projects = [
  {
    title: "Enterprise Learning Management Platform",
    stack: "Angular · TypeScript · RxJS · NgRx · REST APIs",
    description:
      "Built scalable workflow-driven interfaces and reusable UI components for a large enterprise learning platform supporting complex business and content management processes.",
    highlights: [
      "Developed reusable frontend modules and workflow-focused UI patterns",
      "Handled complex business logic and state-driven interfaces",
      "Improved maintainability through refactoring and shared component thinking",
    ],
  },
  {
    title: "Healthcare Business Application",
    stack: "React · TypeScript · Redux · SCSS · Jest",
    description:
      "Developed clear, reliable interfaces for a healthcare-related business application used in a regulated environment, with strong focus on usability, performance, and stability.",
    highlights: [
      "Built React-based interfaces for operational workflows",
      "Managed complex application state using Redux",
      "Supported reliability with testing and structured frontend implementation",
    ],
  },
  {
    title: "Frontend Architecture Modernization",
    stack: "Angular · AngularJS · NgRx · TypeScript · Component Architecture",
    description:
      "Worked on modernizing legacy frontend systems by improving architecture, introducing maintainable component patterns, and supporting migration toward more scalable Angular solutions.",
    highlights: [
      "Supported migration from AngularJS to modern Angular architecture",
      "Introduced stronger component-driven frontend structure",
      "Reduced technical debt through refactoring and modernization",
    ],
  },
];

function ProjectsSection() {
  return (
    <section className="projects" id="projects">
      <div className="projects__header">
        <p className="projects__eyebrow">Selected Projects</p>
        <h2>Work that reflects how I build products</h2>
        <p className="projects__intro">
          A selection of enterprise and product-focused frontend work
          demonstrating scalable UI development, modern architecture, and
          complex workflow-driven applications.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-card__top">
              <h3>{project.title}</h3>
              <p className="project-card__stack">{project.stack}</p>
            </div>

            <p className="project-card__description">{project.description}</p>

            <ul className="project-card__list">
              {project.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;