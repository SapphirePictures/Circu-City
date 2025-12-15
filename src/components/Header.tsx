import { ShoppingCart, User, Search, Leaf, Menu, X, Heart, Globe, ChevronDown, Coins, RefreshCw } from 'lucide-react';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';
import logoImage from 'figma:asset/4186b2907563ef0d0093d9d9f2b10f9f7779919a.png';
import { useState } from 'react';

export function Header() {
  const { totalItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [productsOpen, setProductsOpen] = useState(false);

  const categories = ['Organic Food', 'Skincare', 'Eco Home', 'Green Gadgets', 'Recycled Items'];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[rgb(243,141,39)] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4" />
            <span className="text-sm">Free shipping on eco-friendly orders over $50</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm">
            <a href="#/swap" className="hover:text-[#F4D35E] transition-colors">
              Swap Market
            </a>
            <a href="#/eco-tokens" className="hover:text-[#F4D35E] transition-colors">
              Eco Tokens
            </a>
            <a href="#/dashboard" className="hover:text-[#F4D35E] transition-colors">
              Track Impact
            </a>
            <a href="#/become-seller" className="hover:text-[#F4D35E] transition-colors">
              Become a Seller
            </a>
            <a href="#/leaderboard" className="hover:text-[#F4D35E] transition-colors">
              Leaderboard
            </a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#F4D35E] transition-colors pl-4 border-l border-white/20">
              <Globe className="w-4 h-4" />
              <span>US / EN</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#/home" className="block">
            <img src={logoImage} alt="CircuCity" className="h-12 w-auto object-contain" />
          </a>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search eco-friendly products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#2D5F3F] transition-colors"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a href="#/dashboard" className="hidden md:flex items-center gap-2 hover:text-[#2D5F3F] transition-colors">
              <User className="w-6 h-6" />
            </a>
            <a href="#/wishlist" className="hidden md:flex items-center gap-2 hover:text-[#2D5F3F] transition-colors relative">
              <Heart className="w-6 h-6" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#F4D35E] text-[#2D5F3F] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {wishlistItems.length}
                </span>
              )}
            </a>
            <a href="#/cart" className="relative hover:text-[#2D5F3F] transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#F4D35E] text-[#2D5F3F] rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </a>
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search eco-friendly products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#2D5F3F] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`bg-[#2D5F3F] border-t border-[#2D5F3F] ${mobileMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-2 md:gap-8 py-3">
            <li>
              <a
                href="#/home"
                className={`block py-2 md:py-0 transition-colors ${
                   (typeof window !== 'undefined' && (window.location.hash === '#/home' || window.location.hash === ''))
                    ? 'text-[#F4D35E] font-medium' 
                    : 'text-white hover:text-[#F4D35E]'
                }`}
              >
                Home
              </a>
            </li>
            <li className="md:hidden">
              <a href="#/dashboard" className="flex items-center gap-2 py-2 text-white hover:text-[#F4D35E]">
                <User className="w-4 h-4" />
                My Profile
              </a>
            </li>
            <li className="md:hidden">
              <a href="#/wishlist" className="flex items-center gap-2 py-2 text-white hover:text-[#F4D35E]">
                <Heart className="w-4 h-4" />
                Wishlist
              </a>
            </li>
            <li className="md:hidden">
              <a href="#/eco-tokens" className="flex items-center gap-2 py-2 text-white hover:text-[#F4D35E]">
                <Coins className="w-4 h-4" />
                Eco Tokens
              </a>
            </li>
            <li className="md:hidden">
              <a href="#/swap" className="flex items-center gap-2 py-2 text-white hover:text-[#F4D35E]">
                <RefreshCw className="w-4 h-4" />
                Swap Market
              </a>
            </li>
            {/* Desktop Categories */}
            {[...categories, 'Sustainable Fashion'].map((category) => {
              const href = `#/products/${category.toLowerCase().replace(/\s+/g, '-')}`;
              const isActive = typeof window !== 'undefined' && window.location.hash.startsWith(href);
              
              return (
                <li key={category} className="hidden md:block">
                  <a
                    href={href}
                    className={`transition-colors ${
                      isActive ? 'text-[#F4D35E] font-medium' : 'text-white hover:text-[#F4D35E]'
                    }`}
                  >
                    {category}
                  </a>
                </li>
              );
            })}

            {/* Mobile Categories Dropdown */}
            <li className="md:hidden w-full border-t border-white/10 mt-2 pt-2">
               <button 
                 onClick={() => setProductsOpen(!productsOpen)}
                 className="flex items-center justify-between w-full py-2 text-white hover:text-[#F4D35E]"
               >
                 <span className="font-medium">All Products</span>
                 <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
               </button>
               
               {productsOpen && (
                 <div className="pl-4 pb-2 space-y-2 ml-1 mt-1">
                   <div className="text-xs font-semibold text-[#F4D35E]/80 uppercase tracking-wider mb-2 mt-2">
                     Shop Categories
                   </div>
                   {[...categories, 'Sustainable Fashion'].map((category) => (
                     <a
                       key={category}
                       href={`#/products/${category.toLowerCase().replace(/\s+/g, '-')}`}
                       className="block py-1.5 text-sm text-gray-100 hover:text-white border-l-2 border-transparent hover:border-[#F4D35E] pl-2 transition-colors"
                       onClick={() => setMobileMenuOpen(false)}
                     >
                       {category}
                     </a>
                   ))}
                 </div>
               )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}