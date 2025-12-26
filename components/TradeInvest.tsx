"use client"

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
    TrendingUp,
    ArrowRight,
    LineChart,
    PieChart,
    BarChart3,
    Shield,
    Zap,
    Clock,
    IndianRupee,
    Sparkles
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TradeInvest({setCurrentPage}:{setCurrentPage: (page:string)=>void}) {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-background to-purple-50 -z-10" />

                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <Badge className="inline-flex items-center gap-2 bg-purple-100 text-purple-900 border-purple-200">
                            <Sparkles className="w-4 h-4" />
                            AI-Powered Trading Platform
                        </Badge>

                        <h1 className="text-5xl md:text-6xl">
                            Trade & Invest with Confidence
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Access NSE & BSE markets with AI-driven insights, real-time analytics,
                            and zero brokerage on equity delivery trades.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button size="lg" className="gap-2" onClick={()=>setCurrentPage("OpenDematAccount")}>
                                Open Demat Account
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline">
                                Explore Features
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trading Options */}
            <section className="py-16 px-4 bg-muted/30">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4">Choose Your Trading Style</h2>
                        <p className="text-xl text-muted-foreground">
                            Whether you're a day trader or long-term investor, we've got you covered
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                <LineChart className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-2xl">Intraday Trading</h3>
                            <p className="text-muted-foreground">
                                Trade stocks within the same day with AI-powered entry and exit signals.
                                Get real-time market analysis and automated stop-loss recommendations.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                    Zero brokerage on equity delivery
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                    AI signal alerts
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                    Real-time charts & analysis
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow border-2 border-primary">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                                <PieChart className="w-6 h-6 text-purple-600" />
                            </div>
                            <Badge className="w-fit">Most Popular</Badge>
                            <h3 className="text-2xl">Long-Term Investing</h3>
                            <p className="text-muted-foreground">
                                Build wealth with smart portfolio recommendations. AI analyzes fundamentals,
                                technicals, and market sentiment to identify quality stocks.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                                    AI portfolio rebalancing
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                                    Fundamental analysis tools
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                                    Tax optimization strategies
                                </li>
                            </ul>
                        </Card>

                        <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-2xl">F&O Trading</h3>
                            <p className="text-muted-foreground">
                                Trade Futures & Options with advanced risk management tools.
                                AI calculates optimal strike prices and hedging strategies.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                    Options strategy builder
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                    Greeks calculator
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                                    Volatility analysis
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4">Why Trade with Dravya?</h2>
                        <p className="text-xl text-muted-foreground">
                            Advanced tools and features designed for the Indian market
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="p-6 text-center space-y-3">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                                <IndianRupee className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl">Zero Brokerage</h3>
                            <p className="text-sm text-muted-foreground">
                                On equity delivery trades. Save more on every transaction.
                            </p>
                        </Card>

                        <Card className="p-6 text-center space-y-3">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                                <Sparkles className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl">AI Signals</h3>
                            <p className="text-sm text-muted-foreground">
                                Get predictive buy/sell signals powered by machine learning.
                            </p>
                        </Card>

                        <Card className="p-6 text-center space-y-3">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl">Secure Trading</h3>
                            <p className="text-sm text-muted-foreground">
                                Bank-grade security with PAN & DigiLocker verification.
                            </p>
                        </Card>

                        <Card className="p-6 text-center space-y-3">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                                <Zap className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl">Lightning Fast</h3>
                            <p className="text-sm text-muted-foreground">
                                Execute trades in milliseconds with 99.9% uptime.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-16 px-4 bg-muted/30">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4">Transparent Pricing</h2>
                        <p className="text-xl text-muted-foreground">
                            No hidden charges. What you see is what you pay.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <Card className="p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-2xl">Brokerage Charges</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-muted-foreground">Equity Delivery</span>
                                            <span className="font-medium">₹0</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-muted-foreground">Intraday</span>
                                            <span className="font-medium">₹20 per order</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-muted-foreground">F&O</span>
                                            <span className="font-medium">₹20 per order</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-muted-foreground">Currency</span>
                                            <span className="font-medium">₹20 per order</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-2xl">Other Charges</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-muted-foreground">Account Opening</span>
                                            <span className="font-medium">Free</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-muted-foreground">AMC</span>
                                            <span className="font-medium">₹300/year</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-muted-foreground">DP Charges</span>
                                            <span className="font-medium">₹15 per script</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-muted-foreground">Fund Withdrawal</span>
                                            <span className="font-medium">Free</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto">
                    <Card className="p-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <div className="max-w-2xl mx-auto space-y-6">
                            <h2 className="text-4xl">Start Trading Today</h2>
                            <p className="text-xl opacity-90">
                                Open your Demat account in minutes with paperless KYC through DigiLocker
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button size="lg" variant="secondary" className="gap-2">
                                    Open Free Account
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                                    Contact Sales
                                </Button>
                            </div>
                            <div className="flex items-center justify-center gap-6 pt-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>5 min account opening</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4" />
                                    <span>100% paperless</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}

export default TradeInvest;