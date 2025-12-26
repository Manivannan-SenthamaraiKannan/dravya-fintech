"use client"

import { Card } from "./ui/card";
import { UserPlus, Database, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    description: "Sign up in minutes with your PAN and bank details. Complete KYC verification instantly through DigiLocker."
  },
  {
    icon: Database,
    step: "02",
    title: "Connect Your Portfolio",
    description: "Link your existing demat account or open a new one. Our AI will analyze your holdings and trading patterns."
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Get AI Recommendations",
    description: "Receive personalized trading signals, risk alerts, and portfolio optimization suggestions powered by AI."
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Execute & Track",
    description: "Place orders with one tap and monitor your portfolio performance with real-time AI insights and analytics."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Start your AI-powered trading journey in four simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              <Card className="p-6 relative hover:shadow-lg transition-shadow">
                <div className="absolute -top-4 left-6 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 mt-8">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;