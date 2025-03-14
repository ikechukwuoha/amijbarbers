// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black pt-16 pb-8 relative">
      {/* Gold gradient border at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500"></div>
      
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
          
          {/* Brand column */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="mb-6 text-center sm:text-left">
              <h2 className="text-2xl font-bold">
                <span className="text-amber-500">AMIJ</span>
                <span className="text-gray-400">LUXURY</span>
              </h2>
              <p className="text-gray-400 text-sm mt-2">Elegance in Every Detail</p>
            </div>
            
            {/* Social icons */}
            <div className="flex space-x-4 mt-4">
              {['facebook', 'instagram', 'twitter', 'pinterest'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300"
                >
                  <i className={`fab fa-${social} text-gray-400 hover:text-black`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Shop links column */}
          <div className="text-center sm:text-left">
            <h3 className="text-amber-500 font-semibold text-lg mb-6 pb-2 border-b border-amber-500 inline-block">Shop</h3>
            <ul className="space-y-3">
              {['New Arrivals', 'Best Sellers', 'Collections', 'Accessories', 'Sale'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Customer Service column */}
          <div className="text-center sm:text-left">
            <h3 className="text-amber-500 font-semibold text-lg mb-6 pb-2 border-b border-amber-500 inline-block">Customer Service</h3>
            <ul className="space-y-3">
              {['Contact Us', 'FAQs', 'Shipping & Returns', 'Size Guide', 'My Account'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter column */}
          <div className="text-center sm:text-left">
            <h3 className="text-amber-500 font-semibold text-lg mb-6 pb-2 border-b border-amber-500 inline-block">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            
            <form className="flex mt-4 max-w-md mx-auto sm:mx-0">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-900 text-gray-400 px-4 py-2 flex-grow rounded-l focus:outline-none focus:ring-1 focus:ring-amber-500 w-full"
              />
              <button 
                type="submit" 
                className="bg-amber-500 text-black px-4 py-2 font-medium rounded-r hover:bg-amber-600 transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <div className="mt-6 max-w-md mx-auto sm:mx-0">
              <p className="text-gray-400 flex items-center mb-2 justify-center sm:justify-start">
                <i className="fas fa-envelope mr-3 text-amber-500"></i>
                <span className="truncate">info@amijcollections.com</span>
              </p>
              <p className="text-gray-400 flex items-center justify-center sm:justify-start">
                <i className="fas fa-phone-alt mr-3 text-amber-500"></i>
                +234 814 889 5202
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AMIJ Collections. All rights reserved.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="text-gray-400 hover:text-amber-500 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-500 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-amber-500 text-sm">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;