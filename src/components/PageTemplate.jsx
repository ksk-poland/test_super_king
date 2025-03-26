// src/components/PageTemplate.jsx
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const PageTemplate = ({ 
  children,
  title,
  subtitle,
  showHero = false,
  heroBackground = null,
  heroComponent = null
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Spacer for fixed header - dynamic height based on mobile/desktop */}
      <div className={`${isMobile ? 'h-16' : 'h-20'}`}></div>

      {/* Hero Section or Page Title */}
      {showHero && heroComponent ? (
        heroComponent
      ) : title ? (
        <div 
          className={`bg-superking-primary py-8 md:py-20 ${
            heroBackground ? 'bg-cover bg-center' : ''
          }`}
          style={heroBackground ? { 
            backgroundImage: `url(${heroBackground})`,
            backgroundPosition: isMobile ? 'center center' : 'center', 
          } : {}}
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-4">{title}</h1>
              {subtitle && (
                <p className="text-lg md:text-xl text-white opacity-90 leading-snug">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          
          {/* Curved bottom - adjust height for mobile */}
          <div className="relative h-8 md:h-12 mt-4 md:mt-8">
            <svg 
              className="absolute bottom-0 w-full h-full text-white" 
              viewBox="0 0 1440 48" 
              fill="currentColor" 
              preserveAspectRatio="none"
            >
              <path d="M0,0 C480,40 960,40 1440,0 L1440,48 L0,48 Z" />
            </svg>
          </div>
        </div>
      ) : null}

      {/* Main Content */}
      <main className="flex-grow bg-white">
        {children}
      </main>

      {/* Footer */}
      <Footer />
      
      {/* Mobile Navigation Helper - if needed */}
      {isMobile && (
        <div className="h-16 md:h-0">
          {/* Space for potential mobile bottom navigation */}
        </div>
      )}
    </div>
  );
};

export default PageTemplate;