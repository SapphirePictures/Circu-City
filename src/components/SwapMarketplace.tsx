import { useState } from 'react';
import { Search, Plus, Filter, RefreshCw, ArrowRightLeft, MapPin, Tag, Heart, Package, Send, Archive, Clock, Star, X, Calendar, TrendingUp, Users, Sparkles, CheckCircle2, XCircle, MessageSquare, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

// Mock Data
const MOCK_SWAP_ITEMS = [
  {
    id: '1',
    title: 'Vintage Acoustic Guitar',
    description: 'Yamaha F310, slight wear but plays beautifully. Looking for a keyboard or high-end headphones.',
    image: 'https://images.unsplash.com/photo-1684117736387-69935a4ed00d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYWNvdXN0aWMlMjBndWl0YXJ8ZW58MXx8fHwxNzY1MDk5OTM0fDA&ixlib=rb-4.1.0&q=80&w=600',
    condition: 'Good',
    category: 'Music',
    owner: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1734764627104-6ad22c48af6a?w=100',
      rating: 4.8
    },
    location: 'Brooklyn, NY',
    value: '150 EcoTokens'
  },
  {
    id: '2',
    title: 'Monstera Deliciosa with Pot',
    description: 'Healthy, 2ft tall monstera in a ceramic pot. Moving and can\'t take it. Open to any offers!',
    image: 'https://images.unsplash.com/photo-1653404809389-f370ea4310dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25zdGVyYSUyMHBsYW50JTIwcG90fGVufDF8fHx8MTc2NTE3NTQwOHww&ixlib=rb-4.1.0&q=80&w=600',
    condition: 'Excellent',
    category: 'Plants',
    owner: {
      name: 'Marcus R.',
      avatar: 'https://images.unsplash.com/photo-1712599982295-1ecff6059a57?w=100',
      rating: 5.0
    },
    location: 'Queens, NY',
    value: '40 EcoTokens'
  },
  {
    id: '3',
    title: 'Vintage Denim Jacket',
    description: 'Classic 90s denim jacket, oversized fit. Size L. Would love to swap for a winter coat.',
    image: 'https://images.unsplash.com/photo-1556041068-5874261f23e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZGVuaW0lMjBqYWNrZXR8ZW58MXx8fHwxNzY1MTI4NDY3fDA&ixlib=rb-4.1.0&q=80&w=600',
    condition: 'Vintage',
    category: 'Fashion',
    owner: {
      name: 'Emma W.',
      avatar: 'https://images.unsplash.com/photo-1596097101817-bcfbebb1c00a?w=100',
      rating: 4.9
    },
    location: 'Manhattan, NY',
    value: '80 EcoTokens'
  },
  {
    id: '4',
    title: 'Collection of Art Books',
    description: 'Set of 5 art history books. Great condition. Interested in fiction or cookbooks.',
    image: 'https://images.unsplash.com/photo-1585521747230-516376e5a85d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxlJTIwb2YlMjBib29rc3xlbnwxfHx8fDE3NjUxODQ2MTZ8MA&ixlib=rb-4.1.0&q=80&w=600',
    condition: 'Like New',
    category: 'Books',
    owner: {
      name: 'David P.',
      avatar: 'https://ui-avatars.com/api/?name=David+Park&background=2D5F3F&color=fff',
      rating: 4.7
    },
    location: 'Jersey City, NJ',
    value: '60 EcoTokens'
  },
  {
    id: '5',
    title: 'Portable Projector',
    description: 'Compact LED projector, great for movie nights. Works perfectly. Looking for camping gear.',
    image: 'https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=600',
    condition: 'Excellent',
    category: 'Electronics',
    owner: {
      name: 'Tom Lee',
      avatar: 'https://ui-avatars.com/api/?name=Tom+Lee&background=F4D35E&color=2D5F3F',
      rating: 4.6
    },
    location: 'Portland, OR',
    value: '180 EcoTokens'
  },
  {
    id: '6',
    title: 'Ceramic Plant Pots Set',
    description: '3 handmade ceramic pots, various sizes. Perfect for succulents or herbs.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600',
    condition: 'New',
    category: 'Home & Garden',
    owner: {
      name: 'Sophie Martin',
      avatar: 'https://ui-avatars.com/api/?name=Sophie+Martin&background=2D5F3F&color=fff',
      rating: 5.0
    },
    location: 'Austin, TX',
    value: '45 EcoTokens'
  }
];

const INITIAL_MY_ITEMS = [
  { 
    id: 'm1', 
    title: 'Coffee Maker', 
    value: '50 Tokens',
    category: 'Home & Garden',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',
    listedDate: '2024-12-01',
    views: 45,
    offers: 3
  },
  { 
    id: 'm2', 
    title: 'Yoga Mat', 
    value: '30 Tokens',
    category: 'Sports',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
    listedDate: '2024-12-05',
    views: 28,
    offers: 1
  },
  { 
    id: 'm3', 
    title: 'Bluetooth Speaker', 
    value: '100 Tokens',
    category: 'Electronics',
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',
    listedDate: '2024-12-10',
    views: 67,
    offers: 5
  }
];

const ACTIVE_PROPOSALS = [
  {
    id: 'p1',
    type: 'incoming',
    status: 'pending',
    fromUser: {
      name: 'Alex Johnson',
      avatar: 'https://ui-avatars.com/api/?name=Alex+Johnson&background=2D5F3F&color=fff',
      rating: 4.9
    },
    theirItem: {
      title: 'Mechanical Keyboard',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200',
      value: '120 Tokens'
    },
    myItem: {
      title: 'Bluetooth Speaker',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200',
      value: '100 Tokens'
    },
    message: 'Hi! I love your speaker. Would you be interested in this mint condition mechanical keyboard?',
    date: '2024-12-13'
  },
  {
    id: 'p2',
    type: 'outgoing',
    status: 'pending',
    toUser: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1734764627104-6ad22c48af6a?w=100',
      rating: 4.8
    },
    theirItem: {
      title: 'Vintage Acoustic Guitar',
      image: 'https://images.unsplash.com/photo-1684117736387-69935a4ed00d?w=200',
      value: '150 Tokens'
    },
    myItem: {
      title: 'Coffee Maker',
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=200',
      value: '50 Tokens'
    },
    message: 'Would you consider swapping for my coffee maker? Can add eco tokens to balance.',
    date: '2024-12-14'
  },
  {
    id: 'p3',
    type: 'incoming',
    status: 'accepted',
    fromUser: {
      name: 'Emma Wilson',
      avatar: 'https://ui-avatars.com/api/?name=Emma+Wilson&background=F4D35E&color=2D5F3F',
      rating: 5.0
    },
    theirItem: {
      title: 'Designer Lamp',
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200',
      value: '75 Tokens'
    },
    myItem: {
      title: 'Yoga Mat',
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=200',
      value: '30 Tokens'
    },
    message: 'Perfect! When can we arrange the swap?',
    date: '2024-12-12'
  }
];

const SWAP_HISTORY = [
  {
    id: 'h1',
    partner: {
      name: 'Mike Torres',
      avatar: 'https://ui-avatars.com/api/?name=Mike+Torres&background=2D5F3F&color=fff'
    },
    swappedItem: {
      title: 'Vintage Camera',
      image: 'https://images.unsplash.com/photo-1606400082777-ef05f3c5cde9?w=200'
    },
    receivedItem: {
      title: 'Drawing Tablet',
      image: 'https://images.unsplash.com/photo-1590935216108-a887bda95568?w=200'
    },
    date: '2024-11-28',
    tokensEarned: 25,
    rating: 5
  },
  {
    id: 'h2',
    partner: {
      name: 'Lisa Park',
      avatar: 'https://ui-avatars.com/api/?name=Lisa+Park&background=F4D35E&color=2D5F3F'
    },
    swappedItem: {
      title: 'Book Collection',
      image: 'https://images.unsplash.com/photo-1585521747230-516376e5a85d?w=200'
    },
    receivedItem: {
      title: 'Board Games Set',
      image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=200'
    },
    date: '2024-11-15',
    tokensEarned: 15,
    rating: 4
  }
];

const SAVED_ITEMS = [
  {
    id: 's1',
    title: 'Professional Camera',
    image: 'https://images.unsplash.com/photo-1606400082777-ef05f3c5cde9?w=400',
    condition: 'Excellent',
    owner: 'James K.',
    value: '200 Tokens',
    savedDate: '2024-12-10'
  },
  {
    id: 's2',
    title: 'Ergonomic Office Chair',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400',
    condition: 'Good',
    owner: 'Rachel M.',
    value: '120 Tokens',
    savedDate: '2024-12-08'
  }
];

export function SwapMarketplace() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isListModalOpen, setIsListModalOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof MOCK_SWAP_ITEMS[0] | null>(null);
  const [activeTab, setActiveTab] = useState('browse');
  const [sortBy, setSortBy] = useState('recent');
  const [conditionFilter, setConditionFilter] = useState('all');
  const [myItems, setMyItems] = useState(INITIAL_MY_ITEMS);

  // Form state for new item
  const [newItemTitle, setNewItemTitle] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('');
  const [newItemCondition, setNewItemCondition] = useState('');
  const [newItemValue, setNewItemValue] = useState('');
  const [newItemDescription, setNewItemDescription] = useState('');

  const handleOfferClick = (item: typeof MOCK_SWAP_ITEMS[0]) => {
    setSelectedItem(item);
    setIsOfferModalOpen(true);
  };

  const handleAcceptProposal = (proposalId: string) => {
    toast.success('Swap proposal accepted! Contact details shared.');
  };

  const handleRejectProposal = (proposalId: string) => {
    toast.error('Swap proposal declined.');
  };

  const handleRemoveFromSaved = (itemId: string) => {
    toast.success('Item removed from saved items.');
  };

  const handleDeleteListing = (itemId: string) => {
    setMyItems(myItems.filter(item => item.id !== itemId));
    toast.success('Listing removed successfully.');
  };

  const handleSubmitNewItem = () => {
    // Validation
    if (!newItemTitle.trim()) {
      toast.error('Please enter an item title');
      return;
    }
    if (!newItemCategory) {
      toast.error('Please select a category');
      return;
    }
    if (!newItemCondition) {
      toast.error('Please select a condition');
      return;
    }
    if (!newItemValue || parseInt(newItemValue) <= 0) {
      toast.error('Please enter a valid token value');
      return;
    }

    // Category image mapping
    const categoryImages: { [key: string]: string } = {
      'Electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
      'Fashion': 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
      'Home & Garden': 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400',
      'Books': 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400',
      'Music': 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
      'Sports': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
      'Plants': 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400',
    };

    // Create new item
    const newItem = {
      id: `m${Date.now()}`,
      title: newItemTitle,
      value: `${newItemValue} Tokens`,
      category: newItemCategory,
      condition: newItemCondition,
      image: categoryImages[newItemCategory] || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      listedDate: new Date().toISOString().split('T')[0],
      views: 0,
      offers: 0
    };

    // Add to items
    setMyItems([newItem, ...myItems]);

    // Clear form
    setNewItemTitle('');
    setNewItemCategory('');
    setNewItemCondition('');
    setNewItemValue('');
    setNewItemDescription('');

    // Close modal and show success
    setIsListModalOpen(false);
    toast.success('Item listed successfully! It will be reviewed shortly.');
    
    // Switch to My Items tab
    setActiveTab('my-items');
  };

  return (
    <div className="min-h-screen bg-[#F5F0E6] pb-12">
      {/* Hero Section */}
      <section className="bg-[#2D5F3F] text-white py-12 md:py-16 px-4 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1646803101279-d1a2461a5eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGNpcmN1bGFyJTIwZWNvbm9teXxlbnwxfHx8fDE3NjU4MDI3MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Circular economy background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-[#2D5F3F]/60 z-0" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center md:hidden mb-6">
            <div className="inline-flex items-center gap-2 bg-[#F4D35E] text-[#2D5F3F] px-4 py-1 rounded-full text-sm mb-4">
              <RefreshCw className="w-4 h-4" />
              CircuCity Swap
            </div>
            <h1 className="mb-4">
              Give Your Items a Second Life
            </h1>
            <p className="text-gray-200 mb-6">
              Join the circular economy. Swap pre-loved items with the community.
            </p>
          </div>

          <div className="hidden md:block text-center">
            <div className="inline-flex items-center gap-2 bg-[#F4D35E] text-[#2D5F3F] px-4 py-1 rounded-full text-sm mb-6">
              <RefreshCw className="w-4 h-4" />
              CircuCity Swap
            </div>
            <h1 className="mb-6">
              Give Your Items a Second Life
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
              Join the circular economy. Swap pre-loved items with the community to reduce waste and earn EcoTokens.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Dialog open={isListModalOpen} onOpenChange={setIsListModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#F4D35E] text-[#2D5F3F] hover:bg-[#f0c840] px-6 md:px-8 py-5 md:py-6 rounded-full w-full sm:w-auto">
                  <Plus className="w-5 h-5 mr-2" />
                  List an Item
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] bg-white text-gray-900 max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-[#2D5F3F]">List Item for Swap</DialogTitle>
                  <DialogDescription>
                    Enter the details of the item you want to trade.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Item Title</Label>
                    <Input 
                      id="title" 
                      placeholder="e.g. Vintage Camera" 
                      value={newItemTitle}
                      onChange={(e) => setNewItemTitle(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={newItemCategory} onValueChange={setNewItemCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Electronics">Electronics</SelectItem>
                        <SelectItem value="Fashion">Fashion</SelectItem>
                        <SelectItem value="Home & Garden">Home & Garden</SelectItem>
                        <SelectItem value="Books">Books</SelectItem>
                        <SelectItem value="Music">Music</SelectItem>
                        <SelectItem value="Sports">Sports</SelectItem>
                        <SelectItem value="Plants">Plants</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="condition">Condition</Label>
                    <Select value={newItemCondition} onValueChange={setNewItemCondition}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="Like New">Like New</SelectItem>
                        <SelectItem value="Excellent">Excellent</SelectItem>
                        <SelectItem value="Good">Good</SelectItem>
                        <SelectItem value="Fair">Fair</SelectItem>
                        <SelectItem value="Vintage">Vintage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="value">Estimated Value (EcoTokens)</Label>
                    <Input 
                      id="value" 
                      type="number" 
                      placeholder="e.g. 100"
                      value={newItemValue}
                      onChange={(e) => setNewItemValue(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe your item and what you're looking for..." 
                      rows={4}
                      value={newItemDescription}
                      onChange={(e) => setNewItemDescription(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="photos">Photos</Label>
                    <Input id="photos" type="file" multiple accept="image/*" />
                    <p className="text-xs text-gray-500">Upload up to 5 photos (preview images will be assigned based on category)</p>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsListModalOpen(false)}>Cancel</Button>
                  <Button 
                    className="bg-[#2D5F3F] text-white hover:bg-[#1a3a28]" 
                    onClick={handleSubmitNewItem}
                  >
                    Publish Listing
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            
            <Button 
              className="bg-white text-[#2D5F3F] hover:bg-gray-100 px-6 md:px-8 py-5 md:py-6 rounded-full shadow-md transition-all hover:scale-105 w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById('how-it-works');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              How it Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-4xl mb-1">1,247</div>
              <div className="text-sm text-gray-300">Active Items</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-2xl md:text-4xl mb-1">892</div>
              <div className="text-sm text-gray-300">Successful Swaps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl mb-1">3.2k</div>
              <div className="text-sm text-gray-300">Community Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-6 bg-white p-1 rounded-xl h-auto">
            <TabsTrigger value="browse" className="flex items-center gap-2 py-3 data-[state=active]:bg-[#2D5F3F] data-[state=active]:text-white">
              <Search className="w-4 h-4" />
              <span className="hidden md:inline">Browse</span>
            </TabsTrigger>
            <TabsTrigger value="my-items" className="flex items-center gap-2 py-3 data-[state=active]:bg-[#2D5F3F] data-[state=active]:text-white">
              <Package className="w-4 h-4" />
              <span className="hidden md:inline">My Items</span>
            </TabsTrigger>
            <TabsTrigger value="proposals" className="flex items-center gap-2 py-3 data-[state=active]:bg-[#2D5F3F] data-[state=active]:text-white relative">
              <Send className="w-4 h-4" />
              <span className="hidden md:inline">Proposals</span>
              <Badge className="absolute -top-1 -right-1 bg-[#F4D35E] text-[#2D5F3F] h-5 w-5 p-0 flex items-center justify-center">3</Badge>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2 py-3 data-[state=active]:bg-[#2D5F3F] data-[state=active]:text-white">
              <Archive className="w-4 h-4" />
              <span className="hidden md:inline">History</span>
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex items-center gap-2 py-3 data-[state=active]:bg-[#2D5F3F] data-[state=active]:text-white relative">
              <Heart className="w-4 h-4" />
              <span className="hidden md:inline">Saved</span>
              <Badge className="absolute -top-1 -right-1 bg-[#F4D35E] text-[#2D5F3F] h-5 w-5 p-0 flex items-center justify-center">2</Badge>
            </TabsTrigger>
          </TabsList>

          {/* Browse Tab */}
          <TabsContent value="browse" className="space-y-6">
            {/* Search & Filters */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input 
                      placeholder="Search for items..." 
                      className="pl-10 bg-white border-gray-200"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap md:flex-nowrap">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-full md:w-[140px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="recent">Most Recent</SelectItem>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="value-high">Value: High to Low</SelectItem>
                        <SelectItem value="value-low">Value: Low to High</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={conditionFilter} onValueChange={setConditionFilter}>
                      <SelectTrigger className="w-full md:w-[140px]">
                        <SelectValue placeholder="Condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Conditions</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="like-new">Like New</SelectItem>
                        <SelectItem value="excellent">Excellent</SelectItem>
                        <SelectItem value="good">Good</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Category Pills */}
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {['All', 'Electronics', 'Fashion', 'Home & Garden', 'Books', 'Music', 'Plants', 'Sports'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                        selectedCategory === cat
                          ? 'bg-[#2D5F3F] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Listings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {MOCK_SWAP_ITEMS.map((item) => (
                <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                      {item.category}
                    </div>
                    <button 
                      className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white transition-colors group/heart"
                      onClick={() => toast.success('Item saved to favorites!')}
                    >
                      <Heart className="w-4 h-4 text-white group-hover/heart:text-red-500 group-hover/heart:fill-red-500 transition-colors" />
                    </button>
                  </div>
                  
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{item.location}</span>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-50 text-[#2D5F3F]">
                        {item.condition}
                      </span>
                    </div>
                    
                    <h3 className="text-lg mb-2 text-gray-800 line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-3 line-clamp-2">{item.description}</p>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 mb-3">
                      <div className="flex items-center gap-2">
                        <img src={item.owner.avatar} alt={item.owner.name} className="w-7 h-7 rounded-full object-cover" />
                        <div className="text-xs">
                          <div className="line-clamp-1">{item.owner.name}</div>
                          <div className="text-yellow-500">★ {item.owner.rating}</div>
                        </div>
                      </div>
                      <div className="text-xs text-[#2D5F3F]">
                        {item.value}
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleOfferClick(item)}
                      size="sm"
                      className="w-full bg-[#2D5F3F] hover:bg-[#1a3a28] text-white rounded-full"
                    >
                      Make Offer
                      <ArrowRightLeft className="w-3 h-3 ml-2" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* My Items Tab */}
          <TabsContent value="my-items" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>My Swap Items</CardTitle>
                    <CardDescription>Manage your listings</CardDescription>
                  </div>
                  <Button onClick={() => setIsListModalOpen(true)} className="bg-[#2D5F3F] text-white hover:bg-[#1a3a28]">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Item
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                {myItems.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg mb-2">No items listed yet</h3>
                    <p className="text-gray-500 mb-6">Start listing items to swap with the community</p>
                    <Button onClick={() => setIsListModalOpen(true)} className="bg-[#2D5F3F] text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      List Your First Item
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {myItems.map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row">
                          <div className="w-full md:w-48 h-48 md:h-auto overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 p-4 md:p-6">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-lg mb-1">{item.title}</h3>
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                  <Badge variant="outline" className="bg-green-50 text-[#2D5F3F] border-green-200">{item.condition}</Badge>
                                  <span>{item.category}</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-500">Estimated Value</div>
                                <div className="text-[#2D5F3F]">{item.value}</div>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-y border-gray-100">
                              <div>
                                <div className="text-xs text-gray-500">Listed</div>
                                <div className="flex items-center gap-1 text-sm">
                                  <Calendar className="w-3 h-3 text-gray-400" />
                                  {item.listedDate}
                                </div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-500">Views</div>
                                <div className="flex items-center gap-1 text-sm">
                                  <Eye className="w-3 h-3 text-gray-400" />
                                  {item.views}
                                </div>
                              </div>
                              <div>
                                <div className="text-xs text-gray-500">Offers</div>
                                <div className="flex items-center gap-1 text-sm">
                                  <Send className="w-3 h-3 text-gray-400" />
                                  {item.offers}
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <Button variant="outline" size="sm" className="flex-1" onClick={() => toast.success('Edit functionality coming soon!')}>
                                Edit
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
                                onClick={() => handleDeleteListing(item.id)}
                              >
                                <X className="w-4 h-4 mr-1" />
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Proposals Tab */}
          <TabsContent value="proposals" className="space-y-6">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Incoming Proposals ({ACTIVE_PROPOSALS.filter(p => p.type === 'incoming').length})</CardTitle>
                  <CardDescription>Swap offers from other users</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {ACTIVE_PROPOSALS.filter(p => p.type === 'incoming').map((proposal) => (
                      <Card key={proposal.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="p-4 md:p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <img src={proposal.fromUser.avatar} alt={proposal.fromUser.name} className="w-12 h-12 rounded-full" />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h3>{proposal.fromUser.name}</h3>
                                <Badge className={proposal.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}>
                                  {proposal.status}
                                </Badge>
                              </div>
                              <div className="text-sm text-gray-500 mb-2">★ {proposal.fromUser.rating} • {proposal.date}</div>
                              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg italic">"{proposal.message}"</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-green-50 p-4 rounded-xl">
                              <div className="text-xs text-gray-600 mb-2">They're offering:</div>
                              <div className="flex items-center gap-3">
                                <img src={proposal.theirItem.image} alt={proposal.theirItem.title} className="w-16 h-16 rounded-lg object-cover" />
                                <div>
                                  <div className="font-medium">{proposal.theirItem.title}</div>
                                  <div className="text-sm text-[#2D5F3F]">{proposal.theirItem.value}</div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-xl">
                              <div className="text-xs text-gray-600 mb-2">For your item:</div>
                              <div className="flex items-center gap-3">
                                <img src={proposal.myItem.image} alt={proposal.myItem.title} className="w-16 h-16 rounded-lg object-cover" />
                                <div>
                                  <div className="font-medium">{proposal.myItem.title}</div>
                                  <div className="text-sm text-[#2D5F3F]">{proposal.myItem.value}</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {proposal.status === 'pending' && (
                            <div className="flex gap-2">
                              <Button 
                                className="flex-1 bg-[#2D5F3F] hover:bg-[#1a3a28] text-white"
                                onClick={() => handleAcceptProposal(proposal.id)}
                              >
                                <CheckCircle2 className="w-4 h-4 mr-2" />
                                Accept Swap
                              </Button>
                              <Button 
                                variant="outline"
                                className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
                                onClick={() => handleRejectProposal(proposal.id)}
                              >
                                <XCircle className="w-4 h-4 mr-2" />
                                Decline
                              </Button>
                            </div>
                          )}
                          {proposal.status === 'accepted' && (
                            <Button className="w-full bg-[#2D5F3F] text-white">
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Message {proposal.fromUser.name}
                            </Button>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Outgoing Proposals ({ACTIVE_PROPOSALS.filter(p => p.type === 'outgoing').length})</CardTitle>
                  <CardDescription>Your swap offers to other users</CardDescription>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    {ACTIVE_PROPOSALS.filter(p => p.type === 'outgoing').map((proposal) => (
                      <Card key={proposal.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="p-4 md:p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <img src={proposal.toUser.avatar} alt={proposal.toUser.name} className="w-12 h-12 rounded-full" />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h3>Offer to {proposal.toUser.name}</h3>
                                <Badge className="bg-yellow-100 text-yellow-700">{proposal.status}</Badge>
                              </div>
                              <div className="text-sm text-gray-500 mb-2">★ {proposal.toUser.rating} • {proposal.date}</div>
                              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg italic">"{proposal.message}"</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="bg-blue-50 p-4 rounded-xl">
                              <div className="text-xs text-gray-600 mb-2">You're offering:</div>
                              <div className="flex items-center gap-3">
                                <img src={proposal.myItem.image} alt={proposal.myItem.title} className="w-16 h-16 rounded-lg object-cover" />
                                <div>
                                  <div className="font-medium">{proposal.myItem.title}</div>
                                  <div className="text-sm text-[#2D5F3F]">{proposal.myItem.value}</div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl">
                              <div className="text-xs text-gray-600 mb-2">For their item:</div>
                              <div className="flex items-center gap-3">
                                <img src={proposal.theirItem.image} alt={proposal.theirItem.title} className="w-16 h-16 rounded-lg object-cover" />
                                <div>
                                  <div className="font-medium">{proposal.theirItem.title}</div>
                                  <div className="text-sm text-[#2D5F3F]">{proposal.theirItem.value}</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Button 
                            variant="outline" 
                            className="w-full border-red-200 text-red-600 hover:bg-red-50"
                            onClick={() => toast.success('Proposal withdrawn')}
                          >
                            <X className="w-4 h-4 mr-2" />
                            Withdraw Proposal
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Completed Swaps</CardTitle>
                <CardDescription>Your successful swap history</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {SWAP_HISTORY.map((swap) => (
                    <Card key={swap.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-4 md:p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <img src={swap.partner.avatar} alt={swap.partner.name} className="w-12 h-12 rounded-full" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3>Swap with {swap.partner.name}</h3>
                              <div className="flex items-center gap-1 text-yellow-500">
                                {[...Array(swap.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                              </div>
                            </div>
                            <div className="text-sm text-gray-500">{swap.date}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="bg-red-50 p-4 rounded-xl">
                            <div className="text-xs text-gray-600 mb-2">You gave:</div>
                            <div className="flex items-center gap-3">
                              <img src={swap.swappedItem.image} alt={swap.swappedItem.title} className="w-16 h-16 rounded-lg object-cover" />
                              <div className="font-medium">{swap.swappedItem.title}</div>
                            </div>
                          </div>
                          <div className="bg-green-50 p-4 rounded-xl">
                            <div className="text-xs text-gray-600 mb-2">You received:</div>
                            <div className="flex items-center gap-3">
                              <img src={swap.receivedItem.image} alt={swap.receivedItem.title} className="w-16 h-16 rounded-lg object-cover" />
                              <div className="font-medium">{swap.receivedItem.title}</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-[#F4D35E]/20 rounded-lg">
                          <span className="text-sm">EcoTokens Earned</span>
                          <span className="text-[#2D5F3F]">+{swap.tokensEarned} tokens</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Saved Tab */}
          <TabsContent value="saved" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Saved Items</CardTitle>
                <CardDescription>Items you're interested in</CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                {SAVED_ITEMS.length === 0 ? (
                  <div className="text-center py-12">
                    <Heart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg mb-2">No saved items yet</h3>
                    <p className="text-gray-500">Save items you like to view them later</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {SAVED_ITEMS.map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="relative h-48 overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          <button 
                            className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                            onClick={() => handleRemoveFromSaved(item.id)}
                          >
                            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                          </button>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="outline" className="bg-green-50 text-[#2D5F3F] border-green-200">{item.condition}</Badge>
                            <span className="text-xs text-gray-500">Saved {item.savedDate}</span>
                          </div>
                          <h3 className="mb-1">{item.title}</h3>
                          <div className="text-sm text-gray-500 mb-2">by {item.owner}</div>
                          <div className="text-sm text-[#2D5F3F] mb-3">{item.value}</div>
                          <Button 
                            size="sm"
                            className="w-full bg-[#2D5F3F] hover:bg-[#1a3a28] text-white"
                            onClick={() => handleOfferClick(MOCK_SWAP_ITEMS[0])}
                          >
                            Make Offer
                            <ArrowRightLeft className="w-3 h-3 ml-2" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* How It Works Section */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h2 className="mb-4">How Swapping Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            CircuCity Swap makes it easy to trade items you no longer need for things you want, reducing waste and building community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-[#2D5F3F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-[#2D5F3F]" />
            </div>
            <h3 className="text-lg mb-2">1. List Your Item</h3>
            <p className="text-sm text-gray-600">Upload photos and describe what you have and what you're looking for</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-[#F4D35E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-[#2D5F3F]" />
            </div>
            <h3 className="text-lg mb-2">2. Browse & Offer</h3>
            <p className="text-sm text-gray-600">Find items you want and propose swaps with other community members</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-[#2D5F3F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-[#2D5F3F]" />
            </div>
            <h3 className="text-lg mb-2">3. Connect & Agree</h3>
            <p className="text-sm text-gray-600">Chat with potential swap partners to finalize the details</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-[#F4D35E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-[#2D5F3F]" />
            </div>
            <h3 className="text-lg mb-2">4. Swap & Earn</h3>
            <p className="text-sm text-gray-600">Complete the swap and earn EcoTokens for sustainable choices</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#2D5F3F] to-[#1a3a28] text-white p-8 rounded-3xl text-center">
          <h3 className="text-2xl mb-2">Ready to Start Swapping?</h3>
          <p className="text-gray-200 mb-6">Join thousands of users giving their items a second life</p>
          <Button 
            className="bg-[#F4D35E] text-[#2D5F3F] hover:bg-[#f0c840]"
            onClick={() => setIsListModalOpen(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            List Your First Item
          </Button>
        </div>
      </section>

      {/* Offer Modal */}
      <Dialog open={isOfferModalOpen} onOpenChange={setIsOfferModalOpen}>
        {selectedItem && (
          <DialogContent className="sm:max-w-[500px] bg-white max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Make a Swap Offer</DialogTitle>
              <DialogDescription>
                Choose an item from your inventory to offer for <span className="text-[#2D5F3F]">{selectedItem.title}</span>
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="max-h-[400px] py-4">
              <div className="space-y-3 pr-4">
                {myItems.map((myItem) => (
                  <div 
                    key={myItem.id} 
                    className="flex items-center p-3 border-2 border-gray-200 rounded-xl hover:border-[#2D5F3F] cursor-pointer transition-colors group"
                  >
                    <img src={myItem.image} alt={myItem.title} className="w-16 h-16 rounded-lg object-cover mr-3" />
                    <div className="flex-1">
                      <div>{myItem.title}</div>
                      <div className="text-sm text-gray-500">{myItem.value}</div>
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-[#2D5F3F]" />
                  </div>
                ))}
                <Separator className="my-4" />
                <Button variant="outline" className="w-full border-dashed" onClick={() => setIsListModalOpen(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  List a New Item to Offer
                </Button>
              </div>
            </ScrollArea>
            <div className="space-y-3 pt-4 border-t">
              <div>
                <Label htmlFor="offer-message">Add a message (optional)</Label>
                <Textarea 
                  id="offer-message" 
                  placeholder="Let them know why you're interested in this swap..."
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsOfferModalOpen(false)}>Cancel</Button>
              <Button 
                className="bg-[#2D5F3F] text-white hover:bg-[#1a3a28]" 
                onClick={() => {
                  setIsOfferModalOpen(false);
                  toast.success('Swap proposal sent! You\'ll be notified when they respond.');
                }}
              >
                Send Proposal
              </Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}