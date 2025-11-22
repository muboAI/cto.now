import './Footer.css'

interface NavLink {
  label: string;
  href: string;
}

interface NavSection {
  title: string;
  links: NavLink[];
}

const navSections: NavSection[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Documentation', href: '#docs' },
      { label: 'Changelog', href: '#changelog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Community', href: '#community' },
      { label: 'Tutorials', href: '#tutorials' },
      { label: 'Support', href: '#support' },
      { label: 'API Reference', href: '#api' },
    ],
  },
]

const socialLinks = [
  { icon: '𝕏', label: 'Twitter', href: '#twitter' },
  { icon: '💼', label: 'LinkedIn', href: '#linkedin' },
  { icon: '🐙', label: 'GitHub', href: '#github' },
  { icon: '💬', label: 'Discord', href: '#discord' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="brand-title">Bolt.new Inspired</h3>
            <p className="brand-description">
              Building the future of web development, one component at a time.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-nav">
            {navSections.map((section, index) => (
              <div key={index} className="nav-section">
                <h4 className="nav-title">{section.title}</h4>
                <ul className="nav-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="nav-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Bolt.new Inspired. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="#privacy" className="legal-link">
              Privacy Policy
            </a>
            <span className="separator">•</span>
            <a href="#terms" className="legal-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
