"use client"

import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Progress } from "../components/ui/progress";
import { Checkbox } from "../components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
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
    Target
} from "lucide-react";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Separator } from "../components/ui/seperator";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

export function StartTrading() {
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
        segments: [] as string[],
        hasAgreed: false
    });

    const steps = [
        { number: 1, title: "Personal Details", icon: User },
        { number: 2, title: "PAN & Identity", icon: CreditCard },
        { number: 3, title: "Bank Details", icon: Building2 },
        { number: 4, title: "Documents", icon: Upload },
        { number: 5, title: "Video KYC", icon: Video },
        { number: 6, title: "Segment Selection", icon: TrendingUp }
    ];

    const progressPercentage = ((currentStep) / 6) * 100;

    const handleNextStep = () => {
        if (currentStep < 6) {
            setCurrentStep((currentStep + 1) as Step);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        async function submitStep(){
            
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
                    <div className="space-y-6">
                        <div className="text-center space-y-2 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <User className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl">Let's get started!</h2>
                            <p className="text-muted-foreground">
                                Enter your personal details to begin your trading journey
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name (as per PAN) *</Label>
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

                        <div className="space-y-2">
                            <Label>Gender *</Label>
                            <RadioGroup value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                                <div className="flex gap-6">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="male" id="male" />
                                        <Label htmlFor="male" className="cursor-pointer">Male</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="female" id="female" />
                                        <Label htmlFor="female" className="cursor-pointer">Female</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="other" id="other" />
                                        <Label htmlFor="other" className="cursor-pointer">Other</Label>
                                    </div>
                                </div>
                            </RadioGroup>
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
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">Residential Address *</Label>
                            <Input
                                id="address"
                                placeholder="Enter your complete address"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="pincode">Pincode *</Label>
                                <Input
                                    id="pincode"
                                    type="text"
                                    placeholder="400001"
                                    maxLength={6}
                                    value={formData.pincode}
                                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value.replace(/\D/g, "") })}
                                />
                            </div>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className="space-y-6">
                        <div className="text-center space-y-2 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CreditCard className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl">PAN Verification</h2>
                            <p className="text-muted-foreground">
                                Your PAN is required for KYC compliance as per SEBI guidelines
                            </p>
                        </div>

                        <Alert className="bg-blue-50 border-blue-200">
                            <Info className="w-4 h-4 text-blue-600" />
                            <AlertDescription className="text-blue-900">
                                Your PAN details will be verified instantly with Income Tax Department
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
                                Enter your 10-digit PAN number
                            </p>
                        </div>

                        <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                            <h3 className="text-lg mb-4 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-purple-600" />
                                DigiLocker Integration
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Fetch your PAN details instantly from DigiLocker - 100% secure and paperless
                            </p>
                            <Button className="w-full gap-2" variant="outline">
                                <FileText className="w-4 h-4" />
                                Fetch from DigiLocker
                            </Button>
                        </Card>

                        <div className="space-y-4">
                            <h3 className="flex items-center gap-2">
                                <Upload className="w-5 h-5" />
                                Upload PAN Card
                            </h3>
                            <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                                <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                                <p className="text-sm mb-1">Click to upload or drag and drop</p>
                                <p className="text-xs text-muted-foreground">PNG, JPG or PDF (Max 5MB)</p>
                            </div>
                        </div>

                        <Alert>
                            <Shield className="w-4 h-4" />
                            <AlertDescription>
                                Your PAN details are encrypted and stored securely. We never share your information.
                            </AlertDescription>
                        </Alert>
                    </div>
                );

            case 3:
                return (
                    <div className="space-y-6">
                        <div className="text-center space-y-2 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Building2 className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl">Bank Account Details</h2>
                            <p className="text-muted-foreground">
                                Link your bank account for seamless fund transfers
                            </p>
                        </div>

                        <Alert className="bg-green-50 border-green-200">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            <AlertDescription className="text-green-900">
                                Instant fund transfer via UPI, NEFT, RTGS, and IMPS
                            </AlertDescription>
                        </Alert>

                        <div className="space-y-2">
                            <Label htmlFor="bankName">Bank Name *</Label>
                            <Input
                                id="bankName"
                                placeholder="Select or enter bank name"
                                value={formData.bankName}
                                onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="accountNumber">Account Number *</Label>
                            <Input
                                id="accountNumber"
                                type="text"
                                placeholder="Enter account number"
                                value={formData.accountNumber}
                                onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirmAccount">Confirm Account Number *</Label>
                            <Input
                                id="confirmAccount"
                                type="text"
                                placeholder="Re-enter account number"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="ifscCode">IFSC Code *</Label>
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
                                <Label htmlFor="accountType">Account Type *</Label>
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

                        <div className="space-y-4">
                            <h3 className="flex items-center gap-2">
                                <Upload className="w-5 h-5" />
                                Upload Cancelled Cheque or Bank Statement
                            </h3>
                            <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                                <File className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                                <p className="text-sm mb-1">Click to upload or drag and drop</p>
                                <p className="text-xs text-muted-foreground">PNG, JPG or PDF (Max 5MB)</p>
                            </div>
                        </div>
                    </div>
                );

            case 4:
                return (
                    <div className="space-y-6">
                        <div className="text-center space-y-2 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Upload className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl">Document Upload</h2>
                            <p className="text-muted-foreground">
                                Upload required documents for KYC verification
                            </p>
                        </div>

                        <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
                            <h3 className="text-lg mb-4 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-blue-600" />
                                Quick Upload via DigiLocker
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                                Instantly fetch your Aadhaar and other documents from DigiLocker
                            </p>
                            <Button className="w-full gap-2">
                                <FileText className="w-4 h-4" />
                                Connect DigiLocker
                            </Button>
                        </Card>

                        <Separator />

                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="flex items-center gap-2">
                                        <FileText className="w-5 h-5" />
                                        Aadhaar Card *
                                    </h3>
                                    <Badge variant="outline">Required</Badge>
                                </div>
                                <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                                    <p className="text-sm mb-1">Upload Front & Back</p>
                                    <p className="text-xs text-muted-foreground">PNG, JPG or PDF (Max 5MB each)</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="flex items-center gap-2">
                                        <FileText className="w-5 h-5" />
                                        Income Proof
                                    </h3>
                                    <Badge variant="secondary">Optional for F&O</Badge>
                                </div>
                                <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                                    <p className="text-sm mb-1">Salary Slip, IT Returns, or Bank Statement</p>
                                    <p className="text-xs text-muted-foreground">PNG, JPG or PDF (Max 5MB)</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="flex items-center gap-2">
                                        <Camera className="w-5 h-5" />
                                        Your Signature *
                                    </h3>
                                    <Badge variant="outline">Required</Badge>
                                </div>
                                <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                                    <p className="text-sm mb-1">Upload on white paper</p>
                                    <p className="text-xs text-muted-foreground">PNG or JPG (Max 2MB)</p>
                                </div>
                            </div>
                        </div>

                        <Alert>
                            <Lock className="w-4 h-4" />
                            <AlertDescription>
                                All documents are encrypted with 256-bit SSL and stored securely as per SEBI guidelines.
                            </AlertDescription>
                        </Alert>
                    </div>
                );

            case 5:
                return (
                    <div className="space-y-6">
                        <div className="text-center space-y-2 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Video className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl">Video KYC Verification</h2>
                            <p className="text-muted-foreground">
                                Complete your verification via a quick video call with our team
                            </p>
                        </div>

                        <Card className="p-6 text-center space-y-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-md">
                                <Clock className="w-10 h-10 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl mb-2">2-3 Minutes</h3>
                                <p className="text-muted-foreground">Average verification time</p>
                            </div>
                        </Card>

                        <div className="space-y-4">
                            <h3 className="text-lg">What you'll need:</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Card className="p-4 flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="mb-1">Original PAN Card</p>
                                        <p className="text-xs text-muted-foreground">Physical copy for verification</p>
                                    </div>
                                </Card>
                                <Card className="p-4 flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="mb-1">Good Internet Connection</p>
                                        <p className="text-xs text-muted-foreground">4G or WiFi recommended</p>
                                    </div>
                                </Card>
                                <Card className="p-4 flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="mb-1">Well-lit Environment</p>
                                        <p className="text-xs text-muted-foreground">Clear visibility required</p>
                                    </div>
                                </Card>
                                <Card className="p-4 flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="mb-1">Working Camera & Mic</p>
                                        <p className="text-xs text-muted-foreground">On your device</p>
                                    </div>
                                </Card>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg">Schedule Video KYC:</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Preferred Date</Label>
                                    <Input type="date" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Preferred Time Slot</Label>
                                    <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                                        <option>9:00 AM - 12:00 PM</option>
                                        <option>12:00 PM - 3:00 PM</option>
                                        <option>3:00 PM - 6:00 PM</option>
                                        <option>6:00 PM - 9:00 PM</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <Alert className="bg-blue-50 border-blue-200">
                            <Info className="w-4 h-4 text-blue-600" />
                            <AlertDescription className="text-blue-900">
                                You can also complete Video KYC instantly if you're ready now!
                            </AlertDescription>
                        </Alert>

                        <div className="grid md:grid-cols-2 gap-4">
                            <Button variant="outline" className="gap-2" size="lg">
                                <Clock className="w-4 h-4" />
                                Schedule for Later
                            </Button>
                            <Button className="gap-2" size="lg">
                                <Video className="w-4 h-4" />
                                Start Video KYC Now
                            </Button>
                        </div>
                    </div>
                );

            case 6:
                return (
                    <div className="space-y-6">
                        <div className="text-center space-y-2 mb-8">
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h2 className="text-3xl">Choose Trading Segments</h2>
                            <p className="text-muted-foreground">
                                Select the segments you want to trade in
                            </p>
                        </div>

                        <div className="space-y-4">
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
                                            <h3 className="text-xl">Equity (Cash & Delivery)</h3>
                                            <Badge className="bg-green-100 text-green-900">Zero Brokerage</Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Buy and sell stocks on NSE & BSE. Zero brokerage on delivery trades.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary">NSE</Badge>
                                            <Badge variant="secondary">BSE</Badge>
                                            <Badge variant="secondary">Intraday</Badge>
                                            <Badge variant="secondary">Delivery</Badge>
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
                                            <h3 className="text-xl">Futures & Options (F&O)</h3>
                                            <Badge variant="outline">Income Proof Required</Badge>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Trade in derivatives for leveraged positions. Higher risk, higher returns.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary">Index Futures</Badge>
                                            <Badge variant="secondary">Stock Futures</Badge>
                                            <Badge variant="secondary">Options</Badge>
                                            <Badge variant="secondary">Weekly Expiry</Badge>
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
                                            <h3 className="text-xl">Commodity</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Trade in gold, silver, crude oil, and other commodities on MCX.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary">Gold</Badge>
                                            <Badge variant="secondary">Silver</Badge>
                                            <Badge variant="secondary">Crude Oil</Badge>
                                            <Badge variant="secondary">Natural Gas</Badge>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            <Card
                                className={`p-6 cursor-pointer transition-all ${formData.segments.includes('currency')
                                        ? 'border-primary bg-primary/5'
                                        : 'hover:border-primary/50'
                                    }`}
                                onClick={() => toggleSegment('currency')}
                            >
                                <div className="flex items-start gap-4">
                                    <Checkbox
                                        checked={formData.segments.includes('currency')}
                                        onCheckedChange={() => toggleSegment('currency')}
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Wallet className="w-5 h-5 text-green-600" />
                                            <h3 className="text-xl">Currency</h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Trade in currency pairs like USD/INR, EUR/INR, and more.
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge variant="secondary">USD/INR</Badge>
                                            <Badge variant="secondary">EUR/INR</Badge>
                                            <Badge variant="secondary">GBP/INR</Badge>
                                            <Badge variant="secondary">JPY/INR</Badge>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <Alert className="bg-yellow-50 border-yellow-200">
                            <AlertCircle className="w-4 h-4 text-yellow-600" />
                            <AlertDescription className="text-yellow-900">
                                You can enable additional segments later from your account settings.
                            </AlertDescription>
                        </Alert>

                        <div className="flex items-start gap-2 text-sm">
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
                                , and{" "}
                                <button type="button" className="text-primary hover:underline">
                                    Risk Disclosure
                                </button>
                            </label>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen pt-20 px-4 py-12 bg-gradient-to-br from-blue-50 via-background to-purple-50">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <Badge className="inline-flex items-center gap-2 bg-green-100 text-green-900 border-green-200 mb-4">
                        <Rocket className="w-4 h-4" />
                        100% Paperless • Zero Account Opening Charges
                    </Badge>
                    <h1 className="text-5xl mb-4">Open Your Trading Account</h1>
                    <p className="text-xl text-muted-foreground">
                        Get started in just 10 minutes with our simple onboarding process
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
                            className="gap-2"
                            disabled={!formData.hasAgreed || formData.segments.length === 0}
                        >
                            Complete Registration
                            <Rocket className="w-4 h-4" />
                        </Button>
                    ) : (
                        <Button size="lg" onClick={handleNextStep} className="gap-2">
                            Proceed to Next
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    )}
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
                    <Card className="p-6">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Shield className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="mb-2">100% Secure</h3>
                        <p className="text-sm text-muted-foreground">Bank-grade encryption</p>
                    </Card>
                    <Card className="p-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Clock className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="mb-2">10 Min Process</h3>
                        <p className="text-sm text-muted-foreground">Quick onboarding</p>
                    </Card>
                    <Card className="p-6">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="mb-2">5L+ Traders</h3>
                        <p className="text-sm text-muted-foreground">Trust Dravya</p>
                    </Card>
                    <Card className="p-6">
                        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Star className="w-6 h-6 text-yellow-600" />
                        </div>
                        <h3 className="mb-2">4.8★ Rating</h3>
                        <p className="text-sm text-muted-foreground">Highly rated app</p>
                    </Card>
                </div>
            </div>
        </div>
    );
}


export default StartTrading;