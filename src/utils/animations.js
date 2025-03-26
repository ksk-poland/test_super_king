/**
 * Animation utilities for Super King Kebab website
 * Add scroll animation effects, parallax, and other interactive elements
 */

/**
 * Initialize scroll animations for elements with data-animate attribute
 */
export const initScrollAnimations = () => {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    if (!animatedElements.length) return;
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animation = element.dataset.animate;
          const delay = element.dataset.delay || 0;
          
          setTimeout(() => {
            element.classList.add(`animate-${animation}`);
            element.style.visibility = 'visible';
          }, delay);
          
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.1 });
  
    animatedElements.forEach(element => {
      element.style.visibility = 'hidden';
      observer.observe(element);
    });
  };
  
  /**
   * Initialize parallax effect for elements with data-parallax attribute
   */
  export const initParallaxEffect = () => {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (!parallaxElements.length) return;
    
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.parallax || 0.5;
        const offset = scrollPosition * speed;
        
        element.style.transform = `translateY(${offset}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
  };
  
  /**
   * Initialize counter animation for numbers with data-counter attribute
   */
  export const initCounterAnimation = () => {
    const counterElements = document.querySelectorAll('[data-counter]');
    
    if (!counterElements.length) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const target = parseInt(element.dataset.counter, 10);
          const duration = parseInt(element.dataset.duration || 2000, 10);
          const increment = Math.ceil(target / (duration / 16));
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
              element.textContent = target.toLocaleString();
              clearInterval(timer);
            } else {
              element.textContent = current.toLocaleString();
            }
          }, 16);
          
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.5 });
    
    counterElements.forEach(element => {
      observer.observe(element);
    });
  };
  
  /**
   * Setup mobile menu toggle functionality
   */
  export const setupMobileMenu = () => {
    const menuButton = document.querySelector('[data-menu-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    
    if (!menuButton || !mobileMenu) return;
    
    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !isOpen);
      mobileMenu.classList.toggle('hidden');
      
      // Prevent scrolling when menu is open
      document.body.classList.toggle('overflow-hidden', !isOpen);
    });
  };
  
  /**
   * Initialize image lazy loading with fade-in effect
   */
  export const initLazyLoading = () => {
    if ('loading' in HTMLImageElement.prototype) {
      // Browser supports native lazy loading
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');
      
      lazyImages.forEach(img => {
        img.classList.add('opacity-0', 'transition-opacity', 'duration-500');
        img.addEventListener('load', () => {
          img.classList.remove('opacity-0');
        });
      });
    } else {
      // Fallback for browsers that don't support native lazy loading
      const lazyImages = document.querySelectorAll('[data-src]');
      
      if (!lazyImages.length) return;
      
      const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('opacity-0', 'transition-opacity', 'duration-500');
            
            img.addEventListener('load', () => {
              img.classList.remove('opacity-0');
            });
            
            lazyObserver.unobserve(img);
          }
        });
      }, { rootMargin: '100px' });
      
      lazyImages.forEach(img => {
        lazyObserver.observe(img);
      });
    }
  };
  
  /**
   * Initialize all animations and interactive features
   */
  export const initAllAnimations = () => {
    document.addEventListener('DOMContentLoaded', () => {
      initScrollAnimations();
      initParallaxEffect();
      initCounterAnimation();
      setupMobileMenu();
      initLazyLoading();
    });
  };