import React, { useState, useEffect } from 'react';
import { 
  Home as HomeIcon, 
  User, 
  Briefcase, 
  Code2, 
  Cpu, 
  Mail, 
  FileText, 
  Menu, 
  X 
} from 'lucide-react';
import '../CSS/Navbar.css';

const navItems = [
  { id: 'home',       label: 'Home',       icon: <HomeIcon size={16} /> },
  { id: 'about',      label: 'About',      icon: <User size={16} /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={16} /> },
  { id: 'projects',   label: 'Projects',   icon: <Code2 size={16} /> },
  { id: 'skills',     label: 'Skills',     icon: <Cpu size={16} /> },
  { id: 'contact',    label: 'Contact',    icon: <Mail size={16} /> },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  return (
    <header className={`modern-navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="modern-navbar glass-card">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-symbol">&lt;/&gt;</span>
          <span className="logo-text">
            Saikiran<span className="logo-dot">.dev</span>
          </span>
        </div>

        <ul className="nav-menu-desktop">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
                {activeSection === item.id && <span className="active-glow-pill" />}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            href="/sai-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-download-btn"
            download="Saikiran_Potnuru_Resume.pdf"
          >
            <FileText size={16} />
            <span>Resume</span>
          </a>

          <button
            className="mobile-hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="mobile-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
          <li className="mobile-resume-item">
            <a
              href="/sai-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-resume-btn"
              download="Saikiran_Potnuru_Resume.pdf"
            >
              <FileText size={18} />
              <span>Download Resume</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
