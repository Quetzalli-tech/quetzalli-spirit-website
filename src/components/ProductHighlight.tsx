
import { Link } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  category: string;
  imageSrc: string;
  description: string;
}

interface ProductHighlightProps {
  title: string;
  subtitle: string;
  products: Product[];
  viewAllLink?: string;
}

const ProductHighlight = ({ title, subtitle, products, viewAllLink }: ProductHighlightProps) => {
  return (
    <section className="py-20 bg-quetzalli-cream">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-quetzalli-dark">
            {title}
          </h2>
          <p className="text-quetzalli-dark/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              to={`/store/${product.id}`} 
              key={product.id}
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.imageSrc} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-quetzalli-terracotta font-medium">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-serif mt-1 mb-2 text-quetzalli-dark group-hover:text-quetzalli-terracotta transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-quetzalli-dark/70">
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {viewAllLink && (
          <div className="text-center mt-12">
            <Link 
              to={viewAllLink}
              className="inline-block border-b-2 border-quetzalli-terracotta text-quetzalli-dark hover:text-quetzalli-terracotta transition-colors font-medium"
            >
              View All Products
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductHighlight;
