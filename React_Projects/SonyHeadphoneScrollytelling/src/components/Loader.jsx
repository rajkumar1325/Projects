import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ progress, active }) {
  // Format progress as a 3-character string, e.g., "005" or "089" or "100"
  const formatProgress = (val) => {
    const rounded = Math.min(Math.round(val), 100);
    if (rounded < 10) return `00${rounded}`;
    if (rounded < 100) return `0${rounded}`;
    return `${rounded}`;
  };

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#050505',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Ambient background glows */}
          <div 
            style={{
              position: 'absolute',
              width: '50vw',
              height: '50vh',
              background: 'radial-gradient(circle, rgba(0, 80, 255, 0.12) 0%, rgba(5, 5, 5, 0) 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
            {/* Logo */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: '1.8rem',
                letterSpacing: '0.3em',
                color: '#ffffff',
                textTransform: 'uppercase',
                marginBottom: '40px',
              }}
            >
              SONY
            </motion.div>

            {/* Percentage Display */}
            <motion.div 
              style={{
                fontSize: '6.5rem',
                fontWeight: 900,
                letterSpacing: '-0.05em',
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
                fontFamily: 'var(--font-sans)',
                marginBottom: '15px',
              }}
              className="gradient-text"
            >
              {formatProgress(progress)}%
            </motion.div>

            {/* Loading Bar Container */}
            <div
              style={{
                width: '280px',
                height: '2px',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '1px',
                overflow: 'hidden',
                margin: '0 auto 20px',
                position: 'relative',
              }}
            >
              <motion.div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-cyan))',
                  width: `${progress}%`,
                  boxShadow: '0 0 8px var(--accent-cyan)',
                }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Technical Subtext */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                color: '#ffffff',
                fontWeight: 500,
              }}
            >
              {progress < 100 
                ? 'LOADING 8K ASSETS & CALIBRATING ENGINE' 
                : 'INITIALIZATION COMPLETE'}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
