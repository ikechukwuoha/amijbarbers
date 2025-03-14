import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  // Create an infinite scrolling effect
  const scrollRef = React.useRef(null);
  const [isScrolling] = React.useState(false);
  
  React.useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;
    
    let scrollInterval;
    
    const startScrolling = () => {
      if (isScrolling) return;
      
      scrollInterval = setInterval(() => {
        if (element.scrollLeft >= element.scrollWidth / 2) {
          element.scrollLeft = 0;
        } else {
          element.scrollLeft += 1;
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
  }, [isScrolling]);
  
  const testimonials = [
    { name: "James Wilson", role: "Regular Client", text: "The barbers at AMIJ are true artists. Best haircut I've had in years, and the hot towel shave was incredible." },
    { name: "Sarah Johnson", role: "VIP Member", text: "AMIJ's spa treatments are world-class. The attention to detail and luxurious products make this place stand out." },
    { name: "Michael Thompson", role: "Loyal Customer", text: "I love the AMIJ collections. Found the perfect grooming kit that's both functional and stylish. Great quality." },
    { name: "Emily Rodriguez", role: "First-Time Visitor", text: "Exceeded all my expectations. The staff was attentive and the results were amazing. I'll definitely be back!" },
    { name: "David Chen", role: "Monthly Subscriber", text: "Their subscription service is worth every penny. Premium products delivered right to my door with personalized recommendations." }
  ];

  return (
    <div className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our <span className="text-amber-500">Clients</span> Say
        </h2>
        
        <div className="overflow-x-auto scrollbar-hide" ref={scrollRef}>
          <div className="flex gap-6 pb-4" style={{ minWidth: "150%" }}>
            {/* Original testimonials */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gray-900 p-6 border-l-4 border-amber-500 flex-shrink-0 w-full sm:w-80 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-500 fill-amber-500 mr-1" />
                  ))}
                </div>
                <p className="text-gray-300 italic min-h-[80px]">"{testimonial.text}"</p>
                <div className="mt-4 font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            ))}
            
            {/* Clone first few testimonials for infinite scroll effect */}
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div 
                key={`clone-${index}`} 
                className="bg-gray-900 p-6 border-l-4 border-amber-500 flex-shrink-0 w-full sm:w-80 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-amber-500 fill-amber-500 mr-1" />
                  ))}
                </div>
                <p className="text-gray-300 italic min-h-[80px]">"{testimonial.text}"</p>
                <div className="mt-4 font-bold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            ))}
          </div>
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

export default Testimonials;