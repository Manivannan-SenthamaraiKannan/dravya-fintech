"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "./ui/tabs";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordian";
import {
    HeadphonesIcon,
    Mail,
    Phone,
    MessageCircle,
    MapPin,
    Clock,
    Send,
    Search,
    CheckCircle2,
    AlertCircle,
    HelpCircle,
    FileText,
    Video,
    BookOpen,
    Users,
    Smartphone,
    CreditCard,
    TrendingUp,
    Shield,
    Settings,
    Download,
    ExternalLink,
    ArrowRight,
    Sparkles,
    Zap,
    Globe,
    Calendar,
} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select";

interface FAQ {
    question: string;
    answer: string;
    category:
    | "account"
    | "trading"
    | "technical"
    | "payments"
    | "general";
}

const faqs: FAQ[] = [
    {
        question: "How do I open a trading account with Dravya?",
        answer:
            "Opening an account is simple and 100% paperless. Click on 'Open Free Account', complete the online form with your PAN and Aadhaar details, complete video KYC verification, and your account will be activated within 24 hours. Zero account opening charges apply.",
        category: "account",
    },
    {
        question:
            "What documents are required for account opening?",
        answer:
            "You need: 1) PAN Card, 2) Aadhaar Card, 3) Bank account details (cancelled cheque or bank statement), 4) Income proof (for F&O segment), and 5) Signature. All documents can be uploaded digitally through DigiLocker or document upload.",
        category: "account",
    },
    {
        question: "How long does account activation take?",
        answer:
            "Once you complete the video KYC and submit all required documents, your account is typically activated within 24 hours on working days. You'll receive an email and SMS confirmation once your account is ready to use.",
        category: "account",
    },
    {
        question: "What are your brokerage charges?",
        answer:
            "We offer industry-leading rates: Zero brokerage on equity delivery, ₹20 or 0.03% (whichever is lower) on equity intraday and futures, ₹20 flat per order on options. Zero commission on mutual funds. No hidden charges or AMC fees.",
        category: "trading",
    },
    {
        question: "Can I trade from my mobile phone?",
        answer:
            "Yes! Our mobile app is available for both iOS and Android. You can trade, invest, track your portfolio, view charts, set price alerts, and access all features on-the-go. Download from App Store or Google Play.",
        category: "trading",
    },
    {
        question: "How do I add funds to my trading account?",
        answer:
            "You can add funds instantly via: 1) UPI (instant), 2) Net Banking (instant), 3) NEFT/RTGS (takes 2-4 hours), or 4) Cheque deposit. Minimum deposit is ₹100. Funds added via UPI are available for trading immediately.",
        category: "payments",
    },
    {
        question: "How do I withdraw money from my account?",
        answer:
            "Withdrawals are processed to your registered bank account. Simply go to 'Funds' section, click 'Withdraw', enter amount, and submit. Withdrawals are processed within 30 minutes during market hours and within 24 hours during non-market hours.",
        category: "payments",
    },
    {
        question: "Is my money safe with Dravya?",
        answer:
            "Absolutely. Your funds are held in a separate client bank account as per SEBI regulations. We use bank-grade 256-bit encryption and 2-factor authentication. Dravya is registered with SEBI, NSE, BSE, and is a depository participant with CDSL.",
        category: "general",
    },
    {
        question: "What are the trading hours?",
        answer:
            "Equity trading: Monday-Friday, 9:15 AM to 3:30 PM. Pre-market: 9:00 AM to 9:15 AM. Post-market: 3:40 PM to 4:00 PM. Commodity trading: 9:00 AM to 11:30 PM (varies by commodity). Currency: 9:00 AM to 5:00 PM.",
        category: "trading",
    },
    {
        question: "Can I trade in F&O (Futures & Options)?",
        answer:
            "Yes, once your account is activated for the F&O segment. You need to complete additional documentation including income proof and online test. Minimum capital requirement is recommended to be ₹1 lakh for F&O trading due to higher risks.",
        category: "trading",
    },
    {
        question: "How do I reset my password?",
        answer:
            "Click on 'Forgot Password' on the login page, enter your registered email/mobile, verify OTP, and set a new password. For additional security, you can enable 2-factor authentication from Settings.",
        category: "technical",
    },
    {
        question: "Why is my order rejected?",
        answer:
            "Common reasons: Insufficient funds, incorrect price/quantity, stock in ban period, trading halted, or outside trading hours. Check the order rejection reason in your order book. Contact support if you need assistance.",
        category: "technical",
    },
    {
        question: "What is MTF (Margin Trading Facility)?",
        answer:
            "MTF allows you to buy stocks with leverage up to 4x. You pay a percentage upfront and borrow the rest from Dravya at competitive interest rates. Interest is charged daily. You can hold positions for up to 365 days or sell anytime.",
        category: "trading",
    },
    {
        question: "How do I start a SIP?",
        answer:
            "Go to SIP section, choose from stocks/mutual funds/gold, select investment amount and frequency, set up auto-debit via bank mandate, and your SIP will start from the next cycle. You can pause or stop SIP anytime without charges.",
        category: "trading",
    },
    {
        question: "Are there any hidden charges?",
        answer:
            "No hidden charges. We charge only brokerage, statutory charges (STT, exchange charges, GST), and DP charges (₹13.5 per scrip for selling). AMC is zero. Complete charge structure is available in our pricing page.",
        category: "payments",
    },
];

const supportChannels = [
    {
        icon: Phone,
        title: "Phone Support",
        description: "Speak with our support team",
        contact: "+91 22 6234 5678",
        hours: "Mon-Fri: 8:00 AM - 8:00 PM",
        action: "Call Now",
    },
    {
        icon: Mail,
        title: "Email Support",
        description: "Send us an email anytime",
        contact: "support@dravya.in",
        hours: "Response within 24 hours",
        action: "Send Email",
    },
    {
        icon: MessageCircle,
        title: "Live Chat",
        description: "Chat with us in real-time",
        contact: "Available on website",
        hours: "Mon-Sat: 9:00 AM - 6:00 PM",
        action: "Start Chat",
    },
    {
        icon: Globe,
        title: "WhatsApp Support",
        description: "Message us on WhatsApp",
        contact: "+91 98765 43210",
        hours: "Mon-Fri: 9:00 AM - 7:00 PM",
        action: "Message on WhatsApp",
    },
];

const quickLinks = [
    {
        icon: FileText,
        title: "Account Opening Guide",
        category: "Getting Started",
    },
    {
        icon: CreditCard,
        title: "Fund Transfer Guide",
        category: "Payments",
    },
    {
        icon: TrendingUp,
        title: "Trading Guide",
        category: "Trading",
    },
    {
        icon: Shield,
        title: "Security Best Practices",
        category: "Security",
    },
    {
        icon: Smartphone,
        title: "Mobile App Guide",
        category: "Getting Started",
    },
    {
        icon: Settings,
        title: "Account Settings",
        category: "Account Management",
    },
];

export function Support() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] =
        useState<string>("all");
    const [ticketSubject, setTicketSubject] = useState("");
    const [ticketMessage, setTicketMessage] = useState("");

    const filteredFAQs = faqs.filter((faq) => {
        const matchesSearch =
            faq.question
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
            faq.answer
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
        const matchesCategory =
            selectedCategory === "all" ||
            faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-purple-50 -z-10" />

                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <Badge className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 border-blue-200">
                            <HeadphonesIcon className="w-4 h-4" />
                            We're Here to Help
                        </Badge>

                        <h1 className="text-5xl md:text-6xl">
                            How can we help you?
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Get instant answers to your questions or connect
                            with our support team. We're committed to helping
                            you succeed.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto pt-4">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input
                                    type="text"
                                    placeholder="Search for help articles, FAQs..."
                                    className="pl-12 pr-4 py-6 text-lg"
                                    value={searchQuery}
                                    onChange={(e) =>
                                        setSearchQuery(e.target.value)
                                    }
                                />
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap justify-center gap-8 pt-8">
                            <div className="text-center">
                                <div className="text-3xl">24/7</div>
                                <p className="text-sm text-muted-foreground">
                                    Support Available
                                </p>
                            </div>
                            <div className="h-12 w-px bg-border hidden sm:block" />
                            <div className="text-center">
                                <div className="text-3xl">&lt;2 Min</div>
                                <p className="text-sm text-muted-foreground">
                                    Avg Response Time
                                </p>
                            </div>
                            <div className="h-12 w-px bg-border hidden sm:block" />
                            <div className="text-center">
                                <div className="text-3xl">98%</div>
                                <p className="text-sm text-muted-foreground">
                                    Satisfaction Rate
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Channels */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4">Get in Touch</h2>
                        <p className="text-xl text-muted-foreground">
                            Multiple ways to reach our support team
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supportChannels.map((channel, index) => {
                            const IconComponent = channel.icon;
                            return (
                                <Card
                                    key={index}
                                    className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl mb-2">
                                            {channel.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            {channel.description}
                                        </p>
                                        <p className="mb-1">{channel.contact}</p>
                                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                            <Clock className="w-4 h-4" />
                                            {channel.hours}
                                        </div>
                                    </div>
                                    <Button className="w-full gap-2">
                                        {channel.action}
                                        <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 px-4 bg-muted/30">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4">
                            Popular Help Articles
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Quick access to most searched topics
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {quickLinks.map((link, index) => {
                            const IconComponent = link.icon;
                            return (
                                <Card
                                    key={index}
                                    className="p-4 hover:shadow-lg transition-shadow cursor-pointer"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <IconComponent className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="mb-1">{link.title}</h4>
                                            <p className="text-xs text-muted-foreground">
                                                {link.category}
                                            </p>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Find answers to common questions
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <Button
                            size="sm"
                            variant={
                                selectedCategory === "all"
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() => setSelectedCategory("all")}
                        >
                            All Questions
                        </Button>
                        <Button
                            size="sm"
                            variant={
                                selectedCategory === "account"
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() => setSelectedCategory("account")}
                        >
                            Account
                        </Button>
                        <Button
                            size="sm"
                            variant={
                                selectedCategory === "trading"
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() => setSelectedCategory("trading")}
                        >
                            Trading
                        </Button>
                        <Button
                            size="sm"
                            variant={
                                selectedCategory === "technical"
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() => setSelectedCategory("technical")}
                        >
                            Technical
                        </Button>
                        <Button
                            size="sm"
                            variant={
                                selectedCategory === "payments"
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() => setSelectedCategory("payments")}
                        >
                            Payments
                        </Button>
                        <Button
                            size="sm"
                            variant={
                                selectedCategory === "general"
                                    ? "default"
                                    : "outline"
                            }
                            onClick={() => setSelectedCategory("general")}
                        >
                            General
                        </Button>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {filteredFAQs.length > 0 ? (
                            <Accordion
                                type="single"
                                collapsible
                                className="space-y-4"
                            >
                                {filteredFAQs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="border rounded-lg px-6"
                                    >
                                        <AccordionTrigger className="text-left hover:no-underline">
                                            <span className="flex items-start gap-3">
                                                <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                                <span>{faq.question}</span>
                                            </span>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground pl-8">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        ) : (
                            <Card className="p-12 text-center">
                                <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                                <h3 className="text-xl mb-2">
                                    No results found
                                </h3>
                                <p className="text-muted-foreground">
                                    Try different keywords or contact our support
                                    team
                                </p>
                            </Card>
                        )}
                    </div>
                </div>
            </section>

            {/* Support Ticket Form */}
            <section className="py-16 px-4 bg-muted/30">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-4xl mb-4">
                                Still Need Help?
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Submit a support ticket and we'll get back to
                                you within 24 hours
                            </p>
                        </div>

                        <Card className="p-8">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name *</Label>
                                        <Input
                                            id="name"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">
                                            Email Address *
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input
                                            id="phone"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="category">Category *</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="account">
                                                    Account Related
                                                </SelectItem>
                                                <SelectItem value="trading">
                                                    Trading Issues
                                                </SelectItem>
                                                <SelectItem value="technical">
                                                    Technical Support
                                                </SelectItem>
                                                <SelectItem value="payments">
                                                    Payment Issues
                                                </SelectItem>
                                                <SelectItem value="general">
                                                    General Inquiry
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject *</Label>
                                    <Input
                                        id="subject"
                                        placeholder="Brief description of your issue"
                                        value={ticketSubject}
                                        onChange={(e) =>
                                            setTicketSubject(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">Message *</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Please provide detailed information about your issue..."
                                        rows={6}
                                        value={ticketMessage}
                                        onChange={(e) =>
                                            setTicketMessage(e.target.value)
                                        }
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="attachment">
                                        Attachment (Optional)
                                    </Label>
                                    <Input id="attachment" type="file" />
                                    <p className="text-xs text-muted-foreground">
                                        Max file size: 5MB. Supported formats: JPG,
                                        PNG, PDF
                                    </p>
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full gap-2"
                                >
                                    Submit Ticket
                                    <Send className="w-4 h-4" />
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Office Location */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl mb-4">
                                Visit Our Office
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                We'd love to meet you in person
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="p-8 space-y-6">
                                <div>
                                    <h3 className="text-2xl mb-4">
                                        Registered Office
                                    </h3>

                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="mb-1">
                                                    Dravya Fintech Private Limited
                                                </p>
                                                <p className="text-muted-foreground">
                                                    Tower A, 10th Floor, REZ Campus,
                                                    <br />
                                                    Electronic City , Bangalore - 560100,
                                                    <br />
                                                    Karnataka, India
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="mb-1">Phone</p>
                                                <p className="text-muted-foreground">
                                                    +91 22 6234 5678
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="mb-1">Email</p>
                                                <p className="text-muted-foreground">
                                                    info@dravya.in
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <p className="mb-1">Office Hours</p>
                                                <p className="text-muted-foreground">
                                                    Monday - Friday: 9:00 AM - 6:00 PM
                                                    <br />
                                                    Saturday: 9:00 AM - 1:00 PM
                                                    <br />
                                                    Sunday & Public Holidays: Closed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full gap-2">
                                    Get Directions
                                    <ExternalLink className="w-4 h-4" />
                                </Button>
                            </Card>

                            <Card className="p-8 bg-muted/50">
                                <h3 className="text-2xl mb-6">
                                    Regulatory Information
                                </h3>
                                <div className="space-y-4 text-sm">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="mb-1">SEBI Registration</p>
                                            <p className="text-muted-foreground">
                                                INZ000123456 (Stock Broker)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="mb-1">NSE Membership</p>
                                            <p className="text-muted-foreground">
                                                Member Code: 12345
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="mb-1">BSE Membership</p>
                                            <p className="text-muted-foreground">
                                                Member Code: 6789
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="mb-1">
                                                Depository Participant
                                            </p>
                                            <p className="text-muted-foreground">
                                                CDSL: IN-DP-123-2023
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="mb-1">AMFI Registration</p>
                                            <p className="text-muted-foreground">
                                                ARN-123456 (Mutual Fund Distributor)
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t">
                                    <h4 className="mb-3">Grievance Officer</h4>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        Mr. Rajesh Kumar
                                        <br />
                                        Email: grievance@dravya.in
                                        <br />
                                        Phone: +91 22 6234 5690
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Resources */}
            <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="container mx-auto">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl mb-4">
                                Additional Resources
                            </h2>
                            <p className="text-xl text-muted-foreground">
                                Learn more about trading and investing
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <Card className="p-6 text-center space-y-4">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                    <BookOpen className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl">Knowledge Base</h3>
                                <p className="text-sm text-muted-foreground">
                                    Browse our comprehensive library of trading
                                    guides and tutorials
                                </p>
                                <Button variant="outline" className="gap-2">
                                    Browse Articles
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Card>

                            <Card className="p-6 text-center space-y-4">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                                    <Video className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl">Video Tutorials</h3>
                                <p className="text-sm text-muted-foreground">
                                    Watch step-by-step video guides on trading and
                                    platform features
                                </p>
                                <Button variant="outline" className="gap-2">
                                    Watch Videos
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Card>

                            <Card className="p-6 text-center space-y-4">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                    <Download className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl">Downloads</h3>
                                <p className="text-sm text-muted-foreground">
                                    Download mobile apps, trading terminals, and
                                    important documents
                                </p>
                                <Button variant="outline" className="gap-2">
                                    Download Now
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Support;