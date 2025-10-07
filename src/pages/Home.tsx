const education = {
  institution: 'Central Piedmont Community College',
  program: 'A.A. in Computer Science Pathway',
  timeframe: 'Aug 2024 - May 2026',
  gpa: 'GPA 3.5 / 4.0',
  details: [
    'Relevant Coursework: Programming and Logic, Introduction to Computers, Python Programming, Data Structures and Algorithms, Java Programming.',
    "Honors and Awards: Dean's List (Spring 2025).",
  ],
};

const experiences = [
  {
    company: 'SERNAIS',
    location: 'Charlotte, NC',
    role: 'Freelance Full-Stack Developer',
    timeframe: 'Apr 2025 - Aug 2025',
    bullets: [
      'Engineered a full-stack e-commerce platform for an independent fashion brand using Flask, JavaScript, and SQLite.',
      'Implemented user authentication, a persistent shopping cart, and dynamic product rendering from a SQLite database.',
      'Partnered with the client to translate business requirements and brand vision into detailed technical specifications.',
      'Managed the development lifecycle from concept and database design to deployment and version control with Git.',
    ],
  },
  {
    company: 'Harris Teeter',
    location: 'Charlotte, NC',
    role: 'Cashier / Bagger',
    timeframe: 'Sep 2021 - Jan 2024',
    bullets: [
      'Delivered dependable customer support in a fast-paced retail environment while adapting between cashier and bagger roles.',
      'Trained new hires on point-of-sale systems and customer service protocols to improve team readiness during peak hours.',
    ],
  },
];

const heroHighlights = [
  'Python & TypeScript Ecosystems',
  'Interface Architecture & Automation',
  'Available for 2025 Internships',
];

const Home = () => {
  return (
    <section className="page home-page">
      <div className="home-hero">
        <span className="eyebrow">Charlotte - North Carolina</span>
        <h1 className="hero-title">Joshua Benitez-Torres</h1>
        <p className="hero-lede">
          Full-stack developer and computer science student shaping precise, data-informed digital
          products for brands and teams that value polish.
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
            I build applications that align elevated interfaces with dependable engineering. From
            producing ecommerce platforms to leading student-led products, my work centers on
            crafting tactile user journeys that feel effortless.
          </p>
          <p>
            The portfolio below pairs academic achievements with practical engagements to
            demonstrate how I translate research, analytics, and collaboration into refined,
            production-ready solutions.
          </p>
        </div>
      </article>

      <div className="home-panels">
        <article className="content-card">
          <span className="eyebrow">Education</span>
          <ul className="list-reset experience-list">
            <li className="experience-item">
              <div className="section-meta">
                <span>{education.institution}</span>
                <span>{education.timeframe}</span>
              </div>
              <p className="section-highlight">{education.program}</p>
              <p className="section-highlight">{education.gpa}</p>
              <ul className="detail-list">
                {education.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
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
