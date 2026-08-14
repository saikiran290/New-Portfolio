import React, { useState, useEffect } from 'react';
import Hero3DObject from './3d/Hero3DObject';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Download,
  Sparkles,
  ArrowRight,
  Terminal,
  CheckCircle2,
  Code
} from 'lucide-react';
import '../CSS/Home.css';

const roles = [
  'Full-Stack Developer',
  'MERN Stack Engineer',
  'ServiceNow Developer',
  'AWS & DevOps Learner',
  'Java Programmer',
];

const Home = () => {
  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIdx];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIdx]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Column: Text & CTAs */}
        <div className="hero-text-column">
          <div className="hero-status-badge">
            <span className="status-dot"></span>
            <span>Available for Full-time Roles & Projects</span>
            <Sparkles size={14} className="sparkle-icon" />
          </div>

          <h1 className="hero-name-heading">
            <span className="greeting-text">Hi, I'm</span>
            <span className="gradient-name">Saikiran Potnuru</span>
          </h1>

          <div className="role-typing-box">
            <Terminal size={20} className="terminal-icon" />
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-description">
            Building scalable digital solutions with MERN Stack, Java, ServiceNow workflows,
            and AWS/DevOps practices. Focused on clean architecture, high performance, and user impact.
          </p>

          <div className="hero-cta-group">
            <button onClick={() => scrollToSection('projects')} className="btn-hero-primary">
              <span>View Featured Work</span>
              <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-hero-secondary">
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a href="https://github.com/saikiran290" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/saikiran-potnuru-aa9894257/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:saipotnuru257@gmail.com" title="Email">
              <Mail size={20} />
            </a>
            <a href="/sai-resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume PDF">
              <FileText size={20} />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-metrics-bar glass-card">
            <div className="metric-item">
              <span className="metric-number">4+</span>
              <span className="metric-label">Full-Stack Projects</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">2</span>
              <span className="metric-label">Certifications</span>
            </div>
            <div className="metric-divider"></div>
            <div className="metric-item">
              <span className="metric-number">7.83</span>
              <span className="metric-label">B.Tech CGPA ('2026)</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D WebGL Canvas Interactive Object */}
        <div className="hero-3d-column">
          <Hero3DObject />
        </div>
      </div>
    </section>
  );
};

export default Home;
