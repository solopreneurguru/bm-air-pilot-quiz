"use client";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function ThankYou() {
    return (
        <div className="text-center space-y-6">
            <div className="flex justify-center">
                <CheckCircle2 className="h-16 w-16 text-sky-500" />
            </div>

            <div className="space-y-3">
                <h1 className="text-2xl md:text-3xl font-bold text-neutral-900">Thank you for your application!</h1>
                <p className="text-neutral-600 text-base max-w-md mx-auto">
                    We&apos;ve received your BMAir pilot program application and will be in touch within 24 hours to discuss next steps.
                </p>
            </div>

            <div className="pt-4">
                <Link
                    href="/"
                    className="inline-flex items-center px-6 py-3 rounded-2xl border border-neutral-200 text-neutral-700 font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
} 