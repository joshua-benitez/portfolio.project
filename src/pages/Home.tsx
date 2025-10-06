const education = {
  institution: 'Central Piedmont Community College',
  program: 'A.A. in Computer Science Pathway',
  timeframe: 'Aug 2024 - May 2026',
  gpa: 'GPA 3.5 / 4.0',
  details: [
    'Relevant Coursework: Programming and Logic, Introduction to Computers, Python Programming, Data Structures and Algorithms, Java Programming.',
    'Honors and Awards: Dean\'s List (Spring 2025).',
  ],
};

const experiences = [
  {
    company: 'SERNAIS',
    location: 'Charlotte, NC',
    role: 'Freelance Full-Stack Developer',
    timeframe: 'April 2025 - August 2025',
    bullets: [
      'Engineered a full-stack e-commerce platform for an independent fashion brand using Flask, JavaScript, and SQLite.',
      'Implemented user authentication, a persistent shopping cart, and dynamic product rendering from a SQLite database.',
      'Partnered with the client to translate business requirements and brand vision into technical specifications.',
      'Managed the complete development lifecycle from concept and database design to deployment and version control with Git.',
    ],
  },
  {
    company: 'Harris Teeter',
    location: 'Charlotte, NC',
    role: 'Cashier / Bagger',
    timeframe: 'September 2021 - January 2024',
    bullets: [
      'Delivered dependable customer support in a fast-paced retail environment while adapting between cashier and bagger roles.',
      'Trained new hires on point-of-sale systems and customer service protocols to improve team readiness during peak hours.',
    ],
  },
];

const Home = () => {
  return (
    <section>
      <header>
        <h1 className="page-heading">Joshua Benitez-Torres</h1>
        <p className="page-subtitle">Full-stack developer and computer science student based in Charlotte, NC.</p>
      </header>
      <div className="content-card intro-container">
        <p>
          I am a developer focused on building data-informed applications that balance user
          experience with reliable architecture. My current work centers on Python and TypeScript
          ecosystems, with experience delivering production-grade web platforms for clients and
          student-led initiatives.
        </p>
        <p>
          I thrive on projects that bridge analytics, automation, and clean interface design. This
          portfolio highlights my recent experience, coursework, and the technical skills I bring to
          collaborative engineering teams.
        </p>
      </div>

      <div className="home-grid">
        <article className="content-card">
          <header className="section-header">
            <h2 className="section-subtitle">Education</h2>
            <p className="section-meta">{education.institution} | {education.timeframe}</p>
          </header>
          <p className="section-highlight">{education.program} | {education.gpa}</p>
          <ul className="detail-list">
            {education.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="content-card">
          <header className="section-header">
            <h2 className="section-subtitle">Experience</h2>
          </header>
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
