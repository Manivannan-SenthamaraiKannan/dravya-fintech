import { Card } from "./ui/card";
import { Brain, LineChart, Shield, Zap, Bell, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms analyze market patterns, news sentiment, and technical indicators to provide actionable insights."
  },
  {
    icon: LineChart,
    title: "Predictive Signals",
    description: "Get real-time buy/sell signals based on AI predictions with confidence scores for stocks across NSE and BSE."
  },
  {
    icon: Zap,
    title: "Instant Execution",
    description: "Lightning-fast order execution with smart routing to ensure you get the best prices in milliseconds."
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "AI-driven risk assessment and portfolio diversification recommendations to protect your investments."
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Customizable alerts for price movements, news events, and AI-detected opportunities sent directly to your phone."
  },
  {
    icon: BarChart3,
    title: "Portfolio Analytics",
    description: "Comprehensive portfolio tracking with AI-generated insights on performance, risk exposure, and optimization opportunities."
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl mb-4">AI-Powered Features Built for Indian Markets</h2>
          <p className="text-xl text-muted-foreground">
            Leverage cutting-edge artificial intelligence to make smarter trading decisions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;