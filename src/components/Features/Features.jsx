import React from 'react';
import { Scissors, Gift, Calendar } from 'lucide-react';

const Features = () => (
  <div className="py-16 bg-gradient-to-b from-black to-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-amber-500 text-black p-4 inline-flex rounded-full mb-4">
            <Scissors size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Master Barbers</h3>
          <p className="text-gray-400">Our team of skilled barbers combines traditional techniques with modern styles.</p>
        </div>
        
        <div className="text-center">
          <div className="bg-amber-500 text-black p-4 inline-flex rounded-full mb-4">
            <Gift size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Premium Products</h3>
          <p className="text-gray-400">We use and sell only the highest quality grooming and spa products available.</p>
        </div>
        
        <div className="text-center">
          <div className="bg-amber-500 text-black p-4 inline-flex rounded-full mb-4">
            <Calendar size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
          <p className="text-gray-400">Book your appointments online anytime for a seamless experience.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Features; // Ensure this is a default export