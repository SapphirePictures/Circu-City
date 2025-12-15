import { Trophy, Medal, Leaf, TrendingUp, Crown, Star, Award } from 'lucide-react';
import { useState } from 'react';

interface User {
  id: string;
  name: string;
  avatar: string;
  rank: number;
  co2Saved: number;
  ecoTokens: number;
  itemsRecycled: number;
  streak: number;
  badge: string;
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1734764627104-6ad22c48af6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjQ4ODEwODh8MA&ixlib=rb-4.1.0&q=80&w=200',
    rank: 1,
    co2Saved: 145.2,
    ecoTokens: 2450,
    itemsRecycled: 34,
    streak: 12,
    badge: 'Eco Warrior'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1712599982295-1ecff6059a57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG1hbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzY0ODMzMjQ2fDA&ixlib=rb-4.1.0&q=80&w=200',
    rank: 2,
    co2Saved: 132.5,
    ecoTokens: 2100,
    itemsRecycled: 28,
    streak: 8,
    badge: 'Sustainability Champion'
  },
  {
    id: '3',
    name: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1596097101817-bcfbebb1c00a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIweW91bmd8ZW58MXx8fHwxNzY0ODUzNzA5fDA&ixlib=rb-4.1.0&q=80&w=200',
    rank: 3,
    co2Saved: 118.9,
    ecoTokens: 1950,
    itemsRecycled: 22,
    streak: 5,
    badge: 'Green Guardian'
  },
  {
    id: '4',
    name: 'David Park',
    avatar: 'https://ui-avatars.com/api/?name=David+Park&background=2D5F3F&color=fff',
    rank: 4,
    co2Saved: 98.4,
    ecoTokens: 1500,
    itemsRecycled: 18,
    streak: 3,
    badge: 'Recycler'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    avatar: 'https://ui-avatars.com/api/?name=Lisa+Thompson&background=F4D35E&color=2D5F3F',
    rank: 5,
    co2Saved: 85.2,
    ecoTokens: 1200,
    itemsRecycled: 15,
    streak: 2,
    badge: 'Seedling'
  }
];

type TimeframeType = 'weekly' | 'monthly' | 'all-time';

export function DashboardLeaderboard() {
  const [timeframe, setTimeframe] = useState<TimeframeType>('weekly');

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <h2 className="text-2xl flex items-center gap-2">
          <Trophy className="w-6 h-6 text-[#F4D35E]" />
          Leaderboard
        </h2>
        
        <div className="bg-[#FFFBF3] rounded-full p-1 inline-flex">
          {(['weekly', 'monthly', 'all-time'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                timeframe === t
                  ? 'bg-[#2D5F3F] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-black/5'
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 items-end">
        {/* Rank 2 */}
        <div className="text-center">
          <div className="relative inline-block mb-3">
            <img
              src={mockUsers[1].avatar}
              alt={mockUsers[1].name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-gray-200"
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-bold text-xs border-2 border-white">
              2
            </div>
          </div>
          <div className="font-bold text-sm sm:text-base truncate px-2">{mockUsers[1].name}</div>
          <div className="text-[#2D5F3F] text-xs font-bold">{mockUsers[1].co2Saved}kg</div>
        </div>

        {/* Rank 1 */}
        <div className="text-center relative -top-4">
          <div className="relative inline-block mb-3">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#F4D35E]">
              <Crown className="w-8 h-8 fill-current" />
            </div>
            <img
              src={mockUsers[0].avatar}
              alt={mockUsers[0].name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-[#F4D35E]"
            />
            <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-[#F4D35E] text-[#2D5F3F] rounded-full flex items-center justify-center font-bold text-sm border-2 border-white shadow-sm">
              1
            </div>
          </div>
          <div className="font-bold text-sm sm:text-base truncate px-2">{mockUsers[0].name}</div>
          <div className="text-[#2D5F3F] text-sm font-bold">{mockUsers[0].co2Saved}kg</div>
          <div className="text-xs text-gray-500">{mockUsers[0].ecoTokens} tokens</div>
        </div>

        {/* Rank 3 */}
        <div className="text-center">
          <div className="relative inline-block mb-3">
            <img
              src={mockUsers[2].avatar}
              alt={mockUsers[2].name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-orange-200"
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-200 text-orange-700 rounded-full flex items-center justify-center font-bold text-xs border-2 border-white">
              3
            </div>
          </div>
          <div className="font-bold text-sm sm:text-base truncate px-2">{mockUsers[2].name}</div>
          <div className="text-[#2D5F3F] text-xs font-bold">{mockUsers[2].co2Saved}kg</div>
        </div>
      </div>

      {/* List */}
      <div className="space-y-2">
        {mockUsers.slice(3).map((user) => (
          <div key={user.id} className="flex items-center justify-between p-3 hover:bg-[#FFFBF3] rounded-xl transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-6 text-center font-bold text-gray-400 text-sm">#{user.rank}</div>
              <img src={user.avatar} alt="" className="w-8 h-8 rounded-full object-cover" />
              <div>
                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                <div className="text-xs text-gray-500 hidden sm:block">{user.badge}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-[#2D5F3F]">{user.co2Saved}kg</div>
              <div className="text-xs text-gray-500">{user.ecoTokens} tokens</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
           <span className="text-gray-600">Your Rank</span>
           <span className="font-bold text-[#2D5F3F]">#42 (Top 15%)</span>
        </div>
      </div>
    </div>
  );
}
