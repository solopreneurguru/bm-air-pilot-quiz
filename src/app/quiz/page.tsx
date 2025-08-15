import Link from "next/link";

export default function QuizIntro() {
    return (
        <div className="space-y-6">
            <div className="text-center space-y-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white">Ready to get started?</h1>
                <p className="text-neutral-200 text-base leading-relaxed">
                    Complete our quick 5-question survey to begin your BMAir pilot program application.
                </p>
            </div>

            <div className="pt-4">
                <Link
                    href="/quiz/start"
                    className="block w-full rounded-2xl bg-sky-500 text-white px-6 py-4 text-center text-lg font-semibold hover:bg-sky-600 active:scale-[0.99] transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 shadow-lg"
                >
                    Start Quiz
                </Link>
            </div>
        </div>
    );
} 