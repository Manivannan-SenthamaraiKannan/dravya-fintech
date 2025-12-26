"use client";

import React from "react";
import { Button } from "./ui/button";
import { TrendingUp } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setCurrentPage("home")}
        >
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-medium">Dravya</span>
        </div>

        <nav className="hidden md:flex items-left gap-8">
          {[
            "trade",
            "mutualfunds",
            "sip",
            "learn",
            "news",
            "products",
            "support",
          ].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`text-muted-foreground hover:text-foreground transition-colors ${
                currentPage === page ? "text-foreground" : ""
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="hidden sm:inline-flex"
            onClick={() => setCurrentPage("signin")}
          >
            Sign In
          </Button>
          <Button onClick={() => setCurrentPage("starttrading")}>
            Start Trading
          </Button>
        </div>
      </div>
    </header>
  );
};
