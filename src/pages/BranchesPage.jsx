  import { useState, useEffect, memo } from 'react';
  import { motion } from 'framer-motion';
  import { useTranslation } from 'react-i18next';
  import PageTemplate from '../components/PageTemplate';
  import { Phone, MapPin, Search, ChevronDown } from 'lucide-react';
  
  const BranchesPage = () => {
    const { t } = useTranslation();
    const [activeCity, setActiveCity] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
      setIsLoaded(true);
    }, []);
  
  // Branch data from the provided list
  const branches = [
    {
      id: 1,
      name: "Kebab Super King",
      address: "Zwycięstwa 12H",
      city: "Dobre Miasto",
      province: "Podlaskie",
      postcode: "11-040",
      phone: "731 998 820"
    },
    {
      id: 2,
      name: "ART Kebab Libański",
      address: "Wincentego Pstrowskiego 23",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "10-601",
      phone: "660 580 034"
    },
    {
      id: 3,
      name: "Kebab Super King",
      address: "Zamkowa 19A",
      city: "Węgorzewo",
      province: "Warmian-Masurian",
      postcode: "11-600",
      phone: "731 998 001"
    },
    {
      id: 4,
      name: "Kebab Super King",
      address: "Gen. Józefa Bema 1",
      city: "Węgorzewo",
      province: "Warmian-Masurian",
      postcode: "11-600",
      phone: "731 998 613"
    },
    {
      id: 5,
      name: "Kebab Super King",
      address: "Belwederska 2",
      city: "Warszawa",
      province: "Masovian",
      postcode: "00-762",
      phone: "731 998 005"
    },
    {
      id: 6,
      name: "Kebab Super King",
      address: "Ludwika Waryńskiego 12",
      city: "Suwałki",
      province: "Podlaskie",
      postcode: "16-402",
      phone: "731 998 830"
    },
    {
      id: 7,
      name: "Kebab Super King",
      address: "Alfreda Kowalskiego-Wierusza 4A",
      city: "Suwałki",
      province: "Podlaskie",
      postcode: "16-402",
      phone: "731 998 821"
    },
    {
      id: 8,
      name: "Kebab Super King",
      address: "Plac Wolności 4",
      city: "Ryn",
      province: "Warmian-Masurian",
      postcode: "11-520",
      phone: "731 998 847"
    },
    {
      id: 9,
      name: "Kebab Super King",
      address: "Ełcka 2L",
      city: "Orzysz",
      province: "Warmian-Masurian",
      postcode: "12-250",
      phone: "731 998 826"
    },
    {
      id: 10,
      name: "Kebab Super King",
      address: "Stanisława Żurawskiego 1A",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "10-689",
      phone: "731 998 923"
    },
    {
      id: 11,
      name: "Kebab Super King",
      address: "Aleja Wojska Polskiego 10A",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "10-200",
      phone: "731 998 711"
    },
    {
      id: 12,
      name: "Kebab Super King",
      address: "Jana Boenigka 7A",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "10-686",
      phone: "690 377 864"
    },
    {
      id: 13,
      name: "Kebab Super King",
      address: "Barcza 58/U5",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "10-685",
      phone: "731 998 854"
    },
    {
      id: 14,
      name: "KEBAB GOLD",
      address: "Grunwaldzka 4",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "10-124",
      phone: "731 998 910"
    },
    {
      id: 15,
      name: "Kebab Super King",
      address: "Walentego Barczewskiego 3",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "10-061",
      phone: "731 998 511"
    },
    {
      id: 16,
      name: "Kebab Super King",
      address: "Jarosława Iwaszkiewicza 1",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "10-089",
      phone: "731 998 511"
    },
    {
      id: 17,
      name: "Art Kebab Libański",
      address: "Dworcowa 4C",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "11-041",
      phone: "728 243 309"
    },
    {
      id: 18,
      name: "Kebab Super King",
      address: "Bp. T. Wilczyńskiego 20",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "11-041",
      phone: "690 377 864"
    },
    {
      id: 19,
      name: "Kebab Super King",
      address: "Partyzantów 40B",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "10-402",
      phone: "731 998 887"
    },
    {
      id: 20,
      name: "Kebab Super King",
      address: "Tadeusza Kościuszki 45B",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "10-503",
      phone: "781 575 686"
    },
    {
      id: 21,
      name: "Kebab Super King",
      address: "Jagiellońska 85A",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "10-239",
      phone: "731 998 886"
    },
    {
      id: 22,
      name: "Kebab Super King",
      address: "Dworcowa 31",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "10-437",
      phone: "731 998 887"
    },
    {
      id: 23,
      name: "Kebab Super King",
      address: "Bałtycka 18",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "11-041",
      phone: "731 998 600"
    },
    {
      id: 24,
      name: "Kebab Super King",
      address: "Seweryna Pieniężnego 5",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "10-003",
      phone: "731 998 936"
    },
    {
      id: 25,
      name: "Kebab Super King",
      address: "Seweryna Pieniężnego 13",
      city: "Olsztyn",
      province: "Warmian-Masurian",
      postcode: "10-003",
      phone: "731 998 913"
    },
    {
      id: 26,
      name: "Kebab Super King",
      address: "Rynek 3",
      city: "Lubawa",
      province: "Warmian-Masurian",
      postcode: "14-260",
      phone: "731 998 805"
    },
    {
      id: 27,
      name: "Kebab Super King",
      address: "Zielona 72",
      city: "Iława",
      province: "Warmian-Masurian",
      postcode: "14-200",
      phone: "731 998 015"
    },
    {
      id: 28,
      name: "Kebab Super King",
      address: "Jana III Sobieskiego 14/5",
      city: "Iława",
      province: "Warmian-Masurian",
      postcode: "14-200",
      phone: "731 998 567"
    },
    {
      id: 29,
      name: "Kebab Super King",
      address: "Królewiecka 11",
      city: "Gołdap",
      province: "Warmian-Masurian",
      postcode: "19-500",
      phone: "731 998 835"
    },
    {
      id: 30,
      name: "Kebab Super King",
      address: "Armii Krajowej 30",
      city: "Ełk",
      province: "Warmian-Masurian",
      postcode: "19-300",
      phone: "731 998 890"
    },
    {
      id: 31,
      name: "Kebab Super King",
      address: "Henryka Sienkiewicza 30A",
      city: "Choroszczy",
      province: "Podlaskie",
      postcode: "16-070",
      phone: "731 998 793"
    },
    {
      id: 32,
      name: "Kebab Super King",
      address: "Adama Mickiewicza 34B",
      city: "Bielsk Podlaski",
      province: "Podlaskie",
      postcode: "17-100",
      phone: "731 998 914"
    },
    {
      id: 33,
      name: "Kebab Super King",
      address: "Bolesława Chrobrego 1D/9",
      city: "Białystok",
      province: "Białystok",
      postcode: "15-057",
      phone: "731 998 832"
    },
    {
      id: 34,
      name: "Kebab Super King",
      address: "Pozioma 2",
      city: "Białystok",
      province: "Białystok",
      postcode: "15-558",
      phone: "731 998 827"
    },
    {
      id: 35,
      name: "Kebab Super King",
      address: "Swobodna 54F",
      city: "Białystok",
      province: "Białystok",
      postcode: "15-756",
      phone: "731 998 862"
    },
    {
      id: 36,
      name: "Kebab Super King",
      address: "Białostoczek 22A",
      city: "Białystok",
      province: "Białystok",
      postcode: "15-800",
      phone: "731 998 801"
    },
    {
      id: 37,
      name: "Kebab Super King",
      address: "Generała Józefa Hallera 10",
      city: "Białystok",
      province: "Białystok",
      postcode: "15-814",
      phone: "731 998 832"
    },
    {
      id: 38,
      name: "Kebab Super King",
      address: "Antoniukowska 19B",
      city: "Białystok",
      province: "Białystok",
      postcode: "15-845",
      phone: "731 998 832"
    },
    {
      id: 39,
      name: "Kebab Super King",
      address: "Upalna 84A",
      city: "Białystok",
      province: "Białystok",
      postcode: "15-668",
      phone: "731 998 832"
    },
    {
      id: 40,
      name: "Kebab Super King",
      address: "Fabryczna 22A",
      city: "Białystok",
      province: "Białystok",
      postcode: "15-483",
      phone: "731 998 807"
    },
    {
      id: 41,
      name: "Kebab Super King",
      address: "Stefana Żeromskiego 1B/U8",
      city: "Białystok",
      province: "Białystok",
      postcode: "15-345",
      phone: "731 998 872"
    },
    {
      id: 42,
      name: "Kebab Super King",
      address: "Wojska Polskiego 32",
      city: "Barczewo",
      province: "Warmian-Masurian",
      postcode: "11-010",
      phone: "731 998 850"
    },
    {
      id: 43,
      name: "Kebab Super King",
      address: "Niepodległości 1E",
      city: "Iława",
      province: "Warmian-Masurian",
      postcode: "14-200",
      phone: "731 998 851"
    }
  ];    
    // Extract unique cities
    const cities = ['all', ...new Set(branches.map(branch => branch.city))].sort();
    
    // Count locations per city
    const locationCounts = {};
    cities.forEach(city => {
      if (city === 'all') {
        locationCounts[city] = branches.length;
      } else {
        locationCounts[city] = branches.filter(branch => branch.city === city).length;
      }
    });
    
    // Filter branches based on active city and search term
    const filteredBranches = branches.filter(branch => {
      const matchesCity = activeCity === 'all' || branch.city === activeCity;
      const matchesSearch = 
        branch.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        branch.address.toLowerCase().includes(searchTerm.toLowerCase()) || 
        branch.city.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCity && matchesSearch;
    });
    
    // Sort by city and then by address
    const sortedBranches = [...filteredBranches].sort((a, b) => {
      if (a.city !== b.city) {
        return a.city.localeCompare(b.city);
      }
      return a.address.localeCompare(b.address);
    });
  
    return (
      <PageTemplate
        title="Our Locations | Kebab Super King"
        description="Find Kebab Super King locations near you in Poland"
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#1f6737] to-[#1f6737]/90 text-white py-10 sm:py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">{t('branchesPage.title')}</h1>
              <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90">
                {t('branchesPage.subtitle')}
              </p>
              
              {/* Search and City Filter - Mobile optimized */}
              <div className="mt-6 sm:mt-8 max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder={t('branchesPage.searchPlaceholder')}
                      className="w-full py-2.5 sm:py-3 pl-9 sm:pl-10 pr-3 sm:pr-4 rounded-lg bg-white/20 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#fecc2f] text-sm sm:text-base"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                  </div>
                  
                  <div className="relative">
                    <select
                      className="appearance-none w-full md:w-auto bg-white/20 border border-white/20 text-white py-2.5 sm:py-3 px-3 sm:px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fecc2f] cursor-pointer text-sm sm:text-base"
                      value={activeCity}
                      onChange={(e) => setActiveCity(e.target.value)}
                      aria-label="Filter by city"
                    >
                      {cities.map(city => (
                        <option key={city} value={city} className="bg-gray-800 text-white">
                          {city === 'all' ? t('branchesPage.allCities') : city} ({locationCounts[city]})
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 pointer-events-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Curved separator - smaller on mobile */}
          <div className="relative h-12 sm:h-16 mt-6 sm:mt-8">
            <svg className="absolute bottom-0 w-full h-12 sm:h-16 text-gray-50" viewBox="0 0 1440 48" fill="currentColor" preserveAspectRatio="none">
              <path d="M0,0 C480,40 960,40 1440,0 L1440,48 L0,48 Z" />
            </svg>
          </div>
        </div>
        
        <div className="py-8 sm:py-10 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div 
              className="text-center mb-6 sm:mb-8"
              style={{ 
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
              }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-gray-900">{t('branchesPage.findUsNearYou')}</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                {t('branchesPage.locationsCount', { count: branches.length })}
              </p>
            </div>
            
            {/* City sections with locations */}
            {sortedBranches.length > 0 ? (
              <div className="space-y-4 sm:space-y-6">
                {activeCity === 'all' ? (
                  // Group by city when showing all
                  Object.entries(
                    sortedBranches.reduce((acc, branch) => {
                      if (!acc[branch.city]) {
                        acc[branch.city] = [];
                      }
                      acc[branch.city].push(branch);
                      return acc;
                    }, {})
                  ).sort(([cityA], [cityB]) => cityA.localeCompare(cityB)).map(([city, cityBranches]) => (
                    <motion.div 
                      key={city}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <div className="bg-[#1f6737] text-white px-4 sm:px-6 py-3 sm:py-4">
                        <h3 className="text-lg sm:text-xl font-bold flex flex-wrap items-center gap-1">
                          {city} 
                          <span className="text-xs sm:text-sm font-normal opacity-90">
                            ({cityBranches.length} {cityBranches.length === 1 ? t('branchesPage.location') : t('branchesPage.locations')})
                          </span>
                        </h3>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {cityBranches.map((branch) => (
                          <div key={branch.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
                              <div>
                                <h4 className="font-bold text-gray-900 text-sm sm:text-base">{branch.name}</h4>
                                <div className="flex items-start space-x-1.5 sm:space-x-2 mt-1 sm:mt-2">
                                  <MapPin size={14} className="text-[#ef322c] flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-700 text-xs sm:text-sm">{branch.address}, {branch.postcode} {branch.city}</span>
                                </div>
                              </div>
                              <div className="flex items-center mt-2 md:mt-0">
                                <a 
                                  href={`tel:${branch.phone.replace(/\s/g, '')}`} 
                                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full py-1.5 px-3 sm:px-4 text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5"
                                >
                                  <Phone size={14} className="text-[#ef322c] flex-shrink-0" />
                                  {branch.phone}
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  // Single city view
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <div className="bg-[#1f6737] text-white px-4 sm:px-6 py-3 sm:py-4">
                      <h3 className="text-lg sm:text-xl font-bold flex flex-wrap items-center gap-1">
                        {activeCity} 
                        <span className="text-xs sm:text-sm font-normal opacity-90">
                          ({sortedBranches.length} {sortedBranches.length === 1 ? t('branchesPage.location') : t('branchesPage.locations')})
                        </span>
                      </h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {sortedBranches.map((branch) => (
                        <div key={branch.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
                            <div>
                              <h4 className="font-bold text-gray-900 text-sm sm:text-base">{branch.name}</h4>
                              <div className="flex items-start space-x-1.5 sm:space-x-2 mt-1 sm:mt-2">
                                <MapPin size={14} className="text-[#ef322c] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 text-xs sm:text-sm">{branch.address}, {branch.postcode} {branch.city}</span>
                              </div>
                            </div>
                            <div className="flex items-center mt-2 md:mt-0">
                              <a 
                                href={`tel:${branch.phone.replace(/\s/g, '')}`} 
                                className="bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full py-1.5 px-3 sm:px-4 text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5"
                              >
                                <Phone size={14} className="text-[#ef322c] flex-shrink-0" />
                                {branch.phone}
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-md mx-auto">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{t('branchesPage.noLocationsFound')}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {t('branchesPage.noLocationsDescription')}
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCity('all');
                    }}
                    className="inline-flex items-center bg-[#1f6737] text-white px-4 py-2 rounded-md font-medium hover:bg-[#1f6737]/90 transition-colors text-sm sm:text-base"
                  >
                    {t('branchesPage.resetFilters')}
                  </button>
                </div>
              </div>
            )}
            
            {/* Summary Section */}
            <div className="mt-10 sm:mt-12 md:mt-16 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">{t('branchesPage.needHelp')}</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
                {t('branchesPage.callForOrdering')}
              </p>
            </div>
          </div>
        </div>
      </PageTemplate>
    );
  };
  
  export default memo(BranchesPage);