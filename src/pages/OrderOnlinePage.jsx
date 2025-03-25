// src/pages/OrderOnlinePage.jsx
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCartStore } from '../stores/cartStore';
import MenuCategory from '../components/menu/MenuCategory';
import OrderItem from '../components/order/OrderItem';
import CartSummary from '../components/order/CartSummary';
import DeliveryForm from '../components/order/DeliveryForm';
import PaymentForm from '../components/order/PaymentForm';
import OrderConfirmation from '../components/order/OrderConfirmation';
import { kebabs, sides, drinks, desserts } from '../data/menuItems';

const OrderOnlinePage = () => {
  const { t } = useTranslation();
  const [orderStep, setOrderStep] = useState('type'); // type, menu, delivery, payment, confirmation
  const [orderType, setOrderType] = useState(null); // pickup or delivery
  const [activeCategory, setActiveCategory] = useState('kebabs');
  const [orderNumber, setOrderNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const { cart, clearCart, totalItems } = useCartStore();
  
  // Categories data
  const categories = [
    { id: 'kebabs', name: t('Kebabs'), icon: '🥙' },
    { id: 'sides', name: t('Sides'), icon: '🍟' },
    { id: 'drinks', name: t('Drinks'), icon: '🥤' },
    { id: 'desserts', name: t('Desserts'), icon: '🍰' },
  ];

  // Check if cart is empty when trying to proceed with checkout
  useEffect(() => {
    if (orderStep === 'delivery' || orderStep === 'payment') {
      if (totalItems === 0) {
        setOrderStep('menu');
      }
    }
  }, [orderStep, totalItems]);
  
  // Get items for the selected category
  const getCategoryItems = (categoryId) => {
    switch (categoryId) {
      case 'kebabs': return kebabs;
      case 'sides': return sides;
      case 'drinks': return drinks;
      case 'desserts': return desserts;
      default: return [];
    }
  };
  
  // Handle order type selection
  const handleOrderTypeSelect = (type) => {
    setOrderType(type);
    setOrderStep('menu');
  };
  
  // Proceed to checkout
  const handleCheckout = () => {
    if (totalItems === 0) {
      // Show an error or notification that cart is empty
      return;
    }
    
    if (orderType === 'delivery') {
      setOrderStep('delivery');
    } else {
      setOrderStep('payment');
    }
  };
  
  // Navigation handlers
  const handleDeliveryComplete = () => {
    setOrderStep('payment');
  };
  
  const handlePaymentComplete = async () => {
    try {
      setIsProcessing(true);
      // Simulate API call for payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate random order number with timestamp to ensure uniqueness
      const timestamp = new Date().getTime().toString().slice(-4);
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      setOrderNumber(`SK${timestamp}${randomNum}`);
      
      setOrderStep('confirmation');
      clearCart();
    } catch (error) {
      console.error('Payment processing error:', error);
      // Handle payment errors
    } finally {
      setIsProcessing(false);
    }
  };
  
  // Navigate back to previous step
  const handleBack = () => {
    switch (orderStep) {
      case 'menu':
        setOrderStep('type');
        break;
      case 'delivery':
        setOrderStep('menu');
        break;
      case 'payment':
        orderType === 'delivery' ? setOrderStep('delivery') : setOrderStep('menu');
        break;
      default:
        break;
    }
  };
  
  // Render order type selection
  const renderOrderTypeSelection = () => (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {t('Choose Order Type')}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200 hover:border-superking-primary transition-colors">
          <div className="text-4xl mb-4">🥡</div>
          <h3 className="text-xl font-bold mb-2">{t('Pickup')}</h3>
          <p className="text-gray-600 mb-4">{t('Ready in 15-20 minutes')}</p>
          <button 
            className="w-full bg-superking-primary text-white px-4 py-2 rounded font-medium hover:bg-superking-accent transition-colors"
            onClick={() => handleOrderTypeSelect('pickup')}
          >
            {t('Select')}
          </button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg text-center border border-gray-200 hover:border-superking-primary transition-colors">
          <div className="text-4xl mb-4">🛵</div>
          <h3 className="text-xl font-bold mb-2">{t('Delivery')}</h3>
          <p className="text-gray-600 mb-4">{t('30-45 minutes delivery time')}</p>
          <button 
            className="w-full bg-superking-primary text-white px-4 py-2 rounded font-medium hover:bg-superking-accent transition-colors"
            onClick={() => handleOrderTypeSelect('delivery')}
          >
            {t('Select')}
          </button>
        </div>
      </div>
    </div>
  );
  
  // Render menu selection
  const renderMenuSelection = () => (
    <div className="grid md:grid-cols-4 gap-8">
      {/* Categories sidebar */}
      <div className="md:col-span-1">
        <div className="bg-white rounded-lg shadow overflow-hidden sticky top-24">
          <div className="p-4 bg-superking-dark text-white font-medium">
            {t('Categories')}
          </div>
          <div className="divide-y">
            {categories.map(category => (
              <button
                key={category.id}
                className={`p-4 w-full text-left hover:bg-gray-50 transition-colors ${
                  activeCategory === category.id ? 'bg-gray-100 font-medium' : ''
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="p-4 border-t">
            <button
              onClick={handleBack}
              className="w-full text-gray-600 hover:text-superking-dark flex items-center justify-center"
            >
              <span className="mr-1">←</span>
              {t('Change Order Type')}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu items */}
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <span className="mr-2">{categories.find(c => c.id === activeCategory)?.icon}</span>
          {categories.find(c => c.id === activeCategory)?.name}
        </h2>
        
        <div className="space-y-4">
          {getCategoryItems(activeCategory).map(item => (
            <OrderItem 
              key={item.id}
              id={item.id}
              name={t(item.name)}
              description={t(item.description)}
              price={item.price}
              image={item.image}
              tags={item.tags?.map(tag => t(tag))}
            />
          ))}
        </div>
      </div>
      
      {/* Cart summary */}
      <div className="md:col-span-1">
        <CartSummary 
          orderType={orderType} 
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
  
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4 text-superking-dark">
            {t('Order Online')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('Order your favorite kebab for pickup or delivery')}
          </p>
        </header>
        
        {/* Order Steps Indicator */}
        {orderStep !== 'type' && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex justify-between">
              <div className={`text-center flex-1 ${orderStep === 'menu' ? 'text-superking-primary font-medium' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${orderStep === 'menu' ? 'bg-superking-primary text-white' : 'border border-gray-300'}`}>1</div>
                <div className="mt-1">{t('Menu')}</div>
              </div>
              
              <div className={`text-center flex-1 ${orderStep === 'delivery' ? 'text-superking-primary font-medium' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${orderStep === 'delivery' ? 'bg-superking-primary text-white' : 'border border-gray-300'}`}>
                  {orderType === 'delivery' ? '2' : '-'}
                </div>
                <div className="mt-1">{t('Delivery')}</div>
              </div>
              
              <div className={`text-center flex-1 ${orderStep === 'payment' ? 'text-superking-primary font-medium' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${orderStep === 'payment' ? 'bg-superking-primary text-white' : 'border border-gray-300'}`}>
                  {orderType === 'delivery' ? '3' : '2'}
                </div>
                <div className="mt-1">{t('Payment')}</div>
              </div>
              
              <div className={`text-center flex-1 ${orderStep === 'confirmation' ? 'text-superking-primary font-medium' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${orderStep === 'confirmation' ? 'bg-superking-primary text-white' : 'border border-gray-300'}`}>
                  {orderType === 'delivery' ? '4' : '3'}
                </div>
                <div className="mt-1">{t('Confirmation')}</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Different order steps rendering */}
        {orderStep === 'type' && renderOrderTypeSelection()}
        {orderStep === 'menu' && renderMenuSelection()}
        
        {orderStep === 'delivery' && (
          <DeliveryForm
            onBack={handleBack}
            onComplete={handleDeliveryComplete}
          />
        )}
        
        {orderStep === 'payment' && (
          <PaymentForm
            orderType={orderType}
            isProcessing={isProcessing}
            onBack={handleBack}
            onComplete={handlePaymentComplete}
          />
        )}
        
        {orderStep === 'confirmation' && (
          <OrderConfirmation
            orderNumber={orderNumber}
            orderType={orderType}
          />
        )}
      </div>
    </div>
  );
};

export default OrderOnlinePage;