import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Store, Sprout, Users, ArrowRight, User, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';

export function BecomeSellerPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-[#2D5F3F] mb-4">
                Become a CircuCity Seller
              </h1>
              <p className="text-xl text-gray-600">
                Join the world's fastest-growing eco-friendly marketplace. Turn your sustainable passion into a thriving business.
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#F4D35E]/20 flex items-center justify-center shrink-0">
                  <Store className="w-6 h-6 text-[#2D5F3F]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2D5F3F] mb-1">Dedicated Storefront</h3>
                  <p className="text-gray-600">Customize your shop, manage inventory, and tell your brand's story.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#F4D35E]/20 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-[#2D5F3F]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2D5F3F] mb-1">Reach Conscious Consumers</h3>
                  <p className="text-gray-600">Connect directly with millions of shoppers who care about the planet.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[#F4D35E]/20 flex items-center justify-center shrink-0">
                  <Sprout className="w-6 h-6 text-[#2D5F3F]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2D5F3F] mb-1">Impact Tracking</h3>
                  <p className="text-gray-600">Showcase your environmental impact with our built-in carbon footprint tools.</p>
                </div>
              </div>
            </div>

            <div className="bg-[#2D5F3F] text-white p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-2">Did you know?</h3>
              <p className="mb-4">
                Sellers on CircuCity see an average of 40% growth in their first 3 months.
              </p>
            </div>
          </div>

          {/* Right Column: Auth Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-2 border-gray-100 shadow-xl overflow-hidden">
              <div className="bg-[#2D5F3F] p-8 text-center text-white transition-all duration-300">
                <Store className="w-16 h-16 mx-auto mb-4 text-[#F4D35E]" />
                <h2 className="text-3xl font-bold mb-2">
                  {isLogin ? 'Seller Portal' : 'Create Account'}
                </h2>
                <p className="text-white/80">
                  {isLogin ? 'Access your dashboard.' : 'Start your journey today.'}
                </p>
              </div>
              <CardContent className="pt-8">
                 <div className="space-y-4 mb-6">
                   {!isLogin && (
                     <>
                       <div className="space-y-2">
                         <label className="text-sm font-medium text-gray-700">Full Name</label>
                         <div className="relative">
                            <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                            <input 
                              type="text" 
                              placeholder="Jane Doe"
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D5F3F]/20 focus:border-[#2D5F3F]"
                            />
                         </div>
                       </div>
                       <div className="space-y-2">
                         <label className="text-sm font-medium text-gray-700">Store Name</label>
                         <div className="relative">
                            <ShoppingBag className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                            <input 
                              type="text" 
                              placeholder="Green Living Shop"
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D5F3F]/20 focus:border-[#2D5F3F]"
                            />
                         </div>
                       </div>
                     </>
                   )}
                   
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-700">Email Address</label>
                     <input 
                       type="email" 
                       placeholder="store@circucity.com"
                       className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D5F3F]/20 focus:border-[#2D5F3F]"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-gray-700">Password</label>
                     <input 
                       type="password" 
                       placeholder="••••••••"
                       className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D5F3F]/20 focus:border-[#2D5F3F]"
                     />
                   </div>
                 </div>

                 <Button 
                   className="w-full bg-[#F4D35E] text-[#2D5F3F] hover:bg-[#e0c040] font-bold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
                   onClick={() => window.location.hash = '#/seller-dashboard'}
                 >
                    {isLogin ? 'Log In' : 'Create Account'}
                    <ArrowRight className="ml-2 w-5 h-5" />
                 </Button>
                 
                 <div className="mt-6 text-center space-y-2">
                   {isLogin && (
                     <a href="#" className="block text-sm text-[#2D5F3F] hover:underline">Forgot password?</a>
                   )}
                   <div className="text-sm text-gray-400">
                     {isLogin ? 'New here? ' : 'Already have an account? '}
                     <button 
                       onClick={() => setIsLogin(!isLogin)}
                       className="text-[#2D5F3F] hover:underline font-medium"
                     >
                       {isLogin ? 'Create an account' : 'Log in'}
                     </button>
                   </div>
                 </div>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  );
}