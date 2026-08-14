import React, { useState } from 'react';
import { Cpu } from 'lucide-react';
import '../CSS/Skills.css';

const categories = ['All', 'Technical Stack', 'Tools & Platforms', 'Professional'];

const skills = [
  // Technical Stack
  { name: 'React',       category: 'Technical Stack', level: 'Advanced',     icon: 'https://skillicons.dev/icons?i=react' },
  { name: 'Node.js',     category: 'Technical Stack', level: 'Advanced',     icon: 'https://skillicons.dev/icons?i=nodejs' },
  { name: 'MongoDB',     category: 'Technical Stack', level: 'Advanced',     icon: 'https://skillicons.dev/icons?i=mongodb' },
  { name: 'JavaScript',  category: 'Technical Stack', level: 'Intermediate', icon: 'https://skillicons.dev/icons?i=js' },
  { name: 'Java',        category: 'Technical Stack', level: 'Intermediate', icon: 'https://skillicons.dev/icons?i=java' },
  { name: 'HTML5',       category: 'Technical Stack', level: 'Advanced',     icon: 'https://skillicons.dev/icons?i=html' },
  { name: 'CSS3',        category: 'Technical Stack', level: 'Advanced',     icon: 'https://skillicons.dev/icons?i=css' },
  { name: 'MySQL',       category: 'Technical Stack', level: 'Proficient',   icon: 'https://skillicons.dev/icons?i=mysql' },
  { name: 'Express.js',  category: 'Technical Stack', level: 'Advanced',     icon: 'https://skillicons.dev/icons?i=express' },
  { name: 'AWS',         category: 'Technical Stack', level: 'Intermediate', icon: 'https://skillicons.dev/icons?i=aws' },

  // Tools & Platforms
  { name: 'Git',         category: 'Tools & Platforms', level: 'Advanced',   icon: 'https://skillicons.dev/icons?i=git' },
  { name: 'GitHub',      category: 'Tools & Platforms', level: 'Advanced',   icon: 'https://skillicons.dev/icons?i=github' },
  { name: 'VS Code',     category: 'Tools & Platforms', level: 'Expert',     icon: 'https://skillicons.dev/icons?i=vscode' },
  { name: 'Postman',     category: 'Tools & Platforms', level: 'Proficient', icon: 'https://skillicons.dev/icons?i=postman' },
  { name: 'ServiceNow',  category: 'Tools & Platforms', level: 'Certified',  emoji: '🔧' },

  // Professional
  { name: 'Teamwork', category: 'Professional', level: 'Core', emoji: '🤝' },
  { name: 'Problem Solving', category: 'Professional', level: 'Core', emoji: '🧩' },
  { name: 'Adaptability', category: 'Professional', level: 'Core', emoji: '⚡' },
  { name: 'Clean Code', category: 'Professional', level: 'Core', emoji: '✨' },
  { name: 'Communication', category: 'Professional', level: 'Core', emoji: '💬' },
];

const levelMeta = {
  Expert: { color: '#06b6d4', bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.35)' },
  Advanced: { color: '#818cf8', bg: 'rgba(99,102,241,0.12)', border: 'rgba(99,102,241,0.35)' },
  Intermediate: { color: '#c084fc', bg: 'rgba(168,85,247,0.12)', border: 'rgba(168,85,247,0.35)' },
  Proficient: { color: '#4ade80', bg: 'rgba(34,197,94,0.12)', border: 'rgba(34,197,94,0.35)' },
  Certified: { color: '#facc15', bg: 'rgba(234,179,8,0.12)', border: 'rgba(234,179,8,0.35)' },
  Core: { color: '#94a3b8', bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.25)' },
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section className="skills-section" id="skills">
      <div className="section-header">
        <span className="section-tag">
          <Cpu size={14} /> My Arsenal
        </span>
        <h2 className="section-title-main">Technical Expertise</h2>
        <p className="section-subtitle-main">
          Technologies, frameworks, tools, and methodologies I leverage to build modern applications
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="skills-filter-bar">
        {categories.map(cat => (
          <button
            key={cat}
            className={`skills-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-icon-grid">
        {filtered.map((skill, idx) => {
          const meta = levelMeta[skill.level] || levelMeta.Core;
          return (
            <div
              key={`${skill.name}-${idx}`}
              className="skill-icon-card"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              style={{ '--glow-color': meta.color }}
            >
              <div className="skill-icon-wrapper">
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.name} className="skill-img-icon" />
                ) : (
                  <span className="skill-emoji-icon">{skill.emoji}</span>
                )}
              </div>
              <span className="skill-icon-name">{skill.name}</span>
              <span
                className="skill-icon-level"
                style={{ color: meta.color, background: meta.bg, border: `1px solid ${meta.border}` }}
              >
                {skill.level}
              </span>
              <div className="skill-card-glow" style={{ background: meta.color }} />
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="skills-legend">
        {Object.entries(levelMeta).map(([level, meta]) => (
          <div key={level} className="legend-item">
            <span className="legend-dot" style={{ background: meta.color }} />
            <span className="legend-label" style={{ color: meta.color }}>{level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
