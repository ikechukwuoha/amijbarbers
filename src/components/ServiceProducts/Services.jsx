import React from 'react';
import { Clock, Calendar, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const scrollRef = React.useRef(null);
  
  const scrollLeft = () => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollBy({ left: -330, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollBy({ left: 330, behavior: 'smooth' });
  };
  
  const services = [
    { 
      title: "Premium Haircut", 
      description: "Precision cutting & styling with our master barbers", 
      price: "$45+", 
      duration: "45 min",
      rating: 5,
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      title: "Deluxe Facial", 
      description: "Deep cleansing & rejuvenation therapy for your skin", 
      price: "$85+", 
      duration: "60 min",
      rating: 5,
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      title: "Hot Towel Shave", 
      description: "Traditional straight razor service with aromatherapy", 
      price: "$35+", 
      duration: "30 min",
      rating: 4,
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      title: "Signature Massage", 
      description: "Full body relaxation therapy with premium oils", 
      price: "$95+", 
      duration: "75 min",
      rating: 5,
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { 
      title: "Scalp Treatment", 
      description: "Revitalizing hair & scalp care with organic products", 
      price: "$65+", 
      duration: "45 min",
      rating: 4,
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  
  const ServiceCard = ({ service }) => (
    <div 
      className="bg-black border border-gray-800 hover:border-amber-500 transition-all duration-300 flex-shrink-0 w-[320px] transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20"
    >
      <div className="h-40 bg-gray-900 flex items-center justify-center overflow-hidden relative">
        <img 
          src={service.image} 
          alt={service.title}
          className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="inline-block bg-amber-500 text-black font-bold px-3 py-1 text-sm">
            {service.price}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-bold text-white">{service.title}</h3>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className={i < service.rating ? "text-amber-500 fill-amber-500" : "text-gray-600"} />
            ))}
          </div>
        </div>
        
        <p className="text-gray-400 text-sm mb-4">{service.description}</p>
        
        <div className="flex items-center justify-between border-t border-gray-800 pt-4">
          <div className="flex items-center">
            <Clock size={16} className="text-amber-500" />
            <span className="ml-2 text-gray-300 text-sm">{service.duration}</span>
          </div>
          <button className="bg-black border border-amber-500 hover:bg-amber-500 text-amber-500 hover:text-black font-bold py-2 px-4 text-sm transition-colors duration-300 flex items-center space-x-1">
            <Calendar size={14} />
            <span>BOOK NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-500 text-sm uppercase tracking-wider font-semibold">Experience Excellence</span>
          <h2 className="text-4xl font-bold mt-2 text-white">
            Our <span className="text-amber-500">Premium</span> Services
          </h2>
          <div className="h-px w-24 bg-amber-500 mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
            <div className="flex gap-6 pb-6 pl-4 pr-4">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
          
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-amber-500 text-white hover:text-black p-2 rounded-full shadow-lg z-10 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-amber-500 text-white hover:text-black p-2 rounded-full shadow-lg z-10 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-amber-500 text-black px-8 py-3 font-bold hover:bg-yellow-600 transition-colors inline-flex items-center space-x-2">
            <span>VIEW ALL SERVICES</span>
          </button>
        </div>
        
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Services;