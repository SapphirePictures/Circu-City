import { User, Package, Heart, Coins, TrendingUp, Leaf, ShoppingBag, Eye, Edit2 } from 'lucide-react';
import { useCart } from './CartContext';
import { products } from './mockData';
import { DashboardLeaderboard } from './DashboardLeaderboard';

export function Dashboard() {
  const { ecoTokens } = useCart();

  const orderHistory = [
    {
      id: 'ORD-001',
      date: '2024-11-20',
      items: 3,
      total: 67.97,
      co2Saved: 6.7,
      status: 'Delivered'
    },
    {
      id: 'ORD-002',
      date: '2024-11-15',
      items: 1,
      total: 24.99,
      co2Saved: 2.5,
      status: 'Delivered'
    },
    {
      id: 'ORD-003',
      date: '2024-11-10',
      items: 2,
      total: 31.98,
      co2Saved: 4.1,
      status: 'In Transit'
    }
  ];

  const savedItems = products.slice(0, 4);

  const totalOrders = orderHistory.length;
  const totalSpent = orderHistory.reduce((sum, order) => sum + order.total, 0);
  const totalCO2Saved = orderHistory.reduce((sum, order) => sum + order.co2Saved, 0);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#2D5F3F] to-[#1a3a28] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl mb-4">My Profile</h1>
          <p className="text-xl text-gray-200">
            Track your sustainable shopping journey
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8">
          <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#2D5F3F] rounded-full flex items-center justify-center">
                <Package className="w-5 h-5 md:w-6 md:h-6 text-[#F4D35E]" />
              </div>
            </div>
            <div className="text-2xl md:text-3xl text-[#2D5F3F] mb-1">{totalOrders}</div>
            <div className="text-xs md:text-sm text-gray-600">Total Orders</div>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#2D5F3F] rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-[#F4D35E]" />
              </div>
            </div>
            <div className="text-2xl md:text-3xl text-[#2D5F3F] mb-1">${totalSpent.toFixed(2)}</div>
            <div className="text-xs md:text-sm text-gray-600">Total Spent</div>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
            <div className="text-2xl md:text-3xl text-green-700 mb-1">{totalCO2Saved.toFixed(1)}kg</div>
            <div className="text-xs md:text-sm text-gray-600">CO₂ Saved</div>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F4D35E] rounded-full flex items-center justify-center">
                <Coins className="w-5 h-5 md:w-6 md:h-6 text-[#2D5F3F]" />
              </div>
            </div>
            <div className="text-2xl md:text-3xl text-[#2D5F3F] mb-1">{ecoTokens}</div>
            <div className="text-xs md:text-sm text-gray-600">Eco Tokens</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl flex items-center gap-2">
                  <User className="w-6 h-6 text-[#2D5F3F]" />
                  Profile
                </h2>
                <button className="px-4 py-2 text-[#2D5F3F] hover:bg-[#FFFBF3] rounded-full transition-colors flex items-center gap-2">
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="flex items-center gap-6">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl mb-1">Alex Johnson</h3>
                  <p className="text-gray-600 mb-2">alex.johnson@email.com</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Leaf className="w-4 h-4 text-green-600" />
                    Eco Warrior since Nov 2024
                  </div>
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <DashboardLeaderboard />

            {/* Order History */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl flex items-center gap-2">
                  <Package className="w-6 h-6 text-[#2D5F3F]" />
                  Order History
                </h2>
                <a href="#/orders" className="text-[#2D5F3F] hover:text-[#F4D35E] text-sm">
                  View All
                </a>
              </div>
              <div className="space-y-4">
                {orderHistory.map(order => (
                  <div
                    key={order.id}
                    className="p-4 bg-[#FFFBF3] rounded-2xl hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="font-medium mb-1">{order.id}</div>
                        <div className="text-sm text-gray-600">{order.date}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {order.status}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-gray-600">{order.items} items</span>
                        <span className="text-[#2D5F3F]">${order.total}</span>
                      </div>
                      <div className="flex items-center gap-1 text-green-600">
                        <Leaf className="w-4 h-4" />
                        <span>{order.co2Saved}kg CO₂</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CO2 Impact */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
              <h2 className="text-2xl mb-4 flex items-center gap-2">
                <Leaf className="w-6 h-6 text-green-700" />
                Your Environmental Impact
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl text-green-700 mb-1">{totalCO2Saved.toFixed(1)}kg</div>
                  <div className="text-sm text-gray-700">Total CO₂ Saved</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4">
                  <div className="text-3xl text-green-700 mb-1">{Math.floor(totalCO2Saved / 0.5)}</div>
                  <div className="text-sm text-gray-700">Trees Equivalent</div>
                </div>
              </div>
              <p className="text-sm text-gray-700">
                🌍 Your sustainable choices have helped reduce carbon emissions equivalent to planting {Math.floor(totalCO2Saved / 0.5)} trees!
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-xl mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <a
                  href="#/eco-tokens"
                  className="flex items-center gap-3 p-3 bg-[#FFFBF3] rounded-2xl hover:bg-[#F4D35E]/20 transition-colors"
                >
                  <Coins className="w-5 h-5 text-[#2D5F3F]" />
                  <span>View Eco Tokens</span>
                </a>
                <a
                  href="#/products"
                  className="flex items-center gap-3 p-3 bg-[#FFFBF3] rounded-2xl hover:bg-[#F4D35E]/20 transition-colors"
                >
                  <ShoppingBag className="w-5 h-5 text-[#2D5F3F]" />
                  <span>Browse Products</span>
                </a>
                <a
                  href="#/orders"
                  className="flex items-center gap-3 p-3 bg-[#FFFBF3] rounded-2xl hover:bg-[#F4D35E]/20 transition-colors"
                >
                  <Package className="w-5 h-5 text-[#2D5F3F]" />
                  <span>Track Orders</span>
                </a>
              </div>
            </div>

            {/* Saved Items */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#2D5F3F]" />
                  Saved Items
                </h2>
                <a href="#/saved" className="text-[#2D5F3F] hover:text-[#F4D35E] text-sm">
                  View All
                </a>
              </div>
              <div className="space-y-3">
                {savedItems.map(item => (
                  <a
                    key={item.id}
                    href={`#/product/${item.id}`}
                    className="flex items-center gap-3 p-2 hover:bg-[#FFFBF3] rounded-2xl transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm truncate">{item.name}</div>
                      <div className="text-sm text-[#2D5F3F]">${item.price}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Seller Section */}
            <div className="bg-gradient-to-br from-[#2D5F3F] to-[#1a3a28] text-white rounded-3xl p-6">
              <h2 className="text-xl mb-3">Become a Seller</h2>
              <p className="text-sm text-gray-200 mb-4">
                Start selling your eco-friendly products on CircuCity
              </p>
              <a href="#/seller-dashboard" className="block text-center w-full px-4 py-2 bg-[#F4D35E] text-[#2D5F3F] rounded-full hover:bg-[#f0c840] transition-colors">
                Manage Listings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}