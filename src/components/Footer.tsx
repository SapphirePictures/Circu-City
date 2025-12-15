import { Leaf, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import logoImage from 'figma:asset/3d266ddac5207361275104272b787412fd298f35.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D5F3F] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logoImage} alt="CircuCity" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-sm text-gray-300">
              Your trusted marketplace for eco-conscious and organic products that help reduce environmental impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/products" className="text-gray-300 hover:text-[#F4D35E] transition-colors">All Products</a></li>
              <li><a href="#/swap" className="text-gray-300 hover:text-[#F4D35E] transition-colors">Swap Market</a></li>
              <li><a href="#/eco-tokens" className="text-gray-300 hover:text-[#F4D35E] transition-colors">Eco Tokens</a></li>
              <li><a href="#/dashboard" className="text-gray-300 hover:text-[#F4D35E] transition-colors">My Dashboard</a></li>
              <li><a href="#/about" className="text-gray-300 hover:text-[#F4D35E] transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/privacy" className="text-gray-300 hover:text-[#F4D35E] transition-colors">Privacy Policy</a></li>
              <li><a href="#/terms" className="text-gray-300 hover:text-[#F4D35E] transition-colors">Terms of Service</a></li>
              <li><a href="#/shipping" className="text-gray-300 hover:text-[#F4D35E] transition-colors">Shipping Policy</a></li>
              <li><a href="#/returns" className="text-gray-300 hover:text-[#F4D35E] transition-colors">Return Policy</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-4">Connect With Us</h3>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-4 h-4" />
              <a href="mailto:hello@circucity.com" className="text-sm text-gray-300 hover:text-[#F4D35E] transition-colors">
                hello@circucity.com
              </a>
            </div>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F4D35E] hover:text-[#2D5F3F] transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F4D35E] hover:text-[#2D5F3F] transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F4D35E] hover:text-[#2D5F3F] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F4D35E] hover:text-[#2D5F3F] transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#F4D35E] pt-[32px] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#2D5F3F] pr-[35px] pb-[31px] pl-[35px] px-[35px] py-[32px] mt-[32px] mr-[0px] mb-[0px] ml-[0px]">
          <p>&copy; {currentYear} CircuCity. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-[#2D5F3F]" />
            Committed to sustainability
          </p>
        </div>
      </div>
    </footer>
  );
}