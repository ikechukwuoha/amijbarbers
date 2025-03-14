import React from 'react';

const MobileMenu = () => (
  <div className="md:hidden bg-gray-900 border-b border-gray-800">
    <div className="px-2 pt-2 pb-3 space-y-1">
      <a href="#" className="block px-3 py-2 text-gray-300 hover:text-amber-500">Home</a>
      <a href="#" className="block px-3 py-2 text-gray-300 hover:text-amber-500">Services</a>
      <a href="#" className="block px-3 py-2 text-gray-300 hover:text-amber-500">Products</a>
      <a href="#" className="block px-3 py-2 text-gray-300 hover:text-amber-500">Gallery</a>
      <a href="#" className="block px-3 py-2 text-gray-300 hover:text-amber-500">Contact</a>
      <button className="mt-2 w-full bg-amber-500 text-black px-4 py-2 font-bold hover:bg-yellow-600 transition-colors">
        BOOK NOW
      </button>
    </div>
  </div>
);

export default MobileMenu;