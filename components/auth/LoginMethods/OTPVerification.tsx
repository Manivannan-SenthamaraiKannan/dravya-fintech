// components/auth/LoginMethods/OTPVerification.tsx

import { Button } from "../../ui/button";
import { CheckCircle2, Shield } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../../ui/input-otp";

interface Props {
    otpValue: string;
    setOtpValue: (v: string) => void;
    loginMethod: string;
    mobileNumber: string;
    userId: string;
    onVerify: () => void;
    onResend: () => void;
}

export default function OTPVerification({
    otpValue,
    setOtpValue,
    loginMethod,
    mobileNumber,
    userId,
    onVerify,
    onResend,
}: Props) {
    return (
        <div className="space-y-6">
            <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-linear-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl">Verify OTP</h3>
                <p className="text-sm text-muted-foreground">
                    Enter the 6-digit code sent to{" "}
                    {loginMethod === "mobile"
                        ? `+91 ${mobileNumber}`
                        : `${userId}`}
                </p>
            </div>

            <div className="flex justify-center">
                <InputOTP maxLength={6} value={otpValue} onChange={setOtpValue}>
                    <InputOTPGroup>
                        {[0, 1, 2, 3, 4, 5].map(i => (
                            <InputOTPSlot key={i} index={i} />
                        ))}
                    </InputOTPGroup>
                </InputOTP>
            </div>

            <div className="space-y-3">
                <Button
                    className="w-full gap-2"
                    size="lg"
                    onClick={onVerify}
                    disabled={otpValue.length !== 6}
                >
                    Verify & Continue
                    <CheckCircle2 className="w-4 h-4" />
                </Button>

                <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                        Didn't receive the code?
                    </p>

                    <Button variant="link" size="sm" onClick={onResend}>
                        Resend OTP
                    </Button>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-900">
                <strong>Note:</strong> OTP is valid for 5 minutes.
            </div>
        </div>
    );
}
