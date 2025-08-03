import React from 'react';
import { 
  PiggyBank, 
  TrendingUp, 
  Home, 
  CreditCard, 
  Shield, 
  RefreshCw, 
  Calculator,
  Wallet
} from 'lucide-react';

const features = [
  {
    icon: Calculator,
    title: 'Budgeting',
    description: 'Master the art of planning your expenses and income',
    isMoneyRelated: true
  },
  {
    icon: PiggyBank,
    title: 'Savings',
    description: 'Learn smart strategies to grow your emergency fund',
    isMoneyRelated: true
  },
  {
    icon: TrendingUp,
    title: 'Investing',
    description: 'Discover how to make your money work for you',
    isMoneyRelated: true
  },
  {
    icon: Home,
    title: 'Real Estate',
    description: 'Navigate the world of property investment and homeownership',
    isMoneyRelated: true
  },
  {
    icon: CreditCard,
    title: 'Debt Management',
    description: 'Understand how to handle loans and credit responsibly',
    isMoneyRelated: false
  },
  {
    icon: Shield,
    title: 'Insurance',
    description: 'Protect yourself and your assets with smart coverage',
    isMoneyRelated: false
  },
  {
    icon: RefreshCw,
    title: 'Credit Card Choices',
    description: 'Make informed decisions about credit and rewards',
    isMoneyRelated: false
  },
  {
    icon: Wallet,
    title: 'Virtual Money Simulator',
    description: 'Practice with realistic scenarios without real risk',
    isMoneyRelated: true
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-5xl text-black mb-4"
            style={{ fontFamily: 'Pixelify Sans, monospace' }}
          >
            What You'll Learn
            <span className="block mt-4 text-yellow-500">by Playing</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const iconColor = feature.isMoneyRelated ? 'text-green-600' : 'text-gray-700';
            const borderColor = feature.isMoneyRelated ? 'border-green-500' : 'border-gray-400';
            
            return (
              // Update the feature card
              <div 
                key={index}
                className={`bg-transparent p-6 rounded-xl border-4 ${borderColor} shadow-lg hover:shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 hover:border-yellow-400`}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl border-4 border-black mb-4 ${feature.isMoneyRelated ? 'bg-green-100' : 'bg-gray-100'}`}>
                    <IconComponent className={`h-8 w-8 ${iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-black mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-12 text-xl border-4 border-black transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl">
            Start Your Financial Quest
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;