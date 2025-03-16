import React, { useState } from 'react';
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const Products = () => {
  const scrollRef = React.useRef(null);
  const [isAutoScrolling] = useState(false); // Disabled auto-scroll by default
  
  React.useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    
    let scrollInterval;
    
    const startScrolling = () => {
      if (!isAutoScrolling) return;
      
      scrollInterval = setInterval(() => {
        if (element.scrollLeft >= element.scrollWidth / 2) {
          element.scrollLeft = 0;
        } else {
          element.scrollLeft += 0.2; // Very slow scroll if enabled
        }
      }, 30);
    };
    
    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };
    
    startScrolling();
    
    element.addEventListener('mouseenter', stopScrolling);
    element.addEventListener('mouseleave', startScrolling);
    
    return () => {
      stopScrolling();
      element?.removeEventListener('mouseenter', stopScrolling);
      element?.removeEventListener('mouseleave', startScrolling);
    };
  }, [isAutoScrolling]);
  
  // Manual scroll functions
  const scrollLeft = () => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollBy({ left: -300, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    const element = scrollRef.current;
    if (!element) return;
    element.scrollBy({ left: 300, behavior: 'smooth' });
  };
  
  const products = [
    { 
      title: "Premium Razor Kit", 
      price: "$129.99", 
      rating: 5, 
      reviews: 42,
      image: "https://plus.unsplash.com/premium_photo-1661542350224-8e3f095ce053?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
    },
    { 
      title: "Luxury Hair Pomade", 
      price: "$34.99", 
      rating: 4, 
      reviews: 28,
      image: "https://plus.unsplash.com/premium_photo-1661542350224-8e3f095ce053?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
    },
    { 
      title: "Facial Treatment Set", 
      price: "$89.99", 
      rating: 5, 
      reviews: 56,
      image: "https://plus.unsplash.com/premium_photo-1661542350224-8e3f095ce053?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
    },
    { 
      title: "Body Oil Collection", 
      price: "$59.99", 
      rating: 4, 
      reviews: 19,
      image: "https://plus.unsplash.com/premium_photo-1661542350224-8e3f095ce053?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
    },
    { 
      title: "Signature Cologne", 
      price: "$79.99", 
      rating: 5, 
      reviews: 34,
      image: "https://plus.unsplash.com/premium_photo-1661542350224-8e3f095ce053?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
    },
    { 
      title: "Beard Grooming Kit", 
      price: "$49.99", 
      rating: 4, 
      reviews: 23,
      image: "https://plus.unsplash.com/premium_photo-1661542350224-8e3f095ce053?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image URL
    }
  ];

  // ProductCard component to ensure consistency
  const ProductCard = ({ product }) => (
    <div 
      className="bg-black border border-gray-800 hover:border-amber-500 transition-all duration-300 flex-shrink-0 w-[280px] transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20"
    >
      <div className="h-64 bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="w-full h-full relative flex items-center justify-center">
          <img 
            src={product.image} // Use the image URL from the product object
            alt={product.title}
            className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500" 
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button className="bg-amber-500 text-black rounded-full p-3 transform translate-y-4 hover:translate-y-0 transition-all duration-300">
              <ShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-white text-lg">{product.title}</h3>
        <div className="flex items-center mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className={i < product.rating ? "text-amber-500 fill-amber-500" : "text-gray-500"} />
            ))}
          </div>
          <span className="text-xs text-gray-400 ml-2">({product.reviews})</span>
        </div>
        <div className="mt-3">
          <span className="text-amber-500 font-bold text-lg">{product.price}</span>
        </div>
        <button className="mt-4 w-full bg-black border border-amber-500 text-amber-500 py-2 font-medium hover:bg-amber-500 hover:text-black transition-all duration-300 flex items-center justify-center space-x-2">
          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-500 text-sm uppercase tracking-wider font-semibold">Exclusive Selection</span>
          <h2 className="text-4xl font-bold mt-2">
            Our <span className="text-amber-500">Premium</span> Collections
          </h2>
          <div className="h-px w-24 bg-amber-500 mx-auto mt-4"></div>
        </div>
        
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
            <div className="flex gap-6 pb-6 pl-4 pr-4">
              {products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
          
          {/* Manual navigation arrows */}
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
            <span>VIEW ALL PRODUCTS</span>
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

export default Products;