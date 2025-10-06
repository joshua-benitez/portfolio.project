const contactLinks = [
  {
    href: 'mailto:joshuaabenitez01@gmail.com',
    icon: 'fas fa-envelope',
    label: 'Email',
    display: 'joshuaabenitez01@gmail.com',
  },
  {
    href: 'tel:+19802547623',
    icon: 'fas fa-phone',
    label: 'Phone',
    display: '980-254-7623',
  },
  {
    href: 'https://linkedin.com/in/joshua-benitez',
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    display: 'linkedin.com/in/joshua-benitez',
  },
  {
    href: 'https://github.com/joshua-benitez',
    icon: 'fab fa-github',
    label: 'GitHub',
    display: 'github.com/joshua-benitez',
  },
];

const Contact = () => {
  return (
    <section className="page contact-page">
      <header className="page-header">
        <span className="eyebrow">Connect</span>
        <h1 className="page-heading">Contact</h1>
        <p className="page-subtitle">
          Ready to collaborate on refined digital products. Reach out directly and I'll respond within
          two business days.
        </p>
      </header>

      <div className="content-card contact-panel">
        <div className="contact-overview">
          <span className="eyebrow">Studio Location</span>
          <p>Charlotte, North Carolina</p>
          <p>Available for freelance and internship opportunities.</p>
        </div>
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
              <span className="contact-icon">
                <i className={link.icon} aria-hidden="true" />
              </span>
              {link.display}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
