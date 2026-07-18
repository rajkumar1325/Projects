import React from 'react';

export default function Footer() {
  const links = ['Privacy Policy', 'Terms of Use', 'Sony Global', 'Contact Us', 'Support', 'Product Registration'];

  return (
    <footer 
      style={{
        backgroundColor: '#050505',
        padding: '80px 6vw 50px',
        borderTop: '1px solid rgba(255, 255, 255, 0.03)',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.85rem',
        position: 'relative',
        zIndex: 20
      }}
    >
      <div 
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px'
        }}
      >
        {/* Logo */}
        <div 
          style={{
            fontWeight: 800,
            fontSize: '1.2rem',
            letterSpacing: '0.25em',
            color: 'rgba(255, 255, 255, 0.8)',
            textTransform: 'uppercase'
          }}
        >
          SONY
        </div>

        {/* Links row */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
            maxWidth: '800px',
            textAlign: 'center'
          }}
        >
          {links.map((link) => (
            <span
              key={link}
              style={{
                cursor: 'pointer',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {link}
            </span>
          ))}
        </div>

        {/* Disclaimer / Micro-copy */}
        <div 
          style={{
            textAlign: 'center',
            fontSize: '0.75rem',
            lineHeight: 1.6,
            maxWidth: '600px',
            opacity: 0.6
          }}
        >
          This website is a creative demonstration for the Sony WH-1000XM6 concept headphones. All product images, sequences, and specifications are illustrative and designed for showcase purposes.
        </div>

        {/* Copyright */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.03)',
            paddingTop: '25px',
            width: '100%',
            textAlign: 'center',
            fontSize: '0.75rem'
          }}
        >
          © 2026 Sony Electronics Inc. All rights reserved. SONY and the SONY logo are trademarks of Sony Corporation.
        </div>
      </div>
    </footer>
  );
}
