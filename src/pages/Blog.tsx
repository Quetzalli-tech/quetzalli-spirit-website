
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  imageSrc: string;
  date: string;
  author: string;
  category: string;
}

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Sample blog data
  const blogPosts: BlogPost[] = [
    {
      id: "summer-cocktail-recipes",
      title: "Summer Tequila Cocktail Recipes",
      excerpt: "Refresh your summer with these delicious tequila cocktail recipes that are perfect for any occasion.",
      imageSrc: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      date: "June 15, 2025",
      author: "Maria Gonzalez",
      category: "Recipes"
    },
    {
      id: "agave-farming",
      title: "The Art of Sustainable Agave Farming",
      excerpt: "Explore how we sustainably grow and harvest the blue agave plants that are the heart of our tequila.",
      imageSrc: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=800&q=80",
      date: "May 28, 2025",
      author: "Carlos Rodriguez",
      category: "Production"
    },
    {
      id: "tequila-history",
      title: "The Rich Cultural History of Tequila",
      excerpt: "Discover the cultural significance and evolving traditions behind Mexico's most iconic spirit.",
      imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      date: "April 10, 2025",
      author: "Elena Martinez",
      category: "Heritage"
    },
    {
      id: "perfect-margarita",
      title: "Secrets to the Perfect Margarita",
      excerpt: "Master the art of creating the perfect margarita with these expert tips and variations.",
      imageSrc: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=800&q=80",
      date: "March 5, 2025",
      author: "Miguel Hernandez",
      category: "Recipes"
    },
    {
      id: "tequila-tasting-guide",
      title: "A Beginner's Guide to Tequila Tasting",
      excerpt: "Learn how to properly taste and appreciate the complex flavors and aromas in premium tequila.",
      imageSrc: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
      date: "February 18, 2025",
      author: "Sophia Torres",
      category: "Education"
    },
    {
      id: "pairing-tequila-food",
      title: "Pairing Tequila with Traditional Mexican Cuisine",
      excerpt: "Discover the perfect food pairings to enhance your tequila tasting experience.",
      imageSrc: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      date: "January 22, 2025",
      author: "Javier Lopez",
      category: "Cuisine"
    }
  ];
  
  const categories = ["all", ...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Header */}
      <header className="pt-32 pb-20 bg-quetzalli-sand/30">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-quetzalli-dark">
            The Quetzalli Journal
          </h1>
          <p className="text-xl text-quetzalli-dark/80 max-w-3xl mx-auto">
            Insights, stories, and expertise from the world of premium tequila.
          </p>
        </div>
      </header>
      
      {/* Search and Filter */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-quetzalli-terracotta"
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === category
                    ? "bg-quetzalli-terracotta text-white"
                    : "bg-gray-100 text-quetzalli-dark hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 md:px-0">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link 
                  to={`/blog/${post.id}`}
                  key={post.id}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.imageSrc}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                      <div className="flex justify-between items-center mb-2 text-sm text-quetzalli-dark/60">
                        <span>{post.date}</span>
                        <span className="bg-quetzalli-sand/30 px-2 py-1 rounded-md">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-serif mb-3 text-quetzalli-dark group-hover:text-quetzalli-terracotta transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-quetzalli-dark/70 mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center mt-4">
                        <div className="w-8 h-8 bg-quetzalli-sand/50 rounded-full flex items-center justify-center">
                          <span className="font-serif text-sm">{post.author.charAt(0)}</span>
                        </div>
                        <span className="ml-2 text-sm text-quetzalli-dark/80">
                          {post.author}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-serif mb-3 text-quetzalli-dark">No Results Found</h3>
              <p className="text-quetzalli-dark/70">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button 
                onClick={() => {setSearchQuery(""); setActiveCategory("all");}}
                className="mt-4 underline text-quetzalli-terracotta"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-quetzalli-forest text-white">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4 text-quetzalli-gold">
              Stay Connected
            </h2>
            <p className="text-white/80 mb-8">
              Subscribe to our newsletter for exclusive content, tequila insights, and special offers.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
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
            <p className="text-white/60 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
