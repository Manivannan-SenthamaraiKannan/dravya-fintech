"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  TrendingUp, 
  ArrowRight, 
  Users,
  Star,
  IndianRupee,
  Sparkles,
  Building2,
  PieChart,
  TrendingDown,
  Award
} from "lucide-react";

interface MutualFund {
  id: string;
  name: string;
  amc: string;
  sector: string;
  returns1Y: number;
  returns3Y: number;
  returns5Y: number;
  aum: string;
  investors: string;
  rating: number;
  minInvestment: number;
  expenseRatio: number;
  exitLoad: string;
}

const mutualFundsData: MutualFund[] = [
  {
    id: "1",
    name: "HDFC Technology Fund",
    amc: "HDFC",
    sector: "Technology",
    returns1Y: 42.5,
    returns3Y: 38.2,
    returns5Y: 35.8,
    aum: "₹8,500 Cr",
    investors: "2.3L",
    rating: 5,
    minInvestment: 5000,
    expenseRatio: 0.85,
    exitLoad: "1% if redeemed within 1 year"
  },
  {
    id: "2",
    name: "ICICI Prudential Pharma Healthcare",
    amc: "ICICI",
    sector: "Healthcare",
    returns1Y: 38.9,
    returns3Y: 35.1,
    returns5Y: 32.4,
    aum: "₹6,200 Cr",
    investors: "1.8L",
    rating: 5,
    minInvestment: 5000,
    expenseRatio: 0.92,
    exitLoad: "1% if redeemed within 1 year"
  },
  {
    id: "3",
    name: "SBI Banking & Financial Services",
    amc: "SBI",
    sector: "Banking",
    returns1Y: 35.6,
    returns3Y: 32.8,
    returns5Y: 28.9,
    aum: "₹12,400 Cr",
    investors: "3.5L",
    rating: 4,
    minInvestment: 5000,
    expenseRatio: 0.75,
    exitLoad: "1% if redeemed within 1 year"
  },
  {
    id: "4",
    name: "Axis Bluechip Fund",
    amc: "Axis",
    sector: "Diversified",
    returns1Y: 32.4,
    returns3Y: 30.5,
    returns5Y: 26.7,
    aum: "₹35,800 Cr",
    investors: "8.2L",
    rating: 5,
    minInvestment: 5000,
    expenseRatio: 0.68,
    exitLoad: "1% if redeemed within 1 year"
  },
  {
    id: "5",
    name: "Mirae Asset Large Cap Fund",
    amc: "Mirae",
    sector: "Large Cap",
    returns1Y: 31.8,
    returns3Y: 29.3,
    returns5Y: 25.4,
    aum: "₹28,600 Cr",
    investors: "6.7L",
    rating: 4,
    minInvestment: 5000,
    expenseRatio: 0.70,
    exitLoad: "1% if redeemed within 1 year"
  },
  {
    id: "6",
    name: "HDFC Mid-Cap Opportunities Fund",
    amc: "HDFC",
    sector: "Mid Cap",
    returns1Y: 40.2,
    returns3Y: 36.8,
    returns5Y: 33.1,
    aum: "₹42,300 Cr",
    investors: "9.1L",
    rating: 5,
    minInvestment: 5000,
    expenseRatio: 0.88,
    exitLoad: "1% if redeemed within 1 year"
  },
  {
    id: "7",
    name: "ICICI Prudential Infrastructure Fund",
    amc: "ICICI",
    sector: "Infrastructure",
    returns1Y: 37.5,
    returns3Y: 33.9,
    returns5Y: 29.8,
    aum: "₹7,800 Cr",
    investors: "2.1L",
    rating: 4,
    minInvestment: 5000,
    expenseRatio: 0.95,
    exitLoad: "1% if redeemed within 1 year"
  },
  {
    id: "8",
    name: "SBI Small Cap Fund",
    amc: "SBI",
    sector: "Small Cap",
    returns1Y: 45.3,
    returns3Y: 40.1,
    returns5Y: 36.5,
    aum: "₹18,900 Cr",
    investors: "4.3L",
    rating: 5,
    minInvestment: 5000,
    expenseRatio: 0.82,
    exitLoad: "1% if redeemed within 1 year"
  },
  {
    id: "9",
    name: "Axis Focused 25 Fund",
    amc: "Axis",
    sector: "Focused",
    returns1Y: 34.7,
    returns3Y: 31.2,
    returns5Y: 27.8,
    aum: "₹22,500 Cr",
    investors: "5.4L",
    rating: 4,
    minInvestment: 5000,
    expenseRatio: 0.72,
    exitLoad: "1% if redeemed within 1 year"
  },
  {
    id: "10",
    name: "Mirae Asset Emerging Bluechip",
    amc: "Mirae",
    sector: "Large & Mid Cap",
    returns1Y: 36.9,
    returns3Y: 33.4,
    returns5Y: 30.2,
    aum: "₹31,700 Cr",
    investors: "7.8L",
    rating: 5,
    minInvestment: 5000,
    expenseRatio: 0.76,
    exitLoad: "1% if redeemed within 1 year"
  },
  {
    id: "11",
    name: "HDFC Flexi Cap Fund",
    amc: "HDFC",
    sector: "Flexi Cap",
    returns1Y: 33.2,
    returns3Y: 30.8,
    returns5Y: 28.3,
    aum: "₹38,400 Cr",
    investors: "8.9L",
    rating: 5,
    minInvestment: 5000,
    expenseRatio: 0.79,
    exitLoad: "1% if redeemed within 1 year"
  },
  {
    id: "12",
    name: "ICICI Prudential Equity & Debt",
    amc: "ICICI",
    sector: "Hybrid",
    returns1Y: 28.4,
    returns3Y: 26.7,
    returns5Y: 23.9,
    aum: "₹45,600 Cr",
    investors: "10.2L",
    rating: 4,
    minInvestment: 5000,
    expenseRatio: 0.65,
    exitLoad: "1% if redeemed within 1 year"
  }
];

const amcHouses = ["All", "HDFC", "ICICI", "SBI", "Axis", "Mirae"];
const sectors = ["All", "Technology", "Healthcare", "Banking", "Large Cap", "Mid Cap", "Small Cap", "Diversified"];

export function MutualFunds() {
  const [selectedAMC, setSelectedAMC] = useState("All");
  const [selectedSector, setSelectedSector] = useState("All");

  const filteredFunds = mutualFundsData.filter(fund => {
    const amcMatch = selectedAMC === "All" || fund.amc === selectedAMC;
    const sectorMatch = selectedSector === "All" || fund.sector === selectedSector;
    return amcMatch && sectorMatch;
  });

  const topPerformers = [...mutualFundsData]
    .sort((a, b) => b.returns1Y - a.returns1Y)
    .slice(0, 6);

  const totalInvestors = mutualFundsData.reduce((sum, fund) => {
    const investors = parseFloat(fund.investors.replace('L', '')) * 100000;
    return sum + investors;
  }, 0);

  const totalAUM = mutualFundsData.reduce((sum, fund) => {
    const aum = parseFloat(fund.aum.replace('₹', '').replace(' Cr', '').replace(',', ''));
    return sum + aum;
  }, 0);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-background to-blue-50 -z-10" />
        
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="inline-flex items-center gap-2 bg-green-100 text-green-900 border-green-200">
              <Sparkles className="w-4 h-4" />
              AI-Powered Fund Recommendations
            </Badge>
            
            <h1 className="text-5xl md:text-6xl">
              Invest in Top Mutual Funds
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover best-performing mutual funds with zero commission. 
              Start your SIP with as low as ₹500/month.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2">
                Start SIP Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline">
                Explore All Funds
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl">{(totalInvestors / 1000000).toFixed(1)}M+</div>
                <p className="text-sm text-muted-foreground">Total Investors</p>
              </div>
              <div className="h-12 w-px bg-border hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl">₹{totalAUM.toFixed(0)}K Cr</div>
                <p className="text-sm text-muted-foreground">Assets Under Management</p>
              </div>
              <div className="h-12 w-px bg-border hidden sm:block" />
              <div className="text-center">
                <div className="text-3xl">3000+</div>
                <p className="text-sm text-muted-foreground">Mutual Funds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Performing Funds */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl mb-2">Best Performing Funds</h2>
              <p className="text-muted-foreground">Top funds based on 1-year returns</p>
            </div>
            <Award className="w-12 h-12 text-yellow-500" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPerformers.map((fund, index) => (
              <Card key={fund.id} className="p-6 space-y-4 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2">#{index + 1} Top Performer</Badge>
                    <h3 className="text-xl mb-1">{fund.name}</h3>
                    <p className="text-sm text-muted-foreground">{fund.amc} AMC</p>
                  </div>
                  <div className="flex">
                    {[...Array(fund.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b">
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl text-green-600">{fund.returns1Y}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">1Y Returns</p>
                  </div>
                  <div>
                    <div className="text-2xl">{fund.returns3Y}%</div>
                    <p className="text-xs text-muted-foreground">3Y Returns</p>
                  </div>
                  <div>
                    <div className="text-2xl">{fund.returns5Y}%</div>
                    <p className="text-xs text-muted-foreground">5Y Returns</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Investors
                    </span>
                    <span>{fund.investors}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <PieChart className="w-4 h-4" />
                      AUM
                    </span>
                    <span>{fund.aum}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <IndianRupee className="w-4 h-4" />
                      Min. Investment
                    </span>
                    <span>₹{fund.minInvestment.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <Button className="w-full">Invest Now</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Explore by AMC and Sector */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="amc" className="space-y-8">
            <div className="text-center">
              <h2 className="text-4xl mb-4">Explore Mutual Funds</h2>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="amc" className="gap-2">
                  <Building2 className="w-4 h-4" />
                  By AMC House
                </TabsTrigger>
                <TabsTrigger value="sector" className="gap-2">
                  <PieChart className="w-4 h-4" />
                  By Sector
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="amc" className="space-y-6">
              <div className="flex flex-wrap justify-center gap-3">
                {amcHouses.map(amc => (
                  <Button
                    key={amc}
                    variant={selectedAMC === amc ? "default" : "outline"}
                    onClick={() => {
                      setSelectedAMC(amc);
                      setSelectedSector("All");
                    }}
                  >
                    {amc}
                  </Button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredFunds.map(fund => (
                  <Card key={fund.id} className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{fund.amc}</Badge>
                          <Badge variant="secondary">{fund.sector}</Badge>
                        </div>
                        <h3 className="text-xl mb-1">{fund.name}</h3>
                        <div className="flex">
                          {[...Array(fund.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-green-600">
                          <TrendingUp className="w-5 h-5" />
                          <span className="text-2xl">{fund.returns1Y}%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">1Y Returns</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-3 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground">3Y Returns</p>
                        <p className="text-lg">{fund.returns3Y}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">5Y Returns</p>
                        <p className="text-lg">{fund.returns5Y}%</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Investors</p>
                        <p className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {fund.investors}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">AUM</p>
                        <p>{fund.aum}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Expense Ratio</p>
                        <p>{fund.expenseRatio}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Min. SIP</p>
                        <p>₹{fund.minInvestment.toLocaleString('en-IN')}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">Start SIP</Button>
                      <Button variant="outline" className="flex-1">Lumpsum</Button>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredFunds.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No funds found for the selected criteria.</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="sector" className="space-y-6">
              <div className="flex flex-wrap justify-center gap-3">
                {sectors.map(sector => (
                  <Button
                    key={sector}
                    variant={selectedSector === sector ? "default" : "outline"}
                    onClick={() => {
                      setSelectedSector(sector);
                      setSelectedAMC("All");
                    }}
                  >
                    {sector}
                  </Button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredFunds.map(fund => (
                  <Card key={fund.id} className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{fund.amc}</Badge>
                          <Badge variant="secondary">{fund.sector}</Badge>
                        </div>
                        <h3 className="text-xl mb-1">{fund.name}</h3>
                        <div className="flex">
                          {[...Array(fund.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-green-600">
                          <TrendingUp className="w-5 h-5" />
                          <span className="text-2xl">{fund.returns1Y}%</span>
                        </div>
                        <p className="text-xs text-muted-foreground">1Y Returns</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-3 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground">3Y Returns</p>
                        <p className="text-lg">{fund.returns3Y}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">5Y Returns</p>
                        <p className="text-lg">{fund.returns5Y}%</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Investors</p>
                        <p className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {fund.investors}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">AUM</p>
                        <p>{fund.aum}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Expense Ratio</p>
                        <p>{fund.expenseRatio}%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Min. SIP</p>
                        <p>₹{fund.minInvestment.toLocaleString('en-IN')}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">Start SIP</Button>
                      <Button variant="outline" className="flex-1">Lumpsum</Button>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredFunds.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No funds found for the selected criteria.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Our Platform */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Why Invest with Dravya?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                <IndianRupee className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl">Zero Commission</h3>
              <p className="text-sm text-muted-foreground">
                Invest directly with no hidden charges or commissions
              </p>
            </Card>

            <Card className="p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl">AI Recommendations</h3>
              <p className="text-sm text-muted-foreground">
                Get personalized fund suggestions based on your goals
              </p>
            </Card>

            <Card className="p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl">3000+ Funds</h3>
              <p className="text-sm text-muted-foreground">
                Choose from a wide range of mutual funds across categories
              </p>
            </Card>

            <Card className="p-6 text-center space-y-3">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl">Expert Support</h3>
              <p className="text-sm text-muted-foreground">
                Get guidance from SEBI registered investment advisors
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="p-12 text-center bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-4xl">Start Your Investment Journey</h2>
              <p className="text-xl opacity-90">
                Begin your SIP with just ₹500/month and build wealth for your future
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="secondary" className="gap-2">
                  Start SIP Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  Talk to Expert
                </Button>
              </div>
              <p className="text-sm opacity-75 pt-2">
                * Mutual fund investments are subject to market risks. Please read all scheme related documents carefully.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default MutualFund;