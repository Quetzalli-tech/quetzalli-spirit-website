
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Sliders, Filter } from "lucide-react";
import ProductCard from "@/components/ProductCard";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  imageSrc: string;
  rating: number;
  isAvailable: boolean;
  isNew: boolean;
  isBestseller: boolean;
  isComingSoon?: boolean;
}

const Store = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [sortOrder, setSortOrder] = useState<string>("featured");
  
  // Sample product data
  const products: Product[] = [
    {
      id: "blanco",
      name: "Quetzalli Blanco",
      category: "Silver",
      description: "Crisp and pure with notes of citrus and pepper. Perfect for cocktails or sipping.",
      price: 45,
      imageSrc: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      isAvailable: true,
      isNew: false,
      isBestseller: true,
      isComingSoon: true
    },
    {
      id: "reposado",
      name: "Quetzalli Reposado",
      category: "Reposado",
      description: "Crafted through a meticulous aging process, our Reposado spends two months in American oak bourbon barrels before resting for six months in French oak barrels that previously held a notable 2022 vintage from a historic wine estate.",
      price: 55,
      imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      isAvailable: true,
      isNew: false,
      isBestseller: false
    },
    {
      id: "anejo",
      name: "Quetzalli Añejo",
      category: "Añejo",
      description: "Our finest expression, aged for 18 months with rich, complex flavors.",
      price: 75,
      imageSrc: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
      rating: 5.0,
      isAvailable: true,
      isNew: false,
      isBestseller: false
    },
    {
      id: "extra-anejo",
      name: "Quetzalli Extra Añejo",
      category: "Extra Añejo",
      description: "A luxurious tequila aged for over 3 years, with notes of oak, vanilla, and dark chocolate.",
      price: 120,
      imageSrc: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      isAvailable: true,
      isNew: false,
      isBestseller: false,
      isComingSoon: true
    },
    {
      id: "limited-reserve",
      name: "Quetzalli Limited Reserve",
      category: "Limited Edition",
      description: "A special limited edition batch with unique flavor profiles and custom packaging.",
      price: 150,
      imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      rating: 5.0,
      isAvailable: false,
      isNew: true,
      isBestseller: false,
      isComingSoon: true
    }
  ];
  
  // Get unique categories
  const categories = ["All", ...new Set(products.map(product => product.category))];
  
  // Filter products based on active filters
  const filteredProducts = products.filter(product => {
    const matchesCategory = !activeCategory || activeCategory === "All" || product.category === activeCategory;
    const matchesPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesPriceRange;
  });
  
  // Sort products based on sort order
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOrder) {
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      default:
        return a.isBestseller ? -1 : b.isBestseller ? 1 : 0;
    }
  });
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <header className="pt-32 pb-20 bg-quetzalli-forest text-white">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-quetzalli-gold">
            Shop Our Collection
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Explore our premium tequilas, crafted with tradition and passion.
          </p>
        </div>
      </header>
      
      {/* Store Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          
          {/* Mobile Filters Toggle */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full bg-white py-3 px-4 border border-gray-300 rounded-md flex items-center justify-center gap-2"
            >
              <Filter size={18} />
              <span>{showFilters ? "Hide Filters" : "Show Filters"}</span>
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-serif font-bold text-quetzalli-dark">Filters</h2>
                  <Sliders size={18} className="text-quetzalli-dark" />
                </div>
                
                {/* Categories */}
                <div className="mb-8">
                  <h3 className="font-medium text-quetzalli-dark mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category === "All" ? null : category)}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                          (category === "All" && !activeCategory) || category === activeCategory
                          ? "bg-quetzalli-sand/30 text-quetzalli-terracotta"
                          : "text-quetzalli-dark hover:bg-gray-100"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div className="mb-8">
                  <h3 className="font-medium text-quetzalli-dark mb-3">Price Range</h3>
                  <div className="px-2">
                    <input
                      type="range"
                      min="0"
                      max="200"
                      step="10"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-quetzalli-sand/30 rounded-lg appearance-none cursor-pointer accent-quetzalli-terracotta"
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-quetzalli-dark/70">${priceRange[0]}</span>
                      <span className="text-quetzalli-dark/70">${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
                
                {/* Sort By */}
                <div>
                  <h3 className="font-medium text-quetzalli-dark mb-3">Sort By</h3>
                  <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-quetzalli-terracotta"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="md:w-3/4">
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-serif mb-3 text-quetzalli-dark">No Products Found</h3>
                  <p className="text-quetzalli-dark/70">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                  <button 
                    onClick={() => {
                      setActiveCategory(null);
                      setPriceRange([0, 200]);
                    }}
                    className="mt-4 underline text-quetzalli-terracotta"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Shipping Info */}
      <section className="py-16 bg-quetzalli-cream">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-quetzalli-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-quetzalli-terracotta">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2 text-quetzalli-dark">Free Shipping</h3>
              <p className="text-quetzalli-dark/70">
                On orders over $100 within the continental US.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-quetzalli-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-quetzalli-terracotta">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2 text-quetzalli-dark">Guaranteed Quality</h3>
              <p className="text-quetzalli-dark/70">
                100% authentic, certified premium tequila.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-quetzalli-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-quetzalli-terracotta">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-2 text-quetzalli-dark">Secure Packaging</h3>
              <p className="text-quetzalli-dark/70">
                Specially designed to protect your bottles during transit.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-quetzalli-dark text-white">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-quetzalli-gold">
            Join Our Tequila Club
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Subscribe to receive exclusive offers, early access to limited releases, and personalized recommendations.
          </p>
          
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md focus:outline-none text-quetzalli-dark"
            />
            <button 
              type="button"
              className="bg-quetzalli-terracotta hover:bg-quetzalli-terracotta/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Store;
