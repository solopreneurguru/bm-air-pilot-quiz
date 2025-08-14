"use client";
import { QuizProvider, useQuiz } from "@/context/quiz";
import Link from "next/link";

function ProgressBar() {
    const { answers } = useQuiz();
    const total = 5;
    const done = Object.keys(answers).length;
    const pct = Math.min(100, Math.round(done / total * 100));
    return (
        <div className="w-full h-2 bg-neutral-200 rounded-full">
            <div className="h-2 rounded-full bg-neutral-800" style={{ width: pct + "%" }} />
        </div>
    );
}

export default function QuizLayout({ children }: { children: React.ReactNode }) {
    return (
        <QuizProvider>
            <div className="space-y-4">
                <div className="pt-2">
                    <ProgressBar />
                </div>
                <div>{children}</div>
                <div className="pt-6 text-sm text-neutral-500">
                    <Link href="/">Back home</Link>
                </div>
            </div>
        </QuizProvider>
    );
} 