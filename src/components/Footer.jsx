import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Code2, 
  Heart, 
  ExternalLink 
} from 'lucide-react';
import '../CSS/Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-ambient-glow"></div>

      <div className="footer-main-container">
        <div className="footer-grid">
          {/* Column 1: Brand & Elevator Pitch */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <div className="footer-brand-icon">
                <Code2 size={22} />
              </div>
              <span className="footer-brand-title">
                <span className="brand-code-sym">&lt;</span>
                Saikiran
                <span className="brand-code-dot">.</span>
                dev
                <span className="brand-code-sym"> /&gt;</span>
              </span>
            </div>
            <p className="footer-brand-desc">
              Full-Stack Developer crafting scalable web applications, ITSM automations, and modern cloud architectures.
            </p>
            <div className="footer-location-tag">
              <MapPin size={14} className="loc-icon" />
              <span>Andhra Pradesh, India</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li><button onClick={() => scrollToSection('home')} className="footer-nav-link">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="footer-nav-link">About</button></li>
              <li><button onClick={() => scrollToSection('experience')} className="footer-nav-link">Experience</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="footer-nav-link">Projects</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="footer-nav-link">Skills</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="footer-nav-link">Contact</button></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div className="footer-col">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social-links">
              <a 
                href="https://github.com/saikiran290" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                title="GitHub"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/saikiran-potnuru-aa9894257/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                title="LinkedIn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:saipotnuru257@gmail.com" 
                className="footer-social-btn"
                title="Email"
              >
                <Mail size={18} />
                <span>Email Me</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            <span>© {new Date().getFullYear()} Saikiran Potnuru. All rights reserved.</span>
          </div>

          <button onClick={scrollToTop} className="footer-scroll-top-btn" title="Back to Top">
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
