import { useState, useCallback, memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Memoized testimonial card for better performance
const TestimonialCard = memo(({ content, author, role, rating }) => (
  <div className="bg-white rounded-lg shadow-md p-4 text-center h-full">
    <div className="flex justify-center mb-2">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-700 text-sm mb-3 italic">{content}</p>
    <div>
      <h4 className="font-bold text-sm">{author}</h4>
      <p className="text-gray-500 text-xs">{role}</p>
    </div>
  </div>
));

const Testimonials = () => {
  const { t } = useTranslation();
  
  // Static data - now using translation keys
  const testimonials = [
    {
      id: 1,
      content: t('testimonials.testimonial1.content'),
      author: t('testimonials.testimonial1.author'),
      role: t('testimonials.testimonial1.role'),
      rating: 5
    },
    {
      id: 2,
      content: t('testimonials.testimonial2.content'),
      author: t('testimonials.testimonial2.author'),
      role: t('testimonials.testimonial2.role'),
      rating: 5
    },
    {
      id: 3,
      content: t('testimonials.testimonial3.content'),
      author: t('testimonials.testimonial3.author'),
      role: t('testimonials.testimonial3.role'),
      rating: 5
    }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  // Memoized handlers
  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const goToPage = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  // Get current items
  const currentItems = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('testimonials.title')}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Static grid - less DOM updates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentItems.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>
          
          {/* Only show navigation if needed */}
          {testimonials.length > itemsPerPage && (
            <>
              <button 
                className="absolute top-1/2 -left-2 -translate-y-1/2 bg-white p-1 rounded-full shadow-md text-gray-800 hover:text-red-600 focus:outline-none"
                onClick={prevPage}
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button 
                className="absolute top-1/2 -right-2 -translate-y-1/2 bg-white p-1 rounded-full shadow-md text-gray-800 hover:text-red-600 focus:outline-none"
                onClick={nextPage}
                aria-label="Next testimonials"
              >
                <ChevronRight size={20} />
              </button>
              
              <div className="flex justify-center mt-4 space-x-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentPage === index ? 'bg-red-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial group ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);