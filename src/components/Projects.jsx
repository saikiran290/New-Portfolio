import React from 'react';
import TiltCard from './3d/TiltCard';
import confetti from 'canvas-confetti';
import spamImg from '../assets/spam-classifier.png';
import snow from '../assets/snow.jpg';
import job from '../assets/job.jpeg';
import { 
  Code2, 
  Github, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Terminal 
} from 'lucide-react';
import '../CSS/Projects.css';

const projects = [
  {
    title: 'Spam Email Classifier & Summarizer',
    category: 'AI / NLP Full-Stack',
    tech: ['MERN Stack', 'Hugging Face', 'Naive Bayes'],
    description:
      'Built a full-stack application for classifying spam emails and generating concise summaries using NLP-based workflows.',
    github: 'https://github.com/saikiran290/mini_project.git',
    live: 'https://mini-project-peach-five.vercel.app/',
    image: 'https://sparkle.io/wp-content/uploads/2025/01/SPAM-TRIGGER-WORDS.jpg',
  },
  {
    title: 'Streamlining Ticket Assignment',
    category: 'ServiceNow ITSM',
    tech: ['ServiceNow', 'ACLs', 'Workflows', 'JavaScript'],
    description:
      'Designed a ServiceNow-based workflow to streamline ticket routing and assignment with practical access-control logic.',
    github: 'https://github.com/saikiran290/Streamlining-Ticket.git',
    live: '',
    image: snow,
  },
  {
    title: 'Job Portal',
    category: 'Full-Stack Web App',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    description:
      'Developed a job portal enabling users to register, explore roles, and apply through a responsive web experience.',
    github: 'https://github.com/saikiran290/jobPortal',
    live: '',
    image: job,
  },
  {
    title: 'Alumni Connect Web Portal',
    category: 'Full-Stack Platform',
    tech: ['React.js', 'Bun', 'MySQL', 'Node.js'],
    description:
      'Developed a web-based alumni engagement platform to help students and alumni interact, share opportunities, and build a stronger community.',
    github: 'https://github.com/saikiran290/Alumni-Connect',
    live: '',
    image: 'https://www.cgc.edu.in/public/images/pages/alumni/Connectivity%20Banner01.jpg',
  },
];

const Projects = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#06b6d4', '#a855f7'],
    });
  };

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <span className="section-tag">
          <Code2 size={14} /> My Portfolio
        </span>
        <h2 className="section-title-main">Featured Projects</h2>
        <p className="section-subtitle-main">
          A selection of recent full-stack applications, AI tools, and platform workflows
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <TiltCard key={index} maxTilt={12} className="project-tilt-wrapper">
            <div className="project-card glass-card">
              <div className="project-image-box">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="image-overlay-glow">
                  <span className="project-cat-pill">{project.category}</span>
                </div>
              </div>

              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                
                <div className="project-tech-tags">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="p-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-card-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-btn p-btn-github"
                    onClick={triggerConfetti}
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-btn p-btn-live"
                      onClick={triggerConfetti}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
