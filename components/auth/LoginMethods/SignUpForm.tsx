// components/auth/Signup/SignUpForm.tsx

import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Button } from "../../ui/button";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

interface Props {
    signupForm: {
        mobileNumber: string;
        name: string;
        email: string;
        password: string;
    };
    setSignupForm: (v: any) => void;
    showPassword: boolean;
    setShowPassword: (v: boolean) => void;
    onSuccess: () => void;
}

export default function SignUpForm({
    signupForm,
    setSignupForm,
    showPassword,
    setShowPassword,
    onSuccess,
}: Props) {

    async function handleSignup() {
        if (!signupForm.mobileNumber || !signupForm.email || !signupForm.password || !signupForm.name) {
            alert("Please fill all fields");
            return;
        }

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(signupForm),
            });

            const data = await res.json();
            alert(data.message || "Account created!");
            onSuccess();
        } catch (err) {
            alert("Signup failed. Try again.");
        }
    }

    return (
        <div className="space-y-4">

            <div>
                <Label>Mobile Number</Label>
                <div className="flex gap-2">
                    <Input disabled value="+91" className="w-20 text-center" />
                    <Input
                        maxLength={10}
                        placeholder="9876543210"
                        onChange={(e) =>
                            setSignupForm({
                                ...signupForm,
                                mobileNumber: e.target.value.replace(/\D/g, ""),
                            })
                        }
                    />
                </div>
            </div>

            <div>
                <Label>Full Name</Label>
                <Input
                    placeholder="Your Full Name"
                    onChange={(e) =>
                        setSignupForm({ ...signupForm, name: e.target.value })
                    }
                />
            </div>

            <div>
                <Label>Email Address</Label>
                <Input
                    type="email"
                    placeholder="email@example.com"
                    onChange={(e) =>
                        setSignupForm({ ...signupForm, email: e.target.value })
                    }
                />
            </div>

            <div>
                <Label>Create Password</Label>
                <div className="relative">
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        onChange={(e) =>
                            setSignupForm({ ...signupForm, password: e.target.value })
                        }
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-2"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Min. 8 characters with uppercase, lowercase, number & special character
                </p>
            </div>

            <div className="flex text-xs gap-2">
                <input type="checkbox" id="terms" className="mt-1" required />
                <label htmlFor="terms">
                    I agree to the{" "}
                    <button className="text-primary">Terms & Conditions</button> and{" "}
                    <button className="text-primary">Privacy Policy</button>
                </label>
            </div>

            <Button className="w-full gap-2" size="lg" onClick={handleSignup}>
                Create Account & Verify OTP
                <ArrowRight className="w-4 h-4" />
            </Button>

            <p className="text-center text-sm">
                Already have an account?{" "}
                <button className="text-primary" onClick={onSuccess}>
                    Sign In
                </button>
            </p>
        </div>
    );
}
