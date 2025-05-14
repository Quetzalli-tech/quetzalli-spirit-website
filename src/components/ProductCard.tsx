
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { toast } from "sonner";

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

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = (product: Product) => {
    if (!product.isAvailable) {
      toast("Product currently out of stock", {
        description: "Please sign up for notifications when this item is back in stock.",
      });
      return;
    }
    
    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <AspectRatio ratio={4/3} className="w-full h-full">
          <img 
            src={product.imageSrc}
            alt={product.name}
            className={`w-full h-full object-cover ${product.isComingSoon ? 'blur-sm' : ''}`}
          />
          
          {product.isComingSoon && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/70 text-white px-4 py-2 rounded-md font-medium text-lg">
                Coming Soon
              </div>
            </div>
          )}
        </AspectRatio>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-quetzalli-gold text-white px-2 py-1 text-xs rounded">
              NEW
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-quetzalli-terracotta text-white px-2 py-1 text-xs rounded">
              BESTSELLER
            </span>
          )}
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs uppercase tracking-wider text-quetzalli-dark/60">
              {product.category}
            </span>
            <h3 className="text-xl font-serif mt-1 mb-2 text-quetzalli-dark">
              {product.name}
            </h3>
          </div>
          <div className="flex items-center gap-1">
            <Star size={16} fill="#D4AF37" className="text-quetzalli-gold" />
            <span className="text-sm text-quetzalli-dark/80">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <p className="text-sm text-quetzalli-dark/70 mb-4">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-medium text-quetzalli-dark">
            ${product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            disabled={!product.isAvailable || product.isComingSoon}
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${
              product.isAvailable && !product.isComingSoon
              ? "bg-quetzalli-terracotta hover:bg-quetzalli-terracotta/90 text-white"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            <ShoppingCart size={16} />
            {product.isComingSoon ? "Coming Soon" : product.isAvailable ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
