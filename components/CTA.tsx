import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTA({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

                    <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                        <h2 className="text-4xl md:text-5xl">Ready to Transform Your Trading?</h2>
                        <p className="text-xl opacity-90">
                            Join 5 lakh+ traders who are already using AI to make smarter investment decisions
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button size="lg" variant="secondary" className="gap-2"
                            onClick={() => setCurrentPage("startfreetrial")}>
                                Start Free Trial
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10"
                            onClick={() => setCurrentPage("watchdemo")}>
                                Schedule Demo
                            </Button>
                        </div>
                        <p className="text-sm opacity-75 pt-2">
                            No credit card required • 14-day free trial • Cancel anytime
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CTA;