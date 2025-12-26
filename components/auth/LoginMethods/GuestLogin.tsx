// components/auth/LoginMethods/GuestLogin.tsx

import { Button } from "../../ui/button";
import { Chrome, Apple, Facebook, Sparkles, CheckCircle2 } from "lucide-react";

export default function GuestLogin() {
    return (
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
}
