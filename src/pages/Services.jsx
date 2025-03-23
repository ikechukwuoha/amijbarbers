// import React, { useState } from 'react';
// import { Clock, Scissors, Calendar, ArrowLeft } from 'lucide-react';

// const Services = () => {
//   const [viewService, setViewService] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('all');
  
//   // Service data
//   const services = [
//     { 
//       id: 1, 
//       name: "Classic Haircut", 
//       description: "Precision cut with expert styling", 
//       price: 35.00, 
//       duration: 30,
//       category: "hair",
//       image: "/api/placeholder/300/300",
//       longDescription: "Our classic haircut service includes a consultation, precision cut, and styling. Our expert barbers will help you achieve the perfect look while ensuring you leave feeling refreshed and confident."
//     },
//     { 
//       id: 2, 
//       name: "Hot Towel Shave", 
//       description: "Traditional straight razor shave", 
//       price: 45.00, 
//       duration: 45,
//       category: "shave",
//       image: "/api/placeholder/300/300",
//       longDescription: "Experience our signature hot towel shave. This traditional service includes pre-shave oils, hot towel preparation, precision straight razor shaving, and a soothing aftershave treatment for the ultimate refreshing experience."
//     },
//     { 
//       id: 3, 
//       name: "Beard Trim & Shape", 
//       description: "Expert beard grooming & styling", 
//       price: 25.00, 
//       duration: 20,
//       category: "beard",
//       image: "/api/placeholder/300/300",
//       longDescription: "Our beard trim and shape service helps you maintain the perfect facial hair. Your barber will trim, shape, and style your beard for a clean, well-maintained look that complements your face shape."
//     },
//     { 
//       id: 4, 
//       name: "Full Service Package", 
//       description: "Haircut, shave, and styling", 
//       price: 75.00, 
//       duration: 60,
//       category: "package",
//       image: "/api/placeholder/300/300",
//       longDescription: "Our most popular service combines a precision haircut, hot towel shave, and expert styling. This complete package will leave you looking and feeling your absolute best."
//     },
//     { 
//       id: 5, 
//       name: "Hair Coloring", 
//       description: "Professional color application", 
//       price: 65.00, 
//       duration: 60,
//       category: "hair",
//       image: "/api/placeholder/300/300",
//       longDescription: "Our hair coloring service uses premium products for natural-looking results. Whether you're covering gray or trying a new look, our barbers ensure even application and vibrant, long-lasting color."
//     },
//     { 
//       id: 6, 
//       name: "Kid's Haircut", 
//       description: "Gentle service for young clients", 
//       price: 25.00, 
//       duration: 20,
//       category: "hair",
//       image: "/api/placeholder/300/300",
//       longDescription: "Our kid's haircut service is designed to make young clients feel comfortable and special. Our patient barbers ensure a positive experience while delivering a great haircut that both kids and parents will love."
//     }
//   ];

//   // Categories for filtering
//   const categories = [
//     { id: 'all', name: 'All' },
//     { id: 'hair', name: 'Hair' },
//     { id: 'beard', name: 'Beard' },
//     { id: 'shave', name: 'Shave' },
//     { id: 'package', name: 'Packages' }
//   ];

//   // Filter services based on selected category
//   const filteredServices = selectedCategory === 'all' 
//     ? services 
//     : services.filter(service => service.category === selectedCategory);

//   // Function to handle booking services
//   const bookService = (e, service) => {
//     e.stopPropagation();
//     alert(`Booking ${service.name}!`);
//   };

//   // Duration display
//   const renderDuration = (minutes) => (
//     <div className="flex items-center">
//       <Clock size={14} className="text-gray-400" /> 
//       <span className="ml-1 text-sm text-gray-400">{minutes} min</span>
//     </div>
//   );

//   return (
//     <div className="max-w-6xl mx-auto">
//       <div className="pt-10 pb-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-4xl font-bold text-center mb-10">
//             Our <span className="text-amber-500">Premium</span> Services
//           </h1>
//           <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
//             Discover our carefully curated collection of grooming essentials. Each product is selected for quality and performance to help you look and feel your best.
//           </p>
//       {viewService ? (
//         // Service Detail View
//         <div className="bg-black border border-gray-800 p-4 rounded">
//           <button 
//             onClick={() => setViewService(null)}
//             className="text-amber-500 hover:text-amber-400 mb-4 flex items-center"
//           >
//             <ArrowLeft size={16} className="mr-1" /> Back
//           </button>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <img 
//               src={viewService.image} 
//               alt={viewService.name} 
//               className="w-full border border-gray-800 rounded"
//             />
            
//             <div>
//               <h2 className="text-xl font-bold text-white mb-2">{viewService.name}</h2>
//               {renderDuration(viewService.duration)}
              
//               <p className="text-gray-400 text-sm mt-3 mb-4">{viewService.longDescription}</p>
              
//               <div className="text-xl font-bold text-amber-500 mb-4">${viewService.price.toFixed(2)}</div>
              
//               <button 
//                 onClick={(e) => bookService(e, viewService)}
//                 className="flex items-center bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-sm text-sm"
//               >
//                 <Calendar size={16} className="mr-1" />
//                 Book Appointment
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         // Service Listing View
//         <>
//           {/* Category Pills */}
//           <div className="flex overflow-x-auto gap-2 mb-4 pb-2 no-scrollbar">
//             {categories.map(category => (
//               <button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-colors ${
//                   selectedCategory === category.id
//                     ? 'bg-amber-500 text-black font-medium'
//                     : 'bg-gray-800 text-white hover:bg-gray-700'
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>
          
//           {/* Services Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
//             {filteredServices.map(service => (
//               <div 
//                 key={service.id}
//                 onClick={() => setViewService(service)}
//                 className="bg-black border border-gray-800 overflow-hidden hover:border-amber-500 transition-all hover:shadow-md cursor-pointer"
//               >
//                 <img 
//                   src={service.image} 
//                   alt={service.name} 
//                   className="w-full h-40 object-cover"
//                 />
                
//                 <div className="p-3">
//                   <div className="flex justify-between items-start mb-1">
//                     <h3 className="text-sm font-medium text-white">{service.name}</h3>
//                     <span className="text-amber-500 font-bold text-sm">${service.price.toFixed(2)}</span>
//                   </div>
                  
//                   <p className="text-gray-400 text-xs mb-2 line-clamp-2">{service.description}</p>
                  
//                   <div className="flex items-center justify-between">
//                     {renderDuration(service.duration)}
                    
//                     <button 
//                       onClick={(e) => bookService(e, service)}
//                       className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-1 px-2 rounded-sm text-xs"
//                     >
//                       <Scissors size={12} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//     </div>
//     </div>
//   );
// };

// export default Services;




import React, { useState } from 'react';
import { Clock, Scissors, Calendar, ArrowLeft, Star, Award, Trophy, Diamond } from 'lucide-react';

const Services = () => {
  const [viewService, setViewService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Service data - reorganized into tiers
  const services = [
    // Spa Packages
    { 
      id: 1, 
      name: "Bronze Package", 
      description: "Essential spa treatments for relaxation", 
      price: 45.00, 
      duration: 40,
      category: "spa",
      tier: "bronze",
      image: "/api/placeholder/300/300",
      features: [
        "Basic facial treatment",
        "Neck and shoulder massage",
        "Hand exfoliation",
        "Express manicure"
      ],
      longDescription: "Our Bronze Package offers essential spa treatments designed to provide quick relaxation and rejuvenation. Perfect for those with limited time who still want to enjoy a refreshing spa experience."
    },
    { 
      id: 2, 
      name: "Silver Package", 
      description: "Enhanced spa experience with premium treatments", 
      price: 75.00, 
      duration: 60,
      category: "spa",
      tier: "silver",
      image: "/api/placeholder/300/300",
      features: [
        "Full facial treatment",
        "30-minute back massage",
        "Hand and foot exfoliation",
        "Regular manicure",
        "Eyebrow shaping"
      ],
      longDescription: "The Silver Package elevates your spa experience with longer treatments and additional services. Enjoy the perfect balance of relaxation and rejuvenation with our most popular mid-tier option."
    },
    { 
      id: 3, 
      name: "Gold Package", 
      description: "Premium spa experience with luxury treatments", 
      price: 120.00, 
      duration: 90,
      category: "spa",
      tier: "gold",
      image: "/api/placeholder/300/300",
      features: [
        "Premium facial with mask",
        "60-minute full body massage",
        "Full body exfoliation",
        "Deluxe manicure and pedicure",
        "Hair treatment",
        "Complimentary refreshments"
      ],
      longDescription: "Our Gold Package delivers a comprehensive spa experience with premium treatments and extended service time. Perfect for those seeking deep relaxation and significant rejuvenation."
    },
    { 
      id: 4, 
      name: "Diamond Package", 
      description: "Ultimate luxury spa day experience", 
      price: 180.00, 
      duration: 150,
      category: "spa",
      tier: "diamond",
      image: "/api/placeholder/300/300",
      features: [
        "Advanced facial with premium products",
        "90-minute aromatherapy massage",
        "Full body scrub and wrap",
        "Luxury manicure and pedicure",
        "Scalp treatment and hair styling",
        "Makeup session",
        "Private relaxation room",
        "Gourmet lunch included"
      ],
      longDescription: "The Diamond Package is our ultimate spa experience offering the finest treatments with extended service times. This comprehensive package includes everything you need for a full day of luxury, relaxation, and complete rejuvenation."
    },
    
    // Barber Services
    { 
      id: 5, 
      name: "Classic Haircut", 
      description: "Precision cut with expert styling", 
      price: 35.00, 
      duration: 30,
      category: "barber",
      image: "/api/placeholder/300/300",
      features: [
        "Consultation",
        "Precision cut",
        "Styling",
        "Hot towel refresh"
      ],
      longDescription: "Our classic haircut service includes a consultation, precision cut, and styling. Our expert barbers will help you achieve the perfect look while ensuring you leave feeling refreshed and confident."
    },
    { 
      id: 6, 
      name: "Hot Towel Shave", 
      description: "Traditional straight razor shave", 
      price: 45.00, 
      duration: 45,
      category: "barber",
      image: "/api/placeholder/300/300",
      features: [
        "Pre-shave oils",
        "Hot towel preparation",
        "Straight razor shaving",
        "Aftershave treatment"
      ],
      longDescription: "Experience our signature hot towel shave. This traditional service includes pre-shave oils, hot towel preparation, precision straight razor shaving, and a soothing aftershave treatment for the ultimate refreshing experience."
    },
    { 
      id: 7, 
      name: "Beard Trim & Shape", 
      description: "Expert beard grooming & styling", 
      price: 25.00, 
      duration: 20,
      category: "barber",
      image: "/api/placeholder/300/300",
      features: [
        "Beard wash",
        "Precision trimming",
        "Shape and style",
        "Beard oil treatment"
      ],
      longDescription: "Our beard trim and shape service helps you maintain the perfect facial hair. Your barber will trim, shape, and style your beard for a clean, well-maintained look that complements your face shape."
    },
    { 
      id: 8, 
      name: "VIP Barber Experience", 
      description: "Complete grooming package", 
      price: 85.00, 
      duration: 75,
      category: "barber",
      image: "/api/placeholder/300/300",
      features: [
        "Haircut with styling",
        "Hot towel shave or beard trim",
        "Facial treatment",
        "Scalp massage",
        "Eyebrow and ear grooming",
        "Complimentary beverage"
      ],
      longDescription: "Our VIP Barber Experience combines all our premium services into one luxurious package. Enjoy a haircut, hot towel shave or beard trim, facial treatment, and more for the ultimate grooming experience."
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'spa', name: 'Spa Packages' },
    { id: 'barber', name: 'Barber Services' }
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

  // Get tier icon
  const getTierIcon = (tier) => {
    switch(tier) {
      case 'bronze':
        return <Award size={20} className="text-amber-700" />;
      case 'silver':
        return <Award size={20} className="text-gray-400" />;
      case 'gold':
        return <Trophy size={20} className="text-yellow-400" />;
      case 'diamond':
        return <Diamond size={20} className="text-blue-300" />;
      default:
        return <Scissors size={20} className="text-amber-500" />;
    }
  };

  // Get tier color class
  const getTierColorClass = (tier) => {
    switch(tier) {
      case 'bronze':
        return 'border-amber-700 bg-gradient-to-b from-black to-amber-950';
      case 'silver':
        return 'border-gray-400 bg-gradient-to-b from-black to-gray-900';
      case 'gold':
        return 'border-yellow-500 bg-gradient-to-b from-black to-yellow-950';
      case 'diamond':
        return 'border-blue-300 bg-gradient-to-b from-black to-blue-950';
      default:
        return 'border-gray-800 bg-black';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-2">
            Our <span className="text-amber-500">Premium</span> Services
          </h1>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Choose from our carefully curated packages to enhance your grooming and wellness experience. 
            From essential treatments to premium luxury experiences, we have the perfect option for you.
          </p>
          
      {viewService ? (
        // Service Detail View
        <div className={`border p-4 rounded-lg ${getTierColorClass(viewService.tier)}`}>
          <button 
            onClick={() => setViewService(null)}
            className="text-amber-500 hover:text-amber-400 mb-4 flex items-center"
          >
            <ArrowLeft size={16} className="mr-1" /> Back to Services
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img 
              src={viewService.image} 
              alt={viewService.name} 
              className="w-full border border-gray-800 rounded-lg"
            />
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                {viewService.tier && getTierIcon(viewService.tier)}
                <h2 className="text-2xl font-bold text-white">{viewService.name}</h2>
              </div>
              
              {renderDuration(viewService.duration)}
              
              <p className="text-gray-300 mt-4 mb-6">{viewService.longDescription}</p>
              
              <div className="bg-black bg-opacity-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-amber-500 mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  {viewService.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Star size={16} className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-amber-500">${viewService.price.toFixed(2)}</div>
                
                <button 
                  onClick={(e) => bookService(e, viewService)}
                  className="flex items-center bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-md text-sm"
                >
                  <Calendar size={16} className="mr-2" />
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Service Listing View
        <>
          {/* Category Pills */}
          <div className="flex overflow-x-auto gap-3 mb-8 pb-2 no-scrollbar justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 text-black font-medium'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Spa Packages Section */}
          {(selectedCategory === 'all' || selectedCategory === 'spa') && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Diamond size={24} className="text-amber-500 mr-2" />
                <span>Spa Packages</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredServices
                  .filter(service => service.category === 'spa')
                  .map(service => (
                    <div 
                      key={service.id}
                      onClick={() => setViewService(service)}
                      className={`${getTierColorClass(service.tier)} border-2 rounded-lg overflow-hidden hover:shadow-lg cursor-pointer transition-all`}
                    >
                      <div className="relative">
                        <img 
                          src={service.image} 
                          alt={service.name} 
                          className="w-full h-44 object-cover"
                        />
                        <div className="absolute top-0 right-0 m-2 bg-black bg-opacity-70 px-3 py-1 rounded-full flex items-center">
                          {getTierIcon(service.tier)}
                          <span className="ml-1 text-white font-medium capitalize">{service.tier}</span>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-white mb-1">{service.name}</h3>
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{service.description}</p>
                        
                        <div className="bg-black bg-opacity-50 p-3 rounded-lg mb-4">
                          <ul className="text-sm text-gray-300">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-start mb-2">
                                <Star size={12} className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                            {service.features.length > 3 && (
                              <li className="text-amber-500 text-sm">+ {service.features.length - 3} more features</li>
                            )}
                          </ul>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-amber-500 font-bold text-lg">${service.price.toFixed(2)}</div>
                            {renderDuration(service.duration)}
                          </div>
                          
                          <button 
                            onClick={(e) => bookService(e, service)}
                            className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded-md text-sm"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
          
          {/* Barber Services Section */}
          {(selectedCategory === 'all' || selectedCategory === 'barber') && (
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Scissors size={24} className="text-amber-500 mr-2" />
                <span>Barber Services</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredServices
                  .filter(service => service.category === 'barber')
                  .map(service => (
                    <div 
                      key={service.id}
                      onClick={() => setViewService(service)}
                      className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-amber-500 transition-all hover:shadow-md cursor-pointer"
                    >
                      <img 
                        src={service.image} 
                        alt={service.name} 
                        className="w-full h-44 object-cover"
                      />
                      
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-white mb-1">{service.name}</h3>
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{service.description}</p>
                        
                        <div className="bg-gray-900 p-3 rounded-lg mb-4">
                          <ul className="text-sm text-gray-300">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-start mb-2">
                                <Scissors size={12} className="text-amber-500 mr-2 mt-1 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                            {service.features.length > 3 && (
                              <li className="text-amber-500 text-sm">+ {service.features.length - 3} more features</li>
                            )}
                          </ul>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-amber-500 font-bold text-lg">${service.price.toFixed(2)}</div>
                            {renderDuration(service.duration)}
                          </div>
                          
                          <button 
                            onClick={(e) => bookService(e, service)}
                            className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-2 px-4 rounded-md text-sm"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </>
      )}
        </div>
      </div>
    </div>
  );
};

export default Services;