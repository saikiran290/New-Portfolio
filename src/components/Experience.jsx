import React from 'react';
import TiltCard from './3d/TiltCard';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import '../CSS/Experience.css';

const experiences = [
  {
    title: 'AWS & DevOps Intern',
    company: 'Hashteck Solutions, Visakhapatnam',
    duration: 'December 2025 – March 2026',
    type: 'Internship',
    image: 'https://tse2.mm.bing.net/th/id/OIP.vMXiaCfLZyVQKhRgQkYHZQHaD0?r=0&pid=Api&h=220&P=0',
    points: [
      'Gained hands-on exposure to AWS cloud services and cloud infrastructure concepts.',
      'Worked with DevOps concepts including deployment workflows, version control, and CI/CD fundamentals.',
      'Learned cloud deployment, application hosting, and infrastructure management practices.',
      'Worked with development and deployment tools used in modern cloud environments.',
    ],
  },
  {
    title: 'Cyber Security Intern',
    company: 'Kiriy Software Technologies, Kakinada',
    duration: 'June – July 2024',
    type: 'Internship',
    image: 'https://cdn.pixabay.com/photo/2023/04/30/10/12/cyber-security-7960243_1280.png',
    points: [
      'Analyzed common security vulnerabilities and assessed application risks.',
      'Supported security review activities and documentation for practical exposure.',
      'Developed an understanding of secure development and vulnerability remediation practices.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="section-header">
        <span className="section-tag">
          <Briefcase size={14} /> Career Journey
        </span>
        <h2 className="section-title-main">Experience & Internships</h2>
        <p className="section-subtitle-main">
          Practical industry experience in cloud computing, DevOps workflows, and security assessment
        </p>
      </div>

      <div className="experience-timeline">
        <div className="timeline-line"></div>

        {experiences.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot">
              <Briefcase size={16} />
            </div>

            <TiltCard maxTilt={8} className="experience-tilt-wrapper">
              <div className="experience-card glass-card">
                <div className="exp-card-header">
                  <div className="exp-company-logo">
                    <img src={item.image} alt={item.company} />
                  </div>
                  <div className="exp-heading-text">
                    <h3 className="exp-role-title">{item.title}</h3>
                    <p className="exp-company-name">{item.company}</p>
                  </div>
                  <span className="exp-type-badge">{item.type}</span>
                </div>

                <div className="exp-meta-bar">
                  <span className="exp-date">
                    <Calendar size={14} /> {item.duration}
                  </span>
                </div>

                <ul className="exp-bullets">
                  {item.points.map((point, idx) => (
                    <li key={idx}>
                      <ChevronRight size={16} className="bullet-arrow" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
