import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import {
    Play,
    Search,
    Clock,
    Users,
    Star,
    TrendingUp,
    BarChart3,
    Brain,
    Target,
    BookOpen,
    Award,
    Zap,
    LineChart,
    PieChart,
    Activity,
    Layers,
    Shield,
    Wallet,
    Globe,
    Filter,
    CheckCircle2,
    Video,
    PlayCircle
} from "lucide-react";

interface VideoItem {
    id: string;
    title: string;
    description: string;
    duration: string;
    views: string;
    rating: number;
    category: string;
    thumbnail: string;
    featured?: boolean;
    instructor: string;
    level: "Beginner" | "Intermediate" | "Advanced";
}

const categories = [
    { id: "all", name: "All Videos", icon: Video },
    { id: "platform", name: "Platform Tour", icon: Globe },
    { id: "basics", name: "Trading Basics", icon: BookOpen },
    { id: "technical", name: "Technical Analysis", icon: LineChart },
    { id: "options", name: "Options Trading", icon: Target },
    { id: "ai-features", name: "AI Features", icon: Brain },
    { id: "risk", name: "Risk Management", icon: Shield },
    { id: "portfolio", name: "Portfolio Strategy", icon: PieChart },
    { id: "advanced", name: "Advanced Trading", icon: Award }
];

const videos: VideoItem[] = [
    {
        id: "1",
        title: "TradeAI Platform Overview - Complete Tour",
        description: "Get a comprehensive walkthrough of the TradeAI platform, including dashboard, trading interface, and AI-powered features.",
        duration: "12:45",
        views: "125K",
        rating: 4.9,
        category: "platform",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
        featured: true,
        instructor: "Rahul Sharma",
        level: "Beginner"
    },
    {
        id: "2",
        title: "AI-Powered Trade Signals Explained",
        description: "Learn how our AI analyzes market data to generate accurate trade signals and how to interpret them for maximum profit.",
        duration: "18:30",
        views: "98K",
        rating: 4.8,
        category: "ai-features",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",
        featured: true,
        instructor: "Priya Patel",
        level: "Intermediate"
    },
    {
        id: "3",
        title: "Getting Started with Stock Trading",
        description: "Perfect for beginners! Learn the fundamentals of stock trading, order types, and how to place your first trade.",
        duration: "15:20",
        views: "210K",
        rating: 4.9,
        category: "basics",
        thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&auto=format&fit=crop&q=60",
        instructor: "Amit Kumar",
        level: "Beginner"
    },
    {
        id: "4",
        title: "Technical Analysis Masterclass",
        description: "Deep dive into charts, indicators, candlestick patterns, and how to identify trading opportunities.",
        duration: "45:00",
        views: "156K",
        rating: 4.7,
        category: "technical",
        thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=60",
        instructor: "Sanjay Mehta",
        level: "Advanced"
    },
    {
        id: "5",
        title: "Options Trading for Beginners",
        description: "Understand call and put options, strategies like covered calls, and how to use options for hedging.",
        duration: "28:15",
        views: "87K",
        rating: 4.6,
        category: "options",
        thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&auto=format&fit=crop&q=60",
        instructor: "Neha Singh",
        level: "Intermediate"
    },
    {
        id: "6",
        title: "Risk Management Essentials",
        description: "Learn how to protect your capital with proper position sizing, stop losses, and portfolio diversification.",
        duration: "22:40",
        views: "143K",
        rating: 4.8,
        category: "risk",
        thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60",
        instructor: "Vikram Rao",
        level: "Beginner"
    },
    {
        id: "7",
        title: "Smart Portfolio Management with AI",
        description: "Discover how AI helps optimize your portfolio allocation, rebalancing, and maximizing returns.",
        duration: "20:30",
        views: "72K",
        rating: 4.9,
        category: "ai-features",
        thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=60",
        instructor: "Priya Patel",
        level: "Intermediate"
    },
    {
        id: "8",
        title: "Advanced Options Strategies",
        description: "Master complex strategies like iron condors, butterflies, and calendar spreads for consistent profits.",
        duration: "38:45",
        views: "54K",
        rating: 4.7,
        category: "options",
        thumbnail: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&auto=format&fit=crop&q=60",
        instructor: "Rajesh Khanna",
        level: "Advanced"
    },
    {
        id: "9",
        title: "Reading Charts Like a Pro",
        description: "Learn to identify support, resistance, trend lines, and chart patterns for better trading decisions.",
        duration: "32:10",
        views: "119K",
        rating: 4.8,
        category: "technical",
        thumbnail: "https://images.unsplash.com/photo-1642543348745-03fb8fc77c9c?w=600&auto=format&fit=crop&q=60",
        instructor: "Sanjay Mehta",
        level: "Intermediate"
    },
    {
        id: "10",
        title: "Building a Winning Trading Plan",
        description: "Create a personalized trading plan with clear goals, strategies, and rules for consistent success.",
        duration: "25:50",
        views: "95K",
        rating: 4.9,
        category: "portfolio",
        thumbnail: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&auto=format&fit=crop&q=60",
        instructor: "Amit Kumar",
        level: "Intermediate"
    },
    {
        id: "11",
        title: "Algorithmic Trading Basics",
        description: "Introduction to algo trading, backtesting strategies, and automating your trades with our API.",
        duration: "41:20",
        views: "68K",
        rating: 4.7,
        category: "advanced",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",
        instructor: "Karan Verma",
        level: "Advanced"
    },
    {
        id: "12",
        title: "Day Trading vs Swing Trading",
        description: "Compare different trading styles and find which approach suits your lifestyle and goals best.",
        duration: "19:35",
        views: "132K",
        rating: 4.6,
        category: "basics",
        thumbnail: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=600&auto=format&fit=crop&q=60",
        instructor: "Neha Singh",
        level: "Beginner"
    },
    {
        id: "13",
        title: "AI Risk Analysis Dashboard",
        description: "Understand how AI evaluates portfolio risk, suggests hedging strategies, and alerts you to market changes.",
        duration: "16:45",
        views: "81K",
        rating: 4.8,
        category: "ai-features",
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60",
        instructor: "Priya Patel",
        level: "Intermediate"
    },
    {
        id: "14",
        title: "Sector Rotation Strategy",
        description: "Learn to identify sector trends and rotate your portfolio for maximum returns across market cycles.",
        duration: "27:30",
        views: "63K",
        rating: 4.7,
        category: "portfolio",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
        instructor: "Vikram Rao",
        level: "Advanced"
    },
    {
        id: "15",
        title: "Mobile Trading App Tutorial",
        description: "Complete guide to trading on-the-go with our mobile app, including advanced features and alerts.",
        duration: "14:20",
        views: "176K",
        rating: 4.9,
        category: "platform",
        thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60",
        instructor: "Rahul Sharma",
        level: "Beginner"
    }
];

export function WatchDemo() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredVideos = videos.filter((video) => {
        const matchesCategory = selectedCategory === "all" || video.category === selectedCategory;
        const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            video.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredVideos = videos.filter(v => v.featured);

    const getLevelColor = (level: string) => {
        switch (level) {
            case "Beginner":
                return "bg-green-100 text-green-900 border-green-200";
            case "Intermediate":
                return "bg-blue-100 text-blue-900 border-blue-200";
            case "Advanced":
                return "bg-purple-100 text-purple-900 border-purple-200";
            default:
                return "bg-gray-100 text-gray-900";
        }
    };

    return (
        <div className="min-h-screen pt-20 px-4 py-12">
            {/* Hero Section */}
            <div className="container mx-auto mb-16">
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    <div className="inline-flex items-center gap-2 bg-linear-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-full px-6 py-3 mb-4">
                        <Video className="w-5 h-5 text-purple-600" />
                        <span className="text-purple-900">Free Video Library</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl">Watch & Learn Trading</h1>
                    <p className="text-xl text-muted-foreground">
                        Master trading with our comprehensive video tutorials, platform demos, and expert-led courses
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8 pt-6">
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <PlayCircle className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl">150+ Videos</div>
                                <p className="text-sm text-muted-foreground">HD Quality</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl">2M+ Views</div>
                                <p className="text-sm text-muted-foreground">Learners</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-linear-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                                <Star className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-left">
                                <div className="text-2xl">4.8 Rating</div>
                                <p className="text-sm text-muted-foreground">Average</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Videos */}
            <div className="container mx-auto mb-16">
                <div className="flex items-center gap-2 mb-8">
                    <Zap className="w-6 h-6 text-yellow-600" />
                    <h2 className="text-3xl">Featured Videos</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {featuredVideos.map((video) => (
                        <Card key={video.id} className="overflow-hidden group hover:shadow-xl transition-all cursor-pointer">
                            <div className="relative">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-10 h-10 text-primary ml-1" />
                                    </div>
                                </div>
                                <Badge className="absolute top-4 left-4 bg-red-600">
                                    <Star className="w-3 h-3 mr-1" />
                                    Featured
                                </Badge>
                                <Badge className="absolute top-4 right-4 bg-black/70 text-white">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {video.duration}
                                </Badge>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <Badge className={getLevelColor(video.level)}>{video.level}</Badge>
                                    <Badge variant="outline">{categories.find(c => c.id === video.category)?.name}</Badge>
                                </div>
                                <h3 className="text-2xl mb-3">{video.title}</h3>
                                <p className="text-muted-foreground mb-4">{video.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {video.views}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                            {video.rating}
                                        </span>
                                    </div>
                                    <p className="text-sm">By {video.instructor}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Search & Filters */}
            <div className="container mx-auto mb-12">
                <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                    <div className="flex items-center gap-2 mb-6">
                        <Filter className="w-6 h-6 text-primary" />
                        <h2 className="text-3xl">Browse All Videos</h2>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-8 max-w-2xl">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            placeholder="Search videos by title or topic..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-12 h-14 text-lg"
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map((category) => {
                            const IconComponent = category.icon;
                            const isActive = selectedCategory === category.id;

                            return (
                                <Button
                                    key={category.id}
                                    variant={isActive ? "default" : "outline"}
                                    size="lg"
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`gap-2 ${!isActive && 'hover:border-primary'}`}
                                >
                                    <IconComponent className="w-4 h-4" />
                                    {category.name}
                                </Button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Video Grid */}
            <div className="container mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl">
                        {filteredVideos.length} {filteredVideos.length === 1 ? 'Video' : 'Videos'} Found
                    </h2>
                </div>

                {filteredVideos.length === 0 ? (
                    <Card className="p-12 text-center">
                        <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-2xl mb-2">No videos found</h3>
                        <p className="text-muted-foreground mb-6">
                            Try adjusting your filters or search query
                        </p>
                        <Button onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}>
                            Clear Filters
                        </Button>
                    </Card>
                ) : (
                    <div className="grid md:grid-cols-3 gap-6">
                        {filteredVideos.map((video) => (
                            <Card key={video.id} className="overflow-hidden group hover:shadow-xl transition-all cursor-pointer">
                                <div className="relative">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Play className="w-8 h-8 text-primary ml-1" />
                                        </div>
                                    </div>
                                    <Badge className="absolute top-3 right-3 bg-black/70 text-white">
                                        <Clock className="w-3 h-3 mr-1" />
                                        {video.duration}
                                    </Badge>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Badge className={getLevelColor(video.level)} variant="outline">
                                            {video.level}
                                        </Badge>
                                    </div>
                                    <h3 className="text-lg mb-2 line-clamp-2">{video.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                        {video.description}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <Users className="w-3 h-3" />
                                            {video.views}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                            {video.rating}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="container mx-auto mt-20">
                <Card className="p-12 bg-linear-to-br from-blue-600 to-purple-600 text-white text-center">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h2 className="text-4xl">Ready to Start Trading?</h2>
                        <p className="text-xl text-white/90">
                            Apply what you've learned with our AI-powered platform. Start with a free trial today!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button size="lg" variant="secondary" className="gap-2 text-lg px-8">
                                Start Free Trial
                                <Play className="w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="gap-2 text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                                View All Courses
                                <BookOpen className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default WatchDemo;