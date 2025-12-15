import { Leaf, Heart, Users, Globe } from 'lucide-react';

export function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-20 bg-[#2D5F3F] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             <img src="https://images.unsplash.com/photo-1764756843815-ec7f1140e502?w=1200" alt="Sustainable City" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Circularity for the City</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            We are on a mission to make sustainable living accessible, affordable, and community-driven.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#2D5F3F] mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 text-lg">
              CircuCity started with a simple idea: what if we could reduce waste by making it easier to share, swap, and sell the things we no longer need?
            </p>
            <p className="text-gray-600 text-lg">
              Founded in 2023, we've grown from a small neighborhood swap group to a city-wide platform connecting thousands of eco-conscious citizens. We believe that every item extended life is a victory for our planet.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1666804830091-56ba0e22becf?w=800" alt="Circular Economy" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-[#F5F0E6] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#2D5F3F]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-[#2D5F3F]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-[#2D5F3F]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability First</h3>
              <p className="text-gray-600">Every decision we make is filtered through its environmental impact. We prioritize planet over profit.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-[#F4D35E]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#F4D35E]" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Driven</h3>
              <p className="text-gray-600">We build bridges between neighbors. Trust and transparency are the foundation of our marketplace.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Impact</h3>
              <p className="text-gray-600">Local actions lead to global change. We're creating a blueprint for circular cities everywhere.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2D5F3F]">Meet the Team</h2>
          <p className="text-gray-600 mt-4">The passionate individuals working to build a greener future.</p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg relative aspect-video md:aspect-[21/9]">
           <img src="https://images.unsplash.com/photo-1630068846062-3ffe78aa5049?w=1200" alt="Our Team" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:p-12">
             <div className="text-white">
               <h3 className="text-2xl font-bold">Diverse & Dedicated</h3>
               <p className="opacity-90 max-w-xl">Our team comes from all walks of life, united by a shared passion for sustainability and technology.</p>
             </div>
           </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#2D5F3F] py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <Heart className="w-12 h-12 mx-auto mb-6 text-[#F4D35E]" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl opacity-90 mb-8">Ready to make a difference? Start swapping, selling, or shopping sustainably today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#/products" className="px-8 py-3 bg-[#F4D35E] text-[#2D5F3F] rounded-full font-bold hover:bg-white transition-colors">
              Shop Now
            </a>
            <a href="#/become-seller" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-[#2D5F3F] transition-colors">
              Become a Seller
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
