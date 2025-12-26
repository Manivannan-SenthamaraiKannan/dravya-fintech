import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Smartphone,
  User,
  Mail,
  Lock,
  ArrowRight,
  Shield,
  TrendingUp,
  Sparkles,
  Eye,
  EyeOff,
  CheckCircle2,
  Chrome,
  Facebook,
  Apple
} from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { Badge } from "./ui/badge";

const Separator = ({ className = "" }: { className?: string }) => (
  <div className={`w-full ${className}`}>
    <hr className="border-t border-muted my-2" />
  </div>
);

type AuthMode = "signin" | "signup" | "forgot" | "otp";
type LoginMethod = "mobile" | "userid" | "guest";

export function SignIn() {
  const [authMode, setAuthMode] = useState<AuthMode>("signin");
  const [loginMethod, setLoginMethod] = useState<LoginMethod>("mobile");
  const [showPassword, setShowPassword] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // register handlers
  const [signupForm, setSignUPForm] = useState({ mobileNumber: "", name: "", email: "", password: "" })

  async function signupUser() {
    // register user form validatioin
    if (!signupForm.mobileNumber || !signupForm.name || !signupForm.email || !signupForm.password) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupForm),
      });
      const data = await res.json();
      alert(data.message || "Registration successful! Please sign in.");
      setSignUPForm({ mobileNumber: "", name: "", email: "", password: "" }); // Reset form
      setAuthMode("signin");
    }
    catch (error) {
      console.error("Signup Error:", error);
      alert("An error occurred during registration. Please try again.");
    }
  }

  // login handlers


  const handleSendOTP = () => {
    setAuthMode("otp");
  };

  const handleVerifyOTP = () => {
    console.log("OTP Verified:", otpValue);
    // Add your OTP verification logic here
    alert("OTP Verified Successfully!");
    setAuthMode("signin");
  };

  const renderMobileLogin = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="mobile">Mobile Number</Label>
        <div className="flex gap-2">
          <div className="w-20">
            <Input value="+91" disabled className="text-center" />
          </div>
          <Input
            id="mobile"
            type="tel"
            placeholder="9876543210"
            maxLength={10}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
          />
        </div>
      </div>

      {authMode === "signin" && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <button
              type="button"
              className="text-xs text-primary hover:underline"
              onClick={() => setAuthMode("forgot")}
            >
              Forgot?
            </button>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}

      <Button className="w-full gap-2" size="lg" onClick={handleSendOTP}>
        {authMode === "signin" ? "Sign In" : "Continue with OTP"}
        <ArrowRight className="w-4 h-4" />
      </Button>

      {authMode === "signin" && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            New to Dravya?{" "}
            <button
              type="button"
              className="text-primary hover:underline"
              onClick={() => setAuthMode("signup")}
            >
              Create Account
            </button>
          </p>
        </div>
      )}
    </div>
  );

  const renderUserIDLogin = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="userid">User ID</Label>
        <Input
          id="userid"
          type="text"
          placeholder="Enter your User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password-uid">Password</Label>
          <button
            type="button"
            className="text-xs text-primary hover:underline"
            onClick={() => setAuthMode("forgot")}
          >
            Forgot?
          </button>
        </div>
        <div className="relative">
          <Input
            id="password-uid"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <Button className="w-full gap-2" size="lg" onClick={handleSendOTP}>
        Sign In with OTP Verification
        <ArrowRight className="w-4 h-4" />
      </Button>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Don't have a User ID?{" "}
          <button
            type="button"
            className="text-primary hover:underline"
            onClick={() => setAuthMode("signup")}
          >
            Register Now
          </button>
        </p>
      </div>
    </div>
  );

  const renderGuestLogin = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2 py-4">
        <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl">Explore as Guest</h3>
        <p className="text-sm text-muted-foreground">
          Access limited features without creating an account
        </p>
      </div>

      <div className="space-y-3">
        <Button className="w-full gap-2 h-12" variant="outline">
          <Chrome className="w-5 h-5" />
          Continue with Google
        </Button>

        <Button className="w-full gap-2 h-12" variant="outline">
          <Facebook className="w-5 h-5 text-blue-600" />
          Continue with Facebook
        </Button>

        <Button className="w-full gap-2 h-12" variant="outline">
          <Apple className="w-5 h-5" />
          Continue with Apple
        </Button>
      </div>

      <div className="bg-muted/50 border rounded-lg p-4 space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <span>View live market data</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <span>Access learning resources</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle2 className="w-4 h-4 text-green-600" />
          <span>Explore platform features</span>
        </div>
      </div>

      <p className="text-xs text-center text-muted-foreground">
        Guest accounts have limited access. Create a full account to trade and invest.
      </p>
    </div>
  );

  const renderOTPVerification = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl">Verify OTP</h3>
        <p className="text-sm text-muted-foreground">
          Enter the 6-digit code sent to{" "}
          {loginMethod === "mobile" ? `+91 ${mobileNumber}` : userId}
        </p>
      </div>

      <div className="flex justify-center">
        <InputOTP maxLength={6} value={otpValue} onChange={setOtpValue}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div className="space-y-3">
        <Button
          className="w-full gap-2"
          size="lg"
          onClick={handleVerifyOTP}
          disabled={otpValue.length !== 6}
        >
          Verify & Continue
          <CheckCircle2 className="w-4 h-4" />
        </Button>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Didn't receive the code?
          </p>
          <Button variant="link" size="sm" onClick={handleSendOTP}>
            Resend OTP
          </Button>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-900">
        <strong>Note:</strong> OTP is valid for 5 minutes. Check your SMS or registered email.
      </div>
    </div>
  );

  const renderForgotPassword = () => (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl">Reset Password</h3>
        <p className="text-sm text-muted-foreground">
          Enter your registered mobile number or User ID to receive OTP
        </p>
      </div>

      <Tabs value={loginMethod} onValueChange={(v) => setLoginMethod(v as LoginMethod)} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="mobile" className="gap-2">
            <Smartphone className="w-4 h-4" />
            Mobile
          </TabsTrigger>
          <TabsTrigger value="userid" className="gap-2">
            <User className="w-4 h-4" />
            User ID
          </TabsTrigger>
        </TabsList>

        <TabsContent value="mobile" className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="reset-mobile">Mobile Number</Label>
            <div className="flex gap-2">
              <div className="w-20">
                <Input value="+91" disabled className="text-center" />
              </div>
              <Input
                id="reset-mobile"
                type="tel"
                placeholder="9876543210"
                maxLength={10}
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="userid" className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="reset-userid">User ID</Label>
            <Input
              id="reset-userid"
              type="text"
              placeholder="Enter your User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>
        </TabsContent>
      </Tabs>

      <Button className="w-full gap-2" size="lg" onClick={handleSendOTP}>
        Send OTP
        <ArrowRight className="w-4 h-4" />
      </Button>

      <div className="text-center">
        <button
          type="button"
          className="text-sm text-primary hover:underline"
          onClick={() => setAuthMode("signin")}
        >
          Back to Sign In
        </button>
      </div>
    </div>
  );

  const renderSignUp = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="signup-mobile">Mobile Number</Label>
        <div className="flex gap-2">
          <div className="w-20">
            <Input value="+91" disabled className="text-center" />
          </div>
          <Input
            id="signup-mobile"
            type="tel"
            placeholder="9876543210"
            maxLength={10}
            onChange={(e) => setSignUPForm({ ...signupForm, mobileNumber: e.target.value.replace(/\D/g, "") })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="signup-email">Full Name</Label>
        <Input
          id="fullname"
          type="name"
          placeholder="Your Full Name"
          onChange={(e) => setSignUPForm({ ...signupForm, name: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="signup-email">Email Address</Label>
        <Input
          id="signup-email"
          type="email"
          placeholder="your@email.com"
          onChange={(e) => setSignUPForm({ ...signupForm, email: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="signup-password">Create Password</Label>
        <div className="relative">
          <Input
            id="signup-password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a strong password"
            onChange={(e) => setSignUPForm({ ...signupForm, password: e.target.value })}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        <p className="text-xs text-muted-foreground">
          Min. 8 characters with uppercase, lowercase, number & special character
        </p>
      </div>

      <div className="flex items-start gap-2 text-xs">
        <input type="checkbox" id="terms" className="mt-0.5" required />
        <label htmlFor="terms" className="text-muted-foreground">
          I agree to the{" "}
          <button type="button" className="text-primary hover:underline">
            Terms & Conditions
          </button>{" "}
          and{" "}
          <button type="button" className="text-primary hover:underline">
            Privacy Policy
          </button>
        </label>
      </div>

      <Button className="w-full gap-2" size="lg" onClick={signupUser}>
        Create Account & Verify OTP
        <ArrowRight className="w-4 h-4" />
      </Button>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{" "}
          <button
            type="button"
            className="text-primary hover:underline"
            onClick={() => setAuthMode("signin")}
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-50 via-background to-blue-50 -z-10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40 -z-10" />

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-4">
            <Badge className="inline-flex items-center gap-2 bg-purple-100 text-purple-900 border-purple-200">
              <Sparkles className="w-4 h-4" />
              India's Most Trusted Trading Platform
            </Badge>
            <h1 className="text-5xl">
              Welcome to <br />
              <span className="bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Dravya Trading
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Start your investment journey with AI-powered insights and zero brokerage on delivery trades.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Zero Brokerage</h3>
                <p className="text-sm text-muted-foreground">
                  Trade equity delivery with zero brokerage charges
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg mb-1">Bank-Grade Security</h3>
                <p className="text-sm text-muted-foreground">
                  Your data and funds are protected with 256-bit encryption
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg mb-1">AI-Powered Insights</h3>
                <p className="text-sm text-muted-foreground">
                  Get intelligent trade signals powered by machine learning
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div>
              <div className="text-3xl">5L+</div>
              <p className="text-sm text-muted-foreground">Active Traders</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl">₹2000Cr+</div>
              <p className="text-sm text-muted-foreground">Daily Volume</p>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl">4.8★</div>
              <p className="text-sm text-muted-foreground">User Rating</p>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <Card className="p-8 shadow-2xl">
          {authMode === "otp" ? (
            renderOTPVerification()
          ) : authMode === "forgot" ? (
            renderForgotPassword()
          ) : authMode === "signup" ? (
            renderSignUp()
          ) : (
            <>
              <div className="text-center mb-6">
                <h2 className="text-3xl mb-2">Sign In</h2>
                <p className="text-muted-foreground">
                  Choose your preferred login method
                </p>
              </div>

              <Tabs value={loginMethod} onValueChange={(v) => setLoginMethod(v as LoginMethod)} className="mb-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="mobile" className="gap-2">
                    <Smartphone className="w-4 h-4" />
                    Mobile
                  </TabsTrigger>
                  <TabsTrigger value="userid" className="gap-2">
                    <User className="w-4 h-4" />
                    User ID
                  </TabsTrigger>
                  <TabsTrigger value="guest" className="gap-2">
                    <Sparkles className="w-4 h-4" />
                    Guest
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="mobile" className="mt-6">
                  {renderMobileLogin()}
                </TabsContent>

                <TabsContent value="userid" className="mt-6">
                  {renderUserIDLogin()}
                </TabsContent>

                <TabsContent value="guest" className="mt-6">
                  {renderGuestLogin()}
                </TabsContent>
              </Tabs>

              {loginMethod !== "guest" && (
                <>
                  <div className="relative my-6">
                    <Separator />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 text-xs text-muted-foreground">
                      OR
                    </span>
                  </div>

                  <div className="space-y-2">
                    <Button variant="outline" className="w-full gap-2" size="lg">
                      <Chrome className="w-5 h-5" />
                      Continue with Google
                    </Button>
                  </div>
                </>
              )}
            </>
          )}

          <div className="mt-6 pt-6 border-t text-center text-xs text-muted-foreground">
            <Shield className="w-4 h-4 inline mr-1" />
            Secured by 256-bit SSL encryption
          </div>
        </Card>

        {/* Mobile Stats */}
        <div className="lg:hidden space-y-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl">5L+</div>
              <p className="text-xs text-muted-foreground">Traders</p>
            </div>
            <div>
              <div className="text-2xl">₹2000Cr+</div>
              <p className="text-xs text-muted-foreground">Volume</p>
            </div>
            <div>
              <div className="text-2xl">4.8★</div>
              <p className="text-xs text-muted-foreground">Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;