"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import {
    TrendingUp,
    ArrowRight,
    Calendar,
    IndianRupee,
    Sparkles,
    PieChart,
    Coins,
    Repeat,
    Shield,
    Clock,
    Calculator,
    ChevronRight,
    CheckCircle2,
    Star,
    Zap
} from "lucide-react";

interface SIPOption {
    id: string;
    name: string;
    type: "stock" | "mutualfund" | "gold";
    category: string;
    returns: string;
    minSIP: number;
    rating?: number;
    risk: "Low" | "Medium" | "High";
    investors?: string;
}

const sipOptions: SIPOption[] = [
    // Mutual Funds
    {
        id: "mf1",
        name: "HDFC Flexi Cap Fund",
        type: "mutualfund",
        category: "Flexi Cap",
        returns: "15.2% p.a.",
        minSIP: 500,
        rating: 5,
        risk: "Medium",
        investors: "8.9L"
    },
    {
        id: "mf2",
        name: "Axis Bluechip Fund",
        type: "mutualfund",
        category: "Large Cap",
        returns: "14.8% p.a.",
        minSIP: 500,
        rating: 5,
        risk: "Low",
        investors: "8.2L"
    },
    {
        id: "mf3",
        name: "SBI Small Cap Fund",
        type: "mutualfund",
        category: "Small Cap",
        returns: "18.5% p.a.",
        minSIP: 500,
        rating: 5,
        risk: "High",
        investors: "4.3L"
    },
    {
        id: "mf4",
        name: "ICICI Prudential Equity & Debt",
        type: "mutualfund",
        category: "Hybrid",
        returns: "12.4% p.a.",
        minSIP: 500,
        rating: 4,
        risk: "Low",
        investors: "10.2L"
    },

    // Stocks
    {
        id: "st1",
        name: "Reliance Industries",
        type: "stock",
        category: "Large Cap",
        returns: "16.5% p.a.",
        minSIP: 1000,
        risk: "Medium",
        investors: "15.2L"
    },
    {
        id: "st2",
        name: "HDFC Bank",
        type: "stock",
        category: "Banking",
        returns: "14.2% p.a.",
        minSIP: 1000,
        risk: "Low",
        investors: "18.5L"
    },
    {
        id: "st3",
        name: "Infosys",
        type: "stock",
        category: "IT",
        returns: "15.8% p.a.",
        minSIP: 1000,
        risk: "Medium",
        investors: "12.8L"
    },
    {
        id: "st4",
        name: "TCS",
        type: "stock",
        category: "IT",
        returns: "17.2% p.a.",
        minSIP: 1000,
        risk: "Medium",
        investors: "14.3L"
    },

    // Digital Gold
    {
        id: "gold1",
        name: "Digital Gold - 24K",
        type: "gold",
        category: "Precious Metal",
        returns: "11.5% p.a.",
        minSIP: 100,
        risk: "Low",
        investors: "25.6L"
    },
    {
        id: "gold2",
        name: "Gold ETF - HDFC",
        type: "gold",
        category: "Gold ETF",
        returns: "11.8% p.a.",
        minSIP: 500,
        rating: 4,
        risk: "Low",
        investors: "5.4L"
    }
];

export function SIP() {
    const [sipAmount, setSipAmount] = useState(5000);
    const [sipYears, setSipYears] = useState(10);
    const [expectedReturn, setExpectedReturn] = useState(12);

    // SIP Calculator
    const calculateSIP = () => {
        const monthlyRate = expectedReturn / 12 / 100;
        const months = sipYears * 12;
        const futureValue = sipAmount * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
        const invested = sipAmount * months;
        const returns = futureValue - invested;

        return {
            invested: Math.round(invested),
            returns: Math.round(returns),
            total: Math.round(futureValue)
        };
    };

    const calculatedValues = calculateSIP();

    const getRiskColor = (risk: string) => {
        switch (risk) {
            case "Low":
                return "bg-green-100 text-green-900 border-green-200";
            case "Medium":
                return "bg-yellow-100 text-yellow-900 border-yellow-200";
            case "High":
                return "bg-red-100 text-red-900 border-red-200";
            default:
                return "";
        }
    };

    const mutualFundSIPs = sipOptions.filter(s => s.type === "mutualfund");
    const stockSIPs = sipOptions.filter(s => s.type === "stock");
    const goldSIPs = sipOptions.filter(s => s.type === "gold");

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-green-50 -z-10" />

                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <Badge className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 border-blue-200">
                            <Repeat className="w-4 h-4" />
                            Start SIP from ₹100/month
                        </Badge>

                        <h1 className="text-5xl md:text-6xl">
                            Invest Regularly with SIP
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Build wealth systematically with SIPs in Mutual Funds, Stocks, and Digital Gold.
                            Start small, grow big with the power of compounding.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button size="lg" className="gap-2">
                                Start Your First SIP
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline">
                                Calculate Returns
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-3xl">10L+</div>
                                <p className="text-sm text-muted-foreground">Active SIPs</p>
                            </div>
                            <div className="h-12 w-px bg-border hidden sm:block" />
                            <div className="text-center">
                                <div className="text-3xl">₹500Cr+</div>
                                <p className="text-sm text-muted-foreground">Monthly SIP Volume</p>
                            </div>
                            <div className="h-12 w-px bg-border hidden sm:block" />
                            <div className="text-center">
                                <div className="text-3xl">From ₹100</div>
                                <p className="text-sm text-muted-foreground">Minimum SIP Amount</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SIP Calculator */}
            <section className="py-16 px-4 bg-muted/30">
                <div className="container mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl mb-2">SIP Calculator</h2>
                            <p className="text-muted-foreground">See how your wealth can grow with regular investments</p>
                        </div>

                        <Card className="p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Left Side - Inputs */}
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <Label>Monthly Investment</Label>
                                            <div className="flex items-center gap-1 text-2xl">
                                                <IndianRupee className="w-5 h-5" />
                                                <span>{sipAmount.toLocaleString('en-IN')}</span>
                                            </div>
                                        </div>
                                        <Slider
                                            value={[sipAmount]}
                                            onValueChange={(value) => setSipAmount(value[0])}
                                            min={100}
                                            max={100000}
                                            step={100}
                                            className="w-full"
                                        />
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>₹100</span>
                                            <span>₹1,00,000</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <Label>Time Period</Label>
                                            <span className="text-2xl">{sipYears} Years</span>
                                        </div>
                                        <Slider
                                            value={[sipYears]}
                                            onValueChange={(value) => setSipYears(value[0])}
                                            min={1}
                                            max={30}
                                            step={1}
                                            className="w-full"
                                        />
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>1 Year</span>
                                            <span>30 Years</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <Label>Expected Return (p.a.)</Label>
                                            <span className="text-2xl">{expectedReturn}%</span>
                                        </div>
                                        <Slider
                                            value={[expectedReturn]}
                                            onValueChange={(value) => setExpectedReturn(value[0])}
                                            min={1}
                                            max={30}
                                            step={0.5}
                                            className="w-full"
                                        />
                                        <div className="flex justify-between text-sm text-muted-foreground">
                                            <span>1%</span>
                                            <span>30%</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Results */}
                                <div className="flex flex-col justify-center space-y-6">
                                    <div className="space-y-4">
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <p className="text-sm text-muted-foreground mb-1">Total Investment</p>
                                            <p className="text-3xl flex items-center gap-1">
                                                <IndianRupee className="w-6 h-6" />
                                                {calculatedValues.invested.toLocaleString('en-IN')}
                                            </p>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <p className="text-sm text-muted-foreground mb-1">Estimated Returns</p>
                                            <p className="text-3xl text-green-600 flex items-center gap-1">
                                                <IndianRupee className="w-6 h-6" />
                                                {calculatedValues.returns.toLocaleString('en-IN')}
                                            </p>
                                        </div>

                                        <div className="p-4 bg-purple-50 rounded-lg">
                                            <p className="text-sm text-muted-foreground mb-1">Total Value</p>
                                            <p className="text-3xl text-purple-600 flex items-center gap-1">
                                                <IndianRupee className="w-6 h-6" />
                                                {calculatedValues.total.toLocaleString('en-IN')}
                                            </p>
                                        </div>
                                    </div>

                                    <Button className="w-full gap-2">
                                        Start This SIP
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SIP Options - Tabs */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl mb-2">Choose Your SIP Investment</h2>
                        <p className="text-xl text-muted-foreground">
                            Select from top-performing mutual funds, stocks, or digital gold
                        </p>
                    </div>

                    <Tabs defaultValue="mutualfunds" className="space-y-8">
                        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
                            <TabsTrigger value="mutualfunds" className="gap-2">
                                <PieChart className="w-4 h-4" />
                                Mutual Funds
                            </TabsTrigger>
                            <TabsTrigger value="stocks" className="gap-2">
                                <TrendingUp className="w-4 h-4" />
                                Stocks
                            </TabsTrigger>
                            <TabsTrigger value="gold" className="gap-2">
                                <Coins className="w-4 h-4" />
                                Digital Gold
                            </TabsTrigger>
                        </TabsList>

                        {/* Mutual Funds Tab */}
                        <TabsContent value="mutualfunds" className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                {mutualFundSIPs.map(sip => (
                                    <Card key={sip.id} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Badge variant="outline">{sip.category}</Badge>
                                                    <Badge className={getRiskColor(sip.risk)}>{sip.risk} Risk</Badge>
                                                </div>
                                                <h3 className="text-2xl mb-1">{sip.name}</h3>
                                                {sip.rating && (
                                                    <div className="flex">
                                                        {[...Array(sip.rating)].map((_, i) => (
                                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl text-green-600">{sip.returns}</div>
                                                <p className="text-xs text-muted-foreground">Returns</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 py-3 border-t text-sm">
                                            <div>
                                                <p className="text-muted-foreground">Min SIP Amount</p>
                                                <p className="flex items-center gap-1">
                                                    <IndianRupee className="w-3 h-3" />
                                                    {sip.minSIP}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground">Investors</p>
                                                <p>{sip.investors}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            <Button className="flex-1 gap-2">
                                                Start SIP
                                                <ChevronRight className="w-4 h-4" />
                                            </Button>
                                            <Button variant="outline">View Details</Button>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Stocks Tab */}
                        <TabsContent value="stocks" className="space-y-6">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                                <div className="flex items-start gap-3">
                                    <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="mb-1">Stock SIP - Invest Regularly in Blue-chip Stocks</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Build your portfolio by investing fixed amounts in quality stocks every month.
                                            Reduce timing risk with rupee cost averaging.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {stockSIPs.map(sip => (
                                    <Card key={sip.id} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Badge variant="outline">{sip.category}</Badge>
                                                    <Badge className={getRiskColor(sip.risk)}>{sip.risk} Risk</Badge>
                                                </div>
                                                <h3 className="text-2xl mb-1">{sip.name}</h3>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl text-green-600">{sip.returns}</div>
                                                <p className="text-xs text-muted-foreground">Avg Returns</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 py-3 border-t text-sm">
                                            <div>
                                                <p className="text-muted-foreground">Min SIP Amount</p>
                                                <p className="flex items-center gap-1">
                                                    <IndianRupee className="w-3 h-3" />
                                                    {sip.minSIP}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground">Investors</p>
                                                <p>{sip.investors}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            <Button className="flex-1 gap-2">
                                                Start Stock SIP
                                                <ChevronRight className="w-4 h-4" />
                                            </Button>
                                            <Button variant="outline">Analysis</Button>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>

                        {/* Digital Gold Tab */}
                        <TabsContent value="gold" className="space-y-6">
                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                                <div className="flex items-start gap-3">
                                    <Coins className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="mb-1">Digital Gold SIP - Own Pure Gold Digitally</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Invest in 24K pure gold starting from ₹100/month. Enjoy 100% purity,
                                            secure storage, and easy liquidity with instant selling.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {goldSIPs.map(sip => (
                                    <Card key={sip.id} className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2 border-yellow-200">
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Badge variant="outline" className="bg-yellow-50">{sip.category}</Badge>
                                                    <Badge className={getRiskColor(sip.risk)}>{sip.risk} Risk</Badge>
                                                </div>
                                                <h3 className="text-2xl mb-1">{sip.name}</h3>
                                                {sip.rating && (
                                                    <div className="flex">
                                                        {[...Array(sip.rating)].map((_, i) => (
                                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl text-green-600">{sip.returns}</div>
                                                <p className="text-xs text-muted-foreground">Returns</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 py-3 border-t text-sm">
                                            <div>
                                                <p className="text-muted-foreground">Min SIP Amount</p>
                                                <p className="flex items-center gap-1">
                                                    <IndianRupee className="w-3 h-3" />
                                                    {sip.minSIP}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground">Investors</p>
                                                <p>{sip.investors}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                                <span>100% Pure 24K Gold</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                                <span>Secure Vault Storage</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                                <span>Instant Buy/Sell</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-2">
                                            <Button className="flex-1 gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700">
                                                Start Gold SIP
                                                <ChevronRight className="w-4 h-4" />
                                            </Button>
                                            <Button variant="outline">Learn More</Button>
                                        </div>
                                    </Card>
                                ))}
                            </div>

                            <Card className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Shield className="w-6 h-6 text-yellow-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl mb-2">Why Choose Digital Gold SIP?</h3>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span>No making charges or storage fees - own pure gold at market price</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span>Start with as low as ₹100 - make gold accessible for everyone</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span>Convert to physical gold or jewelry anytime (delivery charges apply)</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Benefits of SIP */}
            <section className="py-16 px-4 bg-muted/30">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4">Why Start a SIP?</h2>
                        <p className="text-xl text-muted-foreground">
                            Benefits of systematic investment planning
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="p-6 text-center space-y-3">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                                <Repeat className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl">Rupee Cost Averaging</h3>
                            <p className="text-sm text-muted-foreground">
                                Buy more units when prices are low and fewer when high, averaging out your cost
                            </p>
                        </Card>

                        <Card className="p-6 text-center space-y-3">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                                <TrendingUp className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl">Power of Compounding</h3>
                            <p className="text-sm text-muted-foreground">
                                Earn returns on your returns and watch your wealth multiply over time
                            </p>
                        </Card>

                        <Card className="p-6 text-center space-y-3">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                                <Zap className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl">Disciplined Investing</h3>
                            <p className="text-sm text-muted-foreground">
                                Automate your investments and build wealth without timing the market
                            </p>
                        </Card>

                        <Card className="p-6 text-center space-y-3">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                                <IndianRupee className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl">Start Small</h3>
                            <p className="text-sm text-muted-foreground">
                                Begin your investment journey with as little as ₹100 per month
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* How SIP Works */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4">How SIP Works</h2>
                        <p className="text-xl text-muted-foreground">
                            Simple steps to start your SIP journey
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                <span className="text-2xl text-blue-600">1</span>
                            </div>
                            <h3 className="text-xl">Choose Investment</h3>
                            <p className="text-muted-foreground">
                                Select from mutual funds, stocks, or digital gold based on your goals and risk appetite
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                                <span className="text-2xl text-purple-600">2</span>
                            </div>
                            <h3 className="text-xl">Set Amount & Date</h3>
                            <p className="text-muted-foreground">
                                Decide how much to invest monthly and select your preferred SIP date (1st-28th)
                            </p>
                        </div>

                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                <span className="text-2xl text-green-600">3</span>
                            </div>
                            <h3 className="text-xl">Automate & Grow</h3>
                            <p className="text-muted-foreground">
                                Set up auto-debit from your bank and watch your investments grow automatically
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <Card className="p-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <h2 className="text-4xl">Start Your SIP Journey Today</h2>
                            <p className="text-xl opacity-90">
                                Join millions of Indians building wealth through systematic investing.
                                Start with as low as ₹100/month.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button size="lg" variant="secondary" className="gap-2">
                                    Start SIP Now
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                                    Talk to Advisor
                                </Button>
                            </div>
                            <div className="flex items-center justify-center gap-6 pt-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>Setup in 2 minutes</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4" />
                                    <span>100% Secure</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4" />
                                    <span>Pause/Stop anytime</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}


export default SIP;