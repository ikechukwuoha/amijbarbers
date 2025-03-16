import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import Products from './Products';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('services');
  
  return (
    <div className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Our <span className="text-amber-500">Premium</span> Offerings
        </h2>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="border border-gray-800 inline-flex rounded-sm overflow-hidden">
            <button
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 font-medium transition-colors duration-300 ${
                activeTab === 'services'
                  ? 'bg-amber-500 text-black'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-6 py-3 font-medium transition-colors duration-300 ${
                activeTab === 'products'
                  ? 'bg-amber-500 text-black'
                  : 'bg-black text-white hover:bg-gray-900'
              }`}
            >
              Products
            </button>
          </div>
        </div>
        
        {/* Tab Content - Limited Preview */}
        {activeTab === 'services' ? (
          <div>
            <Services />
            <div className="text-center mt-8">
              <Link 
                to="/services" 
                className="inline-flex items-center text-amber-500 hover:text-amber-400 font-bold"
              >
                View all services
                <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
          </div>
        ) : (
          <div>
            {/* Show a limited subset of products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* First 3 products from the Products component would go here */}
              {/* For the home page, we just show a limited preview */}
            </div>
            <div className="text-center">
              <Link 
                to="/products" 
                className="inline-flex items-center text-amber-500 hover:text-amber-400 font-bold"
              >
                View all products
                <ChevronRight size={20} className="ml-1" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;