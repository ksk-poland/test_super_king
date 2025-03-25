import { MapPin, Clock, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const BranchLocations = () => {
  // Sample branch data
  const branches = [
    {
      id: 1,
      name: "Super King Kebab - Central",
      address: "123 Main Street, Warsaw",
      phone: "+48 123 456 789",
      hours: "11:00 - 23:00",
      daysOpen: "Everyday",
      isMain: true
    },
    {
      id: 2,
      name: "Super King Kebab - North",
      address: "45 North Avenue, Warsaw",
      phone: "+48 123 456 790",
      hours: "11:00 - 22:00",
      daysOpen: "Everyday",
      isMain: false
    },
    {
      id: 3,
      name: "Super King Kebab - South",
      address: "78 South Boulevard, Warsaw",
      phone: "+48 123 456 791",
      hours: "12:00 - 23:00",
      daysOpen: "Everyday",
      isMain: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit us at any of our convenient locations around the city
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {branches.map((branch) => (
            <div 
              key={branch.id} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 ${
                branch.isMain ? 'ring-2 ring-red-600' : ''
              }`}
            >
              {/* Branch image placeholder - replace with actual images */}
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 font-medium">Branch Image</span>
                </div>
                
                {branch.isMain && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                    Main Branch
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{branch.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-red-600 flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-700">{branch.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone size={20} className="text-red-600 flex-shrink-0 mr-3" />
                    <span className="text-gray-700">{branch.phone}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={20} className="text-red-600 flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <span className="block text-gray-700">{branch.daysOpen}</span>
                      <span className="block text-gray-700 font-semibold">{branch.hours}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={`https://maps.google.com/?q=${branch.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 text-gray-800 py-2 rounded text-center font-medium hover:bg-gray-200 transition-colors"
                  >
                    View on Map
                  </a>
                  <Link 
                    to={`/order?branch=${branch.id}`}
                    className="flex-1 bg-red-600 text-white py-2 rounded text-center font-medium hover:bg-red-700 transition-colors"
                  >
                    Order
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Map section */}
        <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <div className="p-6 bg-white border-b">
            <h3 className="text-xl font-bold text-gray-900">Delivery Areas</h3>
            <p className="text-gray-600">We deliver to all areas within Warsaw city limits</p>
          </div>
          
          {/* Map placeholder - replace with actual map */}
          <div className="h-96 bg-gray-200 flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-gray-700 font-medium mb-4">Map Placeholder</p>
              <p className="text-gray-600 max-w-md mx-auto">
                This will be replaced with an interactive map showing our branch locations and delivery zones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchLocations;