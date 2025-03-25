// src/components/LanguageSwitcher.jsx
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ variant = 'default' }) => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  // Different style variants
  const getButtonClasses = (language) => {
    const isActive = i18n.language === language;
    
    if (variant === 'minimal') {
      return `text-sm font-medium ${isActive ? 'font-bold underline' : 'opacity-75 hover:opacity-100'}`;
    }
    
    if (variant === 'pill') {
      return `px-3 py-1 rounded-full transition-colors ${
        isActive 
          ? 'bg-[#1f6737] text-white' 
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`;
    }
    
    // Default variant
    return `px-2 py-1 transition-colors ${
      isActive 
        ? 'font-bold text-[#1f6737]' 
        : 'text-gray-700 hover:text-[#1f6737]'
    }`;
  };
  
  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => changeLanguage('pl')} 
        className={getButtonClasses('pl')}
        aria-label="Switch to Polish"
      >
        PL
      </button>
      <button 
        onClick={() => changeLanguage('en')} 
        className={getButtonClasses('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};

export default memo(LanguageSwitcher);