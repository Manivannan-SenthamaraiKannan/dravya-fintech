"use client"

import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Day Trader, Mumbai",
        content: "TradeAI's predictive signals have increased my trading accuracy by 40%. The AI analysis helps me make faster, more confident decisions.",
        rating: 5,
        initials: "RK"
    },
    {
        name: "Priya Sharma",
        role: "Investment Analyst, Bangalore",
        content: "The risk management features are exceptional. I can now manage multiple portfolios efficiently with AI-powered insights.",
        rating: 5,
        initials: "PS"
    },
    {
        name: "Amit Patel",
        role: "Retail Investor, Delhi",
        content: "As a beginner, the AI recommendations have been incredibly helpful. It's like having a professional analyst guiding every trade.",
        rating: 5,
        initials: "AP"
    }
];

export function Testimonials() {
    return (
        <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl mb-4">Trusted by Thousands of Traders</h2>
                    <p className="text-xl text-muted-foreground">
                        See what our users have to say about their experience
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="p-6">
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div>{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;