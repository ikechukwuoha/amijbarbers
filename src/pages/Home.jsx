import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/Herosection';
import Services from '../components/ServiceProducts/Services';
import Products from '../components/ServiceProducts/Products';
import Testimonials from '../components/Testimonials/Testimonials';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* <HeroSection /> */}
      
      {/* Services/Products Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex border-b border-gray-800 mb-8">
            <button 
              onClick={() => setActiveTab('services')}
              className={`px-6 py-3 font-medium ${activeTab === 'services' ? 'text-amber-500 border-b-2 border-amber-500' : 'text-gray-400'}`}
            >
              SERVICES
            </button>
            <button 
              onClick={() => setActiveTab('products')}
              className={`px-6 py-3 font-medium ${activeTab === 'products' ? 'text-amber-500 border-b-2 border-amber-500' : 'text-gray-400'}`}
            >
              PRODUCTS
            </button>
          </div>
          
          {activeTab === 'services' && <Services />}
          {activeTab === 'products' && <Products />}
        </div>
      </div>
      
      <Testimonials />
      <Features />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;