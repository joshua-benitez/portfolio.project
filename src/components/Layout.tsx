import { NavLink } from 'react-router-dom';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

const socialLinks = [
  {
    href: 'https://linkedin.com/in/joshua-benitez',
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/joshua-benitez',
    icon: 'fab fa-github',
    label: 'GitHub',
  },
  {
    href: 'mailto:joshuaabenitez01@gmail.com',
    icon: 'fas fa-envelope',
    label: 'Email',
  },
  {
    href: 'tel:+19802547623',
    icon: 'fas fa-phone',
    label: 'Phone',
  },
];

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand-lockup">
          <span className="brand-mark" aria-hidden="true">
            JB
          </span>
          <div className="brand-copy">
            <p className="brand-title">Joshua Benitez-Torres</p>
            <p className="brand-tagline">Full-Stack Developer</p>
          </div>
        </div>

        <nav className="main-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-cta">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'cta-button cta-active' : 'cta-button'
            }
          >
            Start a Project
          </NavLink>
          <div className="social-icons">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <i className={link.icon} aria-hidden="true" />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="app-main">{children}</main>

      <footer className="app-footer">
        <div className="footer-grid">
          <span>Portfolio 2024</span>
          <p>Crafted in Charlotte, North Carolina.</p>
          <div className="footer-social">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <span className="sr-only">{link.label}</span>
                <i className={link.icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
