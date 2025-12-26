import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
    CheckCircle2,
    User,
    Phone,
    Mail,
    CreditCard,
    Upload,
    Video,
    Shield,
    TrendingUp,
    Clock,
    ArrowRight,
    ArrowLeft,
    FileText,
    Building2,
    Wallet,
    Sparkles,
    Zap,
    Lock,
    Check,
    AlertCircle,
    Camera,
    File,
    Info,
    Star,
    Users,
    Award,
    Rocket,
    Target,
    Gift,
    ChevronRight,
    Trophy,
    BarChart3,
    Brain,
    Smartphone
} from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";
import { Separator } from "../components/ui/seperator";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

export function StartFreeTrial() {
    const [currentStep, setCurrentStep] = useState<Step>(1);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        panNumber: "",
        dob: "",
        gender: "",
        address: "",
        pincode: "",
        bankName: "",
        accountNumber: "",
        ifscCode: "",
        accountType: "",
        trialPlan: "premium",
        segments: [] as string[],
        hasAgreed: false,
        referralCode: ""
    });

    const steps = [
        { number: 1, title: "Trial Selection", icon: Gift },
        { number: 2, title: "Basic Details", icon: User },
        { number: 3, title: "Quick KYC", icon: CreditCard },
        { number: 4, title: "Bank Link", icon: Building2 },
        { number: 5, title: "Preferences", icon: Target },
        { number: 6, title: "Get Started", icon: Rocket }
    ];

    const progressPercentage = ((currentStep) / 6) * 100;

    const handleNext = () => {
        if (currentStep < 6) {
            setCurrentStep((currentStep + 1) as Step);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep((currentStep - 1) as Step);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const toggleSegment = (segment: string) => {
        setFormData(prev => ({
            ...prev,
            segments: prev.segments.includes(segment)
                ? prev.segments.filter(s => s !== segment)
                : [...prev.segments, segment]
        }));
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-8">
                        <div className="text-center space-y-2 mb-8">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Gift className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-4xl">Choose Your Free Trial Plan</h2>
                            <p className="text-xl text-muted-foreground">
                                Experience premium features with zero commitment
                            </p>
                            <Badge className="bg-green-100 text-green-900 border-green-300 text-lg px-4 py-2">
                                <Sparkles className="w-4 h-4 mr-2" />
                                No Credit Card Required
                            </Badge>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Basic Trial */}
                            <Card
                                className={`p-6 cursor-pointer transition-all hover:shadow-lg ${formData.trialPlan === 'basic'
                                    ? 'border-2 border-blue-500 shadow-lg'
                                    : 'hover:border-blue-300'
                                    }`}
                                onClick={() => setFormData({ ...formData, trialPlan: 'basic' })}
                            >
                                <div className="text-center space-y-4">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                                        <BarChart3 className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl mb-1">Basic</h3>
                                        <p className="text-sm text-muted-foreground">Perfect to get started</p>
                                    </div>
                                    <div className="text-4xl">7 Days</div>
                                    <Badge variant="outline" className="text-base">Free</Badge>
                                    <Separator />
                                    <ul className="space-y-3 text-sm text-left">
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span>Real-time market data</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span>Basic charts & analysis</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span>₹10,000 virtual trading</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span>Email support</span>
                                        </li>
                                    </ul>
                                </div>
                            </Card>

                            {/* Premium Trial */}
                            <Card
                                className={`p-6 cursor-pointer transition-all hover:shadow-lg relative ${formData.trialPlan === 'premium'
                                    ? 'border-2 border-purple-500 shadow-xl scale-105'
                                    : 'hover:border-purple-300'
                                    }`}
                                onClick={() => setFormData({ ...formData, trialPlan: 'premium' })}
                            >
                                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600">
                                    Most Popular
                                </Badge>
                                <div className="text-center space-y-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
                                        <Brain className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl mb-1">Premium AI</h3>
                                        <p className="text-sm text-muted-foreground">Full AI-powered experience</p>
                                    </div>
                                    <div className="text-4xl">30 Days</div>
                                    <Badge variant="outline" className="text-base bg-purple-50">Free</Badge>
                                    <Separator />
                                    <ul className="space-y-3 text-sm text-left">
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span>All Basic features</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>AI trade signals</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Smart portfolio manager</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span>₹1,00,000 virtual trading</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Priority support</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span>Advanced technical indicators</span>
                                        </li>
                                    </ul>
                                </div>
                            </Card>

                            {/* Pro Trial */}
                            <Card
                                className={`p-6 cursor-pointer transition-all hover:shadow-lg ${formData.trialPlan === 'pro'
                                    ? 'border-2 border-yellow-500 shadow-lg'
                                    : 'hover:border-yellow-300'
                                    }`}
                                onClick={() => setFormData({ ...formData, trialPlan: 'pro' })}
                            >
                                <div className="text-center space-y-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                                        <Trophy className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl mb-1">Pro Trader</h3>
                                        <p className="text-sm text-muted-foreground">For serious traders</p>
                                    </div>
                                    <div className="text-4xl">60 Days</div>
                                    <Badge variant="outline" className="text-base">Free</Badge>
                                    <Separator />
                                    <ul className="space-y-3 text-sm text-left">
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span>All Premium features</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>API access</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Algo trading</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span>₹5,00,000 virtual trading</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span><strong>Dedicated account manager</strong></span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span>Custom alerts & notifications</span>
                                        </li>
                                    </ul>
                                </div>
                            </Card>
                        </div>

                        <Alert className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                            <Info className="w-4 h-4 text-blue-600" />
                            <AlertDescription className="text-blue-900">
                                <strong>All trials include:</strong> Zero brokerage on delivery trades, instant fund withdrawal, and access to NSE & BSE markets. No auto-renewal - your choice after trial ends.
                            </AlertDescription>
                        </Alert>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-6">
                        <div className="text-center space-y-2 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <User className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl">Tell us about yourself</h2>
                            <p className="text-muted-foreground">
                                We need just a few details to set up your trial account
                            </p>
                        </div>

                        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg mb-1">Selected Plan: {formData.trialPlan === 'basic' ? 'Basic' : formData.trialPlan === 'premium' ? 'Premium AI' : 'Pro Trader'}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {formData.trialPlan === 'basic' ? '7 days' : formData.trialPlan === 'premium' ? '30 days' : '60 days'} free trial - No payment required
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name *</Label>
                                <Input
                                    id="fullName"
                                    placeholder="Enter your full name"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="dob">Date of Birth *</Label>
                                <Input
                                    id="dob"
                                    type="date"
                                    value={formData.dob}
                                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address *</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        className="pl-10"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <p className="text-xs text-muted-foreground">We'll send your trial access here</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="mobile">Mobile Number *</Label>
                                <div className="flex gap-2">
                                    <div className="w-20">
                                        <Input value="+91" disabled className="text-center" />
                                    </div>
                                    <Input
                                        id="mobile"
                                        type="tel"
                                        placeholder="9876543210"
                                        maxLength={10}
                                        value={formData.mobile}
                                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, "") })}
                                    />
                                </div>
                                <p className="text-xs text-muted-foreground">For OTP verification & alerts</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="referralCode">Referral Code (Optional)</Label>
                            <Input
                                id="referralCode"
                                placeholder="Enter referral code"
                                value={formData.referralCode}
                                onChange={(e) => setFormData({ ...formData, referralCode: e.target.value.toUpperCase() })}
                            />
                            <p className="text-xs text-muted-foreground">
                                <Gift className="w-3 h-3 inline mr-1" />
                                Get ₹500 bonus credits with a valid referral code
                            </p>
                        </div>

                        <Alert>
                            <Shield className="w-4 h-4" />
                            <AlertDescription>
                                Your data is encrypted and secure. We'll never share your information with third parties.
                            </AlertDescription>
                        </Alert>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6">
                        <div className="text-center space-y-2 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CreditCard className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl">Quick KYC Verification</h2>
                            <p className="text-muted-foreground">
                                Required for trading on NSE & BSE as per SEBI regulations
                            </p>
                        </div>

                        <Alert className="bg-yellow-50 border-yellow-200">
                            <Zap className="w-4 h-4 text-yellow-600" />
                            <AlertDescription className="text-yellow-900">
                                <strong>Skip for now:</strong> You can complete full KYC later. For trial, we just need basic verification to get you started quickly!
                            </AlertDescription>
                        </Alert>

                        <div className="space-y-2">
                            <Label htmlFor="panNumber">PAN Number *</Label>
                            <Input
                                id="panNumber"
                                type="text"
                                placeholder="ABCDE1234F"
                                maxLength={10}
                                className="uppercase"
                                value={formData.panNumber}
                                onChange={(e) => setFormData({ ...formData, panNumber: e.target.value.toUpperCase() })}
                            />
                            <p className="text-xs text-muted-foreground">
                                Required for instant verification via Income Tax database
                            </p>
                        </div>

                        <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                            <h3 className="text-lg mb-4 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-purple-600" />
                                Instant Verification with DigiLocker
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Fetch your PAN & Aadhaar instantly from DigiLocker - 100% secure & government-verified
                            </p>
                            <Button className="w-full gap-2" variant="outline" size="lg">
                                <FileText className="w-4 h-4" />
                                Connect DigiLocker (Recommended)
                            </Button>
                        </Card>

                        <Separator className="my-6">
                            <span className="bg-background px-2 text-sm text-muted-foreground">OR</span>
                        </Separator>

                        <div className="space-y-4">
                            <h3 className="flex items-center gap-2">
                                <Upload className="w-5 h-5" />
                                Upload PAN Card Manually
                            </h3>
                            <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                                <p className="text-sm mb-1">Click to upload or drag and drop</p>
                                <p className="text-xs text-muted-foreground">PNG, JPG or PDF (Max 5MB)</p>
                            </div>
                        </div>

                        <Alert className="bg-blue-50 border-blue-200">
                            <Info className="w-4 h-4 text-blue-600" />
                            <AlertDescription className="text-blue-900">
                                <strong>For Trial Only:</strong> Full KYC with video verification can be completed before live trading. Start exploring with virtual money now!
                            </AlertDescription>
                        </Alert>
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-6">
                        <div className="text-center space-y-2 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Building2 className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl">Link Bank Account (Optional)</h2>
                            <p className="text-muted-foreground">
                                Add your bank for easy fund transfers when you're ready to go live
                            </p>
                        </div>

                        <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg mb-2">You can skip this step!</h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        During the trial, you'll trade with virtual money. Add your bank details later when you're ready for live trading.
                                    </p>
                                    <Button variant="outline" onClick={handleNext}>
                                        Skip & Continue with Trial
                                        <ChevronRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </Card>

                        <Separator className="my-6">
                            <span className="bg-background px-2 text-sm text-muted-foreground">OR Add Bank Now</span>
                        </Separator>

                        <div className="space-y-2">
                            <Label htmlFor="bankName">Bank Name</Label>
                            <Input
                                id="bankName"
                                placeholder="Select or enter bank name"
                                value={formData.bankName}
                                onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="accountNumber">Account Number</Label>
                            <Input
                                id="accountNumber"
                                type="text"
                                placeholder="Enter account number"
                                value={formData.accountNumber}
                                onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="ifscCode">IFSC Code</Label>
                                <Input
                                    id="ifscCode"
                                    type="text"
                                    placeholder="SBIN0001234"
                                    className="uppercase"
                                    value={formData.ifscCode}
                                    onChange={(e) => setFormData({ ...formData, ifscCode: e.target.value.toUpperCase() })}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="accountType">Account Type</Label>
                                <RadioGroup value={formData.accountType} onValueChange={(value) => setFormData({ ...formData, accountType: value })}>
                                    <div className="flex gap-4">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="savings" id="savings" />
                                            <Label htmlFor="savings" className="cursor-pointer">Savings</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="current" id="current" />
                                            <Label htmlFor="current" className="cursor-pointer">Current</Label>
                                        </div>
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>

                        <Alert>
                            <Shield className="w-4 h-4" />
                            <AlertDescription>
                                Your bank details are encrypted and stored securely. Instant transfers via UPI, NEFT, RTGS & IMPS available.
                            </AlertDescription>
                        </Alert>
                    </div>
                );

            case 5:
                return (
                    <div className="space-y-6">
                        <div className="text-center space-y-2 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl">Set Your Trading Preferences</h2>
                            <p className="text-muted-foreground">
                                Help us personalize your trial experience
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg">What interests you? (Select all that apply)</h3>

                            <Card
                                className={`p-6 cursor-pointer transition-all ${formData.segments.includes('equity')
                                    ? 'border-primary bg-primary/5'
                                    : 'hover:border-primary/50'
                                    }`}
                                onClick={() => toggleSegment('equity')}
                            >
                                <div className="flex items-start gap-4">
                                    <Checkbox
                                        checked={formData.segments.includes('equity')}
                                        onCheckedChange={() => toggleSegment('equity')}
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <TrendingUp className="w-5 h-5 text-blue-600" />
                                            <h3 className="text-xl">Equity Trading</h3>
                                            <Badge className="bg-green-100 text-green-900">Recommended for beginners</Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Buy and sell stocks on NSE & BSE. Perfect for long-term investing and intraday trading.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary">NSE Stocks</Badge>
                                            <Badge variant="secondary">BSE Stocks</Badge>
                                            <Badge variant="secondary">Blue Chip</Badge>
                                            <Badge variant="secondary">Mid/Small Cap</Badge>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card
                                className={`p-6 cursor-pointer transition-all ${formData.segments.includes('fo')
                                    ? 'border-primary bg-primary/5'
                                    : 'hover:border-primary/50'
                                    }`}
                                onClick={() => toggleSegment('fo')}
                            >
                                <div className="flex items-start gap-4">
                                    <Checkbox
                                        checked={formData.segments.includes('fo')}
                                        onCheckedChange={() => toggleSegment('fo')}
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Zap className="w-5 h-5 text-purple-600" />
                                            <h3 className="text-xl">Futures & Options</h3>
                                            <Badge variant="outline">Advanced</Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Leverage and hedge your positions with derivatives trading.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary">Index Options</Badge>
                                            <Badge variant="secondary">Stock Futures</Badge>
                                            <Badge variant="secondary">Weekly Expiry</Badge>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card
                                className={`p-6 cursor-pointer transition-all ${formData.segments.includes('mutualfunds')
                                    ? 'border-primary bg-primary/5'
                                    : 'hover:border-primary/50'
                                    }`}
                                onClick={() => toggleSegment('mutualfunds')}
                            >
                                <div className="flex items-start gap-4">
                                    <Checkbox
                                        checked={formData.segments.includes('mutualfunds')}
                                        onCheckedChange={() => toggleSegment('mutualfunds')}
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Wallet className="w-5 h-5 text-green-600" />
                                            <h3 className="text-xl">Mutual Funds & SIP</h3>
                                            <Badge className="bg-blue-100 text-blue-900">Zero commission</Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Invest in mutual funds with systematic investment plans starting at ₹100.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary">Equity Funds</Badge>
                                            <Badge variant="secondary">Debt Funds</Badge>
                                            <Badge variant="secondary">SIP</Badge>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card
                                className={`p-6 cursor-pointer transition-all ${formData.segments.includes('commodity')
                                    ? 'border-primary bg-primary/5'
                                    : 'hover:border-primary/50'
                                    }`}
                                onClick={() => toggleSegment('commodity')}
                            >
                                <div className="flex items-start gap-4">
                                    <Checkbox
                                        checked={formData.segments.includes('commodity')}
                                        onCheckedChange={() => toggleSegment('commodity')}
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Award className="w-5 h-5 text-yellow-600" />
                                            <h3 className="text-xl">Commodity Trading</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Trade in gold, silver, crude oil, and other commodities on MCX.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary">Gold</Badge>
                                            <Badge variant="secondary">Silver</Badge>
                                            <Badge variant="secondary">Crude Oil</Badge>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <Alert className="bg-blue-50 border-blue-200">
                            <Info className="w-4 h-4 text-blue-600" />
                            <AlertDescription className="text-blue-900">
                                Don't worry! You'll have access to all segments during your trial. These preferences help us customize your dashboard.
                            </AlertDescription>
                        </Alert>
                    </div>
                );

            case 6:
                return (
                    <div className="space-y-8">
                        <div className="text-center space-y-4 mb-8">
                            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                <Rocket className="w-12 h-12 text-white" />
                            </div>
                            <h2 className="text-4xl">You're All Set! 🎉</h2>
                            <p className="text-xl text-muted-foreground">
                                Your {formData.trialPlan === 'basic' ? '7-day' : formData.trialPlan === 'premium' ? '30-day' : '60-day'} free trial is ready to begin
                            </p>
                        </div>

                        <Card className="p-8 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 border-purple-200">
                            <h3 className="text-2xl mb-6 text-center">What's included in your trial:</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1">Virtual Trading Account</h4>
                                        <p className="text-sm text-muted-foreground">
                                            ₹{formData.trialPlan === 'basic' ? '10,000' : formData.trialPlan === 'premium' ? '1,00,000' : '5,00,000'} virtual money to practice
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1">Real-time Market Data</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Live NSE & BSE quotes and charts
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1">AI-Powered Insights</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Smart trade signals and recommendations
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1">Learning Resources</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Tutorials, webinars, and trading guides
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1">Portfolio Analytics</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Track performance with detailed reports
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1">Priority Support</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Get help whenever you need it
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <div className="grid md:grid-cols-3 gap-4">
                            <Card className="p-6 text-center bg-blue-50 border-blue-200">
                                <Smartphone className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                                <h4 className="mb-2">Download Mobile App</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Trade on the go with our iOS & Android app
                                </p>
                                <Button size="sm" variant="outline" className="w-full">
                                    Get App
                                </Button>
                            </Card>
                            <Card className="p-6 text-center bg-green-50 border-green-200">
                                <FileText className="w-12 h-12 text-green-600 mx-auto mb-3" />
                                <h4 className="mb-2">Quick Start Guide</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Learn the basics in 5 minutes
                                </p>
                                <Button size="sm" variant="outline" className="w-full">
                                    View Guide
                                </Button>
                            </Card>
                            <Card className="p-6 text-center bg-purple-50 border-purple-200">
                                <Users className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                                <h4 className="mb-2">Join Community</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Connect with 5L+ traders
                                </p>
                                <Button size="sm" variant="outline" className="w-full">
                                    Join Now
                                </Button>
                            </Card>
                        </div>

                        <div className="flex items-start gap-2 text-sm p-4 bg-muted/50 rounded-lg">
                            <Checkbox
                                id="terms"
                                checked={formData.hasAgreed}
                                onCheckedChange={(checked) => setFormData({ ...formData, hasAgreed: checked as boolean })}
                            />
                            <label htmlFor="terms" className="text-muted-foreground cursor-pointer">
                                I agree to the{" "}
                                <button type="button" className="text-primary hover:underline">
                                    Terms & Conditions
                                </button>
                                ,{" "}
                                <button type="button" className="text-primary hover:underline">
                                    Privacy Policy
                                </button>
                                , and understand that this is a free trial with no auto-renewal. I can upgrade to a paid plan at any time.
                            </label>
                        </div>

                        <Alert className="bg-linear-to-r from-yellow-50 to-orange-50 border-yellow-300">
                            <AlertCircle className="w-4 h-4 text-yellow-600" />
                            <AlertDescription className="text-yellow-900">
                                <strong>Important:</strong> Your trial will NOT auto-renew. After {formData.trialPlan === 'basic' ? '7 days' : formData.trialPlan === 'premium' ? '30 days' : '60 days'}, you can choose to upgrade or continue with our free features.
                            </AlertDescription>
                        </Alert>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen pt-20 px-4 py-12 bg-linear-to-br from-blue-50 via-background to-purple-50">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <Badge className="inline-flex items-center gap-2 bg-green-100 text-green-900 border-green-200 mb-4 text-base px-4 py-2">
                        <Sparkles className="w-5 h-5" />
                        Start Your Free Trial - No Credit Card Required
                    </Badge>
                    <h1 className="text-5xl mb-4">Experience AI-Powered Trading</h1>
                    <p className="text-xl text-muted-foreground">
                        Join 5 lakh+ traders who trust Dravya for smart investing
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-sm">Step {currentStep} of 6</p>
                        <p className="text-sm">{Math.round(progressPercentage)}% Complete</p>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                </div>

                {/* Step Indicators */}
                <div className="hidden md:flex justify-between mb-12">
                    {steps.map((step) => {
                        const IconComponent = step.icon;
                        const isCompleted = currentStep > step.number;
                        const isCurrent = currentStep === step.number;

                        return (
                            <div
                                key={step.number}
                                className={`flex flex-col items-center gap-2 flex-1 ${step.number !== 6 ? 'relative' : ''
                                    }`}
                            >
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isCompleted
                                        ? 'bg-green-500 text-white'
                                        : isCurrent
                                            ? 'bg-primary text-primary-foreground'
                                            : 'bg-muted text-muted-foreground'
                                        }`}
                                >
                                    {isCompleted ? (
                                        <Check className="w-6 h-6" />
                                    ) : (
                                        <IconComponent className="w-6 h-6" />
                                    )}
                                </div>
                                <p className={`text-xs text-center ${isCurrent ? '' : 'text-muted-foreground'}`}>
                                    {step.title}
                                </p>
                                {step.number !== 6 && (
                                    <div
                                        className={`absolute top-6 left-[60%] w-full h-0.5 ${isCompleted ? 'bg-green-500' : 'bg-muted'
                                            }`}
                                        style={{ zIndex: -1 }}
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Main Content */}
                <Card className="p-8 md:p-12 shadow-lg mb-8">
                    {renderStepContent()}
                </Card>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={handlePrevious}
                        disabled={currentStep === 1}
                        className="gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Previous
                    </Button>

                    {currentStep === 6 ? (
                        <Button
                            size="lg"
                            className="gap-2 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                            disabled={!formData.hasAgreed}
                        >
                            Start My Free Trial
                            <Rocket className="w-4 h-4" />
                        </Button>
                    ) : (
                        <Button size="lg" onClick={handleNext} className="gap-2">
                            Next Step
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    )}
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
                    <Card className="p-6 bg-lineaer-to-br from-green-50 to-emerald-50 border-green-200">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Shield className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="mb-2">100% Secure</h3>
                        <p className="text-sm text-muted-foreground">SEBI registered & regulated</p>
                    </Card>
                    <Card className="p-6 bg-linear-to-br from-blue-50 to-cyan-50 border-blue-200">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Users className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="mb-2">5L+ Traders</h3>
                        <p className="text-sm text-muted-foreground">Trust Dravya daily</p>
                    </Card>
                    <Card className="p-6 bg-linear-to-br from-purple-50 to-pink-50 border-purple-200">
                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="mb-2">4.8★ Rating</h3>
                        <p className="text-sm text-muted-foreground">On App Store & Play Store</p>
                    </Card>
                    <Card className="p-6 bg-linear-to-br from-yellow-50 to-orange-50 border-yellow-200">
                        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Award className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="mb-2">Award Winning</h3>
                        <p className="text-sm text-muted-foreground">Best AI Trading Platform 2024</p>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default StartFreeTrial;