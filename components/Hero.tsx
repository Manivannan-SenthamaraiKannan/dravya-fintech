import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-background to-purple-50 -z-10" />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="inline-flex items-center gap-2 bg-purple-100 text-purple-900 border-purple-200">
              <Sparkles className="w-4 h-4" />
              Powered by Dravya AI
            </Badge>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl leading-tight">
                Trade Smarter with AI-Powered Insights
              </h1>
              <p className="text-xl text-muted-foreground">
                Make confident trading decisions on NSE & BSE
                with real-time AI analysis, predictive signals,
                and automated portfolio management.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" onClick={() => setCurrentPage("startfreetrial")}>
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => setCurrentPage("watchdemo")}>
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl">5L+</span>
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Active Traders
                </p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl">₹2000Cr+</div>
                <p className="text-sm text-muted-foreground">
                  Daily Volume
                </p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl">99.9%</div>
                <p className="text-sm text-muted-foreground">
                  Uptime
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />
            <ImageWithFallback
              src="https://plus.unsplash.com/premium_vector-1726122385974-b85fe7624b86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwc3RvY2slMjBtYXJrZXR8ZW58MHx8MHx8fDA%3D"
              alt="AI Trading Dashboard"
              className="relative rounded-2xl shadow-2xl w-full max-w-2xl mx-auto"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;