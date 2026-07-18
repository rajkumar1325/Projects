import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (percentage) => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: scrollHeight * percentage,
      behavior: 'smooth'
    });
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '60px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 4vw',
        boxSizing: 'border-box',
        transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.75)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      {/* Brand logo (Left) */}
      <div 
        onClick={() => scrollToSection(0)}
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: '1rem',
          letterSpacing: '0.15em',
          color: scrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
          cursor: 'pointer',
          transition: 'color 0.3s ease',
        }}
      >
        SONY <span style={{ fontWeight: 400, opacity: 0.6, fontSize: '0.85rem', marginLeft: '6px' }}>WH-1000XM6</span>
      </div>

      {/* Nav links (Center) */}
      <nav 
        style={{
          display: 'flex',
          gap: '2.5vw',
          alignItems: 'center',
        }}
      >
        {[
          { label: 'Overview', percent: 0 },
          { label: 'Technology', percent: 0.28 },
          { label: 'Noise Cancelling', percent: 0.52 },
          { label: 'Specs', id: 'specs-section' },
        ].map((item) => (
          <span
            key={item.label}
            onClick={() => {
              if (item.id) {
                scrollToElement(item.id);
              } else {
                scrollToSection(item.percent);
              }
            }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'var(--transition-snappy)',
              position: 'relative',
              padding: '6px 0',
            }}
            className="nav-link"
            onMouseEnter={(e) => e.target.style.color = '#ffffff'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
          >
            {item.label}
          </span>
        ))}
      </nav>

      {/* Pre-order Button (Right) */}
      <button 
        onClick={() => scrollToSection(0.92)}
        className="btn-primary"
        style={{
          padding: '8px 20px',
          fontSize: '0.8rem',
        }}
      >
        Pre-order
      </button>
    </motion.header>
  );
}
