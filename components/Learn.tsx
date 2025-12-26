"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
    BookOpen,
    Video,
    ArrowRight,
    Clock,
    TrendingUp,
    BarChart3,
    LineChart,
    Activity,
    Target,
    Zap,
    BookMarked,
    PlayCircle,
    GraduationCap,
    Download,
    Share2
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LearningContent {
    id: string;
    title: string;
    description: string;
    category: string;
    type: "reading" | "video";
    duration: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    thumbnail?: string;
    author: string;
}

const learningContent: LearningContent[] = [
    // Reading Materials
    {
        id: "r1",
        title: "Introduction to Indian Stock Market",
        description: "Understand the basics of NSE, BSE, and how stock markets work in India. Learn about market participants, trading hours, and regulatory framework.",
        category: "Stock Market Basics",
        type: "reading",
        duration: "10 min read",
        level: "Beginner",
        author: "Rajesh Kumar"
    },
    {
        id: "r2",
        title: "Understanding Technical Indicators: RSI & MACD",
        description: "Deep dive into Relative Strength Index (RSI) and Moving Average Convergence Divergence (MACD). Learn when to use these indicators for buy/sell decisions.",
        category: "Technical Analysis",
        type: "reading",
        duration: "15 min read",
        level: "Intermediate",
        author: "Priya Sharma"
    },
    {
        id: "r3",
        title: "Candlestick Patterns for Day Trading",
        description: "Master the art of reading candlestick patterns like Doji, Hammer, Engulfing patterns, and Morning/Evening Stars for intraday trading.",
        category: "Trading Signals",
        type: "reading",
        duration: "12 min read",
        level: "Intermediate",
        author: "Amit Patel"
    },
    {
        id: "r4",
        title: "Bollinger Bands: Complete Guide",
        description: "Learn how to use Bollinger Bands to identify volatility, overbought/oversold conditions, and potential breakout opportunities.",
        category: "Technical Indicators",
        type: "reading",
        duration: "8 min read",
        level: "Intermediate",
        author: "Sneha Reddy"
    },
    {
        id: "r5",
        title: "Risk Management in Trading",
        description: "Essential strategies for position sizing, stop-loss placement, and portfolio diversification to protect your capital.",
        category: "Trading Strategy",
        type: "reading",
        duration: "20 min read",
        level: "Advanced",
        author: "Vikram Singh"
    },
    {
        id: "r6",
        title: "Volume Analysis and Price Action",
        description: "Understanding the relationship between volume and price movements. Learn to identify accumulation and distribution phases.",
        category: "Technical Analysis",
        type: "reading",
        duration: "18 min read",
        level: "Advanced",
        author: "Meera Iyer"
    },
    {
        id: "r7",
        title: "Support and Resistance Levels",
        description: "Identify key support and resistance zones using price action, moving averages, and Fibonacci retracement levels.",
        category: "Trading Signals",
        type: "reading",
        duration: "14 min read",
        level: "Beginner",
        author: "Arjun Mehta"
    },
    {
        id: "r8",
        title: "Moving Averages: SMA vs EMA",
        description: "Compare Simple Moving Averages and Exponential Moving Averages. Learn crossover strategies and trend identification.",
        category: "Technical Indicators",
        type: "reading",
        duration: "10 min read",
        level: "Beginner",
        author: "Kavita Nair"
    },

    // Video Materials
    {
        id: "v1",
        title: "Stock Market Fundamentals for Beginners",
        description: "Complete video course covering everything from opening a demat account to placing your first trade on NSE/BSE.",
        category: "Stock Market Basics",
        type: "video",
        duration: "45 min",
        level: "Beginner",
        author: "Trading Academy India"
    },
    {
        id: "v2",
        title: "Master Chart Patterns in 1 Hour",
        description: "Visual guide to identifying and trading chart patterns like Head & Shoulders, Double Top/Bottom, Triangles, and Flags.",
        category: "Trading Signals",
        type: "video",
        duration: "60 min",
        level: "Intermediate",
        author: "Chart Master Pro"
    },
    {
        id: "v3",
        title: "Advanced Fibonacci Trading Strategies",
        description: "Learn to use Fibonacci retracement, extension, and fan tools for precise entry and exit points in trending markets.",
        category: "Technical Analysis",
        type: "video",
        duration: "38 min",
        level: "Advanced",
        author: "Technical Traders Hub"
    },
    {
        id: "v4",
        title: "Stochastic Oscillator Explained",
        description: "Comprehensive guide on using Stochastic indicator for momentum trading and identifying overbought/oversold conditions.",
        category: "Technical Indicators",
        type: "video",
        duration: "25 min",
        level: "Intermediate",
        author: "Indicator Insights"
    },
    {
        id: "v5",
        title: "Intraday Trading Strategies That Work",
        description: "Proven strategies for day trading including scalping, momentum trading, and breakout strategies with live examples.",
        category: "Trading Strategy",
        type: "video",
        duration: "52 min",
        level: "Advanced",
        author: "Day Trading Mastery"
    },
    {
        id: "v6",
        title: "Understanding Option Greeks",
        description: "Delta, Gamma, Theta, Vega explained with practical examples. Learn how Greeks affect your options positions.",
        category: "Advanced Trading",
        type: "video",
        duration: "42 min",
        level: "Advanced",
        author: "Options Pro Academy"
    },
    {
        id: "v7",
        title: "Price Action Trading Masterclass",
        description: "Trade without indicators using pure price action. Learn to read market psychology through candles and patterns.",
        category: "Trading Signals",
        type: "video",
        duration: "55 min",
        level: "Intermediate",
        author: "Price Action Traders"
    },
    {
        id: "v8",
        title: "Building a Trading System",
        description: "Step-by-step guide to creating, backtesting, and implementing your own systematic trading strategy.",
        category: "Trading Strategy",
        type: "video",
        duration: "48 min",
        level: "Advanced",
        author: "Systematic Trading Lab"
    }
];

const categories = [
    "All",
    "Stock Market Basics",
    "Technical Analysis",
    "Trading Signals",
    "Technical Indicators",
    "Trading Strategy"
];

export function Learn() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedLevel, setSelectedLevel] = useState<string>("All");

    const filteredContent = learningContent.filter(content => {
        const categoryMatch = selectedCategory === "All" || content.category === selectedCategory;
        const levelMatch = selectedLevel === "All" || content.level === selectedLevel;
        return categoryMatch && levelMatch;
    });

    const readingMaterials = filteredContent.filter(c => c.type === "reading");
    const videoMaterials = filteredContent.filter(c => c.type === "video");

    const getLevelColor = (level: string) => {
        switch (level) {
            case "Beginner":
                return "bg-green-100 text-green-900 border-green-200";
            case "Intermediate":
                return "bg-blue-100 text-blue-900 border-blue-200";
            case "Advanced":
                return "bg-purple-100 text-purple-900 border-purple-200";
            default:
                return "";
        }
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-background to-blue-50 -z-10" />

                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <Badge className="inline-flex items-center gap-2 bg-orange-100 text-orange-900 border-orange-200">
                            <GraduationCap className="w-4 h-4" />
                            Free Learning Resources
                        </Badge>

                        <h1 className="text-5xl md:text-6xl">
                            Learn Trading & Investing
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Master the stock market with our comprehensive library of articles,
                            video tutorials, and expert insights on trading signals and technical indicators.
                        </p>

                        <div className="flex flex-wrap justify-center gap-8 pt-8">
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <BookOpen className="w-6 h-6 text-blue-600" />
                                    <span className="text-3xl">50+</span>
                                </div>
                                <p className="text-sm text-muted-foreground">Articles & Guides</p>
                            </div>
                            <div className="h-12 w-px bg-border hidden sm:block" />
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <Video className="w-6 h-6 text-purple-600" />
                                    <span className="text-3xl">100+</span>
                                </div>
                                <p className="text-sm text-muted-foreground">Video Tutorials</p>
                            </div>
                            <div className="h-12 w-px bg-border hidden sm:block" />
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <TrendingUp className="w-6 h-6 text-green-600" />
                                    <span className="text-3xl">Free</span>
                                </div>
                                <p className="text-sm text-muted-foreground">100% Free Access</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories & Filters */}
            <section className="py-8 px-4 bg-muted/30 border-y">
                <div className="container mx-auto">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-sm mb-3 text-muted-foreground">Filter by Category</h3>
                            <div className="flex flex-wrap gap-2">
                                {categories.map(category => (
                                    <Button
                                        key={category}
                                        size="sm"
                                        variant={selectedCategory === category ? "default" : "outline"}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm mb-3 text-muted-foreground">Filter by Level</h3>
                            <div className="flex flex-wrap gap-2">
                                {["All", "Beginner", "Intermediate", "Advanced"].map(level => (
                                    <Button
                                        key={level}
                                        size="sm"
                                        variant={selectedLevel === level ? "default" : "outline"}
                                        onClick={() => setSelectedLevel(level)}
                                    >
                                        {level}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Learning Content */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <Tabs defaultValue="reading" className="space-y-8">
                        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                            <TabsTrigger value="reading" className="gap-2">
                                <BookOpen className="w-4 h-4" />
                                Reading Materials ({readingMaterials.length})
                            </TabsTrigger>
                            <TabsTrigger value="video" className="gap-2">
                                <Video className="w-4 h-4" />
                                Video Tutorials ({videoMaterials.length})
                            </TabsTrigger>
                        </TabsList>

                        {/* Reading Materials */}
                        <TabsContent value="reading" className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                {readingMaterials.map(content => (
                                    <Card key={content.id} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                                        <div className="space-y-3">
                                            <div className="flex items-start justify-between gap-4">
                                                <Badge variant="outline" className="gap-1">
                                                    <BookMarked className="w-3 h-3" />
                                                    {content.category}
                                                </Badge>
                                                <Badge className={getLevelColor(content.level)}>
                                                    {content.level}
                                                </Badge>
                                            </div>

                                            <h3 className="text-2xl">{content.title}</h3>
                                            <p className="text-muted-foreground">{content.description}</p>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t">
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {content.duration}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <GraduationCap className="w-4 h-4" />
                                                    {content.author}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            <Button className="flex-1 gap-2">
                                                Read Now
                                                <ArrowRight className="w-4 h-4" />
                                            </Button>
                                            <Button variant="outline" size="icon">
                                                <Download className="w-4 h-4" />
                                            </Button>
                                            <Button variant="outline" size="icon">
                                                <Share2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            {readingMaterials.length === 0 && (
                                <div className="text-center py-12">
                                    <p className="text-muted-foreground">No reading materials found for the selected filters.</p>
                                </div>
                            )}
                        </TabsContent>

                        {/* Video Tutorials */}
                        <TabsContent value="video" className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                {videoMaterials.map(content => (
                                    <Card key={content.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                        <div className="relative aspect-video bg-gradient-to-br from-purple-500 to-blue-600">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                    <PlayCircle className="w-10 h-10 text-white" />
                                                </div>
                                            </div>
                                            <div className="absolute top-4 right-4">
                                                <Badge className="bg-black/50 text-white border-0">
                                                    <Clock className="w-3 h-3 mr-1" />
                                                    {content.duration}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="p-6 space-y-4">
                                            <div className="space-y-3">
                                                <div className="flex items-start justify-between gap-4">
                                                    <Badge variant="outline" className="gap-1">
                                                        <Video className="w-3 h-3" />
                                                        {content.category}
                                                    </Badge>
                                                    <Badge className={getLevelColor(content.level)}>
                                                        {content.level}
                                                    </Badge>
                                                </div>

                                                <h3 className="text-2xl">{content.title}</h3>
                                                <p className="text-muted-foreground">{content.description}</p>
                                            </div>

                                            <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t">
                                                <div className="flex items-center gap-1">
                                                    <GraduationCap className="w-4 h-4" />
                                                    {content.author}
                                                </div>
                                            </div>

                                            <div className="flex gap-2">
                                                <Button className="flex-1 gap-2">
                                                    Watch Now
                                                    <PlayCircle className="w-4 h-4" />
                                                </Button>
                                                <Button variant="outline" size="icon">
                                                    <Share2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            {videoMaterials.length === 0 && (
                                <div className="text-center py-12">
                                    <p className="text-muted-foreground">No video tutorials found for the selected filters.</p>
                                </div>
                            )}
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Popular Topics */}
            <section className="py-16 px-4 bg-muted/30">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4">Popular Learning Topics</h2>
                        <p className="text-xl text-muted-foreground">
                            Quick access to most searched trading concepts
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                                <LineChart className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl">Moving Averages</h3>
                            <p className="text-sm text-muted-foreground">
                                SMA, EMA, and crossover strategies
                            </p>
                            <div className="text-sm text-blue-600">12 resources →</div>
                        </Card>

                        <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                                <BarChart3 className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl">Chart Patterns</h3>
                            <p className="text-sm text-muted-foreground">
                                Triangles, flags, and reversal patterns
                            </p>
                            <div className="text-sm text-purple-600">18 resources →</div>
                        </Card>

                        <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                                <Activity className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl">Oscillators</h3>
                            <p className="text-sm text-muted-foreground">
                                RSI, Stochastic, and momentum indicators
                            </p>
                            <div className="text-sm text-green-600">15 resources →</div>
                        </Card>

                        <Card className="p-6 text-center space-y-3 hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                                <Target className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl">Risk Management</h3>
                            <p className="text-sm text-muted-foreground">
                                Stop-loss, position sizing, and portfolio allocation
                            </p>
                            <div className="text-sm text-orange-600">10 resources →</div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Learning Path */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4">Recommended Learning Path</h2>
                        <p className="text-xl text-muted-foreground">
                            Follow this structured path from beginner to advanced trader
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        <Card className="p-6">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-green-600">1</span>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-2xl">Beginner Level</h3>
                                        <Badge className="bg-green-100 text-green-900 border-green-200">Start here</Badge>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Learn stock market basics, how to read charts, and understand fundamental concepts of trading.
                                    </p>
                                    <div className="flex gap-2 pt-2">
                                        <Badge variant="outline">Market Basics</Badge>
                                        <Badge variant="outline">Chart Reading</Badge>
                                        <Badge variant="outline">Order Types</Badge>
                                    </div>
                                </div>
                                <Button variant="outline">Start Learning</Button>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-blue-600">2</span>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-2xl">Intermediate Level</h3>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Master technical indicators, candlestick patterns, and develop trading strategies.
                                    </p>
                                    <div className="flex gap-2 pt-2">
                                        <Badge variant="outline">Technical Indicators</Badge>
                                        <Badge variant="outline">Chart Patterns</Badge>
                                        <Badge variant="outline">Trading Psychology</Badge>
                                    </div>
                                </div>
                                <Button variant="outline">Continue</Button>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-purple-600">3</span>
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-2xl">Advanced Level</h3>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Advanced strategies, options trading, algorithmic trading, and portfolio management.
                                    </p>
                                    <div className="flex gap-2 pt-2">
                                        <Badge variant="outline">Options Trading</Badge>
                                        <Badge variant="outline">Advanced Strategies</Badge>
                                        <Badge variant="outline">Risk Management</Badge>
                                    </div>
                                </div>
                                <Button variant="outline">Explore</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <Card className="p-12 text-center bg-linear-to-r from-orange-600 to-purple-600 text-white">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <h2 className="text-4xl">Ready to Start Trading?</h2>
                            <p className="text-xl opacity-90">
                                Apply your knowledge with our AI-powered trading platform. Get real-time signals and start trading today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button size="lg" variant="secondary" className="gap-2">
                                    Open Trading Account
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                                    Try Paper Trading
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}

export default Learn;