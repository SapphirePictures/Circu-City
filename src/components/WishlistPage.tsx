import { useWishlist } from './WishlistContext';
import { products } from './mockData';
import { useCart } from './CartContext';
import { Heart, ShoppingCart, Trash2, Leaf, ArrowRight } from 'lucide-react';

export function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const wishlistedProducts = products.filter(product => 
    wishlistItems.includes(product.id)
  );

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="w-12 h-12 text-gray-400" />
        </div>
        <h1 className="text-3xl font-bold text-neutral-900 mb-4">Your Wishlist is Empty</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Keep track of products you love by adding them to your wishlist. 
          Together we can make sustainable choices.
        </p>
        <a 
          href="#/products" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#2D5F3F] text-white rounded-full hover:bg-[#1a3a28] transition-colors"
        >
          Start Browsing <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
        My Wishlist 
        <span className="text-lg font-normal text-gray-500">({wishlistItems.length} items)</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wishlistedProducts.map(product => (
          <div 
            key={product.id}
            className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden hover:border-[#2D5F3F] hover:shadow-lg transition-all group"
          >
            {/* Image Area */}
            <div className="relative aspect-square bg-gray-50">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button 
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm"
                title="Remove from wishlist"
              >
                <Trash2 className="w-5 h-5" />
              </button>
              {product.isEco && (
                <div className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-1 bg-[#2D5F3F] text-white rounded-full text-xs">
                  <Leaf className="w-3 h-3" />
                  Eco
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="text-sm text-[#2D5F3F] font-medium mb-1">{product.category}</div>
              <a href={`#/product/${product.id}`} className="block mb-2">
                <h3 className="font-bold text-neutral-900 hover:text-[#2D5F3F] transition-colors truncate">
                  {product.name}
                </h3>
              </a>
              
              <div className="flex items-end justify-between mt-4">
                <div>
                  <div className="text-xl font-bold text-[#2D5F3F]">${product.price}</div>
                  {product.co2Saved && (
                    <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <Leaf className="w-3 h-3" />
                      Saves {product.co2Saved}kg CO₂
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="p-3 bg-[#E8F5E9] text-[#2D5F3F] rounded-full hover:bg-[#2D5F3F] hover:text-white transition-colors"
                  title="Add to Cart"
                >
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
