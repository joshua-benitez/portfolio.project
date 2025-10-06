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
    title: 'SlipSense - Full Stack Sports Analytics Demo Platform',
    timeframe: 'June - July 2025',
    summary:
      'Full-stack web application demonstrating sports betting analysis with statistical modeling and simulated datasets.',
    details: [
      'Built a Python and FastAPI backend exposing REST APIs for multi-sport probability modeling.',
      'Developed a responsive React and Next.js frontend with TypeScript components and real-time data visualizations.',
      'Implemented Poisson distribution models and probability calculations with NumPy and SciPy.',
      'Designed a deployable architecture on Vercel and Render, ready for live sports data integration.',
    ],
    tech: ['Python', 'FastAPI', 'Next.js', 'React', 'TypeScript', 'Pandas', 'NumPy'],
    links: [],
  },
  {
    title: 'CourseFlow - Assignment Management System',
    timeframe: 'August 2025 - Present',
    summary:
      'Productivity platform built to streamline student course planning with secure authentication and task management.',
    details: [
      'Architected a full-stack Next.js application with TypeScript, feature-based organization, and reusable UI components.',
      'Implemented authentication with NextAuth.js, Prisma ORM for database management, and form validation via TypeScript interfaces.',
      'Delivered responsive layouts and CRUD workflows optimized for desktop and mobile study sessions.',
    ],
    tech: ['Next.js', 'TypeScript', 'React', 'Prisma', 'NextAuth.js'],
    links: [],
  },
  {
    title: 'Lift Fitness Tracker - Gamified Workout Management',
    timeframe: 'August 2025 - Present',
    summary:
      'Gamified workout companion with ranking systems, workout templates, and live tracking tools.',
    details: [
      'Created a game-inspired Next.js interface with Tailwind CSS, custom SVG rank badges, and dashboard panels.',
      'Implemented workout flows with template selection, live set tracking, rest timers, and streak calculations persisted locally when offline.',
      'Developed an Express and SQLite API with JWT authentication plus endpoints for sessions, history, and seeded push-pull templates.',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Express', 'SQLite'],
    links: [],
  },
];

const Projects = () => {
  return (
    <section>
      <h1 className="page-heading">Projects</h1>
      <ul className="list-reset projects-grid">
        {projects.map((project) => (
          <li key={project.title} className="content-card">
            <article>
              <header>
                <h2 className="section-subtitle">{project.title}</h2>
                <p className="section-meta">{project.timeframe}</p>
              </header>
              <p>{project.summary}</p>
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
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
