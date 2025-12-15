import { Coins, Gift, Trophy, Award, Target, TrendingUp, Star, Leaf, Sparkles } from 'lucide-react';
import { useCart } from './CartContext';

export function EcoTokenPage() {
  const { ecoTokens } = useCart();

  const leaderboard = [
    { rank: 1, name: 'Emma Green', co2Saved: 2543, tokens: 25430, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    { rank: 2, name: 'David Eco', co2Saved: 2198, tokens: 21980, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
    { rank: 3, name: 'Sarah Forest', co2Saved: 1876, tokens: 18760, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
    { rank: 4, name: 'You', co2Saved: 1250, tokens: ecoTokens, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100', isCurrentUser: true },
    { rank: 5, name: 'Mike Nature', co2Saved: 1089, tokens: 10890, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100' }
  ];

  const badges = [
    { id: 1, name: 'First Purchase', icon: '🌱', earned: true, description: 'Made your first eco-purchase' },
    { id: 2, name: 'Tree Planter', icon: '🌳', earned: true, description: 'Saved 100kg of CO₂' },
    { id: 3, name: 'Eco Warrior', icon: '⚔️', earned: true, description: 'Saved 500kg of CO₂' },
    { id: 4, name: 'Green Champion', icon: '🏆', earned: false, description: 'Saved 2000kg of CO₂' },
    { id: 5, name: 'Review Master', icon: '⭐', earned: true, description: 'Written 10 reviews' },
    { id: 6, name: 'Referral King', icon: '👑', earned: false, description: 'Referred 5 friends' },
    { id: 7, name: 'Streak Hero', icon: '🔥', earned: true, description: '30 day purchase streak' },
    { id: 8, name: 'Planet Saver', icon: '🌍', earned: false, description: 'Saved 5000kg of CO₂' }
  ];

  const rewards = [
    { id: 1, name: '$5 Off Next Order', tokens: 500, type: 'discount', icon: Gift },
    { id: 2, name: '$10 Off Next Order', tokens: 1000, type: 'discount', icon: Gift },
    { id: 3, name: 'Free Shipping', tokens: 750, type: 'shipping', icon: Gift },
    { id: 4, name: '$25 Gift Card', tokens: 2500, type: 'gift-card', icon: Gift },
    { id: 5, name: 'Exclusive Product Access', tokens: 1500, type: 'access', icon: Sparkles },
    { id: 6, name: 'Plant a Real Tree', tokens: 5000, type: 'donation', icon: Leaf }
  ];

  const earnMethods = [
    { method: 'Make a Purchase', tokens: '10 tokens per $1', icon: '🛍️' },
    { method: 'Write a Review', tokens: '50 tokens', icon: '✍️' },
    { method: 'Refer a Friend', tokens: '500 tokens', icon: '👥' },
    { method: 'Daily Login', tokens: '10 tokens', icon: '📅' },
    { method: 'Share on Social', tokens: '25 tokens', icon: '📱' }
  ];

  const nextMilestone = 2000;
  const progress = (ecoTokens / nextMilestone) * 100;

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#2D5F3F] to-[#1a3a28] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Coins className="w-12 h-12 text-[#F4D35E]" />
            <h1 className="text-5xl">Eco Tokens</h1>
          </div>
          <p className="text-xl text-gray-200">
            Earn rewards for your sustainable shopping habits
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Token Balance */}
        <div className="bg-gradient-to-br from-[#F4D35E] to-[#e6c14d] rounded-xl p-8 mb-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-sm text-[#2D5F3F] mb-2">Your Balance</div>
              <div className="text-5xl text-[#2D5F3F] flex items-center gap-3">
                <Coins className="w-12 h-12" />
                {ecoTokens.toLocaleString()}
              </div>
              <div className="text-sm text-[#2D5F3F] mt-2">Eco Tokens</div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="px-6 py-3 bg-[#2D5F3F] text-white rounded-full hover:bg-[#1a3a28] transition-colors">
                Redeem Tokens
              </button>
              <button className="px-6 py-3 bg-white text-[#2D5F3F] rounded-full hover:bg-gray-100 transition-colors">
                Earn More
              </button>
            </div>
          </div>
        </div>

        {/* Progress to Next Milestone */}
        <div className="bg-white rounded-3xl p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-[#2D5F3F]" />
              <span>Next Milestone: {nextMilestone} Tokens</span>
            </div>
            <span className="text-sm text-gray-600">{progress.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#2D5F3F] to-[#F4D35E] h-full transition-all duration-500 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {nextMilestone - ecoTokens} more tokens to unlock exclusive rewards
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* How to Earn */}
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <h2 className="text-2xl mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-[#2D5F3F]" />
              How to Earn
            </h2>
            <div className="space-y-4">
              {earnMethods.map((method, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-[#F5F0E6] rounded-2xl">
                  <div className="text-3xl">{method.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm">{method.method}</div>
                    <div className="text-xs text-gray-600">{method.tokens}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h2 className="text-2xl mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-[#2D5F3F]" />
                Your Badges
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {badges.map(badge => (
                  <div
                    key={badge.id}
                    className={`p-4 rounded-2xl text-center transition-all ${
                      badge.earned
                        ? 'bg-gradient-to-br from-[#2D5F3F] to-[#1a3a28] text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    <div className={`text-4xl mb-2 ${!badge.earned && 'grayscale opacity-50'}`}>
                      {badge.icon}
                    </div>
                    <div className="text-sm mb-1">{badge.name}</div>
                    <div className="text-xs opacity-80">{badge.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Rewards */}
        <div className="bg-white rounded-3xl p-6 mb-8 shadow-sm">
          <h2 className="text-2xl mb-6 flex items-center gap-2">
            <Gift className="w-6 h-6 text-[#2D5F3F]" />
            Redeem Rewards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map(reward => {
              const canAfford = ecoTokens >= reward.tokens;
              return (
                <div
                  key={reward.id}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    canAfford
                      ? 'border-[#2D5F3F] bg-[#F5F0E6] hover:shadow-lg'
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    canAfford ? 'bg-[#2D5F3F]' : 'bg-gray-300'
                  }`}>
                    <reward.icon className={`w-6 h-6 ${canAfford ? 'text-[#F4D35E]' : 'text-gray-500'}`} />
                  </div>
                  <h3 className="mb-2">{reward.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Coins className="w-4 h-4 text-[#F4D35E]" />
                    <span className="text-sm">{reward.tokens.toLocaleString()} tokens</span>
                  </div>
                  <button
                    disabled={!canAfford}
                    className={`w-full px-4 py-2 rounded-full transition-colors ${
                      canAfford
                        ? 'bg-[#2D5F3F] text-white hover:bg-[#1a3a28]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {canAfford ? 'Redeem' : 'Locked'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-2xl flex items-center gap-2">
              <Trophy className="w-6 h-6 text-[#2D5F3F]" />
              Community Leaderboard
            </h2>
            <a 
              href="#/leaderboard" 
              className="px-4 py-2 bg-[#FFFBF3] text-[#2D5F3F] border border-[#2D5F3F]/20 rounded-full text-sm font-medium hover:bg-[#2D5F3F] hover:text-white transition-colors w-full sm:w-auto text-center"
            >
              View Full Leaderboard
            </a>
          </div>
          <div className="space-y-3">
            {leaderboard.map(user => (
              <div
                key={user.rank}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                  user.isCurrentUser
                    ? 'bg-gradient-to-r from-[#F4D35E]/20 to-[#2D5F3F]/10 border-2 border-[#F4D35E]'
                    : 'bg-[#F5F0E6] hover:bg-gray-50'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                  user.rank === 1 ? 'bg-[#FFD700] text-white' :
                  user.rank === 2 ? 'bg-[#C0C0C0] text-white' :
                  user.rank === 3 ? 'bg-[#CD7F32] text-white' :
                  'bg-[#2D5F3F] text-white'
                }`}>
                  #{user.rank}
                </div>
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{user.name}</span>
                    {user.isCurrentUser && (
                      <span className="text-xs px-2 py-0.5 bg-[#F4D35E] text-[#2D5F3F] rounded-full">
                        You
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">{user.co2Saved}kg CO₂ saved</div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-[#2D5F3F]">
                    <Coins className="w-4 h-4" />
                    <span>{user.tokens.toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-gray-600">tokens</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}