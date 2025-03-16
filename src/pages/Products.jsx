import React, { useState } from 'react';
import { ShoppingCart, Star, ArrowLeft } from 'lucide-react';

const Products = () => {
  const [viewProduct, setViewProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Product data
  const products = [
    // Styling Products
    { 
      id: 1, 
      name: "Premium Styling Pomade", 
      description: "Strong hold, high shine pomade", 
      price: 24.99, 
      category: "styling",
      rating: 4.8,
      image: "/api/placeholder/300/300",
      longDescription: "Our premium styling pomade provides all-day hold with a classic high shine finish. Made with quality ingredients, it washes out easily while giving you the control you need for any hairstyle."
    },
    { 
      id: 2, 
      name: "Hair Texture Clay", 
      description: "Matte finish with medium hold", 
      price: 22.99, 
      category: "styling",
      rating: 4.6,
      image: "/api/placeholder/300/300",
      longDescription: "Achieve natural-looking texture and definition with our hair texture clay. The medium hold formula with matte finish adds volume and structure while remaining reworkable throughout the day."
    },
    { 
      id: 3, 
      name: "Sea Salt Spray", 
      description: "Texturizing spray for beach waves", 
      price: 18.99, 
      category: "styling",
      rating: 4.7,
      image: "/api/placeholder/300/300",
      longDescription: "Create effortless beach waves and natural texture with our sea salt spray. This lightweight formula adds volume and definition without weighing hair down, perfect for that just-left-the-beach look."
    },
    { 
      id: 4, 
      name: "Grooming Tonic", 
      description: "Lightweight styling prep solution", 
      price: 19.99, 
      category: "styling",
      rating: 4.5,
      image: "/api/placeholder/300/300",
      longDescription: "Our grooming tonic is the perfect prep solution for any style. This lightweight formula adds natural shine and manageability while providing a foundation for other styling products."
    },
    
    // Beard Products
    { 
      id: 5, 
      name: "Beard Oil Elixir", 
      description: "Nourishing blend of natural oils", 
      price: 19.99, 
      category: "beard",
      rating: 4.7,
      image: "/api/placeholder/300/300",
      longDescription: "This luxurious beard oil combines argan, jojoba and vitamin E oils to soften, condition and eliminate beard itch. The subtle masculine scent keeps you feeling fresh throughout the day."
    },
    { 
      id: 6, 
      name: "Beard Balm", 
      description: "Conditioning balm for perfect styling", 
      price: 18.99, 
      category: "beard",
      rating: 4.5,
      image: "/api/placeholder/300/300",
      longDescription: "This all-in-one beard balm conditions, styles and tames even the most unruly beards. The unique blend of shea butter and essential oils keeps your beard looking great while promoting healthy growth."
    },
    { 
      id: 7, 
      name: "Beard Wash", 
      description: "Gentle cleanser for facial hair", 
      price: 16.99, 
      category: "beard",
      rating: 4.8,
      image: "/api/placeholder/300/300",
      longDescription: "Our specialized beard wash gently cleanses facial hair without stripping natural oils. This pH-balanced formula removes dirt and buildup while leaving your beard soft, manageable and fresh."
    },
    { 
      id: 8, 
      name: "Beard Comb & Brush Set", 
      description: "Premium grooming tools", 
      price: 29.99, 
      category: "beard",
      rating: 4.9,
      image: "/api/placeholder/300/300",
      longDescription: "This premium set includes a handcrafted wooden comb and boar bristle brush designed specifically for facial hair. These essential tools help distribute natural oils, detangle, and style your beard to perfection."
    },
    
    // Shaving Products
    { 
      id: 9, 
      name: "Sandalwood Shaving Cream", 
      description: "Rich lather with sandalwood scent", 
      price: 17.99, 
      category: "shaving",
      rating: 4.9,
      image: "/api/placeholder/300/300",
      longDescription: "Experience the perfect shave with our premium sandalwood shaving cream. Creates a rich, protective lather that softens hair and provides excellent razor glide for a smooth, comfortable shave."
    },
    { 
      id: 10, 
      name: "Premium Safety Razor", 
      description: "Classic design with modern precision", 
      price: 42.99, 
      category: "shaving",
      rating: 4.9,
      image: "/api/placeholder/300/300",
      longDescription: "Our premium safety razor combines classic design with modern engineering. The weighted handle provides perfect balance and control, while the precision-engineered head delivers a close, comfortable shave every time."
    },
    { 
      id: 11, 
      name: "Aftershave Balm", 
      description: "Soothing post-shave treatment", 
      price: 21.99, 
      category: "shaving",
      rating: 4.7,
      image: "/api/placeholder/300/300",
      longDescription: "Calm and restore your skin after shaving with our alcohol-free aftershave balm. This soothing formula reduces irritation and razor burn while moisturizing and protecting freshly shaved skin."
    },
    { 
      id: 12, 
      name: "Shaving Brush", 
      description: "Handcrafted badger hair brush", 
      price: 34.99, 
      category: "shaving",
      rating: 4.8,
      image: "/api/placeholder/300/300",
      longDescription: "Our handcrafted shaving brush features premium badger hair bristles that create a rich lather while gently exfoliating the skin. The ergonomic handle provides perfect control for the traditional wet shaving experience."
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'styling', name: 'Styling' },
    { id: 'beard', name: 'Beard' },
    { id: 'shaving', name: 'Shaving' }
  ];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Function to handle adding products to cart
  const addToCart = (e, product) => {
    e.stopPropagation();
    alert(`${product.name} added to cart!`);
  };

  // Simplified star rating
  const renderRating = (rating) => (
    <div className="flex items-center">
      <Star size={14} className="text-amber-500 fill-amber-500" /> 
      <span className="ml-1 text-sm text-gray-400">{rating}</span>
    </div>
  );

  return (
    <div className="bg-black text-white">
      <div className="pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-10">
            Our <span className="text-amber-500">Premium</span> Products
          </h1>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
            Discover our carefully curated collection of grooming essentials. Each product is selected for quality and performance to help you look and feel your best.
          </p>
          
          <div className="max-w-6xl mx-auto">
            {viewProduct ? (
              // Product Detail View - Optimized
              <div className="bg-black border border-gray-800 p-4 rounded">
                <button 
                  onClick={() => setViewProduct(null)}
                  className="text-amber-500 hover:text-amber-400 mb-4 flex items-center"
                >
                  <ArrowLeft size={16} className="mr-1" /> Back
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img 
                    src={viewProduct.image} 
                    alt={viewProduct.name} 
                    className="w-full border border-gray-800 rounded"
                  />
                  
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">{viewProduct.name}</h2>
                    {renderRating(viewProduct.rating)}
                    
                    <p className="text-gray-400 text-sm mt-3 mb-4">{viewProduct.longDescription}</p>
                    
                    <div className="text-xl font-bold text-amber-500 mb-4">${viewProduct.price.toFixed(2)}</div>
                    
                    <button 
                      onClick={(e) => addToCart(e, viewProduct)}
                      className="flex items-center bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-sm text-sm"
                    >
                      <ShoppingCart size={16} className="mr-1" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Product Listing View - Optimized
              <>
                {/* Category Pills - More compact */}
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
                
                {/* Products Grid - More compact */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {filteredProducts.map(product => (
                    <div 
                      key={product.id}
                      onClick={() => setViewProduct(product)}
                      className="bg-black border border-gray-800 overflow-hidden hover:border-amber-500 transition-all hover:shadow-md cursor-pointer"
                    >
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-40 object-cover"
                      />
                      
                      <div className="p-3">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-sm font-medium text-white">{product.name}</h3>
                          <span className="text-amber-500 font-bold text-sm">${product.price.toFixed(2)}</span>
                        </div>
                        
                        <p className="text-gray-400 text-xs mb-2 line-clamp-2">{product.description}</p>
                        
                        <div className="flex items-center justify-between">
                          {renderRating(product.rating)}
                          
                          <button 
                            onClick={(e) => addToCart(e, product)}
                            className="bg-amber-500 hover:bg-amber-600 text-black font-medium py-1 px-2 rounded-sm text-xs"
                          >
                            <ShoppingCart size={12} />
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
    </div>
  );
};

export default Products;