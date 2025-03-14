import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    {
      image: 'https://media.istockphoto.com/id/1973193559/photo/smiling-barber-trimming-a-customers-hair-in-a-busy-barber-shop.jpg?s=1024x1024&w=is&k=20&c=rfeOdrAuUaNETJvtmd-xWyBz3gMZZXuDeS0YFZOEuvc=',
      title: "Premium Barbering",
      description: "Precision cuts and styling by master barbers in a luxurious setting."
    },
    {
      image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: "Spa Treatments",
      description: "Rejuvenating facials and body treatments for ultimate relaxation."
    },
    {
      image: 'https://media.istockphoto.com/id/1797031057/photo/barbershop-concept-hairdressing-tools-on-dark-background-top-view-space-for-text-hair.jpg?s=1024x1024&w=is&k=20&c=Am1nzToaES3ddYuw7wAGKVSp-DtQlDgQY19wojN6skk=',
      title: "Exclusive Products",
      description: "High-end grooming products and accessories for the discerning gentleman."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10"></div>
      </div>
      
      {/* Carousel Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 z-30 bg-black/30 text-white p-2 rounded-full hover:bg-amber-500 hover:text-black transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 z-30 bg-black/30 text-white p-2 rounded-full hover:bg-amber-500 hover:text-black transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-amber-500" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="transform transition-transform duration-500 ease-out">
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight animate-fade-in-up">
            AMIJ <span className="text-amber-500">LUXURY</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-300 max-w-lg animate-fade-in-up animation-delay-200">
            {slides[currentSlide].title}
          </p>
          <p className="mt-2 text-base md:text-lg text-gray-400 max-w-xl animate-fade-in-up animation-delay-300">
            {slides[currentSlide].description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
            <button className="bg-amber-500 text-black px-8 py-3 font-bold hover:bg-yellow-600 transition-colors transform hover:scale-105">
              OUR SERVICES
            </button>
            <button className="border border-yellow-500 text-amber-500 px-8 py-3 font-bold hover:bg-yellow-500 hover:text-black transition-colors transform hover:scale-105">
              SHOP PRODUCTS
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-amber-500/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border border-amber-500/30 rounded-full animate-ping"></div>
    </div>
  );
};

export default HeroSection;