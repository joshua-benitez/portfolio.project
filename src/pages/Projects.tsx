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
    title: 'PrimeLab',
    timeframe: 'Jan 2026 - Present',
    summary:
      'LeetCode-style platform in development where every problem is designed to test behavior, not implementation, across browser, React, and Python execution environments.',
    details: [
      'Built a coding assessment platform around one constraint: every problem must test behavior, not implementation, so the judge evaluates outcomes such as DOM state, API responses, and test results.',
      'Designed a rule-handler registry for browser problems where new test logic is added through problem-specific handlers and metadata without modifying the core judge engine.',
      'Engineered an async submission pipeline where FastAPI queues jobs to Redis, an isolated Pytest worker executes user code, and the frontend polls for structured pass/fail verdicts.',
    ],
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Zod', 'Redis', 'Docker'],
    links: [{ label: 'In Development', href: '#' }],
  },
  {
    title: 'Taper',
    timeframe: 'Oct 2025 - Present',
    summary:
      'Body composition tracker built around the idea that waist measurements and weight trends together tell a truer fat-loss story than the scale alone.',
    details: [
      'Built around one insight: the scale lies, so Taper tracks waist measurements alongside weight and uses 7-day trend smoothing to reduce daily noise.',
      'Implemented domain-specific fitness calculations from scratch, including Mifflin-St Jeor BMR, the Hodgdon and Beckett Navy body-fat method, and TDEE-based calorie targets, served through FastAPI with PostgreSQL and SQLAlchemy.',
      'Built JWT authentication with access and refresh token rotation plus an interactive dashboard featuring trend lines, macro tracking, and projected goal-date estimation using Recharts.',
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
      'Engineered a prioritization system that surfaces critical deadlines and quick-win tasks across a student’s full course load instead of treating all assignments equally.',
      'Built a dashboard with course filters, due-date grouping, and rank progression mechanics that incentivize consistent assignment completion and on-time work.',
      'Shipped the app as a deployed academic planning product with authenticated student workflows.',
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
          A curated highlight of recent builds that blend analytics, automation, and tactile interface
          design.
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
