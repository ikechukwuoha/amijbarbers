import React, { useState, useEffect } from 'react';
import { Menu, X, User, ShoppingCart, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  // Handle scroll event for navbar transformation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const MobileMenu = () => (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col justify-center items-center">
      <div className="absolute top-4 right-4">
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="text-gray-300 hover:text-amber-500 transition-all duration-300 transform hover:rotate-90"
        >
          <X size={32} />
        </button>
      </div>
      
      <div className="flex flex-col items-center space-y-8">
        {["Home", "Services", "Products", "Gallery", "Contact"].map((item) => (
          <a 
            key={item}
            href="#" 
            className="text-2xl font-medium text-gray-300 hover:text-amber-500 transition-all duration-300 transform hover:translate-x-2"
            onClick={() => {
              setActiveLink(item);
              setIsMenuOpen(false);
            }}
          >
            {item}
          </a>
        ))}
        <button className="mt-8 bg-amber-500 text-black px-8 py-3 font-bold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105">
          BOOK NOW
        </button>
      </div>
    </div>
  );

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-amber-500 transition-all duration-300 transform hover:scale-105">
              AMIJ
              <span className="text-gray-400 ml-1">LUXURY</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Services", "Products", "Gallery", "Contact"].map((item) => (
              <a 
                key={item}
                href="#" 
                className={`relative text-sm font-medium tracking-wide uppercase ${activeLink === item ? 'text-amber-500' : 'text-gray-300'} hover:text-amber-500 transition-colors duration-300 group`}
                onClick={() => setActiveLink(item)}
              >
                {item}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 ${activeLink === item ? 'w-full' : 'group-hover:w-full'}`}></span>
              </a>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-300 hover:text-amber-500 transition-colors duration-300">
              <Search size={20} />
            </button>
            <button className="text-gray-300 hover:text-amber-500 transition-colors duration-300">
              <User size={20} />
            </button>
            <button className="text-gray-300 hover:text-amber-500 transition-colors duration-300">
              <ShoppingCart size={20} />
            </button>
            <button className="bg-amber-500 text-black px-5 py-2 font-bold uppercase text-sm tracking-wide hover:bg-yellow-600 transition-all duration-300 transform hover:translate-y-px">
              Book Now
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-amber-500 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu with animation */}
      {isMenuOpen && <MobileMenu />}
    </nav>
  );
};

export default Navbar;