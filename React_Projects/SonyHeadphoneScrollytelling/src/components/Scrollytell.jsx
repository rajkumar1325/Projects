import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Scrollytell({ images }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(1);
  
  // Track targeted and actual frame with refs to avoid React render lagging the Canvas loop
  const stateRef = useRef({
    targetFrame: 1,
    currentFrame: 1,
    isFirstDraw: true
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      
      let progress = scrolled / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);
      
      const frameCount = images.length;
      const target = Math.floor(progress * (frameCount - 1)) + 1;
      stateRef.current.targetFrame = target;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [images]);

  // RequestAnimationFrame loop for butter-smooth frame rendering (lerp)
  useEffect(() => {
    let animId;
    
    const drawFrame = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        animId = requestAnimationFrame(drawFrame);
        return;
      }
      
      const ctx = canvas.getContext('2d');
      const state = stateRef.current;
      
      // Interpolate current frame towards target frame
      const diff = state.targetFrame - state.currentFrame;
      // If close enough, snap
      if (Math.abs(diff) < 0.05) {
        state.currentFrame = state.targetFrame;
      } else {
        // Easing factor (0.08 - 0.1 for nice inertia)
        state.currentFrame += diff * 0.09;
      }
      
      const frameIndex = Math.round(state.currentFrame);
      const img = images[frameIndex - 1];
      
      if (img && (img.complete || state.isFirstDraw)) {
        // Device Pixel Ratio adjustment for sharp rendering
        const dpr = window.devicePixelRatio || 1;
        const displayWidth = window.innerWidth;
        const displayHeight = window.innerHeight;
        
        if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
          canvas.style.width = displayWidth + 'px';
          canvas.style.height = displayHeight + 'px';
          canvas.width = displayWidth * dpr;
          canvas.height = displayHeight * dpr;
          ctx.scale(dpr, dpr);
        }
        
        ctx.clearRect(0, 0, displayWidth, displayHeight);
        
        // Center-contain logic
        const imgWidth = img.naturalWidth || img.width || 1280;
        const imgHeight = img.naturalHeight || img.height || 720;
        const imgRatio = imgWidth / imgHeight;
        const canvasRatio = displayWidth / displayHeight;
        
        let drawWidth, drawHeight;
        if (canvasRatio > imgRatio) {
          drawHeight = displayHeight;
          drawWidth = displayHeight * imgRatio;
        } else {
          drawWidth = displayWidth;
          drawHeight = displayWidth / imgRatio;
        }
        
        const x = (displayWidth - drawWidth) / 2;
        const y = (displayHeight - drawHeight) / 2;
        
        ctx.drawImage(img, x, y, drawWidth, drawHeight);
        state.isFirstDraw = false;
        
        // Synchronize state for React text animations if needed
        setCurrentFrame(frameIndex);
      }
      
      animId = requestAnimationFrame(drawFrame);
    };
    
    drawFrame();
    
    return () => cancelAnimationFrame(animId);
  }, [images]);

  // Window resize handler to repaint immediately
  useEffect(() => {
    const handleResize = () => {
      stateRef.current.isFirstDraw = true;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Custom helper to compute opacity and translation for overlays
  const getOverlayStyle = (start, peakStart, peakEnd, end) => {
    let opacity = 0;
    let y = 30; // slide up from 30px
    
    if (scrollProgress >= start && scrollProgress < peakStart) {
      const range = peakStart - start;
      const ratio = (scrollProgress - start) / range;
      opacity = ratio;
      y = 30 * (1 - ratio);
    } else if (scrollProgress >= peakStart && scrollProgress <= peakEnd) {
      opacity = 1;
      y = 0;
    } else if (scrollProgress > peakEnd && scrollProgress <= end) {
      const range = end - peakEnd;
      const ratio = (scrollProgress - peakEnd) / range;
      opacity = 1 - ratio;
      y = -30 * ratio; // slide up and out
    } else {
      opacity = 0;
      y = scrollProgress < start ? 30 : -30;
    }
    
    return {
      opacity,
      transform: `translateY(${y}px)`,
      transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
      pointerEvents: opacity > 0.1 ? 'auto' : 'none'
    };
  };


  return (
    <div ref={containerRef} className="scrollytell-container" style={{ height: '500vh', position: 'relative' }}>
      {/* Fixed Canvas Frame */}
      <div 
        className="sticky-canvas-wrapper"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: (scrollProgress >= 0 && scrollProgress < 0.98) ? 1 : 0,
          visibility: (scrollProgress >= 0 && scrollProgress < 0.98) ? 'visible' : 'hidden',
          transition: 'opacity 0.4s ease, visibility 0.4s ease'
        }}
      >
        <canvas ref={canvasRef} />
        {/* Seamless Vignette Overlay */}
        <div className="vignette-overlay" />
        
        {/* Subtle background glow when exploded */}
        <div 
          style={{
            position: 'absolute',
            width: '60vw',
            height: '60vh',
            background: 'radial-gradient(circle, rgba(0, 80, 255, 0.06) 0%, rgba(0, 214, 255, 0.02) 40%, rgba(5, 5, 5, 0) 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: scrollProgress > 0.15 && scrollProgress < 0.85 ? 1 : 0,
            transition: 'opacity 0.8s ease',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Floating Storytelling Overlay Layer */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 10,
          pointerEvents: 'none',
          opacity: (scrollProgress >= 0 && scrollProgress < 0.98) ? 1 : 0,
          visibility: (scrollProgress >= 0 && scrollProgress < 0.98) ? 'visible' : 'hidden',
          transition: 'opacity 0.4s ease, visibility 0.4s ease'
        }}
      >
        {/* 1. HERO / INTRO (0% - 15%) */}
        <div 
          className="overlay-section"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            ...getOverlayStyle(0.0, 0.0, 0.06, 0.14)
          }}
        >
          <div className="overlay-content overlay-center">
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', marginBottom: '15px' }} className="gradient-text">
              Sony WH-1000XM6
            </h1>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Silence, perfected.
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
              Flagship wireless noise cancelling, re-engineered for a world that never stops.
            </p>
          </div>
        </div>

        {/* 2. ENGINEERING REVEAL (15% - 40%) */}
        <div 
          className="overlay-section"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            ...getOverlayStyle(0.14, 0.20, 0.32, 0.38)
          }}
        >
          <div className="overlay-content" style={{ marginLeft: '4vw' }}>
            <div 
              style={{
                display: 'inline-block',
                color: 'var(--accent-cyan)',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '10px'
              }}
            >
              Engineering Showcase
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '20px', maxWidth: '500px' }}>
              Precision-engineered for silence.
            </h2>
            <p style={{ marginBottom: '15px' }}>
              Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.
            </p>
            <p>
              Every component is tuned for balance, power, and comfort—hour after hour.
            </p>
          </div>
        </div>

        {/* 3. NOISE CANCELLING & MICROPHONES (40% - 65%) */}
        <div 
          className="overlay-section"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            justifyContent: 'flex-end',
            ...getOverlayStyle(0.38, 0.44, 0.58, 0.64)
          }}
        >
          <div className="overlay-content" style={{ marginRight: '4vw' }}>
            <div 
              style={{
                display: 'inline-block',
                color: 'var(--accent-blue)',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '10px'
              }}
            >
              Acoustic Isolation
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '20px', maxWidth: '500px' }}>
              Adaptive noise cancelling, redefined.
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)', marginTop: '8px' }} />
                <p style={{ margin: 0 }}>Multi-microphone array listens in every direction.</p>
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)', marginTop: '8px' }} />
                <p style={{ margin: 0 }}>Real-time noise analysis adapts dynamically to your environment.</p>
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-cyan)', marginTop: '8px' }} />
                <p style={{ margin: 0 }}>Your music stays pure—planes, trains, and crowds fade away.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. SOUND & UPSCALING (65% - 85%) */}
        <div 
          className="overlay-section"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            ...getOverlayStyle(0.64, 0.70, 0.80, 0.86)
          }}
        >
          <div className="overlay-content" style={{ marginLeft: '4vw' }}>
            <div 
              style={{
                display: 'inline-block',
                color: 'var(--accent-cyan)',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '10px'
              }}
            >
              Studio Acoustics
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '20px', maxWidth: '500px' }}>
              Immersive, lifelike sound.
            </h2>
            <p style={{ marginBottom: '15px' }}>
              High-performance drivers unlock detail, depth, and texture in every track.
            </p>
            <p>
              AI-enhanced upscaling restores clarity to compressed audio, so every note feels alive.
            </p>
          </div>
        </div>

        {/* 5. REASSEMBLY & CTA (85% - 100%) */}
        <div 
          className="overlay-section"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            ...getOverlayStyle(0.86, 0.92, 1.0, 1.0)
          }}
        >
          <div className="overlay-content overlay-center">
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '15px' }} className="gradient-text">
              Hear everything. Feel nothing else.
            </h2>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '30px' }}>
              WH-1000XM6. Designed for focus, crafted for comfort.
            </h3>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '25px' }}>
              <button 
                onClick={() => alert('Order Placed Successfully! (Demo Only)')}
                className="btn-primary" 
                style={{ padding: '14px 36px', fontSize: '1rem', pointerEvents: 'auto' }}
              >
                Pre-order Now
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('specs-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary" 
                style={{ padding: '14px 36px', fontSize: '1rem', pointerEvents: 'auto' }}
              >
                See Full Specs
              </button>
            </div>
            
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Engineered for airports, offices, and everything in between.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
