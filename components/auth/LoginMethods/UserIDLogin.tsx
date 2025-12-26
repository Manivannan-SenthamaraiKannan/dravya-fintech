// components/auth/LoginMethods/UserIDLogin.tsx

import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "../../ui/button";

interface Props {
    userId: string;
    setUserId: (v: string) => void;
    password: string;
    setPassword: (v: string) => void;
    showPassword: boolean;
    setShowPassword: (v: boolean) => void;
    onSignIn: () => void;
    onForgot: () => void;
    onSignup: () => void;
}

export default function UserIDLogin({
    userId,
    setUserId,
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
                <Label>User ID</Label>
                <Input
                    type="text"
                    placeholder="Enter your User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
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
                Sign In with OTP Verification
                <ArrowRight className="w-4 h-4" />
            </Button>

            <p className="text-center text-sm">
                Don’t have an account?{" "}
                <button className="text-primary" onClick={onSignup}>
                    Register Now
                </button>
            </p>
        </div>
    );
}
