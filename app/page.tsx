"use client"
import { useState } from "react";
import { Header } from "../components/header";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";
import { Footer } from "../components/footer";
import { TradeInvest } from "../components/TradeInvest";
import { MutualFunds } from "../components/MutualFunds";
import { Learn } from "../components/Learn";
import { SIP } from "../components/SIP";
import { News } from "../components/News";
import { Products } from "../components/Products";
import { Support } from "../components/Support";
import { SignIn } from "../components/SignIn";
import { StartTrading } from "../components/StartTrading";
import { StartFreeTrial } from "@/components/StartFreeTrial";
import WatchDemo from "@/components/WatchDemo";
import { OpenDematAccount } from "@/components/OpenDematAccount";
import { ExploreFeatures } from "@/components/ExploreFeatures";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "trade":
        return (
          <>
            <TradeInvest setCurrentPage={setCurrentPage} />
            <Footer />
          </>
        );
      case "mutualfunds":
        return (
          <>
            <MutualFunds />
            <Footer />
          </>
        );
      case "learn":
        return (
          <>
            <Learn />
            <Footer />
          </>
        );
      case "sip":
        return (
          <>
            <SIP />
            <Footer />
          </>
        );
      case "news":
        return (
          <>
            <News />
            <Footer />
          </>
        );
      case "products":
        return (
          <>
            <Products />
            <Footer />
          </>
        );
      case "support":
        return (
          <>
            <Support />
            <Footer />
          </>
        );
      case "signin":
        return <SignIn />;
      case "starttrading":
        return <StartTrading />;
      case "startfreetrial":
        return <StartFreeTrial />;
      case "watchdemo":
        return <WatchDemo />;
      case "OpenDematAccount":
        return <OpenDematAccount setCurrentPage={setCurrentPage} />;
      case "explorefeatures":
        return (
          <>
            <ExploreFeatures setCurrentPage={setCurrentPage} />
            <Footer />
          </>
        );
      case "home":
      default:
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Features />
            <HowItWorks />
            <Testimonials />
            <CTA setCurrentPage={setCurrentPage} />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
