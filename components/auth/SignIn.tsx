// components/auth/SignIn.tsx
import { useState } from "react";
import { Card } from "../ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { Smartphone, User, Sparkles, Chrome, Shield } from "lucide-react";
import { Badge } from "../ui/badge";

// child components
import MobileLogin from "./LoginMethods/MobileLogin";
import UserIDLogin from "./LoginMethods/UserIDLogin";
import GuestLogin from "./LoginMethods/GuestLogin";
import ForgotPassword from "./LoginMethods/ForgotPassword";
import OTPVerification from "./LoginMethods/OTPVerification";
import SignUpForm from "./LoginMethods/SignUpForm";

type AuthMode = "signin" | "signup" | "forgot" | "otp";
type LoginMethod = "mobile" | "userid" | "guest";

export default function SignIn() {
    const [authMode, setAuthMode] = useState<AuthMode>("signin");
    const [loginMethod, setLoginMethod] = useState<LoginMethod>("mobile");

    const [mobileNumber, setMobileNumber] = useState("");
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [otpValue, setOtpValue] = useState("");

    // Signup state
    const [signupForm, setSignupForm] = useState({
        mobileNumber: "",
        name: "",
        email: "",
        password: "",
    });

    const handleSendOTP = () => setAuthMode("otp");

    const handleVerifyOTP = () => {
        alert("OTP Verified Successfully!");
        setAuthMode("signin");
    };

    return (
        <div className="min-h-screen pt-20 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8">

                {/* RIGHT SIDE - AUTH CARD */}
                <Card className="p-8 shadow-2xl">

                    {authMode === "otp" && (
                        <OTPVerification
                            otpValue={otpValue}
                            setOtpValue={setOtpValue}
                            loginMethod={loginMethod}
                            mobileNumber={mobileNumber}
                            userId={userId}
                            onVerify={handleVerifyOTP}
                            onResend={handleSendOTP}
                        />
                    )}

                    {authMode === "forgot" && (
                        <ForgotPassword
                            loginMethod={loginMethod}
                            setLoginMethod={setLoginMethod}
                            mobileNumber={mobileNumber}
                            setMobileNumber={setMobileNumber}
                            userId={userId}
                            setUserId={setUserId}
                            onSendOTP={handleSendOTP}
                            onBack={() => setAuthMode("signin")}
                        />
                    )}

                    {authMode === "signup" && (
                        <SignUpForm
                            signupForm={signupForm}
                            setSignupForm={setSignupForm}
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                            onSuccess={() => setAuthMode("signin")}
                        />
                    )}

                    {authMode === "signin" && (
                        <>
                            <h2 className="text-center text-3xl mb-6">Sign In</h2>

                            <Tabs
                                value={loginMethod}
                                onValueChange={(v) => setLoginMethod(v as LoginMethod)}
                                className="mb-6"
                            >
                                <TabsList className="grid grid-cols-3">
                                    <TabsTrigger value="mobile">
                                        <Smartphone className="w-4 h-4" /> Mobile
                                    </TabsTrigger>

                                    <TabsTrigger value="userid">
                                        <User className="w-4 h-4" /> User ID
                                    </TabsTrigger>

                                    <TabsTrigger value="guest">
                                        <Sparkles className="w-4 h-4" /> Guest
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="mobile">
                                    <MobileLogin
                                        mobileNumber={mobileNumber}
                                        setMobileNumber={setMobileNumber}
                                        password={password}
                                        setPassword={setPassword}
                                        showPassword={showPassword}
                                        setShowPassword={setShowPassword}
                                        onSignIn={handleSendOTP}
                                        onForgot={() => setAuthMode("forgot")}
                                        onSignup={() => setAuthMode("signup")}
                                    />
                                </TabsContent>

                                <TabsContent value="userid">
                                    <UserIDLogin
                                        userId={userId}
                                        setUserId={setUserId}
                                        password={password}
                                        setPassword={setPassword}
                                        showPassword={showPassword}
                                        setShowPassword={setShowPassword}
                                        onSignIn={handleSendOTP}
                                        onForgot={() => setAuthMode("forgot")}
                                        onSignup={() => setAuthMode("signup")}
                                    />
                                </TabsContent>

                                <TabsContent value="guest">
                                    <GuestLogin />
                                </TabsContent>
                            </Tabs>
                        </>
                    )}

                    <div className="mt-6 pt-6 border-t text-center text-xs text-muted-foreground">
                        <Shield className="w-4 h-4 inline" /> Secured by 256-bit SSL
                    </div>
                </Card>
            </div>
        </div>
    );
}

