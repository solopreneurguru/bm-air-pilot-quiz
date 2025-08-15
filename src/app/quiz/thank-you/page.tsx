import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ThankYou() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border p-8 space-y-6 text-center max-w-md">
                <div className="flex justify-center">
                    <CheckCircle2 className="w-16 h-16 text-green-500" />
                </div>
                <div className="space-y-2">
                    <h1 className="text-2xl md:text-3xl font-bold">Thanks — we'll be in touch!</h1>
                    <p className="text-neutral-700">Your pilot program preferences have been received.</p>
                </div>
                <Link
                    href="/"
                    className="inline-block rounded-xl border px-5 py-3 text-center font-medium hover:bg-neutral-50 active:scale-[.99] transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
} 