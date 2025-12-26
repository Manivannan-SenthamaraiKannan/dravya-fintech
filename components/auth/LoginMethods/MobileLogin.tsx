// components/auth/LoginMethods/MobileLogin.tsx
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "../../ui/button";

interface Props {
    mobileNumber: string;
    setMobileNumber: (v: string) => void;
    password: string;
    setPassword: (v: string) => void;
    showPassword: boolean;
    setShowPassword: (v: boolean) => void;
    onSignIn: () => void;
    onForgot: () => void;
    onSignup: () => void;
}

export default function MobileLogin({
    mobileNumber,
    setMobileNumber,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    onSignIn,
    onForgot,
    onSignup,
}: Props) {
    return (
        <div className="space-y-4">

            <div>
                <Label>Mobile Number</Label>
                <div className="flex gap-2">
                    <Input disabled value="+91" className="w-20 text-center" />
                    <Input
                        value={mobileNumber}
                        maxLength={10}
                        onChange={(e) =>
                            setMobileNumber(e.target.value.replace(/\D/g, ""))
                        }
                        placeholder="9876543210"
                    />
                </div>
            </div>

            <div>
                <div className="flex justify-between">
                    <Label>Password</Label>
                    <button className="text-xs text-primary" onClick={onForgot}>
                        Forgot?
                    </button>
                </div>

                <div className="relative">
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        type="button"
                        className="absolute right-3 top-2"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                </div>
            </div>

            <Button className="w-full gap-2" onClick={onSignIn}>
                Sign In <ArrowRight className="w-4 h-4" />
            </Button>

            <p className="text-center text-sm">
                New to Dravya?{" "}
                <button className="text-primary" onClick={onSignup}>
                    Create Account
                </button>
            </p>
        </div>
    );
}
