import { useState } from 'react';
import { CreditCard, MapPin, Package, Leaf, ShieldCheck, CheckCircle } from 'lucide-react';
import { useCart } from './CartContext';

export function CheckoutPage() {
  const { items, totalPrice, totalCO2Saved, clearCart, addEcoTokens } = useCart();
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  if (items.length === 0 && step === 'form') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl mb-4">Your cart is empty</h2>
        <a href="#/products" className="text-[#2D5F3F] hover:text-[#F4D35E]">
          Continue shopping
        </a>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Calculate eco tokens earned (10 tokens per dollar)
    const tokensEarned = Math.floor(totalPrice * 10);
    addEcoTokens(tokensEarned);
    setStep('success');
    setTimeout(() => {
      clearCart();
    }, 100);
  };

  if (step === 'success') {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl mb-4">Order Successful!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for your eco-conscious purchase
          </p>
          
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Leaf className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-sm text-gray-700">You Saved</div>
                <div className="text-3xl text-green-700">{totalCO2Saved.toFixed(1)} kg CO₂</div>
              </div>
            </div>
            <p className="text-gray-700">
              Your sustainable choice is making a real difference for our planet! 🌍
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#/dashboard"
              className="px-8 py-3 bg-[#2D5F3F] text-white rounded-full hover:bg-[#1a3a28] transition-colors"
            >
              View Order Status
            </a>
            <a
              href="#/products"
              className="px-8 py-3 border-2 border-[#2D5F3F] text-[#2D5F3F] rounded-full hover:bg-[#F5F0E6] transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#2D5F3F] to-[#1a3a28] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl mb-4">Checkout</h1>
          <p className="text-xl text-gray-200">
            Complete your eco-friendly purchase
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-[#2D5F3F]" />
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#2D5F3F] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Information */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <Package className="w-6 h-6 text-[#2D5F3F]" />
                Shipping Address
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#2D5F3F] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#2D5F3F] transition-colors"
                    placeholder="123 Main Street"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#2D5F3F] transition-colors"
                      placeholder="San Francisco"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">ZIP Code</label>
                    <input
                      type="text"
                      required
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#2D5F3F] transition-colors"
                      placeholder="94102"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2">Country</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#2D5F3F] transition-colors"
                    placeholder="United States"
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-[#2D5F3F]" />
                Payment Method
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Card Number</label>
                  <input
                    type="text"
                    required
                    value={formData.cardNumber}
                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#2D5F3F] transition-colors"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">Expiry Date</label>
                    <input
                      type="text"
                      required
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#2D5F3F] transition-colors"
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">CVV</label>
                    <input
                      type="text"
                      required
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#2D5F3F] transition-colors"
                      placeholder="123"
                      maxLength={4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-24">
              <h2 className="text-2xl mb-6">Order Summary</h2>
              
              {/* Items */}
              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm truncate">{item.name}</div>
                      <div className="text-sm text-gray-600">Qty: {item.quantity}</div>
                      <div className="text-sm text-[#2D5F3F]">${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-xl pt-3 border-t">
                  <span>Total</span>
                  <span className="text-[#2D5F3F]">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Eco Impact */}
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Leaf className="w-8 h-8 text-green-600" />
                  <div>
                    <div className="text-xs text-gray-600">By buying this, you are saving</div>
                    <div className="text-2xl text-green-700">{totalCO2Saved.toFixed(1)} kg CO₂</div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-[#2D5F3F] text-white rounded-full hover:bg-[#1a3a28] transition-colors flex items-center justify-center gap-2 mb-4"
              >
                <ShieldCheck className="w-5 h-5" />
                Complete Order
              </button>

              <div className="text-xs text-center text-gray-600">
                🔒 Secure checkout powered by eco-friendly practices
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}