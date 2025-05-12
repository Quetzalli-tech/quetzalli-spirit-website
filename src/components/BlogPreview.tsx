
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageSrc: string;
  date: string;
  category: string;
}

interface BlogPreviewProps {
  posts: BlogPost[];
}

const BlogPreview = ({ posts }: BlogPreviewProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-quetzalli-dark">
            From Our Journal
          </h2>
          <p className="text-quetzalli-dark/70 max-w-2xl mx-auto">
            Explore stories, recipes and insights from the world of premium tequila.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              to={`/blog/${post.id}`}
              key={post.id}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageSrc}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2 text-sm text-quetzalli-dark/60">
                    <span>{post.date}</span>
                    <span className="bg-quetzalli-sand/30 px-2 py-1 rounded-md">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif mb-2 text-quetzalli-dark group-hover:text-quetzalli-terracotta transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-quetzalli-dark/70">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 inline-block border-b border-quetzalli-terracotta text-quetzalli-dark/80 group-hover:text-quetzalli-terracotta transition-colors text-sm">
                    Read More
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/blog"
            className="inline-block border-b-2 border-quetzalli-terracotta text-quetzalli-dark hover:text-quetzalli-terracotta transition-colors font-medium"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
