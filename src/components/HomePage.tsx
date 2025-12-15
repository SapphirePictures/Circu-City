import { ArrowRight, Leaf, Recycle, Shield, Package, Star, Apple, Droplet, Home, Zap, ShoppingBag, ShoppingCart, ShieldCheck, Truck, Shirt, Heart, Store, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { products, testimonials } from './mockData';
import heroImage from 'figma:asset/c68a9560a1cd9a11e115d187128be51f8c48eda1.png';
import clothesStackImage from 'figma:asset/569966ebfaeb8ecf6e0b2ae42146883affa91117.png';
import soapImage from 'figma:asset/d5fe9b44453dfb4f6e02859d974c656817cf7202.png';
import sustainableWomanImage from 'figma:asset/a9cf1580a3245cded974de49bdcefb23577ff087.png';
import { useWishlist } from './WishlistContext';
import { useCart } from './CartContext';
import { GlobeAnimated } from './GlobeAnimated';

export function HomePage() {
  const [co2Counter, setCo2Counter] = useState(127543);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCo2Counter(prev => prev + Math.floor(Math.random() * 3));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const featuredProducts = products.slice(0, 4);
  const categories = [
    { name: 'Organic Food', icon: Apple, slug: 'organic-food' },
    { name: 'Sustainable Fashion', icon: Shirt, slug: 'sustainable-fashion' },
    { name: 'Skincare', icon: Droplet, slug: 'skincare' },
    { name: 'Eco Home', icon: Home, slug: 'eco-home' },
    { name: 'Green Gadgets', icon: Zap, slug: 'green-gadgets' },
    { name: 'Recycled Items', icon: Recycle, slug: 'recycled-items' }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-[#F5F0E6] pt-10 pb-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
              <ShoppingBag className="w-4 h-4 text-[#2D5F3F]" />
              <span className="text-sm font-medium text-gray-800">100% Eco-Friendly & Sustainable</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
              Your Destination for <span className="text-[#2D5F3F]">Sustainable Living</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              From organic foods to upcycled fashion, find everything you need to reduce your footprint without compromising on quality.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-12">
              <a href="#/products" className="px-8 py-4 bg-[#2D5F3F] text-white rounded-full flex items-center gap-2 hover:bg-[#1a3a28] transition-all shadow-lg hover:shadow-xl">
                Shop Now <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#/products" className="text-gray-700 underline decoration-gray-300 underline-offset-4 hover:text-[#2D5F3F] transition-colors">
                Explore Categories
              </a>
            </div>
            
            {/* Trust/Ratings */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {/* Avatars */}
                {[
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
                  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100'
                ].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                     <img src={src} alt="Customer" className="w-full h-full object-cover" />
                  </div>
                ))}
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-[#F4D35E] flex items-center justify-center text-sm font-bold text-[#2D5F3F]">+</div>
              </div>
              <div>
                <div className="font-bold text-lg text-neutral-900">4.8 Ratings+</div>
                <div className="text-sm text-gray-600">Trusted by 75k+ Customers</div>
              </div>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="relative">
             {/* Main Image */}
             <img src={sustainableWomanImage} alt="Woman wearing sustainable clothes" className="w-full h-auto object-contain relative z-10" />
             
             {/* Floating Badges */}
             <div className="absolute top-1/3 right-0 bg-white p-3 rounded-xl shadow-lg z-20 flex items-center gap-3 animate-bounce-slow mx-[172px] my-[43px]">
                <div className="p-2 bg-[#2D5F3F] rounded-full">
                   <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                   <div className="font-bold text-sm text-neutral-900">Secure Payment</div>
                </div>
             </div>
             
              <div className="absolute bottom-24 left-16 bg-white p-3 rounded-xl shadow-lg z-20 flex items-center gap-3 animate-bounce-slow delay-150 mx-[73px] my-[168px]">
                <div className="p-2 bg-[#2D5F3F] rounded-full">
                   <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                   <div className="font-bold text-sm text-neutral-900">Eco-Shipping</div>
                </div>
             </div>
             
             {/* Decorative Sparkles */}
             <div className="absolute top-10 right-20 text-[#F4D35E] animate-pulse">
               <Zap className="w-8 h-8 fill-current" />
             </div>
             <div className="absolute bottom-20 right-10 text-[#F4D35E] animate-pulse delay-75">
               <Star className="w-6 h-6 fill-current" />
             </div>
          </div>
        </div>
      </section>

      {/* CO₂ Counter Section */}
      <section className="relative overflow-hidden py-16 px-4 bg-white">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] w-[600px] h-[600px] opacity-10 pointer-events-none">
          <GlobeAnimated className="w-full h-full text-[#2D5F3F]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F4D35E]/20 rounded-full mb-4">
            <Leaf className="w-5 h-5 text-[#2D5F3F]" />
            <span className="text-sm text-[#2D5F3F]">Live Impact</span>
          </div>
          <h2 className="text-4xl mb-4">Global CO₂ Saved</h2>
          <div className="text-6xl md:text-8xl text-[#2D5F3F] mb-4 tabular-nums">
            {co2Counter.toLocaleString()} kg
          </div>
          <p className="text-gray-600">
            Together, our community has made a real environmental impact
          </p>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="py-16 px-4 bg-[#F5F0E6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12">Why Choose CircuCity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-[#2D5F3F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-[#F4D35E]" />
              </div>
              <h3 className="text-2xl mb-3">100% Organic</h3>
              <p className="text-gray-600">
                All products are certified organic, free from harmful chemicals and pesticides.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-[#2D5F3F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Recycle className="w-8 h-8 text-[#F4D35E]" />
              </div>
              <h3 className="text-2xl mb-3">Recyclable</h3>
              <p className="text-gray-600">
                Sustainable packaging that can be recycled or composted completely.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-[#2D5F3F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#F4D35E]" />
              </div>
              <h3 className="text-2xl mb-3">Eco-Conscious</h3>
              <p className="text-gray-600">
                Every purchase helps reduce carbon footprint and supports sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Swap Market CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#2D5F3F] to-[#1a3a28] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F4D35E]/20 backdrop-blur-sm rounded-full mb-6">
                <RefreshCw className="w-5 h-5 text-[#F4D35E]" />
                <span className="text-sm text-[#F4D35E]">New Feature</span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">
                Discover Our Swap Market
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Join the circular economy! Trade items you no longer need for things you want. Reduce waste, save money, and connect with our eco-conscious community.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl text-[#F4D35E] mb-2">1,247</div>
                  <div className="text-sm text-gray-300">Active Items</div>
                </div>
                <div>
                  <div className="text-3xl text-[#F4D35E] mb-2">892</div>
                  <div className="text-sm text-gray-300">Swaps Made</div>
                </div>
                <div>
                  <div className="text-3xl text-[#F4D35E] mb-2">3.2k</div>
                  <div className="text-sm text-gray-300">Members</div>
                </div>
              </div>
              <a 
                href="#/swap" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F4D35E] text-[#2D5F3F] rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Swap Market
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            {/* Right Side - Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
                <div className="w-12 h-12 bg-[#F4D35E]/20 rounded-full flex items-center justify-center mb-4">
                  <RefreshCw className="w-6 h-6 text-[#F4D35E]" />
                </div>
                <h3 className="text-lg mb-2">Trade Items</h3>
                <p className="text-sm text-gray-300">Swap pre-loved items with community members</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
                <div className="w-12 h-12 bg-[#F4D35E]/20 rounded-full flex items-center justify-center mb-4">
                  <Recycle className="w-6 h-6 text-[#F4D35E]" />
                </div>
                <h3 className="text-lg mb-2">Reduce Waste</h3>
                <p className="text-sm text-gray-300">Give items a second life and reduce landfill</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
                <div className="w-12 h-12 bg-[#F4D35E]/20 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-[#F4D35E]" />
                </div>
                <h3 className="text-lg mb-2">Earn Tokens</h3>
                <p className="text-sm text-gray-300">Get EcoTokens for every successful swap</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all">
                <div className="w-12 h-12 bg-[#F4D35E]/20 rounded-full flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-[#F4D35E]" />
                </div>
                <h3 className="text-lg mb-2">Build Community</h3>
                <p className="text-sm text-gray-300">Connect with like-minded eco-warriors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl">Featured Products</h2>
            <a href="#/products" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#2D5F3F] text-white hover:bg-[#1a3b25] transition-colors text-[14px]">
              <span className="font-bold text-lg text-[13px] p-[0px] whitespace-nowrap">View All</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <div
                key={product.id}
                className="group relative bg-[#F5F0E6] rounded-xl overflow-hidden border-2 border-transparent hover:border-[#2D5F3F] transition-all"
              >
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
                <a
                  href={`#/product/${product.id}`}
                  className="block h-full"
                >
                  <div className="aspect-square overflow-hidden bg-white relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
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
                    {product.isEco && (
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#2D5F3F] text-white rounded-full text-xs mb-2">
                        <Leaf className="w-3 h-3" />
                        Eco-Friendly
                      </div>
                    )}
                    <h3 className="text-lg mb-2 group-hover:text-[#2D5F3F] transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl text-[#2D5F3F]">
                        ${product.price}
                      </span>
                      <span className="text-sm text-gray-600 flex items-center gap-1">
                        <Leaf className="w-4 h-4 text-green-600" />
                        {product.co2Saved}kg CO₂
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Sustainable Fashion */}
            <div className="bg-[#E3E3E3] rounded-[30px] p-8 md:p-12 flex items-center relative overflow-hidden min-h-[450px]">
              <div className="relative z-10 max-w-[60%] flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="bg-[#F4D35E] text-[#2D5F3F] font-bold px-4 py-2 rounded-[80px] inline-flex items-center justify-center text-[15px] w-fit">
                    Flat 20% Discount
                  </div>
                  <h3 className="text-4xl md:text-[48px] font-black text-[#474747] leading-tight">
                    Sustainable Fashion
                  </h3>
                </div>
                
                <div className="flex flex-col gap-8">
                  <p className="text-[#848484] text-[18px] leading-[28px] max-w-md">
                    Ethically made clothing using organic cotton and recycled materials.
                  </p>
                  <a href="#/products/sustainable-fashion" className="inline-flex items-center justify-center gap-2 w-[276px] h-[67px] bg-[#2D5F3F] text-white rounded-[60px] font-bold text-[18px] hover:bg-[#1a3a28] transition-all hover:shadow-lg">
                    Shop Now 
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="absolute right-[-100px] top-[-50px] bottom-[-50px] w-[60%] pointer-events-none">
                 <img 
                   src={clothesStackImage} 
                   alt="Sustainable Fashion" 
                   className="h-full w-full object-contain object-center scale-125" 
                 />
              </div>
            </div>

            {/* Card 2: Eco Home */}
            {/* Card 2: Organic Soap */}
            <div className="bg-[#F4D35E] rounded-[30px] p-8 md:p-12 flex items-center relative overflow-hidden min-h-[450px]">
               <div className="relative z-10 max-w-[60%] flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="bg-[#2D5F3F] text-[#F4D35E] font-bold px-4 py-2 rounded-[80px] inline-flex items-center justify-center text-[15px] w-fit">
                    Flat 20% Discount
                  </div>
                  <h3 className="text-4xl md:text-[48px] font-black text-[#2D5F3F] leading-tight">
                    Organic Soap
                  </h3>
                </div>
                
                <div className="flex flex-col gap-8">
                  <p className="text-[#2D5F3F] text-[18px] leading-[28px] max-w-md">
                    Zero-waste essentials for a cleaner, smoother healthy skin
                  </p>
                  <a href="#/products/organic-soap" className="inline-flex items-center justify-center gap-2 w-[276px] h-[67px] bg-[#2D5F3F] text-white rounded-[60px] font-bold text-[18px] hover:bg-[#1a3a28] transition-all hover:shadow-lg">
                    Shop Now <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
               <div className="absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none flex items-center justify-center z-0">
                 <img 
                   src={soapImage} 
                   alt="Organic Soap" 
                   className="h-full w-full object-contain object-center scale-90" 
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-[#F5F0E6]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12">Shop By Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map(category => {
              const IconComponent = category.icon;
              return (
                <a
                  key={category.slug}
                  href={`#/products/${category.slug}`}
                  className="bg-white p-8 rounded-xl text-center border-2 border-transparent hover:border-[#2D5F3F] hover:scale-105 transition-all"
                >
                  <IconComponent className="w-12 h-12 mx-auto mb-3 text-[#2D5F3F]" />
                  <h3 className="text-lg">{category.name}</h3>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-12">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className="bg-[#F5F0E6] p-8 rounded-3xl shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F4D35E] text-[#F4D35E]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Seller Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#2D5F3F] rounded-[30px] p-8 md:p-12 relative overflow-hidden">
             <div className="relative z-10 max-w-2xl text-white">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                  <Store className="w-4 h-4 text-[#F4D35E]" />
                  <span className="text-sm font-medium text-[#F4D35E]">For Business</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Partner with CircuCity</h2>
                <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                  Join our marketplace of eco-conscious sellers. Reach customers who care about the planet and grow your sustainable business.
                </p>
                <a href="#/become-seller" className="inline-flex items-center gap-2 bg-[#F4D35E] text-[#2D5F3F] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Become a Seller <ArrowRight className="w-5 h-5"/>
                </a>
             </div>
             <Store className="absolute -right-12 -bottom-12 text-white/5 w-96 h-96 transform rotate-12" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#2D5F3F] to-[#1a3a28] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Package className="w-16 h-16 mx-auto mb-6 text-[#F4D35E]" />
          <h2 className="text-4xl mb-4">Start Your Sustainable Journey Today</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of conscious consumers making a difference with every purchase.
          </p>
          <a
            href="#/products"
            className="px-8 py-4 bg-[#F4D35E] text-[#2D5F3F] rounded-full inline-flex items-center gap-2 hover:bg-[#f0c840] transition-all shadow-lg"
          >
            Browse Products
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}