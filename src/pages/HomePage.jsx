// src/pages/HomePage.jsx
import { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, ArrowRight, Star, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTemplate from '../components/PageTemplate';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  const { t } = useTranslation();
  
  // Animation state
  const [isLoaded, setIsLoaded] = useState(false);

  // Animate elements on page load
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Best sellers data
  const bestSellers = [
    {
      id: 1,
      name: 'Cienki Kebab',
      description: 'miso mieszane wolowina/drób (surówki, papryki, ogórki, marchewki)',
      price: 'od 20,00 zł',
      image: '/menu/cienki-maly.png',
      featured: true
    },
    {
      id: 2,
      name: 'King Box Duży',
      description: 'miso mieszane wolowina/drób (frytki, mieso, surówki, sosy, papryki, ogórki, marchewki, ser)',
      price: 'od 18,00 zł',
      image: '/menu/kebab_box_duzy_ksk.png',
      featured: true
    },
    {
      id: 3,
      name: 'TALERZ z frytkami',
      description: 'mieso mieszane wolowina/drób (frytki, surówki, papryki, ogórki, marchewki, ser, sosy)',
      price: 'od 27,00 zł',
      image: '/menu/talerz-duzy.png',
      featured: true
    }
  ];


  return (
    <PageTemplate
      showHero={true}
      heroComponent={<Hero />}
    >
      {/* Best Sellers Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div 
            className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">{t('homepage.bestSellers')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              {t('homepage.bestSellersDescription')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {bestSellers.filter(item => item.featured).map((item, index) => (
              <div 
                key={item.id} 
                className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-700 transform ${
                  isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-48 sm:h-56 overflow-hidden relative">
                  <div className="absolute top-0 right-0 bg-[#ef322c] text-white text-xs font-bold uppercase px-3 py-1 m-2 rounded-full z-10">
                    Bestseller
                  </div>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    width="400"
                    height="300"
                    loading={index === 0 ? "eager" : "lazy"}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/images/hero-kebab.jpg";
                    }}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">{item.name}</h3>
                    <span className="font-bold text-[#1f6737] text-sm sm:text-base">{item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-xs sm:text-sm line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <Star size={14} className="text-[#fecc2f] mr-1" fill="#fecc2f" />
                      <Star size={14} className="text-[#fecc2f] mr-1" fill="#fecc2f" />
                      <Star size={14} className="text-[#fecc2f] mr-1" fill="#fecc2f" />
                      <Star size={14} className="text-[#fecc2f] mr-1" fill="#fecc2f" />
                      <Star size={14} className="text-[#fecc2f] mr-1" fill="#fecc2f" />
                    </div>
                    <Link 
                      to="/menu" 
                      className="text-[#ef322c] font-medium hover:text-[#ef322c]/80 transition-colors inline-flex items-center text-sm"
                    >
                      {t('homepage.orderNow')}
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            className={`text-center mt-8 sm:mt-10 md:mt-12 transition-all duration-700 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <Link 
              to="/menu" 
              className="bg-[#1f6737] text-white px-5 sm:px-6 py-3 rounded-lg font-medium hover:bg-[#1f6737]/90 transition-colors inline-flex items-center text-sm sm:text-base"
            >
              {t('homepage.viewFullMenu')}
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Promise Banner */}
      <section className="relative py-10 sm:py-12 md:py-16 bg-[#1f6737] text-white overflow-hidden">
        {/* Decorative elements - adjusted for mobile */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-white opacity-5"></div>
          <div className="absolute bottom-10 right-10 w-24 sm:w-40 h-24 sm:h-40 rounded-full bg-white opacity-5"></div>
          <div className="absolute top-1/2 left-1/3 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-white opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{t('homepage.promiseTitle')}</h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8">
              {t('homepage.promiseDescription')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 sm:mt-12">
              <div className="bg-white bg-opacity-10 p-5 sm:p-6 rounded-lg backdrop-blur-sm">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#fecc2f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-[#1f6737]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{t('homepage.freshIngredients')}</h3>
                <p className="opacity-80 text-sm sm:text-base">{t('homepage.freshIngredientsDesc')}</p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-5 sm:p-6 rounded-lg backdrop-blur-sm">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#fecc2f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-[#1f6737]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{t('homepage.familyRecipe')}</h3>
                <p className="opacity-80 text-sm sm:text-base">{t('homepage.familyRecipeDesc')}</p>
              </div>
              
              <div className="bg-white bg-opacity-10 p-5 sm:p-6 rounded-lg backdrop-blur-sm sm:col-span-2 md:col-span-1 mx-auto md:mx-0 max-w-sm sm:max-w-none">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#fecc2f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-[#1f6737]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{t('homepage.dailyFresh')}</h3>
                <p className="opacity-80 text-sm sm:text-base">{t('homepage.dailyFreshDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location & Map Section */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div 
            className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">{t('homepage.findUs')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              {t('homepage.findUsDescription')}
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <div className="lg:w-1/3">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md h-full border border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-900">{t('homepage.ourCities')}</h3>
                <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-3">
                  {[
                    'Barczewo', 'Białystok', 'Bielsk Podlaski', 'Choroszczy', 
                    'Dobre Miasto', 'Ełk', 'Gołdap', 'Iława', 
                    'Lubawa', 'Olsztyn', 'Orzysz', 'Ryn', 
                    'Suwałki', 'Warszawa', 'Węgorzewo'
                  ].sort().map((city, index) => (
                    <div key={index} className="flex items-center">
                      <MapPin size={14} className="text-[#ef322c] mr-1.5 sm:mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-xs sm:text-sm truncate">{city}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/branches" 
                  className="mt-6 sm:mt-8 block w-full bg-[#1f6737] text-white py-3 rounded-md font-medium hover:bg-[#1f6737]/90 transition-colors text-center text-sm sm:text-base"
                >
                  {t('homepage.findExactLocations')}
                </Link>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              {/* Map Component */}
              <div className="bg-gray-200 rounded-lg h-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center shadow-md">
                <div className="text-center p-6 sm:p-8">
                  <p className="mb-3 sm:mb-4 text-gray-700 font-medium text-sm sm:text-base">Google Maps will be displayed here</p>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                    Add your Google Maps API key to display an interactive map with all our locations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section - Using the Testimonials component */}
      <Testimonials />
      
      {/* Newsletter Section */}
      <section className="py-10 sm:py-12 md:py-16 bg-[#1f6737]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-900">{t('homepage.stayUpdated')}</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {t('homepage.stayUpdatedDescription')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <input 
                type="email" 
                className="px-4 py-3 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-[#1f6737] border border-gray-300 text-sm sm:text-base"
                placeholder={t('homepage.emailPlaceholder')}
              />
              <button className="bg-[#ef322c] text-white px-6 py-3 rounded-md font-medium hover:bg-[#ef322c]/90 transition-colors whitespace-nowrap text-sm sm:text-base mt-2 sm:mt-0">
                {t('homepage.subscribe')}
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-4 text-center">
              {t('homepage.privacyNote')}
            </p>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default memo(HomePage);