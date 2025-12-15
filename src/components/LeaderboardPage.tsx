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
  },
  {
    id: '6',
    name: 'James Wilson',
    avatar: 'https://ui-avatars.com/api/?name=James+Wilson&background=2D5F3F&color=fff',
    rank: 6,
    co2Saved: 76.8,
    ecoTokens: 950,
    itemsRecycled: 12,
    streak: 4,
    badge: 'Seedling'
  },
  {
    id: '7',
    name: 'Anna Kowalski',
    avatar: 'https://ui-avatars.com/api/?name=Anna+Kowalski&background=F4D35E&color=2D5F3F',
    rank: 7,
    co2Saved: 65.4,
    ecoTokens: 800,
    itemsRecycled: 10,
    streak: 1,
    badge: 'Newcomer'
  },
  {
    id: '8',
    name: 'Robert Taylor',
    avatar: 'https://ui-avatars.com/api/?name=Robert+Taylor&background=2D5F3F&color=fff',
    rank: 8,
    co2Saved: 45.2,
    ecoTokens: 500,
    itemsRecycled: 5,
    streak: 0,
    badge: 'Newcomer'
  }
];

type TimeframeType = 'weekly' | 'monthly' | 'all-time';

export function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState<TimeframeType>('weekly');

  return (
    <div className="w-full min-h-screen pb-12">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#2D5F3F] to-[#1a3a28] text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F4D35E]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium text-[#F4D35E] mb-6">
            <Trophy className="w-4 h-4" />
            Community Leaderboard
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Top Eco Warriors
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Celebrate the community members making the biggest impact on our planet.
            Join the movement and climb the ranks!
          </p>
        </div>
      </section>

      {/* Timeframe Toggle */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20 mb-12">
        <div className="bg-white rounded-full shadow-lg p-2 inline-flex items-center justify-center gap-2 left-1/2 -translate-x-1/2 relative">
          {(['weekly', 'monthly', 'all-time'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                timeframe === t
                  ? 'bg-[#2D5F3F] text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-end max-w-4xl mx-auto">
          {/* Rank 2 */}
          <div className="order-2 md:order-1 bg-white rounded-3xl p-6 shadow-sm border-b-4 border-gray-300 transform hover:-translate-y-2 transition-transform duration-300 relative mt-8 md:mt-0">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-300 text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-white shadow-sm">
              2
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <img
                  src={mockUsers[1].avatar}
                  alt={mockUsers[1].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="absolute bottom-0 right-0 bg-gray-200 rounded-full p-1">
                  <Medal className="w-5 h-5 text-gray-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{mockUsers[1].name}</h3>
              <div className="text-[#2D5F3F] font-medium mb-4">{mockUsers[1].badge}</div>
              <div className="bg-green-50 rounded-xl p-3 w-full">
                <div className="text-sm text-gray-600 mb-1">CO₂ Saved</div>
                <div className="text-2xl font-bold text-[#2D5F3F]">{mockUsers[1].co2Saved}kg</div>
              </div>
            </div>
          </div>

          {/* Rank 1 */}
          <div className="order-1 md:order-2 bg-white rounded-3xl p-8 shadow-lg border-b-4 border-[#F4D35E] transform hover:-translate-y-2 transition-transform duration-300 relative z-10 md:-mt-12">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#F4D35E] text-[#2D5F3F] rounded-full flex items-center justify-center font-bold text-2xl border-4 border-white shadow-sm">
              <Crown className="w-6 h-6 fill-[#2D5F3F]" />
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <img
                  src={mockUsers[0].avatar}
                  alt={mockUsers[0].name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-[#F4D35E] shadow-xl"
                />
                <div className="absolute -bottom-2 -right-2 bg-[#F4D35E] text-[#2D5F3F] px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  #{mockUsers[0].rank}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{mockUsers[0].name}</h3>
              <div className="text-[#2D5F3F] font-medium mb-6 flex items-center gap-1">
                <Star className="w-4 h-4 fill-[#F4D35E] text-[#F4D35E]" />
                {mockUsers[0].badge}
              </div>
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="bg-green-50 rounded-2xl p-3">
                  <div className="text-xs text-gray-600 mb-1">CO₂ Saved</div>
                  <div className="text-xl font-bold text-[#2D5F3F]">{mockUsers[0].co2Saved}kg</div>
                </div>
                <div className="bg-[#FFFBF3] rounded-2xl p-3">
                  <div className="text-xs text-gray-600 mb-1">Tokens</div>
                  <div className="text-xl font-bold text-[#D97706]">{mockUsers[0].ecoTokens}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Rank 3 */}
          <div className="order-3 md:order-3 bg-white rounded-3xl p-6 shadow-sm border-b-4 border-orange-300 transform hover:-translate-y-2 transition-transform duration-300 relative mt-8 md:mt-0">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-orange-300 text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-white shadow-sm">
              3
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <img
                  src={mockUsers[2].avatar}
                  alt={mockUsers[2].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="absolute bottom-0 right-0 bg-orange-200 rounded-full p-1">
                  <Award className="w-5 h-5 text-orange-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{mockUsers[2].name}</h3>
              <div className="text-[#2D5F3F] font-medium mb-4">{mockUsers[2].badge}</div>
              <div className="bg-green-50 rounded-xl p-3 w-full">
                <div className="text-sm text-gray-600 mb-1">CO₂ Saved</div>
                <div className="text-2xl font-bold text-[#2D5F3F]">{mockUsers[2].co2Saved}kg</div>
              </div>
            </div>
          </div>
        </div>

        {/* Rankings Table */}
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-800">Runner Ups</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">CO₂ Saved</th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Eco Tokens</th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Recycled</th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Streak</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {mockUsers.slice(3).map((user) => (
                  <tr key={user.id} className="hover:bg-[#FFFBF3] transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-500">
                      #{user.rank}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img className="h-10 w-10 rounded-full object-cover mr-3" src={user.avatar} alt="" />
                        <div>
                          <div className="text-sm font-medium text-gray-900 group-hover:text-[#2D5F3F] transition-colors">{user.name}</div>
                          <div className="text-xs text-gray-500">{user.badge}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-1 text-sm font-medium text-[#2D5F3F]">
                        <Leaf className="w-4 h-4" />
                        {user.co2Saved}kg
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-600">
                      {user.ecoTokens}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-600">
                      {user.itemsRecycled} items
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                        <TrendingUp className="w-3 h-3" />
                        {user.streak} days
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* My Rank Banner */}
        <div className="mt-8 bg-[#2D5F3F] rounded-2xl p-4 flex items-center justify-between text-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-xl">
              42
            </div>
            <div>
              <div className="font-bold">Your Ranking</div>
              <div className="text-sm text-white/80">You need 15.4kg more CO₂ savings to reach #41</div>
            </div>
          </div>
          <a href="#/dashboard" className="px-6 py-2 bg-[#F4D35E] text-[#2D5F3F] rounded-full font-bold text-sm hover:bg-[#f0c840] transition-colors">
            View My Stats
          </a>
        </div>
      </div>
    </div>
  );
}
