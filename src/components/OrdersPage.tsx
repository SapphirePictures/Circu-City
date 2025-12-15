import { Package, Truck, CheckCircle, Clock, MapPin, ChevronRight, Search } from 'lucide-react';
import { useState } from 'react';

export function OrdersPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'completed'>('all');

  const orders = [
    {
      id: 'ORD-003',
      date: 'Nov 10, 2024',
      total: 31.98,
      items: 2,
      status: 'In Transit',
      estimatedDelivery: 'Nov 15, 2024',
      trackingStep: 2, // 0: Placed, 1: Processing, 2: Shipped, 3: Delivered
      products: [
        { name: 'Bamboo Toothbrush Set', quantity: 1, price: 12.99, image: 'https://images.unsplash.com/photo-1589365252845-092198ba5334?w=200' },
        { name: 'Reusable Cotton Pads', quantity: 1, price: 18.99, image: 'https://images.unsplash.com/photo-1588959570943-b686e76e5c4c?w=200' }
      ]
    },
    {
      id: 'ORD-001',
      date: 'Nov 20, 2024',
      total: 67.97,
      items: 3,
      status: 'Delivered',
      deliveredDate: 'Nov 22, 2024',
      trackingStep: 3,
      products: [
        { name: 'Organic Cotton T-Shirt', quantity: 2, price: 24.99, image: 'https://images.unsplash.com/photo-1675239514439-1c128b0cffcd?w=200' },
        { name: 'Eco Water Bottle', quantity: 1, price: 18.00, image: 'https://images.unsplash.com/photo-1623684194967-48075185a58c?w=200' }
      ]
    },
    {
      id: 'ORD-002',
      date: 'Nov 15, 2024',
      total: 24.99,
      items: 1,
      status: 'Delivered',
      deliveredDate: 'Nov 18, 2024',
      trackingStep: 3,
      products: [
        { name: 'Recycled Notebook', quantity: 1, price: 24.99, image: 'https://images.unsplash.com/photo-1625533617580-3977f2651fc0?w=200' }
      ]
    }
  ];

  const steps = ['Order Placed', 'Processing', 'Shipped', 'Delivered'];

  const filteredOrders = activeTab === 'all' 
    ? orders 
    : activeTab === 'active' 
      ? orders.filter(o => o.status !== 'Delivered' && o.status !== 'Cancelled')
      : orders.filter(o => o.status === 'Delivered');

  return (
    <div className="min-h-screen bg-[#F5F0E6] pb-12">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-[#2D5F3F] mb-2">Track Orders</h1>
          <p className="text-gray-600">View and track your current and past orders</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'all'
                ? 'bg-[#2D5F3F] text-white'
                : 'bg-white text-gray-600 hover:bg-[#FFFBF3]'
            }`}
          >
            All Orders
          </button>
          <button
            onClick={() => setActiveTab('active')}
            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'active'
                ? 'bg-[#2D5F3F] text-white'
                : 'bg-white text-gray-600 hover:bg-[#FFFBF3]'
            }`}
          >
            Active Orders
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'completed'
                ? 'bg-[#2D5F3F] text-white'
                : 'bg-white text-gray-600 hover:bg-[#FFFBF3]'
            }`}
          >
            Completed
          </button>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-3xl p-6 shadow-sm">
              {/* Order Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xl font-bold text-[#2D5F3F]">Order #{order.id}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Placed on {order.date} • Total: ${order.total}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                    View Invoice
                  </button>
                  <button className="px-4 py-2 bg-[#F4D35E] text-[#2D5F3F] rounded-full text-sm font-bold hover:bg-[#f0c840] transition-colors">
                    Track Detail
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8 px-2">
                <div className="relative">
                  <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-100 rounded-full -translate-y-1/2">
                    <div 
                      className="h-full bg-[#2D5F3F] rounded-full transition-all duration-500"
                      style={{ width: `${(order.trackingStep / (steps.length - 1)) * 100}%` }}
                    />
                  </div>
                  <div className="relative flex justify-between">
                    {steps.map((step, index) => {
                      const isCompleted = index <= order.trackingStep;
                      const isCurrent = index === order.trackingStep;
                      
                      return (
                        <div key={step} className="flex flex-col items-center gap-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors ${
                            isCompleted ? 'bg-[#2D5F3F] text-white' : 'bg-gray-100 text-gray-400'
                          }`}>
                            {index === 0 && <Clock className="w-4 h-4" />}
                            {index === 1 && <Package className="w-4 h-4" />}
                            {index === 2 && <Truck className="w-4 h-4" />}
                            {index === 3 && <CheckCircle className="w-4 h-4" />}
                          </div>
                          <span className={`text-xs font-medium ${
                            isCurrent ? 'text-[#2D5F3F]' : 'text-gray-500'
                          }`}>
                            {step}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    {order.status === 'Delivered' 
                      ? `Delivered on ${order.deliveredDate}`
                      : `Expected delivery by ${order.estimatedDelivery}`
                    }
                  </p>
                </div>
              </div>

              {/* Products */}
              <div className="bg-[#FFFBF3] rounded-2xl p-4">
                <h3 className="text-sm font-bold text-gray-700 mb-3">Items</h3>
                <div className="space-y-3">
                  {order.products.map((product, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-20 h-20 rounded-xl object-cover bg-gray-100"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium">{product.name}</div>
                        <div className="text-sm text-gray-500">Qty: {product.quantity}</div>
                      </div>
                      <div className="text-sm font-medium text-[#2D5F3F]">
                        ${product.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {filteredOrders.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No orders found</h3>
              <p className="text-gray-500 mb-6">Looks like you haven't placed any orders in this category yet.</p>
              <a href="#/products" className="inline-flex items-center gap-2 px-6 py-3 bg-[#2D5F3F] text-white rounded-full hover:bg-[#1a3a28] transition-colors">
                Start Shopping
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
