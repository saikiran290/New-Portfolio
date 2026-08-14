import React, { useEffect, useState } from 'react';
import ThreeCanvas from './components/3d/ThreeCanvas';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    // Scroll-reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="portfolio-app-root">
      {/* Intro Preloader Splash Screen on Refresh/Load */}
      {loading && <Preloader onFinish={() => setLoading(false)} />}

      {/* 3D WebGL Three.js Particle Background */}
      <ThreeCanvas />

      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="cursor-spotlight"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      />

      {/* Floating Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
        <main className="main-content-flow">
          <Home />
          <div className="reveal"><About /></div>
          <div className="reveal reveal-delay-1"><Experience /></div>
          <div className="reveal"><Projects /></div>
          <div className="reveal reveal-delay-1"><Skills /></div>
          <div className="reveal"><Contact /></div>
        </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
