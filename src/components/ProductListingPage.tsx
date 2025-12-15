import { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, Leaf, SlidersHorizontal, X, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';
import { products } from './mockData';

interface Props {
  category: string | null;
}


// Custom Filter Icons from Figma
function FilterIcon() {
  return (
    <div className="w-5 h-5 relative">
      <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
        <path d="M8.33333 4.16667H2.5" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M10 15.8333H2.5" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M11.6667 2.5V5.83333" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M13.3333 14.1667V17.5" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M17.5 10H10" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M17.5 15.8333H13.3333" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M17.5 4.16667H11.6667" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M6.66667 8.33333V11.6667" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M6.66667 10H2.5" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </svg>
    </div>
  );
}

export function ProductListingPage({ category }: Props) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    categories: [] as string[],
    priceRange: [0, 100] as [number, number],
    conditions: [] as string[],
    co2Range: [0, 15] as [number, number]
  });
  const [sortBy, setSortBy] = useState('co2-saved');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Get unique categories
  const allCategories = Array.from(new Set(products.map(p => p.category)));

  // Filter products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (category) {
      const categoryName = category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      filtered = filtered.filter(p => p.category === categoryName);
    }
    
    if (filters.categories.length > 0) {
      filtered = filtered.filter(p => filters.categories.includes(p.category));
    }

    // Price filter
    filtered = filtered.filter(p => 
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Condition filter
    if (filters.conditions.length > 0) {
      filtered = filtered.filter(p => filters.conditions.includes(p.condition));
    }

    // CO2 filter
    filtered = filtered.filter(p => 
      p.co2Saved >= filters.co2Range[0] && p.co2Saved <= filters.co2Range[1]
    );

    // Sort
    switch (sortBy) {
      case 'co2-saved':
        filtered.sort((a, b) => b.co2Saved - a.co2Saved);
        break;
      case 'newest':
        // Keep original order (which is implicitly "oldest" based on array, but we'll assume newest added at end? 
        // Actually usually array order is insertion order. Let's reverse for newest first if we assume that.
        // For now, keeping as is or reversing based on ID might be better, but let's stick to previous logic to not break expectations)
        // The previous logic did nothing for 'newest', effectively using ID order.
        // Let's reverse it to show the new items I just added first? No, let's leave it.
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
    }

    return filtered;
  }, [category, filters, sortBy]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [category, filters, sortBy]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleCategory = (cat: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(cat)
        ? prev.categories.filter(c => c !== cat)
        : [...prev.categories, cat]
    }));
  };

  const toggleCondition = (condition: string) => {
    setFilters(prev => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter(c => c !== condition)
        : [...prev.conditions, condition]
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      priceRange: [0, 100],
      conditions: [],
      co2Range: [0, 15]
    });
  };

  const hasActiveFilters = filters.categories.length > 0 || 
    filters.conditions.length > 0 || 
    filters.priceRange[0] > 0 || 
    filters.priceRange[1] < 100 ||
    filters.co2Range[0] > 0 || 
    filters.co2Range[1] < 15;

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    // Always show first page, last page, current page, and neighbors
    // Simple version: just show all if < 7, otherwise show smart list
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#2D5F3F] to-[#1a3a28] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm mb-4">
            <button onClick={() => window.history.back()} className="p-1 rounded-full bg-white/10 hover:bg-white/20 mr-2 transition-colors">
              <ArrowLeft className="w-4 h-4 text-white" />
            </button>
            <a href="#/home" className="hover:text-[#F4D35E]">Home</a>
            <span>/</span>
            <span className="text-gray-300">Products</span>
            {category && (
              <>
                <span>/</span>
                <span className="text-gray-300 capitalize">{category.replace('-', ' ')}</span>
              </>
            )}
          </div>
          <h1 className="text-5xl mb-4">
            {category ? category.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ') : 'All Products'}
          </h1>
          <p className="text-xl text-gray-200">
            {filteredProducts.length} eco-conscious products found
          </p>
        </div>
      </section>

      <div className="w-full px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-80 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <FilterIcon />
                  <h2 className="text-xl font-normal text-neutral-950">
                    Filters
                  </h2>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-[#2D5F3F] hover:text-[#F4D35E]"
                  >
                    Clear All
                  </button>
                )}
              </div>

              {/* Category Filter */}
              {!category && (
                <div className="mb-8">
                  <h3 className="mb-3 text-base font-normal text-neutral-950">Category</h3>
                  <div className="space-y-2">
                    {allCategories.map(cat => (
                      <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                          filters.categories.includes(cat) ? 'bg-[#2D5F3F] border-[#2D5F3F]' : 'border-gray-300 group-hover:border-[#2D5F3F]'
                        }`}>
                          {filters.categories.includes(cat) && <div className="w-2 h-2 bg-white rounded-full" />}
                        </div>
                        <input
                          type="checkbox"
                          checked={filters.categories.includes(cat)}
                          onChange={() => toggleCategory(cat)}
                          className="hidden"
                        />
                        <span className="text-sm text-[#4a5565]">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Range (Figma Design) */}
              <div className="mb-8">
                <h3 className="mb-6 text-base font-normal text-neutral-950">Price Range</h3>
                <div className="space-y-6 px-2">
                  {/* Min Slider */}
                  <div className="relative h-[9px] w-full">
                    {/* Track */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#D1E8DA] rounded-full h-full" />
                    {/* Input */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={filters.priceRange[0]}
                      onChange={(e) => {
                        const val = Math.min(Number(e.target.value), filters.priceRange[1]);
                        setFilters(prev => ({ ...prev, priceRange: [val, prev.priceRange[1]] }));
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    {/* Thumb */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#2D5F3F] rounded-full pointer-events-none"
                      style={{ left: `calc(${filters.priceRange[0]}% - 10px)` }}
                    />
                  </div>

                  {/* Max Slider */}
                  <div className="relative h-[9px] w-full">
                    {/* Track */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#D1E8DA] rounded-full h-full" />
                    {/* Active Fill */}
                    <div 
                      className="absolute top-0 left-0 h-full bg-[#2D5F3F] rounded-full"
                      style={{ width: `${filters.priceRange[1]}%` }}
                    />
                    {/* Input */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={filters.priceRange[1]}
                      onChange={(e) => {
                        const val = Math.max(Number(e.target.value), filters.priceRange[0]);
                        setFilters(prev => ({ ...prev, priceRange: [prev.priceRange[0], val] }));
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    {/* Thumb */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#2D5F3F] rounded-full pointer-events-none"
                      style={{ left: `calc(${filters.priceRange[1]}% - 10px)` }}
                    />
                  </div>

                  {/* Inputs Display */}
                  <div className="flex items-center gap-3 mt-8">
                    {/* Min Price Box */}
                    <div className="relative h-[54px] flex-1 rounded-[2px] border border-[#b4b4b4]">
                      <div className="absolute top-[3px] left-[9px] text-[10px] text-[#847a7a]">
                        Min. Price
                      </div>
                      <div className="absolute top-[27px] left-[9px] text-[14px] text-[#4a5565]">
                        ${filters.priceRange[0]}
                      </div>
                    </div>

                    {/* Max Price Box */}
                    <div className="relative h-[54px] flex-1 rounded-[2px] border border-[#b4b4b4]">
                      <div className="absolute top-[3px] left-[11px] text-[10px] text-[#847a7a]">
                        Max. Price
                      </div>
                      <div className="absolute top-[27px] left-[11px] text-[14px] text-[#4a5565]">
                        ${filters.priceRange[1] === 100 ? '100+' : filters.priceRange[1]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Condition Filter */}
              <div className="mb-6">
                <h3 className="mb-3">Condition</h3>
                <div className="space-y-2">
                  {['new', 'like-new', 'refurbished'].map(condition => (
                    <label key={condition} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.conditions.includes(condition)}
                        onChange={() => toggleCondition(condition)}
                        className="rounded border-gray-300 text-[#2D5F3F] focus:ring-[#2D5F3F]"
                      />
                      <span className="text-sm capitalize">{condition}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* CO2 Saved Range */}
              <div className="mb-6">
                <h3 className="mb-3">CO₂ Saved (kg)</h3>
                <div className="space-y-6 px-2">
                  {/* Min Slider */}
                  <div className="relative h-[9px] w-full">
                    {/* Track */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#FDF5D3] rounded-full h-full" />
                    {/* Input */}
                    <input
                      type="range"
                      min="0"
                      max="15"
                      step="0.5"
                      value={filters.co2Range[0]}
                      onChange={(e) => {
                        const val = Math.min(Number(e.target.value), filters.co2Range[1]);
                        setFilters(prev => ({ ...prev, co2Range: [val, prev.co2Range[1]] }));
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    {/* Thumb */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#F4D35E] rounded-full pointer-events-none"
                      style={{ left: `calc(${(filters.co2Range[0] / 15) * 100}% - 10px)` }}
                    />
                  </div>

                  {/* Max Slider */}
                  <div className="relative h-[9px] w-full">
                    {/* Track */}
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#FDF5D3] rounded-full h-full" />
                    {/* Active Fill */}
                    <div 
                      className="absolute top-0 left-0 h-full bg-[#F4D35E] rounded-full"
                      style={{ width: `${(filters.co2Range[1] / 15) * 100}%` }}
                    />
                    {/* Input */}
                    <input
                      type="range"
                      min="0"
                      max="15"
                      step="0.5"
                      value={filters.co2Range[1]}
                      onChange={(e) => {
                        const val = Math.max(Number(e.target.value), filters.co2Range[0]);
                        setFilters(prev => ({ ...prev, co2Range: [prev.co2Range[0], val] }));
                      }}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    {/* Thumb */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#F4D35E] rounded-full pointer-events-none"
                      style={{ left: `calc(${(filters.co2Range[1] / 15) * 100}% - 10px)` }}
                    />
                  </div>

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{filters.co2Range[0]}kg</span>
                    <span>{filters.co2Range[1]}kg+</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Sort & Filter Toggle */}
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden px-4 py-2 bg-white rounded-full shadow-sm flex items-center gap-2"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                  {hasActiveFilters && (
                    <span className="w-2 h-2 bg-[#F4D35E] rounded-full"></span>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600">Sort by:</label>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="pl-4 pr-10 py-2.5 bg-white rounded-full shadow-sm border-none focus:outline-none focus:ring-2 focus:ring-[#2D5F3F] cursor-pointer appearance-none"
                    >
                      <option value="co2-saved">Most CO₂ Saved</option>
                      <option value="newest">Newest Listings</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>
              </div>

              {(category || hasActiveFilters) && (
                <a 
                  href="#/products"
                  onClick={clearFilters}
                  className="inline-flex items-center justify-center bg-[#2D5F3F] text-white text-[14px] font-bold rounded-[60px] px-8 py-3 hover:bg-[#1a3a28] transition-colors"
                >
                  View all products
                </a>
              )}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mb-12">
              {currentProducts.map(product => (
                <a
                  key={product.id}
                  href={`#/product/${product.id}`}
                  className="group bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-[#2D5F3F] transition-all"
                >
                  <div className="aspect-square overflow-hidden bg-gray-100 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-all hover:scale-110"
                    >
                      <Heart 
                        className={`w-5 h-5 transition-colors ${
                          isInWishlist(product.id) 
                            ? 'fill-[#ef4444] text-[#ef4444]' 
                            : 'text-gray-600 hover:text-[#ef4444]'
                        }`} 
                      />
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="absolute bottom-3 right-3 z-10 p-2 rounded-full bg-white/80 hover:bg-[#2D5F3F] text-gray-600 hover:text-white shadow-sm transition-all hover:scale-110"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {product.isEco && (
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#2D5F3F] text-white rounded-full text-xs">
                          <Leaf className="w-3 h-3" />
                          Eco
                        </div>
                      )}
                      <span className="text-xs text-gray-500 capitalize">{product.condition}</span>
                    </div>
                    <h3 className="mb-2 group-hover:text-[#2D5F3F] transition-colors line-clamp-2 h-12">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl text-[#2D5F3F]">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-600 flex items-center gap-1">
                        <Leaf className="w-4 h-4 text-green-600" />
                        {product.co2Saved}kg
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2">
                  {getPageNumbers().map((page, index) => (
                    page === '...' ? (
                      <span key={`ellipsis-${index}`} className="px-2 text-gray-400">...</span>
                    ) : (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(Number(page))}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          currentPage === page
                            ? 'bg-[#2D5F3F] text-white'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        {page}
                      </button>
                    )
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-600 mb-4">No products found matching your filters.</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-[#2D5F3F] text-white rounded-full hover:bg-[#1a3a28] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
