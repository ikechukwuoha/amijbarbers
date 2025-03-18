// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, User, ShoppingCart, Search, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Services');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthDropdown, setShowAuthDropdown] = useState(false);

  // Check if user is authenticated (replace with your actual auth logic)
  useEffect(() => {
    // This is a placeholder. Replace with your actual authentication check
    // For example: const loggedIn = localStorage.getItem('token') !== null;
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsAuthenticated(loggedIn);
  }, []);

  // Handle logout
  const handleLogout = () => {
    // Implement your logout logic here
    localStorage.removeItem('isLoggedIn');
    setIsAuthenticated(false);
    setShowAuthDropdown(false);
    // Redirect to home or refresh page if needed
    // window.location.href = '/';
  };

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showAuthDropdown && !event.target.closest('.auth-dropdown-container')) {
        setShowAuthDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAuthDropdown]);

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
        {["Services", "Products", "Gallery", "Contact"].map((item) => (
          <Link 
            key={item}
            to={`/${item.toLowerCase()}`} 
            className="text-2xl font-medium text-gray-300 hover:text-amber-500 transition-all duration-300 transform hover:translate-x-2"
            onClick={() => {
              setActiveLink(item);
              setIsMenuOpen(false);
            }}
          >
            {item}
          </Link>
        ))}
        
        {isAuthenticated ? (
          <button 
            onClick={handleLogout}
            className="flex items-center text-2xl font-medium text-gray-300 hover:text-amber-500 transition-all duration-300 transform hover:translate-x-2"
          >
            <LogOut size={24} className="mr-2" />
            Logout
          </button>
        ) : (
          <Link 
            to="/login"
            className="flex items-center text-2xl font-medium text-gray-300 hover:text-amber-500 transition-all duration-300 transform hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <User size={24} className="mr-2" />
            Login
          </Link>
        )}
        
        <button className="mt-8 bg-amber-500 text-black px-8 py-3 font-bold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105">
          BOOK NOW
        </button>
      </div>
    </div>
  );

  // Authentication dropdown menu
  const AuthDropdown = () => (
    <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-800 shadow-lg rounded-sm z-50">
      {isAuthenticated ? (
        <>
          <div className="px-4 py-3 border-b border-gray-800">
            <p className="text-sm text-gray-300">Signed in as</p>
            <p className="text-sm font-bold text-amber-500">user@example.com</p>
          </div>
          <Link 
            to="/profile" 
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-amber-500"
            onClick={() => setShowAuthDropdown(false)}
          >
            Profile
          </Link>
          <button 
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-amber-500"
          >
            Sign out
          </button>
        </>
      ) : (
        <>
          <Link 
            to="/login" 
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-amber-500"
            onClick={() => setShowAuthDropdown(false)}
          >
            Sign in
          </Link>
          <Link 
            to="/register" 
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-amber-500"
            onClick={() => setShowAuthDropdown(false)}
          >
            Create account
          </Link>
        </>
      )}
    </div>
  );

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-amber-500 transition-all duration-300 transform hover:scale-105">
              AMIJ
              <span className="text-gray-400 ml-1">LUXURY</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Services", "Products", "Gallery", "Contact"].map((item) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase()}`} 
                className={`relative text-sm font-medium tracking-wide uppercase ${activeLink === item ? 'text-amber-500' : 'text-gray-300'} hover:text-amber-500 transition-colors duration-300 group`}
                onClick={() => setActiveLink(item)}
              >
                {item}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 ${activeLink === item ? 'w-full' : 'group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-300 hover:text-amber-500 transition-colors duration-300">
              <Search size={20} />
            </button>
            
            {/* User Profile Button with Dropdown */}
            <div className="relative auth-dropdown-container">
              <button 
                className={`text-gray-300 hover:text-amber-500 transition-colors duration-300 ${showAuthDropdown ? 'text-amber-500' : ''}`}
                onClick={() => setShowAuthDropdown(!showAuthDropdown)}
              >
                {isAuthenticated ? (
                  <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold text-xs">
                    U
                  </div>
                ) : (
                  <User size={20} />
                )}
              </button>
              
              {showAuthDropdown && <AuthDropdown />}
            </div>
            
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