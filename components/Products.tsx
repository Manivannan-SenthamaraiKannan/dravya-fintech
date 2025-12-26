"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
    Smartphone,
    Monitor,
    Tablet,
    TrendingUp,
    PieChart,
    Wallet,
    Shield,
    Zap,
    BarChart3,
    Globe,
    Code,
    Bot,
    CreditCard,
    Building2,
    GraduationCap,
    FileText,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    LineChart,
    Calculator,
    Newspaper,
    HeadphonesIcon,
    Lock,
    Users,
    Coins,
    IndianRupee,
    Award,
    Target,
    Activity
} from "lucide-react";

interface Product {
    id: string;
    name: string;
    description: string;
    category: "trading" | "investment" | "tools" | "services";
    features: string[];
    icon: any;
    badge?: string;
    pricing?: string;
    isPopular?: boolean;
}

const products: Product[] = [
    // Trading Platforms
    {
        id: "p1",
        name: "Dravya Web Trading",
        description: "Advanced web-based trading platform with real-time market data, advanced charting, and AI-powered trade signals.",
        category: "trading",
        features: [
            "Real-time NSE/BSE quotes",
            "Advanced charting with 100+ indicators",
            "AI-powered trade signals",
            "One-click order placement",
            "Multi-watchlist support",
            "Portfolio analytics"
        ],
        icon: Monitor,
        badge: "Most Popular",
        pricing: "Free",
        isPopular: true
    },
    {
        id: "p2",
        name: "Dravya Mobile App",
        description: "Trade on-the-go with our feature-rich mobile application for iOS and Android devices.",
        category: "trading",
        features: [
            "Instant notifications",
            "Biometric authentication",
            "Voice-enabled trading",
            "Quick order modification",
            "Market depth analysis",
            "Offline portfolio tracking"
        ],
        icon: Smartphone,
        pricing: "Free"
    },
    {
        id: "p3",
        name: "Dravya Pro Desktop",
        description: "Professional desktop trading terminal for serious traders with lightning-fast execution.",
        category: "trading",
        features: [
            "Sub-second order execution",
            "Multi-monitor support",
            "Advanced option chain",
            "Algorithmic trading",
            "Level 2 market data",
            "Custom strategy builder"
        ],
        icon: Monitor,
        badge: "Pro",
        pricing: "₹999/month"
    },

    // Investment Products
    {
        id: "p4",
        name: "Smart Investment Platform",
        description: "Diversified investment solutions including stocks, mutual funds, ETFs, and more.",
        category: "investment",
        features: [
            "5000+ stocks across NSE/BSE",
            "2000+ mutual fund schemes",
            "ETFs and Index Funds",
            "IPO applications",
            "Sovereign Gold Bonds",
            "Direct mutual funds - Zero commission"
        ],
        icon: PieChart,
        pricing: "Zero brokerage on delivery"
    },
    {
        id: "p5",
        name: "SIP Investments",
        description: "Systematic Investment Plans in stocks, mutual funds, and digital gold starting from ₹100.",
        category: "investment",
        features: [
            "Start SIP from ₹100",
            "Stock SIP - Build equity portfolio",
            "Mutual Fund SIP",
            "Digital Gold SIP",
            "Auto-debit facility",
            "Flexible dates (1st-28th)"
        ],
        icon: Coins,
        pricing: "Free setup"
    },
    {
        id: "p6",
        name: "Portfolio Management",
        description: "AI-powered portfolio tracking, rebalancing recommendations, and performance analytics.",
        category: "investment",
        features: [
            "Real-time P&L tracking",
            "Asset allocation analysis",
            "Automated rebalancing alerts",
            "Tax harvesting suggestions",
            "Performance benchmarking",
            "Goal-based investing"
        ],
        icon: BarChart3,
        badge: "AI-Powered",
        pricing: "Free"
    },

    // Tools & Technology
    {
        id: "p7",
        name: "Trading APIs",
        description: "RESTful and WebSocket APIs for algorithmic trading and custom application development.",
        category: "tools",
        features: [
            "RESTful APIs",
            "WebSocket live data feed",
            "Historical data access",
            "Order management APIs",
            "Portfolio APIs",
            "Comprehensive documentation"
        ],
        icon: Code,
        pricing: "₹2,000/month"
    },
    {
        id: "p8",
        name: "Algo Trading Platform",
        description: "Build, backtest, and deploy automated trading strategies with our algorithmic trading platform.",
        category: "tools",
        features: [
            "Visual strategy builder",
            "100+ pre-built strategies",
            "Advanced backtesting engine",
            "Paper trading mode",
            "Cloud deployment",
            "Risk management tools"
        ],
        icon: Bot,
        badge: "Beta",
        pricing: "₹4,999/month"
    },
    {
        id: "p9",
        name: "Market Research & Analysis",
        description: "In-depth research reports, technical analysis, and market insights from expert analysts.",
        category: "tools",
        features: [
            "Daily market reports",
            "Stock recommendations",
            "Sector analysis",
            "Technical charts with targets",
            "Fundamental analysis",
            "Earnings call insights"
        ],
        icon: FileText,
        pricing: "Free for clients"
    },
    {
        id: "p10",
        name: "Options Strategy Builder",
        description: "Advanced options trading platform with strategy builder, Greeks calculator, and payoff analysis.",
        category: "tools",
        features: [
            "50+ option strategies",
            "Greeks calculator",
            "Payoff graph visualization",
            "Max profit/loss calculator",
            "Volatility analysis",
            "Options chain analysis"
        ],
        icon: Calculator,
        pricing: "Free"
    },

    // Services
    {
        id: "p11",
        name: "Instant Account Opening",
        description: "Open your demat and trading account in minutes with 100% digital, paperless process.",
        category: "services",
        features: [
            "PAN verification",
            "Aadhaar-based eKYC",
            "DigiLocker integration",
            "Video KYC support",
            "Instant account activation",
            "Zero account opening charges"
        ],
        icon: Wallet,
        pricing: "Free"
    },
    {
        id: "p12",
        name: "Investment Advisory",
        description: "Personalized investment advice from SEBI-registered advisors based on your financial goals.",
        category: "services",
        features: [
            "One-on-one consultation",
            "Goal-based planning",
            "Risk profiling",
            "Portfolio recommendations",
            "Quarterly review calls",
            "Tax planning guidance"
        ],
        icon: Users,
        badge: "Premium",
        pricing: "Starting ₹9,999/year"
    },
    {
        id: "p13",
        name: "Margin Trading Facility",
        description: "Trade with additional leverage through our margin trading facility with competitive interest rates.",
        category: "services",
        features: [
            "Up to 4x leverage on delivery",
            "Competitive interest rates",
            "Flexible repayment",
            "No hidden charges",
            "Instant approval",
            "Pledge securities for margin"
        ],
        icon: TrendingUp,
        pricing: "Interest from 0.03%/day"
    },
    {
        id: "p14",
        name: "IPO Investments",
        description: "Apply for IPOs directly from your trading account with UPI-based payment.",
        category: "services",
        features: [
            "Upcoming IPO listings",
            "Company research reports",
            "One-click IPO application",
            "UPI-based payment",
            "IPO allotment tracking",
            "Historical IPO performance"
        ],
        icon: Award,
        pricing: "Free"
    }
];

export function Products() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const filteredProducts = selectedCategory === "all"
        ? products
        : products.filter(p => p.category === selectedCategory);

    const tradingProducts = products.filter(p => p.category === "trading");
    const investmentProducts = products.filter(p => p.category === "investment");
    const toolsProducts = products.filter(p => p.category === "tools");
    const servicesProducts = products.filter(p => p.category === "services");

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-background to-blue-50 -z-10" />

                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <Badge className="inline-flex items-center gap-2 bg-purple-100 text-purple-900 border-purple-200">
                            <Sparkles className="w-4 h-4" />
                            Complete Trading & Investment Ecosystem
                        </Badge>

                        <h1 className="text-5xl md:text-6xl">
                            Our Products & Services
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to trade, invest, and grow your wealth -
                            all in one powerful platform powered by cutting-edge technology.
                        </p>

                        <div className="flex flex-wrap justify-center gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-3xl">15+</div>
                                <p className="text-sm text-muted-foreground">Products</p>
                            </div>
                            <div className="h-12 w-px bg-border hidden sm:block" />
                            <div className="text-center">
                                <div className="text-3xl">Zero</div>
                                <p className="text-sm text-muted-foreground">Account Charges</p>
                            </div>
                            <div className="h-12 w-px bg-border hidden sm:block" />
                            <div className="text-center">
                                <div className="text-3xl">24/7</div>
                                <p className="text-sm text-muted-foreground">Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Tabs */}
            <section className="py-8 px-4 border-y bg-muted/30">
                <div className="container mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        <Button
                            variant={selectedCategory === "all" ? "default" : "outline"}
                            onClick={() => setSelectedCategory("all")}
                        >
                            All Products
                        </Button>
                        <Button
                            variant={selectedCategory === "trading" ? "default" : "outline"}
                            onClick={() => setSelectedCategory("trading")}
                            className="gap-2"
                        >
                            <Monitor className="w-4 h-4" />
                            Trading Platforms
                        </Button>
                        <Button
                            variant={selectedCategory === "investment" ? "default" : "outline"}
                            onClick={() => setSelectedCategory("investment")}
                            className="gap-2"
                        >
                            <PieChart className="w-4 h-4" />
                            Investment Products
                        </Button>
                        <Button
                            variant={selectedCategory === "tools" ? "default" : "outline"}
                            onClick={() => setSelectedCategory("tools")}
                            className="gap-2"
                        >
                            <Code className="w-4 h-4" />
                            Tools & APIs
                        </Button>
                        <Button
                            variant={selectedCategory === "services" ? "default" : "outline"}
                            onClick={() => setSelectedCategory("services")}
                            className="gap-2"
                        >
                            <Shield className="w-4 h-4" />
                            Services
                        </Button>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => {
                            const IconComponent = product.icon;
                            return (
                                <Card
                                    key={product.id}
                                    className={`p-6 space-y-4 hover:shadow-xl transition-all ${product.isPopular ? 'border-2 border-purple-200 bg-purple-50/50' : ''
                                        }`}
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-start justify-between">
                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                                                <IconComponent className="w-6 h-6 text-white" />
                                            </div>
                                            {product.badge && (
                                                <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                                                    {product.badge}
                                                </Badge>
                                            )}
                                        </div>

                                        <div>
                                            <h3 className="text-2xl mb-2">{product.name}</h3>
                                            <p className="text-muted-foreground text-sm">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        {product.features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-2 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4 border-t space-y-3">
                                        {product.pricing && (
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-muted-foreground">Pricing</span>
                                                <span className="font-medium">{product.pricing}</span>
                                            </div>
                                        )}

                                        <Button className="w-full gap-2">
                                            Get Started
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 px-4 bg-muted/30">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4">Why Choose Dravya?</h2>
                        <p className="text-xl text-muted-foreground">
                            Industry-leading features that set us apart
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="p-6 text-center space-y-3">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                                <Zap className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl">Lightning Fast</h3>
                            <p className="text-sm text-muted-foreground">
                                Sub-second order execution with 99.9% uptime guarantee
                            </p>
                        </Card>

                        <Card className="p-6 text-center space-y-3">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl">Secure & Safe</h3>
                            <p className="text-sm text-muted-foreground">
                                Bank-grade security with 256-bit encryption and 2FA
                            </p>
                        </Card>

                        <Card className="p-6 text-center space-y-3">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                                <IndianRupee className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl">Zero Charges</h3>
                            <p className="text-sm text-muted-foreground">
                                No account opening fees, AMC, or hidden charges
                            </p>
                        </Card>

                        <Card className="p-6 text-center space-y-3">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                                <HeadphonesIcon className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl">24/7 Support</h3>
                            <p className="text-sm text-muted-foreground">
                                Round-the-clock customer support via call, chat, and email
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4">Competitive Pricing</h2>
                        <p className="text-xl text-muted-foreground">
                            Best-in-class brokerage charges
                        </p>
                    </div>

                    <Card className="overflow-hidden max-w-4xl mx-auto">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-muted">
                                    <tr>
                                        <th className="text-left p-4">Product Type</th>
                                        <th className="text-left p-4">Dravya</th>
                                        <th className="text-left p-4">Industry Average</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-4">Equity Delivery</td>
                                        <td className="p-4">
                                            <Badge className="bg-green-100 text-green-900 border-green-200">
                                                Zero Brokerage
                                            </Badge>
                                        </td>
                                        <td className="p-4">0.3% - 0.5%</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4">Equity Intraday</td>
                                        <td className="p-4">₹20 or 0.03%</td>
                                        <td className="p-4">0.05% - 0.1%</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4">Equity Futures</td>
                                        <td className="p-4">₹20 or 0.03%</td>
                                        <td className="p-4">0.05% - 0.1%</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4">Equity Options</td>
                                        <td className="p-4">₹20 per order</td>
                                        <td className="p-4">₹50 - ₹100 per order</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-4">Mutual Funds</td>
                                        <td className="p-4">
                                            <Badge className="bg-green-100 text-green-900 border-green-200">
                                                Zero Commission
                                            </Badge>
                                        </td>
                                        <td className="p-4">0.5% - 2%</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4">Account Opening</td>
                                        <td className="p-4">
                                            <Badge className="bg-green-100 text-green-900 border-green-200">
                                                Free
                                            </Badge>
                                        </td>
                                        <td className="p-4">₹300 - ₹500</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Card>

                    <p className="text-center text-sm text-muted-foreground mt-6">
                        * Regulatory charges (STT, Exchange transaction charges, GST, etc.) apply as per actuals
                    </p>
                </div>
            </section>

            {/* Integration & APIs */}
            <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <Badge className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 border-blue-200 mb-4">
                                <Code className="w-4 h-4" />
                                For Developers
                            </Badge>
                            <h2 className="text-4xl mb-4">Build Your Trading Apps</h2>
                            <p className="text-xl text-muted-foreground">
                                Powerful APIs and SDKs for algorithmic trading and custom applications
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <Card className="p-6 text-center space-y-3">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                                    <Code className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-xl">RESTful APIs</h3>
                                <p className="text-sm text-muted-foreground">
                                    Complete REST API for orders, positions, and holdings
                                </p>
                            </Card>

                            <Card className="p-6 text-center space-y-3">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                                    <Activity className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-xl">WebSocket</h3>
                                <p className="text-sm text-muted-foreground">
                                    Real-time market data streaming with WebSocket
                                </p>
                            </Card>

                            <Card className="p-6 text-center space-y-3">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                                    <FileText className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-xl">Documentation</h3>
                                <p className="text-sm text-muted-foreground">
                                    Comprehensive docs with code samples and tutorials
                                </p>
                            </Card>
                        </div>

                        <div className="text-center mt-8">
                            <Button size="lg" className="gap-2">
                                Explore APIs
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <Card className="p-12 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <h2 className="text-4xl">Ready to Get Started?</h2>
                            <p className="text-xl opacity-90">
                                Open your free trading and demat account in minutes.
                                Start trading with zero account opening charges.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button size="lg" variant="secondary" className="gap-2">
                                    Open Free Account
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                                    Schedule a Demo
                                </Button>
                            </div>
                            <div className="flex items-center justify-center gap-6 pt-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>100% Paperless</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Instant Activation</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Zero Charges</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}

export default Products;