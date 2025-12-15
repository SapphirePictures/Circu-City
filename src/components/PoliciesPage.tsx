import { useState, useEffect } from 'react';
import { Shield, Truck, RefreshCw, FileText } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface PoliciesPageProps {
  defaultTab?: string;
}

export function PoliciesPage({ defaultTab = 'privacy' }: PoliciesPageProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Update active tab if defaultTab prop changes (e.g. navigation)
  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const tabs = [
    { id: 'privacy', label: 'Privacy Policy', icon: Shield },
    { id: 'terms', label: 'Terms of Service', icon: FileText },
    { id: 'shipping', label: 'Shipping Policy', icon: Truck },
    { id: 'returns', label: 'Return Policy', icon: RefreshCw },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'privacy':
        return <PrivacyContent />;
      case 'terms':
        return <TermsContent />;
      case 'shipping':
        return <ShippingContent />;
      case 'returns':
        return <ReturnsContent />;
      default:
        return <PrivacyContent />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#2D5F3F] mb-8 text-center">Policies & Guidelines</h1>
      
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {/* Sidebar Navigation */}
        <div className="md:w-64 shrink-0 space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  // Optionally update URL hash to match
                  window.location.hash = `#/${tab.id}`;
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-left ${
                  activeTab === tab.id
                    ? 'bg-[#2D5F3F] text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-[#F5F0E6]'
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <Card className="min-h-[500px] border-2 border-gray-100 shadow-lg">
            <CardContent className="p-8 md:p-12">
              {renderContent()}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="prose max-w-none text-gray-700">
      <h2 className="text-2xl font-bold text-[#2D5F3F] mb-6 border-b pb-4">Privacy Policy</h2>
      <p className="mb-4 text-sm text-gray-500">Last updated: December 8, 2024</p>
      
      <h3 className="text-xl font-bold text-[#2D5F3F] mt-8 mb-4">1. Information We Collect</h3>
      <p className="mb-4">
        At CircuCity, we collect information that helps us provide the best eco-friendly shopping experience. This includes:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Personal identification (Name, email address, phone number)</li>
        <li>Shipping and billing addresses</li>
        <li>Order history and eco-impact stats</li>
        <li>Device information for optimizing our website</li>
      </ul>

      <h3 className="text-xl font-bold text-[#2D5F3F] mt-8 mb-4">2. How We Use Your Data</h3>
      <p className="mb-4">
        We are committed to data privacy. We use your information to:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Process and deliver your orders efficiently</li>
        <li>Calculate your personal carbon footprint savings</li>
        <li>Send order updates and tracking information</li>
        <li>Improve our sustainable product recommendations</li>
      </ul>

      <h3 className="text-xl font-bold text-[#2D5F3F] mt-8 mb-4">3. Data Security</h3>
      <p className="mb-4">
        We use industry-standard encryption to protect your data during transmission and storage. Your payment information is processed securely by our payment partners and is never stored on our servers.
      </p>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="prose max-w-none text-gray-700">
      <h2 className="text-2xl font-bold text-[#2D5F3F] mb-6 border-b pb-4">Terms of Service</h2>
      <p className="mb-4 text-sm text-gray-500">Last updated: December 8, 2024</p>

      <h3 className="text-xl font-bold text-[#2D5F3F] mt-8 mb-4">1. Acceptance of Terms</h3>
      <p className="mb-4">
        By accessing and using CircuCity, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our platform.
      </p>

      <h3 className="text-xl font-bold text-[#2D5F3F] mt-8 mb-4">2. Eco-Friendly Commitment</h3>
      <p className="mb-4">
        CircuCity is dedicated to promoting sustainable commerce. Users agree to:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Provide accurate information about products listed for swap or sale</li>
        <li>Respect the community guidelines regarding eco-conscious behavior</li>
        <li>Not engage in greenwashing or misleading marketing</li>
      </ul>

      <h3 className="text-xl font-bold text-[#2D5F3F] mt-8 mb-4">3. User Accounts</h3>
      <p className="mb-4">
        You are responsible for maintaining the confidentiality of your account credentials. You notify us immediately of any unauthorized use of your account.
      </p>
    </div>
  );
}

function ShippingContent() {
  return (
    <div className="prose max-w-none text-gray-700">
      <h2 className="text-2xl font-bold text-[#2D5F3F] mb-6 border-b pb-4">Shipping Policy</h2>
      
      <div className="bg-[#F5F0E6] p-6 rounded-xl mb-8 border border-[#2D5F3F]/10">
        <h4 className="font-bold text-[#2D5F3F] mb-2">Carbon Neutral Shipping</h4>
        <p>Every order shipped through CircuCity is 100% carbon neutral. We partner with carriers who use electric fleets and offset remaining emissions.</p>
      </div>

      <h3 className="text-xl font-bold text-[#2D5F3F] mt-8 mb-4">Delivery Times</h3>
      <p className="mb-4">
        We prioritize eco-friendly ground shipping to reduce air freight emissions.
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Standard Shipping: 5-7 business days</li>
        <li>Express Eco Shipping: 2-3 business days (available in select cities)</li>
      </ul>

      <h3 className="text-xl font-bold text-[#2D5F3F] mt-8 mb-4">Packaging</h3>
      <p className="mb-4">
        All packaging is:
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>100% Recycled or Compostable</li>
        <li>Plastic-free (whenever possible)</li>
        <li>Minimalist to reduce waste</li>
      </ul>
    </div>
  );
}

function ReturnsContent() {
  return (
    <div className="prose max-w-none text-gray-700">
      <h2 className="text-2xl font-bold text-[#2D5F3F] mb-6 border-b pb-4">Return Policy</h2>
      
      <h3 className="text-xl font-bold text-[#2D5F3F] mt-8 mb-4">30-Day Sustainable Returns</h3>
      <p className="mb-4">
        We want you to love your eco-friendly products. If you're not satisfied, you can return items within 30 days of delivery.
      </p>

      <h3 className="text-xl font-bold text-[#2D5F3F] mt-8 mb-4">How to Return</h3>
      <ol className="list-decimal pl-5 mb-6 space-y-2">
        <li>Go to your Dashboard &gt; Orders</li>
        <li>Select "Return Item" next to the product</li>
        <li>Print the prepaid, carbon-neutral shipping label</li>
        <li>Pack the item in its original eco-packaging if possible</li>
      </ol>

      <h3 className="text-xl font-bold text-[#2D5F3F] mt-8 mb-4">Condition of Returns</h3>
      <p className="mb-4">
        Items must be unused and in the same condition that you received them. For hygiene reasons, personal care items (like toothbrushes) cannot be returned if opened.
      </p>
    </div>
  );
}
