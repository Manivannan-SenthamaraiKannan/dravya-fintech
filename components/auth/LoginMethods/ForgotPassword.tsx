// components/auth/LoginMethods/ForgotPassword.tsx

import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Smartphone, User, ArrowRight, Lock } from "lucide-react";

interface Props {
    loginMethod: string;
    setLoginMethod: (v: any) => void;
    mobileNumber: string;
    setMobileNumber: (v: string) => void;
    userId: string;
    setUserId: (v: string) => void;
    onSendOTP: () => void;
    onBack: () => void;
}

export default function ForgotPassword({
    loginMethod,
    setLoginMethod,
    mobileNumber,
    setMobileNumber,
    userId,
    setUserId,
    onSendOTP,
    onBack,
}: Props) {
    return (
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

            <Tabs value={loginMethod} onValueChange={setLoginMethod}>
                <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="mobile">
                        <Smartphone className="w-4 h-4" /> Mobile
                    </TabsTrigger>
                    <TabsTrigger value="userid">
                        <User className="w-4 h-4" /> User ID
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="mobile" className="space-y-4 mt-4">
                    <Label>Mobile Number</Label>
                    <div className="flex gap-2">
                        <Input disabled className="w-20 text-center" value="+91" />
                        <Input
                            value={mobileNumber}
                            maxLength={10}
                            placeholder="9876543210"
                            onChange={(e) =>
                                setMobileNumber(e.target.value.replace(/\D/g, ""))
                            }
                        />
                    </div>
                </TabsContent>

                <TabsContent value="userid" className="mt-4 space-y-4">
                    <Label>User ID</Label>
                    <Input
                        type="text"
                        placeholder="Enter your User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </TabsContent>
            </Tabs>

            <Button className="w-full gap-2" size="lg" onClick={onSendOTP}>
                Send OTP <ArrowRight className="w-4 h-4" />
            </Button>

            <button
                className="text-center w-full text-primary text-sm hover:underline"
                onClick={onBack}
            >
                Back to Sign In
            </button>
        </div>
    );
}
