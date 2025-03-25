// src/components/Footer.jsx
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Facebook, Instagram, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Delivery platform data
const deliveryPlatforms = [
  { id: 'glovo', name: 'Glovo', url: 'https://glovoapp.com', logo: '/delivery/glovo-logo.png' },
  { id: 'wolt', name: 'Wolt', url: 'https://wolt.com', logo: '/delivery/wolt-logo.png' },
  { id: 'uber-eats', name: 'Uber Eats', url: 'https://ubereats.com', logo: '/delivery/uber-eats-logo.png' },
  { id: 'pszyne', name: 'Pszyne', url: 'https://pszyne.pl', logo: '/delivery/pszyne-logo.png' }
];

// Collapsible section component for mobile
const CollapsibleSection = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-800 py-3 sm:border-none sm:py-0">
      <div 
        className="flex justify-between items-center cursor-pointer sm:cursor-default mb-3 sm:mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-bold">{title}</h3>
        <button className="sm:hidden p-1" aria-label={isOpen ? "Collapse section" : "Expand section"}>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>
      <div className={`${isOpen ? 'max-h-96' : 'max-h-0 sm:max-h-none'} overflow-hidden transition-all duration-300 sm:block`}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-900 text-white pt-8 sm:pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Brand info is always visible on mobile */}
        <div className="mb-6 sm:hidden flex flex-col items-center text-center">
          <Link to="/" className="inline-flex items-center space-x-2 mb-4">
            <div className="h-10 w-auto">
              <img 
                src="/images/logo.png" 
                alt="Kebab Super King Logo" 
                className="h-full w-auto"
                loading="lazy"
                width="40"
                height="40"
              />
            </div>
            <div>
              <span className="font-bold text-lg leading-tight block">
                <span className="text-white">KEBAB</span>
              </span>
              <span className="text-sm font-bold block text-yellow-300">
                SUPER KING
              </span>
            </div>
          </Link>
          
          <p className="text-gray-400 mb-6 text-sm max-w-xs">
            {t('footer.companyDescription')}
          </p>
          
          <div className="flex space-x-4 mb-6">
            <a 
              href="https://www.facebook.com/profile.php?id=100042248993214" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-800 hover:bg-[#1f6737] p-3 rounded-full transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} className="text-white" />
            </a>
            <a 
              href="https://www.instagram.com/kebab.superking/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-800 hover:bg-[#1f6737] p-3 rounded-full transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} className="text-white" />
            </a>
          </div>
        </div>
        
        {/* Desktop layout */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column - Desktop Only */}
          <div>
            <Link to="/" className="inline-flex items-center space-x-2 mb-6">
              <div className="h-10 w-auto">
                <img 
                  src="/images/logo.png" 
                  alt="Kebab Super King Logo" 
                  className="h-full w-auto"
                  loading="lazy"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                <span className="font-bold text-lg leading-tight block">
                  <span className="text-white">KEBAB</span>
                </span>
                <span className="text-sm font-bold block text-yellow-300">
                  SUPER KING
                </span>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 text-sm">
              {t('footer.companyDescription')}
            </p>
            
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/profile.php?id=100042248993214" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 hover:bg-[#1f6737] p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} className="text-white" />
              </a>
              <a 
                href="https://www.instagram.com/kebab.superking/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-800 hover:bg-[#1f6737] p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.contactUs')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-3 text-[#fecc2f] flex-shrink-0" />
                <span className="text-gray-300 text-sm">Ul. Jana Boenigka 7A, Olsztyn, Poland</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-[#fecc2f] flex-shrink-0" />
                <a href="tel:+48690377864" className="text-gray-300 text-sm hover:text-white transition-colors">
                  +48690377864
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-[#fecc2f] flex-shrink-0" />
                <a href="mailto:biuro@superkingkebab.pl" className="text-gray-300 text-sm hover:text-white transition-colors">
                  biuro@superkingkebab.pl
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.quickLinks')}</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm py-1">
                {t('header.home')}
              </Link>
              <Link to="/menu" className="text-gray-300 hover:text-white transition-colors text-sm py-1">
                {t('header.menu')}
              </Link>
              <Link to="/branches" className="text-gray-300 hover:text-white transition-colors text-sm py-1">
                {t('header.locations')}
              </Link>
              <Link to="/aboutus" className="text-gray-300 hover:text-white transition-colors text-sm py-1">
                {t('header.aboutUs')}
              </Link>
              <span className="col-span-2 h-px bg-gray-800 my-1"></span>
              <a href="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors text-xs py-1">
                {t('footer.privacyPolicy')}
              </a>
              <a href="/terms" className="text-gray-400 hover:text-gray-300 transition-colors text-xs py-1">
                {t('footer.termsOfService')}
              </a>
            </div>
          </div>

          {/* Delivery Platforms */}
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.orderOnline')}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {t('footer.orderThroughPartners')}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {deliveryPlatforms.map(platform => (
                <a 
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-800 p-2.5 rounded hover:bg-gray-700 transition-colors"
                >
                  <img 
                    src={platform.logo} 
                    alt={`${platform.name} logo`} 
                    className="w-6 h-6 mr-2 object-contain rounded"
                    loading="lazy"
                    width="24"
                    height="24"
                  />
                  <span className="text-sm">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile accordion layout */}
        <div className="sm:hidden">
          {/* Contact Information */}
          <CollapsibleSection title={t('footer.contactUs')}>
            <ul className="space-y-4 py-2 mb-2">
              <li className="flex items-start">
                <MapPin size={20} className="mt-1 mr-3 text-[#fecc2f] flex-shrink-0" />
                <span className="text-gray-300">Ul. Jana Boenigka 7A, Olsztyn, Poland</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-[#fecc2f] flex-shrink-0" />
                <a href="tel:+48690377864" className="text-gray-300 hover:text-white transition-colors">
                  +48690377864
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-[#fecc2f] flex-shrink-0" />
                <a href="mailto:biuro@superkingkebab.pl" className="text-gray-300 hover:text-white transition-colors">
                  biuro@superkingkebab.pl
                </a>
              </li>
            </ul>
          </CollapsibleSection>

          {/* Quick Links */}
          <CollapsibleSection title={t('footer.quickLinks')}>
            <div className="grid grid-cols-1 gap-3 py-2 mb-2">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors py-2">
                {t('header.home')}
              </Link>
              <Link to="/menu" className="text-gray-300 hover:text-white transition-colors py-2">
                {t('header.menu')}
              </Link>
              <Link to="/branches" className="text-gray-300 hover:text-white transition-colors py-2">
                {t('header.locations')}
              </Link>
              <Link to="/aboutus" className="text-gray-300 hover:text-white transition-colors py-2">
                {t('header.aboutUs')}
              </Link>
              <span className="h-px bg-gray-800 my-1"></span>
              <div className="flex justify-between">
                <a href="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors py-2">
                  {t('footer.privacyPolicy')}
                </a>
                <a href="/terms" className="text-gray-400 hover:text-gray-300 transition-colors py-2">
                  {t('footer.termsOfService')}
                </a>
              </div>
            </div>
          </CollapsibleSection>

          {/* Delivery Platforms */}
          <CollapsibleSection title={t('footer.orderOnline')}>
            <div className="py-2 mb-2">
              <p className="text-gray-400 mb-4">
                {t('footer.orderThroughPartners')}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {deliveryPlatforms.map(platform => (
                  <a 
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-800 p-3 rounded hover:bg-gray-700 transition-colors"
                  >
                    <img 
                      src={platform.logo} 
                      alt={`${platform.name} logo`} 
                      className="w-6 h-6 mr-2 object-contain rounded"
                      loading="lazy"
                      width="24"
                      height="24"
                    />
                    <span className="text-sm">{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </CollapsibleSection>
        </div>
        
        <div className="mt-8 sm:mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Kebab Super King. {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);