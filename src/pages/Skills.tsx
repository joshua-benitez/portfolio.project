interface SkillCategory {
  title: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Tooling',
    items: [
      'FastAPI',
      'Flask',
      'React',
      'Node.js',
      'Next.js',
      'NextAuth.js',
      'Prisma',
      'Pandas',
      'NumPy',
      'React Query',
      'Tailwind CSS',
      'SQLite',
      'PostgreSQL',
      'Git & GitHub',
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
            <header className="section-header">
              <span className="eyebrow">{category.title}</span>
              <h2 className="section-title">{category.title}</h2>
            </header>
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
