import React from 'react';
import TiltCard from './3d/TiltCard';
import { Award, BadgeCheck, ShieldCheck, ExternalLink } from 'lucide-react';
import '../CSS/Certifications.css';

const certifications = [
  {
    name: 'ServiceNow Certified System Administrator (CSA)',
    issuer: 'ServiceNow',
    code: 'CSA',
    description: 'Validation of system management, user administration, table configuration, and ITSM core application skills.',
  },
  {
    name: 'ServiceNow Certified Application Developer (CAD)',
    issuer: 'ServiceNow',
    code: 'CAD',
    description: 'Validation of application design, script execution, ACL security rules, flow designer, and custom app building.',
  },
];

const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <div className="section-header">
        <span className="section-tag">
          <Award size={14} /> Official Credentials
        </span>
        <h2 className="section-title-main">Certifications</h2>
        <p className="section-subtitle-main">
          Professional ServiceNow certifications validating system administration and application development mastery
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((item, index) => (
          <TiltCard key={index} maxTilt={12} className="cert-tilt-wrapper">
            <div className="certification-card glass-card">
              <div className="cert-icon-container">
                <div className="cert-metallic-badge">
                  <BadgeCheck size={32} />
                </div>
                <span className="cert-code-tag">{item.code}</span>
              </div>

              <div className="cert-content">
                <h3 className="cert-title">{item.name}</h3>
                <div className="cert-issuer-badge">
                  <ShieldCheck size={14} />
                  <span>Issued by {item.issuer}</span>
                </div>
                <p className="cert-desc">{item.description}</p>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
