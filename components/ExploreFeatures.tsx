import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
    Sparkles,
    TrendingUp,
    Shield,
    Zap,
    Brain,
    BarChart3,
    PieChart,
    LineChart,
    Target,
    Bell,
    Lock,
    Smartphone,
    Monitor,
    Activity,
    TrendingDown,
    CircleDot,
    ArrowRight,
    CheckCircle2,
    Clock,
    IndianRupee,
    ChevronRight,
    Info,
    Play,
    Download,
    RefreshCw,
    Gauge,
    AlertTriangle,
    Calculator,
    FileText,
    Search,
    Filter,
    MessageSquare,
    Video,
    BookOpen,
    Award,
    Users,
    Globe,
    Wallet,
    CreditCard,
    Repeat,
    Layers,
    Maximize2,
    Eye,
    Sliders,
    BarChart,
    CandlestickChart,
    GitCompare,
    ArrowUpDown,
    Percent,
    Timer,
    CheckCheck,
    Rocket,
    Fingerprint,
    Building2,
    Home,
    User,
    Upload,
    ChevronDown
} from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ExploreFeatures({ setCurrentPage }: { setCurrentPage?: (page: string) => void }) {
    const [activeFeature, setActiveFeature] = useState<number | null>(null);
    const [activeStep, setActiveStep] = useState<number | null>(null);

    const coreFeatures = [
        {
            icon: Brain,
            title: "AI-Powered Predictions",
            description: "Machine learning algorithms analyze millions of data points to provide accurate buy/sell signals",
            color: "from-purple-500 to-pink-600",
            features: [
                "Real-time market sentiment analysis",
                "Pattern recognition across 5000+ stocks",
                "Historical data analysis for trend prediction",
                "News impact assessment on stock prices",
                "Automated signal generation with 85% accuracy"
            ]
        },
        {
            icon: Target,
            title: "Smart Portfolio Management",
            description: "AI-driven portfolio optimization that automatically rebalances based on market conditions",
            color: "from-blue-500 to-cyan-600",
            features: [
                "Automated portfolio rebalancing",
                "Risk-adjusted returns optimization",
                "Diversification recommendations",
                "Tax-loss harvesting strategies",
                "Goal-based investment planning"
            ]
        },
        {
            icon: Shield,
            title: "Advanced Risk Management",
            description: "Comprehensive risk assessment tools to protect your investments",
            color: "from-green-500 to-emerald-600",
            features: [
                "Real-time risk score calculation",
                "Automated stop-loss placement",
                "Position sizing recommendations",
                "Portfolio volatility monitoring",
                "Margin utilization alerts"
            ]
        },
        {
            icon: Bell,
            title: "Intelligent Alerts",
            description: "Get notified instantly about important market movements and opportunities",
            color: "from-orange-500 to-red-600",
            features: [
                "Price movement alerts",
                "AI signal notifications",
                "News and announcements",
                "Technical indicator alerts",
                "Custom watchlist notifications"
            ]
        },
        {
            icon: BarChart3,
            title: "Advanced Charting",
            description: "Professional-grade charting tools with 100+ technical indicators",
            color: "from-indigo-500 to-purple-600",
            features: [
                "100+ technical indicators",
                "Multiple chart types (Candlestick, Line, Bar)",
                "Drawing tools and annotations",
                "Multi-timeframe analysis",
                "Chart pattern recognition"
            ]
        },
        {
            icon: Zap,
            title: "Lightning-Fast Execution",
            description: "Execute trades in milliseconds with our high-performance infrastructure",
            color: "from-yellow-500 to-orange-600",
            features: [
                "Sub-second order execution",
                "99.9% uptime guarantee",
                "Direct market access",
                "Low latency connectivity",
                "Bracket and cover orders"
            ]
        }
    ];

    const tradingTools = [
        {
            icon: Calculator,
            title: "Options Calculator",
            description: "Calculate Greeks, P&L, and optimal strategies",
            benefits: ["Greeks calculation", "Payoff charts", "Strategy builder"]
        },
        {
            icon: CandlestickChart,
            title: "Technical Screener",
            description: "Scan stocks based on technical parameters",
            benefits: ["100+ scan criteria", "Custom filters", "Real-time results"]
        },
        {
            icon: FileText,
            title: "Fundamental Analysis",
            description: "Deep dive into company financials",
            benefits: ["P&E ratios", "Quarterly results", "Peer comparison"]
        },
        {
            icon: GitCompare,
            title: "Stock Comparison",
            description: "Compare multiple stocks side by side",
            benefits: ["Multi-stock analysis", "Visual comparisons", "Export reports"]
        },
        {
            icon: Activity,
            title: "Market Depth",
            description: "View real-time order book data",
            benefits: ["Level 2 data", "Bid-ask spread", "Order flow analysis"]
        },
        {
            icon: Timer,
            title: "Algo Trading",
            description: "Automate your trading strategies",
            benefits: ["Strategy backtesting", "Auto-execution", "Performance tracking"]
        }
    ];

    const platformFeatures = [
        {
            icon: Smartphone,
            title: "Mobile Trading",
            description: "Full-featured mobile app for iOS and Android",
            highlights: ["Biometric login", "Quick order placement", "Real-time notifications", "Offline watchlists"]
        },
        {
            icon: Monitor,
            title: "Web Platform",
            description: "Advanced web-based trading terminal",
            highlights: ["Multi-monitor support", "Customizable layouts", "Cloud sync", "Browser-based, no download"]
        },
        {
            icon: Layers,
            title: "Multiple Watchlists",
            description: "Organize stocks by sectors, strategies, or custom groups",
            highlights: ["Unlimited watchlists", "Quick add/remove", "Sync across devices", "Share with community"]
        },
        {
            icon: Download,
            title: "Reports & Analytics",
            description: "Comprehensive trading reports and tax statements",
            highlights: ["P&L statements", "Tax reports", "Trade history", "Performance analytics"]
        }
    ];

    const securityFeatures = [
        {
            icon: Lock,
            title: "Bank-Grade Security",
            description: "256-bit SSL encryption for all transactions"
        },
        {
            icon: Fingerprint,
            title: "Biometric Authentication",
            description: "Face ID, Touch ID, and fingerprint login"
        },
        {
            icon: Shield,
            title: "2-Factor Authentication",
            description: "Additional security layer with OTP verification"
        },
        {
            icon: Eye,
            title: "Session Management",
            description: "Monitor and control active login sessions"
        },
        {
            icon: Building2,
            title: "SEBI Regulated",
            description: "Fully compliant with Indian market regulations"
        },
        {
            icon: Wallet,
            title: "Segregated Accounts",
            description: "Client funds kept separate from company assets"
        }
    ];

    const aiCapabilities = [
        {
            title: "Sentiment Analysis",
            description: "AI analyzes news, social media, and market data to gauge market sentiment",
            icon: MessageSquare,
            accuracy: "90%"
        },
        {
            title: "Price Prediction",
            description: "Machine learning models predict short-term price movements",
            icon: TrendingUp,
            accuracy: "85%"
        },
        {
            title: "Risk Assessment",
            description: "Real-time portfolio risk calculation and recommendations",
            icon: AlertTriangle,
            accuracy: "95%"
        },
        {
            title: "Pattern Recognition",
            description: "Identifies chart patterns and technical formations automatically",
            icon: Search,
            accuracy: "88%"
        }
    ];

    const usageSteps = [
        {
            step: 1,
            title: "Getting Started",
            icon: Rocket,
            duration: "5 mins",
            description: "Set up your account and preferences",
            details: [
                "Complete your profile setup",
                "Link your bank account for fund transfers",
                "Set trading preferences (equity, F&O, etc.)",
                "Configure notification settings",
                "Choose your default chart settings"
            ],
            color: "from-blue-500 to-blue-600"
        },
        {
            step: 2,
            title: "Add Funds",
            icon: Wallet,
            duration: "2 mins",
            description: "Transfer money to your trading account",
            details: [
                "Instant fund transfer via UPI",
                "NEFT/RTGS from linked bank account",
                "Net banking integration",
                "Payment gateway for cards",
                "View real-time fund status"
            ],
            color: "from-green-500 to-green-600"
        },
        {
            step: 3,
            title: "Create Watchlists",
            icon: Eye,
            duration: "5 mins",
            description: "Organize stocks you want to track",
            details: [
                "Search and add stocks to watchlist",
                "Create multiple watchlists by themes",
                "Use AI recommendations for stock selection",
                "Set price alerts on watchlist stocks",
                "Sync watchlists across all devices"
            ],
            color: "from-purple-500 to-purple-600"
        },
        {
            step: 4,
            title: "Analyze Stocks",
            icon: Search,
            duration: "10 mins",
            description: "Use AI tools to research and analyze",
            details: [
                "View AI-generated buy/sell signals",
                "Check technical indicators and charts",
                "Review fundamental data and ratios",
                "Read AI sentiment analysis reports",
                "Compare with peer stocks"
            ],
            color: "from-orange-500 to-orange-600"
        },
        {
            step: 5,
            title: "Place Your First Trade",
            icon: TrendingUp,
            duration: "2 mins",
            description: "Execute buy or sell orders",
            details: [
                "Select stock from watchlist or search",
                "Choose order type (Market/Limit/SL)",
                "Enter quantity and price",
                "Review AI risk assessment",
                "Confirm and execute trade"
            ],
            color: "from-pink-500 to-pink-600"
        },
        {
            step: 6,
            title: "Monitor Portfolio",
            icon: PieChart,
            duration: "Ongoing",
            description: "Track your investments in real-time",
            details: [
                "View live P&L across all positions",
                "Get AI alerts for significant movements",
                "Access portfolio performance metrics",
                "Review suggested rebalancing actions",
                "Track returns vs. benchmark indices"
            ],
            color: "from-cyan-500 to-cyan-600"
        },
        {
            step: 7,
            title: "Use Advanced Features",
            icon: Sliders,
            duration: "As needed",
            description: "Explore professional trading tools",
            details: [
                "Create custom technical screeners",
                "Backtest your trading strategies",
                "Use options calculator for F&O",
                "Set up bracket and cover orders",
                "Access advanced charting tools"
            ],
            color: "from-indigo-500 to-indigo-600"
        },
        {
            step: 8,
            title: "Review & Optimize",
            icon: BarChart,
            duration: "Weekly",
            description: "Analyze performance and improve",
            details: [
                "Review trade history and patterns",
                "Analyze winning vs. losing trades",
                "Get AI suggestions for improvement",
                "Download tax and P&L reports",
                "Adjust strategy based on insights"
            ],
            color: "from-red-500 to-red-600"
        }
    ];

    const pricingComparison = [
        { feature: "Equity Delivery", tradeai: "₹0", competitor: "₹20" },
        { feature: "Intraday", tradeai: "₹20", competitor: "₹20" },
        { feature: "F&O", tradeai: "₹20", competitor: "₹20" },
        { feature: "Account Opening", tradeai: "Free", competitor: "₹300-500" },
        { feature: "AMC", tradeai: "Free", competitor: "₹300-600" },
        { feature: "AI Signals", tradeai: "Included", competitor: "₹999/mo" }
    ];

    return (
        <div className="min-h-screen pt-20 px-4 py-12">
            {/* Hero Section */}
            <section className="container mx-auto mb-16">
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    <Badge className="inline-flex items-center gap-2 bg-purple-100 text-purple-900 border-purple-200 text-lg px-4 py-2">
                        <Sparkles className="w-5 h-5" />
                        Complete Platform Features
                    </Badge>

                    <h1 className="text-5xl md:text-6xl">
                        Everything You Need to Trade Successfully
                    </h1>

                    <p className="text-xl text-muted-foreground">
                        Discover powerful AI-driven features, advanced trading tools, and professional-grade analytics that give you an edge in the market.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                        <Button
                            size="lg"
                            className="gap-2"
                            onClick={() => setCurrentPage && setCurrentPage("startfreetrial")}
                        >
                            Start Free Trial
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="gap-2"
                            onClick={() => setCurrentPage && setCurrentPage("watchdemo")}
                        >
                            <Play className="w-5 h-5" />
                            Watch Demo
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 pt-8">
                        <div className="text-center">
                            <div className="text-3xl mb-2">100+</div>
                            <p className="text-sm text-muted-foreground">Trading Tools</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">5000+</div>
                            <p className="text-sm text-muted-foreground">Stocks Covered</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">99.9%</div>
                            <p className="text-sm text-muted-foreground">Uptime</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">24/7</div>
                            <p className="text-sm text-muted-foreground">Support</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Section */}
            <section className="container mx-auto mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl mb-4">Core AI-Powered Features</h2>
                    <p className="text-xl text-muted-foreground">
                        Cutting-edge technology that sets TradeAI apart
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {coreFeatures.map((feature, index) => {
                        const IconComponent = feature.icon;
                        const isActive = activeFeature === index;

                        return (
                            <Card
                                key={index}
                                className={`p-6 cursor-pointer transition-all ${isActive ? "shadow-xl border-2 border-primary" : "hover:shadow-lg"
                                    }`}
                                onClick={() => setActiveFeature(isActive ? null : index)}
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                                    <IconComponent className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-2xl mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground mb-4">{feature.description}</p>

                                {isActive && (
                                    <div className="mt-4 pt-4 border-t space-y-2">
                                        {feature.features.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted-foreground">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <Button variant="ghost" size="sm" className="mt-4 w-full">
                                    {isActive ? "Show Less" : "Learn More"}
                                    <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${isActive ? "rotate-180" : ""}`} />
                                </Button>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* AI Capabilities */}
            <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-background to-blue-50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 text-base px-4 py-2 bg-purple-100 text-purple-900 border-purple-200">
                            <Brain className="w-4 h-4 mr-2" />
                            Artificial Intelligence
                        </Badge>
                        <h2 className="text-4xl mb-4">AI-Powered Intelligence</h2>
                        <p className="text-xl text-muted-foreground">
                            Machine learning models working 24/7 to give you trading advantages
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {aiCapabilities.map((capability, index) => {
                            const IconComponent = capability.icon;
                            return (
                                <Card key={index} className="p-6 text-center hover:shadow-xl transition-all group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl mb-3">{capability.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">{capability.description}</p>
                                    <Badge className="bg-green-100 text-green-900">
                                        {capability.accuracy} Accuracy
                                    </Badge>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Trading Tools */}
            <section className="container mx-auto mb-16 mt-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl mb-4">Professional Trading Tools</h2>
                    <p className="text-xl text-muted-foreground">
                        Advanced tools used by professional traders, now available to everyone
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tradingTools.map((tool, index) => {
                        const IconComponent = tool.icon;
                        return (
                            <Card key={index} className="p-6 hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                                    <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl mb-3">{tool.title}</h3>
                                <p className="text-muted-foreground mb-4">{tool.description}</p>
                                <ul className="space-y-2">
                                    {tool.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Platform Features */}
            <section className="py-16 px-4 bg-muted/30">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4">Multi-Platform Access</h2>
                        <p className="text-xl text-muted-foreground">
                            Trade seamlessly across all your devices
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {platformFeatures.map((platform, index) => {
                            const IconComponent = platform.icon;
                            return (
                                <Card key={index} className="p-8 hover:shadow-xl transition-all">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <IconComponent className="w-7 h-7 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl mb-3">{platform.title}</h3>
                                            <p className="text-muted-foreground mb-4">{platform.description}</p>
                                            <div className="space-y-2">
                                                {platform.highlights.map((highlight, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-sm">
                                                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                                                        {highlight}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Security Features */}
            <section className="container mx-auto mb-16">
                <div className="text-center mb-12">
                    <Badge className="mb-4 text-base px-4 py-2 bg-green-100 text-green-900 border-green-200">
                        <Shield className="w-4 h-4 mr-2" />
                        Bank-Grade Security
                    </Badge>
                    <h2 className="text-4xl mb-4">Your Security is Our Priority</h2>
                    <p className="text-xl text-muted-foreground">
                        Multiple layers of security to protect your investments
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {securityFeatures.map((security, index) => {
                        const IconComponent = security.icon;
                        return (
                            <Card key={index} className="p-6 hover:shadow-lg transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <IconComponent className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg mb-2">{security.title}</h3>
                                        <p className="text-sm text-muted-foreground">{security.description}</p>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                <Alert className="mt-8 bg-green-50 border-green-200">
                    <Shield className="w-4 h-4 text-green-600" />
                    <AlertDescription className="text-green-900">
                        <strong>100% Secure:</strong> Your funds are held in segregated accounts with NSE/BSE clearing corporations. TradeAI never has access to your money.
                    </AlertDescription>
                </Alert>
            </section>

            {/* Step-by-Step Usage Guide */}
            <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-background to-purple-50">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <Badge className="mb-4 text-base px-4 py-2 bg-blue-100 text-blue-900 border-blue-200">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Step-by-Step Guide
                        </Badge>
                        <h2 className="text-4xl mb-4">How to Use TradeAI Features</h2>
                        <p className="text-xl text-muted-foreground">
                            From setup to advanced trading - your complete journey
                        </p>
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        {usageSteps.map((step, index) => {
                            const IconComponent = step.icon;
                            const isActive = activeStep === step.step;

                            return (
                                <Card
                                    key={step.step}
                                    className={`overflow-hidden transition-all cursor-pointer ${isActive ? "shadow-lg border-2 border-primary" : "hover:shadow-md"
                                        }`}
                                    onClick={() => setActiveStep(isActive ? null : step.step)}
                                >
                                    <div className="p-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <Badge className="text-base px-3">Step {step.step}</Badge>
                                                    <h3 className="text-2xl">{step.title}</h3>
                                                </div>
                                                <p className="text-muted-foreground mb-2">{step.description}</p>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <Clock className="w-4 h-4" />
                                                    {step.duration}
                                                </div>
                                            </div>

                                            <ChevronRight className={`w-6 h-6 text-muted-foreground transition-transform ${isActive ? "rotate-90" : ""}`} />
                                        </div>

                                        {isActive && (
                                            <div className="mt-6 pt-6 border-t">
                                                <h4 className="text-lg mb-4 flex items-center gap-2">
                                                    <Info className="w-5 h-5 text-primary" />
                                                    What you'll do:
                                                </h4>
                                                <ul className="space-y-3">
                                                    {step.details.map((detail, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                            <span className="text-muted-foreground">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            );
                        })}
                    </div>

                    <Card className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 max-w-4xl mx-auto">
                        <div className="flex items-start gap-4">
                            <CheckCheck className="w-8 h-8 text-blue-600 flex-shrink-0" />
                            <div>
                                <h3 className="text-xl mb-2">You're All Set!</h3>
                                <p className="text-muted-foreground">
                                    Once you complete these steps, you'll have full access to all TradeAI features. Our AI will continuously learn from your trading patterns to provide personalized recommendations.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Pricing Comparison */}
            <section className="container mx-auto mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl mb-4">Why TradeAI is Better Value</h2>
                    <p className="text-xl text-muted-foreground">
                        Compare our pricing with traditional brokers
                    </p>
                </div>

                <Card className="max-w-3xl mx-auto overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="text-left p-4">Feature</th>
                                    <th className="text-center p-4 bg-primary text-primary-foreground">TradeAI</th>
                                    <th className="text-center p-4">Traditional Brokers</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricingComparison.map((item, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="p-4">{item.feature}</td>
                                        <td className="p-4 text-center bg-green-50">
                                            <span className="font-semibold text-green-600">{item.tradeai}</span>
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className="text-muted-foreground">{item.competitor}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 text-center">
                        <p className="text-lg">
                            <span className="font-semibold">Save over ₹15,000/year</span> compared to traditional brokers!
                        </p>
                    </div>
                </Card>
            </section>

            {/* Feature Categories Tabs */}
            <section className="container mx-auto mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl mb-4">Explore by Category</h2>
                    <p className="text-xl text-muted-foreground">
                        Browse features organized by trading needs
                    </p>
                </div>

                <Tabs defaultValue="analysis" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto mb-8">
                        <TabsTrigger value="analysis">Analysis</TabsTrigger>
                        <TabsTrigger value="execution">Execution</TabsTrigger>
                        <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
                        <TabsTrigger value="reports">Reports</TabsTrigger>
                    </TabsList>

                    <TabsContent value="analysis" className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card className="p-6">
                                <LineChart className="w-8 h-8 text-blue-600 mb-4" />
                                <h3 className="text-xl mb-2">Technical Analysis</h3>
                                <p className="text-sm text-muted-foreground">100+ indicators, patterns, and drawing tools</p>
                            </Card>
                            <Card className="p-6">
                                <FileText className="w-8 h-8 text-purple-600 mb-4" />
                                <h3 className="text-xl mb-2">Fundamental Data</h3>
                                <p className="text-sm text-muted-foreground">Complete financial statements and ratios</p>
                            </Card>
                            <Card className="p-6">
                                <Brain className="w-8 h-8 text-pink-600 mb-4" />
                                <h3 className="text-xl mb-2">AI Insights</h3>
                                <p className="text-sm text-muted-foreground">Machine learning-powered predictions</p>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="execution" className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card className="p-6">
                                <Zap className="w-8 h-8 text-yellow-600 mb-4" />
                                <h3 className="text-xl mb-2">Quick Orders</h3>
                                <p className="text-sm text-muted-foreground">One-click trading from charts and watchlists</p>
                            </Card>
                            <Card className="p-6">
                                <Layers className="w-8 h-8 text-green-600 mb-4" />
                                <h3 className="text-xl mb-2">Advanced Orders</h3>
                                <p className="text-sm text-muted-foreground">Bracket, cover, and GTT orders</p>
                            </Card>
                            <Card className="p-6">
                                <RefreshCw className="w-8 h-8 text-orange-600 mb-4" />
                                <h3 className="text-xl mb-2">Algo Trading</h3>
                                <p className="text-sm text-muted-foreground">Automated strategy execution</p>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="monitoring" className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card className="p-6">
                                <Activity className="w-8 h-8 text-red-600 mb-4" />
                                <h3 className="text-xl mb-2">Live Positions</h3>
                                <p className="text-sm text-muted-foreground">Real-time P&L tracking</p>
                            </Card>
                            <Card className="p-6">
                                <Bell className="w-8 h-8 text-blue-600 mb-4" />
                                <h3 className="text-xl mb-2">Smart Alerts</h3>
                                <p className="text-sm text-muted-foreground">Price, technical, and AI alerts</p>
                            </Card>
                            <Card className="p-6">
                                <PieChart className="w-8 h-8 text-purple-600 mb-4" />
                                <h3 className="text-xl mb-2">Portfolio View</h3>
                                <p className="text-sm text-muted-foreground">Holdings analysis and rebalancing</p>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="reports" className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card className="p-6">
                                <FileText className="w-8 h-8 text-green-600 mb-4" />
                                <h3 className="text-xl mb-2">P&L Reports</h3>
                                <p className="text-sm text-muted-foreground">Detailed profit and loss statements</p>
                            </Card>
                            <Card className="p-6">
                                <Download className="w-8 h-8 text-orange-600 mb-4" />
                                <h3 className="text-xl mb-2">Tax Reports</h3>
                                <p className="text-sm text-muted-foreground">Ready-to-file tax documents</p>
                            </Card>
                            <Card className="p-6">
                                <BarChart3 className="w-8 h-8 text-blue-600 mb-4" />
                                <h3 className="text-xl mb-2">Performance Analytics</h3>
                                <p className="text-sm text-muted-foreground">Win rate, drawdown, and metrics</p>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </section>

            {/* Final CTA */}
            <section className="container mx-auto">
                <Card className="p-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white text-center">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Sparkles className="w-12 h-12" />
                        </div>
                        <h2 className="text-4xl md:text-5xl">Ready to Experience TradeAI?</h2>
                        <p className="text-xl text-white/90">
                            Start your free trial today and get access to all premium features. No credit card required.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                            <Button
                                size="lg"
                                variant="secondary"
                                className="gap-2 text-lg px-8"
                                onClick={() => setCurrentPage && setCurrentPage("startfreetrial")}
                            >
                                Start 30-Day Free Trial
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2 text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
                                onClick={() => setCurrentPage && setCurrentPage("opendemataccount")}
                            >
                                Open Free Demat Account
                            </Button>
                        </div>
                        <div className="flex items-center justify-center gap-8 pt-6 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span>No Credit Card Required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span>Cancel Anytime</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span>Full Access</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>
        </div>
    );
}

export default ExploreFeatures;