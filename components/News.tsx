"use client"

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
    TrendingUp,
    TrendingDown,
    Globe,
    IndianRupee,
    Clock,
    Radio,
    AlertCircle,
    ExternalLink,
    ChevronRight,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    Newspaper,
    Filter,
    RefreshCw
} from "lucide-react";

interface NewsArticle {
    id: string;
    title: string;
    summary: string;
    source: string;
    timestamp: string;
    category: "india" | "us" | "asia" | "europe" | "global";
    impact: "positive" | "negative" | "neutral";
    impactOnIndianMarket?: string;
    relatedIndices: string[];
    isBreaking?: boolean;
    region: string;
}

const newsArticles: NewsArticle[] = [
    {
        id: "n1",
        title: "Fed Signals Potential Rate Cut in Q2 2025, Global Markets Rally",
        summary: "The US Federal Reserve has indicated a possible interest rate reduction in the second quarter of 2025, citing cooling inflation and stable employment. The announcement has sparked a global equity rally.",
        source: "Bloomberg",
        timestamp: "5 minutes ago",
        category: "us",
        impact: "positive",
        impactOnIndianMarket: "Positive impact expected. FII inflows likely to increase as US yields become less attractive. NIFTY could test 24,500 levels.",
        relatedIndices: ["NIFTY 50", "SENSEX", "BANK NIFTY"],
        isBreaking: true,
        region: "United States"
    },
    {
        id: "n2",
        title: "Nifty 50 Crosses 24,000 Mark on Strong FII Buying",
        summary: "Indian benchmark index Nifty 50 surged past the 24,000 mark today, driven by robust foreign institutional investor buying in banking and IT stocks. Market sentiment remains bullish ahead of Q4 earnings.",
        source: "Economic Times",
        timestamp: "12 minutes ago",
        category: "india",
        impact: "positive",
        relatedIndices: ["NIFTY 50", "SENSEX"],
        isBreaking: true,
        region: "India"
    },
    {
        id: "n3",
        title: "China's Manufacturing PMI Exceeds Expectations at 51.2",
        summary: "China's manufacturing sector shows strong recovery with PMI hitting 51.2, beating analyst expectations of 50.8. The expansion signals improving economic conditions in the world's second-largest economy.",
        source: "Reuters",
        timestamp: "28 minutes ago",
        category: "asia",
        impact: "positive",
        impactOnIndianMarket: "Moderately positive. China's recovery could boost demand for Indian exports, particularly in pharma and IT services sectors.",
        relatedIndices: ["NIFTY IT", "NIFTY PHARMA"],
        region: "China"
    },
    {
        id: "n4",
        title: "European Central Bank Holds Rates Steady at 3.75%",
        summary: "The ECB maintains its key interest rate at 3.75% as inflation in the Eurozone stabilizes at 2.4%. President Christine Lagarde emphasized a data-dependent approach to future policy decisions.",
        source: "Financial Times",
        timestamp: "45 minutes ago",
        category: "europe",
        impact: "neutral",
        impactOnIndianMarket: "Neutral to slightly positive. Stable European rates support global risk appetite. Indian IT exporters to Europe may benefit.",
        relatedIndices: ["NIFTY IT", "BANK NIFTY"],
        region: "European Union"
    },
    {
        id: "n5",
        title: "RBI Keeps Repo Rate Unchanged at 6.5%, Maintains 'Withdrawal of Accommodation' Stance",
        summary: "The Reserve Bank of India has decided to keep the policy repo rate unchanged at 6.5% for the eighth consecutive policy meeting. Governor Shaktikanta Das emphasized focus on bringing inflation closer to the 4% target.",
        source: "Mint",
        timestamp: "1 hour ago",
        category: "india",
        impact: "neutral",
        relatedIndices: ["NIFTY 50", "BANK NIFTY", "SENSEX"],
        region: "India"
    },
    {
        id: "n6",
        title: "Crude Oil Prices Surge 3.2% on Middle East Tensions",
        summary: "Brent crude oil prices jumped to $87.50 per barrel amid escalating geopolitical tensions in the Middle East. Analysts warn of potential supply disruptions affecting global energy markets.",
        source: "CNBC",
        timestamp: "1 hour ago",
        category: "global",
        impact: "negative",
        impactOnIndianMarket: "Negative impact. Rising crude prices could widen India's trade deficit and put pressure on the rupee. OMC stocks may see volatility.",
        relatedIndices: ["NIFTY 50", "NIFTY ENERGY"],
        region: "Global"
    },
    {
        id: "n7",
        title: "US Tech Giants Report Strong Q4 Earnings, Nasdaq Jumps 2.1%",
        summary: "Major US technology companies including Microsoft, Apple, and Google parent Alphabet reported better-than-expected Q4 earnings, sending Nasdaq Composite up 2.1% in extended trading.",
        source: "Wall Street Journal",
        timestamp: "2 hours ago",
        category: "us",
        impact: "positive",
        impactOnIndianMarket: "Positive spillover effect. Indian IT services stocks likely to gain as positive sentiment flows from US tech sector.",
        relatedIndices: ["NIFTY IT", "NIFTY 50"],
        region: "United States"
    },
    {
        id: "n8",
        title: "Japan's Nikkei 225 Hits Record High of 41,200",
        summary: "Japan's benchmark Nikkei 225 index reached a fresh all-time high of 41,200 points, supported by a weaker yen and strong corporate earnings from exporters like Toyota and Sony.",
        source: "Nikkei Asia",
        timestamp: "2 hours ago",
        category: "asia",
        impact: "positive",
        impactOnIndianMarket: "Neutral. Positive Asian market sentiment could support Indian equities, though direct correlation is limited.",
        relatedIndices: ["NIFTY 50", "SENSEX"],
        region: "Japan"
    },
    {
        id: "n9",
        title: "Indian Rupee Strengthens to 82.85 Against US Dollar",
        summary: "The Indian rupee appreciated to 82.85 per dollar, its strongest level in three weeks, supported by sustained foreign portfolio investments and dollar weakness in global markets.",
        source: "Business Standard",
        timestamp: "3 hours ago",
        category: "india",
        impact: "positive",
        relatedIndices: ["NIFTY 50", "BANK NIFTY"],
        region: "India"
    },
    {
        id: "n10",
        title: "UK Economy Shows Signs of Recovery, FTSE 100 Up 1.4%",
        summary: "Britain's economy demonstrated resilience with GDP growth of 0.3% in the latest quarter. The FTSE 100 index rose 1.4% as investors welcomed the positive economic data.",
        source: "BBC Business",
        timestamp: "3 hours ago",
        category: "europe",
        impact: "positive",
        impactOnIndianMarket: "Mildly positive. UK economic recovery supports global growth outlook, benefiting Indian exporters and IT services.",
        relatedIndices: ["NIFTY IT"],
        region: "United Kingdom"
    },
    {
        id: "n11",
        title: "Adani Group Stocks Rally Up to 7% on Debt Reduction Plans",
        summary: "Adani Group stocks witnessed strong buying interest after the conglomerate announced plans to reduce debt by ₹50,000 crore through asset monetization and stake sales over the next 18 months.",
        source: "Moneycontrol",
        timestamp: "4 hours ago",
        category: "india",
        impact: "positive",
        relatedIndices: ["NIFTY 50", "SENSEX"],
        region: "India"
    },
    {
        id: "n12",
        title: "Global Semiconductor Shortage Easing, Tech Stocks Gain",
        summary: "Major semiconductor manufacturers report production normalization, easing the global chip shortage that has affected multiple industries. Taiwan Semiconductor and Samsung lead gains.",
        source: "TechCrunch",
        timestamp: "5 hours ago",
        category: "global",
        impact: "positive",
        impactOnIndianMarket: "Positive for Indian auto and electronics sectors. Expect improvement in production capacity and margins.",
        relatedIndices: ["NIFTY AUTO", "NIFTY IT"],
        region: "Global"
    }
];

const marketIndices = [
    { name: "NIFTY 50", value: "24,156.50", change: "+1.85%", isPositive: true },
    { name: "SENSEX", value: "79,842.30", change: "+1.72%", isPositive: true },
    { name: "BANK NIFTY", value: "52,348.20", change: "+2.15%", isPositive: true },
    { name: "DOW JONES", value: "38,956.80", change: "+0.92%", isPositive: true },
    { name: "NASDAQ", value: "16,432.50", change: "+1.54%", isPositive: true },
    { name: "HANG SENG", value: "16,842.70", change: "-0.45%", isPositive: false }
];

export function News() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [lastUpdate, setLastUpdate] = useState(new Date());
    const [autoRefresh, setAutoRefresh] = useState(true);

    useEffect(() => {
        if (autoRefresh) {
            const interval = setInterval(() => {
                setLastUpdate(new Date());
            }, 30000); // Update every 30 seconds

            return () => clearInterval(interval);
        }
    }, [autoRefresh]);

    const filteredNews = selectedCategory === "all"
        ? newsArticles
        : newsArticles.filter(article => article.category === selectedCategory);

    const getImpactIcon = (impact: string) => {
        switch (impact) {
            case "positive":
                return <TrendingUp className="w-4 h-4 text-green-600" />;
            case "negative":
                return <TrendingDown className="w-4 h-4 text-red-600" />;
            default:
                return <Activity className="w-4 h-4 text-gray-600" />;
        }
    };

    const getImpactColor = (impact: string) => {
        switch (impact) {
            case "positive":
                return "bg-green-50 border-green-200 text-green-900";
            case "negative":
                return "bg-red-50 border-red-200 text-red-900";
            default:
                return "bg-gray-50 border-gray-200 text-gray-900";
        }
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-12 px-4 border-b bg-gradient-to-br from-blue-50 via-background to-purple-50">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Badge className="inline-flex items-center gap-2 bg-red-100 text-red-900 border-red-200 animate-pulse">
                                    <Radio className="w-3 h-3" />
                                    LIVE
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                    Last updated: {lastUpdate.toLocaleTimeString()}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl">Market News</h1>
                            <p className="text-lg text-muted-foreground">
                                Real-time updates on global markets and their impact on Indian indices
                            </p>
                        </div>

                        <Button
                            variant="outline"
                            className="gap-2"
                            onClick={() => setLastUpdate(new Date())}
                        >
                            <RefreshCw className="w-4 h-4" />
                            Refresh
                        </Button>
                    </div>

                    {/* Live Market Indices */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {marketIndices.map((index) => (
                            <Card key={index.name} className="p-4">
                                <p className="text-xs text-muted-foreground mb-1">{index.name}</p>
                                <p className="text-lg mb-1">{index.value}</p>
                                <div className={`flex items-center gap-1 text-sm ${index.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                                    {index.isPositive ? (
                                        <ArrowUpRight className="w-3 h-3" />
                                    ) : (
                                        <ArrowDownRight className="w-3 h-3" />
                                    )}
                                    {index.change}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-6 px-4 border-b bg-muted/30">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center gap-3">
                        <Filter className="w-4 h-4 text-muted-foreground" />
                        <Button
                            size="sm"
                            variant={selectedCategory === "all" ? "default" : "outline"}
                            onClick={() => setSelectedCategory("all")}
                        >
                            All News
                        </Button>
                        <Button
                            size="sm"
                            variant={selectedCategory === "india" ? "default" : "outline"}
                            onClick={() => setSelectedCategory("india")}
                            className="gap-2"
                        >
                            <IndianRupee className="w-3 h-3" />
                            India
                        </Button>
                        <Button
                            size="sm"
                            variant={selectedCategory === "us" ? "default" : "outline"}
                            onClick={() => setSelectedCategory("us")}
                        >
                            United States
                        </Button>
                        <Button
                            size="sm"
                            variant={selectedCategory === "asia" ? "default" : "outline"}
                            onClick={() => setSelectedCategory("asia")}
                        >
                            Asia Pacific
                        </Button>
                        <Button
                            size="sm"
                            variant={selectedCategory === "europe" ? "default" : "outline"}
                            onClick={() => setSelectedCategory("europe")}
                        >
                            Europe
                        </Button>
                        <Button
                            size="sm"
                            variant={selectedCategory === "global" ? "default" : "outline"}
                            onClick={() => setSelectedCategory("global")}
                            className="gap-2"
                        >
                            <Globe className="w-3 h-3" />
                            Global
                        </Button>
                    </div>
                </div>
            </section>

            {/* Breaking News */}
            <section className="py-6 px-4 bg-red-50 border-b border-red-200">
                <div className="container mx-auto">
                    <div className="flex items-start gap-3">
                        <Badge className="bg-red-600 text-white mt-1">
                            BREAKING
                        </Badge>
                        <div className="flex-1">
                            <h3 className="text-xl mb-2">
                                {newsArticles.find(n => n.isBreaking)?.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {newsArticles.find(n => n.isBreaking)?.timestamp}
                                </span>
                                <span>{newsArticles.find(n => n.isBreaking)?.source}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* News Articles */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main News Feed */}
                        <div className="lg:col-span-2 space-y-6">
                            {filteredNews.map((article) => (
                                <Card key={article.id} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                                    <div className="space-y-3">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                                    {article.isBreaking && (
                                                        <Badge className="bg-red-600 text-white">BREAKING</Badge>
                                                    )}
                                                    <Badge variant="outline">{article.region}</Badge>
                                                    <Badge className={getImpactColor(article.impact)}>
                                                        <span className="flex items-center gap-1">
                                                            {getImpactIcon(article.impact)}
                                                            {article.impact.charAt(0).toUpperCase() + article.impact.slice(1)}
                                                        </span>
                                                    </Badge>
                                                </div>

                                                <h2 className="text-2xl mb-2">{article.title}</h2>
                                                <p className="text-muted-foreground">{article.summary}</p>
                                            </div>
                                        </div>

                                        {article.impactOnIndianMarket && (
                                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                                <div className="flex items-start gap-2">
                                                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <h4 className="mb-1">Impact on Indian Markets</h4>
                                                        <p className="text-sm text-muted-foreground">
                                                            {article.impactOnIndianMarket}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-sm text-muted-foreground">Related Indices:</span>
                                            {article.relatedIndices.map((index) => (
                                                <Badge key={index} variant="secondary" className="text-xs">
                                                    {index}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t">
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {article.timestamp}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Newspaper className="w-4 h-4" />
                                                {article.source}
                                            </span>
                                        </div>
                                        <Button variant="ghost" size="sm" className="gap-2">
                                            Read Full Article
                                            <ExternalLink className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Market Movers */}
                            <Card className="p-6">
                                <h3 className="text-xl mb-4">Top Market Movers</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between pb-3 border-b">
                                        <div>
                                            <p className="mb-1">Reliance Industries</p>
                                            <p className="text-sm text-muted-foreground">NSE</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="mb-1">₹2,856.40</p>
                                            <p className="text-sm text-green-600 flex items-center gap-1">
                                                <ArrowUpRight className="w-3 h-3" />
                                                +3.42%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pb-3 border-b">
                                        <div>
                                            <p className="mb-1">HDFC Bank</p>
                                            <p className="text-sm text-muted-foreground">NSE</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="mb-1">₹1,645.85</p>
                                            <p className="text-sm text-green-600 flex items-center gap-1">
                                                <ArrowUpRight className="w-3 h-3" />
                                                +2.85%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pb-3 border-b">
                                        <div>
                                            <p className="mb-1">TCS</p>
                                            <p className="text-sm text-muted-foreground">NSE</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="mb-1">₹3,892.60</p>
                                            <p className="text-sm text-green-600 flex items-center gap-1">
                                                <ArrowUpRight className="w-3 h-3" />
                                                +2.15%
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="mb-1">Infosys</p>
                                            <p className="text-sm text-muted-foreground">NSE</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="mb-1">₹1,512.30</p>
                                            <p className="text-sm text-red-600 flex items-center gap-1">
                                                <ArrowDownRight className="w-3 h-3" />
                                                -0.85%
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Market Sentiment */}
                            <Card className="p-6">
                                <h3 className="text-xl mb-4">Global Market Sentiment</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm">Bullish</span>
                                            <span className="text-sm">68%</span>
                                        </div>
                                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                                            <div className="h-full bg-green-600 rounded-full" style={{ width: '68%' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm">Bearish</span>
                                            <span className="text-sm">20%</span>
                                        </div>
                                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                                            <div className="h-full bg-red-600 rounded-full" style={{ width: '20%' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm">Neutral</span>
                                            <span className="text-sm">12%</span>
                                        </div>
                                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                                            <div className="h-full bg-gray-600 rounded-full" style={{ width: '12%' }} />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground mt-4">
                                    Based on analysis of 10,000+ trader sentiment across multiple platforms
                                </p>
                            </Card>

                            {/* News Sources */}
                            <Card className="p-6">
                                <h3 className="text-xl mb-4">News Sources</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Bloomberg</span>
                                        <Badge variant="secondary">12 articles</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Reuters</span>
                                        <Badge variant="secondary">8 articles</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Economic Times</span>
                                        <Badge variant="secondary">15 articles</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Moneycontrol</span>
                                        <Badge variant="secondary">10 articles</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-muted-foreground">CNBC</span>
                                        <Badge variant="secondary">6 articles</Badge>
                                    </div>
                                </div>
                            </Card>

                            {/* Auto-Refresh Toggle */}
                            <Card className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="mb-1">Auto-Refresh</h4>
                                        <p className="text-sm text-muted-foreground">Updates every 30 seconds</p>
                                    </div>
                                    <Button
                                        variant={autoRefresh ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setAutoRefresh(!autoRefresh)}
                                    >
                                        {autoRefresh ? "ON" : "OFF"}
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Market Correlation Insights */}
            <section className="py-12 px-4 bg-muted/30">
                <div className="container mx-auto">
                    <h2 className="text-3xl mb-8 text-center">Market Correlation Insights</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Globe className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl mb-2">US-India Correlation</h3>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        Strong positive correlation of 0.78. US market movements typically influence Indian indices within 24 hours.
                                    </p>
                                    <Badge className="bg-green-100 text-green-900 border-green-200">
                                        High Correlation
                                    </Badge>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl mb-2">Oil Price Impact</h3>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        Negative correlation of -0.65. Rising crude prices typically pressure Indian markets due to import dependency.
                                    </p>
                                    <Badge className="bg-orange-100 text-orange-900 border-orange-200">
                                        Inverse Relationship
                                    </Badge>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Activity className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl mb-2">China-India Trade</h3>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        Moderate correlation of 0.52. China's economic health affects Indian manufacturing and export sectors.
                                    </p>
                                    <Badge className="bg-blue-100 text-blue-900 border-blue-200">
                                        Moderate Correlation
                                    </Badge>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}


export default News;