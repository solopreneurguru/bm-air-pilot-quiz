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
            <div className="space-y-4">
                <div className="pt-2">
                    <ProgressBar />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    {children}
                </motion.div>
                <div className="pt-6 text-sm text-neutral-500">
                    <Link href="/" className="hover:text-neutral-700 transition-colors">Back home</Link>
                </div>
            </div>
        </QuizProvider>
    );
} 