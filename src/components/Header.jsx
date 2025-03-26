// src/components/Header.jsx
import { useState, useEffect, memo, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Memoize language change function
  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
  }, [i18n]);

  // Optimize scroll listener with throttling and RAF
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle body scroll when menu is open
  useEffect(() => {
    // Prevent body scroll when menu is open on mobile
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { title: t('header.home'), path: '/' },
    { title: t('header.menu'), path: '/menu' },
    { title: t('header.locations'), path: '/branches' },
    { title: t('header.aboutUs'), path: '/aboutus' },
  ];

  // Precompute classes for performance
  const headerClasses = `fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-[#1f6737] py-3'
  }`;
  
  const linkClasses = (isActive) => `font-medium transition-colors ${
    isScrolled 
      ? `text-gray-800 ${isActive ? 'text-[#1f6737] font-bold' : 'hover:text-[#1f6737]'}` 
      : `text-white ${isActive ? 'font-bold' : 'hover:text-[#fecc2f]'}`
  }`;

  const socialIconClasses = `p-2 rounded-full transition-colors ${
    isScrolled 
      ? 'hover:bg-gray-100 text-gray-800' 
      : 'hover:bg-white/20 text-white'
  }`;

  // Toggle menu with animation
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Optimized for mobile */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 sm:h-10 w-auto">
              <img 
                src="/images/logo.png" 
                alt="Kebab Super King Logo" 
                className="h-full w-auto" 
                loading="eager" 
                width="40" 
                height="40"
              />
            </div>
            <div>
              <span className="font-bold text-base sm:text-lg leading-tight block">
                <span className={isScrolled ? 'text-[#ef322c]' : 'text-white'}>KEBAB</span>
              </span>
              <span className={`text-xs sm:text-sm font-bold block ${isScrolled ? 'text-[#1f6737]' : 'text-yellow-300'}`}>
                SUPER KING
              </span>
            </div>
          </Link>          
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={linkClasses(location.pathname === link.path)}
              >
                {link.title}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex space-x-2 ml-3">
              <button 
                onClick={() => changeLanguage('pl')} 
                className={`px-2 py-1 rounded-full transition-colors ${
                  i18n.language === 'pl' 
                    ? (isScrolled ? 'bg-[#1f6737] text-white' : 'bg-white text-[#1f6737]') 
                    : (isScrolled ? 'text-gray-800' : 'text-white')
                }`}
                aria-label="Polish language"
              >
                PL
              </button>
              <button 
                onClick={() => changeLanguage('en')} 
                className={`px-2 py-1 rounded-full transition-colors ${
                  i18n.language === 'en' 
                    ? (isScrolled ? 'bg-[#1f6737] text-white' : 'bg-white text-[#1f6737]') 
                    : (isScrolled ? 'text-gray-800' : 'text-white')
                }`}
                aria-label="English language"
              >
                EN
              </button>
            </div>
          </nav>
          
          {/* Social & CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Social Media Icons */}
            <div className="flex space-x-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={socialIconClasses}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={socialIconClasses}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>

            {/* Phone Button */}
            <a 
              href="https://branches.kebabsuperking.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white bg-[#ef322c] px-3 py-1.5 rounded-full font-medium hover:bg-[#ef322c]/90 transition-colors text-sm"
            >
              <span>{t('header.order')}</span>
            </a>
          </div>

          {/* Mobile Call Button - Small screens only */}
          <a 
            href="https://branches.kebabsuperking.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden ml-auto mr-2 flex items-center justify-center text-white bg-[#ef322c] w-8 h-8 rounded-full"
            aria-label="Order now"
          >
            <span className="text-xs font-semibold">🛒</span> {/* Optional: Or leave it empty */}
          </a>


          {/* Mobile Menu Button - More accessible and with larger touch target */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden p-2 w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - With smooth animation */}
      <div 
        className={`md:hidden fixed inset-0 top-16 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="container mx-auto px-4 py-3 overflow-y-auto h-[calc(100vh-4rem)] pb-safe">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-4 px-2 text-lg font-medium border-b border-gray-100 ${
                  location.pathname === link.path 
                    ? 'text-[#1f6737] font-bold' 
                    : 'text-gray-800'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            
            {/* Language Switcher - Mobile */}
            <div className="flex space-x-4 py-6 px-2">
              <span className="text-gray-500 self-center">{t('header.language')}:</span>
              <button 
                onClick={() => changeLanguage('pl')} 
                className={`px-4 py-2 rounded-full transition-colors ${
                  i18n.language === 'pl' 
                    ? 'bg-[#1f6737] text-white' 
                    : 'text-gray-800 border border-gray-300'
                }`}
              >
                PL
              </button>
              <button 
                onClick={() => changeLanguage('en')} 
                className={`px-4 py-2 rounded-full transition-colors ${
                  i18n.language === 'en' 
                    ? 'bg-[#1f6737] text-white' 
                    : 'text-gray-800 border border-gray-300'
                }`}
              >
                EN
              </button>
            </div>
            
            {/* Social and Contact - Better mobile layout */}
            <div className="mt-auto pt-6 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                {/* Call button - Full width on mobile */}
                <a 
                  href="tel:+48123456789" 
                  className="flex items-center justify-center text-white bg-[#ef322c] px-4 py-3 rounded-lg font-medium transition-colors text-lg w-full"
                >
                  <Phone size={20} className="mr-2" />
                  <span>{t('header.callToOrder')}</span>
                </a>
                
                {/* Social icons - Better spaced for touch */}
                <div className="flex justify-center space-x-6 py-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} className="text-gray-800" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} className="text-gray-800" />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      
      {/* Backdrop overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default memo(Header);