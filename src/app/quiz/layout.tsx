"use client";
import { QuizProvider, useQuiz } from "@/context/quiz";
import { Step } from "@/components/Step";
import Link from "next/link";
import { motion } from "framer-motion";

function ProgressBar() {
    const { answers } = useQuiz();
    const answeredCount = Object.keys(answers).length;
    return <Step n={answeredCount} total={5} />;
}

export default function QuizLayout({ children }: { children: React.ReactNode }) {
    return (
        <QuizProvider>
            <div className="space-y-6">
                {/* Compact header with progress */}
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                    <div className="space-y-4">
                        <h1 className="text-xl font-bold text-neutral-900">BMAir Pilot Program</h1>
                        <ProgressBar />
                    </div>
                </div>

                {/* Page content with motion */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 md:p-8"
                >
                    {children}
                </motion.div>

                {/* Navigation */}
                <div className="pt-2 text-sm text-neutral-300">
                    <Link href="/" className="hover:text-white transition-colors">Back home</Link>
                </div>
            </div>
        </QuizProvider>
    );
} 