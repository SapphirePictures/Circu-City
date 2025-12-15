import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { ProductListingPage } from './components/ProductListingPage';
import { ProductDetailsPage } from './components/ProductDetailsPage';
import { EcoTokenPage } from './components/EcoTokenPage';
import { Dashboard } from './components/Dashboard';
import { CartPage } from './components/CartPage';
import { CheckoutPage } from './components/CheckoutPage';
import { WishlistPage } from './components/WishlistPage';
import { LeaderboardPage } from './components/LeaderboardPage';
import { OrdersPage } from './components/OrdersPage';
import { BecomeSellerPage } from './components/BecomeSellerPage';
import { SellerDashboard } from './components/SellerDashboard';
import { PoliciesPage } from './components/PoliciesPage';
import { AboutUsPage } from './components/AboutUsPage';
import { SwapMarketplace } from './components/SwapMarketplace';
import { CartProvider } from './components/CartContext';
import { WishlistProvider } from './components/WishlistContext';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1).replace(/^\//, '') || 'home';
      const [page, ...params] = hash.split('/');
      
      window.scrollTo(0, 0);
      setCurrentPage(page);
      
      if (page === 'product' && params[0]) {
        setSelectedProduct(params[0]);
      }
      if (page === 'products' && params[0]) {
        setSelectedCategory(params[0]);
      } else if (page === 'products' && !params[0]) {
        setSelectedCategory(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'products':
        return <ProductListingPage category={selectedCategory} />;
      case 'product':
        return <ProductDetailsPage productId={selectedProduct} />;
      case 'eco-tokens':
        return <EcoTokenPage />;
      case 'dashboard':
        return <Dashboard />;
      case 'cart':
        return <CartPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'leaderboard':
        return <LeaderboardPage />;
      case 'orders':
        return <OrdersPage />;
      case 'become-seller':
        return <BecomeSellerPage />;
      case 'about':
        return <AboutUsPage />;
      case 'seller-dashboard':
        return <SellerDashboard />;
      case 'checkout':
        return <CheckoutPage />;
      case 'policies':
      case 'privacy':
        return <PoliciesPage defaultTab="privacy" />;
      case 'terms':
        return <PoliciesPage defaultTab="terms" />;
      case 'shipping':
        return <PoliciesPage defaultTab="shipping" />;
      case 'returns':
        return <PoliciesPage defaultTab="returns" />;
      case 'swap':
        return <SwapMarketplace />;
      default:
        return <HomePage />;
    }
  };

  return (
    <CartProvider>
      <WishlistProvider>
        <div className="min-h-screen flex flex-col bg-[#F5F0E6]">
          {currentPage !== 'seller-dashboard' && <Header />}
          <main className="flex-1">
            {renderPage()}
          </main>
          {currentPage !== 'seller-dashboard' && <Footer />}
          <Toaster position="top-center" />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}