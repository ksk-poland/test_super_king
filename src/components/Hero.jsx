// src/components/Hero.jsx
import { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  // Animation state
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Image preloading
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Preload hero image
    const img = new Image();
    img.src = '/images/hero-kebab.png';
    img.onload = () => setImageLoaded(true);
    
    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Delivery platforms for quick access
  const deliveryPlatforms = [
    { 
      name: 'Glovo', 
      logo: '/delivery/glovo-logo.png', 
      href: 'https://glovoapp.com' 
    },
    { 
      name: 'Wolt', 
      logo: '/delivery/wolt-logo.png', 
      href: 'https://wolt.com' 
    },
    { 
      name: 'Uber Eats', 
      logo: '/delivery/uber-eats-logo.png', 
      href: 'https://ubereats.com' 
    },
    { 
      name: 'Pszyne', 
      logo: '/delivery/pszyne-logo.png', 
      href: 'https://pszyne.pl' 
    }
  ];

  return (
    <div className="relative h-[75vh] sm:h-[85vh] min-h-[500px] max-h-[800px] overflow-hidden">
      {/* Background Image with optimized loading */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
        style={{ 
          backgroundImage: "url('/images/hero-kebab.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%', // Better positioning for mobile
        }}
      >
        {/* Add actual image for SEO */}
        <img 
          src="/images/hero-kebab.png" 
          alt="Delicious Kebab" 
          className="opacity-0 absolute" 
          width="1200" 
          height="800"
        />
      </div>
      
      {/* Background color placeholder until image loads */}
      <div 
        className={`absolute inset-0 bg-[#1f6737] transition-opacity duration-700 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden="true"
      ></div>
      
      {/* Dark overlay - Slightly more opaque on mobile for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-60 sm:bg-opacity-50"></div>
      
      <div className="relative h-full container mx-auto px-4 sm:px-6 flex flex-col justify-center">
        <div 
          className={`max-w-xl transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            <span className="text-[#fecc2f]">{t('hero.title')}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white text-opacity-90 mb-6 sm:mb-8">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Link 
              to="/menu" 
              className="inline-flex items-center justify-center bg-[#ef322c] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ef322c]/90 transition-colors w-full sm:w-auto"
            >
              {t('hero.viewMenu')}
              <ArrowRight size={18} className="ml-2" />
            </Link>
            
            <Link 
              to="/branches" 
              className="inline-flex items-center justify-center bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              {t('hero.findUs')}
            </Link>
          </div>
          
          {/* Delivery Platforms Section */}
          <div>
            <p className="text-[#fecc2f] font-medium mb-3 text-sm">{t('hero.orderOnlineVia')}</p>
            <div className="flex flex-wrap gap-3">
              {deliveryPlatforms.map((platform, index) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-all duration-700 transform ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-center bg-white bg-opacity-10 hover:bg-opacity-20 rounded-full pr-3 transition-colors">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-900 mr-2">
                      <img 
                        src={platform.logo} 
                        alt={`${platform.name}`} 
                        className="h-5 w-auto object-contain"
                        loading="lazy"
                        width="20"
                        height="20"
                      />
                    </div>
                    <span className="text-white text-sm">{platform.name}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator - Adjusted for better mobile display */}
      <div className="absolute bottom-0 left-0 right-0 text-white">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 100" 
          fill="currentColor" 
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-12"
          aria-hidden="true"
        >
          <path d="M0,0 C240,95 480,95 720,47.5 C960,0 1200,0 1440,47.5 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </div>
  );
};

export default memo(Hero);