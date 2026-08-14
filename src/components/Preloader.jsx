import React, { useEffect, useState } from 'react';
import { Sparkles, Code2, Heart } from 'lucide-react';
import '../CSS/Preloader.css';

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Welcome to my portfolio...');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 16) + 10;
        return next > 100 ? 100 : next;
      });
    }, 85);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 35) {
      setStatusText('Welcome to my developer portfolio...');
    } else if (progress < 70) {
      setStatusText('Loading projects, skills & experience...');
    } else if (progress < 100) {
      setStatusText('Preparing interactive workspace...');
    } else {
      setStatusText('Welcome! Let’s explore together ✨');
      const timer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          if (onFinish) onFinish();
        }, 600);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [progress, onFinish]);

  return (
    <div className={`preloader-overlay ${isFading ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        {/* Welcome Pill Badge */}
        <div className="preloader-welcome-badge">
          <Sparkles size={14} className="welcome-icon" />
          <span>Welcome to My Portfolio</span>
        </div>

        {/* Glowing Logo / Symbol */}
        <div className="preloader-logo-box">
          <div className="logo-halo-ring"></div>
          <div className="logo-inner-circle">
            <Code2 size={32} className="preloader-icon" />
          </div>
        </div>

        {/* Brand Text */}
        <div className="preloader-brand">
          <span className="brand-prefix">&lt;</span>
          <span className="brand-name">Saikiran</span>
          <span className="brand-dot">.</span>
          <span className="brand-suffix">dev /&gt;</span>
        </div>

        <p className="preloader-tagline">Full-Stack Developer &amp; Problem Solver</p>

        {/* Status Line */}
        <div className="preloader-status">
          <span className="status-pulse-dot"></span>
          <span>{statusText}</span>
        </div>

        {/* Progress Bar Container */}
        <div className="preloader-progress-track">
          <div 
            className="preloader-progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage Counter */}
        <div className="preloader-percent">
          <span>{progress}%</span>
        </div>
      </div>

      {/* Decorative Corner Lights */}
      <div className="preloader-glow-top"></div>
      <div className="preloader-glow-bottom"></div>
    </div>
  );
};

export default Preloader;
