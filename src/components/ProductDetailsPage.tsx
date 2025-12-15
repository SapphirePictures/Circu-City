import { useState } from 'react';
import { ArrowLeft, Leaf, ShoppingCart, Star, Shield, Truck, RefreshCcw, ChevronRight } from 'lucide-react';
import { products } from './mockData';
import { useCart } from './CartContext';
import { toast } from 'sonner';

interface Props {
  productId: string | null;
}

type TabType = 'details' | 'ingredients' | 'shipping' | 'sustainability';

export function ProductDetailsPage({ productId }: Props) {
  const [activeTab, setActiveTab] = useState<TabType>('details');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl mb-4">Product not found</h1>
        <a href="#/products" className="text-[#2D5F3F] hover:text-[#F4D35E]">
          Browse all products
        </a>
      </div>
    );
  }

  const recommendedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        co2Saved: product.co2Saved
      });
    }
    toast.success(`Added ${quantity} ${product.name}${quantity > 1 ? 's' : ''} to cart!`);
  };

  return (
    <div className="w-full">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <button onClick={() => window.history.back()} className="p-1 rounded-full hover:bg-gray-200 mr-2 transition-colors">
            <ArrowLeft className="w-4 h-4 text-[#2D5F3F]" />
          </button>
          <a href="#/home" className="hover:text-[#2D5F3F]">Home</a>
          <ChevronRight className="w-4 h-4" />
          <a href="#/products" className="hover:text-[#2D5F3F]">Products</a>
          <ChevronRight className="w-4 h-4" />
          <a href={`#/products/${product.category.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#2D5F3F]">
            {product.category}
          </a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#2D5F3F]">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            {product.isEco && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2D5F3F] text-white rounded-full mb-4">
                <Leaf className="w-4 h-4" />
                Eco-Conscious Certified
              </div>
            )}
            
            <h1 className="text-4xl mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#F4D35E] text-[#F4D35E]'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviews.length} reviews)
              </span>
            </div>

            <div className="text-4xl text-[#2D5F3F] mb-6">${product.price}</div>

            <p className="text-gray-700 mb-6">{product.description}</p>

            {/* CO2 Saved */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">CO₂ Saved per Product</div>
                  <div className="text-2xl text-green-700">{product.co2Saved} kg</div>
                </div>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border-2 border-gray-200 rounded-full">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100 rounded-l-full transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100 rounded-r-full transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 px-8 py-3 bg-[#2D5F3F] text-white rounded-full hover:bg-[#1a3a28] transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <Shield className="w-6 h-6 mx-auto mb-2 text-[#2D5F3F]" />
                <div className="text-sm text-gray-600">Certified Organic</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <Truck className="w-6 h-6 mx-auto mb-2 text-[#2D5F3F]" />
                <div className="text-sm text-gray-600">Free Shipping</div>
              </div>
              <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                <RefreshCcw className="w-6 h-6 mx-auto mb-2 text-[#2D5F3F]" />
                <div className="text-sm text-gray-600">Easy Returns</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200 mb-8">
            <div className="flex gap-8">
              {(['details', 'ingredients', 'shipping', 'sustainability'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-b-2 border-[#2D5F3F] text-[#2D5F3F]'
                      : 'text-gray-600 hover:text-[#2D5F3F]'
                  }`}
                >
                  {tab === 'ingredients' ? 'Ingredients/Materials' : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            {activeTab === 'details' && (
              <div>
                <h3 className="text-2xl mb-4">Product Details</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Category: {product.category}</li>
                  <li>• Condition: <span className="capitalize">{product.condition}</span></li>
                  <li>• Rating: {product.rating}/5.0</li>
                  <li>• CO₂ Saved: {product.co2Saved} kg per product</li>
                </ul>
              </div>
            )}
            
            {activeTab === 'ingredients' && (
              <div>
                <h3 className="text-2xl mb-4">
                  {product.ingredients ? 'Ingredients' : 'Materials'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {(product.ingredients || product.materials || []).map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Leaf className="w-4 h-4 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {activeTab === 'shipping' && (
              <div>
                <h3 className="text-2xl mb-4">Shipping Information</h3>
                <div className="space-y-4 text-gray-700">
                  <p>• Free shipping on orders over $50</p>
                  <p>• Standard delivery: 3-5 business days</p>
                  <p>• Express delivery: 1-2 business days (additional cost)</p>
                  <p>• Carbon-neutral shipping with all orders</p>
                  <p>• Recyclable and compostable packaging</p>
                </div>
              </div>
            )}
            
            {activeTab === 'sustainability' && (
              <div>
                <h3 className="text-2xl mb-4">Sustainability Impact</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                    <h4 className="text-lg mb-2 text-green-900">Why This Product is Eco-Friendly</h4>
                    <p className="text-gray-700">{product.sustainability}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 rounded-2xl p-4">
                      <div className="text-3xl text-[#2D5F3F] mb-2">{product.co2Saved}kg</div>
                      <div className="text-sm text-gray-600">CO₂ Emissions Saved</div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl p-4">
                      <div className="text-3xl text-[#2D5F3F] mb-2">100%</div>
                      <div className="text-sm text-gray-600">Sustainable Materials</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reviews */}
        {product.reviews.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl mb-6">Customer Reviews</h2>
            <div className="space-y-4">
              {product.reviews.map(review => (
                <div key={review.id} className="bg-white rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-[#F4D35E] text-[#F4D35E]'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{review.date}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{review.comment}</p>
                  <div className="text-sm text-gray-600">- {review.author}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommended Products */}
        {recommendedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map(recProduct => (
                <a
                  key={recProduct.id}
                  href={`#/product/${recProduct.id}`}
                  className="group bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-[#2D5F3F] transition-all"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={recProduct.image}
                      alt={recProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    {recProduct.isEco && (
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#2D5F3F] text-white rounded-full text-xs mb-2">
                        <Leaf className="w-3 h-3" />
                        Eco
                      </div>
                    )}
                    <h3 className="mb-2 group-hover:text-[#2D5F3F] transition-colors line-clamp-2">
                      {recProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl text-[#2D5F3F]">
                        ${recProduct.price}
                      </span>
                      <span className="text-sm text-gray-600 flex items-center gap-1">
                        <Leaf className="w-4 h-4 text-green-600" />
                        {recProduct.co2Saved}kg
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}