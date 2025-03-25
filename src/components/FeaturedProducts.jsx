import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = ({ products = [], title = 'Featured Products', viewAllLink = '/menu' }) => {
  // If no products are provided, use these defaults
  const defaultProducts = [
    {
      id: 1,
      name: 'King Kebab Platter',
      description: 'Our signature kebab with double meat, fries, and your choice of sauce',
      price: '£12.99',
      image: '/images/hero-kebab.jpg',
      path: '/menu#kebabs'
    },
    {
      id: 2,
      name: 'Classic Doner Wrap',
      description: 'Tender meat wrapped in fresh flatbread with salad and sauce',
      price: '£8.99',
      image: '/images/hero-kebab.jpg',
      path: '/menu#wraps'
    },
    {
      id: 3,
      name: 'Chicken Shish Box',
      description: 'Marinated chicken pieces with rice, salad, and special sauce',
      price: '£10.99',
      image: '/images/hero-kebab.jpg',
      path: '/menu#kebabs'
    }
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  return (
    <section className="py-16 bg-gray-50" data-animate="fade-in">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular kebabs and dishes that keep our customers coming back for more
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 card-hover"
              data-animate="slide-up"
              data-delay={(product.id - 1) * 100}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/hero-kebab.jpg";
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <span className="font-bold text-superking-secondary">{product.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link 
                  to={product.path || '/menu'} 
                  className="text-superking-primary font-medium hover:text-superking-secondary transition-colors inline-flex items-center"
                >
                  Order Now
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {viewAllLink && (
          <div className="text-center mt-12">
            <Link 
              to={viewAllLink} 
              className="btn-primary"
            >
              View Full Menu
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;