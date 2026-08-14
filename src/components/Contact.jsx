import React, { useState } from 'react';
import TiltCard from './3d/TiltCard';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  User, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import '../CSS/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '76e6f5a2-4426-435c-be89-af5fd9965703',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry from Website',
          message: formData.message,
          from_name: 'Saikiran Portfolio Contact Form',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: '🎉 Thank you! Your message has been sent directly to my inbox.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#6366f1', '#06b6d4', '#a855f7'],
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please try again or email directly at saipotnuru257@gmail.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: <Mail size={22} className="c-icon" />,
      label: 'Email Address',
      value: 'saipotnuru257@gmail.com',
      href: 'mailto:saipotnuru257@gmail.com',
    },
    {
      icon: <Phone size={22} className="c-icon" />,
      label: 'Phone Number',
      value: '+91 8712210191',
      href: 'tel:+918712210191',
    },
    {
      icon: <MapPin size={22} className="c-icon" />,
      label: 'Location',
      value: 'Srikakulam, Andhra Pradesh',
      href: 'https://maps.google.com/?q=Srikakulam',
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="section-header">
        <span className="section-tag">
          <Mail size={14} /> Get In Touch
        </span>
        <h2 className="section-title-main">Let's Work Together</h2>
        <p className="section-subtitle-main">
          Have an exciting project, full-time role, or opportunity in mind? Feel free to reach out!
        </p>
      </div>

      <div className="contact-container">
        {/* Left Column: Direct Info Cards & Socials */}
        <div className="contact-info-col">
          <div className="contact-cards-stack">
            {contactCards.map((item, idx) => (
              <TiltCard key={idx} maxTilt={8}>
                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact-info-card glass-card">
                  <div className="contact-icon-box">{item.icon}</div>
                  <div className="contact-card-text">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </a>
              </TiltCard>
            ))}
          </div>

          <div className="socials-box glass-card">
            <h4>Connect On Social Media</h4>
            <div className="socials-grid">
              <a
                href="https://github.com/saikiran290"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-btn"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/saikiran-potnuru-aa9894257/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card-btn"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Glass Form */}
        <div className="contact-form-col">
          <TiltCard maxTilt={6}>
            <form className="contact-glass-form glass-card" onSubmit={handleSubmit}>
              <div className="form-heading">
                <Sparkles size={20} className="form-sparkle" />
                <h3>Send a Direct Message</h3>
              </div>

              <div className="input-group">
                <label>
                  <User size={16} /> Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. John Doe"
                  required
                />
              </div>

              <div className="input-group">
                <label>
                  <Mail size={16} /> Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. john@example.com"
                  required
                />
              </div>

              <div className="input-group">
                <label>
                  <MessageSquare size={16} /> Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Discussion / Job Opportunity"
                />
              </div>

              <div className="input-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span className="btn-spinner" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus && (
                <div className={`status-banner ${submitStatus.type}`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              )}
            </form>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
