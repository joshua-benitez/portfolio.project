interface ProjectLink {
  label: string;
  href: string;
}

interface Project {
  title: string;
  timeframe: string;
  summary: string;
  details: string[];
  tech: string[];
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    title: 'Elyte',
    timeframe: 'Jan 2026 - Present',
    summary:
      'Deployed coding assessment platform where problems are judged by behavior rather than implementation across browser, React, and Python execution environments.',
    details: [
      'Built a coding assessment platform around one constraint, where problems are judged by behavior rather than implementation across browser, React, and Python environments.',
      'Designed a rule-handler registry and shared problem schema so new problem types, metadata, and validation logic can be added without changing the core judge engine.',
      'Engineered an asynchronous submission pipeline in which a FastAPI service queues jobs through Redis, isolated judge workers execute Python and browser-based evaluations, and the frontend polls for structured pass/fail verdicts.',
      'Deployed the platform on Vercel with a Dockerized DigitalOcean backend stack using PostgreSQL, Redis, and HTTPS routing for production use.',
    ],
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Vercel', 'DigitalOcean'],
    links: [{ label: 'Live Demo', href: 'https://www.elyte.page' }],
  },
  {
    title: 'Taper',
    timeframe: 'Oct 2025 - Present',
    summary:
      'Body composition tracker that combines weight and waist measurements with 7-day trend smoothing to separate fat-loss trend from day-to-day scale noise.',
    details: [
      'Implemented Mifflin-St Jeor BMR, Navy body-fat, and TDEE calorie calculations in a FastAPI backend backed by PostgreSQL and SQLAlchemy.',
      'Developed JWT authentication with access/refresh token rotation and an interactive dashboard featuring trend visualization, macro tracking, and goal-date projections.',
    ],
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'SQLAlchemy'],
    links: [{ label: 'Live Demo', href: 'https://www.taper.dev' }],
  },
  {
    title: 'CourseFlow',
    timeframe: 'Aug 2025 - Present',
    summary:
      'Assignment planner that parses course syllabi and generates ranked task lists based on urgency, difficulty, and grade impact.',
    details: [
      'Built an academic planning app that parses course syllabi and generates ranked task lists based on urgency, difficulty, and grade impact.',
      'Engineered a prioritization system that surfaces critical deadlines and quick-win tasks across a student’s full course load instead of treating all assignments equally.',
      'Built a dashboard with course filters, due-date grouping, and rank progression mechanics that incentivize consistent assignment completion and on-time work.',
    ],
    tech: ['Next.js', 'TypeScript', 'React', 'Prisma', 'NextAuth.js'],
    links: [
      { label: 'Live Demo', href: 'https://courseflow-alpha.vercel.app' },
    ],
  },
];

const Projects = () => {
  return (
    <section className="page projects-page">
      <header className="page-header">
        <span className="eyebrow">Selected Work</span>
        <h1 className="page-heading">Projects</h1>
        <p className="page-subtitle">
          Recent product builds focused on practical systems, deployed software, and backend-heavy
          application design.
        </p>
      </header>

      <ul className="list-reset projects-grid">
        {projects.map((project) => (
          <li key={project.title} className="content-card project-card">
            <span className="eyebrow">{project.timeframe}</span>
            <h2 className="section-title">{project.title}</h2>
            <p className="project-summary">{project.summary}</p>
            {project.details && (
              <ul className="project-details">
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            )}
            <div className="tech-stack">
              {project.tech.map((tech) => (
                <span className="tech-tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
            {project.links.length > 0 && (
              <div className="project-links">
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    <i className="fas fa-external-link-alt" aria-hidden="true" />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
