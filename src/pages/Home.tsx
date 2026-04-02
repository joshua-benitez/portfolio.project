const education = [
  {
    institution: 'University of North Carolina at Charlotte',
    location: 'Charlotte, NC',
    program: 'B.S. in Computer Science, Incoming Transfer Student (Fall 2026)',
    timeframe: 'Expected May 2028',
    detail: '',
  },
  {
    institution: 'Central Piedmont Community College',
    location: 'Charlotte, NC',
    program: 'A.A., Computer Science Pathway',
    timeframe: 'Expected May 2026',
    detail: 'GPA: 3.3 / 4.0',
  },
];

const educationNotes = [
  'Relevant Coursework: Data Structures & Algorithms, Python Programming, Java Programming, Advanced Java Programming.',
  "Honors & Awards: Dean's List (Spring 2025); Phi Theta Kappa Honor Society (Phi Lambda Chapter, 2025).",
];

const experiences = [
  {
    company: 'SERNAIS',
    location: 'Charlotte, NC',
    role: 'Freelance Full-Stack Developer',
    timeframe: 'Apr 2025 - Aug 2025',
    bullets: [
      'Built a full-stack e-commerce platform for a startup fashion brand using Flask, JavaScript, and SQLite, translating client requirements into production-ready features.',
      'Implemented user authentication, a persistent shopping cart, and database-backed product rendering.',
      'Established a scalable codebase foundation to support future product expansion and launch.',
    ],
  },
  {
    company: 'Harris Teeter',
    location: 'Charlotte, NC',
    role: 'Customer Service Clerk',
    timeframe: 'Sep 2021 - Jan 2024',
    bullets: [
      'Trained new cashiers on store procedures and customer service standards.',
      'Promoted store loyalty programs and special promotions, resulting in a 15% increase in customer enrollments.',
      'Handled high-volume cash and card transactions, ensuring 100% register balance accuracy at the end of each shift.',
    ],
  },
];

const heroHighlights = [
  'TypeScript, Next.js, FastAPI',
  'Full-Stack Product Engineering',
  'Incoming UNC Charlotte CS Transfer',
];

const Home = () => {
  return (
    <section className="page home-page">
      <div className="home-hero">
        <span className="eyebrow">Charlotte - North Carolina</span>
        <h1 className="hero-title">Joshua Alejandro Benitez-Torres</h1>
        <p className="hero-lede">
          Full-stack developer and computer science student building software products with strong
          backend systems, clear interfaces, and practical real-world value across education,
          productivity, and developer-focused platforms.
        </p>
        <div className="hero-meta">
          {heroHighlights.map((highlight) => (
            <span key={highlight}>{highlight}</span>
          ))}
        </div>
      </div>

      <article className="content-card intro-statement">
        <div className="section-header">
          <span className="eyebrow">Studio Statement</span>
          <h2 className="section-title">Designing experiences with intention and technical rigor</h2>
        </div>
        <div className="intro-stack">
          <p>
            I build applications that combine polished frontend experiences with dependable backend
            architecture. My work spans ecommerce, academic productivity, fitness analytics, and
            engineering-focused software platforms.
          </p>
          <p>
            The portfolio below reflects updated academic progress, applied engineering experience,
            and product work centered on useful systems rather than portfolio-only prototypes.
          </p>
        </div>
      </article>

      <div className="home-panels">
        <article className="content-card">
          <span className="eyebrow">Education</span>
          <ul className="list-reset experience-list">
            {education.map((item) => (
              <li key={item.institution} className="experience-item">
                <div className="section-meta">
                  <span>{item.institution}</span>
                  <span>{item.location}</span>
                  <span>{item.timeframe}</span>
                </div>
                <p className="section-highlight">{item.program}</p>
                {item.detail ? <p className="section-highlight">{item.detail}</p> : null}
              </li>
            ))}
          </ul>
          <ul className="detail-list">
            {educationNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="content-card">
          <span className="eyebrow">Experience</span>
          <ul className="list-reset experience-list">
            {experiences.map((experience) => (
              <li key={experience.company} className="experience-item">
                <div className="section-meta">
                  <span>{experience.company}</span>
                  <span>{experience.location}</span>
                  <span>{experience.timeframe}</span>
                </div>
                <p className="section-highlight">{experience.role}</p>
                <ul className="detail-list">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Home;
