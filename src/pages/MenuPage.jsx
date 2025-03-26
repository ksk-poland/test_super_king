// src/pages/MenuPage.jsx
import { useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PageTemplate from '../components/PageTemplate';
import menuItems from '../data/menuItems';
import menuCategories from '../data/menuCategories';
import deliveryPlatforms from '../data/deliveryPlatforms';
import { ShoppingBag, Info, Clock, ChevronDown, Phone, ExternalLink, ArrowDown } from 'lucide-react';

const MenuPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('featured');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);
  
  // Animation effect when page loads
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Filter menu items based on active category
  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  
  return (
    <PageTemplate
      title="Our Menu | Super King Kebab"
      description="Explore our delicious menu of authentic Turkish and Middle Eastern kebabs"
    >
      {/* Hero Section - optimized for mobile */}
      <div className="bg-gradient-to-r from-[#1f6737] to-[#1f6737]/90 text-white py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">{t('menuPage.title')}</h1>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              {t('menuPage.subtitle')}
            </p>
          </motion.div>
          
          {/* Delivery Platforms - responsive grid */}
          <div className="mt-6 sm:mt-8">
            <p className="mb-3 text-[#fecc2f] font-medium text-sm sm:text-base">{t('menuPage.availableOn')}</p>
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 sm:gap-4 md:gap-6 max-w-xs sm:max-w-none mx-auto">
              {deliveryPlatforms.map((platform, index) => (
                <motion.a 
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center hover:scale-105 transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-2 p-2">
                    <img 
                      src={platform.logo} 
                      alt={`${platform.name} logo`}
                      width="40"
                      height="40" 
                      className="w-auto h-full object-contain"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <span className="text-xs sm:text-sm">{platform.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Curved separator - smaller on mobile */}
        <div className="relative h-12 sm:h-16 mt-6 sm:mt-8">
          <svg className="absolute bottom-0 w-full h-12 sm:h-16 text-gray-50" viewBox="0 0 1440 48" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,0 C480,40 960,40 1440,0 L1440,48 L0,48 Z" />
          </svg>
        </div>
      </div>
      
      <div className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Mobile Category Dropdown - Positioned first for mobile */}
          <div className="md:hidden mb-6">
            <div className="relative">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">
                    {menuCategories.find(c => c.id === activeCategory)?.name || 'Select category'}
                  </span>
                  <ChevronDown size={18} className="text-gray-500" />
                </div>
              </div>
              
              <select 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                aria-label="Select menu category"
              >
                {menuCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Category Navigation for tablets and larger - Hidden on mobile */}
          <div 
            className="hidden md:block mb-8 md:mb-10 overflow-x-auto pb-4 transition-all duration-500 transform"
            style={{ 
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <div className="flex justify-start md:justify-center gap-2 min-w-max">
              {menuCategories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 sm:px-5 py-2 sm:py-3 rounded-lg transition-colors ${
                    activeCategory === category.id 
                      ? 'bg-[#1f6737] text-white shadow-md' 
                      : 'bg-white border border-gray-200 hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="whitespace-nowrap font-medium text-sm sm:text-base">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Menu Section Header */}
          <div 
            className="mb-6 sm:mb-8 transition-all duration-500"
            style={{ 
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.2s'
            }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              {menuCategories.find(c => c.id === activeCategory)?.name}
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-[#fecc2f] mt-2 mb-3 sm:mb-4"></div>
          </div>
          
          {/* Menu Items Grid - Single column on mobile, dual on larger screens */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all border border-gray-100"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Product Image - Smaller height on mobile */}
                  <div className="w-full md:w-1/3 bg-gray-100 h-32 sm:h-40 md:h-auto flex items-center justify-center overflow-hidden relative">
                    {item.tags && item.tags.includes('Bestseller') && (
                      <div className="absolute top-2 left-2 bg-[#ef322c] text-white text-xs px-2 py-1 rounded-full font-medium z-10">
                        Bestseller
                      </div>
                    )}
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        width="300"
                        height="200"
                        loading={index < 4 ? "eager" : "lazy"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-gray-400 flex flex-col items-center justify-center w-full h-full">
                        <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2" />
                        <span className="text-xs">Product Image</span>
                      </div>
                    )}
                  </div>                  
                  {/* Content - Optimized padding for mobile */}
                  <div className="w-full md:w-2/3 p-4 sm:p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 pr-2">{item.name}</h3>
                        {item.tags && item.tags.includes('Unavailable') ? (
                          <span className="bg-gray-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shrink-0">
                            {t('menuPage.unavailable')}
                          </span>
                        ) : (
                          <span className="bg-[#fecc2f]/20 text-gray-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shrink-0">
                            {typeof item.price === 'number' ? item.price.toFixed(2) : item.price} zł
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-600 mb-3 text-xs sm:text-sm line-clamp-3 sm:line-clamp-none">{item.description || "—"}</p>
                    </div>
                    
                    {item.tags && item.tags.length > 0 && !item.tags.includes('Unavailable') && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-2">
                        {item.tags.map((tag, idx) => {
                          let bgColor = 'bg-gray-100';
                          let textColor = 'text-gray-700';
                          
                          if (tag === 'Spicy') {
                            bgColor = 'bg-[#ef322c]/10';
                            textColor = 'text-[#ef322c]';
                          } else if (tag === 'Vegetarian' || tag === 'Veg') {
                            bgColor = 'bg-[#1f6737]/10';
                            textColor = 'text-[#1f6737]';
                          } else if (tag === 'Bestseller' || tag === 'Popular') {
                            bgColor = 'bg-[#fecc2f]/10';
                            textColor = 'text-gray-900';
                          }
                          
                          return (
                            <span 
                              key={idx} 
                              className={`${bgColor} ${textColor} text-xs px-2 py-0.5 sm:py-1 rounded-full`}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action - Mobile optimized */}
          <div 
            className="text-center mt-8 sm:mt-10 md:mt-12 mb-6 sm:mb-8 transition-all duration-500"
            style={{ 
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '0.4s'
            }}
          >
            <a 
              href="https://branches.kebabsuperking.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#ef322c] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ef322c]/90 transition-colors w-full sm:w-auto text-sm sm:text-base"
            >
              {t('menuPage.orderNow')}
            </a>

          </div>
          
          {/* Informational Cards - Grid for mobile */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 md:mt-16"
            style={{ 
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              transitionDelay: '0.5s'
            }}
          >
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1f6737]/10 text-[#1f6737] rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Info className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">{t('menuPage.dietaryInfo.title')}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{t('menuPage.dietaryInfo.description')}</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fecc2f]/10 text-gray-900 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">{t('menuPage.openingHours.title')}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{t('menuPage.openingHours.description').split('\\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < t('menuPage.openingHours.description').split('\\n').length - 1 && <br />}
                </span>
              ))}</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100 sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#ef322c]/10 text-[#ef322c] rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900">{t('menuPage.orderOnline.title')}</h3>
              <p className="text-gray-600 text-xs sm:text-sm">{t('menuPage.orderOnline.description')}</p>
            </div>
          </div>
          
          {/* Delivery Partners and Download Menu Button - Mobile stacked */}
          <div 
            className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100"
            style={{ 
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
              transitionDelay: '0.6s'
            }}
          >
            <div className="w-full">
              <h3 className="text-base sm:text-lg font-bold mb-3 text-gray-900">{t('menuPage.deliveryPlatforms')}</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {deliveryPlatforms.map(platform => (
                  <a 
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-100 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center mr-1.5 sm:mr-2 border border-gray-300 overflow-hidden p-1">
                      <img 
                        src={platform.logo} 
                        alt={`${platform.name} logo`} 
                        className="w-full h-full object-contain"
                        width="20"
                        height="20"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-medium">{platform.name}</span>
                    <ExternalLink size={12} className="ml-1 text-gray-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default memo(MenuPage);