import React, { useState } from 'react';
import { Clock, Scissors, Calendar, ArrowLeft } from 'lucide-react';

const Services = () => {
  const [viewService, setViewService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Service data
  const services = [
    { 
      id: 1, 
      name: "Classic Haircut", 
      description: "Precision cut with expert styling", 
      price: 35.00, 
      duration: 30,
      category: "hair",
      image: "/api/placeholder/300/300",
      longDescription: "Our classic haircut service includes a consultation, precision cut, and styling. Our expert barbers will help you achieve the perfect look while ensuring you leave feeling refreshed and confident."
    },
    { 
      id: 2, 
      name: "Hot Towel Shave", 
      description: "Traditional straight razor shave", 
      price: 45.00, 
      duration: 45,
      category: "shave",
      image: "/api/placeholder/300/300",
      longDescription: "Experience our signature hot towel shave. This traditional service includes pre-shave oils, hot towel preparation, precision straight razor shaving, and a soothing aftershave treatment for the ultimate refreshing experience."
    },
    { 
      id: 3, 
      name: "Beard Trim & Shape", 
      description: "Expert beard grooming & styling", 
      price: 25.00, 
      duration: 20,
      category: "beard",
      image: "/api/placeholder/300/300",
      longDescription: "Our beard trim and shape service helps you maintain the perfect facial hair. Your barber will trim, shape, and style your beard for a clean, well-maintained look that complements your face shape."
    },
    { 
      id: 4, 
      name: "Full Service Package", 
      description: "Haircut, shave, and styling", 
      price: 75.00, 
      duration: 60,
      category: "package",
      image: "/api/placeholder/300/300",
      longDescription: "Our most popular service combines a precision haircut, hot towel shave, and expert styling. This complete package will leave you looking and feeling your absolute best."
    },
    { 
      id: 5, 
      name: "Hair Coloring", 
      description: "Professional color application", 
      price: 65.00, 
      duration: 60,
      category: "hair",
      image: "/api/placeholder/300/300",
      longDescription: "Our hair coloring service uses premium products for natural-looking results. Whether you're covering gray or trying a new look, our barbers ensure even application and vibrant, long-lasting color."
    },
    { 
      id: 6, 
      name: "Kid's Haircut", 
      description: "Gentle service for young clients", 
      price: 25.00, 
      duration: 20,
      category: "hair",
      image: "/api/placeholder/300/300",
      longDescription: "Our kid's haircut service is designed to make young clients feel comfortable and special. Our patient barbers ensure a positive experience while delivering a great haircut that both kids and parents will love."
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'hair', name: 'Hair' },
    { id: 'beard', name: 'Beard' },
    { id: 'shave', name: 'Shave' },
    { id: 'package', name: 'Packages' }
  ];

  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  // Function to handle booking services
  const bookService = (e, service) => {
    e.stopPropagation();
    alert(`Booking ${service.name}!`);
  };

  // Duration display
  const renderDuration = (minutes) => (
    <div className="flex items-center">
      <Clock size={14} className="text-gray-400" /> 
      <span className="ml-1 text-sm text-gray-400">{minutes} min</span>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-10">
            Our <span className="text-amber-500">Premium</span> Services
          </h1>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Discover our carefully curated collection of grooming essentials. Each product is selected for quality and performance to help you look and feel your best.
          </p>
      {viewService ? (
        // Service Detail View
        <div className="bg-black border border-gray-800 p-4 rounded">
          <button 
            onClick={() => setViewService(null)}
            className="text-amber-500 hover:text-amber-400 mb-4 flex items-center"
          >
            <ArrowLeft size={16} className="mr-1" /> Back
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img 
              src={viewService.image} 
              alt={viewService.name} 
              className="w-full border border-gray-800 rounded"
            />
            
            <div>
              <h2 className="text-xl font-bold text-white mb-2">{viewService.name}</h2>
              {renderDuration(viewService.duration)}
              
              <p className="text-gray-400 text-sm mt-3 mb-4">{viewService.longDescription}</p>
              
              <div className="text-xl font-bold text-amber-500 mb-4">${viewService.price.toFixed(2)}</div>
              
              <button 
                onClick={(e) => bookService(e, viewService)}
                className="flex items-center bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-sm text-sm"
              >
                <Calendar size={16} className="mr-1" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Service Listing View
        <>
          {/* Category Pills */}
          <div className="flex overflow-x-auto gap-2 mb-4 pb-2 no-scrollbar">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 text-black font-medium'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredServices.map(service => (
              <div 
                key={service.id}
                onClick={() => setViewService(service)}
                className="bg-black border border-gray-800 overflow-hidden hover:border-amber-500 transition-all hover:shadow-md cursor-pointer"
              >
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-40 object-cover"
                />
                
                <div className="p-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-sm font-medium text-white">{service.name}</h3>
                    <span className="text-amber-500 font-bold text-sm">${service.price.toFixed(2)}</span>
                  </div>
                  
                  <p className="text-gray-400 text-xs mb-2 line-clamp-2">{service.description}</p>
                  
                  <div className="flex items-center justify-between">
                    {renderDuration(service.duration)}
                    
                    <button 
                      onClick={(e) => bookService(e, service)}
                      className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-1 px-2 rounded-sm text-xs"
                    >
                      <Scissors size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
    </div>
    </div>
  );
};

export default Services;