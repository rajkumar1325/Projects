import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Scrollytell from './components/Scrollytell';
import Specs from './components/Specs';
import Footer from './components/Footer';

export default function App() {
  const [progress, setProgress] = useState(0);
  const [loadingActive, setLoadingActive] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const totalFrames = 192;
    const loadedImages = [];
    let loadedCount = 0;

    // Preload images asynchronously
    const preload = () => {
      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const frameNum = String(i).padStart(3, '0');
        img.src = `/asset_image/ezgif-frame-${frameNum}.jpg`;
        
        img.onload = () => {
          loadedCount++;
          const percent = (loadedCount / totalFrames) * 100;
          setProgress(percent);
          
          if (loadedCount === totalFrames) {
            // Give a tiny visual pause once complete, then fade out loader
            setTimeout(() => {
              setLoadingActive(false);
            }, 600);
          }
        };

        img.onerror = () => {
          loadedCount++;
          const percent = (loadedCount / totalFrames) * 100;
          setProgress(percent);
          console.warn(`Failed to preload frame: ${frameNum}`);
          
          if (loadedCount === totalFrames) {
            setTimeout(() => {
              setLoadingActive(false);
            }, 600);
          }
        };

        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preload();
  }, []);

  return (
    <div style={{ backgroundColor: '#050505', minHeight: '100vh', width: '100%' }}>
      {/* 0% to 100% Loader Screen */}
      <Loader progress={progress} active={loadingActive} />

      {/* Main content - only render elements once we have preloaded the image array */}
      {images.length > 0 && (
        <>
          <Navbar />
          
          {/* Sticky Canvas & Storytelling */}
          <Scrollytell images={images} />
          
          {/* Technical Specifications Grid */}
          <Specs />
          
          {/* Brand Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
