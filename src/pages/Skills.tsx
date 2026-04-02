interface SkillCategory {
  title: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Flask', 'Node.js', 'Auth.js/NextAuth.js'],
  },
  {
    title: 'Databases & ORM',
    items: ['PostgreSQL', 'SQLite', 'Prisma', 'SQLAlchemy', 'Alembic'],
  },
  {
    title: 'Infrastructure & Tooling',
    items: [
      'Docker',
      'Redis',
      'Git',
      'GitHub',
      'Pytest',
      'Zod',
      'pnpm',
      'Turborepo',
      'Vercel',
      'DigitalOcean',
    ],
  },
];

const Skills = () => {
  return (
    <section className="page skills-page">
      <header className="page-header">
        <span className="eyebrow">Core Capabilities</span>
        <h1 className="page-heading">Skills</h1>
        <p className="page-subtitle">
          The technical toolkit I lean on to deliver products with precision, performance, and polish.
        </p>
      </header>

      <ul className="list-reset skills-grid">
        {skillCategories.map((category) => (
          <li key={category.title} className="content-card">
            <span className="eyebrow">{category.title}</span>
            <ul className="skills-columns">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
