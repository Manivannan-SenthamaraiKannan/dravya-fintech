"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
// import { Progress } from "./ui/progress";
// import { Separator } from "../components/ui/separator";
import {
  Wallet,
  Shield,
  Zap,
  CheckCircle2,
  CreditCard,
  FileText,
  Smartphone,
  Video,
  Clock,
  Users,
  TrendingUp,
  Award,
  Lock,
  Upload,
  Camera,
  ArrowRight,
  Building2,
  Globe,
  IndianRupee,
  Star,
  Target,
  Gift,
  Sparkles,
  Check,
  Info,
  AlertCircle,
  Play,
  Download,
  UserCheck,
  Fingerprint,
  Mail,
  Phone,
  Home,
  Briefcase,
  ChevronRight,
  Rocket,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  User
} from "lucide-react";
import { Alert, AlertDescription } from "./ui/alert";

export function OpenDematAccount({ setCurrentPage }: { setCurrentPage?: (page: string) => void }) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const benefits = [
    {
      icon: IndianRupee,
      title: "Zero Account Opening Fee",
      description: "Open your demat account completely free. No hidden charges or processing fees.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Zap,
      title: "Instant Activation",
      description: "Get your account activated in just 24 hours with our paperless digital process.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Shield,
      title: "100% Secure & SEBI Regulated",
      description: "Your investments are protected with bank-level security and SEBI compliance.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Smartphone,
      title: "Digital Account Management",
      description: "Manage your portfolio anytime, anywhere with our mobile and web platforms.",
      color: "from-orange-500 to-red-600"
    }
  ];

  const kyc_requirements = [
    {
      icon: CreditCard,
      title: "PAN Card",
      description: "Your Permanent Account Number is mandatory for all trading accounts",
      required: true
    },
    {
      icon: Fingerprint,
      title: "Aadhaar Card",
      description: "For instant verification via DigiLocker or physical copy",
      required: true
    },
    {
      icon: FileText,
      title: "Address Proof",
      description: "Bank statement, utility bill, or Aadhaar (if different from PAN)",
      required: false
    },
    {
      icon: Camera,
      title: "Recent Photograph",
      description: "Passport size photo or live selfie during verification",
      required: true
    },
    {
      icon: Building2,
      title: "Bank Account Details",
      description: "Cancelled cheque or bank statement for fund transfers",
      required: true
    },
    {
      icon: FileText,
      title: "Income Proof",
      description: "Salary slip, ITR, or bank statement (optional but recommended)",
      required: false
    }
  ];

  const onboarding_steps = [
    {
      step: 1,
      title: "Basic Details",
      duration: "2 mins",
      icon: User,
      description: "Enter your personal information",
      details: [
        "Full name as per PAN card",
        "Email address & mobile number",
        "Date of birth and gender",
        "Father's/Mother's name",
        "Marital status"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      title: "PAN Verification",
      duration: "1 min",
      icon: CreditCard,
      description: "Verify your PAN instantly",
      details: [
        "Enter 10-digit PAN number",
        "Instant verification with Income Tax database",
        "Auto-fill name and DOB from PAN",
        "Digital signature consent",
        "PAN and Aadhaar linking status check"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 3,
      title: "Address & Contact",
      duration: "3 mins",
      icon: Home,
      description: "Provide your address details",
      details: [
        "Current residential address",
        "PIN code verification",
        "Correspondence address (if different)",
        "Contact preferences",
        "Address proof document upload"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      step: 4,
      title: "Bank Account Linking",
      duration: "2 mins",
      icon: Building2,
      description: "Link your bank account",
      details: [
        "Primary bank account details",
        "IFSC code auto-detection",
        "Account type (Savings/Current)",
        "Penny drop verification",
        "UPI ID linking (optional)"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      step: 5,
      title: "Income & Occupation",
      duration: "2 mins",
      icon: Briefcase,
      description: "Financial background information",
      details: [
        "Occupation type (Salaried/Business/Professional)",
        "Annual income range",
        "Trading experience level",
        "Investment objectives",
        "Risk appetite assessment"
      ],
      color: "from-pink-500 to-pink-600"
    },
    {
      step: 6,
      title: "Document Upload",
      duration: "3 mins",
      icon: Upload,
      description: "Upload required documents",
      details: [
        "PAN card copy (auto-fetched if DigiLocker used)",
        "Aadhaar card (front & back)",
        "Recent photograph or selfie",
        "Bank proof (cancelled cheque/statement)",
        "Signature upload"
      ],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      step: 7,
      title: "In-Person Verification (IPV)",
      duration: "5 mins",
      icon: Video,
      description: "Video KYC with our executive",
      details: [
        "Schedule convenient time slot",
        "Live video call with SEBI-certified agent",
        "Document verification on call",
        "Identity confirmation",
        "Instant approval (if all docs clear)"
      ],
      color: "from-red-500 to-red-600"
    },
    {
      step: 8,
      title: "Segment Selection",
      duration: "2 mins",
      icon: Target,
      description: "Choose your trading segments",
      details: [
        "Equity (NSE & BSE stocks)",
        "Derivatives (Futures & Options)",
        "Currency trading",
        "Commodity trading",
        "Mutual Funds & IPOs"
      ],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      step: 9,
      title: "E-Sign & Agreement",
      duration: "2 mins",
      icon: FileText,
      description: "Digital signature on documents",
      details: [
        "Review account opening form",
        "Terms & conditions agreement",
        "SEBI & Exchange agreements",
        "E-sign via Aadhaar OTP",
        "Nomination details (optional)"
      ],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      step: 10,
      title: "Account Activation",
      duration: "24 hrs",
      icon: CheckCircle2,
      description: "Your account is being activated",
      details: [
        "Backend verification process",
        "Account number generation",
        "DP ID & Client ID creation",
        "Welcome kit with credentials",
        "Activation confirmation via email/SMS"
      ],
      color: "from-green-500 to-emerald-600"
    }
  ];

  const features = [
    { icon: IndianRupee, text: "₹0 Brokerage on delivery trades" },
    { icon: Zap, text: "Instant fund withdrawal" },
    { icon: Smartphone, text: "Trade on mobile & web" },
    { icon: Shield, text: "Insurance up to ₹1 Lakh" },
    { icon: Award, text: "Free lifetime AMC" },
    { icon: Activity, text: "Real-time portfolio tracking" },
    { icon: BarChart3, text: "Advanced charting tools" },
    { icon: PieChart, text: "AI-powered insights" }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 py-12">
      {/* Hero Section */}
      <div className="container mx-auto mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="inline-flex items-center gap-2 bg-green-100 text-green-900 border-green-200 text-lg px-4 py-2">
              <Sparkles className="w-5 h-5" />
              100% Digital & Paperless
            </Badge>
            <h1 className="text-5xl md:text-6xl">
              Open Your Free Demat Account Today
            </h1>
            <p className="text-xl text-muted-foreground">
              Start your investment journey with India's most trusted AI-powered trading platform. Get started in just 10 minutes with completely digital KYC.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="gap-2 text-lg px-8 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                onClick={() => setCurrentPage && setCurrentPage("startfreetrial")}
              >
                Open Account Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8">
                <Play className="w-5 h-5" />
                Watch How It Works
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <span className="text-sm">Zero opening fee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <span className="text-sm">24hr activation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <span className="text-sm">SEBI regulated</span>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Wallet className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl">Account Opening Process</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span>Total Time</span>
                  </div>
                  <span className="text-lg">~20 minutes</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <IndianRupee className="w-5 h-5 text-green-600" />
                    <span>Opening Fee</span>
                  </div>
                  <span className="text-lg">₹0</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-600" />
                    <span>Accounts Opened</span>
                  </div>
                  <span className="text-lg">5L+</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Why Choose TradeAI Demat Account?</h2>
          <p className="text-xl text-muted-foreground">
            Experience the future of investing with our feature-rich platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* What You Need - KYC Requirements */}
      <div className="container mx-auto mb-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-base px-4 py-2">KYC Requirements</Badge>
          <h2 className="text-4xl mb-4">What You'll Need</h2>
          <p className="text-xl text-muted-foreground">
            Keep these documents handy for a smooth account opening process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kyc_requirements.map((req, index) => {
            const IconComponent = req.icon;
            return (
              <Card key={index} className={`p-6 ${req.required ? 'border-2 border-primary' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${req.required ? 'bg-primary' : 'bg-muted'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`w-6 h-6 ${req.required ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg">{req.title}</h3>
                      {req.required && (
                        <Badge variant="destructive" className="text-xs">Required</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{req.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Alert className="mt-8 bg-blue-50 border-blue-200">
          <Info className="w-4 h-4 text-blue-600" />
          <AlertDescription className="text-blue-900">
            <strong>Pro Tip:</strong> Use DigiLocker to instantly fetch your PAN and Aadhaar documents. This speeds up the process and eliminates manual uploads!
          </AlertDescription>
        </Alert>
      </div>

      {/* Step-by-Step Onboarding Process */}
      <div className="container mx-auto mb-16">
        <div className="text-center mb-12">
          <Badge className="mb-4 text-base px-4 py-2 bg-purple-100 text-purple-900 border-purple-200">
            <Rocket className="w-4 h-4 mr-2" />
            10-Step Process
          </Badge>
          <h2 className="text-4xl mb-4">Complete Onboarding Journey</h2>
          <p className="text-xl text-muted-foreground">
            Follow these simple steps to activate your demat account
          </p>
        </div>

        <div className="space-y-4">
          {onboarding_steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = activeStep === step.step;

            return (
              <Card
                key={step.step}
                className={`overflow-hidden transition-all cursor-pointer ${isActive ? 'shadow-lg border-2 border-primary' : 'hover:shadow-md'
                  }`}
                onClick={() => setActiveStep(isActive ? null : step.step)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="text-base px-3">Step {step.step}</Badge>
                        <h3 className="text-2xl">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-2">{step.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </span>
                      </div>
                    </div>

                    <ChevronRight className={`w-6 h-6 text-muted-foreground transition-transform ${isActive ? 'rotate-90' : ''}`} />
                  </div>

                  {isActive && (
                    <div className="mt-6 pt-6 border-t">
                      <h4 className="text-lg mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5 text-primary" />
                        What you'll need to do:
                      </h4>
                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="text-xl mb-2">Account Activation Complete!</h3>
              <p className="text-muted-foreground mb-4">
                After completing all steps, your account will be activated within 24 hours. You'll receive your account details via email and SMS, and can start trading immediately!
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-100 text-green-900">
                  <Mail className="w-3 h-3 mr-1" />
                  Email Confirmation
                </Badge>
                <Badge className="bg-blue-100 text-blue-900">
                  <Phone className="w-3 h-3 mr-1" />
                  SMS Alert
                </Badge>
                <Badge className="bg-purple-100 text-purple-900">
                  <Download className="w-3 h-3 mr-1" />
                  Welcome Kit
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">What You Get</h2>
          <p className="text-xl text-muted-foreground">
            Premium features included with your free demat account
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                    <IconComponent className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span>{feature.text}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="container mx-auto mb-16">
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-2">100%</h3>
            <p className="text-sm text-muted-foreground">SEBI Regulated & Secure</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-2">5L+</h3>
            <p className="text-sm text-muted-foreground">Active Demat Accounts</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-2">4.8★</h3>
            <p className="text-sm text-muted-foreground">User Rating</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl mb-2">Best</h3>
            <p className="text-sm text-muted-foreground">Trading Platform 2024</p>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <Card className="p-6">
            <h3 className="text-xl mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              How long does it take to open a demat account?
            </h3>
            <p className="text-muted-foreground pl-7">
              The entire online process takes approximately 15-20 minutes. Once submitted, your account will be activated within 24 hours after successful verification.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Is there any charge for opening a demat account?
            </h3>
            <p className="text-muted-foreground pl-7">
              No! Opening a demat account with TradeAI is completely free. There are zero account opening charges, and we also offer free lifetime AMC (Annual Maintenance Charges).
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Can I open a demat account without visiting a branch?
            </h3>
            <p className="text-muted-foreground pl-7">
              Yes! Our entire account opening process is 100% digital and paperless. You can complete everything from home using your smartphone or computer, including video KYC.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              What documents do I need for KYC?
            </h3>
            <p className="text-muted-foreground pl-7">
              You'll need your PAN card, Aadhaar card, a recent photograph, bank account details, and proof of income (optional). You can use DigiLocker for instant document verification.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Is my money safe in a demat account?
            </h3>
            <p className="text-muted-foreground pl-7">
              Absolutely! Your securities are held in dematerialized form with NSDL/CDSL depositories. TradeAI is SEBI registered and your investments are protected with bank-level security and insurance coverage.
            </p>
          </Card>
        </div>
      </div>

      {/* Final CTA */}
      <div className="container mx-auto">
        <Card className="p-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-12 h-12" />
            </div>
            <h2 className="text-4xl md:text-5xl">Ready to Start Investing?</h2>
            <p className="text-xl text-white/90">
              Join 5 lakh+ traders who trust TradeAI. Open your free demat account in just 10 minutes and start trading with AI-powered insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 text-lg px-8"
                onClick={() => setCurrentPage && setCurrentPage("startfreetrial")}
              >
                Open Free Account
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <Phone className="w-5 h-5" />
                Talk to Expert
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 pt-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>₹0 Opening Fee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>24hr Activation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>100% Paperless</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}