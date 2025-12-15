import { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  RefreshCw, 
  BarChart3, 
  Settings, 
  LogOut,
  Plus,
  Search,
  MoreHorizontal,
  Store,
  LifeBuoy,
  Filter,
  Eye,
  Truck,
  Bell,
  TrendingUp
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Label } from './ui/label';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { SwapMarketplace } from './SwapMarketplace';

export function SellerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen bg-[#F5F0E6] flex items-center justify-center p-6 text-center">
        <Card className="max-w-md w-full shadow-xl">
           <CardHeader>
             <CardTitle className="text-[#2D5F3F] text-2xl font-bold">Desktop Experience</CardTitle>
           </CardHeader>
           <CardContent className="space-y-6">
             <div className="w-20 h-20 bg-[#F4D35E]/20 rounded-full flex items-center justify-center mx-auto">
               <Store className="w-10 h-10 text-[#2D5F3F]" />
             </div>
             <div className="space-y-2">
               <p className="text-gray-600 text-lg">
                 The Seller Dashboard is currently optimized for desktop use only.
               </p>
               <p className="font-medium text-gray-800">
                 Please switch to a desktop or laptop to manage your store.
               </p>
             </div>
             <Button 
               className="bg-[#2D5F3F] text-white w-full h-12 text-lg rounded-full"
               onClick={() => window.location.hash = '#/home'}
             >
               Back to Home
             </Button>
           </CardContent>
        </Card>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'products':
        return <ProductsView />;
      case 'orders':
        return <OrdersView />;
      case 'swap':
        return <SwapMarketplace />;
      case 'analytics':
        return <AnalyticsView />;
      case 'settings':
        return <SettingsView />;
      case 'support':
        return <SupportView />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full z-10 hidden md:block">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-2 text-[#2D5F3F] font-bold text-xl">
            <div className="w-8 h-8 bg-[#2D5F3F] rounded-lg flex items-center justify-center text-white">
              S
            </div>
            Seller Hub
          </div>
        </div>
        
        <nav className="p-4 space-y-1">
          <NavButton 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')} 
            icon={LayoutDashboard} 
            label="Overview" 
          />
          <NavButton 
            active={activeTab === 'products'} 
            onClick={() => setActiveTab('products')} 
            icon={Package} 
            label="Products" 
          />
          <NavButton 
            active={activeTab === 'orders'} 
            onClick={() => setActiveTab('orders')} 
            icon={ShoppingBag} 
            label="Orders" 
          />
          <NavButton 
            active={activeTab === 'swap'} 
            onClick={() => setActiveTab('swap')} 
            icon={RefreshCw} 
            label="Swap Market" 
          />
          <NavButton 
            active={activeTab === 'analytics'} 
            onClick={() => setActiveTab('analytics')} 
            icon={BarChart3} 
            label="Analytics" 
          />
          <NavButton 
            active={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')} 
            icon={Settings} 
            label="Settings" 
          />
          <NavButton 
            active={activeTab === 'support'} 
            onClick={() => setActiveTab('support')} 
            icon={LifeBuoy} 
            label="Support" 
          />
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-100">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-600 hover:text-[#2D5F3F] hover:bg-gray-50"
            onClick={() => window.location.hash = '#/home'}
          >
            <Store className="w-4 h-4 mr-2" />
            Back to Marketplace
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 min-h-screen">
        {activeTab !== 'swap' && (
          <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 capitalize">{activeTab}</h1>
            <div className="flex items-center gap-4">
              <NotificationsMenu />
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-[#2D5F3F] font-bold">
                JD
              </div>
            </div>
          </header>
        )}
        
        <div className={activeTab === 'swap' ? '' : 'p-8'}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

interface NavButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

function NavButton({ active, onClick, icon: Icon, label }: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
        active 
          ? 'bg-[#2D5F3F] text-white shadow-md' 
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </button>
  );
}

function NotificationsMenu() {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Order #2025', message: 'You have a new order from Sarah.', time: '2 min ago', read: false },
    { id: 2, title: 'Low Stock Alert', message: 'Bamboo Toothbrush is running low.', time: '1 hour ago', read: false },
    { id: 3, title: 'Payout Processed', message: 'Your payout of $1,250 has been sent.', time: '1 day ago', read: true },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-semibold">Notifications</h3>
          {unreadCount > 0 && (
            <button 
              onClick={markAllAsRead}
              className="text-xs text-[#2D5F3F] hover:underline"
            >
              Mark all as read
            </button>
          )}
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="p-4 text-center text-sm text-gray-500">
              No notifications
            </div>
          ) : (
            notifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`p-4 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors ${
                  !notification.read ? 'bg-green-50/50' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className={`text-sm font-medium ${!notification.read ? 'text-black' : 'text-gray-700'}`}>
                    {notification.title}
                  </span>
                  <span className="text-[10px] text-gray-400 whitespace-nowrap">{notification.time}</span>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {notification.message}
                </p>
              </div>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

function DashboardOverview() {
  const revenueData = [
    { name: 'Mon', value: 1200 },
    { name: 'Tue', value: 2100 },
    { name: 'Wed', value: 1800 },
    { name: 'Thu', value: 2400 },
    { name: 'Fri', value: 3200 },
    { name: 'Sat', value: 3800 },
    { name: 'Sun', value: 4200 },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Revenue</CardTitle>
            <span className="text-green-500 text-sm font-bold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12.5%
            </span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2D5F3F]">$12,450</div>
            <p className="text-xs text-gray-500 mt-1">vs. last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Active Orders</CardTitle>
            <span className="text-green-500 text-sm font-bold flex items-center gap-1">
               +4
            </span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2D5F3F]">18</div>
            <p className="text-xs text-gray-500 mt-1">Processing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Store Views</CardTitle>
             <span className="text-green-500 text-sm font-bold flex items-center gap-1">
              +24%
            </span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2D5F3F]">1,245</div>
            <p className="text-xs text-gray-500 mt-1">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">CO₂ Saved</CardTitle>
            <span className="text-green-500 text-sm font-bold flex items-center gap-1">
              +8%
            </span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#2D5F3F]">845 kg</div>
            <p className="text-xs text-gray-500 mt-1">Lifetime impact</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart - Takes 2 cols */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>Daily revenue performance for the current week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} tickFormatter={(value) => `$${value}`} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    cursor={{ stroke: '#2D5F3F', strokeWidth: 1, strokeDasharray: '3 3' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#2D5F3F" 
                    strokeWidth={3} 
                    dot={{ fill: '#2D5F3F', strokeWidth: 2, r: 4, stroke: '#fff' }} 
                    activeDot={{ r: 6 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Products / Action Items - Takes 1 col */}
        <Card>
          <CardHeader>
             <CardTitle>Top Selling</CardTitle>
             <CardDescription>Most popular items this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
               {[
                 { name: 'Organic Cotton T-Shirt', sales: 124, trend: 'up' },
                 { name: 'Bamboo Toothbrush', sales: 85, trend: 'up' },
                 { name: 'Recycled Tote Bag', sales: 54, trend: 'down' },
                 { name: 'Metal Straw Set', sales: 42, trend: 'up' },
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex flex-col">
                      <span className="font-medium text-sm truncate max-w-[120px]">{item.name}</span>
                      <span className="text-xs text-gray-500">{item.sales} sold</span>
                    </div>
                    <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                      item.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {item.trend === 'up' ? 'Trending' : 'Low'}
                    </div>
                 </div>
               ))}
            </div>
            <Button variant="outline" className="w-full mt-4 text-xs">View All Products</Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders - Full width or keeping it as is */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Orders</CardTitle>
          <Button variant="ghost" className="text-sm text-[#2D5F3F]">View All Orders</Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center border">
                     <Package className="w-5 h-5 text-gray-400" />
                   </div>
                   <div>
                     <div className="font-medium">Order #{2023 + i}</div>
                     <div className="text-sm text-gray-500">2 items • $145.00</div>
                   </div>
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="hidden sm:block text-sm text-gray-500">
                     Oct {24 - i}, 2023
                   </div>
                   <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                     Paid
                   </span>
                   <Button variant="ghost" size="sm">Details</Button>
                 </div>
               </div>
             ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ProductsView() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search products..." className="pl-10" />
        </div>
        <Button className="bg-[#2D5F3F] text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 font-medium text-gray-500">Product</th>
                <th className="text-left p-4 font-medium text-gray-500">Status</th>
                <th className="text-left p-4 font-medium text-gray-500">Price</th>
                <th className="text-left p-4 font-medium text-gray-500">Stock</th>
                <th className="text-right p-4 font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Organic Cotton T-Shirt', status: 'Active', price: '$29.00', stock: 124 },
                { name: 'Bamboo Toothbrush Set', status: 'Active', price: '$12.50', stock: 45 },
                { name: 'Recycled Denim Jeans', status: 'Draft', price: '$89.00', stock: 0 },
              ].map((product, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="p-4 font-medium">{product.name}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      product.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="p-4">{product.price}</td>
                  <td className="p-4">{product.stock}</td>
                  <td className="p-4 text-right">
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

function OrdersView() {
  const [filter, setFilter] = useState('All');

  const orders = [
    { id: '#2024', customer: 'Alice Johnson', date: '2023-10-24', total: '$145.00', status: 'Pending', items: 2 },
    { id: '#2023', customer: 'Bob Smith', date: '2023-10-23', total: '$89.00', status: 'Shipped', items: 1 },
    { id: '#2022', customer: 'Charlie Brown', date: '2023-10-22', total: '$210.50', status: 'Delivered', items: 3 },
    { id: '#2021', customer: 'Diana Prince', date: '2023-10-21', total: '$35.00', status: 'Cancelled', items: 1 },
    { id: '#2020', customer: 'Evan Wright', date: '2023-10-20', total: '$120.00', status: 'Processing', items: 2 },
  ];

  const filteredOrders = filter === 'All' ? orders : orders.filter(order => order.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex gap-2 flex-wrap">
          {['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === status 
                  ? 'bg-[#2D5F3F] text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Search orders..." className="pl-10" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 font-medium text-gray-500">Order ID</th>
                <th className="text-left p-4 font-medium text-gray-500">Customer</th>
                <th className="text-left p-4 font-medium text-gray-500">Date</th>
                <th className="text-left p-4 font-medium text-gray-500">Total</th>
                <th className="text-left p-4 font-medium text-gray-500">Status</th>
                <th className="text-right p-4 font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="p-4 font-medium text-[#2D5F3F]">{order.id}</td>
                  <td className="p-4">
                    <div className="font-medium">{order.customer}</div>
                    <div className="text-xs text-gray-500">{order.items} items</div>
                  </td>
                  <td className="p-4 text-gray-600">{order.date}</td>
                  <td className="p-4 font-medium">{order.total}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                      order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' :
                      order.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-[#2D5F3F]">
                        <Truck className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredOrders.length === 0 && (
             <div className="p-8 text-center text-gray-500">
               No orders found.
             </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function AnalyticsView() {
  const data = [
    { name: 'Mon', sales: 4000 },
    { name: 'Tue', sales: 3000 },
    { name: 'Wed', sales: 2000 },
    { name: 'Thu', sales: 2780 },
    { name: 'Fri', sales: 1890 },
    { name: 'Sat', sales: 2390 },
    { name: 'Sun', sales: 3490 },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Weekly Sales</CardTitle>
          <CardDescription>Your revenue over the last 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#2D5F3F" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Organic Cotton T-Shirt</span>
                <span className="font-bold">$1,240</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Bamboo Toothbrush</span>
                <span className="font-bold">$850</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Recycled Tote Bag</span>
                <span className="font-bold">$620</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customer Demographics</CardTitle>
          </CardHeader>
          <CardContent>
             <p className="text-gray-500 text-sm">Most of your customers are from:</p>
             <div className="mt-4 space-y-2">
               <div className="flex justify-between"><span>New York</span><span>24%</span></div>
               <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                 <div className="bg-[#F4D35E] h-full" style={{width: '24%'}}></div>
               </div>
               
               <div className="flex justify-between mt-2"><span>California</span><span>18%</span></div>
               <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                 <div className="bg-[#F4D35E] h-full" style={{width: '18%'}}></div>
               </div>
             </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function SettingsView() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Store Profile</CardTitle>
              <CardDescription>
                Customize how your store appears to customers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="w-24 h-24 border-2 border-gray-100">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="text-2xl font-bold bg-[#2D5F3F] text-white">S</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline">Upload Logo</Button>
                  <p className="text-xs text-gray-500">
                    Recommended size: 400x400px. JPG or PNG.
                  </p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="storeName">Store Name</Label>
                  <Input id="storeName" defaultValue="My Eco Store" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="bio">Bio / Description</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Tell your story..." 
                    className="min-h-[120px]"
                    defaultValue="We sell sustainable, ethically sourced products for a greener lifestyle."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" placeholder="https://" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="Portland, OR" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button className="bg-[#2D5F3F] text-white">Save Profile</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Details</CardTitle>
              <CardDescription>Update your personal information and security.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" defaultValue="seller@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <Button className="bg-[#2D5F3F] text-white w-fit">Update Account</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Choose what you want to be notified about.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">New Orders</Label>
                  <p className="text-sm text-gray-500">Receive an email when you get a new order.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Low Stock</Label>
                  <p className="text-sm text-gray-500">Alert me when products are running low.</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Marketing Tips</Label>
                  <p className="text-sm text-gray-500">Receive tips on how to grow your store.</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment & Payouts</CardTitle>
              <CardDescription>Manage your bank account and tax information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg bg-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white rounded border flex items-center justify-center">
                     <span className="font-bold text-[#2D5F3F]">$</span>
                   </div>
                   <div>
                     <p className="font-medium">Chase Bank **** 1234</p>
                     <p className="text-xs text-gray-500">Primary Payout Method</p>
                   </div>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
              <Button variant="outline" className="w-full">Add Payout Method</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function SupportView() {
  return (
    <div className="max-w-3xl space-y-8">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-2xl font-bold text-[#2D5F3F]">How can we help you?</h2>
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search help articles..." className="pl-10" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="w-12 h-12 bg-[#F4D35E]/20 rounded-full flex items-center justify-center mx-auto">
              <Package className="w-6 h-6 text-[#2D5F3F]" />
            </div>
            <h3 className="font-semibold">Shipping Guide</h3>
            <p className="text-sm text-gray-500">Learn how to package and ship your eco-friendly products.</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="w-12 h-12 bg-[#F4D35E]/20 rounded-full flex items-center justify-center mx-auto">
              <BarChart3 className="w-6 h-6 text-[#2D5F3F]" />
            </div>
            <h3 className="font-semibold">Grow Your Sales</h3>
            <p className="text-sm text-gray-500">Tips and tricks to reach more conscious consumers.</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="pt-6 text-center space-y-4">
            <div className="w-12 h-12 bg-[#F4D35E]/20 rounded-full flex items-center justify-center mx-auto">
              <Settings className="w-6 h-6 text-[#2D5F3F]" />
            </div>
            <h3 className="font-semibold">Account Setup</h3>
            <p className="text-sm text-gray-500">Manage your payment methods and store details.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            "How do I process a refund?",
            "What are the selling fees?",
            "How does the carbon tracking work?",
            "Can I sell internationally?"
          ].map((q, i) => (
            <div key={i} className="border-b last:border-0 pb-4 last:pb-0">
              <button className="flex w-full justify-between items-center text-left font-medium hover:text-[#2D5F3F]">
                {q}
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="bg-[#2D5F3F] text-white p-8 rounded-xl text-center space-y-4">
        <h3 className="text-xl font-bold">Still need help?</h3>
        <p className="opacity-90">Our support team is available 24/7 to assist you.</p>
        <Button className="bg-[#F4D35E] text-[#2D5F3F] hover:bg-white font-bold">
          Contact Support
        </Button>
      </div>
    </div>
  );
}
