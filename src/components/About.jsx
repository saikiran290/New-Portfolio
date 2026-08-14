import React from 'react';
import TiltCard from './3d/TiltCard';
import { 
  User, 
  GraduationCap, 
  Code, 
  Target, 
  Award, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Layers 
} from 'lucide-react';
import '../CSS/About.css';

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span className="section-tag">
          <User size={14} /> Who I Am
        </span>
        <h2 className="section-title-main">About Me</h2>
        <p className="section-subtitle-main">
          Full-Stack Developer passionate about practical, scalable digital solutions
        </p>
      </div>

      <div className="about-container">
        {/* Left Column: Premium Profile Card */}
        <div className="about-avatar-column">
          <TiltCard maxTilt={12} className="profile-tilt-wrapper">
            <div className="profile-glass-card glass-card">

                {/* Top glow band */}
                <div className="card-top-band">
                  {/* Orbit Wrapper */}
                  <div className="profile-orbit-wrapper">
                    {/* Profile Avatar Image with Professional Glow Ring */}
                    <div className="profile-avatar-container">
                      <img 
                        src="/profile.jpg" 
                        alt="Saikiran Potnuru" 
                        className="profile-avatar-image" 
                      />
                      <div className="avatar-glass-overlay"></div>
                    </div>

                    {/* Flat 360° orbit — same as before */}
                    <div className="badge-orbit badge-orbit-1">
                      <div className="float-badge">🧩 MERN</div>
                    </div>
                    <div className="badge-orbit badge-orbit-2">
                      <div className="float-badge">☁️ AWS & DevOps</div>
                    </div>
                    <div className="badge-orbit badge-orbit-3">
                      <div className="float-badge">☕ Java</div>
                    </div>
                    <div className="badge-orbit badge-orbit-4">
                      <div className="float-badge">🔧 ServiceNow</div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="card-divider">
                  <span className="divider-dot"></span>
                  <span className="divider-line"></span>
                  <span className="divider-dot"></span>
                </div>

                {/* Info Section */}
                <div className="profile-details-mini">
                  <h3 className="profile-name">Saikiran Potnuru</h3>
                  <p className="profile-role">Full-Stack Developer</p>

                  {/* Quick Stats */}
                  <div className="profile-stats-row">
                    <div className="profile-stat">
                      <span className="stat-num">4+</span>
                      <span className="stat-lbl">Projects</span>
                    </div>
                    <div className="profile-stat-divider"></div>
                    <div className="profile-stat">
                      <span className="stat-num">2</span>
                      <span className="stat-lbl">Certs</span>
                    </div>
                    <div className="profile-stat-divider"></div>
                    <div className="profile-stat">
                      <span className="stat-num">7.83</span>
                      <span className="stat-lbl">CGPA</span>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="profile-status-badge">
                    <span className="status-pulse"></span>
                    <span>Available for Opportunities</span>
                  </div>
                </div>

            </div>
          </TiltCard>
        </div>

        {/* Right Column: Narrative & Education Card */}
        <div className="about-info-column">
          <div className="about-bio-card glass-card">
            <div className="bio-header">
              <Sparkles className="bio-sparkle" size={20} />
              <h3>Crafting Clean, Secure & Performant Software</h3>
            </div>
            
            <p className="bio-text">
              I'm a Full-Stack Developer passionate about building scalable and user-focused digital solutions. 
              With hands-on experience in MERN stack development, Java, ServiceNow, AWS, and DevOps, I enjoy 
              turning real-world problems into practical software solutions. My experience spans full-stack web applications, 
              ITSM automation, cloud technologies, and DevOps practices. Driven by continuous learning and a passion 
              for creating clean, secure, and maintainable applications.
            </p>

            {/* Education Spotlight */}
            <div className="education-spotlight">
              <div className="edu-icon-box">
                <GraduationCap size={28} />
              </div>
              <div className="edu-content">
                <div className="edu-header">
                  <h4>B.Tech in Information Technology</h4>
                  <span className="cgpa-pill">CGPA: 7.83</span>
                </div>
                <p className="edu-institute">GMR Institute of Technology | Rajam</p>
                <span className="edu-year">Graduation Year: 2026</span>
              </div>
            </div>

            {/* Core Competencies Pills */}
            <div className="competencies-box">
              <h4 className="competencies-title">
                <BookOpen size={16} /> Core Competencies
              </h4>
              <div className="competencies-tags">
                {[
                  'MERN Stack',
                  'Java',
                  'JavaScript',
                  'React.js',
                  'MongoDB',
                  'MySQL',
                  'ServiceNow',
                  'AWS & DevOps',
                  'Git & GitHub'
                ].map((skill, idx) => (
                  <span key={idx} className="comp-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="about-actions">
              <button onClick={() => scrollToSection('contact')} className="btn-about-primary">
                <span>Let's Connect</span>
                <ArrowRight size={18} />
              </button>
              <button onClick={() => scrollToSection('projects')} className="btn-about-secondary">
                <span>Explore Projects</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;