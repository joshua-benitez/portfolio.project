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
    title: 'Frameworks and Tools',
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
      'Git and GitHub',
    ],
  },
];

const Skills = () => {
  return (
    <section>
      <h1 className="page-heading">Skills</h1>
      <ul className="list-reset skills-grid">
        {skillCategories.map((category) => (
          <li key={category.title} className="content-card">
            <h2 className="section-subtitle">{category.title}</h2>
            <p>{category.items.join(', ')}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
