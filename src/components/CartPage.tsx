import { Trash2, Plus, Minus, ShoppingBag, Leaf, ArrowRight } from 'lucide-react';
import { useCart } from './CartContext';

export function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalCO2Saved } = useCart();

  if (items.length === 0) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-gray-300" />
          <h2 className="text-3xl mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">
            Start shopping for eco-friendly products to make a difference!
          </p>
          <a
            href="#/products"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#2D5F3F] text-white rounded-full hover:bg-[#1a3a28] transition-colors"
          >
            Browse Products
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#2D5F3F] to-[#1a3a28] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl mb-4">Shopping Cart</h1>
          <p className="text-xl text-gray-200">
            {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 shadow-sm flex flex-col sm:flex-row gap-6"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-32 h-32 object-cover rounded-2xl"
                />

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-xl mb-2">{item.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Leaf className="w-4 h-4 text-green-600" />
                    <span>{item.co2Saved}kg CO₂ saved per item</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl text-[#2D5F3F]">${item.price}</div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border-2 border-gray-200 rounded-full">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-gray-100 rounded-l-full transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-1">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-gray-100 rounded-r-full transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-2xl mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xl">
                    <span>Total</span>
                    <span className="text-[#2D5F3F]">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Eco Savings */}
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-700">Total CO₂ Saved</div>
                    <div className="text-2xl text-green-700">{totalCO2Saved.toFixed(1)} kg</div>
                  </div>
                </div>
                <p className="text-xs text-gray-600">
                  By buying these products, you're making a positive environmental impact! 🌍
                </p>
              </div>

              <a
                href="#/checkout"
                className="w-full px-8 py-3 bg-[#2D5F3F] text-white rounded-full hover:bg-[#1a3a28] transition-colors flex items-center justify-center gap-2"
              >
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={() => window.location.hash = '/products'}
                className="w-full px-8 py-3 mt-3 border-2 border-[#2D5F3F] text-[#2D5F3F] rounded-full hover:bg-[#F5F0E6] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}